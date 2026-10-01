"use client";

import { useRef, useState, useTransition } from "react";
import { createTourStop, toggleTourStop, deleteTourStop, reorderTourStop } from "./actions";
import { formatDate, daysSince, dateRange, distanceKm } from "@/lib/utils";
import { Icon } from "@/components/icon";

export type Stop = {
  id: string;
  customer_id: string | null;
  customerName: string | null;
  latitude: number | null;
  longitude: number | null;
  planned_date: string;
  notes: string | null;
  completed: boolean;
  sort_order: number;
};
type Customer = { id: string; name: string };

/** Beyond this, flag the jump to the next stop as a long drive — just a
 * visual nudge, not a hard limit. */
const LONG_GAP_KM = 150;

/** Planned customer stops for one tour's date range — laid out day by day
 * (including empty days), with per-day add, reorder within a day, visited
 * state, and a distance hint between consecutive same-day stops. Nested
 * inside the tour's EditableCard as static children, so it only shows in
 * the card's non-editing view. */
export function TourStops({
  tourId,
  stops,
  customers,
  weekStart,
  endDate,
  lastVisitByCustomer,
}: {
  tourId: string;
  stops: Stop[];
  customers: Customer[];
  weekStart: string;
  endDate: string | null;
  lastVisitByCustomer: Record<string, string | null>;
}) {
  const [addingDay, setAddingDay] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const doneCount = stops.filter((s) => s.completed).length;

  const days = dateRange(weekStart, endDate ?? weekStart);
  const byDay = new Map<string, Stop[]>();
  for (const s of stops) {
    const list = byDay.get(s.planned_date) ?? [];
    list.push(s);
    byDay.set(s.planned_date, list);
  }
  for (const list of byDay.values()) list.sort((a, b) => a.sort_order - b.sort_order);

  // Most-overdue-first: never-visited customers, then longest since last
  // visit, then alphabetical — so the rep sees who most needs a visit at
  // the top of the picker instead of hunting through an A-Z list.
  const sortedCustomers = [...customers].sort((a, b) => {
    const da = daysSince(lastVisitByCustomer[a.id] ?? null);
    const db = daysSince(lastVisitByCustomer[b.id] ?? null);
    if (da === null && db === null) return a.name.localeCompare(b.name);
    if (da === null) return -1;
    if (db === null) return 1;
    if (da !== db) return db - da;
    return a.name.localeCompare(b.name);
  });

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setError(null);
    startTransition(async () => {
      const result = await createTourStop(fd);
      if (result && result.ok === false) {
        setError(result.message || "Couldn't add that stop — try again.");
        return;
      }
      formRef.current?.reset();
      setAddingDay(null);
    });
  }

  function move(stopId: string, direction: "up" | "down") {
    setError(null);
    startTransition(async () => {
      const result = await reorderTourStop(stopId, tourId, direction);
      if (!result.ok) setError(result.message || "Couldn't reorder that stop.");
    });
  }

  return (
    <div className="mt-2 pt-2 border-t border-[var(--border)]">
      <div className="text-xs text-[var(--muted)] mb-2">
        {stops.length === 0 ? "No stops planned yet" : `${doneCount}/${stops.length} visited`}
      </div>

      {error && (
        <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-2 py-1.5 mb-2">
          {error}
        </div>
      )}

      <div className="space-y-3">
        {days.map((day) => {
          const dayStops = byDay.get(day) ?? [];
          return (
            <div key={day}>
              <div className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wide mb-1">
                {formatDate(day)}
              </div>

              {dayStops.length === 0 ? (
                <div className="text-xs text-[var(--muted)] italic mb-1">No stops planned</div>
              ) : (
                <div className="space-y-1.5 mb-1">
                  {dayStops.map((s, i) => {
                    const next = dayStops[i + 1];
                    const km =
                      next && s.latitude != null && s.longitude != null && next.latitude != null && next.longitude != null
                        ? distanceKm({ latitude: s.latitude, longitude: s.longitude }, { latitude: next.latitude, longitude: next.longitude })
                        : null;
                    return (
                      <div key={s.id}>
                        <div className="flex items-center justify-between gap-2 text-sm">
                          <label className="flex items-center gap-2 min-w-0 flex-1 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={s.completed}
                              disabled={pending}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setError(null);
                                startTransition(async () => {
                                  const result = await toggleTourStop(s.id, tourId, checked);
                                  if (!result.ok) setError(result.message || "Couldn't update that stop.");
                                });
                              }}
                              className="w-4 h-4 shrink-0"
                            />
                            <span
                              className={`truncate ${s.completed ? "line-through text-[var(--muted)]" : "text-[var(--ink)]"}`}
                            >
                              {s.customerName ?? "Unnamed stop"}
                              {s.notes ? ` — ${s.notes}` : ""}
                            </span>
                          </label>
                          <div className="flex items-center shrink-0">
                            <button
                              type="button"
                              disabled={pending || i === 0}
                              onClick={() => move(s.id, "up")}
                              className="text-[var(--muted)] hover:text-[var(--teal)] p-1 disabled:opacity-20"
                              aria-label="Move up"
                            >
                              <Icon name="chevron-up" size={13} />
                            </button>
                            <button
                              type="button"
                              disabled={pending || i === dayStops.length - 1}
                              onClick={() => move(s.id, "down")}
                              className="text-[var(--muted)] hover:text-[var(--teal)] p-1 disabled:opacity-20"
                              aria-label="Move down"
                            >
                              <Icon name="chevron-down" size={13} />
                            </button>
                            <button
                              type="button"
                              disabled={pending}
                              onClick={() => {
                                setError(null);
                                startTransition(async () => {
                                  const result = await deleteTourStop(s.id, tourId);
                                  if (!result.ok) setError(result.message || "Couldn't remove that stop.");
                                });
                              }}
                              className="text-[var(--muted)] hover:text-red-600 p-1 disabled:opacity-30"
                              aria-label="Remove stop"
                            >
                              <Icon name="x" size={13} />
                            </button>
                          </div>
                        </div>
                        {km != null && (
                          <div
                            className={`text-[11px] pl-6 ${km > LONG_GAP_KM ? "text-amber-600 font-medium" : "text-[var(--muted)]"}`}
                          >
                            ↓ ~{Math.round(km)} km to next stop{km > LONG_GAP_KM ? " — long drive" : ""}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {addingDay === day ? (
                <form ref={formRef} onSubmit={handleAdd} className="space-y-2 mt-1">
                  <input type="hidden" name="tour_id" value={tourId} />
                  <input type="hidden" name="planned_date" value={day} />
                  <select name="customer_id" className="input-field text-xs py-1.5" defaultValue="">
                    <option value="">No specific customer</option>
                    {sortedCustomers.map((c) => {
                      const d = daysSince(lastVisitByCustomer[c.id] ?? null);
                      const label = d === null ? "Never visited" : `${d}d ago`;
                      return (
                        <option key={c.id} value={c.id}>
                          {c.name} · {label}
                        </option>
                      );
                    })}
                  </select>
                  <input name="notes" placeholder="Notes (optional)" className="input-field text-xs py-1.5" />
                  <div className="flex gap-2">
                    <button type="submit" disabled={pending} className="btn-primary text-xs px-3 py-1.5">
                      {pending ? "Adding…" : "Add"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setAddingDay(null)}
                      disabled={pending}
                      className="text-xs text-[var(--muted)] underline"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setAddingDay(day)}
                  className="text-xs text-[var(--teal)] font-medium inline-flex items-center gap-1"
                >
                  <Icon name="plus" size={12} /> Add a stop
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
