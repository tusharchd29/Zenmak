import type { Lang, Product } from "@/lib/catalog/types";
import { formatPacks, getCategory } from "@/lib/catalog";
import { FORM_LABEL, ui } from "@/lib/i18n";
import { Icon } from "@/components/icon";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)] mb-2">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[var(--ink)] leading-snug">
          <Icon name="check" size={16} className="text-[var(--seafoam)] mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Product header + customer-facing facts. Used by the in-app Product
 * Master page and the public /p page a customer opens from WhatsApp. */
export function ProductHeader({ product, lang }: { product: Product; lang: Lang }) {
  const category = getCategory(product.category);
  return (
    <div className="mb-4">
      <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs">
        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--teal)]/10 text-[var(--teal)] px-2.5 py-0.5 font-medium">
          <Icon name={category.icon} size={13} />
          {category.name[lang]}
        </span>
        <span className="rounded-full bg-[var(--offwhite)] border border-[var(--border)] text-[var(--muted)] px-2.5 py-0.5">
          {FORM_LABEL[product.form][lang]}
        </span>
      </div>
      <h1 className="text-2xl font-semibold text-[var(--ink)] leading-tight">{product.name}</h1>
      <p className="text-[var(--muted)] mt-0.5">{product.tagline[lang]}</p>
    </div>
  );
}

export function ProductFacts({ product, lang }: { product: Product; lang: Lang }) {
  return (
    <div className="space-y-3">
      {product.rx && (
        <div className="flex gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2.5 text-sm text-amber-900">
          <Icon name="triangle-alert" size={16} className="mt-0.5 shrink-0" />
          <span>{ui("rxNote", lang)}</span>
        </div>
      )}

      <Section title={ui("keyBenefits", lang)}>
        <Bullets items={product.benefits[lang]} />
      </Section>

      <Section title={ui("dosage", lang)}>
        <Bullets items={product.dosage[lang]} />
      </Section>

      <div className="grid gap-3 sm:grid-cols-2">
        <Section title={ui("composition", lang)}>
          <ul className="text-sm text-[var(--ink)] space-y-0.5">
            {product.composition.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Section>
        <Section title={ui("presentation", lang)}>
          <p className="text-[var(--ink)] font-medium">{formatPacks(product.packs)}</p>
          {product.storage && (
            <>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)] mt-3 mb-1">{ui("storage", lang)}</h3>
              <p className="text-sm text-[var(--ink)]">{product.storage[lang]}</p>
            </>
          )}
        </Section>
      </div>
    </div>
  );
}
