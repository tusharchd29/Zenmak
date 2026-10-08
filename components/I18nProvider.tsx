"use client";

import { createContext, useContext, useMemo } from "react";
import { makeT, type Dict, type Lang, type TFunction } from "@/lib/i18n-shared";

const I18nContext = createContext<{ lang: Lang; t: TFunction }>({ lang: "en", t: makeT(undefined) });

/** Gives client components the current language and its screen-text
 * dictionary (set once in the root layout). */
export function I18nProvider({ lang, dict, children }: { lang: Lang; dict: Dict; children: React.ReactNode }) {
  const value = useMemo(() => ({ lang, t: makeT(dict) }), [lang, dict]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT(): TFunction {
  return useContext(I18nContext).t;
}

export function useLang(): Lang {
  return useContext(I18nContext).lang;
}
