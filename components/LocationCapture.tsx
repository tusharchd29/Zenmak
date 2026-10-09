"use client";

import { useState } from "react";
import { Icon } from "./icon";
import { useT } from "./I18nProvider";
import { MapsLinkInput } from "./MapsLinkInput";
import { locateFromMapsLink } from "@/app/(app)/customers/actions";

type Coords = { lat: number; lng: number } | null;

export function LocationCapture({
  label,
  allowMapsLink = false,
}: {
  label?: string;
  /** Owner only: also offer "paste a Google Maps link" instead of GPS. */
  allowMapsLink?: boolean;
}) {
  const t = useT();
  const [coords, setCoords] = useState<Coords>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  function capture() {
    if (!("geolocation" in navigator)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus("ok");
      },
      () => setStatus("error"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }

  return (
    <div>
      <label className="block text-sm font-medium text-[var(--ink)] mb-1">{label ?? t("Location")}</label>
      <input type="hidden" name="latitude" value={coords?.lat ?? ""} />
      <input type="hidden" name="longitude" value={coords?.lng ?? ""} />
      <div className="flex items-center gap-2 text-sm">
        {status === "idle" && (
          <button
            type="button"
            onClick={capture}
            className="btn-secondary text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
          >
            <Icon name="map-pin" size={14} /> {t("Capture location")}
          </button>
        )}
        {status === "loading" && (
          <span className="text-[var(--muted)] flex items-center gap-1.5">
            <Icon name="map-pin" size={14} /> {t("Capturing location…")}
          </span>
        )}
        {status === "ok" && coords && (
          <>
            <span className="text-[var(--seafoam)] flex items-center gap-1.5">
              <Icon name="check" size={14} /> {t("Location captured")}
            </span>
            <button
              type="button"
              onClick={capture}
              className="text-[var(--teal)] underline text-xs"
            >
              {t("Recapture")}
            </button>
          </>
        )}
        {status === "error" && (
          <>
            <span className="text-[var(--muted)] flex items-center gap-1.5">
              <Icon name="map-pin" size={14} /> {t("Couldn't get location")}
            </span>
            <button
              type="button"
              onClick={capture}
              className="text-[var(--teal)] underline text-xs"
            >
              {t("Retry")}
            </button>
          </>
        )}
      </div>
      {status === "ok" && coords && (
        <a
          href={`https://www.google.com/maps?q=${coords.lat},${coords.lng}`}
          target="_blank"
          rel="noreferrer"
          className="block text-xs text-[var(--teal)] underline mt-1"
        >
          {coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}
        </a>
      )}
      {allowMapsLink && (
        <div className="mt-2">
          <MapsLinkInput
            resolve={locateFromMapsLink}
            onFound={(c) => {
              setCoords(c);
              setStatus("ok");
            }}
          />
        </div>
      )}
      <p className="text-xs text-[var(--muted)] mt-1">
        {status === "ok" ? t("This will be pinned on the territory map.") : t("Optional — tap to attach a GPS pin for the map.")}
      </p>
    </div>
  );
}
