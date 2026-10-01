import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { LocationCapture } from "@/components/LocationCapture";
import { Autocomplete } from "@/components/Autocomplete";
import { ZoneStateSelect } from "@/components/ZoneStateSelect";
import { getStatesByZone } from "@/lib/data";
import { createCustomer } from "../actions";
import { SubmitButton } from "@/components/SubmitButton";
import { ActionForm } from "@/components/ActionForm";

export const dynamic = "force-dynamic";

export default async function NewCustomerPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const [{ data: segments }, statesByZone] = await Promise.all([
    supabaseAdmin.from("av_segments").select("name").order("name"),
    getStatesByZone(),
  ]);

  return (
    <div>
      <PageHeader title="New customer" subtitle="Add a clinic or farm" />
      <Card>
        <ActionForm action={createCustomer} redirectTo="/customers" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              Name
            </label>
            <input name="name" required className="input-field" placeholder="Clinic name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              Phone
            </label>
            <input name="phone" className="input-field" placeholder="Optional" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              Address
            </label>
            <input name="address" className="input-field" placeholder="Optional" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              Segment
            </label>
            <Autocomplete
              name="segment"
              placeholder="e.g. Retail, Farm, Hospital"
              options={(segments ?? []).map((s) => s.name)}
            />
          </div>
          <ZoneStateSelect statesByZone={statesByZone} />
          <LocationCapture label="Location" />
          <SubmitButton>Save customer</SubmitButton>
        </ActionForm>
      </Card>
    </div>
  );
}
