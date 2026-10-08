"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { assertCanAccessRow, assertCanUseCustomer } from "@/lib/access";
import { parsePositive } from "@/lib/validate";

export async function createAdvance(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");

  const customer_id = String(formData.get("customer_id") || "");
  const amount = parsePositive(formData.get("amount"));

  if (!customer_id || amount === null) {
    return { ok: false, message: "Customer and a positive amount are required" };
  }
  try {
    await assertCanUseCustomer(session, customer_id);
  } catch {
    return { ok: false, message: "Record not found." };
  }

  const { error } = await supabaseAdmin.from("av_advances").insert({
    customer_id,
    rep_id: session.userId,
    amount,
    status: "pending",
  });

  if (error) return { ok: false, message: error.message };

  revalidatePath("/advances");
  return { ok: true };
}

export async function settleAdvance(advanceId: string) {
  const session = await getSession();
  if (!session) redirect("/login");
  try {
    await assertCanAccessRow(session, "av_advances", advanceId);
  } catch {
    return { ok: false, message: "Record not found." };
  }

  // Only a pending advance can be settled — a second tap must not move
  // settled_at.
  const { data: settled, error } = await supabaseAdmin
    .from("av_advances")
    .update({ status: "settled", settled_at: new Date().toISOString() })
    .eq("id", advanceId)
    .eq("status", "pending")
    .select("id");

  if (error) return { ok: false, message: error.message };
  if (!settled || settled.length === 0) return { ok: false, message: "This advance is already settled." };

  revalidatePath("/advances");
  return { ok: true };
}
