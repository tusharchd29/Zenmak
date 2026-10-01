import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getRepScope, getStatesByZone } from "@/lib/data";
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
import { MapView } from "../map/MapView";

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
        .select("id, tour_id, customer_id, planned_date, notes, completed, av_customers(name)")
        .in("tour_id", tourIds)
        .order("planned_date", { ascending: true })
    : { data: [] as never[] };

  const stopsByTour = new Map<string, Stop[]>();
  for (const s of allStops ?? []) {
    const list = stopsByTour.get(s.tour_id) ?? [];
    list.push({
      id: s.id,
      // @ts-expect-error joined relation
      customerName: s.av_customers?.name ?? null,
      planned_date: s.planned_date,
      notes: s.notes,
      completed: s.completed,
    });
    stopsByTour.set(s.tour_id, list);
  }

  return (
    <div>
      <PageHeader title="Tour Plan" subtitle="Weekly territory plans" />

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
                />
                {t.zone && (
                  <div className="mt-3 pt-3 border-t border-[var(--border)]" onClick={(e) => e.stopPropagation()}>
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
