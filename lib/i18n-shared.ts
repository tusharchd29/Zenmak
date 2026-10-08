// Language list and translation helpers that work on both the server and in
// the browser. Translations are dictionaries keyed by the English text
// (gettext-style): `t("Save")` looks up "Save" in the current language's
// dictionary and falls back to the English when a line isn't translated
// yet — so nothing ever shows blank, and a native speaker can correct any
// line in lib/i18n/ui/<lang>.ts without touching the screens.

export const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "bn", label: "বাংলা" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

export const LANG_COOKIE = "zen_lang";

export function isLang(value: unknown): value is Lang {
  return LANGS.some((l) => l.code === value);
}

export type Dict = Record<string, string>;
export type Vars = Record<string, string | number>;
export type TFunction = (english: string, vars?: Vars) => string;

/** Fills {name} placeholders: t("{n} lessons", { n: 5 }). */
export function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (m, key: string) => (key in vars ? String(vars[key]) : m));
}

export function makeT(dict: Dict | undefined): TFunction {
  return (english, vars) => interpolate(dict?.[english] ?? english, vars);
}

/** Marks an English string defined away from where it's rendered (nav
 * labels, status names…) so the key checker finds it. Returns it as-is;
 * translate it with t() at render time. */
export function msg<T extends string>(english: T): T {
  return english;
}
