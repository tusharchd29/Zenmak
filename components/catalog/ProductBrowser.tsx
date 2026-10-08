"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type BrowserItem = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  form: string;
  packs: string;
  rx: boolean;
  /** Lower-cased text the search box matches against (both languages,
   * composition), precomputed on the server. */
  haystack: string;
};

export type BrowserCategory = { id: string; name: string; icon: string; count: number };

export function ProductBrowser({
  items,
  categories,
  labels,
}: {
  items: BrowserItem[];
  categories: BrowserCategory[];
  labels: { search: string; all: string; noMatch: string; products: string };
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((p) => (!category || p.category === category) && (!q || p.haystack.includes(q)));
  }, [items, query, category]);

  const categoryName = new Map(categories.map((c) => [c.id, c]));

  return (
    <div>
      <div className="relative mb-3">
        <Icon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={labels.search}
          className="input-field"
          // Inline so it beats .input-field's own padding (an unlayered
          // global rule, which outranks Tailwind's layered pl-* utilities).
          style={{ paddingLeft: "2.25rem" }}
          aria-label={labels.search}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-3 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className={cn(
            "shrink-0 rounded-full border px-3 py-1 text-sm",
            category === null ? "bg-[var(--teal)] border-[var(--teal)] text-white" : "bg-white border-[var(--border)] text-[var(--ink)]",
          )}
        >
          {labels.all} · {items.length}
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(category === c.id ? null : c.id)}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1 text-sm whitespace-nowrap",
              category === c.id ? "bg-[var(--teal)] border-[var(--teal)] text-white" : "bg-white border-[var(--border)] text-[var(--ink)]",
            )}
          >
            {c.name} · {c.count}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-sm text-[var(--muted)] py-10 text-center">{labels.noMatch}</p>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          {visible.map((p) => {
            const c = categoryName.get(p.category);
            return (
              <Link key={p.slug} href={`/catalog/${p.slug}`} className="card p-3.5 flex items-start gap-3 hover:border-[var(--seafoam)] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center shrink-0">
                  <Icon name={c?.icon ?? "package"} size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-[var(--ink)] leading-tight">{p.name}</div>
                  <div className="text-sm text-[var(--muted)] leading-snug mt-0.5 line-clamp-2">{p.tagline}</div>
                  <div className="text-xs text-[var(--muted)] mt-1.5 flex flex-wrap gap-x-2">
                    <span>{c?.name}</span>
                    <span>· {p.form}</span>
                    <span>· {p.packs}</span>
                    {p.rx && <span className="text-amber-700">· Rx</span>}
                  </div>
                </div>
                <Icon name="chevron-right" size={16} className="text-[var(--muted)] mt-1 shrink-0" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
