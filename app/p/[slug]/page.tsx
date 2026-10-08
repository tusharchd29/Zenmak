import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLang, ui } from "@/lib/i18n";
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
  if (lang === "hi" || lang === "en") return lang;
  return getLang();
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const lang = await resolveLang(searchParams);
  return {
    title: `${product.name} — Zenmak`,
    description: product.tagline[lang],
    robots: { index: false, follow: false },
  };
}

export default async function PublicProductPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const lang = await resolveLang(searchParams);
  const sheets = productSheets(slug);

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ZenmakMark size={32} />
            <div className="leading-tight">
              <div className="font-semibold text-[var(--ink)]">Zenmak</div>
              <div className="text-xs text-[var(--muted)]">{ui("forCustomers", lang)}</div>
            </div>
          </div>
          <div className="inline-flex rounded-lg border border-[var(--border)] bg-white p-0.5 text-sm">
            {(
              [
                ["en", "English"],
                ["hi", "हिंदी"],
              ] as const
            ).map(([code, label]) => (
              <Link
                key={code}
                href={`/p/${slug}?lang=${code}`}
                aria-current={lang === code ? "true" : undefined}
                className={cn(
                  "px-3 py-1 rounded-md font-medium",
                  lang === code ? "bg-[var(--teal)] text-white" : "text-[var(--ink)]",
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
              {s.kind === "detail" ? ui("detailedSheet", lang) : ui("summarySheet", lang)} (PDF)
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
