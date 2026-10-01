export function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

export function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(value: string | null | undefined): string {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatCurrency(value: number | null | undefined): string {
  const n = value ?? 0;
  return n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
}

export const ORDER_STATUSES = [
  "pending",
  "confirmed",
  "dispatched",
  "fulfilled",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const STATUS_LABEL: Record<OrderStatus, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  dispatched: "Dispatched",
  fulfilled: "Fulfilled",
};

export const ZONES = ["north", "central", "west", "south"] as const;

export type Zone = (typeof ZONES)[number];

export const ZONE_LABEL: Record<Zone, string> = {
  north: "North",
  central: "Central",
  west: "West",
  south: "South",
};

// Suggested units for a product's pack size (av_products.default_unit) —
// offered via a datalist, not enforced, so older free-text values still
// display fine.
export const PACK_UNITS = ["kg", "g", "lt", "ml", "bag", "box", "pcs", "carton", "bottle"] as const;

/** "50 kg" from pack_size=50, default_unit="kg" — either half may be
 * missing (an old product, or one added with just a name). */
export function formatPackSize(
  pack_size: number | null | undefined,
  unit: string | null | undefined,
): string | null {
  if (pack_size == null && !unit) return null;
  return [pack_size, unit].filter((v) => v != null && v !== "").join(" ");
}

export function isOverdue(dueDate: string | null | undefined): boolean {
  if (!dueDate) return false;
  return new Date(dueDate).getTime() < new Date().setHours(0, 0, 0, 0);
}

/** Whole days between a past timestamp and now (0 for "today"). */
export function daysSince(value: string | null | undefined): number | null {
  if (!value) return null;
  const then = new Date(value).getTime();
  if (Number.isNaN(then)) return null;
  return Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
}

/**
 * Order status → the timestamp that started that status, used to compute
 * how long an order has sat in its current stage. `created_at` covers
 * "pending" (no separate started-pending column needed).
 */
export function ageingLabel(order: {
  status: OrderStatus;
  created_at: string;
  confirmed_at?: string | null;
  dispatched_at?: string | null;
  fulfilled_at?: string | null;
}): string {
  const since =
    order.status === "fulfilled"
      ? order.fulfilled_at
      : order.status === "dispatched"
        ? order.dispatched_at
        : order.status === "confirmed"
          ? order.confirmed_at
          : order.created_at;
  const days = daysSince(since ?? order.created_at);
  if (days === null) return "";
  if (order.status === "fulfilled") return days === 0 ? "Fulfilled today" : `Fulfilled ${days}d ago`;
  if (days === 0) return `${STATUS_LABEL[order.status]} today`;
  return `${days}d in ${STATUS_LABEL[order.status]}`;
}

/** Straight-line (haversine) distance in km between two lat/long points —
 * not a driving distance, but enough to flag "these two stops are far
 * apart" without calling a routing API. */
export function distanceKm(
  a: { latitude: number; longitude: number },
  b: { latitude: number; longitude: number },
): number {
  const R = 6371;
  const dLat = ((b.latitude - a.latitude) * Math.PI) / 180;
  const dLng = ((b.longitude - a.longitude) * Math.PI) / 180;
  const lat1 = (a.latitude * Math.PI) / 180;
  const lat2 = (b.latitude * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

/** Every calendar date from `start` to `end` inclusive, as "YYYY-MM-DD"
 * strings — used to lay out a tour's day-by-day agenda, including days
 * with no stops. Capped at 31 days so a badly-entered range (or one left
 * open-ended far in the future) can't generate thousands of rows. */
export function dateRange(start: string, end: string): string[] {
  const dates: string[] = [];
  const cur = new Date(start + "T00:00:00Z");
  const last = new Date(end + "T00:00:00Z");
  if (Number.isNaN(cur.getTime()) || Number.isNaN(last.getTime()) || cur > last) return [start];
  for (let i = 0; i < 31 && cur <= last; i++) {
    dates.push(cur.toISOString().slice(0, 10));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return dates;
}
