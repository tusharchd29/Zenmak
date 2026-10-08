import type { ReportData, ReportSection } from "./reports";
import { todayIST } from "./date-range";
import { msg } from "./i18n-shared";

// Spreadsheet (CSV) exports of the report sections. CSV opens directly in
// Excel and Google Sheets; a UTF-8 byte-order mark makes Excel read Hindi
// names correctly.

type Cell = string | number | boolean | null | undefined;

export type Sheet = {
  /** Which report section's data this sheet needs. */
  section: ReportSection;
  label: string;
  headers: string[];
  rows: (data: ReportData) => Cell[][];
};

// Plain dates ("YYYY-MM-DD") pass through; timestamps are shown as the
// India calendar date / time they happened on, not the UTC one.
const date = (v: string | null | undefined) => (!v ? "" : v.length <= 10 ? v : todayIST(new Date(v)));
const dateTime = (v: string) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(new Date(v))
    .replace(",", "");

export const SHEETS: Record<string, Sheet> = {
  visits: {
    section: "visits",
    label: msg("Visits"),
    headers: ["Date", "Rep", "Customer", "Purpose", "Discussion", "Follow-up needed", "Next visit"],
    rows: (d) => d.visits.map((v) => [v.visitDate, v.repName, v.customer?.name, v.purpose, v.discussionSummary, v.followUpRequired ? "Yes" : "No", date(v.nextVisitDate)]),
  },
  orders: {
    section: "orders",
    label: msg("Orders"),
    headers: ["Created", "Rep", "Customer", "Products", "Quantity", "Amount", "Status", "Paid", "Due", "Payment due date"],
    rows: (d) => d.orders.map((o) => [date(o.createdAt), o.repName, o.customer?.name, o.product, o.quantity, o.amount, o.status, o.paid, o.due, date(o.paymentDueDate)]),
  },
  payments: {
    section: "orders",
    label: msg("Payments received"),
    headers: ["Date", "Rep", "Customer", "Amount", "Notes"],
    rows: (d) => d.payments.map((p) => [date(p.createdAt), p.repName, p.customer?.name, p.amount, p.notes]),
  },
  expenses: {
    section: "expenses",
    label: msg("Expenses"),
    headers: ["Date", "Rep", "Category", "Amount", "Note"],
    rows: (d) => d.expenses.map((e) => [e.expenseDate, e.repName, e.category, e.amount, e.note]),
  },
  travel: {
    section: "travel",
    label: msg("Travel & reimbursement"),
    headers: ["Date", "Rep", "Distance (km)", "Rate per km", "Reimbursement"],
    rows: (d) => d.travelLogs.map((t) => [t.travelDate, t.repName, t.distanceKm, t.ratePerKm, t.reimbursement]),
  },
  advances: {
    section: "advances",
    label: msg("Customer advances"),
    headers: ["Date", "Rep", "Customer", "Amount", "Status", "Settled on"],
    rows: (d) => d.advances.map((a) => [date(a.createdAt), a.repName, a.customer?.name, a.amount, a.status, date(a.settledAt)]),
  },
  "rep-advances": {
    section: "advances",
    label: msg("Cash advances to reps"),
    headers: ["Date", "Rep", "Amount", "Purpose"],
    rows: (d) => d.repAdvances.map((a) => [a.givenAt, a.repName, a.amount, a.purpose]),
  },
  claims: {
    section: "advances",
    label: msg("Rep claims"),
    headers: ["Date", "Rep", "Amount", "Status", "Notes"],
    rows: (d) => d.claims.map((c) => [date(c.createdAt), c.repName, c.amount, c.status, c.notes]),
  },
  targets: {
    section: "targets",
    label: msg("Targets vs achievement"),
    headers: ["Rep", "Target", "Achieved (fulfilled in period)", "% of target"],
    rows: (d) => d.targets.map((t) => [t.repName, t.target, t.achieved, t.pct]),
  },
  tours: {
    section: "tours",
    label: msg("Tour stops"),
    headers: ["Week of", "Rep", "Zone", "Planned date", "Customer", "Completed"],
    rows: (d) =>
      d.tours.flatMap((t) =>
        t.stops.length
          ? t.stops.map((s) => [t.weekStart, t.repName, t.zone, s.plannedDate, s.customerName, s.completed ? "Yes" : "No"])
          : [[t.weekStart, t.repName, t.zone, "", "", ""]],
      ),
  },
  learning: {
    section: "learning",
    label: msg("Learning summary"),
    headers: ["Person", "Lessons passed (all time)", "Total lessons", "Tests in period", "Lessons passed in period", "Avg score in period (%)", "Last test in period"],
    rows: (d) => d.learning.map((l) => [l.repName, l.passedAllTime, l.totalLessons, l.testsInPeriod, l.passedInPeriod, l.avgPctInPeriod, date(l.lastActivity)]),
  },
  "learning-tests": {
    section: "learning",
    label: msg("Every test taken"),
    headers: ["Date & time", "Person", "Lesson", "Score", "Out of", "Result"],
    rows: (d) => d.learningAttempts.map((a) => [dateTime(a.at), a.repName, a.lesson, a.score, a.total, a.passed ? "Pass" : "Fail"]),
  },
};

function cell(v: Cell): string {
  if (v === null || v === undefined) return "";
  let s = String(v);
  // A cell starting with = + - @ is treated as a formula by Excel; prefix
  // text cells like that so a customer name can't run a formula.
  if (typeof v === "string" && /^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function toCsv(headers: string[], rows: Cell[][]): string {
  const lines = [headers, ...rows].map((r) => r.map(cell).join(","));
  return "﻿" + lines.join("\r\n") + "\r\n";
}
