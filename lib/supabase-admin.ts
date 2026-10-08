import { createClient } from "@supabase/supabase-js";

const noStoreFetch: typeof fetch = (input, init) =>
  fetch(input, { ...init, cache: "no-store" });

// Server-only key. Prefer the service-role / secret key: once it's set, the
// permissive anon RLS policies can be dropped so the anon key (which is in
// this repo's history) no longer opens the database. The project URL isn't
// secret, so it keeps a default.
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
if (!key) {
  throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set. Set it in the Vercel project's environment variables.");
}

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pxirxvmmqazosirbffge.supabase.co",
  key,
  {
    auth: { persistSession: false },
    global: { fetch: noStoreFetch },
    db: { schema: "public" },
  },
);
