"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { absoluteUrl, downloadFile, fetchPdf, shareFile, whatsappHref } from "@/lib/share-pdf";
import { useT } from "@/components/I18nProvider";

export type ShareItem = {
  /** Shown as the row title, e.g. "Detailed brochure · 4 pages". */
  label: string;
  file: string;
  filename: string;
};

type Labels = {
  sharePdf: string;
  whatsapp: string;
  download: string;
  productPage: string;
  fullBrochures: string;
};

/**
 * Share panel for one product: each PDF (detailed range-brochure pages, the
 * one-page manual summary) can go out as a file, as a WhatsApp link, or be
 * downloaded; plus a link to the public product page and the full
 * brochures it appears in.
 */
export function ShareSheet({
  items,
  brochures,
  publicPath,
  messagePrefix,
  labels,
}: {
  items: ShareItem[];
  brochures: ShareItem[];
  /** Public product page to offer as a link; omitted for whole brochures. */
  publicPath?: string;
  /** e.g. "Zenmak MakZyme-C AMF —" in the reader's language. */
  messagePrefix: string;
  labels: Labels;
}) {
  const t = useT();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function sendFile(item: ShareItem) {
    setError(null);
    setBusy(item.file);
    try {
      const url = absoluteUrl(item.file);
      const file = await fetchPdf(item.file, item.filename);
      const shared = await shareFile(file, `${messagePrefix} ${item.label}`);
      if (!shared) window.open(whatsappHref(`${messagePrefix} ${item.label}\n${url}`), "_blank", "noopener");
    } catch (err) {
      setError(err instanceof Error ? err.message : t("Couldn't share that file. Check your connection."));
    } finally {
      setBusy(null);
    }
  }

  async function download(item: ShareItem) {
    setError(null);
    setBusy(item.file);
    try {
      downloadFile(await fetchPdf(item.file, item.filename));
    } catch (err) {
      setError(err instanceof Error ? err.message : t("Download failed. Check your connection."));
    } finally {
      setBusy(null);
    }
  }

  function linkMessage(item: ShareItem) {
    window.open(whatsappHref(`${messagePrefix} ${item.label}\n${absoluteUrl(item.file)}`), "_blank", "noopener");
  }

  function renderRow(item: ShareItem) {
    const loading = busy === item.file;
    return (
      <div key={item.file} className="py-3 border-t border-[var(--border)] first:border-t-0">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="file-text" size={16} className="text-[var(--teal)] shrink-0" />
          <a href={item.file} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--ink)] hover:underline">
            {item.label}
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button type="button" onClick={() => sendFile(item)} disabled={loading} className="btn-primary text-xs py-2 px-2">
            {loading ? "…" : labels.sharePdf}
          </button>
          <button type="button" onClick={() => linkMessage(item)} className="btn-secondary text-xs py-2 px-2">
            {labels.whatsapp}
          </button>
          <button type="button" onClick={() => download(item)} disabled={loading} className="btn-secondary text-xs py-2 px-2">
            {labels.download}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {items.map(renderRow)}

      {publicPath && (
        <div className="py-3 border-t border-[var(--border)]">
          <button
            type="button"
            onClick={() => window.open(whatsappHref(`${messagePrefix} ${absoluteUrl(publicPath)}`), "_blank", "noopener")}
            className="flex items-center gap-2 text-sm font-medium text-[var(--teal)] hover:underline"
          >
            <Icon name="share" size={16} />
            {labels.productPage}
          </button>
        </div>
      )}

      {brochures.length > 0 && (
        <div className="pt-3 border-t border-[var(--border)]">
          <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)] mb-1">{labels.fullBrochures}</div>
          {brochures.map(renderRow)}
        </div>
      )}

      {error && <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mt-2">{error}</div>}
    </div>
  );
}
