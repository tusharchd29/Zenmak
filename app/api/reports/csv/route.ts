import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getReportData } from "@/lib/reports";
import { SHEETS, toCsv } from "@/lib/report-csv";

// Spreadsheet download of one report section — same date range and rep
// scoping as the PDF (a rep only ever gets their own rows).

function isValidDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(new Date(value).getTime());
}

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.redirect(new URL("/login", request.url));

  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start") ?? "";
  const end = searchParams.get("end") ?? "";
  const sheetKey = searchParams.get("sheet") ?? "";
  const sheet = SHEETS[sheetKey];

  if (!sheet) return NextResponse.json({ error: "Pick which sheet to download." }, { status: 400 });
  if (!isValidDate(start) || !isValidDate(end)) {
    return NextResponse.json({ error: "Start and end date are required (YYYY-MM-DD)." }, { status: 400 });
  }
  if (start > end) return NextResponse.json({ error: "Start date must be on or before the end date." }, { status: 400 });
  const spanDays = (new Date(end).getTime() - new Date(start).getTime()) / 86_400_000;
  if (spanDays > 366) return NextResponse.json({ error: "Date range can't be longer than a year." }, { status: 400 });

  const repIds = searchParams.getAll("rep").filter(Boolean);
  const data = await getReportData(session, start, end, {
    repIds: repIds.length > 0 ? repIds : null,
    sections: [sheet.section],
  });

  const csv = toCsv(sheet.headers, sheet.rows(data));
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="zenmak-${sheetKey}-${start}-to-${end}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
