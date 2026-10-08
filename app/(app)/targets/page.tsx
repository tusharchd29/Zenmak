import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { formatCurrency } from "@/lib/utils";
import { setTarget } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";
import { ActionForm } from "@/components/ActionForm";
import { getEffectiveTargets } from "@/lib/targets";
import { dayStart, monthStartIST, nextMonthStart } from "@/lib/date-range";
import { fetchAll } from "@/lib/fetch-all";
import { getT } from "@/lib/i18n";

export const dynamic = "force-dynamic";


export default async function TargetsPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();

  // This month in India time (the server runs in UTC).
  const monthStartDate = monthStartIST();
  const currentMonth = monthStartDate.slice(0, 7);

  const repId = session.role === "owner" ? null : session.userId;

  let reps: Array<{ id: string; name: string }> = [];
  if (session.role === "owner") {
    const { data } = await supabaseAdmin
      .from("av_users")
      .select("id, name")
      .eq("role", "rep")
      .order("name");
    reps = data ?? [];
  } else {
    reps = [{ id: session.userId, name: session.name }];
  }

  // Achievement = orders FULFILLED this month (by fulfilled_at, not when
  // they were created), paged because every row is summed.
  const ordersQuery = fetchAll<{ rep_id: string; amount: number | null }>((from, to) => {
    let q = supabaseAdmin
      .from("av_orders")
      .select("rep_id, amount")
      .eq("status", "fulfilled")
      .gte("fulfilled_at", dayStart(monthStartDate))
      .lt("fulfilled_at", dayStart(nextMonthStart(monthStartDate)))
      .order("id");
    if (repId) q = q.eq("rep_id", repId);
    return q.range(from, to);
  });

  // A target carries forward month to month until the owner sets a new one
  // — see lib/targets.ts. "This month" here is always the current calendar
  // month, not whatever range the global date filter might have set
  // elsewhere, since a target is inherently a monthly figure.
  // Neither of these depends on the other, so run them together.
  const [effectiveTargets, { data: orders }] = await Promise.all([
    getEffectiveTargets(repId ? [repId] : reps.map((r) => r.id), monthStartDate),
    ordersQuery,
  ]);

  const fulfilledByRep = new Map<string, number>();
  for (const o of orders ?? []) {
    fulfilledByRep.set(o.rep_id, (fulfilledByRep.get(o.rep_id) ?? 0) + (o.amount ?? 0));
  }

  const repsWithTargets = reps.filter((r) => effectiveTargets.has(r.id));

  return (
    <div>
      <PageHeader
        title={t("Targets")}
        subtitle={t("Counts only orders marked Fulfilled — not just placed")}
      />

      <div className="space-y-3 mb-6">
        {repsWithTargets.map((r) => {
          const target = effectiveTargets.get(r.id)!;
          const fulfilled = fulfilledByRep.get(r.id) ?? 0;
          const pct = Math.min(100, Math.round((fulfilled / target.amount) * 100));
          const carriedOver = target.setFor !== monthStartDate;
          return (
            <Card key={r.id}>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-[var(--ink)]">{r.name}</span>
                <span className="text-[var(--muted)]">
                  {formatCurrency(fulfilled)} / {formatCurrency(target.amount)}
                </span>
              </div>
              <ProgressBar pct={pct} />
              {carriedOver && (
                <div className="text-xs text-[var(--muted)] mt-1.5">
                  {t("Carried over — last set {month}", { month: target.setFor.slice(0, 7) })}
                </div>
              )}
            </Card>
          );
        })}
        {repsWithTargets.length === 0 && (
          <div className="text-sm text-[var(--muted)]">
            {session.role === "owner" ? t("No target has ever been set yet.") : t("No target has ever been set for you yet.")}
          </div>
        )}
      </div>

      {session.role === "owner" && (
        <Card>
          <div className="font-medium text-[var(--ink)] mb-3">{t("Set a target")}</div>
          <ActionForm action={setTarget} resetOnSuccess className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">
                {t("Rep")}
              </label>
              <select name="rep_id" required className="input-field" defaultValue="">
                <option value="" disabled>
                  {t("Select a rep")}
                </option>
                {reps.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[var(--ink)] mb-1">
                  {t("Month")}
                </label>
                <input
                  type="month"
                  name="period_month"
                  className="input-field"
                  defaultValue={currentMonth}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--ink)] mb-1">
                  {t("Target (₹)")}
                </label>
                <input
                  type="number"
                  name="target_amount"
                  className="input-field"
                  placeholder="150000"
                  required
                />
              </div>
            </div>
            <SubmitButton>{t("Save target")}</SubmitButton>
          </ActionForm>
        </Card>
      )}
    </div>
  );
}
