"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { ZONE_LABEL, type Zone } from "@/lib/utils";

type MapCustomer = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  zone: string | null;
  segment: string | null;
};

export type StateHighlight = {
  zone: Zone;
  /** Every state in this zone — gets a faint fill for context. */
  allStates: string[];
  /** The subset this particular trip covers — gets a stronger fill. An
   * empty array is treated as "all of them" (no narrowing chosen yet). */
  selectedStates: string[];
};

const ZONE_COLOR: Record<string, string> = {
  north: "#028090",
  central: "#00a896",
  west: "#5a3d99",
  south: "#c0392b",
};

function pinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<svg width="26" height="34" viewBox="0 0 26 34" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 0C6 0 0 5.8 0 13c0 9 13 21 13 21s13-12 13-21C26 5.8 20 0 13 0z" fill="${color}"/>
      <circle cx="13" cy="13" r="5.5" fill="white"/>
    </svg>`,
    iconSize: [26, 34],
    iconAnchor: [13, 34],
    popupAnchor: [0, -30],
  });
}

/** Loads the (static, pre-simplified) India state-boundary file once it's
 * needed, rather than bundling ~650KB of GeoJSON into every page that
 * renders a map. */
function useIndiaStatesGeoJson(enabled: boolean) {
  const [data, setData] = useState<FeatureCollection | null>(null);
  useEffect(() => {
    if (!enabled || data) return;
    let cancelled = false;
    fetch("/india-states.geojson")
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        // Non-critical — the map still works without the shading layer.
      });
    return () => {
      cancelled = true;
    };
  }, [enabled, data]);
  return data;
}

/** Pans/zooms to fit the highlighted states (or the customer pins, if
 * there's no highlight) once, on first render — not on every re-render,
 * so the rep can still freely pan/zoom the map afterward. */
function FitBounds({ bounds }: { bounds: L.LatLngBoundsExpression | null }) {
  const map = useMap();
  const fitted = useRef(false);
  useEffect(() => {
    if (bounds && !fitted.current) {
      map.fitBounds(bounds, { padding: [24, 24] });
      fitted.current = true;
    }
  }, [bounds, map]);
  return null;
}

export function MapView({
  customers,
  height = "70vh",
  interactive = true,
  highlightStates,
}: {
  customers: MapCustomer[];
  height?: string;
  interactive?: boolean;
  /** Shades the given zone's states on top of the regular tile map —
   * used on a tour plan to show which states it covers, in addition to
   * the usual customer pins. */
  highlightStates?: StateHighlight;
}) {
  const geoJson = useIndiaStatesGeoJson(!!highlightStates);

  const center = useMemo<[number, number]>(() => {
    if (customers.length === 0) return [22.9734, 78.6569]; // center of India
    const lat = customers.reduce((s, c) => s + c.latitude, 0) / customers.length;
    const lng = customers.reduce((s, c) => s + c.longitude, 0) / customers.length;
    return [lat, lng];
  }, [customers]);

  const highlightedFeatures = useMemo(() => {
    if (!geoJson || !highlightStates) return null;
    const names = new Set(
      highlightStates.selectedStates.length > 0 ? highlightStates.selectedStates : highlightStates.allStates,
    );
    return {
      type: "FeatureCollection",
      features: geoJson.features.filter((f) => names.has((f.properties as { state?: string })?.state ?? "")),
    } as FeatureCollection;
  }, [geoJson, highlightStates]);

  const fitBoundsTarget = useMemo<L.LatLngBoundsExpression | null>(() => {
    if (customers.length > 0) {
      return customers.map((c) => [c.latitude, c.longitude] as [number, number]);
    }
    if (highlightedFeatures && highlightedFeatures.features.length > 0) {
      try {
        return L.geoJSON(highlightedFeatures).getBounds();
      } catch {
        return null;
      }
    }
    return null;
  }, [customers, highlightedFeatures]);

  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--border)]" style={{ height }}>
      <MapContainer
        center={center}
        zoom={customers.length ? 7 : 5}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={interactive}
        dragging={interactive}
        zoomControl={interactive}
        doubleClickZoom={interactive}
        touchZoom={interactive}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoJson && highlightStates && (
          <GeoJSON
            key={highlightStates.selectedStates.join(",") || highlightStates.zone}
            data={geoJson}
            style={(feature) => {
              const name = (feature?.properties as { state?: string })?.state ?? "";
              const color = ZONE_COLOR[highlightStates.zone] ?? "#028090";
              const isSelected =
                highlightStates.selectedStates.length === 0 || highlightStates.selectedStates.includes(name);
              const inZone = highlightStates.allStates.includes(name);
              if (inZone && isSelected) {
                return { color, weight: 2, fillColor: color, fillOpacity: 0.35 };
              }
              if (inZone) {
                return { color, weight: 1, fillColor: color, fillOpacity: 0.08, dashArray: "4" };
              }
              return { color: "#cbd5e1", weight: 0.5, fillOpacity: 0 };
            }}
          />
        )}
        {fitBoundsTarget && <FitBounds bounds={fitBoundsTarget} />}
        {customers.map((c) => (
          <Marker
            key={c.id}
            position={[c.latitude, c.longitude]}
            icon={pinIcon(ZONE_COLOR[c.zone ?? ""] ?? "#028090")}
            // In the non-interactive dashboard preview the whole card is a
            // single <Link href="/map">; a clickable marker underneath it
            // would fight that link for the tap (opening a popup instead of,
            // or in addition to, navigating). Only the full /map view (which
            // isn't wrapped in its own link) gets clickable pins with popups.
            interactive={interactive}
          >
            {interactive && (
              <Popup>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-gray-500">
                  {c.segment ?? "General"}
                  {c.zone && ` · ${ZONE_LABEL[c.zone as Zone] ?? c.zone}`}
                </div>
                <Link href={`/customers/${c.id}`} className="text-xs underline text-teal-700">
                  View customer
                </Link>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
      {highlightStates && (
        <p className="text-[10px] text-[var(--muted)] px-2 py-1 bg-[var(--offwhite)]">
          State boundaries: DataMeet India community (CC BY 4.0), simplified
        </p>
      )}
    </div>
  );
}
