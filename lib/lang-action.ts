"use server";

import { cookies } from "next/headers";
import { LANG_COOKIE } from "@/lib/i18n";

export async function setLang(lang: "en" | "hi") {
  const store = await cookies();
  store.set(LANG_COOKIE, lang === "hi" ? "hi" : "en", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
