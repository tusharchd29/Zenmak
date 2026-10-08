"""Cut the source brochures into one PDF per product.

Usage:
    python3 scripts/split-brochures.py <dir-with-source-pdfs>

The source directory must hold the five brochures under these names:
bio-security.pdf, feed-supplements.pdf, herbal.pdf, liquid-supplements.pdf,
product-manual.pdf. They're copied as-is to public/docs/brochures/ (the
"send the whole brochure" files), and each product in lib/catalog/sheets.json
gets:

- public/docs/products/<slug>.pdf          — its pages from the detailed
  range brochure, when it has some ("detail" in sheets.json)
- public/docs/products/<slug>-summary.pdf  — its half page from the product
  manual (every product has one: two products share each manual page, split
  by a rule at the same height on every page)

Re-run this whenever a brochure is updated, then commit the regenerated
files. Requires pypdf.
"""

import json
import shutil
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import RectangleObject

ROOT = Path(__file__).resolve().parent.parent
BROCHURES = ["bio-security", "feed-supplements", "herbal", "liquid-supplements", "product-manual"]

# The manual's divider rule sits 49.92% of the way down every product page;
# leave a hair either side so neither half shows a sliver of the rule.
MANUAL_DIVIDER_FROM_BOTTOM = 1 - 0.4992
RULE_GAP_PT = 1.5


def detail_pdf(src: Path, pages: list[int], out: Path) -> None:
    reader = PdfReader(src)
    writer = PdfWriter()
    for n in pages:
        writer.add_page(reader.pages[n - 1])
    writer.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
    with out.open("wb") as f:
        writer.write(f)


def summary_pdf(src: Path, page: int, half: str, out: Path) -> None:
    # A fresh reader per output, since the crop mutates the page object.
    reader = PdfReader(src)
    p = reader.pages[page - 1]
    box = p.mediabox
    left, bottom, right, top = float(box.left), float(box.bottom), float(box.right), float(box.top)
    split = bottom + (top - bottom) * MANUAL_DIVIDER_FROM_BOTTOM
    if half == "top":
        rect = RectangleObject([left, split + RULE_GAP_PT, right, top])
    else:
        rect = RectangleObject([left, bottom, right, split - RULE_GAP_PT])
    p.mediabox = rect
    p.cropbox = rect
    writer = PdfWriter()
    writer.add_page(p)
    writer.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
    with out.open("wb") as f:
        writer.write(f)


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src_dir = Path(sys.argv[1])
    sheets = json.loads((ROOT / "lib/catalog/sheets.json").read_text())

    brochure_out = ROOT / "public/docs/brochures"
    product_out = ROOT / "public/docs/products"
    brochure_out.mkdir(parents=True, exist_ok=True)
    product_out.mkdir(parents=True, exist_ok=True)

    for name in BROCHURES:
        shutil.copyfile(src_dir / f"{name}.pdf", brochure_out / f"{name}.pdf")

    for slug, sheet in sheets.items():
        if "detail" in sheet:
            d = sheet["detail"]
            detail_pdf(src_dir / f"{d['brochure']}.pdf", d["pages"], product_out / f"{slug}.pdf")
        s = sheet["summary"]
        summary_pdf(src_dir / "product-manual.pdf", s["page"], s["half"], product_out / f"{slug}-summary.pdf")

    print(f"Wrote {len(BROCHURES)} brochures and {len(sheets)} products.")


if __name__ == "__main__":
    main()
