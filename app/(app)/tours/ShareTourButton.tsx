"use client";

import { useState } from "react";
import { formatDate, dateRange } from "@/lib/utils";
import { Icon } from "@/components/icon";
import type { Stop } from "./TourStops";

/** Builds a plain-text itinerary from the tour's own already-loaded data
 * and hands it to the device's share sheet (WhatsApp, SMS, email, etc.),
 * falling back to copying it to the clipboard, and finally to a wa.me link,
 * if the browser has no share sheet or the clipboard write is blocked. */
export function ShareTourButton({
  weekStart,
  endDate,
  zone,
  states,
  planNotes,
  stops,
}: {
  weekStart: string;
  endDate: string | null;
  zone: string | null;
  states: string[];
  planNotes: string | null;
  stops: Stop[];
}) {
  const [copied, setCopied] = useState(false);

  function buildText() {
    const lines: string[] = [];
    const range =
      endDate && endDate !== weekStart ? `${formatDate(weekStart)} – ${formatDate(endDate)}` : formatDate(weekStart);
    lines.push(`Tour Plan: ${range}`);
    if (zone) lines.push(`Zone: ${zone}${states.length ? ` (${states.join(", ")})` : ""}`);
    if (planNotes) lines.push(`Notes: ${planNotes}`);
    lines.push("");

    const days = dateRange(weekStart, endDate ?? weekStart);
    const byDay = new Map<string, Stop[]>();
    for (const s of stops) {
      const list = byDay.get(s.planned_date) ?? [];
      list.push(s);
      byDay.set(s.planned_date, list);
    }
    for (const list of byDay.values()) list.sort((a, b) => a.sort_order - b.sort_order);

    for (const day of days) {
      const dayStops = byDay.get(day) ?? [];
      lines.push(`${formatDate(day)}:`);
      if (dayStops.length === 0) {
        lines.push("  No stops planned");
      } else {
        for (const s of dayStops) {
          const mark = s.completed ? "[x]" : "[ ]";
          lines.push(`  ${mark} ${s.customerName ?? "Unnamed stop"}${s.notes ? ` — ${s.notes}` : ""}`);
        }
      }
    }
    return lines.join("\n");
  }

  async function handleShare() {
    const text = buildText();
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Tour Plan", text });
        return;
      } catch {
        // User cancelled, or the platform share sheet failed — fall through
        // to the clipboard copy below rather than treating it as an error.
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="mt-2 text-xs text-[var(--teal)] font-medium inline-flex items-center gap-1"
    >
      <Icon name="share" size={12} /> {copied ? "Copied!" : "Share plan"}
    </button>
  );
}
