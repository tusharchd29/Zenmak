import type { Dict, Lang } from "@/lib/i18n-shared";
import uiHi from "./ui/hi";
import uiMr from "./ui/mr";
import uiKn from "./ui/kn";
import uiTa from "./ui/ta";
import uiTe from "./ui/te";
import uiBn from "./ui/bn";
import cMr from "./content/mr";
import cKn from "./content/kn";
import cTa from "./content/ta";
import cTe from "./content/te";
import cBn from "./content/bn";

/** Screen text (small — the current language's is sent to the browser). */
export const UI_DICTS: Record<Lang, Dict> = { en: {}, hi: uiHi, mr: uiMr, kn: uiKn, ta: uiTa, te: uiTe, bn: uiBn };

/** Product + learning content (large — server only). Hindi content is the
 * .hi fields inline in lib/catalog. */
export const CONTENT_DICTS: Record<Lang, Dict> = { en: {}, hi: {}, mr: cMr, kn: cKn, ta: cTa, te: cTe, bn: cBn };
