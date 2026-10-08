"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import { downloadFile, shareFile } from "@/lib/share-pdf";
import { useT } from "@/components/I18nProvider";

export type BundleProduct = { slug: string; name: string; detailPages: number | null };
export type BundleGroup = { id: string; name: string; products: BundleProduct[] };

type Labels = {
  detailed: string;
  summary: string;
  selected: string;
  pages: string;
  clear: string;
  sharePdf: string;
  download: string;
  pickSome: string;
  selectAll: string;
};

function sheetPath(p: BundleProduct, mode: "detail" | "summary") {
  // Products without a detailed range-brochure sheet fall back to their
  // one-page summary, so a "detailed" bundle never silently drops one.
  return mode === "detail" && p.detailPages ? `/docs/products/${p.slug}.pdf` : `/docs/products/${p.slug}-summary.pdf`;
}

/**
 * Pick any products and get them as ONE PDF — built in the browser with
 * pdf-lib from the per-product sheets, then shared as a file or downloaded.
 * pdf-lib is only loaded when someone actually builds a bundle.
 */
export function BundleBuilder({ groups, labels }: { groups: BundleGroup[]; labels: Labels }) {
  const t = useT();
  const [selected, setSelected] = useState<string[]>([]);
  const [mode, setMode] = useState<"detail" | "summary">("detail");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const all = useMemo(() => groups.flatMap((g) => g.products), [groups]);
  const chosen = all.filter((p) => selected.includes(p.slug));
  const pageCount = chosen.reduce((n, p) => n + (mode === "detail" && p.detailPages ? p.detailPages : 1), 0);

  function toggle(slug: string) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  function toggleGroup(group: BundleGroup) {
    const slugs = group.products.map((p) => p.slug);
    const allIn = slugs.every((s) => selected.includes(s));
    setSelected((prev) => (allIn ? prev.filter((s) => !slugs.includes(s)) : [...new Set([...prev, ...slugs])]));
  }

  async function build(): Promise<File> {
    const { PDFDocument } = await import("pdf-lib");
    const out = await PDFDocument.create();
    out.setTitle(`Zenmak — ${chosen.map((p) => p.name).join(", ")}`);
    out.setAuthor("Zenmak Animal Health Division");
    for (const p of chosen) {
      const res = await fetch(sheetPath(p, mode));
      if (!res.ok) throw new Error(t("Couldn't load {name} ({status})", { name: p.name, status: res.status }));
      const src = await PDFDocument.load(await res.arrayBuffer());
      const pages = await out.copyPages(src, src.getPageIndices());
      pages.forEach((page) => out.addPage(page));
    }
    const bytes = await out.save();
    const name = chosen.length === 1 ? chosen[0].name.replace(/[^A-Za-z0-9]+/g, "-") : `${chosen.length}-products`;
    return new File([bytes as BlobPart], `Zenmak-${name}.pdf`, { type: "application/pdf" });
  }

  async function run(action: "share" | "download") {
    setError(null);
    setBusy(true);
    try {
      const file = await build();
      if (action === "share") {
        const shared = await shareFile(file, `Zenmak — ${chosen.map((p) => p.name).join(", ")}`);
        // No file sharing on this browser (most desktops): download instead,
        // so the rep can attach it in WhatsApp Web.
        if (!shared) downloadFile(file);
      } else {
        downloadFile(file);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t("Couldn't build the PDF."));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="inline-flex rounded-lg border border-[var(--border)] bg-white p-0.5 text-sm mb-3">
        {(["detail", "summary"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={cn("px-3 py-1 rounded-md font-medium", mode === m ? "bg-[var(--teal)] text-white" : "text-[var(--ink)]")}
          >
            {m === "detail" ? labels.detailed : labels.summary}
          </button>
        ))}
      </div>

      <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1 border border-[var(--border)] rounded-xl bg-white p-2">
        {groups.map((g) => {
          const inGroup = g.products.filter((p) => selected.includes(p.slug)).length;
          return (
            <details key={g.id} className="group rounded-lg" open={inGroup > 0}>
              <summary className="flex items-center justify-between gap-2 cursor-pointer select-none px-2 py-2 rounded-lg hover:bg-[var(--offwhite)]">
                <span className="text-sm font-medium text-[var(--ink)]">
                  {g.name}
                  {inGroup > 0 && <span className="ml-2 text-xs text-[var(--teal)]">({inGroup})</span>}
                </span>
                <Icon name="chevron-down" size={16} className="text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-2 pb-2">
                <button type="button" onClick={() => toggleGroup(g)} className="text-xs text-[var(--teal)] font-medium px-2 py-1 hover:underline">
                  {labels.selectAll}
                </button>
                {g.products.map((p) => (
                  <label key={p.slug} className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-[var(--offwhite)] cursor-pointer text-sm">
                    <input type="checkbox" checked={selected.includes(p.slug)} onChange={() => toggle(p.slug)} className="accent-[var(--teal)] w-4 h-4" />
                    <span className="flex-1 text-[var(--ink)]">{p.name}</span>
                    <span className="text-xs text-[var(--muted)]">
                      {mode === "detail" && p.detailPages ? p.detailPages : 1} {labels.pages}
                    </span>
                  </label>
                ))}
              </div>
            </details>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-[var(--muted)]">
          {chosen.length > 0 ? (
            <>
              {chosen.length} {labels.selected} · {pageCount} {labels.pages}{" "}
              <button type="button" onClick={() => setSelected([])} className="text-[var(--teal)] hover:underline ml-1">
                {labels.clear}
              </button>
            </>
          ) : (
            labels.pickSome
          )}
        </div>
        <div className="flex gap-2">
          <button type="button" disabled={!chosen.length || busy} onClick={() => run("share")} className="btn-primary text-sm px-4 py-2 inline-flex items-center gap-2">
            <Icon name="share" size={15} />
            {busy ? "…" : labels.sharePdf}
          </button>
          <button type="button" disabled={!chosen.length || busy} onClick={() => run("download")} className="btn-secondary text-sm px-4 py-2 inline-flex items-center gap-2">
            <Icon name="download" size={15} />
            {labels.download}
          </button>
        </div>
      </div>

      {error && <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mt-2">{error}</div>}
    </div>
  );
}
