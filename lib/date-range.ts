export type DateRange = { from: string | null; to: string | null };

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Parses `?from=YYYY-MM-DD&to=YYYY-MM-DD` search params into a DateRange.
 * Malformed or missing values fall back to null (no filter), never throw —
 * an invalid date in the URL should just show unfiltered data, not error. */
export function parseDateRange(searchParams: {
  from?: string;
  to?: string;
}): DateRange {
  const from = searchParams.from && ISO_DATE.test(searchParams.from) ? searchParams.from : null;
  const to = searchParams.to && ISO_DATE.test(searchParams.to) ? searchParams.to : null;
  return { from, to };
}

/** Start/end of an Indian calendar day as an ISO timestamp, for filtering
 * timestamptz columns (created_at, fulfilled_at…). */
export function dayStart(date: string): string {
  return `${date}T00:00:00.000+05:30`;
}
export function dayEnd(date: string): string {
  return `${date}T23:59:59.999+05:30`;
}

// --- India time ------------------------------------------------------------
// The server runs in UTC, but the team works in India (UTC+05:30, no DST).
// Every "today", "this month" and day boundary must be India time, or
// anything logged between midnight and 05:30 lands on the previous day.

const IST = "Asia/Kolkata";

/** Today's date in India as "YYYY-MM-DD" (works on server and client). */
export function todayIST(date: Date = new Date()): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone: IST, year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

/** "YYYY-MM-DD" for `days` from today in India (negative = past). */
export function addDaysIST(days: number, from: Date = new Date()): string {
  return todayIST(new Date(from.getTime() + days * 86_400_000));
}

/** First day of the current Indian month, "YYYY-MM-01". */
export function monthStartIST(date: Date = new Date()): string {
  return `${todayIST(date).slice(0, 7)}-01`;
}

/** First day of the next month after a "YYYY-MM-01" date. */
export function nextMonthStart(monthStart: string): string {
  const [y, m] = monthStart.split("-").map(Number);
  return m === 12 ? `${y + 1}-01-01` : `${y}-${String(m + 1).padStart(2, "0")}-01`;
}
