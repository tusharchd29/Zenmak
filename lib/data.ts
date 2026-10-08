import { supabaseAdmin } from "./supabase-admin";
import type { Session } from "./session";
import type { DateRange } from "./date-range";
import { dayStart, dayEnd, monthStartIST, nextMonthStart, todayIST } from "./date-range";
import { getEffectiveTargets } from "./targets";
import { ZONES, type Zone } from "./utils";
import { fetchAll, sumPayments } from "./fetch-all";

export function getRepScope(session: Session) {
  return session.role === "owner" ? null : session.userId;
}

/** Every state grouped under its zone, from the av_zone_states reference
 * table — used wherever a zone selection needs to offer "which states" as
 * a follow-up (the customer form's state field, a tour's state checklist). */
export async function getStatesByZone(): Promise<Record<Zone, string[]>> {
  const { data } = await supabaseAdmin.from("av_zone_states").select("state, zone").order("state");
  const byZone = Object.fromEntries(ZONES.map((z) => [z, [] as string[]])) as Record<Zone, string[]>;
  for (const row of data ?? []) {
    const list = byZone[row.zone as Zone];
    if (list) list.push(row.state);
  }
  return byZone;
}

/** Most recent visit_date per customer, for the given customer ids — used
 * to flag overdue customers when picking a tour stop (never-visited or
 * longest-since-visited first). Returns a plain object keyed by customer id
 * so it's easy to pass straight through to a client component as a prop. */
export async function getLastVisitByCustomer(
  customerIds: string[],
): Promise<Record<string, string | null>> {
  if (customerIds.length === 0) return {};
  const { data } = await supabaseAdmin
    .from("av_visits")
    .select("customer_id, visit_date")
    .in("customer_id", customerIds)
    .order("visit_date", { ascending: false });

  const latest: Record<string, string | null> = {};
  for (const row of data ?? []) {
    if (!(row.customer_id in latest)) latest[row.customer_id] = row.visit_date;
  }
  for (const id of customerIds) {
    if (!(id in latest)) latest[id] = null;
  }
  return latest;
}

