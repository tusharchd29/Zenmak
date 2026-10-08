// Server-side number checks. `Number("abc")` is NaN, and `NaN <= 0` is
// false — so a plain `amount <= 0` check lets NaN (and Infinity) through,
// and Postgres numeric columns happily store 'NaN', which then poisons every
// SUM. Server actions can be called directly, so the browser's
// type="number" isn't a guarantee.

type Input = FormDataEntryValue | number | null | undefined;

function toNumber(v: Input): number | null {
  if (v === null || v === undefined) return null;
  if (typeof v === "number") return v;
  if (typeof v !== "string") return null;
  const s = v.trim();
  return s === "" ? null : Number(s);
}

/** A money amount / quantity that must be a real number above zero. */
export function parsePositive(v: Input): number | null {
  const n = toNumber(v);
  return n !== null && Number.isFinite(n) && n > 0 ? n : null;
}

/** A real number ≥ 0, or null when left blank. Returns NaN-free `invalid`
 * flag so callers can tell "blank" from "garbage". */
export function parseNonNegative(v: Input): { value: number | null; invalid: boolean } {
  const n = toNumber(v);
  if (n === null) return { value: null, invalid: false };
  return Number.isFinite(n) && n >= 0 ? { value: n, invalid: false } : { value: null, invalid: true };
}

/** A latitude/longitude, or null when blank or out of range. */
export function parseCoord(v: Input, kind: "lat" | "lng"): number | null {
  const n = toNumber(v);
  const max = kind === "lat" ? 90 : 180;
  return n !== null && Number.isFinite(n) && Math.abs(n) <= max ? n : null;
}
