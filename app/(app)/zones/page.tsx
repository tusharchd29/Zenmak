import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { ZONES, ZONE_LABEL, type Zone } from "@/lib/utils";
import { ZoneStateRow } from "./ZoneStateRow";

export const dynamic = "force-dynamic";

export default async function ZonesPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role !== "owner") redirect("/dashboard");

  const { data: states } = await supabaseAdmin
    .from("av_zone_states")
    .select("id, state, zone")
    .order("state");

  const byZone = new Map<Zone, { id: string; state: string; zone: Zone }[]>();
  for (const z of ZONES) byZone.set(z, []);
  for (const s of states ?? []) {
    const list = byZone.get(s.zone as Zone);
    if (list) list.push(s as { id: string; state: string; zone: Zone });
  }

  return (
    <div>
      <PageHeader
        title="Zones & States"
        subtitle="Reference only — see which states sit in each zone and move a state across zones. Doesn't change any customer's own zone."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {ZONES.map((z) => {
          const list = byZone.get(z) ?? [];
          return (
            <Card key={z}>
              <div className="font-medium text-[var(--ink)] mb-2 flex items-baseline justify-between">
                <span>{ZONE_LABEL[z]}</span>
                <span className="text-xs text-[var(--muted)] font-normal">{list.length} states</span>
              </div>
              {list.length === 0 ? (
                <div className="text-xs text-[var(--muted)]">No states in this zone</div>
              ) : (
                <div>
                  {list.map((s) => (
                    <ZoneStateRow key={s.id} zoneState={s} />
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
