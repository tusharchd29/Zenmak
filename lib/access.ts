import { msg } from "@/lib/i18n-shared";
import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Session } from "@/lib/session";

// Tables whose rows belong to a rep via a `rep_id` column.
// av_brochures has no owner column: it is shared content that only the owner may change.
const OWNER_ONLY_TABLES = new Set(["av_brochures"]);

/**
 * Throws unless the session may touch the given row.
 * - Owner: allowed for everything.
 * - Rep: only rows where rep_id equals their own user id.
 */
export async function assertCanAccessRow(session: Session, table: string, id: string) {
  if (session.role === "owner") return;
  if (OWNER_ONLY_TABLES.has(table)) throw new Error(msg("Only the owner can change this."));

  const { data, error } = await supabaseAdmin
    .from(table)
    .select("rep_id")
    .eq("id", id)
    .maybeSingle();

  if (error || !data || data.rep_id !== session.userId) {
    // Same message whether the row is missing or someone else's, so IDs can't be probed.
    throw new Error(msg("Record not found."));
  }
}

/** Throws unless the customer belongs to this rep (owner passes). */
export async function assertCanUseCustomer(session: Session, customerId: string) {
  await assertCanAccessRow(session, "av_customers", customerId);
}

/** Returns true if the session may view the customer. Used by page loaders. */
export async function canViewCustomer(session: Session, customerId: string) {
  try {
    await assertCanAccessRow(session, "av_customers", customerId);
    return true;
  } catch {
    return false;
  }
}
