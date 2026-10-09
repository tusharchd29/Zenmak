"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { MapsLinkInput } from "@/components/MapsLinkInput";
import { useT } from "@/components/I18nProvider";
import { setCustomerLocationFromLink } from "./actions";

type Coords = { lat: number; lng: number };

/** Shows the customer's map pin; the owner can set or move it by pasting a Google Maps link. */
export function CustomerLocation({
  customerId,
  initial,
  canEdit,
}: {
  customerId: string;
  initial: Coords | null;
  canEdit: boolean;
}) {
  const t = useT();
  const [coords, setCoords] = useState<Coords | null>(initial);
  const [justSaved, setJustSaved] = useState(false);

  if (!coords && !canEdit) return null;

  return (
    <Card className="mb-6">
      <div className="flex items-center justify-between gap-2 text-sm mb-1">
        <span className="font-medium text-[var(--ink)] flex items-center gap-1.5">
          <Icon name="map-pin" size={14} /> {t("Location")}
        </span>
        {justSaved && (
          <span className="text-xs text-[var(--seafoam)] flex items-center gap-1">
            <Icon name="check" size={12} /> {t("Location saved")}
          </span>
        )}
      </div>
      {coords ? (
        <a
          href={`https://www.google.com/maps?q=${coords.lat},${coords.lng}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[var(--teal)] underline"
        >
          {coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}
        </a>
      ) : (
        <div className="text-sm text-[var(--muted)]">{t("No location yet.")}</div>
      )}
      {canEdit && (
        <div className="mt-3">
          <MapsLinkInput
            resolve={(link) => setCustomerLocationFromLink(customerId, link)}
            onFound={(c) => {
              setCoords(c);
              setJustSaved(true);
            }}
            buttonLabel={coords ? t("Update") : t("Save")}
          />
        </div>
      )}
    </Card>
  );
}
