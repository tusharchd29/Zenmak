"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import { submitQuiz, type QuizResult } from "@/app/(app)/learn/actions";

export type QuizView = { id: string; q: string; options: string[] };

type Labels = { submit: string; retry: string; retake: string; passed: string; notPassed: string; score: string };

export function Quiz({ slug, questions, labels }: { slug: string; questions: QuizView[]; labels: Labels }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [result, setResult] = useState<QuizResult | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const done = result?.ok && result.correct;
  const allAnswered = answers.every((a) => a !== null);

  function submit() {
    startTransition(async () => {
      try {
        const r = await submitQuiz(slug, answers as number[]);
        setResult(r);
        if (r.ok) router.refresh();
      } catch (err) {
        setResult({ ok: false, message: err instanceof Error ? err.message : "Couldn't check answers." });
      }
    });
  }

  return (
    <div className="space-y-4">
      {questions.map((question, qi) => (
        <fieldset key={question.id} disabled={Boolean(done) || pending}>
          <legend className="font-medium text-[var(--ink)] mb-2">
            {qi + 1}. {question.q}
          </legend>
          <div className="space-y-2">
            {question.options.map((option, oi) => {
              const chosen = answers[qi] === oi;
              const isRight = done && result.correct![qi] === oi;
              const isWrongPick = done && chosen && !isRight;
              return (
                <label
                  key={oi}
                  className={cn(
                    "flex gap-3 items-start rounded-xl border px-3 py-2.5 text-sm cursor-pointer transition-colors",
                    !done && chosen && "border-[var(--teal)] bg-[var(--teal)]/5",
                    !done && !chosen && "border-[var(--border)] bg-white hover:bg-[var(--offwhite)]",
                    isRight && "border-emerald-500 bg-emerald-50",
                    isWrongPick && "border-red-400 bg-red-50",
                    done && !isRight && !isWrongPick && "border-[var(--border)] bg-white opacity-70",
                  )}
                >
                  <input
                    type="radio"
                    name={question.id}
                    checked={chosen}
                    onChange={() => setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))}
                    className="mt-0.5 accent-[var(--teal)]"
                  />
                  <span className="flex-1 text-[var(--ink)]">{option}</span>
                  {isRight && <Icon name="circle-check" size={16} className="text-emerald-600 shrink-0" />}
                  {isWrongPick && <Icon name="x" size={16} className="text-red-600 shrink-0" />}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}

      {result && !result.ok && <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{result.message}</div>}

      {done ? (
        <div
          className={cn(
            "rounded-xl border px-4 py-3",
            result.passed ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-amber-300 bg-amber-50 text-amber-900",
          )}
        >
          <div className="flex items-center gap-2 font-semibold">
            <Icon name={result.passed ? "award" : "lightbulb"} size={18} />
            {result.passed ? labels.passed : labels.notPassed}
          </div>
          <div className="text-sm mt-0.5">
            {labels.score}: {result.score} / {result.total}
          </div>
          {result.saved === false && <div className="text-xs mt-1 opacity-80">(Progress isn&apos;t being saved yet.)</div>}
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setAnswers(questions.map(() => null));
            }}
            className="btn-secondary text-sm px-3 py-1.5 mt-2"
          >
            {result.passed ? labels.retake : labels.retry}
          </button>
        </div>
      ) : (
        <button type="button" onClick={submit} disabled={!allAnswered || pending} className="btn-primary w-full py-2.5">
          {pending ? "…" : labels.submit}
        </button>
      )}
    </div>
  );
}
