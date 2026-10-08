"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { PRODUCTS, formatPack, getCategory } from "@/lib/catalog";

/** The order-catalog name for one pack of a product, e.g.
 * "Hygin-Tact 20 (5 L)" or "Natumeric Plus (20 kg Powder)". */
function variantName(name: string, pack: (typeof PRODUCTS)[number]["packs"][number]) {
  return `${name} (${formatPack(pack)}${pack.label ? ` ${pack.label}` : ""})`;
}

/**
 * Owner-only: add every brochure product to av_products (the list orders
 * pick from), one row per pack size. Only adds names that aren't there yet
 * — it never edits or deletes existing rows, so prices the owner has set
 * are left alone and running it twice is harmless.
 */
export async function syncCatalogToProducts() {
  const session = await getSession();
  if (!session || session.role !== "owner") redirect("/catalog");

  const { data: existing, error: readError } = await supabaseAdmin.from("av_products").select("name");
  if (readError) return { ok: false, message: readError.message };
  const have = new Set((existing ?? []).map((r) => String(r.name).trim().toLowerCase()));

  const rows = PRODUCTS.flatMap((p) =>
    p.packs.map((pack) => ({
      name: variantName(p.name, pack),
      category: getCategory(p.category).name.en,
      // The order form's unit list spells litres "lt".
      default_unit: pack.unit === "L" ? "lt" : pack.unit,
      pack_size: pack.size,
    })),
  ).filter((r) => !have.has(r.name.toLowerCase()));

  if (rows.length === 0) return { ok: true, message: "Already up to date — every product and pack is in the order list." };

  const { error } = await supabaseAdmin.from("av_products").insert(rows);
  if (error) return { ok: false, message: error.message };

  revalidatePath("/products");
  revalidatePath("/orders/new");
  revalidatePath("/catalog");
  return { ok: true, message: `Added ${rows.length} product packs to the order list. Set their prices on the Products page.` };
}
