import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getT, tFor, tx as txOf } from "@/lib/i18n";
import { getProduct, getCategory, PRODUCTS } from "@/lib/catalog";
import { getLearningReport, type PersonReport } from "@/lib/learning";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { ProgressBar } from "@/components/ProgressBar";
import { LangToggle } from "@/components/LangToggle";
import { formatDateTime } from "@/lib/utils";
import { addDaysIST, todayIST } from "@/lib/date-range";
import type { L, Lang } from "@/lib/catalog/types";

export const dynamic = "force-dynamic";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[var(--offwhite)] border border-[var(--border)] px-3 py-2">
      <div className="text-xs text-[var(--muted)]">{label}</div>
      <div className="font-semibold text-[var(--ink)]">{value}</div>
    </div>
  );
}

function PersonDetail({ person, lang }: { person: PersonReport; lang: Lang }) {
  const t = tFor(lang);
  const tx = (l: L) => txOf(l, lang);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Stat label={t("Lessons passed")} value={`${person.lessonsPassed} / ${PRODUCTS.length}`} />
        <Stat label={t("Total attempts")} value={String(person.attempts)} />
        <Stat label={t("Avg best marks")} value={person.avgBestPct == null ? "—" : `${person.avgBestPct}%`} />
        <Stat label={t("Last activity")} value={person.lastActivity ? formatDateTime(person.lastActivity) : "—"} />
      </div>

      <Card>
        <h2 className="font-semibold text-[var(--ink)] mb-2">{t("Marks by lesson")}</h2>
        {person.lessons.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">{t("No tests taken yet.")}</p>
        ) : (
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="text-left text-xs text-[var(--muted)] border-b border-[var(--border)]">
                  <th className="py-2 pr-2 font-medium">{t("Lesson")}</th>
                  <th className="py-2 px-2 font-medium">{t("Best")}</th>
                  <th className="py-2 px-2 font-medium">{t("Last")}</th>
                  <th className="py-2 px-2 font-medium">{t("Tries")}</th>
                  <th className="py-2 px-2 font-medium">{t("First passed")}</th>
                  <th className="py-2 pl-2 font-medium">{t("Last attempt")}</th>
                </tr>
              </thead>
              <tbody>
                {person.lessons.map((l) => {
                  const p = getProduct(l.slug);
                  return (
                    <tr key={l.slug} className="border-b border-[var(--border)] last:border-0 align-top">
                      <td className="py-2 pr-2">
                        <div className="font-medium text-[var(--ink)]">{p?.name ?? l.slug}</div>
                        {p && <div className="text-xs text-[var(--muted)]">{tx(getCategory(p.category).name)}</div>}
                      </td>
                      <td className="py-2 px-2 whitespace-nowrap">
                        <span className={l.passed ? "text-emerald-700 font-semibold" : "text-amber-700 font-semibold"}>
                          {l.bestScore}/{l.total}
                        </span>
                      </td>
                      <td className="py-2 px-2 whitespace-nowrap">
                        {l.lastScore}/{l.total}
                      </td>
                      <td className="py-2 px-2">{l.attempts}</td>
                      <td className="py-2 px-2 whitespace-nowrap text-xs">{l.firstPassedAt ? formatDateTime(l.firstPassedAt) : "—"}</td>
                      <td className="py-2 pl-2 whitespace-nowrap text-xs">{formatDateTime(l.lastAttemptAt)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {person.recent.length > 0 && (
        <Card>
          <h2 className="font-semibold text-[var(--ink)] mb-2">{t("Every recent attempt")}</h2>
          <ul className="divide-y divide-[var(--border)]">
            {person.recent.map((a, i) => (
              <li key={`${a.slug}-${a.at}-${i}`} className="py-2 flex items-center justify-between gap-3 text-sm">
                <div className="min-w-0">
                  <div className="text-[var(--ink)] truncate">{getProduct(a.slug)?.name ?? a.slug}</div>
                  <div className="text-xs text-[var(--muted)]">{formatDateTime(a.at)}</div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    a.passed ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  {a.score}/{a.total} · {a.passed ? (t("Pass")) : t("Fail")}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

export default async function LearningReportPage({ searchParams }: { searchParams: Promise<{ user?: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { lang, t, tx, txl } = await getT();
  const isOwner = session.role === "owner";
  const { user } = await searchParams;

  // Reps only ever see themselves, whatever the URL says.
  const scopeTo = isOwner ? user : session.userId;
  const report = await getLearningReport(scopeTo);
  const selected = scopeTo ? report.people.find((p) => p.userId === scopeTo) : undefined;

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link
          href={isOwner && selected ? "/learn/report" : "/learn"}
          className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]"
        >
          <Icon name="chevron-right" size={14} className="rotate-180" />
          {isOwner && selected ? (t("Whole team")) : t("Learning")}
        </Link>
        <LangToggle lang={lang} />
      </div>

      <h1 className="text-xl font-semibold text-[var(--ink)]">
        {selected ? selected.name : t("Learning report")}
      </h1>
      <p className="text-sm text-[var(--muted)] mt-0.5 mb-3">
        {t("Who learned what, when, and what marks they got")}
      </p>

      {/* Last 12 months, as spreadsheets — scoped to the selected person
          (or, for a rep, always themselves; the route enforces that). */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(["learning", "learning-tests"] as const).map((sheet) => {
          const qs = new URLSearchParams({ sheet, start: addDaysIST(-365), end: todayIST() });
          if (selected) qs.append("rep", selected.userId);
          return (
            <a key={sheet} href={`/api/reports/csv?${qs}`} className="btn-secondary text-sm px-3 py-1.5 inline-flex items-center gap-1.5">
              <Icon name="download" size={14} />
              {sheet === "learning" ? (t("Summary (Excel)")) : t("Every test (Excel)")}
            </a>
          );
        })}
      </div>

      {!report.available ? (
        <Card>
          <p className="text-sm text-[var(--muted)]">
            {t("The report isn't available right now — the attempts table couldn't be read.")}
          </p>
        </Card>
      ) : selected ? (
        <PersonDetail person={selected} lang={lang} />
      ) : (
        <div className="space-y-2">
          {report.people.map((p) => (
            <Link key={p.userId} href={`/learn/report?user=${p.userId}`} className="block">
              <Card className="hover:border-[var(--seafoam)] transition-colors">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div>
                    <div className="font-medium text-[var(--ink)]">{p.name}</div>
                    <div className="text-xs text-[var(--muted)]">
                      {p.attempts} {t("attempts")} · {t("avg")} {p.avgBestPct == null ? "—" : `${p.avgBestPct}%`} ·{" "}
                      {p.lastActivity ? formatDateTime(p.lastActivity) : t("not started")}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-[var(--ink)] shrink-0">
                    {p.lessonsPassed}/{PRODUCTS.length}
                  </div>
                </div>
                <ProgressBar pct={(p.lessonsPassed / PRODUCTS.length) * 100} />
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
