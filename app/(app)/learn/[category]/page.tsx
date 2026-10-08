import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getLang, ui } from "@/lib/i18n";
import { CATEGORIES, FOUNDATIONS, productsIn, type CategoryId } from "@/lib/catalog";
import { getProgress } from "@/lib/learning";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { LangToggle } from "@/components/LangToggle";

export const dynamic = "force-dynamic";

export default async function CoursePage({ params }: { params: Promise<{ category: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { category: categoryId } = await params;
  const category = CATEGORIES.find((c) => c.id === categoryId);
  if (!category) notFound();
  const lang = await getLang();
  const progress = await getProgress(session.userId);
  const lessons = productsIn(category.id as CategoryId);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link href="/learn" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <Icon name="chevron-right" size={14} className="rotate-180" />
          {ui("learning", lang)}
        </Link>
        <LangToggle lang={lang} />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center shrink-0">
          <Icon name={category.icon} size={22} />
        </div>
        <h1 className="text-xl font-semibold text-[var(--ink)]">{category.name[lang]}</h1>
      </div>

      <Card className="mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)] mb-1.5">{ui("courseIntro", lang)}</h2>
        <p className="text-[var(--ink)] leading-relaxed">{category.intro[lang]}</p>
      </Card>

      <Card className="mb-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--teal)] mb-2">
          <Icon name="graduation-cap" size={16} />
          {ui("foundations", lang)}
        </h2>
        <ul className="space-y-2">
          {FOUNDATIONS[category.id as CategoryId][lang].map((point) => (
            <li key={point} className="flex gap-2 text-[var(--ink)] leading-snug">
              <Icon name="lightbulb" size={16} className="text-[var(--saffron)] mt-0.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="space-y-2">
        {lessons.map((p, i) => {
          const status = progress.bySlug.get(p.slug);
          return (
            <Link key={p.slug} href={`/learn/${category.id}/${p.slug}`} className="block">
              <Card className="flex items-center gap-3 hover:border-[var(--seafoam)] transition-colors">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                    status?.passed ? "bg-emerald-100 text-emerald-700" : "bg-[var(--offwhite)] border border-[var(--border)] text-[var(--muted)]"
                  }`}
                >
                  {status?.passed ? <Icon name="check" size={16} /> : i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-[var(--ink)] leading-tight">{p.name}</div>
                  <div className="text-sm text-[var(--muted)] leading-snug line-clamp-1">{p.tagline[lang]}</div>
                </div>
                {status && (
                  <span className="text-xs text-[var(--muted)] shrink-0">
                    {status.bestScore}/{status.total}
                  </span>
                )}
                <Icon name="chevron-right" size={16} className="text-[var(--muted)] shrink-0" />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
