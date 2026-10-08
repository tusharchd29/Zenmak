import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { REPORT_SECTIONS, REPORT_SECTION_LABEL } from "@/lib/reports";
import { SHEETS } from "@/lib/report-csv";
import { monthStartIST, todayIST } from "@/lib/date-range";
import { getT } from "@/lib/i18n";

export const dynamic = "force-dynamic";


export default async function ReportsPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  const isOwner = session.role === "owner";

  const today = todayIST();
  const monthStart = monthStartIST();

  const { data: reps } = isOwner
    ? await supabaseAdmin.from("av_users").select("id, name").eq("role", "rep").order("name")
    : { data: [] as { id: string; name: string }[] };

  return (
    <div>
      <PageHeader
        title={t("Reports")}
        subtitle={isOwner ? t("Whole-team activity, straight from the data") : t("Your activity, straight from the data")}
      />
      <Card>
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[var(--teal)]/10 flex items-center justify-center text-[var(--teal)] shrink-0">
            <Icon name="bar-chart-3" size={18} />
          </div>
          <div>
            <div className="font-medium text-[var(--ink)]">{t("Field ops report (PDF)")}</div>
            <p className="text-sm text-[var(--muted)] mt-0.5">
              {isOwner
                ? t("Pick a date range, who it should cover, and which sections to include and download a PDF.")
                : t("Pick a date range and download a PDF.")}{" "}
              {t("Every figure comes directly from your data — nothing here is AI-written.")}{" "}
              {t("Customer names link straight to their pinned location on Google Maps wherever a location has been captured.")}
            </p>
            <p className="text-xs text-[var(--muted)] mt-1">
              {t("Downloaded reports are in English.")}
            </p>
          </div>
        </div>

        {/* GET so the browser can open the PDF directly; no server action
            needed since this doesn't write anything. */}
        <form action="/api/reports/pdf" method="GET" target="_blank" className="space-y-4">
          <div className="grid grid-cols-2 gap-3 items-end">
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">{t("From")}</label>
              <input
                type="date"
                name="start"
                required
                max={today}
                defaultValue={monthStart}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">{t("To")}</label>
              <input
                type="date"
                name="end"
                required
                max={today}
                defaultValue={today}
                className="input-field"
              />
            </div>
          </div>

          {isOwner && reps && reps.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1.5">
                {t("Who (leave all unchecked for the whole team)")}
              </label>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {reps.map((r) => (
                  <label key={r.id} className="inline-flex items-center gap-1.5 text-sm text-[var(--ink)]">
                    <input type="checkbox" name="rep" value={r.id} className="rounded" />
                    {r.name}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1.5">
              {t("Which reports to include")}
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {REPORT_SECTIONS.map((s) => (
                <label key={s} className="inline-flex items-center gap-1.5 text-sm text-[var(--ink)]">
                  <input type="checkbox" name="section" value={s} defaultChecked className="rounded" />
                  {t(REPORT_SECTION_LABEL[s])}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-2.5 inline-flex items-center justify-center gap-2"
          >
            <Icon name="bar-chart-3" size={16} />
            {t("Download PDF report")}
          </button>

          <div className="border-t border-[var(--border)] pt-4">
            <label className="block text-sm font-medium text-[var(--ink)] mb-1.5">
              {isOwner
                ? t("Or download one sheet for Excel / Google Sheets (same dates and people)")
                : t("Or download one sheet for Excel / Google Sheets (same dates)")}
            </label>
            <div className="flex gap-2">
              <select name="sheet" defaultValue="orders" className="input-field flex-1">
                {Object.entries(SHEETS).map(([key, sheet]) => (
                  <option key={key} value={key}>
                    {t(sheet.label)}
                  </option>
                ))}
              </select>
              {/* Same form, different endpoint: formAction sends the dates and
                  rep filters to the CSV route instead of the PDF one. */}
              <button
                type="submit"
                formAction="/api/reports/csv"
                className="btn-secondary px-4 py-2 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Icon name="download" size={16} />
                Excel
              </button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}
