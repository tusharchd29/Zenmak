"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { assertCanAccessRow, assertCanUseCustomer } from "@/lib/access";

// Tables editable through the generic inline-edit widget. Anything not
// listed here is refused, even if the caller somehow supplies its name.
// Tables not listed here (e.g. av_brochures) have no rep_id column, so a
// non-owner can never touch them through this path — see OWNER_ONLY_TABLES.
const REP_SCOPED_TABLES = new Set([
  "av_customers",
  "av_visits",
  "av_orders",
  "av_advances",
  "av_expenses",
  "av_tours",
  "av_travel_logs",
  "av_product_trials",
  "av_competitor_intel",
]);

// Tables with no per-rep owner — shared resources that only the owner may
// edit or delete.
const OWNER_ONLY_TABLES = new Set(["av_brochures"]);

// Shared, team-wide reference data (not owned by any one rep, not
// owner-gated either) — anyone on the team can maintain it, like the
// product catalog everyone orders from.
const SHARED_EDITABLE_TABLES = new Set(["av_products"]);

const EDITABLE_TABLES = new Set([
  ...REP_SCOPED_TABLES,
  ...OWNER_ONLY_TABLES,
  ...SHARED_EDITABLE_TABLES,
]);

const NOT_ALLOWED_MESSAGE = "Record not found, or you don't have permission to change it.";

// The only columns the inline-edit forms change, per table. Anything else in
// `data` is refused: the payload comes from the browser, so without this a
// rep could set e.g. an order's status/fulfilled_by (gaming targets) or a
// travel log's distance_km/rate_per_km (inflating reimbursement) on their
// own rows. Travel logs, tour stops and order status have their own
// validated actions; tables listed with no columns are delete-only here.
const EDITABLE_COLUMNS: Record<string, readonly string[]> = {
  av_customers: ["name", "phone", "address", "segment", "zone", "state"],
  av_visits: ["visit_date", "purpose", "discussion_summary", "follow_up_required", "next_visit_date"],
  av_orders: ["product", "quantity", "amount", "notes", "payment_due_date"],
  av_advances: ["amount"],
  av_expenses: ["category", "amount", "note", "expense_date"],
  av_tours: ["week_start", "end_date", "zone", "plan_notes"],
  av_travel_logs: [],
  av_product_trials: ["product", "trial_date", "outcome_notes"],
  av_competitor_intel: ["competitor_name", "competitor_product", "notes"],
  av_brochures: ["title", "url"],
  av_products: ["name", "category", "default_unit", "pack_size", "default_price", "active"],
};

export async function updateEntry(
  table: string,
  id: string,
  data: Record<string, unknown>,
  revalidate: string[] = [],
) {
  const session = await getSession();
  if (!session) redirect("/login");

  if (!EDITABLE_TABLES.has(table)) {
    throw new Error("This record type can't be edited.");
  }
  if (!id) throw new Error("Missing record id");

  const allowed = new Set(EDITABLE_COLUMNS[table] ?? []);
  const extra = Object.keys(data).filter((k) => !allowed.has(k));
  if (extra.length > 0) throw new Error(`These fields can't be edited here: ${extra.join(", ")}`);
  if (Object.keys(data).length === 0) throw new Error("Nothing to save.");

  // Same floor the dedicated create actions enforce (e.g. createExpense,
  // createAdvance) — the generic inline-edit widget shares these fields but
  // previously skipped this check entirely.
  if ("amount" in data && data.amount !== null && typeof data.amount === "number" && data.amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  if (session.role !== "owner") {
    if (OWNER_ONLY_TABLES.has(table)) {
      throw new Error(NOT_ALLOWED_MESSAGE);
    }
    // A rep can never reassign a record to someone else.
    delete (data as Record<string, unknown>).rep_id;
  }

  let query = supabaseAdmin.from(table).update(data).eq("id", id);
  if (session.role !== "owner" && REP_SCOPED_TABLES.has(table)) {
    query = query.eq("rep_id", session.userId);
  }

  const { data: updated, error } = await query.select("id");
  if (error) throw new Error(error.message);
  if (!updated || updated.length === 0) {
    throw new Error(NOT_ALLOWED_MESSAGE);
  }

  for (const path of revalidate) {
    revalidatePath(path);
  }
  return { ok: true };
}

export async function deleteEntry(table: string, id: string, revalidate: string[] = []) {
  const session = await getSession();
  if (!session) redirect("/login");

  if (!EDITABLE_TABLES.has(table)) {
    throw new Error("This record type can't be deleted.");
  }
  if (!id) throw new Error("Missing record id");

  if (session.role !== "owner" && OWNER_ONLY_TABLES.has(table)) {
    throw new Error(NOT_ALLOWED_MESSAGE);
  }

  let query = supabaseAdmin.from(table).delete().eq("id", id);
  if (session.role !== "owner" && REP_SCOPED_TABLES.has(table)) {
    query = query.eq("rep_id", session.userId);
  }

  const { data: deleted, error } = await query.select("id");
  if (error) throw new Error(error.message);
  if (!deleted || deleted.length === 0) {
    throw new Error(NOT_ALLOWED_MESSAGE);
  }

  for (const path of revalidate) {
    revalidatePath(path);
  }
  return { ok: true };
}
