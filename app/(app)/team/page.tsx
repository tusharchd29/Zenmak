import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Icon } from "@/components/icon";
import { TeamMemberRow } from "./TeamMemberRow";
import { Card } from "@/components/Card";
import { ActionForm } from "@/components/ActionForm";
import { SubmitButton } from "@/components/SubmitButton";
import { addTeamMember } from "./actions";
import { getT } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role !== "owner") redirect("/dashboard");
  const { t } = await getT();

  const { data: users } = await supabaseAdmin
    .from("av_users")
    .select("id, name, role, active")
    .order("name");

  const owner = (users ?? []).filter((u) => u.role === "owner");
  const reps = (users ?? []).filter((u) => u.role === "rep");

  return (
    <div>
      <PageHeader
        title={t("Team")}
        subtitle={t("Add people, set their login PINs, and deactivate anyone who leaves")}
        action={<Icon name="flower" size={20} className="text-[var(--saffron)] mt-1" />}
      />
      <Card className="mb-5">
        <div className="font-medium text-[var(--ink)] mb-3">{t("Add a team member")}</div>
        <ActionForm action={addTeamMember} resetOnSuccess className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">{t("Name")}</label>
              <input name="name" required maxLength={60} className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">{t("Login PIN")}</label>
              <input name="pin" required inputMode="numeric" pattern="[0-9]{4,8}" minLength={4} maxLength={8} placeholder={t("4–8 digits")} className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">{t("Role")}</label>
              <select name="role" defaultValue="rep" className="input-field">
                <option value="rep">{t("Rep")}</option>
                <option value="owner">{t("Owner (sees everything)")}</option>
              </select>
            </div>
          </div>
          <SubmitButton>{t("Add member")}</SubmitButton>
        </ActionForm>
        <p className="text-xs text-[var(--muted)] mt-2">{t("Tip: use 6-digit PINs — they're much harder to guess than 4.")}</p>
      </Card>

      <div className="space-y-2">
        {[...owner, ...reps].map((u) => (
          <TeamMemberRow key={u.id} user={u} isSelf={u.id === session.userId} />
        ))}
      </div>
    </div>
  );
}
