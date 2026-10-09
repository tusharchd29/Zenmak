import { parseCoord } from "@/lib/validate";

export type Coords = { lat: number; lng: number };

// Short links and Maps pages we're willing to fetch. Anything else is never
// requested, so a pasted link can't make the server call arbitrary hosts.
const FETCHABLE_HOSTS = new Set([
  "maps.app.goo.gl",
  "goo.gl",
  "g.co",
  "maps.google.com",
  "google.com",
  "www.google.com",
  "maps.google.co.in",
  "google.co.in",
  "www.google.co.in",
]);

function pair(latRaw: string, lngRaw: string): Coords | null {
  const lat = parseCoord(latRaw, "lat");
  const lng = parseCoord(lngRaw, "lng");
  return lat !== null && lng !== null ? { lat, lng } : null;
}

/**
 * Reads coordinates out of a Google Maps URL, or out of plain "lat, lng" text.
 * The place pin (!3d…!4d…) wins over the viewport centre (@lat,lng), since
 * the viewport can sit a little off the pin.
 */
export function parseMapsCoords(input: string): Coords | null {
  let text = input.trim();
  try {
    // Decode twice: links wrapped in a consent/redirect URL are encoded again.
    text = decodeURIComponent(decodeURIComponent(text));
  } catch {
    // Leave malformed escapes as they are; the patterns below still apply.
  }
  const num = String.raw`(-?\d{1,3}(?:\.\d+)?)`;
  const patterns = [
    new RegExp(String.raw`!3d${num}!4d${num}`),
    new RegExp(String.raw`@${num},${num}`),
    new RegExp(String.raw`[?&](?:q|query|ll|sll|destination|daddr|center)=${num}\s*,\s*\+?${num}`),
    new RegExp(String.raw`/maps/(?:search|place|dir)/${num}\s*,\s*\+?${num}`),
    new RegExp(String.raw`^${num}\s*,\s*${num}$`),
  ];
  for (const re of patterns) {
    const m = text.match(re);
    if (m) {
      const c = pair(m[1], m[2]);
      if (c) return c;
    }
  }
  return null;
}

function fetchable(url: URL) {
  return url.protocol === "https:" && FETCHABLE_HOSTS.has(url.hostname.toLowerCase());
}

/**
 * Like parseMapsCoords, but also follows short links (maps.app.goo.gl/…) to
 * the full Maps URL, and as a last resort reads the coordinates off the Maps
 * page itself. Server-only: it makes network requests.
 */
export async function resolveMapsLink(input: string): Promise<Coords | null> {
  const direct = parseMapsCoords(input);
  if (direct) return direct;

  let url: URL;
  try {
    url = new URL(input.trim());
  } catch {
    return null;
  }

  for (let hop = 0; hop < 5 && fetchable(url); hop++) {
    let res: Response;
    try {
      res = await fetch(url, {
        redirect: "manual",
        signal: AbortSignal.timeout(6000),
        headers: { "user-agent": "Mozilla/5.0 (compatible; ZenmakFieldOps/1.0)" },
        cache: "no-store",
      });
    } catch {
      return null;
    }
    const location = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && location) {
      const found = parseMapsCoords(location);
      if (found) return found;
      try {
        url = new URL(location, url);
      } catch {
        return null;
      }
      continue;
    }
    if (!res.ok) return null;
    // A Maps page with no coordinates in its URL still carries them in the
    // page, as the map's starting view ("…/@lat,lng,zoom…" or center=lat%2Clng).
    const body = (await res.text()).slice(0, 2_000_000);
    return parseMapsCoords(body.match(/!3d-?\d[^"\\]*!4d-?[\d.]+/)?.[0] ?? "")
      ?? parseMapsCoords(body.match(/@-?\d{1,2}\.\d+,-?\d{1,3}\.\d+/)?.[0] ?? "")
      ?? parseMapsCoords(body.match(/center=-?\d{1,2}\.\d+%2C-?\d{1,3}\.\d+/)?.[0] ?? "");
  }
  return null;
}

export function mapsUrl({ lat, lng }: Coords) {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}
