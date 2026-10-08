import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getRepScope } from "@/lib/data";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { EmptyState } from "@/components/EmptyState";
import { EditableCard } from "../_shared/EditableCard";
import { Autocomplete } from "@/components/Autocomplete";
import { formatDate } from "@/lib/utils";
import { createTrial } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";
import { ActionForm } from "@/components/ActionForm";
import { todayIST } from "@/lib/date-range";
import { getT } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function TrialsPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();

  const repId = getRepScope(session);
  const customersQuery = supabaseAdmin.from("av_customers").select("id, name").order("name");
  if (repId) customersQuery.eq("rep_id", repId);
  const [{ data: customers }, { data: catalogProducts }] = await Promise.all([
    customersQuery,
    supabaseAdmin.from("av_products").select("name").eq("active", true).order("name"),
  ]);

  const trialsQuery = supabaseAdmin
    .from("av_product_trials")
    .select("id, product, trial_date, outcome_notes, av_customers(name)")
    .order("trial_date", { ascending: false })
    .limit(30);
  if (repId) trialsQuery.eq("rep_id", repId);
  const { data: trials } = await trialsQuery;

  return (
    <div>
      <PageHeader title={t("Product Trials")} subtitle={t("Track sample trials with customers")} />

      <Card className="mb-6">
        <div className="font-medium text-[var(--ink)] mb-3">{t("Log a trial")}</div>
        <ActionForm action={createTrial} resetOnSuccess className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              {t("Customer")}
            </label>
            <select name="customer_id" required className="input-field" defaultValue="">
              <option value="" disabled>
                {t("Select a customer")}
              </option>
              {(customers ?? []).map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              {t("Product")}
            </label>
            <Autocomplete
              name="product"
              required
              placeholder={t("Type or pick from the catalog")}
              options={(catalogProducts ?? []).map((p) => p.name)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">{t("Date")}</label>
            <input
              type="date"
              name="trial_date"
              className="input-field"
              defaultValue={todayIST()}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              {t("Outcome notes")}
            </label>
            <textarea name="outcome_notes" rows={2} className="input-field" placeholder={t("Optional")} />
          </div>
          <SubmitButton>{t("Save trial")}</SubmitButton>
        </ActionForm>
      </Card>

      {!trials || trials.length === 0 ? (
        <Card>
          <EmptyState icon="flask-conical" title={t("No trials logged yet")} />
        </Card>
      ) : (
        <div className="space-y-2">
          {trials.map((trial) => (
            <EditableCard
              key={trial.id}
              table="av_product_trials"
              id={trial.id}
              revalidate={["/trials"]}
              initialValues={{
                product: trial.product,
                trial_date: trial.trial_date,
                outcome_notes: trial.outcome_notes,
              }}
              fields={[
                { name: "product", label: t("Product"), type: "text" },
                { name: "trial_date", label: t("Date"), type: "date" },
                { name: "outcome_notes", label: t("Outcome notes"), type: "textarea" },
              ]}
            >
              <div className="font-medium text-[var(--ink)]">
                {trial.product} ·{" "}
                {/* @ts-expect-error joined relation */}
                {trial.av_customers?.name}
              </div>
              <div className="text-sm text-[var(--muted)]">{formatDate(trial.trial_date)}</div>
              {trial.outcome_notes && (
                <div className="text-sm text-[var(--ink)] mt-1">{trial.outcome_notes}</div>
              )}
            </EditableCard>
          ))}
        </div>
      )}
    </div>
  );
}
