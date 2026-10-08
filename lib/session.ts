import { cookies } from "next/headers";
import { cache } from "react";
import crypto from "crypto";

export type Role = "owner" | "rep";

export type Session = {
  userId: string;
  name: string;
  role: Role;
};

const COOKIE_NAME = "allvet_session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Signs the session cookie. Must be a long random value set as the
// SESSION_SECRET env var (never committed — this repo's history contains an
// old hardcoded value, which must not be reused). Fails loudly rather than
// signing cookies with a guessable key.
function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET is not set (or is shorter than 32 characters). Set it in the Vercel project's environment variables.");
  }
  return secret;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function encodeSession(session: Session): string {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

export function decodeSession(token: string | undefined): Session | null {
  if (!token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = sign(payload);
  if (
    expected.length !== sig.length ||
    !crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig))
  ) {
    return null;
  }
  try {
    const json = Buffer.from(payload, "base64url").toString("utf8");
    return JSON.parse(json) as Session;
  } catch {
    return null;
  }
}

export async function createSession(session: Session) {
  const store = await cookies();
  store.set(COOKIE_NAME, encodeSession(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

/**
 * The signed cookie alone isn't enough: a rep deactivated on the Team page,
 * or whose role changed, would otherwise keep their old access for up to 30
 * days. So the cookie is re-checked against av_users — once per request,
 * thanks to React's cache() — and the role comes from the database, not the
 * cookie. A transient DB error falls back to the cookie rather than logging
 * the whole team out.
 */
const loadActiveUser = cache(async (userId: string) => {
  // Imported lazily so proxy.ts (which only needs decodeSession) doesn't
  // pull the database client into its bundle.
  const { supabaseAdmin } = await import("@/lib/supabase-admin");
  return supabaseAdmin.from("av_users").select("id, name, role, active").eq("id", userId).maybeSingle();
});

export async function getSession(): Promise<Session | null> {
  const store = await cookies();
  const session = decodeSession(store.get(COOKIE_NAME)?.value);
  if (!session) return null;

  const { data: user, error } = await loadActiveUser(session.userId);
  if (error) return session;
  if (!user || !user.active) return null;
  return { userId: user.id, name: user.name, role: user.role === "owner" ? "owner" : "rep" };
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export const SESSION_COOKIE_NAME = COOKIE_NAME;
