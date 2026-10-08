import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/session";
import { getLang, ui, FORM_LABEL } from "@/lib/i18n";
import { CATEGORIES, PRODUCTS, formatPacks } from "@/lib/catalog";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { LangToggle } from "@/components/LangToggle";
import { ProductBrowser, type BrowserItem } from "@/components/catalog/ProductBrowser";
import { SyncButton } from "./SyncButton";

export const dynamic = "force-dynamic";

export default async function CatalogPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const lang = await getLang();

  const items: BrowserItem[] = PRODUCTS.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    tagline: p.tagline[lang],
    form: FORM_LABEL[p.form][lang],
    packs: formatPacks(p.packs),
    rx: Boolean(p.rx),
    haystack: [p.name, p.tagline.en, p.tagline.hi, ...p.composition, ...p.benefits.en, ...p.benefits.hi].join(" ").toLowerCase(),
  }));

  const categories = CATEGORIES.map((c) => ({
    id: c.id,
    name: c.name[lang],
    icon: c.icon,
    count: PRODUCTS.filter((p) => p.category === c.id).length,
  }));

  return (
    <div>
      <PageHeader title={ui("productMaster", lang)} subtitle={ui("productMasterSub", lang)} action={<LangToggle lang={lang} />} />

      <div className="grid grid-cols-2 gap-2 mb-4">
        <Link href="/learn">
          <Card className="flex items-center gap-3 h-full hover:border-[var(--seafoam)]">
            <Icon name="graduation-cap" size={20} className="text-[var(--saffron)] shrink-0" />
            <span className="text-sm font-medium text-[var(--ink)]">{ui("learning", lang)}</span>
          </Card>
        </Link>
        <Link href="/brochures">
          <Card className="flex items-center gap-3 h-full hover:border-[var(--seafoam)]">
            <Icon name="layers" size={20} className="text-[var(--teal)] shrink-0" />
            <span className="text-sm font-medium text-[var(--ink)]">{lang === "hi" ? "ब्रोशर बनाएं / भेजें" : "Brochures & custom PDF"}</span>
          </Card>
        </Link>
      </div>

      <ProductBrowser
        items={items}
        categories={categories}
        labels={{ search: ui("search", lang), all: ui("all", lang), noMatch: ui("noMatch", lang), products: ui("products", lang) }}
      />

      {session.role === "owner" && (
        <Card className="mt-6">
          <div className="font-medium text-[var(--ink)] mb-1">Order product list</div>
          <p className="text-sm text-[var(--muted)] mb-3">
            Adds every product above to the list reps pick from on new orders — one entry per pack size (e.g. &ldquo;Hygin-Tact 20 (5 L)&rdquo;).
            Products already in the list are skipped, and nothing existing is changed.
          </p>
          <SyncButton />
        </Card>
      )}
    </div>
  );
}
