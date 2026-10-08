"use client";

import { Suspense, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { loginWithPin } from "./actions";
import { ZenmakMark } from "@/components/ZenmakMark";
import { LangToggle } from "@/components/LangToggle";
import { useT } from "@/components/I18nProvider";

// PINs are 4–8 digits (see team/actions.ts), so the pad can't auto-submit
// at a fixed length: it fills up to 8 and signs in on ✓.
const MIN_PIN = 4;
const MAX_PIN = 8;

function IdleNotice() {
  const params = useSearchParams();
  const t = useT();
  if (params.get("reason") !== "idle") return null;
  return (
    <p className="text-sm text-[var(--warn)] text-center mb-4 -mt-4">
      {t("Signed out after 5 minutes of inactivity.")}
    </p>
  );
}

export default function LoginPage() {
  const t = useT();
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function press(digit: string) {
    setError(null);
    setPin((p) => (p.length >= MAX_PIN ? p : p + digit));
  }

  function backspace() {
    setError(null);
    setPin((p) => p.slice(0, -1));
  }

  function submit() {
    if (pin.length < MIN_PIN || pending) return;
    const value = pin;
    startTransition(async () => {
      const result = await loginWithPin(value);
      if (result && !result.ok) {
        setError(result.message);
        setPin("");
      }
    });
  }

  // Show at least 4 boxes, growing as more digits are typed.
  const boxes = Math.max(MIN_PIN, pin.length);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[var(--offwhite)]">
      <div className="absolute top-4 right-4">
        <LangToggle />
      </div>
      <div className="w-full max-w-xs">
        <div className="flex flex-col items-center mb-8">
          <ZenmakMark size={72} className="mb-3" />
          <h1 className="text-2xl font-semibold text-[#2e3350] tracking-tight">Zenmak</h1>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mt-0.5">
            {t("Animal Health Division")}
          </p>
          <p className="text-sm text-[var(--muted)] mt-1">{t("Enter your PIN")}</p>
        </div>

        <Suspense fallback={null}>
          <IdleNotice />
        </Suspense>

        <div className="flex justify-center gap-2 mb-2" aria-live="polite">
          {Array.from({ length: boxes }, (_, i) => (
            <div
              key={i}
              className={`${boxes > 6 ? "w-8 h-10" : "w-11 h-12"} rounded-xl border flex items-center justify-center text-lg font-semibold ${
                i < pin.length
                  ? "border-[var(--teal)] bg-white text-[var(--ink)]"
                  : "border-[var(--border)] bg-white text-transparent"
              }`}
            >
              {i < pin.length ? "•" : "0"}
            </div>
          ))}
        </div>

        <div className="h-6 text-center text-sm text-[var(--danger)] mb-4">
          {pending ? t("Checking…") : error}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
            <button
              key={d}
              type="button"
              disabled={pending}
              onClick={() => press(d)}
              className="btn-secondary h-14 text-lg"
            >
              {d}
            </button>
          ))}
          <button
            type="button"
            disabled={pending || pin.length === 0}
            onClick={backspace}
            className="btn-secondary h-14 text-lg"
            aria-label={t("Backspace")}
          >
            ⌫
          </button>
          <button
            type="button"
            disabled={pending}
            onClick={() => press("0")}
            className="btn-secondary h-14 text-lg"
          >
            0
          </button>
          <button
            type="button"
            disabled={pending || pin.length < MIN_PIN}
            onClick={submit}
            className="btn-primary h-14 text-lg disabled:opacity-40"
            aria-label={t("Sign in")}
          >
            ✓
          </button>
        </div>
      </div>
    </main>
  );
}
