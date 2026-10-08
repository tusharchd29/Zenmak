import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getT } from "@/lib/i18n";
import { BROCHURES, CATEGORIES, PRODUCTS, productSheets } from "@/lib/catalog";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { EditableCard } from "../_shared/EditableCard";
import { createBrochure } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";
import { ActionForm } from "@/components/ActionForm";
import { BrochureFileField } from "@/components/BrochureFileField";
import { LangToggle } from "@/components/LangToggle";
import { ShareSheet } from "@/components/catalog/ShareSheet";
import { BundleBuilder, type BundleGroup } from "@/components/catalog/BundleBuilder";

export const dynamic = "force-dynamic";

export default async function BrochuresPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const { lang, t, tx, txl } = await getT();

  const { data: brochures } = await supabaseAdmin
    .from("av_brochures")
    .select("id, title, url")
    .order("created_at", { ascending: false });

  const groups: BundleGroup[] = CATEGORIES.map((c) => ({
    id: c.id,
    name: tx(c.name),
    products: PRODUCTS.filter((p) => p.category === c.id).map((p) => ({
      slug: p.slug,
      name: p.name,
      detailPages: productSheets(p.slug).find((s) => s.kind === "detail")?.pages ?? null,
    })),
  }));

  const shareLabels = {
    sharePdf: t("Share PDF"),
    whatsapp: t("WhatsApp link"),
    download: t("Download"),
    productPage: t("Product page link (opens without login)"),
    fullBrochures: t("Also in these full brochures"),
  };

  return (
    <div>
      <PageHeader
        title={t("Brochures")}
        subtitle={t("Send a whole brochure, one product, or your own pick of products")}
        action={<LangToggle lang={lang} />}
      />

      <Card className="mb-6">
        <div className="flex items-center gap-2 font-medium text-[var(--ink)] mb-1">
          <Icon name="layers" size={18} className="text-[var(--teal)]" />
          {t("Make a custom brochure")}
        </div>
        <p className="text-sm text-[var(--muted)] mb-3">
          {t("Tick only the products this customer needs — they're joined into one PDF. To send a single product you can also use its page in the Product Master.")}
        </p>
        <BundleBuilder
          groups={groups}
          labels={{
            detailed: t("Detailed brochure"),
            summary: t("One-page summary"),
            selected: t("selected"),
            pages: t("pages"),
            clear: t("Clear"),
            sharePdf: t("Share PDF"),
            download: t("Download"),
            pickSome: t("Pick some products"),
            selectAll: t("Select all / none"),
          }}
        />
      </Card>

      <Card className="mb-6">
        <div className="flex items-center gap-2 font-medium text-[var(--ink)]">
          <Icon name="book-open" size={18} className="text-[var(--teal)]" />
          {t("Full brochures")}
        </div>
        <ShareSheet
          items={BROCHURES.map((b) => ({
            label: `${tx(b.title)} · ${b.pages} ${t("pages")} · ${b.sizeMb} MB`,
            file: b.file,
            filename: `Zenmak-${b.title.en.replace(/[^A-Za-z0-9]+/g, "-").replace(/-$/, "")}.pdf`,
          }))}
          brochures={[]}
          messagePrefix="Zenmak —"
          labels={shareLabels}
        />
      </Card>

      {session.role === "owner" && (
        <Card className="mb-6">
          <div className="font-medium text-[var(--ink)] mb-3">Add another brochure</div>
          <ActionForm action={createBrochure} resetOnSuccess className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">Title</label>
              <input name="title" required className="input-field" />
            </div>
            <BrochureFileField />
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">Or paste a link instead</label>
              <input name="url" className="input-field" placeholder="https://..." />
            </div>
            <SubmitButton>Save</SubmitButton>
          </ActionForm>
        </Card>
      )}

      {brochures && brochures.length > 0 && (
        <>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)] mb-2">{t("Other brochures")}</h2>
          <div className="space-y-2">
            {brochures.map((b) =>
              session.role === "owner" ? (
                <EditableCard
                  key={b.id}
                  table="av_brochures"
                  id={b.id}
                  revalidate={["/brochures"]}
                  initialValues={{ title: b.title, url: b.url }}
                  fields={[
                    { name: "title", label: "Title", type: "text" },
                    { name: "url", label: "Link", type: "text" },
                  ]}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-[var(--ink)]">{b.title}</div>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`${b.title}: ${b.url}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-3 py-1.5 whitespace-nowrap"
                    >
                      Share on WhatsApp
                    </a>
                  </div>
                </EditableCard>
              ) : (
                <Card key={b.id} className="flex items-center justify-between">
                  <div className="font-medium text-[var(--ink)]">{b.title}</div>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${b.title}: ${b.url}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3 py-1.5"
                  >
                    Share on WhatsApp
                  </a>
                </Card>
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
}
