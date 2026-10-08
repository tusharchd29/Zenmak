"use client";

import { useState } from "react";
import type { Zone } from "@/lib/utils";
import { useT } from "@/components/I18nProvider";

/** Checkboxes for every state in the currently-picked zone, so a rep can
 * uncheck the ones this particular trip won't cover. Renders as plain
 * `states` checkbox inputs (FormData.getAll("states") collects the
 * checked ones), so it drops straight into the "Plan a tour" ActionForm.
 * Used in controlled mode (zone/selected passed in) when editing an
 * existing tour's states outside of a form (TourStatesEditor). */
export function TourStatesPicker({
  statesByZone,
  zone,
  defaultSelected,
  selected,
  onChange,
}: {
  statesByZone: Record<Zone, string[]>;
  zone: string;
  defaultSelected?: string[];
  selected?: string[];
  onChange?: (states: string[]) => void;
}) {
  const t = useT();
  const options = zone ? statesByZone[zone as Zone] ?? [] : [];
  const [uncontrolled, setUncontrolled] = useState<string[]>(defaultSelected ?? options);
  const checkedStates = selected ?? uncontrolled;

  function toggle(state: string, checked: boolean) {
    const next = checked ? [...checkedStates, state] : checkedStates.filter((s) => s !== state);
    if (onChange) onChange(next);
    else setUncontrolled(next);
  }

  if (!zone) {
    return <p className="text-xs text-[var(--muted)]">{t("Pick a zone to choose its states.")}</p>;
  }
  if (options.length === 0) {
    return <p className="text-xs text-[var(--muted)]">{t("No states set up for this zone yet.")}</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5">
      {options.map((s) => (
        <label key={s} className="flex items-center gap-1.5 text-xs text-[var(--ink)]">
          <input
            type="checkbox"
            name="states"
            value={s}
            checked={checkedStates.includes(s)}
            onChange={(e) => toggle(s, e.target.checked)}
            className="w-3.5 h-3.5"
          />
          <span className="truncate">{s}</span>
        </label>
      ))}
    </div>
  );
}
