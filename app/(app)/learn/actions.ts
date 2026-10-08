"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getProduct, quizFor, PASS_MARK } from "@/lib/catalog";
import { recordAttempt } from "@/lib/learning";

export type QuizResult = {
  ok: boolean;
  message?: string;
  score?: number;
  total?: number;
  passed?: boolean;
  /** The right option index for each question, revealed after submitting. */
  correct?: number[];
  /** False when progress couldn't be saved (table missing). */
  saved?: boolean;
};

/** Grade a lesson quiz on the server — the answer key never goes to the
 * browser — and record the attempt. */
export async function submitQuiz(slug: string, answers: number[]): Promise<QuizResult> {
  const session = await getSession();
  if (!session) redirect("/login");

  const product = getProduct(slug);
  if (!product) return { ok: false, message: "Unknown lesson." };

  const questions = quizFor(product);
  if (!Array.isArray(answers) || answers.length !== questions.length) {
    return { ok: false, message: "Answer every question first." };
  }

  const correct = questions.map((q) => q.answer);
  const score = questions.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0);
  const passed = score >= PASS_MARK;
  const saved = await recordAttempt(session.userId, slug, score, questions.length, PASS_MARK);

  revalidatePath("/learn", "layout");
  return { ok: true, score, total: questions.length, passed, correct, saved };
}
