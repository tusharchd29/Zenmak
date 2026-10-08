"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { MapView as MapViewType } from "./MapView";

// Leaflet touches `window` as soon as its module loads, so MapView can't be
// server-rendered — importing it directly from a page crashes that page's
// server render ("window is not defined"). This wrapper loads it in the
// browser only, with a same-size placeholder while it loads.
const MapViewClient = dynamic(() => import("./MapView").then((m) => m.MapView), {
  ssr: false,
  loading: () => <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--offwhite)] animate-pulse" style={{ height: 260 }} />,
});

export function MapView(props: ComponentProps<typeof MapViewType>) {
  return <MapViewClient {...props} />;
}
