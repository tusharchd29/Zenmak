// Supabase returns at most 1,000 rows per request by default, silently. Any
// query whose rows are summed (sales totals, dues, expenses) must page
// through everything, or totals go quietly wrong once a table passes 1,000
// rows. `page(from, to)` must build a FRESH query each call, with a stable
// .order(), and apply .range(from, to).

type Page<T> = PromiseLike<{ data: T[] | null; error: { message: string } | null }>;

const PAGE_SIZE = 1000;
const MAX_ROWS = 100_000; // safety stop, far beyond this team's volume

export async function fetchAll<T>(page: (from: number, to: number) => Page<T>): Promise<{ data: T[]; error: { message: string } | null }> {
  const rows: T[] = [];
  for (let from = 0; from < MAX_ROWS; from += PAGE_SIZE) {
    const { data, error } = await page(from, from + PAGE_SIZE - 1);
    if (error) return { data: rows, error };
    rows.push(...(data ?? []));
    if (!data || data.length < PAGE_SIZE) break;
  }
  return { data: rows, error: null };
}

/** Sum of an embedded av_payments(amount) list. */
export function sumPayments(payments: { amount: number }[] | null | undefined): number {
  return (payments ?? []).reduce((s, p) => s + (p.amount ?? 0), 0);
}
