"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { ZONES, type Zone } from "@/lib/utils";

/**
 * Moves a state to a different zone on the reference/config table
 * (av_zone_states). Owner-only — this is a planning reference, not
 * something a rep should be able to change. Deliberately not wired into
 * av_customers.zone, which stays its own direct selection.
 */
export async function updateStateZone(stateId: string, zone: Zone) {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role !== "owner") {
    return { ok: false, message: "Only the owner can move states between zones." };
  }
  if (!ZONES.includes(zone)) {
    return { ok: false, message: "Not a valid zone." };
  }

  const { error } = await supabaseAdmin.from("av_zone_states").update({ zone }).eq("id", stateId);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/zones");
  return { ok: true };
}
