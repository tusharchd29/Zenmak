import { cookies } from "next/headers";
import type { L, LList } from "@/lib/catalog/types";
import { LANG_COOKIE, isLang, makeT, type Lang, type TFunction } from "@/lib/i18n-shared";
import { CONTENT_DICTS, UI_DICTS } from "@/lib/i18n/dicts";

export { LANG_COOKIE, LANGS, type Lang } from "@/lib/i18n-shared";

// The language choice lives in a plain cookie (not the session) so it
// survives logout and also applies to the login screen and the public /p
// product pages.
export async function getLang(): Promise<Lang> {
  const store = await cookies();
  const value = store.get(LANG_COOKIE)?.value;
  return isLang(value) ? value : "en";
}

/** Product/learning text: English and Hindi are inline in the catalog;
 * other languages come from the content dictionary keyed by the English. */
export function tx(text: L | undefined, lang: Lang): string {
  if (!text) return "";
  if (lang === "en") return text.en;
  if (lang === "hi") return text.hi;
  return CONTENT_DICTS[lang][text.en] ?? UI_DICTS[lang][text.en] ?? text.en;
}

export function txl(list: LList, lang: Lang): string[] {
  if (lang === "en") return list.en;
  if (lang === "hi") return list.hi;
  return list.en.map((s) => CONTENT_DICTS[lang][s] ?? s);
}

export function tFor(lang: Lang): TFunction {
  return makeT(UI_DICTS[lang]);
}

/** Everything a server component or action needs for the current language. */
export async function getT() {
  const lang = await getLang();
  return {
    lang,
    t: tFor(lang),
    tx: (text: L | undefined) => tx(text, lang),
    txl: (list: LList) => txl(list, lang),
  };
}
