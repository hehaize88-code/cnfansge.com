#!/usr/bin/env python3
"""Build the printable localized planners (requires reportlab).

Run from any directory. The output is static, contains no live data or tracking,
and deliberately contains no sample products or monetary values.
"""
import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads"
COPY = json.loads(Path(__file__).with_suffix(".json").read_text())
VERSION = "2026-11-07"
SITE = "https://oopbuyvip.org"
ESTIMATOR = "https://oopbuy.com/estimation"
W, H = A4
M = 42
CW = W - 2 * M
NAVY = colors.HexColor("#172B47")
MUTED = colors.HexColor("#536278")
LINE = colors.HexColor("#BCC6D2")
PALE = colors.HexColor("#F1F4F7")
ORANGE = colors.HexColor("#D87839")


def fonts():
    dirs = [Path("/usr/share/fonts/truetype/dejavu"), Path("/usr/local/share/fonts")]
    for directory in dirs:
        regular = directory / "DejaVuSans.ttf"
        bold = directory / "DejaVuSans-Bold.ttf"
        if regular.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont("Planner", str(regular)))
            pdfmetrics.registerFont(TTFont("PlannerBold", str(bold)))
            return
    raise FileNotFoundError("Install DejaVu Sans and DejaVu Sans Bold to build the planners.")


def paragraph(c, text, x, top, width, size=9.4, leading=13, bold=False, color=MUTED):
    style = ParagraphStyle("planner", fontName="PlannerBold" if bold else "Planner",
                           fontSize=size, leading=leading, textColor=color, alignment=TA_LEFT)
    p = Paragraph(escape(text), style)
    _, height = p.wrap(width, H)
    p.drawOn(c, x, top - height)
    return height


def row(c, labels, top, height, fractions=None):
    fractions = fractions or [1 / len(labels)] * len(labels)
    x = M
    for label, fraction in zip(labels, fractions):
        width = CW * fraction
        label_height = paragraph(c, label, x + 9, top - 7, width - 18,
                                 size=8.8, leading=11, color=MUTED)
        if label_height > height - 16:
            raise ValueError(f"Field too short for label: {label}")
        c.setStrokeColor(LINE)
        c.setLineWidth(.45)
        c.line(x + 9, top - height + 6, x + width - 9, top - height + 6)
        x += width
    return top - height


def section(c, title, top):
    c.setFillColor(PALE)
    c.rect(M, top - 23, CW, 23, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.rect(M, top - 23, 3, 23, fill=1, stroke=0)
    paragraph(c, title, M + 10, top - 6, CW - 20, size=9.2, leading=12, bold=True, color=NAVY)
    return top - 23


def header(c, t, locale, page):
    c.setFillColor(NAVY)
    c.setFont("PlannerBold", 11)
    c.drawString(M, H - 42, "OOPBUY VIP")
    c.setFillColor(MUTED)
    c.setFont("Planner", 8.5)
    c.drawRightString(W - M, H - 42, locale.upper())
    title = t["productTitle"] if page == 1 else t["parcelTitle"]
    paragraph(c, title, M, H - 64, CW, size=23, leading=28, bold=True, color=NAVY)
    subtitle = t["productSubtitle"] if page == 1 else t["parcelSubtitle"]
    paragraph(c, subtitle, M, H - 105, CW, size=9.5, leading=13)
    c.setFillColor(PALE)
    c.roundRect(M, 650, CW, 49, 4, fill=1, stroke=0)
    paragraph(c, t["notice"], M + 11, 688, CW - 22, size=9, leading=12)


def footer(c, t, locale, page):
    c.setStrokeColor(LINE)
    c.setLineWidth(.5)
    c.line(M, 53, W - M, 53)
    c.setFont("Planner", 7.3)
    c.setFillColor(MUTED)
    url = SITE + ("" if locale == "en" else "/" + locale)
    c.drawString(M, 39, url)
    c.linkURL(url, (M, 36, M + 190, 48), relative=0)
    c.drawRightString(W - M, 39, f'{t["version"]} {VERSION}  |  {t["page"]} {page} / 2')
    c.setFont("Planner", 7)
    c.drawString(M, 27, t["offline"])


def products(c, t, locale):
    header(c, t, locale, 1)
    for number, top in [(1, 632), (2, 370)]:
        y = section(c, f'{t["item"]} {number:02}', top)
        y = row(c, [t["sourceUrl"]], y, 36)
        y = row(c, [t["itemId"], t["date"]], y, 34, [.64, .36])
        y = row(c, [t["variant"]], y, 34)
        y = row(c, [t["quantity"], t["itemPrice"], t["currency"], t["domesticFreight"]], y, 42,
                [.17, .29, .18, .36])
        y = row(c, [t["warehouseWeight"], t["qcDecision"]], y, 40, [.38, .62])
        row(c, [t["nextAction"]], y, 40)
    paragraph(c, t["itemTip"], M + 1, 103, CW - 2, size=8.6, leading=12)
    footer(c, t, locale, 1)
    c.showPage()


def parcel(c, t, locale):
    header(c, t, locale, 2)
    y = section(c, t["parcel"], 632)
    y = row(c, [t["destination"], t["postalRegion"]], y, 44)
    y = row(c, [t["productType"]], y, 44)
    y = row(c, [t["packedGrams"], t["dimensions"]], y, 49, [.34, .66])
    y = section(c, t["quote"], y - 15)
    y = row(c, [t["route"], t["quoteDate"]], y, 42, [.64, .36])
    y = row(c, [t["quoteAmount"], t["currency"]], y, 40, [.64, .36])
    y = row(c, [t["includes"], t["excludes"]], y, 60)
    y = row(c, [t["insurance"]], y, 40)
    row(c, [t["nextAction"]], y, 40)
    paragraph(c, t["quoteTip"], M + 1, 139, CW - 2, size=8.6, leading=12)
    paragraph(c, t["sourceLabel"], M + 1, 101, CW - 2, size=7.7, leading=11)
    c.setFont("Planner", 8)
    c.setFillColor(NAVY)
    c.drawString(M + 1, 75, ESTIMATOR)
    c.linkURL(ESTIMATOR, (M, 71, M + 250, 86), relative=0)
    footer(c, t, locale, 2)
    c.showPage()


def main():
    fonts()
    OUT.mkdir(parents=True, exist_ok=True)
    for locale, translations in COPY.items():
        path = OUT / f"oopbuy-planner-{locale}.pdf"
        c = canvas.Canvas(str(path), pagesize=A4, pageCompression=1, invariant=1)
        c.setTitle(translations["productTitle"] + " / " + translations["parcelTitle"])
        c.setAuthor("oopbuyvip.org")
        c.setSubject(f"Offline product and parcel planning worksheet; version {VERSION}; {locale}")
        c.setCreator("oopbuyvip.org printable planner")
        products(c, translations, locale)
        parcel(c, translations, locale)
        c.save()
        print(path)


if __name__ == "__main__":
    main()
