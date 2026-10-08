import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getRepScope } from "@/lib/data";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { LocationCapture } from "@/components/LocationCapture";
import { createVisit } from "../actions";
import { SubmitButton } from "@/components/SubmitButton";
import { PhotoField } from "@/components/PhotoField";
import { ActionForm } from "@/components/ActionForm";
import { todayIST } from "@/lib/date-range";
import { getT } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function NewVisitPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();

  const repId = getRepScope(session);
  const query = supabaseAdmin.from("av_customers").select("id, name").order("name");
  if (repId) query.eq("rep_id", repId);
  const { data: customers } = await query;

  return (
    <div>
      <PageHeader title={t("Log a visit")} />
      <Card>
        <ActionForm action={createVisit} redirectTo="/visits" className="space-y-4">
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
              {t("Visit date")}
            </label>
            <input
              type="date"
              name="visit_date"
              className="input-field"
              defaultValue={todayIST()}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              {t("Purpose")}
            </label>
            <input name="purpose" className="input-field" placeholder={t("e.g. Order follow-up")} />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              {t("Discussion summary")}
            </label>
            <textarea
              name="discussion_summary"
              rows={3}
              className="input-field"
              placeholder={t("What was discussed")}
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-[var(--ink)]">
            <input type="checkbox" name="follow_up_required" className="w-4 h-4" />
            {t("Needs a follow-up")}
          </label>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              {t("Next visit date")}
            </label>
            <input type="date" name="next_visit_date" className="input-field" />
          </div>
          <LocationCapture label={t("Visit location")} />
          <PhotoField />
          <SubmitButton>{t("Save visit")}</SubmitButton>
        </ActionForm>
      </Card>
    </div>
  );
}
