import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getT } from "@/lib/i18n";
import { GLOSSARY } from "@/lib/catalog";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { LangToggle } from "@/components/LangToggle";

export const dynamic = "force-dynamic";

export default async function GlossaryPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const { lang, t, tx, txl } = await getT();

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link href="/learn" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <Icon name="chevron-right" size={14} className="rotate-180" />
          {t("Learning")}
        </Link>
        <LangToggle lang={lang} />
      </div>

      <h1 className="text-xl font-semibold text-[var(--ink)]">{t("Technical glossary")}</h1>
      <p className="text-sm text-[var(--muted)] mt-0.5 mb-4">{t("Every technical term with a simple meaning and a line you can use")}</p>

      <div className="space-y-2">
        {GLOSSARY.map((term) => (
          <Card key={term.id}>
            <h2 className="font-semibold text-[var(--ink)]">{term.term}</h2>
            <p className="text-[var(--ink)] mt-1 leading-relaxed">{tx(term.meaning)}</p>
            <p className="text-sm mt-2 text-[var(--teal)] leading-relaxed">
              <span className="font-semibold">{t("Say it like this")}:</span> &ldquo;{tx(term.say)}&rdquo;
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
