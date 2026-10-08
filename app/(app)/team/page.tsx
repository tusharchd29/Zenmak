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

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role !== "owner") redirect("/dashboard");

  const { data: users } = await supabaseAdmin
    .from("av_users")
    .select("id, name, role, active")
    .order("name");

  const owner = (users ?? []).filter((u) => u.role === "owner");
  const reps = (users ?? []).filter((u) => u.role === "rep");

  return (
    <div>
      <PageHeader
        title="Team"
        subtitle="Add people, set their login PINs, and deactivate anyone who leaves"
        action={<Icon name="flower" size={20} className="text-[var(--saffron)] mt-1" />}
      />
      <Card className="mb-5">
        <div className="font-medium text-[var(--ink)] mb-3">Add a team member</div>
        <ActionForm action={addTeamMember} resetOnSuccess className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">Name</label>
              <input name="name" required maxLength={60} className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">Login PIN</label>
              <input name="pin" required inputMode="numeric" pattern="[0-9]{4,8}" minLength={4} maxLength={8} placeholder="4–8 digits" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">Role</label>
              <select name="role" defaultValue="rep" className="input-field">
                <option value="rep">Rep</option>
                <option value="owner">Owner (sees everything)</option>
              </select>
            </div>
          </div>
          <SubmitButton>Add member</SubmitButton>
        </ActionForm>
        <p className="text-xs text-[var(--muted)] mt-2">Tip: use 6-digit PINs — they&apos;re much harder to guess than 4.</p>
      </Card>

      <div className="space-y-2">
        {[...owner, ...reps].map((u) => (
          <TeamMemberRow key={u.id} user={u} isSelf={u.id === session.userId} />
        ))}
      </div>
    </div>
  );
}
