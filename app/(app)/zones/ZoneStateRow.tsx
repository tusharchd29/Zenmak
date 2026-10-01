"use client";

import { useState, useTransition } from "react";
import { updateStateZone } from "./actions";
import { ZONES, ZONE_LABEL, type Zone } from "@/lib/utils";

type ZoneState = { id: string; state: string; zone: Zone };

/** One state with a zone <select> that saves immediately on change —
 * no separate edit mode, since moving a state is the only thing this row
 * does. Mirrors the inline-save pattern used elsewhere (e.g. TourStops'
 * checkbox toggle), just with a select instead of a checkbox. */
export function ZoneStateRow({ zoneState }: { zoneState: ZoneState }) {
  const [zone, setZone] = useState<Zone>(zoneState.zone);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as Zone;
    const previous = zone;
    setZone(next);
    setError(null);
    startTransition(async () => {
      const result = await updateStateZone(zoneState.id, next);
      if (!result.ok) {
        setZone(previous);
        setError(result.message || "Couldn't move that state.");
      }
    });
  }

  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-[var(--border)] last:border-b-0">
      <span className="text-sm text-[var(--ink)]">{zoneState.state}</span>
      <div className="flex items-center gap-2 shrink-0">
        {error && <span className="text-xs text-red-600">{error}</span>}
        <select
          value={zone}
          onChange={handleChange}
          disabled={pending}
          className="input-field text-xs py-1.5 w-auto"
        >
          {ZONES.map((z) => (
            <option key={z} value={z}>
              {ZONE_LABEL[z]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
