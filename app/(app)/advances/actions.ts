"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { assertCanAccessRow, assertCanUseCustomer } from "@/lib/access";

export async function createAdvance(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");

  const customer_id = String(formData.get("customer_id") || "");
  const amount = Number(formData.get("amount") || 0);

  if (!customer_id || amount <= 0) {
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

  const { error } = await supabaseAdmin
    .from("av_advances")
    .update({ status: "settled", settled_at: new Date().toISOString() })
    .eq("id", advanceId);

  if (error) return { ok: false, message: error.message };

  revalidatePath("/advances");
  return { ok: true };
}
