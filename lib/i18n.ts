import { cookies } from "next/headers";
import type { Lang } from "@/lib/catalog/types";

// English/Hindi for the Product Master, Learning and the public product
// page. The choice lives in a plain cookie (not the session) so it survives
// logout and also applies to the public /p pages, where there's no session.
export const LANG_COOKIE = "zen_lang";

export async function getLang(): Promise<Lang> {
  const store = await cookies();
  return store.get(LANG_COOKIE)?.value === "hi" ? "hi" : "en";
}

/** Fixed UI labels used across the product and learning pages. */
const UI = {
  productMaster: { en: "Product Master", hi: "प्रोडक्ट मास्टर" },
  productMasterSub: { en: "Every Zenmak product from the brochures — open one to share it", hi: "ब्रोशर के सभी Zenmak प्रोडक्ट — खोलकर शेयर करें" },
  learning: { en: "Learning", hi: "सीखें" },
  learningSub: { en: "Short lessons on every product, in English and Hindi", hi: "हर प्रोडक्ट पर छोटे पाठ, अंग्रेज़ी और हिंदी में" },
  search: { en: "Search products…", hi: "प्रोडक्ट खोजें…" },
  all: { en: "All", hi: "सभी" },
  products: { en: "products", hi: "प्रोडक्ट" },
  noMatch: { en: "No product matches that search.", hi: "इस खोज से कोई प्रोडक्ट नहीं मिला।" },
  keyBenefits: { en: "Key benefits in poultry", hi: "पोल्ट्री में मुख्य फायदे" },
  composition: { en: "Composition", hi: "संरचना (Composition)" },
  dosage: { en: "Dosage", hi: "डोज़" },
  presentation: { en: "Pack sizes", hi: "पैक साइज़" },
  storage: { en: "Storage", hi: "भंडारण" },
  rxNote: {
    en: "Use only as advised by a veterinarian. Follow the label withdrawal period before sale of meat or eggs.",
    hi: "केवल वेटेरिनेरियन की सलाह पर इस्तेमाल करें। मांस या अंडे बेचने से पहले लेबल पर दिए विदड्रॉल पीरियड का पालन करें।",
  },
  share: { en: "Share with a customer", hi: "ग्राहक को भेजें" },
  detailedSheet: { en: "Detailed brochure", hi: "विस्तृत ब्रोशर" },
  summarySheet: { en: "One-page summary", hi: "एक पेज सारांश" },
  pages: { en: "pages", hi: "पेज" },
  page: { en: "page", hi: "पेज" },
  sharePdf: { en: "Share PDF", hi: "PDF भेजें" },
  whatsapp: { en: "WhatsApp link", hi: "WhatsApp लिंक" },
  download: { en: "Download", hi: "डाउनलोड" },
  productPage: { en: "Product page link (opens without login)", hi: "प्रोडक्ट पेज लिंक (बिना लॉगिन खुलता है)" },
  fullBrochures: { en: "Also in these full brochures", hi: "ये पूरे ब्रोशर भी" },
  learnThis: { en: "Learn this product", hi: "यह प्रोडक्ट सीखें" },
  openInMaster: { en: "Open in Product Master", hi: "प्रोडक्ट मास्टर में खोलें" },
  problem: { en: "When to recommend it", hi: "कब सलाह दें" },
  how: { en: "How it works", hi: "यह कैसे काम करता है" },
  pitch: { en: "What to tell the farmer", hi: "किसान से क्या कहें" },
  proof: { en: "Proof from trials", hi: "ट्रायल का सबूत" },
  objection: { en: "If the farmer says…", hi: "अगर किसान कहे…" },
  answer: { en: "You can answer", hi: "आप जवाब दें" },
  quiz: { en: "Quick quiz", hi: "छोटा क्विज़" },
  quizSub: { en: "Get 4 of 5 right to complete this lesson.", hi: "यह पाठ पूरा करने के लिए 5 में से 4 सही करें।" },
  technical: { en: "Talk like an expert", hi: "एक्सपर्ट की तरह बात करें" },
  technicalSub: { en: "Technical points for vets, nutritionists and big farmers", hi: "वेटेरिनेरियन, न्यूट्रिशनिस्ट और बड़े किसानों के लिए तकनीकी बातें" },
  terms: { en: "Technical terms in this lesson", hi: "इस पाठ के तकनीकी शब्द" },
  sayIt: { en: "Say it like this", hi: "ऐसे कहें" },
  foundations: { en: "Technical foundations", hi: "तकनीकी आधार" },
  glossary: { en: "Technical glossary", hi: "तकनीकी शब्दकोश" },
  glossarySub: { en: "Every technical term with a simple meaning and a line you can use", hi: "हर तकनीकी शब्द — आसान मतलब और बोलने लायक एक लाइन" },
  submit: { en: "Check answers", hi: "जवाब जांचें" },
  retry: { en: "Try again", hi: "फिर से कोशिश करें" },
  retake: { en: "Retake test", hi: "टेस्ट दोबारा दें" },
  report: { en: "Learning report", hi: "सीखने की रिपोर्ट" },
  myResults: { en: "My test results", hi: "मेरे टेस्ट के नतीजे" },
  reportSub: { en: "Who learned what, when, and marks for every attempt", hi: "किसने क्या सीखा, कब, और हर प्रयास के अंक" },
  passed: { en: "Lesson complete", hi: "पाठ पूरा हुआ" },
  notPassed: { en: "Not yet — read the lesson again and retry.", hi: "अभी नहीं — पाठ दोबारा पढ़ें और फिर कोशिश करें।" },
  score: { en: "Score", hi: "स्कोर" },
  completed: { en: "completed", hi: "पूरे" },
  lessons: { en: "lessons", hi: "पाठ" },
  courseIntro: { en: "Why it matters on the farm", hi: "फार्म पर यह क्यों ज़रूरी है" },
  nextLesson: { en: "Next lesson", hi: "अगला पाठ" },
  backToCourse: { en: "Back to course", hi: "कोर्स पर वापस" },
  yourProgress: { en: "Your progress", hi: "आपकी प्रगति" },
  teamProgress: { en: "Team progress", hi: "टीम की प्रगति" },
  forCustomers: { en: "Zenmak Animal Health Division", hi: "ज़ेनमैक एनिमल हेल्थ डिवीज़न" },
} as const;

export type UIKey = keyof typeof UI;

export function ui(key: UIKey, lang: Lang): string {
  return UI[key][lang];
}

export const FORM_LABEL: Record<string, { en: string; hi: string }> = {
  feed: { en: "Feed", hi: "फीड में" },
  water: { en: "Water soluble", hi: "पानी में घुलनशील" },
  liquid: { en: "Liquid (oral)", hi: "लिक्विड (पिलाने वाला)" },
  spray: { en: "Farm use / spray", hi: "फार्म / स्प्रे" },
  injection: { en: "Injection", hi: "इंजेक्शन" },
};
