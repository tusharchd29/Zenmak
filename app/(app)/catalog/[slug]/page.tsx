import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getT } from "@/lib/i18n";
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
  const { lang, t, tx } = await getT();

  const items: ShareItem[] = productSheets(slug).map((s) => ({
    label:
      s.kind === "detail"
        ? `${t("Detailed brochure")} · ${s.pages} ${t("pages")}`
        : `${t("One-page summary")} · 1 ${t("page")}`,
    file: s.file,
    filename: `Zenmak-${fileSafe(product.name)}${s.kind === "summary" ? "-summary" : ""}.pdf`,
  }));

  const brochures: ShareItem[] = brochuresFor(slug).map((b) => ({
    label: `${tx(b.title)} · ${b.pages} ${t("pages")} · ${b.sizeMb} MB`,
    file: b.file,
    filename: `Zenmak-${fileSafe(b.title.en)}.pdf`,
  }));

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link href="/catalog" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <Icon name="chevron-right" size={14} className="rotate-180" />
          {t("Product Master")}
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
              {t("Share with a customer")}
            </div>
            <ShareSheet
              items={items}
              brochures={brochures}
              publicPath={`/p/${slug}${t("")}`}
              messagePrefix={`Zenmak ${product.name} —`}
              labels={{
                sharePdf: t("Share PDF"),
                whatsapp: t("WhatsApp link"),
                download: t("Download"),
                productPage: t("Product page link (opens without login)"),
                fullBrochures: t("Also in these full brochures"),
              }}
            />
          </Card>

          <Link href={`/learn/${product.category}/${slug}`} className="block">
            <Card className="flex items-center justify-between hover:border-[var(--seafoam)]">
              <span className="flex items-center gap-2 font-medium text-[var(--ink)]">
                <Icon name="graduation-cap" size={18} className="text-[var(--saffron)]" />
                {t("Learn this product")}
              </span>
              <Icon name="chevron-right" size={16} className="text-[var(--muted)]" />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
