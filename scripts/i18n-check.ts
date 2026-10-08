/**
 * Lists every translatable string and reports which are missing per
 * language. Run: npx tsx --tsconfig tsconfig.json scripts/i18n-check.ts [--dump <dir>]
 *   --dump writes <dir>/<lang>.ui.json and <lang>.content.json with the
 *   missing English keys, ready to translate.
 * UI keys come from t("…") / msg("…") literals in app/, components/, lib/.
 * Content keys are the English fields of the product + learning catalog.
 */
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { PRODUCTS, CATEGORIES, TECHNICAL, FOUNDATIONS, GLOSSARY } from "../lib/catalog";
import { UI_DICTS, CONTENT_DICTS } from "../lib/i18n/dicts";
import { LANGS } from "../lib/i18n-shared";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f === "i18n" || f === "node_modules" ? [] : walk(p);
    return /\.(ts|tsx)$/.test(f) ? [p] : [];
  });
}

const ui = new Set<string>();
const literal = /\b(?:t|msg)\(\s*(["'])((?:\\.|(?!\1).)*)\1/g;
for (const file of ["app", "components", "lib"].flatMap(walk)) {
  if (file.includes("lib/catalog/products") || file.includes("lib/catalog/technical") || file.includes("lib/catalog/glossary") || file.includes("lib/catalog/foundations")) continue;
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(literal)) ui.add(JSON.parse(m[1] === '"' ? `"${m[2]}"` : `"${m[2].replace(/"/g, '\\"').replace(/\\'/g, "'")}"`));
}

const content = new Set<string>();
const add = (s?: string) => s && content.add(s);
for (const p of PRODUCTS) {
  add(p.tagline.en);
  p.benefits.en.forEach(add);
  p.dosage.en.forEach(add);
  add(p.storage?.en);
  for (const k of ["problem", "how", "pitch"] as const) add(p.learn[k].en);
  add(p.learn.proof?.en);
  add(p.learn.objection?.q.en);
  add(p.learn.objection?.a.en);
  TECHNICAL[p.slug].en.forEach(add);
}
for (const c of CATEGORIES) {
  add(c.name.en);
  add(c.intro.en);
  FOUNDATIONS[c.id].en.forEach(add);
}
for (const g of GLOSSARY) {
  add(g.meaning.en);
  add(g.say.en);
}

const dumpAt = process.argv.indexOf("--dump");
const dumpDir = dumpAt > 0 ? process.argv[dumpAt + 1] : null;
if (dumpDir) mkdirSync(dumpDir, { recursive: true });

console.log(`UI strings: ${ui.size} · content strings: ${content.size}`);
let missingTotal = 0;
for (const { code } of LANGS) {
  if (code === "en") continue;
  const missingUi = [...ui].filter((k) => !(k in UI_DICTS[code]));
  const missingContent = code === "hi" ? [] : [...content].filter((k) => !(k in CONTENT_DICTS[code]));
  missingTotal += missingUi.length + missingContent.length;
  console.log(`${code}: missing ${missingUi.length} UI, ${missingContent.length} content`);
  if (dumpDir) {
    writeFileSync(join(dumpDir, `${code}.ui.json`), JSON.stringify(missingUi, null, 1));
    writeFileSync(join(dumpDir, `${code}.content.json`), JSON.stringify(missingContent, null, 1));
  }
}
process.exitCode = process.argv.includes("--strict") && missingTotal > 0 ? 1 : 0;
