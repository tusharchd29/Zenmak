// The product master: every product from the Zenmak brochures, with the
// customer-facing facts (composition, dosage, packs) and the training notes
// the Learning section teaches from. Text a farmer or rep reads comes in
// English and Hindi; composition stays as printed on the brochure, since
// ingredient names are the same in both.

export type { Lang } from "@/lib/i18n-shared";

/** One piece of text in both languages. */
export type L = { en: string; hi: string };

/** A bullet list in both languages — the two lists are independent, so
 * neither has to be a line-by-line translation of the other. */
export type LList = { en: string[]; hi: string[] };

export type CategoryId =
  | "enzymes"
  | "acidifiers"
  | "performance"
  | "emulsifiers"
  | "toxin-binders"
  | "probiotics"
  | "trace-minerals"
  | "eggshell"
  | "anti-stress"
  | "growth-promoters"
  | "liver-tonics"
  | "herbal"
  | "fly-control"
  | "agps"
  | "antibiotics"
  | "anti-pyretic"
  | "vitamins"
  | "bio-security"
  | "injectables";

export type BrochureId =
  | "feed-supplements"
  | "liquid-supplements"
  | "herbal"
  | "bio-security"
  | "product-manual";

/** How the product is given — drives the form badge and the order-catalog
 * unit when syncing. */
export type Form = "feed" | "water" | "liquid" | "spray" | "injection";

export type Pack = { size: number; unit: "g" | "kg" | "ml" | "L"; label?: "Liquid" | "Powder" };

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  form: Form;
  tagline: L;
  composition: string[];
  /** The headline selling points in the poultry business. */
  benefits: LList;
  dosage: LList;
  packs: Pack[];
  storage?: L;
  /** Antibiotics, AGPs and injectables — shown with a vet-advice note. */
  rx?: boolean;
  learn: {
    /** The farm problem this product solves / when to recommend it. */
    problem: L;
    /** How it works, in plain words. */
    how: L;
    /** One or two lines a rep can say to the farmer. */
    pitch: L;
    /** Trial data from the brochure, when there is some. */
    proof?: L;
    /** A common farmer objection and the answer. */
    objection?: { q: L; a: L };
  };
};

export type Category = {
  id: CategoryId;
  name: L;
  /** Short intro for the Learning course — why this category matters on a
   * poultry farm. */
  intro: L;
  icon: string;
};

export type QuizQuestion = {
  id: string;
  q: L;
  options: L[];
  answer: number;
};
