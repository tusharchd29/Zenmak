import { headers } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase-admin";

// A 4-digit PIN has only 10,000 combinations, so without a limit a script
// could try them all in minutes. After MAX_FAILURES wrong PINs from one IP
// within WINDOW_MINUTES, that IP is refused until the window passes.
const MAX_FAILURES = 8;
const WINDOW_MINUTES = 15;

export async function clientIp(): Promise<string> {
  const h = await headers();
  // On Vercel, x-forwarded-for's first entry is the real client address.
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

/** True if this IP has used up its wrong-PIN allowance. Fails open (false)
 * if the attempts table can't be read, so a DB hiccup never blocks login. */
export async function isLockedOut(ip: string): Promise<boolean> {
  const since = new Date(Date.now() - WINDOW_MINUTES * 60_000).toISOString();
  const { count, error } = await supabaseAdmin
    .from("av_login_attempts")
    .select("id", { count: "exact", head: true })
    .eq("ip", ip)
    .eq("success", false)
    .gte("created_at", since);
  if (error) return false;
  return (count ?? 0) >= MAX_FAILURES;
}

export async function recordLoginAttempt(ip: string, success: boolean) {
  await supabaseAdmin.from("av_login_attempts").insert({ ip, success });
}

export const LOCKOUT_MESSAGE = `Too many wrong PINs. Please wait ${WINDOW_MINUTES} minutes and try again.`;
