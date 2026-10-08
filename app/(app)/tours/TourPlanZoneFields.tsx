"use client";

import { useState } from "react";
import { ZONES, ZONE_LABEL, type Zone } from "@/lib/utils";
import { TourStatesPicker } from "./TourStatesPicker";
import { useT } from "@/components/I18nProvider";

/** The zone picker plus its reactive state checklist for the "Plan a tour"
 * create form. Lives in one client component because the checklist's
 * options depend on whichever zone is currently selected. */
export function TourPlanZoneFields({ statesByZone }: { statesByZone: Record<Zone, string[]> }) {
  const t = useT();
  const [zone, setZone] = useState("");

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-[var(--ink)] mb-1">{t("Zone")}</label>
        <select name="zone" className="input-field" value={zone} onChange={(e) => setZone(e.target.value)}>
          <option value="">{t("Not set")}</option>
          {ZONES.map((z) => (
            <option key={z} value={z}>
              {t(ZONE_LABEL[z])}
            </option>
          ))}
        </select>
      </div>
      {zone && (
        <div>
          <label className="block text-sm font-medium text-[var(--ink)] mb-1">
            {t("States covered on this trip")}
          </label>
          <TourStatesPicker statesByZone={statesByZone} zone={zone} />
        </div>
      )}
    </>
  );
}
