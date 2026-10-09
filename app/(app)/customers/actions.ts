"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { parseCoord } from "@/lib/validate";
import { getT } from "@/lib/i18n";
import { resolveMapsLink } from "@/lib/maps-link";

export async function createCustomer(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim() || null;
  const address = String(formData.get("address") || "").trim() || null;
  const segment = String(formData.get("segment") || "").trim() || null;
  const zone = String(formData.get("zone") || "").trim() || null;
  const state = String(formData.get("state") || "").trim() || null;
  const latRaw = String(formData.get("latitude") || "").trim();
  const lngRaw = String(formData.get("longitude") || "").trim();
  const latitude = parseCoord(latRaw, "lat");
  const longitude = parseCoord(lngRaw, "lng");

  if (!name) return { ok: false, message: t("Name is required") };

  if (segment) {
    await supabaseAdmin.from("av_segments").upsert({ name: segment }, { onConflict: "name" });
  }

  const { error } = await supabaseAdmin.from("av_customers").insert({
    name,
    phone,
    address,
    segment,
    zone,
    state,
    latitude,
    longitude,
    rep_id: session.userId,
  });

  if (error) return { ok: false, message: error.message };

  revalidatePath("/customers");
  return { ok: true };
}

/** Owner only: turns a pasted Google Maps link into coordinates. */
export async function locateFromMapsLink(link: string) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  if (session.role !== "owner") return { ok: false as const, message: t("Only the owner can change this.") };
  if (!link.trim()) return { ok: false as const, message: t("Paste a Google Maps link first.") };

  const coords = await resolveMapsLink(link);
  if (!coords) return { ok: false as const, message: t("Couldn't find a location in that link.") };
  return { ok: true as const, ...coords };
}

/** Owner only: sets an existing customer's map pin from a Google Maps link. */
export async function setCustomerLocationFromLink(customerId: string, link: string) {
  const found = await locateFromMapsLink(link);
  if (!found.ok) return found;
  const { t } = await getT();

  const { error } = await supabaseAdmin
    .from("av_customers")
    .update({ latitude: found.lat, longitude: found.lng })
    .eq("id", customerId);
  if (error) return { ok: false as const, message: t("Couldn't save changes") };

  for (const p of ["/customers", `/customers/${customerId}`, "/map", "/tours"]) revalidatePath(p);
  return found;
}
