"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { attachPhotoIfPresent } from "@/lib/photos";
import { todayIST } from "@/lib/date-range";
import { parsePositive } from "@/lib/validate";

export async function createExpense(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");

  const category = String(formData.get("category") || "").trim();
  const amount = parsePositive(formData.get("amount"));
  const note = String(formData.get("note") || "").trim() || null;
  const expense_date =
    String(formData.get("expense_date") || "") || todayIST();

  if (!category || amount === null) {
    return { ok: false, message: "Category and a positive amount are required" };
  }

  const { data: inserted, error } = await supabaseAdmin
    .from("av_expenses")
    .insert({
      rep_id: session.userId,
      category,
      amount,
      note,
      expense_date,
    })
    .select("id")
    .single();

  if (error) return { ok: false, message: error.message };

  try {
    await attachPhotoIfPresent(formData, "photo", "expense", inserted.id, session.userId);
  } catch (err) {
    revalidatePath("/expenses");
    return {
      ok: false,
      message: `Expense saved, but the receipt photo didn't upload: ${err instanceof Error ? err.message : "unknown error"}.`,
    };
  }

  revalidatePath("/expenses");
  return { ok: true };
}
