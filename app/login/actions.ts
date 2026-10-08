"use server";

import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { createSession } from "@/lib/session";
import { getT } from "@/lib/i18n";
import { clientIp, isLockedOut, recordLoginAttempt, LOCKOUT_MESSAGE, WINDOW_MINUTES } from "@/lib/login-limit";

export async function loginWithPin(pin: string) {
  const { t } = await getT();
  if (typeof pin !== "string" || !/^\d{4,8}$/.test(pin)) {
    return { ok: false as const, message: t("That PIN wasn't recognized.") };
  }

  const ip = await clientIp();
  if (await isLockedOut(ip)) {
    return { ok: false as const, message: t(LOCKOUT_MESSAGE, { n: WINDOW_MINUTES }) };
  }

  const { data: user, error } = await supabaseAdmin
    .from("av_users")
    .select("id, name, role, active")
    .eq("pin", pin)
    .eq("active", true)
    .maybeSingle();

  if (error || !user) {
    await recordLoginAttempt(ip, false);
    return { ok: false as const, message: t("That PIN wasn't recognized.") };
  }

  await recordLoginAttempt(ip, true);
  await createSession({
    userId: user.id,
    name: user.name,
    role: user.role === "owner" ? "owner" : "rep",
  });

  redirect("/dashboard");
}