export async function getDashboardStats(session: Session, range?: DateRange) {
  const repId = getRepScope(session);

  const visitsQuery = supabaseAdmin
    .from("av_visits")
    .select("*", { count: "exact", head: true });
  if (repId) visitsQuery.eq("rep_id", repId);
  if (range?.from) visitsQuery.gte("visit_date", range.from);
  if (range?.to) visitsQuery.lte("visit_date", range.to);

  // Paged (fetchAll): these rows are summed, and Supabase caps a single
  // response at 1,000 rows.
  const ordersQuery = fetchAll<{ id: string; status: string; amount: number | null; rep_id: string }>((from, to) => {
    let q = supabaseAdmin.from("av_orders").select("id, status, amount, rep_id").order("id");
    if (repId) q = q.eq("rep_id", repId);
    if (range?.from) q = q.gte("created_at", dayStart(range.from));
    if (range?.to) q = q.lte("created_at", dayEnd(range.to));
    return q.range(from, to);
  });

  // Target progress is monthly: orders FULFILLED this Indian calendar month
  // (by fulfilled_at), whatever date range the rest of the dashboard shows.
  const thisMonth = monthStartIST();
  const monthOrdersQuery = fetchAll<{ id: string; amount: number | null; rep_id: string }>((from, to) => {
    let q = supabaseAdmin
      .from("av_orders")
      .select("id, amount, rep_id")
      .eq("status", "fulfilled")
      .gte("fulfilled_at", dayStart(thisMonth))
      .lt("fulfilled_at", dayStart(nextMonthStart(thisMonth)))
      .order("id");
    if (repId) q = q.eq("rep_id", repId);
    return q.range(from, to);
  });

  const customersQuery = supabaseAdmin
    .from("av_customers")
    .select("*", { count: "exact", head: true });
  if (repId) customersQuery.eq("rep_id", repId);

  const repUsersQuery =
    session.role === "owner"
      ? supabaseAdmin.from("av_users").select("id, name, role").eq("role", "rep")
      : null;

  const [{ count: visitsCount }, { data: orders }, { data: monthOrders }, { count: customersCount }, repUsersResult] =
    await Promise.all([visitsQuery, ordersQuery, monthOrdersQuery, customersQuery, repUsersQuery]);
  const users = repUsersResult?.data ?? [];

  const fulfilledOrders = (orders ?? []).filter((o) => o.status === "fulfilled");
  const fulfilledTotal = fulfilledOrders.reduce(
    (sum, o) => sum + (o.amount ?? 0),
    0,
  );
  const pipelineCount = (orders ?? []).filter(
    (o) => o.status !== "fulfilled",
  ).length;

  // Targets are a monthly figure and carry forward until changed (see
  // lib/targets.ts) — "this month" for the dashboard is always the current
  // calendar month, independent of whatever date range the person has
  // filtered the rest of the dashboard to.
  const monthFulfilledTotal = monthOrders.reduce((sum, o) => sum + (o.amount ?? 0), 0);
  const targetRepIds = repId ? [repId] : users.map((u) => u.id);
  const effectiveTargets = await getEffectiveTargets(targetRepIds, thisMonth);
  const targetTotal = Array.from(effectiveTargets.values()).reduce(
    (sum, t) => sum + t.amount,
    0,
  );
  const achievementPct =
    targetTotal > 0
      ? Math.min(100, Math.round((monthFulfilledTotal / targetTotal) * 100))
      : 0;

  let repBreakdown: Array<{
    repId: string;
    name: string;
    fulfilled: number;
    target: number;
  }> = [];

  if (session.role === "owner") {
    repBreakdown = users.map((u) => {
      const userOrders = monthOrders.filter((o) => o.rep_id === u.id);
      const fulfilled = userOrders.reduce((sum, o) => sum + (o.amount ?? 0), 0);
      const target = effectiveTargets.get(u.id)?.amount ?? 0;
      return { repId: u.id, name: u.name, fulfilled, target };
    });
  }

  return {
    visitsCount: visitsCount ?? 0,
    customersCount: customersCount ?? 0,
    fulfilledCount: fulfilledOrders.length,
    fulfilledTotal,
    pipelineCount,
    targetTotal,
    achievementPct,
    repBreakdown,
  };
}

export async function getPaymentDues(session: Session) {
  const repId = getRepScope(session);

  // Payments are embedded per order (one query, no long id list in the URL)
  // and the orders are paged, since every row is summed.
  const { data: orders } = await fetchAll<{ id: string; amount: number | null; payment_due_date: string | null; av_payments: { amount: number }[] }>(
    (from, to) => {
      let q = supabaseAdmin
        .from("av_orders")
        .select("id, amount, payment_due_date, av_payments(amount)")
        .eq("status", "fulfilled")
        .not("amount", "is", null)
        .order("id");
      if (repId) q = q.eq("rep_id", repId);
      return q.range(from, to);
    },
  );

  const paidByOrder = new Map<string, number>();
  for (const o of orders) paidByOrder.set(o.id, sumPayments(o.av_payments));

  const today = todayIST();
  let totalDue = 0;
  let overdueTotal = 0;
  let outstandingCount = 0;
  let overdueCount = 0;

  for (const o of orders ?? []) {
    const paid = paidByOrder.get(o.id) ?? 0;
    const due = Math.max((o.amount ?? 0) - paid, 0);
    if (due > 0) {
      totalDue += due;
      outstandingCount += 1;
      if (o.payment_due_date && o.payment_due_date.slice(0, 10) < today) {
        overdueTotal += due;
        overdueCount += 1;
      }
    }
  }

  return { totalDue, overdueTotal, outstandingCount, overdueCount };
}

export async function getMapCustomers(session: Session) {
  const repId = getRepScope(session);
  const query = supabaseAdmin
    .from("av_customers")
    .select("id, name, segment, zone, latitude, longitude")
    .not("latitude", "is", null)
    .not("longitude", "is", null);
  if (repId) query.eq("rep_id", repId);
  const { data } = await query;
  return data ?? [];
}

