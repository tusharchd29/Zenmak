import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getT } from "@/lib/i18n";
import { CATEGORIES, PRODUCTS, productsIn } from "@/lib/catalog";
import { getProgress, getTeamProgress } from "@/lib/learning";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { ProgressBar } from "@/components/ProgressBar";
import { LangToggle } from "@/components/LangToggle";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function LearnPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const { lang, t, tx } = await getT();
  const isOwner = session.role === "owner";

  const [progress, team] = await Promise.all([getProgress(session.userId), isOwner ? getTeamProgress() : Promise.resolve(null)]);
  const passedTotal = PRODUCTS.filter((p) => progress.bySlug.get(p.slug)?.passed).length;

  return (
    <div>
      <PageHeader title={t("Learning")} subtitle={t("Short lessons on every product, in your language")} action={<LangToggle lang={lang} />} />

      {isOwner && !progress.available && (
        <Card className="mb-4 border-amber-300 bg-amber-50">
          <div className="flex gap-2 text-sm text-amber-900">
            <Icon name="triangle-alert" size={16} className="mt-0.5 shrink-0" />
            <span>
              Lessons and quizzes work, but progress isn&apos;t being saved yet: the <code>av_learning_progress</code> table hasn&apos;t
              been created. Run <code>supabase/migrations/20261008_av_learning_progress.sql</code> in the Supabase SQL editor to turn it on.
            </span>
          </div>
        </Card>
      )}

      <Card className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="font-medium text-[var(--ink)] flex items-center gap-2">
            <Icon name="trophy" size={18} className="text-[var(--saffron)]" />
            {t("Your progress")}
          </div>
          <div className="text-sm text-[var(--muted)]">
            {passedTotal} / {PRODUCTS.length} {t("lessons")}
          </div>
        </div>
        <ProgressBar pct={(passedTotal / PRODUCTS.length) * 100} />
      </Card>

      <Link href="/learn/report" className="block mb-2">
        <Card className="flex items-center gap-3 hover:border-[var(--seafoam)] transition-colors">
          <div className="w-9 h-9 rounded-lg bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center shrink-0">
            <Icon name="bar-chart-3" size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-[var(--ink)]">{isOwner ? t("Learning report") : t("My test results")}</div>
            <div className="text-sm text-[var(--muted)] leading-snug">{t("Who learned what, when, and marks for every attempt")}</div>
          </div>
          <Icon name="chevron-right" size={16} className="text-[var(--muted)] shrink-0" />
        </Card>
      </Link>

      <Link href="/learn/glossary" className="block mb-5">
        <Card className="flex items-center gap-3 hover:border-[var(--seafoam)] transition-colors">
          <div className="w-9 h-9 rounded-lg bg-[var(--saffron)]/15 text-[var(--saffron)] flex items-center justify-center shrink-0">
            <Icon name="book-open" size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-[var(--ink)]">{t("Technical glossary")}</div>
            <div className="text-sm text-[var(--muted)] leading-snug">{t("Every technical term with a simple meaning and a line you can use")}</div>
          </div>
          <Icon name="chevron-right" size={16} className="text-[var(--muted)] shrink-0" />
        </Card>
      </Link>

      <div className="grid gap-2 sm:grid-cols-2">
        {CATEGORIES.map((c) => {
          const lessons = productsIn(c.id);
          const done = lessons.filter((p) => progress.bySlug.get(p.slug)?.passed).length;
          return (
            <Link key={c.id} href={`/learn/${c.id}`}>
              <Card className="h-full hover:border-[var(--seafoam)] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[var(--ink)] leading-tight">{tx(c.name)}</div>
                    <div className="text-xs text-[var(--muted)] mt-0.5">
                      {done} / {lessons.length} {t("completed")}
                    </div>
                    <div className="mt-2">
                      <ProgressBar pct={(done / lessons.length) * 100} />
                    </div>
                  </div>
                  {done === lessons.length && <Icon name="circle-check" size={18} className="text-emerald-600 shrink-0" />}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {team?.available && (
        <Card className="mt-6">
          <div className="font-medium text-[var(--ink)] mb-3 flex items-center gap-2">
            <Icon name="users" size={18} className="text-[var(--teal)]" />
            {t("Team progress")}
          </div>
          <div className="space-y-3">
            {team.members.map((m) => (
              <div key={m.userId}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-[var(--ink)]">{m.name}</span>
                  <span className="text-[var(--muted)]">
                    {m.passed} / {PRODUCTS.length}
                    {m.lastActivity ? ` · ${formatDate(m.lastActivity)}` : ""}
                  </span>
                </div>
                <ProgressBar pct={(m.passed / PRODUCTS.length) * 100} />
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
