import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getLang } from "@/lib/i18n";
import { UI_DICTS } from "@/lib/i18n/dicts";
import { I18nProvider } from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "Zenmak Field Ops",
  description: "Field sales, orders and targets for the Zenmak team",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#028090",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // The chosen language's screen text goes to the browser once, here, for
  // every client component (useT); server components use getT().
  const lang = await getLang();
  return (
    <html lang={lang}>
      <body className="antialiased">
        {/* eslint-disable-next-line @next/next/no-img-element -- fixed decorative
            watermark behind all content; next/image's layout constraints aren't
            needed here and would add complexity for no benefit. */}
        <img
          src="/peacock-feather.webp"
          alt=""
          aria-hidden="true"
          className="fixed -bottom-10 -right-16 w-[280px] sm:w-[420px] opacity-[0.32] -z-10 pointer-events-none select-none"
        />
        <I18nProvider lang={lang} dict={UI_DICTS[lang]}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
