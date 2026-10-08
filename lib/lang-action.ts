"use server";

import { cookies } from "next/headers";
import { LANG_COOKIE, isLang, type Lang } from "@/lib/i18n-shared";

export async function setLang(lang: Lang) {
  const store = await cookies();
  store.set(LANG_COOKIE, isLang(lang) ? lang : "en", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
