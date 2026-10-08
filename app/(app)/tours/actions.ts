"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { canViewCustomer } from "@/lib/access";
import { getT } from "@/lib/i18n";

export async function createTourPlan(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();

  const week_start = String(formData.get("week_start") || "");
  const end_date = String(formData.get("end_date") || "") || null;
  const zone = String(formData.get("zone") || "").trim() || null;
  const states = formData.getAll("states").map(String).filter(Boolean);
  const plan_notes = String(formData.get("plan_notes") || "").trim() || null;

  if (!week_start) return { ok: false, message: t("From date is required") };
  if (end_date && end_date < week_start) {
    return { ok: false, message: t("To date must be on or after the from date") };
  }

  const { error } = await supabaseAdmin.from("av_tours").insert({
    rep_id: session.userId,
    week_start,
    end_date,
    zone,
    states,
    plan_notes,
  });

  if (error) return { ok: false, message: error.message };

  revalidatePath("/tours");
  return { ok: true };
}

/** True if this session may act on the given tour — the owner may touch
 * any tour, a rep only their own. Used before every write to av_tour_stops,
 * since those don't go through the generic rep-scoped updateEntry path. */
async function canActOnTour(session: { role: string; userId: string }, tourId: string) {
  if (session.role === "owner") return true;
  const { data: tour } = await supabaseAdmin
    .from("av_tours")
    .select("rep_id")
    .eq("id", tourId)
    .maybeSingle();
  return !!tour && tour.rep_id === session.userId;
}

export async function createTourStop(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();

  const tour_id = String(formData.get("tour_id") || "");
  const customer_id = String(formData.get("customer_id") || "") || null;
  const planned_date = String(formData.get("planned_date") || "");
  const notes = String(formData.get("notes") || "").trim() || null;

  if (!tour_id || !planned_date) return { ok: false, message: t("A planned date is required") };
  if (!(await canActOnTour(session, tour_id))) {
    return { ok: false, message: t("Tour plan not found") };
  }
  // A rep can only plan stops at their own customers.
  if (customer_id && !(await canViewCustomer(session, customer_id))) {
    return { ok: false, message: t("Customer not found") };
  }

  // New stop goes to the end of that day's list.
  const { data: existing } = await supabaseAdmin
    .from("av_tour_stops")
    .select("sort_order")
    .eq("tour_id", tour_id)
    .eq("planned_date", planned_date)
    .order("sort_order", { ascending: false })
    .limit(1);
  const nextOrder = (existing?.[0]?.sort_order ?? -1) + 1;

  const { error } = await supabaseAdmin
    .from("av_tour_stops")
    .insert({ tour_id, customer_id, planned_date, notes, sort_order: nextOrder });
  if (error) return { ok: false, message: error.message };

  revalidatePath("/tours");
  return { ok: true };
}

/** Swaps a stop's sort_order with its neighbor on the same day, moving it
 * up or down within that day's list. No-ops quietly if already at an end. */
export async function reorderTourStop(
  stopId: string,
  tourId: string,
  direction: "up" | "down",
) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (!(await canActOnTour(session, tourId))) return { ok: false, message: t("Not found") };

  const { data: stop } = await supabaseAdmin
    .from("av_tour_stops")
    .select("id, planned_date, sort_order")
    .eq("id", stopId)
    .eq("tour_id", tourId)
    .maybeSingle();
  if (!stop) return { ok: false, message: t("Stop not found") };

  const { data: dayStops } = await supabaseAdmin
    .from("av_tour_stops")
    .select("id, sort_order")
    .eq("tour_id", tourId)
    .eq("planned_date", stop.planned_date)
    .order("sort_order", { ascending: true });
  const list = dayStops ?? [];
  const idx = list.findIndex((s) => s.id === stopId);
  const swapIdx = direction === "up" ? idx - 1 : idx + 1;
  if (idx === -1 || swapIdx < 0 || swapIdx >= list.length) return { ok: true }; // already at the end

  const a = list[idx];
  const b = list[swapIdx];
  const [{ error: e1 }, { error: e2 }] = await Promise.all([
    supabaseAdmin.from("av_tour_stops").update({ sort_order: b.sort_order }).eq("id", a.id).eq("tour_id", tourId),
    supabaseAdmin.from("av_tour_stops").update({ sort_order: a.sort_order }).eq("id", b.id).eq("tour_id", tourId),
  ]);
  if (e1 || e2) return { ok: false, message: (e1 || e2)?.message };

  revalidatePath("/tours");
  return { ok: true };
}

export async function toggleTourStop(stopId: string, tourId: string, completed: boolean) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (!(await canActOnTour(session, tourId))) return { ok: false, message: t("Not found") };

  // Scoped to the tour just checked, so a stop id from someone else's tour
  // can't be changed by passing your own tour id.
  const { data: changed, error } = await supabaseAdmin
    .from("av_tour_stops")
    .update({ completed, completed_at: completed ? new Date().toISOString() : null })
    .eq("id", stopId)
    .eq("tour_id", tourId)
    .select("id");
  if (error) return { ok: false, message: error.message };
  if (!changed || changed.length === 0) return { ok: false, message: t("Stop not found") };

  revalidatePath("/tours");
  return { ok: true };
}

export async function updateTourStates(tourId: string, states: string[]) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (!(await canActOnTour(session, tourId))) return { ok: false, message: t("Tour plan not found") };

  const { error } = await supabaseAdmin.from("av_tours").update({ states }).eq("id", tourId);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/tours");
  return { ok: true };
}

export async function deleteTourStop(stopId: string, tourId: string) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (!(await canActOnTour(session, tourId))) return { ok: false, message: t("Not found") };

  const { data: deleted, error } = await supabaseAdmin
    .from("av_tour_stops")
    .delete()
    .eq("id", stopId)
    .eq("tour_id", tourId)
    .select("id");
  if (error) return { ok: false, message: error.message };
  if (!deleted || deleted.length === 0) return { ok: false, message: t("Stop not found") };

  revalidatePath("/tours");
  return { ok: true };
}
