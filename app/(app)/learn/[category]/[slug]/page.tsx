import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getLang, ui } from "@/lib/i18n";
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
  const lang = await getLang();
  const category = getCategory(product.category);
  const progress = await getProgress(session.userId);
  const status = progress.bySlug.get(slug);

  const siblings = productsIn(product.category);
  const next = siblings[siblings.findIndex((p) => p.slug === slug) + 1];

  const technical = TECHNICAL[slug];
  const terms = termsFor(product);

  // Questions go to the browser without the answer key — the server grades.
  const questions = quizFor(product).map((q) => ({ id: q.id, q: q.q[lang], options: q.options.map((o) => o[lang]) }));

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link href={`/learn/${category.id}`} className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <Icon name="chevron-right" size={14} className="rotate-180" />
          {category.name[lang]}
        </Link>
        <LangToggle lang={lang} />
      </div>

      <ProductHeader product={product} lang={lang} />
      {status?.passed && (
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium px-2.5 py-1 -mt-2 mb-4">
          <Icon name="circle-check" size={14} />
          {ui("passed", lang)} · {status.bestScore}/{status.total}
        </div>
      )}

      <div className="space-y-3">
        <Block icon="target" title={ui("problem", lang)}>
          <p className="text-[var(--ink)] leading-relaxed">{product.learn.problem[lang]}</p>
        </Block>

        <Block icon="lightbulb" title={ui("how", lang)}>
          <p className="text-[var(--ink)] leading-relaxed">{product.learn.how[lang]}</p>
        </Block>

        <Block icon="award" title={ui("keyBenefits", lang)}>
          <ul className="space-y-1.5">
            {product.benefits[lang].map((b) => (
              <li key={b} className="flex gap-2 text-[var(--ink)] leading-snug">
                <Icon name="check" size={16} className="text-[var(--seafoam)] mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Block>

        {technical && (
          <Block icon="graduation-cap" title={ui("technical", lang)}>
            <p className="text-xs text-[var(--muted)] -mt-1 mb-2">{ui("technicalSub", lang)}</p>
            <ol className="space-y-2">
              {technical[lang].map((point, i) => (
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
          <Block icon="book-open" title={ui("terms", lang)}>
            <div className="divide-y divide-[var(--border)]">
              {terms.map((term) => (
                <details key={term.id} className="group py-2">
                  <summary className="flex items-center justify-between gap-2 cursor-pointer list-none font-medium text-[var(--ink)]">
                    {term.term}
                    <Icon name="chevron-down" size={16} className="text-[var(--muted)] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="text-sm text-[var(--ink)] mt-1.5 leading-relaxed">{term.meaning[lang]}</p>
                  <p className="text-sm mt-1.5 text-[var(--teal)]">
                    <span className="font-semibold">{ui("sayIt", lang)}:</span> &ldquo;{term.say[lang]}&rdquo;
                  </p>
                </details>
              ))}
            </div>
            <Link href="/learn/glossary" className="inline-block text-sm text-[var(--teal)] font-medium mt-2 hover:underline">
              {ui("glossary", lang)} →
            </Link>
          </Block>
        )}

        <Block icon="message-circle" title={ui("pitch", lang)} tone="pitch">
          <p className="text-[var(--ink)] text-lg leading-snug font-medium">&ldquo;{product.learn.pitch[lang]}&rdquo;</p>
        </Block>

        {product.learn.proof && (
          <Block icon="bar-chart-3" title={ui("proof", lang)}>
            <p className="text-[var(--ink)] leading-relaxed">{product.learn.proof[lang]}</p>
          </Block>
        )}

        {product.learn.objection && (
          <Block icon="quote" title={ui("objection", lang)}>
            <p className="text-[var(--ink)] italic mb-2">&ldquo;{product.learn.objection.q[lang]}&rdquo;</p>
            <p className="text-sm font-semibold text-[var(--teal)] mb-0.5">{ui("answer", lang)}:</p>
            <p className="text-[var(--ink)] leading-relaxed">{product.learn.objection.a[lang]}</p>
          </Block>
        )}

        <Block icon="clock" title={ui("dosage", lang)}>
          <ul className="list-disc pl-5 text-[var(--ink)] space-y-0.5">
            {product.dosage[lang].map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          {product.rx && <p className="text-sm text-amber-800 mt-2">{ui("rxNote", lang)}</p>}
        </Block>

        <Card>
          <h2 className="flex items-center gap-2 font-semibold text-[var(--ink)] mb-0.5">
            <Icon name="graduation-cap" size={18} className="text-[var(--saffron)]" />
            {ui("quiz", lang)}
          </h2>
          <p className="text-sm text-[var(--muted)] mb-4">{ui("quizSub", lang)}</p>
          <Quiz
            key={`${slug}-${lang}`}
            slug={slug}
            questions={questions}
            labels={{
              submit: ui("submit", lang),
              retry: ui("retry", lang),
              retake: ui("retake", lang),
              passed: ui("passed", lang),
              notPassed: ui("notPassed", lang),
              score: ui("score", lang),
            }}
          />
        </Card>

        <div className="grid grid-cols-2 gap-2">
          <Link href={`/catalog/${slug}`} className="btn-secondary text-sm py-2.5 px-3 text-center inline-flex items-center justify-center gap-2">
            <Icon name="share" size={15} />
            {ui("openInMaster", lang)}
          </Link>
          {next ? (
            <Link
              href={`/learn/${category.id}/${next.slug}`}
              className="btn-primary text-sm py-2.5 px-3 text-center inline-flex items-center justify-center gap-2"
            >
              {ui("nextLesson", lang)}
              <Icon name="chevron-right" size={15} />
            </Link>
          ) : (
            <Link href={`/learn/${category.id}`} className="btn-primary text-sm py-2.5 px-3 text-center inline-flex items-center justify-center">
              {ui("backToCourse", lang)}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
