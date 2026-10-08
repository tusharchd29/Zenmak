import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getLang, ui } from "@/lib/i18n";
import { brochuresFor, getProduct, productSheets } from "@/lib/catalog";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { LangToggle } from "@/components/LangToggle";
import { ProductFacts, ProductHeader } from "@/components/catalog/ProductFacts";
import { ShareSheet, type ShareItem } from "@/components/catalog/ShareSheet";

export const dynamic = "force-dynamic";

function fileSafe(name: string) {
  return name.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const lang = await getLang();

  const items: ShareItem[] = productSheets(slug).map((s) => ({
    label:
      s.kind === "detail"
        ? `${ui("detailedSheet", lang)} · ${s.pages} ${ui("pages", lang)}`
        : `${ui("summarySheet", lang)} · 1 ${ui("page", lang)}`,
    file: s.file,
    filename: `Zenmak-${fileSafe(product.name)}${s.kind === "summary" ? "-summary" : ""}.pdf`,
  }));

  const brochures: ShareItem[] = brochuresFor(slug).map((b) => ({
    label: `${b.title[lang]} · ${b.pages} ${ui("pages", lang)} · ${b.sizeMb} MB`,
    file: b.file,
    filename: `Zenmak-${fileSafe(b.title.en)}.pdf`,
  }));

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link href="/catalog" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <Icon name="chevron-right" size={14} className="rotate-180" />
          {ui("productMaster", lang)}
        </Link>
        <LangToggle lang={lang} />
      </div>

      <ProductHeader product={product} lang={lang} />

      <div className="grid gap-4 md:grid-cols-[1fr_320px] items-start">
        <div className="order-2 md:order-1">
          <ProductFacts product={product} lang={lang} />
        </div>

        <div className="order-1 md:order-2 space-y-3 md:sticky md:top-4">
          <Card>
            <div className="flex items-center gap-2 font-medium text-[var(--ink)]">
              <Icon name="share" size={16} className="text-[var(--teal)]" />
              {ui("share", lang)}
            </div>
            <ShareSheet
              items={items}
              brochures={brochures}
              publicPath={`/p/${slug}${lang === "hi" ? "?lang=hi" : ""}`}
              messagePrefix={`Zenmak ${product.name} —`}
              labels={{
                sharePdf: ui("sharePdf", lang),
                whatsapp: ui("whatsapp", lang),
                download: ui("download", lang),
                productPage: ui("productPage", lang),
                fullBrochures: ui("fullBrochures", lang),
              }}
            />
          </Card>

          <Link href={`/learn/${product.category}/${slug}`} className="block">
            <Card className="flex items-center justify-between hover:border-[var(--seafoam)]">
              <span className="flex items-center gap-2 font-medium text-[var(--ink)]">
                <Icon name="graduation-cap" size={18} className="text-[var(--saffron)]" />
                {ui("learnThis", lang)}
              </span>
              <Icon name="chevron-right" size={16} className="text-[var(--muted)]" />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
