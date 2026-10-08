"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getSession } from "@/lib/session";
import { getT } from "@/lib/i18n";

const MAX_BYTES = 20 * 1024 * 1024;
const ALLOWED_TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function createBrochure(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "owner") redirect("/brochures");
  const { t } = await getT();

  const title = String(formData.get("title") || "").trim();
  const linkUrl = String(formData.get("url") || "").trim();
  const file = formData.get("file");

  if (!title) return { ok: false, message: t("Title is required") };

  let url = linkUrl;

  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_BYTES) {
      return { ok: false, message: t("File is too large — the limit is 20 MB.") };
    }
    const ext = ALLOWED_TYPES[file.type];
    if (!ext) return { ok: false, message: t("Brochure file must be a PDF, JPEG, PNG, or WEBP.") };

    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error: uploadError } = await supabaseAdmin.storage
      .from("av-brochures")
      .upload(path, buffer, { contentType: file.type, upsert: false });
    if (uploadError) return { ok: false, message: t("Upload failed: {error}", { error: uploadError.message }) };

    // Public bucket — a customer opening this from a WhatsApp message has
    // no app session, so it needs a permanent public URL, not a signed one.
    const { data: pub } = supabaseAdmin.storage.from("av-brochures").getPublicUrl(path);
    url = pub.publicUrl;
  }

  if (!url) return { ok: false, message: t("Upload a file or paste a link.") };

  const { error } = await supabaseAdmin.from("av_brochures").insert({ title, url });
  if (error) return { ok: false, message: error.message };

  revalidatePath("/brochures");
  return { ok: true };
}
