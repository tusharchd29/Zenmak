"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { createSession, getSession } from "@/lib/session";
import { getT } from "@/lib/i18n";
import { msg, type TFunction } from "@/lib/i18n-shared";

/**
 * Renames a team member (owner or rep). Deliberately its own action rather
 * than routed through the generic updateEntry — av_users also holds `pin`
 * and `role`, and that path's REP_SCOPED_TABLES logic assumes a `rep_id`
 * column, which av_users doesn't have (a user IS the rep). Owner-only:
 * these are the names everyone else's orders, expenses, targets, and
 * reports show, not something a rep should self-serve edit.
 */
export async function updateUserName(userId: string, name: string) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (session.role !== "owner") {
    return { ok: false, message: t("Only the owner can rename team members.") };
  }

  const trimmed = name.trim();
  if (!trimmed) return { ok: false, message: t("Name can't be empty.") };
  if (trimmed.length > 60) return { ok: false, message: t("Name is too long.") };

  const { error } = await supabaseAdmin.from("av_users").update({ name: trimmed }).eq("id", userId);
  if (error) return { ok: false, message: error.message };

  // The owner's own name is also cached in their signed session cookie
  // (used for instant greetings without a DB round trip) — refresh it so a
  // self-rename shows up immediately instead of only after the next login.
  if (userId === session.userId) {
    await createSession({ ...session, name: trimmed });
  }

  // Names are read all over the app — dashboard greeting, orders/expenses
  // attribution, reports, advances, targets — so revalidate broadly rather
  // than just /team.
  revalidatePath("/", "layout");
  return { ok: true };
}

const PIN_RULE = /^\d{4,8}$/;
const PIN_MESSAGE = msg("PIN must be 4 to 8 digits.");

function pinError(error: { code?: string; message: string }, t: TFunction) {
  // av_users.pin is unique — two people can't share a PIN (login looks
  // people up by PIN alone).
  return error.code === "23505" ? t("That PIN is already used by someone else — pick another.") : error.message;
}

/** Owner-only: add a rep (or another owner) with their login PIN. */
export async function addTeamMember(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (session.role !== "owner") return { ok: false, message: t("Only the owner can add team members.") };

  const name = String(formData.get("name") || "").trim();
  const pin = String(formData.get("pin") || "").trim();
  const role = formData.get("role") === "owner" ? "owner" : "rep";

  if (!name) return { ok: false, message: t("Name is required.") };
  if (name.length > 60) return { ok: false, message: t("Name is too long.") };
  if (!PIN_RULE.test(pin)) return { ok: false, message: t(PIN_MESSAGE) };

  const { error } = await supabaseAdmin.from("av_users").insert({ name, pin, role, active: true });
  if (error) return { ok: false, message: pinError(error, t) };

  revalidatePath("/team");
  return { ok: true };
}

/** Owner-only: set a new login PIN for anyone (including yourself). */
export async function setUserPin(userId: string, pin: string) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (session.role !== "owner") return { ok: false, message: t("Only the owner can change PINs.") };
  if (!PIN_RULE.test(pin)) return { ok: false, message: t(PIN_MESSAGE) };

  const { data, error } = await supabaseAdmin.from("av_users").update({ pin }).eq("id", userId).select("id");
  if (error) return { ok: false, message: pinError(error, t) };
  if (!data || data.length === 0) return { ok: false, message: t("Team member not found.") };
  return { ok: true };
}

/**
 * Owner-only: deactivate someone who has left (they can't log in, and any
 * open session ends on their next page load — see getSession), or bring
 * them back. Their past visits, orders and expenses stay in the records.
 */
export async function setUserActive(userId: string, active: boolean) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (session.role !== "owner") return { ok: false, message: t("Only the owner can do this.") };
  if (userId === session.userId && !active) return { ok: false, message: t("You can't deactivate yourself.") };

  const { data, error } = await supabaseAdmin.from("av_users").update({ active }).eq("id", userId).select("id");
  if (error) return { ok: false, message: error.message };
  if (!data || data.length === 0) return { ok: false, message: t("Team member not found.") };

  revalidatePath("/team");
  return { ok: true };
}
