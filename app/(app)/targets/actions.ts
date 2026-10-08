"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { parsePositive } from "@/lib/validate";
import { getT } from "@/lib/i18n";

export async function setTarget(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "owner") redirect("/dashboard");
  const { t } = await getT();

  const rep_id = String(formData.get("rep_id") || "");
  const target_amount = parsePositive(formData.get("target_amount"));
  const period_month = String(formData.get("period_month") || "");

  if (!rep_id || !/^\d{4}-\d{2}$/.test(period_month) || target_amount === null) {
    return { ok: false, message: t("Pick a rep, a month and a target above zero") };
  }

  const { error } = await supabaseAdmin
    .from("av_targets")
    .upsert(
      { rep_id, period_month: `${period_month}-01`, target_amount },
      { onConflict: "rep_id,period_month" },
    );

  if (error) return { ok: false, message: error.message };

  revalidatePath("/targets");
  revalidatePath("/dashboard");
  return { ok: true };
}
