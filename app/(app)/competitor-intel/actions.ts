"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { assertCanAccessRow, assertCanUseCustomer } from "@/lib/access";
import { getT } from "@/lib/i18n";

export async function createCompetitorIntel(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();

  const customer_id = String(formData.get("customer_id") || "");
  const competitor_name = String(formData.get("competitor_name") || "").trim();
  const competitor_product = String(formData.get("competitor_product") || "").trim() || null;
  const notes = String(formData.get("notes") || "").trim() || null;

  if (!customer_id || !competitor_name) {
    return { ok: false, message: t("Customer and competitor name are required") };
  }
  try {
    await assertCanUseCustomer(session, customer_id);
  } catch {
    return { ok: false, message: t("Record not found.") };
  }

  const { error } = await supabaseAdmin.from("av_competitor_intel").insert({
    customer_id,
    rep_id: session.userId,
    competitor_name,
    competitor_product,
    notes,
  });

  if (error) return { ok: false, message: error.message };

  revalidatePath("/competitor-intel");
  return { ok: true };
}
