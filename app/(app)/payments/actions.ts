"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { assertCanAccessRow, assertCanUseCustomer } from "@/lib/access";

export async function recordPayment(
  orderId: string,
  customerId: string,
  amount: number,
  notes?: string,
) {
  const session = await getSession();
  if (!session) redirect("/login");

  if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
    throw new Error("Enter a valid amount");
  }
  await assertCanAccessRow(session, "av_orders", orderId);
  await assertCanUseCustomer(session, customerId);
  // The payment must be against this order's own customer — both ids come
  // from the browser, and a mismatch would skew each customer's dues.
  const { data: order } = await supabaseAdmin.from("av_orders").select("customer_id").eq("id", orderId).maybeSingle();
  if (!order || order.customer_id !== customerId) throw new Error("Record not found.");

  const { error } = await supabaseAdmin.from("av_payments").insert({
    order_id: orderId,
    customer_id: customerId,
    rep_id: session.userId,
    amount,
    notes: notes?.trim() || null,
  });

  if (error) throw new Error(error.message);

  revalidatePath("/payments");
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function updatePaymentDueDate(orderId: string, dueDate: string | null) {
  const session = await getSession();
  if (!session) redirect("/login");
  await assertCanAccessRow(session, "av_orders", orderId);

  const { error } = await supabaseAdmin
    .from("av_orders")
    .update({ payment_due_date: dueDate })
    .eq("id", orderId);

  if (error) throw new Error(error.message);

  revalidatePath("/payments");
  return { ok: true };
}
