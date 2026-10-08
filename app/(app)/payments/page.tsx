import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getRepScope } from "@/lib/data";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { EmptyState } from "@/components/EmptyState";
import { formatCurrency, isOverdue } from "@/lib/utils";
import { fetchAll, sumPayments } from "@/lib/fetch-all";
import { PaymentRow, type DueOrder } from "./PaymentRow";
import { getT } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function PaymentsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: "overdue" | "all" }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");
  const { t } = await getT();
  const { filter } = await searchParams;

  const repId = getRepScope(session);
  // Every fulfilled order, newest first, with its payments embedded — one
  // query instead of a long ?order_id=in.(...) URL (which breaks past a
  // couple of hundred orders), and paged so a very old unpaid balance is
  // never cut off by a row cap. Only the outstanding ones are shown below.
  const { data: orders } = await fetchAll((from, to) => {
    let q = supabaseAdmin
      .from("av_orders")
      .select("id, product, amount, payment_due_date, created_at, customer_id, av_customers(name), av_payments(amount)")
      .eq("status", "fulfilled")
      .not("amount", "is", null)
      .order("created_at", { ascending: false })
      .order("id");
    if (repId) q = q.eq("rep_id", repId);
    return q.range(from, to);
  });

  const paidByOrder = new Map<string, number>();
  for (const o of orders) paidByOrder.set(o.id, sumPayments(o.av_payments));

  const dueOrders: DueOrder[] = (orders ?? []).map((o) => {
    const paid = paidByOrder.get(o.id) ?? 0;
    return {
      id: o.id,
      customerId: o.customer_id,
      // @ts-expect-error many-to-one embed is an object at runtime; the
      // untyped client infers an array.
      customerName: o.av_customers?.name ?? t("Customer"),
      product: o.product,
      amount: o.amount ?? 0,
      paid,
      due: Math.max((o.amount ?? 0) - paid, 0),
      payment_due_date: o.payment_due_date,
      created_at: o.created_at,
    };
  });

  const outstanding = dueOrders.filter((o) => o.due > 0);
  const overdue = outstanding.filter((o) => isOverdue(o.payment_due_date));
  const totalDue = outstanding.reduce((s, o) => s + o.due, 0);
  const totalOverdue = overdue.reduce((s, o) => s + o.due, 0);

  const showOverdueOnly = filter === "overdue";
  const showAll = filter === "all";
  const base = showAll ? dueOrders : showOverdueOnly ? overdue : outstanding;
  const list = base.sort((a, b) => {
    if (!a.payment_due_date) return 1;
    if (!b.payment_due_date) return -1;
    return a.payment_due_date.localeCompare(b.payment_due_date);
  });

  return (
    <div>
      <PageHeader title={t("Payment Dues")} subtitle={t("Follow up on fulfilled orders awaiting payment")} />

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card className="text-center">
          <div className="text-xs text-[var(--muted)]">{t("Total outstanding")}</div>
          <div className="text-lg font-semibold text-[var(--ink)] mt-1">
            {formatCurrency(totalDue)}
          </div>
        </Card>
        <Card className="text-center">
          <div className="text-xs text-[var(--muted)]">{t("Overdue")}</div>
          <div className="text-lg font-semibold text-red-600 mt-1">
            {formatCurrency(totalOverdue)}
          </div>
        </Card>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        <a
          href="/payments"
          className={`text-xs px-3 py-1.5 rounded-full border whitespace-nowrap ${
            !showOverdueOnly && !showAll
              ? "bg-[var(--teal)] text-white border-[var(--teal)]"
              : "border-[var(--border)] text-[var(--muted)]"
          }`}
        >
          {t("Outstanding ({n})", { n: outstanding.length })}
        </a>
        <a
          href="/payments?filter=overdue"
          className={`text-xs px-3 py-1.5 rounded-full border whitespace-nowrap ${
            showOverdueOnly
              ? "bg-[var(--teal)] text-white border-[var(--teal)]"
              : "border-[var(--border)] text-[var(--muted)]"
          }`}
        >
          {t("Overdue ({n})", { n: overdue.length })}
        </a>
        <a
          href="/payments?filter=all"
          className={`text-xs px-3 py-1.5 rounded-full border whitespace-nowrap ${
            showAll
              ? "bg-[var(--teal)] text-white border-[var(--teal)]"
              : "border-[var(--border)] text-[var(--muted)]"
          }`}
        >
          {t("All ({n})", { n: dueOrders.length })}
        </a>
      </div>

      {list.length === 0 ? (
        <Card>
          <EmptyState
            icon="indian-rupee"
            title={showOverdueOnly ? t("No overdue payments") : showAll ? t("No fulfilled orders yet") : t("All caught up")}
            subtitle={t('Payment dues appear here for fulfilled orders — including paid ones under the "All" tab.')}
          />
        </Card>
      ) : (
        <div className="space-y-2">
          {list.map((o) => (
            <PaymentRow key={o.id} order={o} />
          ))}
        </div>
      )}
    </div>
  );
}
