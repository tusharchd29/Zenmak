import type { BrochureId, L } from "./types";

export type Brochure = {
  id: BrochureId;
  title: L;
  pages: number;
  /** Public path of the full PDF (see scripts/split-brochures.py). */
  file: string;
  sizeMb: number;
};

export const BROCHURES: Brochure[] = [
  {
    id: "product-manual",
    title: { en: "Product Manual (all products)", hi: "प्रोडक्ट मैनुअल (सभी प्रोडक्ट)" },
    pages: 36,
    file: "/docs/brochures/product-manual.pdf",
    sizeMb: 3.2,
  },
  {
    id: "feed-supplements",
    title: { en: "Feed Supplements", hi: "फीड सप्लीमेंट" },
    pages: 47,
    file: "/docs/brochures/feed-supplements.pdf",
    sizeMb: 12,
  },
  {
    id: "liquid-supplements",
    title: { en: "Liquid Supplements", hi: "लिक्विड सप्लीमेंट" },
    pages: 10,
    file: "/docs/brochures/liquid-supplements.pdf",
    sizeMb: 3.3,
  },
  {
    id: "herbal",
    title: { en: "Herbal Range", hi: "हर्बल रेंज" },
    pages: 9,
    file: "/docs/brochures/herbal.pdf",
    sizeMb: 1.3,
  },
  {
    id: "bio-security",
    title: { en: "Bio-Security Range", hi: "बायो-सिक्योरिटी रेंज" },
    pages: 6,
    file: "/docs/brochures/bio-security.pdf",
    sizeMb: 1.2,
  },
];
