"use client";

import { useState, useTransition } from "react";
import { Icon } from "./icon";
import { useT } from "./I18nProvider";

type Result = { ok: true; lat: number; lng: number } | { ok: false; message: string };

/** Paste a Google Maps link; `resolve` turns it into coordinates on the server. */
export function MapsLinkInput({
  resolve,
  onFound,
  buttonLabel,
}: {
  resolve: (link: string) => Promise<Result>;
  onFound: (coords: { lat: number; lng: number }) => void;
  buttonLabel?: string;
}) {
  const t = useT();
  const [link, setLink] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function find() {
    setError(null);
    startTransition(async () => {
      try {
        const res = await resolve(link);
        if (res.ok) {
          onFound({ lat: res.lat, lng: res.lng });
          setLink("");
        } else {
          setError(res.message);
        }
      } catch {
        setError(t("Couldn't find a location in that link."));
      }
    });
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="url"
          inputMode="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onKeyDown={(e) => {
            // Enter would otherwise submit the surrounding form.
            if (e.key === "Enter") {
              e.preventDefault();
              if (link.trim()) find();
            }
          }}
          className="input-field text-sm flex-1 min-w-0"
          placeholder={t("Paste Google Maps link")}
        />
        <button
          type="button"
          onClick={find}
          disabled={pending || !link.trim()}
          className="btn-secondary text-xs px-3 py-1.5 inline-flex items-center gap-1.5 shrink-0 disabled:opacity-40"
        >
          <Icon name="map-pin" size={14} /> {pending ? t("Finding…") : (buttonLabel ?? t("Find"))}
        </button>
      </div>
      {error && <p className="text-xs text-[var(--danger)] mt-1">{error}</p>}
    </div>
  );
}
