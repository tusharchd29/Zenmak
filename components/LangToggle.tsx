"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Lang } from "@/lib/catalog/types";
import { cn } from "@/lib/utils";
import { setLang } from "@/lib/lang-action";

/** English / हिंदी switch. Sets the language cookie (via a server action)
 * and re-renders the server components, so every page that reads getLang()
 * follows along. */
export function LangToggle({ lang }: { lang: Lang }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function choose(next: Lang) {
    if (next === lang) return;
    startTransition(async () => {
      await setLang(next);
      router.refresh();
    });
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("inline-flex rounded-lg border border-[var(--border)] bg-white p-0.5 text-sm shrink-0", pending && "opacity-60")}
    >
      {(
        [
          ["en", "English"],
          ["hi", "हिंदी"],
        ] as const
      ).map(([code, label]) => (
        <button
          key={code}
          type="button"
          onClick={() => choose(code)}
          aria-pressed={lang === code}
          className={cn(
            "px-3 py-1 rounded-md font-medium transition-colors",
            lang === code ? "bg-[var(--teal)] text-white" : "text-[var(--ink)] hover:bg-[var(--offwhite)]",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
