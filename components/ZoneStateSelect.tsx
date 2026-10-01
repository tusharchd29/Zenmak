"use client";

import { useState } from "react";
import { ZONES, ZONE_LABEL, type Zone } from "@/lib/utils";

/** A zone <select> paired with a state <select> that only lists the states
 * belonging to whichever zone is currently picked — used on the customer
 * create/edit forms. Both render as plain named inputs (`zone`, `state`),
 * so this drops into any form (ActionForm or a manually-submitted one)
 * without the parent needing to know about the pairing. */
export function ZoneStateSelect({
  statesByZone,
  defaultZone = "",
  defaultState = "",
  zoneValue,
  stateValue,
  onZoneChange,
  onStateChange,
}: {
  statesByZone: Record<Zone, string[]>;
  defaultZone?: string;
  defaultState?: string;
  // Optional controlled mode (used by CustomerEditForm, which already
  // tracks its own field values); uncontrolled (defaultZone/defaultState)
  // is enough for a plain create form.
  zoneValue?: string;
  stateValue?: string;
  onZoneChange?: (zone: string) => void;
  onStateChange?: (state: string) => void;
}) {
  const [uncontrolledZone, setUncontrolledZone] = useState(defaultZone);
  const [uncontrolledState, setUncontrolledState] = useState(defaultState);
  const zone = zoneValue ?? uncontrolledZone;
  const state = stateValue ?? uncontrolledState;
  const options = ZONES.includes(zone as Zone) ? statesByZone[zone as Zone] ?? [] : [];

  function handleZone(next: string) {
    if (onZoneChange) onZoneChange(next);
    else setUncontrolledZone(next);
    // Changing the zone invalidates whatever state was picked before.
    if (onStateChange) onStateChange("");
    else setUncontrolledState("");
  }

  function handleState(next: string) {
    if (onStateChange) onStateChange(next);
    else setUncontrolledState(next);
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="block text-sm font-medium text-[var(--ink)] mb-1">Zone</label>
        <select
          name="zone"
          className="input-field"
          value={zone}
          onChange={(e) => handleZone(e.target.value)}
        >
          <option value="">No zone</option>
          {ZONES.map((z) => (
            <option key={z} value={z}>
              {ZONE_LABEL[z]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--ink)] mb-1">State</label>
        <select
          name="state"
          className="input-field"
          value={state}
          disabled={options.length === 0}
          onChange={(e) => handleState(e.target.value)}
        >
          <option value="">{options.length === 0 ? "Pick a zone first" : "No state"}</option>
          {options.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