export async function getZoneBreakdown(session: Session) {
  const repId = getRepScope(session);
  const query = supabaseAdmin.from("av_customers").select("zone");
  if (repId) query.eq("rep_id", repId);
  const { data } = await query;

  const counts: Record<string, number> = { north: 0, central: 0, west: 0, south: 0, unassigned: 0 };
  for (const row of data ?? []) {
    const z = row.zone as string | null;
    counts[z && z in counts ? z : "unassigned"] += 1;
  }
  return counts;
}

export type RepReconciliation = {
  repId: string;
  name: string;
  advanced: number;
  spent: number;
  balance: number;
};

/**
 * Cash advances given to reps (av_rep_advances) vs. what they've actually
 * logged in av_expenses — the balance is what's left of the advance
 * (positive) or what the rep is owed back (negative), all-time. Owner sees
 * every rep; a rep sees only their own row.
 */
export async function getRepAdvanceReconciliation(session: Session): Promise<{
  reps: RepReconciliation[];
  entries: Array<{
    id: string;
    rep_id: string;
    amount: number;
    purpose: string | null;
    given_at: string;
    repName: string;
  }>;
}> {
  const repId = getRepScope(session);

  const advancesQuery = supabaseAdmin
    .from("av_rep_advances")
    .select("id, rep_id, amount, purpose, given_at, av_users(name)")
    .order("given_at", { ascending: false });
  if (repId) advancesQuery.eq("rep_id", repId);

  // Every expense is summed against advances — page past the 1,000-row cap.
  const expensesQuery = fetchAll<{ rep_id: string; amount: number }>((from, to) => {
    let q = supabaseAdmin.from("av_expenses").select("rep_id, amount").order("id");
    if (repId) q = q.eq("rep_id", repId);
    return q.range(from, to);
  });

  const [{ data: advances }, { data: expenses }] = await Promise.all([advancesQuery, expensesQuery]);

  const advancedByRep = new Map<string, number>();
  for (const a of advances ?? []) {
    advancedByRep.set(a.rep_id, (advancedByRep.get(a.rep_id) ?? 0) + a.amount);
  }
  const spentByRep = new Map<string, number>();
  for (const e of expenses ?? []) {
    spentByRep.set(e.rep_id, (spentByRep.get(e.rep_id) ?? 0) + e.amount);
  }

  let reps: RepReconciliation[];
  if (session.role === "owner") {
    const { data: users } = await supabaseAdmin.from("av_users").select("id, name").eq("role", "rep");
    reps = (users ?? []).map((u) => {
      const advanced = advancedByRep.get(u.id) ?? 0;
      const spent = spentByRep.get(u.id) ?? 0;
      return { repId: u.id, name: u.name, advanced, spent, balance: advanced - spent };
    });
  } else {
    const advanced = advancedByRep.get(session.userId) ?? 0;
    const spent = spentByRep.get(session.userId) ?? 0;
    reps = [{ repId: session.userId, name: session.name, advanced, spent, balance: advanced - spent }];
  }

  const entries = (advances ?? []).map((a) => ({
    id: a.id as string,
    rep_id: a.rep_id as string,
    amount: a.amount as number,
    purpose: a.purpose as string | null,
    given_at: a.given_at as string,
    // @ts-expect-error joined relation
    repName: (a.av_users?.name as string) ?? "—",
  }));

  return { reps, entries };
}

export async function getRecentActivity(session: Session, limit = 8) {
  const repId = getRepScope(session);

  const visitsQuery = supabaseAdmin
    .from("av_visits")
    .select("id, visit_date, purpose, av_customers(name)")
    .order("visit_date", { ascending: false })
    .limit(limit);
  if (repId) visitsQuery.eq("rep_id", repId);

  const ordersQuery = supabaseAdmin
    .from("av_orders")
    .select("id, status, amount, created_at, av_customers(name)")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (repId) ordersQuery.eq("rep_id", repId);

  const [{ data: visits }, { data: orders }] = await Promise.all([
    visitsQuery,
    ordersQuery,
  ]);

  return { visits: visits ?? [], orders: orders ?? [] };
}
