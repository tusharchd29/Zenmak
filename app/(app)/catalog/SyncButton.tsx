"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icon";
import { syncCatalogToProducts } from "./actions";

export function SyncButton() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ ok: boolean; message?: string } | null>(null);
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            try {
              setResult(await syncCatalogToProducts());
              router.refresh();
            } catch (err) {
              setResult({ ok: false, message: err instanceof Error ? err.message : "Something went wrong." });
            }
          })
        }
        className="btn-secondary text-sm px-3 py-2 inline-flex items-center gap-2"
      >
        <Icon name="refresh-cw" size={15} className={pending ? "animate-spin" : undefined} />
        {pending ? "Adding…" : "Add all to order product list"}
      </button>
      {result?.message && (
        <p className={`text-sm mt-2 ${result.ok ? "text-[var(--teal)]" : "text-red-700"}`}>{result.message}</p>
      )}
    </div>
  );
}
