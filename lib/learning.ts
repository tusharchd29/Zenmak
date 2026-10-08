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

  // Full history row (retakes included) for the Learning report. A failure
  // here shouldn't lose the best-score update below, so it's not fatal.
  await supabaseAdmin
    .from("av_learning_attempts")
    .insert({ user_id: userId, product_slug: slug, score, total, passed: score >= passMark });

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

// --- Learning report -------------------------------------------------------

export type Attempt = {
  userId: string;
  slug: string;
  score: number;
  total: number;
  passed: boolean;
  at: string;
};

export type LessonResult = {
  slug: string;
  attempts: number;
  bestScore: number;
  lastScore: number;
  total: number;
  passed: boolean;
  firstPassedAt: string | null;
  lastAttemptAt: string;
};

export type PersonReport = {
  userId: string;
  name: string;
  role: string;
  lessonsPassed: number;
  lessonsTried: number;
  attempts: number;
  /** Average of best scores across tried lessons, as a percentage. */
  avgBestPct: number | null;
  lastActivity: string | null;
  lessons: LessonResult[];
  recent: Attempt[];
};

/**
 * Who learned what, when, and with what marks. Pass `onlyUserId` to scope
 * to one person (a rep sees only themselves). Returns available=false if
 * the attempts table is missing.
 */
export async function getLearningReport(onlyUserId?: string): Promise<{ available: boolean; people: PersonReport[] }> {
  let usersQuery = supabaseAdmin.from("av_users").select("id, name, role").eq("active", true).order("name");
  let attemptsQuery = supabaseAdmin
    .from("av_learning_attempts")
    .select("user_id, product_slug, score, total, passed, created_at")
    .order("created_at", { ascending: false })
    .limit(5000);
  if (onlyUserId) {
    usersQuery = usersQuery.eq("id", onlyUserId);
    attemptsQuery = attemptsQuery.eq("user_id", onlyUserId);
  }
  const [{ data: users }, { data: rows, error }] = await Promise.all([usersQuery, attemptsQuery]);
  if (error) return { available: false, people: [] };

  const attempts: Attempt[] = (rows ?? []).map((r) => ({
    userId: r.user_id,
    slug: r.product_slug,
    score: r.score,
    total: r.total,
    passed: r.passed,
    at: r.created_at,
  }));

  const people = (users ?? []).map((u) => {
    const mine = attempts.filter((a) => a.userId === u.id); // newest first
    const bySlug = new Map<string, Attempt[]>();
    for (const a of mine) bySlug.set(a.slug, [...(bySlug.get(a.slug) ?? []), a]);

    const lessons: LessonResult[] = [...bySlug.entries()].map(([slug, list]) => {
      const passes = list.filter((a) => a.passed);
      return {
        slug,
        attempts: list.length,
        bestScore: Math.max(...list.map((a) => a.score)),
        lastScore: list[0].score,
        total: list[0].total,
        passed: passes.length > 0,
        firstPassedAt: passes.length ? passes[passes.length - 1].at : null,
        lastAttemptAt: list[0].at,
      };
    });
    lessons.sort((a, b) => b.lastAttemptAt.localeCompare(a.lastAttemptAt));

    const pct = lessons.map((l) => l.bestScore / l.total);
    return {
      userId: u.id,
      name: u.name,
      role: u.role,
      lessonsPassed: lessons.filter((l) => l.passed).length,
      lessonsTried: lessons.length,
      attempts: mine.length,
      avgBestPct: pct.length ? Math.round((pct.reduce((x, y) => x + y, 0) / pct.length) * 100) : null,
      lastActivity: mine[0]?.at ?? null,
      lessons,
      recent: mine.slice(0, 30),
    };
  });
  people.sort((a, b) => b.lessonsPassed - a.lessonsPassed || a.name.localeCompare(b.name));
  return { available: true, people };
}
