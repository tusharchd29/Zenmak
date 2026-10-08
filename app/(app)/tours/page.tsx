import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getRepScope, getStatesByZone, getLastVisitByCustomer } from "@/lib/data";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { EmptyState } from "@/components/EmptyState";
import { EditableCard } from "../_shared/EditableCard";
import { formatDate, ZONES, ZONE_LABEL, type Zone } from "@/lib/utils";
import { createTourPlan } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";
import { ActionForm } from "@/components/ActionForm";
import { TourStops, type Stop } from "./TourStops";
import { TourPlanZoneFields } from "./TourPlanZoneFields";
import { TourStatesEditor } from "./TourStatesEditor";
import { MapView } from "../map/MapViewLazy";
import { ShareTourButton } from "./ShareTourButton";

export const dynamic = "force-dynamic";

export default async function ToursPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const repId = getRepScope(session);

  const toursQuery = supabaseAdmin
    .from("av_tours")
    .select("id, week_start, end_date, zone, states, plan_notes, rep_id, av_users(name)")
    .order("week_start", { ascending: false })
    .limit(20);
  if (repId) toursQuery.eq("rep_id", repId);

  const customersQuery = supabaseAdmin
    .from("av_customers")
    .select("id, name, rep_id, zone, state, segment, latitude, longitude")
    .order("name");
  if (repId) customersQuery.eq("rep_id", repId);

  const [{ data: tours }, { data: allCustomers }, statesByZone] = await Promise.all([
    toursQuery,
    customersQuery,
    getStatesByZone(),
  ]);

  const tourIds = (tours ?? []).map((t) => t.id);
  const { data: allStops } = tourIds.length
    ? await supabaseAdmin
        .from("av_tour_stops")
        .select(
          "id, tour_id, customer_id, planned_date, notes, completed, sort_order, av_customers(name, latitude, longitude)",
        )
        .in("tour_id", tourIds)
        .order("planned_date", { ascending: true })
        .order("sort_order", { ascending: true })
    : { data: [] as never[] };

  // Last-visit date for every customer that could show up in a stop picker —
  // used to surface overdue customers first (feature: suggest overdue
  // customers). Fetched once for the whole page rather than per tour.
  const lastVisitByCustomer = await getLastVisitByCustomer((allCustomers ?? []).map((c) => c.id));

  const stopsByTour = new Map<string, Stop[]>();
  for (const s of allStops ?? []) {
    const list = stopsByTour.get(s.tour_id) ?? [];
    // @ts-expect-error joined relation
    const joinedCustomer = s.av_customers as { name: string; latitude: number | null; longitude: number | null } | null;
    list.push({
      id: s.id,
      customer_id: s.customer_id,
      customerName: joinedCustomer?.name ?? null,
      latitude: joinedCustomer?.latitude ?? null,
      longitude: joinedCustomer?.longitude ?? null,
      planned_date: s.planned_date,
      notes: s.notes,
      completed: s.completed,
      sort_order: s.sort_order,
    });
    stopsByTour.set(s.tour_id, list);
  }

  // Owner-only: one map showing every rep's planned stops at once, pins
  // colored per rep with a legend — so the owner can see the whole team's
  // territory coverage for the period at a glance, not tour by tour.
  type TeamMapCustomer = { id: string; name: string; latitude: number; longitude: number; zone: string | null; segment: string | null; color: string };
  const TEAM_MAP_PALETTE = ["#028090", "#c0392b", "#5a3d99", "#e67e22", "#16a34a", "#d946ef", "#0ea5e9", "#78350f"];
  let teamMap: { customers: TeamMapCustomer[]; legend: Array<{ repId: string; name: string; color: string }> } | null = null;
  if (session.role === "owner") {
    const repColor = new Map<string, string>();
    const legend: Array<{ repId: string; name: string; color: string }> = [];
    for (const t of tours ?? []) {
      if (repColor.has(t.rep_id)) continue;
      const color = TEAM_MAP_PALETTE[repColor.size % TEAM_MAP_PALETTE.length];
      repColor.set(t.rep_id, color);
      // @ts-expect-error joined relation
      legend.push({ repId: t.rep_id, name: t.av_users?.name ?? "Rep", color });
    }
    const seenCustomer = new Set<string>();
    const teamCustomers: TeamMapCustomer[] = [];
    for (const t of tours ?? []) {
      const color = repColor.get(t.rep_id) ?? TEAM_MAP_PALETTE[0];
      for (const s of stopsByTour.get(t.id) ?? []) {
        if (!s.customer_id || s.latitude == null || s.longitude == null) continue;
        if (seenCustomer.has(s.customer_id)) continue;
        seenCustomer.add(s.customer_id);
        teamCustomers.push({
          id: s.customer_id,
          name: s.customerName ?? "Customer",
          latitude: s.latitude,
          longitude: s.longitude,
          zone: null,
          segment: null,
          color,
        });
      }
    }
    teamMap = { customers: teamCustomers, legend };
  }

  return (
    <div>
      <PageHeader title="Tour Plan" subtitle="Weekly territory plans" />

      {teamMap && teamMap.customers.length > 0 && (
        <Card className="mb-6">
          <div className="font-medium text-[var(--ink)] mb-2">Team tour map</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
            {teamMap.legend.map((r) => (
              <div key={r.repId} className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: r.color }} />
                {r.name}
              </div>
            ))}
          </div>
          <MapView customers={teamMap.customers} height="360px" />
        </Card>
      )}

      <Card className="mb-6">
        <div className="font-medium text-[var(--ink)] mb-3">Plan a tour</div>
        <ActionForm action={createTourPlan} resetOnSuccess className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">From</label>
              <input type="date" name="week_start" required className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-1">To</label>
              <input type="date" name="end_date" className="input-field" />
            </div>
          </div>
          <TourPlanZoneFields statesByZone={statesByZone} />
          <div>
            <label className="block text-sm font-medium text-[var(--ink)] mb-1">
              Overview notes
            </label>
            <textarea
              name="plan_notes"
              rows={2}
              className="input-field"
              placeholder="Optional — anything not tied to a specific stop"
            />
          </div>
          <p className="text-xs text-[var(--muted)]">
            Add specific customer stops once the plan is saved.
          </p>
          <SubmitButton>Save plan</SubmitButton>
        </ActionForm>
      </Card>

      {!tours || tours.length === 0 ? (
        <Card>
          <EmptyState icon="calendar" title="No tour plans yet" />
        </Card>
      ) : (
        <div className="space-y-2">
          {tours.map((t) => {
            // A rep only picks stops from their own customers; the owner
            // picks from whichever rep owns this tour.
            const repScopedCustomers = repId
              ? (allCustomers ?? []).filter((c) => c.rep_id === repId)
              : (allCustomers ?? []).filter((c) => c.rep_id === t.rep_id);
            // Narrow further to the states this trip actually covers, once
            // some are picked — an empty selection means "the whole zone",
            // so it doesn't filter anything out.
            const tourStates = t.states ?? [];
            const tourCustomers =
              tourStates.length > 0
                ? repScopedCustomers.filter((c) => c.state && tourStates.includes(c.state))
                : repScopedCustomers;
            const mapCustomers = tourCustomers.filter(
              (c): c is typeof c & { latitude: number; longitude: number } =>
                c.latitude != null && c.longitude != null,
            );
            return (
              <EditableCard
                key={t.id}
                table="av_tours"
                id={t.id}
                revalidate={["/tours"]}
                initialValues={{
                  week_start: t.week_start,
                  end_date: t.end_date,
                  zone: t.zone,
                  plan_notes: t.plan_notes,
                }}
                fields={[
                  { name: "week_start", label: "From", type: "date" },
                  { name: "end_date", label: "To", type: "date" },
                  {
                    name: "zone",
                    label: "Zone",
                    type: "select",
                    options: [
                      { value: "", label: "Not set" },
                      ...ZONES.map((z) => ({ value: z, label: ZONE_LABEL[z as Zone] })),
                    ],
                  },
                  { name: "plan_notes", label: "Overview notes", type: "textarea" },
                ]}
              >
                <div className="text-sm font-medium text-[var(--ink)]">
                  {formatDate(t.week_start)}
                  {t.end_date && t.end_date !== t.week_start && ` – ${formatDate(t.end_date)}`}
                  {t.zone && (
                    <span className="text-[var(--muted)]"> · {ZONE_LABEL[t.zone as Zone] ?? t.zone}</span>
                  )}
                  {session.role === "owner" && (
                    // @ts-expect-error joined relation
                    <span className="text-[var(--muted)]"> · {t.av_users?.name}</span>
                  )}
                </div>
                {t.plan_notes && <div className="text-sm text-[var(--ink)] mt-1">{t.plan_notes}</div>}
                <TourStatesEditor
                  tourId={t.id}
                  zone={t.zone}
                  states={tourStates}
                  statesByZone={statesByZone}
                />
                <TourStops
                  tourId={t.id}
                  stops={stopsByTour.get(t.id) ?? []}
                  customers={tourCustomers}
                  weekStart={t.week_start}
                  endDate={t.end_date}
                  lastVisitByCustomer={lastVisitByCustomer}
                />
                <ShareTourButton
                  weekStart={t.week_start}
                  endDate={t.end_date}
                  zone={t.zone ? (ZONE_LABEL[t.zone as Zone] ?? t.zone) : null}
                  states={tourStates}
                  planNotes={t.plan_notes}
                  stops={stopsByTour.get(t.id) ?? []}
                />
                {t.zone && (
                  <div className="mt-3 pt-3 border-t border-[var(--border)]">
                    <div className="text-xs text-[var(--muted)] mb-1.5">
                      {mapCustomers.length} of your customers {tourStates.length > 0 ? "in these states" : "in this zone"}
                    </div>
                    <MapView
                      customers={mapCustomers.map((c) => ({
                        id: c.id,
                        name: c.name,
                        latitude: c.latitude,
                        longitude: c.longitude,
                        zone: c.zone,
                        segment: c.segment,
                      }))}
                      height="320px"
                      highlightStates={{
                        zone: t.zone as Zone,
                        allStates: statesByZone[t.zone as Zone] ?? [],
                        selectedStates: tourStates,
                      }}
                    />
                  </div>
                )}
              </EditableCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
