// Client-side helpers for sending brochure PDFs from a phone. Shared by the
// product share panel and the custom-brochure builder.

export function absoluteUrl(path: string): string {
  return new URL(path, window.location.origin).toString();
}

export function whatsappHref(text: string): string {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

/**
 * Hand the PDF itself to the phone's share sheet (WhatsApp shows it as a
 * document, so the customer doesn't need to open a link). Returns false
 * when the browser can't share files — the caller then falls back to a
 * WhatsApp message carrying the link.
 */
export async function shareFile(file: File, text: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.canShare || !navigator.canShare({ files: [file] })) {
    return false;
  }
  try {
    await navigator.share({ files: [file], text, title: file.name });
  } catch (err) {
    // The user closing the share sheet isn't a failure worth a fallback.
    if (err instanceof DOMException && err.name === "AbortError") return true;
    return false;
  }
  return true;
}

export async function fetchPdf(path: string, filename: string): Promise<File> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Couldn't load ${filename} (${res.status})`);
  const blob = await res.blob();
  return new File([blob], filename, { type: "application/pdf" });
}

export function downloadFile(file: File) {
  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
