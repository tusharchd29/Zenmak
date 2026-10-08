import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getT } from "@/lib/i18n";
import { getCategory, getProduct, productsIn, quizFor, termsFor, TECHNICAL } from "@/lib/catalog";
import { getProgress } from "@/lib/learning";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { LangToggle } from "@/components/LangToggle";
import { ProductHeader } from "@/components/catalog/ProductFacts";
import { Quiz } from "@/components/catalog/Quiz";

export const dynamic = "force-dynamic";

function Block({ icon, title, children, tone = "plain" }: { icon: string; title: string; children: React.ReactNode; tone?: "plain" | "pitch" }) {
  return (
    <Card className={tone === "pitch" ? "border-[var(--saffron)]/40 bg-orange-50/70" : undefined}>
      <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--teal)] mb-1.5">
        <Icon name={icon} size={16} className={tone === "pitch" ? "text-[var(--saffron)]" : undefined} />
        {title}
      </h2>
      {children}
    </Card>
  );
}

export default async function LessonPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { category: categoryId, slug } = await params;
  const product = getProduct(slug);
  if (!product || product.category !== categoryId) notFound();
  const { lang, t, tx, txl } = await getT();
  const category = getCategory(product.category);
  const progress = await getProgress(session.userId);
  const status = progress.bySlug.get(slug);

  const siblings = productsIn(product.category);
  const next = siblings[siblings.findIndex((p) => p.slug === slug) + 1];

  const technical = TECHNICAL[slug];
  const terms = termsFor(product);

  // Questions go to the browser without the answer key — the server grades.
  const questions = quizFor(product).map((q) => ({ id: q.id, q: tx(q.q), options: q.options.map((o) => tx(o)) }));

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link href={`/learn/${category.id}`} className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <Icon name="chevron-right" size={14} className="rotate-180" />
          {tx(category.name)}
        </Link>
        <LangToggle lang={lang} />
      </div>

      <ProductHeader product={product} lang={lang} />
      {status?.passed && (
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium px-2.5 py-1 -mt-2 mb-4">
          <Icon name="circle-check" size={14} />
          {t("Lesson complete")} · {status.bestScore}/{status.total}
        </div>
      )}

      <div className="space-y-3">
        <Block icon="target" title={t("When to recommend it")}>
          <p className="text-[var(--ink)] leading-relaxed">{tx(product.learn.problem)}</p>
        </Block>

        <Block icon="lightbulb" title={t("How it works")}>
          <p className="text-[var(--ink)] leading-relaxed">{tx(product.learn.how)}</p>
        </Block>

        <Block icon="award" title={t("Key benefits in poultry")}>
          <ul className="space-y-1.5">
            {txl(product.benefits).map((b) => (
              <li key={b} className="flex gap-2 text-[var(--ink)] leading-snug">
                <Icon name="check" size={16} className="text-[var(--seafoam)] mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Block>

        {technical && (
          <Block icon="graduation-cap" title={t("Talk like an expert")}>
            <p className="text-xs text-[var(--muted)] -mt-1 mb-2">{t("Technical points for vets, nutritionists and big farmers")}</p>
            <ol className="space-y-2">
              {txl(technical).map((point, i) => (
                <li key={point} className="flex gap-2.5 text-[var(--ink)] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[var(--teal)] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </Block>
        )}

        {terms.length > 0 && (
          <Block icon="book-open" title={t("Technical terms in this lesson")}>
            <div className="divide-y divide-[var(--border)]">
              {terms.map((term) => (
                <details key={term.id} className="group py-2">
                  <summary className="flex items-center justify-between gap-2 cursor-pointer list-none font-medium text-[var(--ink)]">
                    {term.term}
                    <Icon name="chevron-down" size={16} className="text-[var(--muted)] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="text-sm text-[var(--ink)] mt-1.5 leading-relaxed">{tx(term.meaning)}</p>
                  <p className="text-sm mt-1.5 text-[var(--teal)]">
                    <span className="font-semibold">{t("Say it like this")}:</span> &ldquo;{tx(term.say)}&rdquo;
                  </p>
                </details>
              ))}
            </div>
            <Link href="/learn/glossary" className="inline-block text-sm text-[var(--teal)] font-medium mt-2 hover:underline">
              {t("Technical glossary")} →
            </Link>
          </Block>
        )}

        <Block icon="message-circle" title={t("What to tell the farmer")} tone="pitch">
          <p className="text-[var(--ink)] text-lg leading-snug font-medium">&ldquo;{tx(product.learn.pitch)}&rdquo;</p>
        </Block>

        {product.learn.proof && (
          <Block icon="bar-chart-3" title={t("Proof from trials")}>
            <p className="text-[var(--ink)] leading-relaxed">{tx(product.learn.proof)}</p>
          </Block>
        )}

        {product.learn.objection && (
          <Block icon="quote" title={t("If the farmer says…")}>
            <p className="text-[var(--ink)] italic mb-2">&ldquo;{tx(product.learn.objection.q)}&rdquo;</p>
            <p className="text-sm font-semibold text-[var(--teal)] mb-0.5">{t("You can answer")}:</p>
            <p className="text-[var(--ink)] leading-relaxed">{tx(product.learn.objection.a)}</p>
          </Block>
        )}

        <Block icon="clock" title={t("Dosage")}>
          <ul className="list-disc pl-5 text-[var(--ink)] space-y-0.5">
            {txl(product.dosage).map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          {product.rx && <p className="text-sm text-amber-800 mt-2">{t("Use only as advised by a veterinarian. Follow the label withdrawal period before sale of meat or eggs.")}</p>}
        </Block>

        <Card>
          <h2 className="flex items-center gap-2 font-semibold text-[var(--ink)] mb-0.5">
            <Icon name="graduation-cap" size={18} className="text-[var(--saffron)]" />
            {t("Quick quiz")}
          </h2>
          <p className="text-sm text-[var(--muted)] mb-4">{t("Get 4 of 5 right to complete this lesson.")}</p>
          <Quiz
            key={`${slug}-${lang}`}
            slug={slug}
            questions={questions}
            labels={{
              submit: t("Check answers"),
              retry: t("Try again"),
              retake: t("Retake test"),
              passed: t("Lesson complete"),
              notPassed: t("Not yet — read the lesson again and retry."),
              score: t("Score"),
            }}
          />
        </Card>

        <div className="grid grid-cols-2 gap-2">
          <Link href={`/catalog/${slug}`} className="btn-secondary text-sm py-2.5 px-3 text-center inline-flex items-center justify-center gap-2">
            <Icon name="share" size={15} />
            {t("Open in Product Master")}
          </Link>
          {next ? (
            <Link
              href={`/learn/${category.id}/${next.slug}`}
              className="btn-primary text-sm py-2.5 px-3 text-center inline-flex items-center justify-center gap-2"
            >
              {t("Next lesson")}
              <Icon name="chevron-right" size={15} />
            </Link>
          ) : (
            <Link href={`/learn/${category.id}`} className="btn-primary text-sm py-2.5 px-3 text-center inline-flex items-center justify-center">
              {t("Back to course")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
