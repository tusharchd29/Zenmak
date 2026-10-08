import { supabaseAdmin } from "@/lib/supabase-admin";

// Learning progress — one row per (user, product lesson) in
// av_learning_progress, holding the best quiz score so far. See
// supabase/schema.sql. Every read here degrades to "no progress" if the
// table hasn't been created yet, so the lessons and quizzes still work
// before the migration is applied — only saving/showing progress is off.

export type LessonProgress = {
  bestScore: number;
  total: number;
  passed: boolean;
  attempts: number;
  updatedAt: string;
};

export type ProgressResult = {
  /** False when the progress table is missing or unreadable. */
  available: boolean;
  bySlug: Map<string, LessonProgress>;
};

type Row = {
  user_id: string;
  product_slug: string;
  best_score: number;
  total: number;
  passed: boolean;
  attempts: number;
  updated_at: string;
};

function toProgress(r: Row): LessonProgress {
  return { bestScore: r.best_score, total: r.total, passed: r.passed, attempts: r.attempts, updatedAt: r.updated_at };
}

export async function getProgress(userId: string): Promise<ProgressResult> {
  const { data, error } = await supabaseAdmin
    .from("av_learning_progress")
    .select("user_id, product_slug, best_score, total, passed, attempts, updated_at")
    .eq("user_id", userId);
  if (error) return { available: false, bySlug: new Map() };
  return { available: true, bySlug: new Map((data as Row[]).map((r) => [r.product_slug, toProgress(r)])) };
}

export type TeamMemberProgress = {
  userId: string;
  name: string;
  role: string;
  passed: number;
  lastActivity: string | null;
};

/** Owner view: lessons passed per active team member. */
export async function getTeamProgress(): Promise<{ available: boolean; members: TeamMemberProgress[] }> {
  const [{ data: users }, { data: rows, error }] = await Promise.all([
    supabaseAdmin.from("av_users").select("id, name, role").eq("active", true).order("name"),
    supabaseAdmin.from("av_learning_progress").select("user_id, passed, updated_at"),
  ]);
  if (error) return { available: false, members: [] };

  const members = (users ?? []).map((u) => {
    const mine = (rows ?? []).filter((r) => r.user_id === u.id);
    const last = mine.reduce<string | null>((acc, r) => (!acc || r.updated_at > acc ? r.updated_at : acc), null);
    return { userId: u.id, name: u.name, role: u.role, passed: mine.filter((r) => r.passed).length, lastActivity: last };
  });
  members.sort((a, b) => b.passed - a.passed || a.name.localeCompare(b.name));
  return { available: true, members };
}

/** Record a quiz attempt, keeping the best score. Returns false if the
 * progress table isn't there (the quiz result is still shown to the user). */
export async function recordAttempt(userId: string, slug: string, score: number, total: number, passMark: number): Promise<boolean> {
  const { data: existing, error: readError } = await supabaseAdmin
    .from("av_learning_progress")
    .select("best_score, attempts, passed")
    .eq("user_id", userId)
    .eq("product_slug", slug)
    .maybeSingle();
  if (readError) return false;

  const best = Math.max(score, existing?.best_score ?? 0);
  const { error } = await supabaseAdmin.from("av_learning_progress").upsert(
    {
      user_id: userId,
      product_slug: slug,
      best_score: best,
      total,
      passed: Boolean(existing?.passed) || score >= passMark,
      attempts: (existing?.attempts ?? 0) + 1,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,product_slug" },
  );
  return !error;
}
