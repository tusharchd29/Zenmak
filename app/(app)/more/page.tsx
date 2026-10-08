import Link from "next/link";
import { getSession } from "@/lib/session";
import { GROWTH_NAV } from "@/components/nav-config";
import { Icon } from "@/components/icon";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { LangToggle } from "@/components/LangToggle";
import { getT } from "@/lib/i18n";

export default async function MorePage() {
  const session = await getSession();
  const isOwner = session?.role === "owner";
  const { t } = await getT();

  return (
    <div>
      <PageHeader title={t("More")} />
      <div className="space-y-2">
        {[
          { href: "/map", label: "Territory Map", icon: "map" },
          ...GROWTH_NAV,
          { href: "/tours", label: "Tour Plan", icon: "calendar" },
          { href: "/travel", label: "Travel Log", icon: "car" },
        ]
          .filter((item) => !("ownerOnly" in item) || !item.ownerOnly || isOwner)
          .map(
          (item) => (
            <Link key={item.href} href={item.href}>
              <Card className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name={item.icon} size={18} className="text-[var(--teal)]" />
                  <span className="text-[var(--ink)] font-medium">{t(item.label)}</span>
                </div>
                <Icon name="chevron-right" size={16} className="text-[var(--muted)]" />
              </Card>
            </Link>
          ),
        )}
        <Card className="flex items-center justify-between gap-3">
          <span className="text-[var(--ink)] font-medium">{t("Language")}</span>
          <LangToggle />
        </Card>
        <form action="/api/logout" method="POST">
          <button type="submit" className="btn-secondary w-full py-2.5 mt-2">
            {t("Log out")}
          </button>
        </form>
      </div>
    </div>
  );
}
