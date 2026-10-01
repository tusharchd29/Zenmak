"use client";

import { useState, useTransition } from "react";
import { Icon } from "@/components/icon";
import type { Zone } from "@/lib/utils";
import { TourStatesPicker } from "./TourStatesPicker";
import { updateTourStates } from "./actions";

/** Shows which states of the tour's zone this trip covers, with a small
 * inline editor to change the selection — mirrors TourStops' pattern of a
 * static view that expands into an edit form, since EditableCard's generic
 * fields don't support a multi-select like this one. */
export function TourStatesEditor({
  tourId,
  zone,
  states,
  statesByZone,
}: {
  tourId: string;
  zone: string | null;
  states: string[];
  statesByZone: Record<Zone, string[]>;
}) {
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState(states);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (!zone) return null;
  const zoneStates = statesByZone[zone as Zone] ?? [];
  if (zoneStates.length === 0) return null;

  function save() {
    setError(null);
    startTransition(async () => {
      const result = await updateTourStates(tourId, selected);
      if (!result.ok) {
        setError(result.message || "Couldn't save.");
        return;
      }
      setEditing(false);
    });
  }

  if (!editing) {
    return (
      <div
        className="flex items-start justify-between gap-2 mt-2 text-xs text-[var(--muted)]"
        onClick={(e) => e.stopPropagation()}
      >
        <span>
          {states.length === 0 || states.length === zoneStates.length
            ? "All states in this zone"
            : `States: ${states.join(", ")}`}
        </span>
        <button
          type="button"
          onClick={() => {
            setSelected(states);
            setEditing(true);
          }}
          className="text-[var(--muted)] hover:text-[var(--teal)] p-0.5 -m-0.5 shrink-0"
          aria-label="Edit states covered"
        >
          <Icon name="edit" size={13} />
        </button>
      </div>
    );
  }

  return (
    <div className="mt-2 pt-2 border-t border-[var(--border)]" onClick={(e) => e.stopPropagation()}>
      <TourStatesPicker statesByZone={statesByZone} zone={zone} selected={selected} onChange={setSelected} />
      {error && <div className="text-xs text-red-600 mt-1.5">{error}</div>}
      <div className="flex gap-2 mt-2">
        <button type="button" onClick={save} disabled={pending} className="btn-primary text-xs px-3 py-1.5">
          {pending ? "Saving…" : "Save"}
        </button>
        <button
          type="button"
          onClick={() => {
            setError(null);
            setEditing(false);
          }}
          disabled={pending}
          className="text-xs text-[var(--muted)] underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
