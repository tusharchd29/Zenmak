import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLang, tFor, tx as txOf } from "@/lib/i18n";
import { LANGS, isLang } from "@/lib/i18n-shared";
import type { L } from "@/lib/catalog/types";
import { getProduct, productSheets, type Lang } from "@/lib/catalog";
import { ProductFacts, ProductHeader } from "@/components/catalog/ProductFacts";
import { ZenmakMark } from "@/components/ZenmakMark";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

// Public, no-login product page — what a customer opens from a WhatsApp
// link. Excluded from the login redirect in proxy.ts. Shows only the
// customer-facing facts (not the sales-training notes) and the PDFs, which
// are public files anyway.

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

async function resolveLang(searchParams: Props["searchParams"]): Promise<Lang> {
  const { lang } = await searchParams;
  if (isLang(lang)) return lang;
  return getLang();
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const lang = await resolveLang(searchParams);
  const tx = (l?: L) => txOf(l, lang);
  return {
    title: `${product.name} — Zenmak`,
    description: tx(product.tagline),
    robots: { index: false, follow: false },
  };
}

export default async function PublicProductPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const lang = await resolveLang(searchParams);
  const t = tFor(lang);
  const sheets = productSheets(slug);

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ZenmakMark size={32} />
            <div className="leading-tight">
              <div className="font-semibold text-[var(--ink)]">Zenmak</div>
              <div className="text-xs text-[var(--muted)]">{t("Zenmak Animal Health Division")}</div>
            </div>
          </div>
          {/* Plain links (no JS needed) — a customer can switch language
              without the app's cookie; the choice rides in ?lang=. */}
          <div className="flex flex-wrap justify-end gap-1 text-sm">
            {LANGS.map(({ code, label }) => (
              <Link
                key={code}
                href={`/p/${slug}?lang=${code}`}
                aria-current={lang === code ? "true" : undefined}
                className={cn(
                  "px-2.5 py-1 rounded-md font-medium border",
                  lang === code ? "bg-[var(--teal)] border-[var(--teal)] text-white" : "border-[var(--border)] bg-white text-[var(--ink)]",
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <ProductHeader product={product} lang={lang} />

        <div className="flex flex-wrap gap-2 mb-4">
          {sheets.map((s) => (
            <a
              key={s.file}
              href={s.file}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("inline-flex items-center gap-2 text-sm px-3 py-2", s.kind === "detail" ? "btn-primary" : "btn-secondary")}
            >
              <Icon name="download" size={15} />
              {s.kind === "detail" ? t("Detailed brochure") : t("One-page summary")} (PDF)
            </a>
          ))}
        </div>

        <ProductFacts product={product} lang={lang} />

        <footer className="mt-8 text-center text-xs text-[var(--muted)]">
          Zenmak Nutrigencies and Health Pvt. Ltd. · GMP &amp; HACCP certified ·{" "}
          <a href="https://www.zenmakglobal.com" target="_blank" rel="noopener noreferrer" className="underline">
            www.zenmakglobal.com
          </a>
        </footer>
      </main>
    </div>
  );
}
