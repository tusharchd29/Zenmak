"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LANGS, type Lang } from "@/lib/i18n-shared";
import { setLang } from "@/lib/lang-action";
import { useLang, useT } from "./I18nProvider";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

/** Language picker for the whole app. Sets the language cookie (via a
 * server action) and re-renders, so every screen switches at once. The
 * `lang` prop is optional — it defaults to the language from the provider. */
export function LangToggle({ lang: langProp, className }: { lang?: Lang; className?: string }) {
  const current = useLang();
  const t = useT();
  const lang = langProp ?? current;
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <label className={cn("inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white pl-2 pr-1 py-0.5 text-sm shrink-0", pending && "opacity-60", className)}>
      <Icon name="languages" size={15} className="text-[var(--teal)]" />
      <span className="sr-only">{t("Language")}</span>
      <select
        value={lang}
        disabled={pending}
        onChange={(e) => {
          const next = e.target.value as Lang;
          startTransition(async () => {
            await setLang(next);
            router.refresh();
          });
        }}
        className="flex-1 min-w-0 bg-transparent py-1 pr-1 font-medium text-[var(--ink)] outline-none cursor-pointer"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
