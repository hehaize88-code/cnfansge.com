# New LitBuy articles — editorial source notes

Prepared 15 October 2026 for the litbuys.store update. This is an internal editorial record, not visitor-facing copy.

## Delivered content

`app/content-oct/new-articles.json` contains three new article slugs, each with complete `en`, `de`, `es`, `fr` and `it` versions. Every version has eight matching sections and sixteen corresponding paragraphs. No English fallback is used inside this file.

| Slug | English body words | English words including title, deck and headings | Intended topic |
| --- | ---: | ---: | --- |
| litbuy-hoodies-spreadsheet | 1,387 | 1,469 | Hoodie selection, reference catalog examples, fit, QC evidence, parcel budget |
| litbuy-finds-under-30 | 1,377 | 1,464 | Six historical under-$30 item references, price scope, basket arithmetic, final costs |
| litbuy-clothing-size-guide | 1,425 | 1,508 | Repeatable garment measurements, units, fit decisions, targeted QC measurements |

Counts use whitespace-separated words. Validation checked all five language keys, exactly eight sections and two paragraphs per section, nonempty strings, translated headings and paragraphs distinct from English, and no outbound URLs in article text. Root integration can add approved main-catalog product cards and localized internal links.

## Product evidence

Source: existing `app/catalog-data.ts` in this repository. These are stored USD reference prices, not current sale prices verified from live checkout. Every language states the historical nature, excludes delivery guarantees and asks the reader to check the exact current option. The editorial review date is not presented as a live price-check date.

| Main-catalog ID | Catalog label | Historical USD reference | Approved product destination |
| --- | --- | ---: | --- |
| 6681 | Fresh sweatshirt find | $25.12 | https://cnfansge.com/AllProducts/6681.html |
| 6680 | Everyday pants / shorts | $28.10 | https://cnfansge.com/AllProducts/6680.html |
| 6679 | Jersey selection 55 | $19.47 | https://cnfansge.com/AllProducts/6679.html |
| 6678 | Jersey selection 54 | $19.47 | https://cnfansge.com/AllProducts/6678.html |
| 5050 | Compact utility bag | $14.72 | https://cnfansge.com/AllProducts/5050.html |
| 6626 | Jersey selection 2 | $13.38 | https://cnfansge.com/AllProducts/6626.html |
| 6172 | Hoodie selection 45 | $35.98 | https://cnfansge.com/AllProducts/6172.html |

The hoodie is explicitly excluded from the under-$30 selection because its reference exceeds the threshold. A sweatshirt is not assumed to have a hood. The two $19.47 jerseys are not treated as identical products. No material, authenticity, stock, sales, popularity or hands-on testing claims were added.

Budget arithmetic is illustrative: 25.12 + 14.72 = 39.84; adding 13.38 gives 53.22; 60.00 - 53.22 = 6.78 remaining before extra charges. This is not a shipping quote. Unit examples are mathematical: one inch is 2.54 cm; 23 inches is 58.42 cm; doubling 60 cm flat garment width gives approximately 120 cm garment circumference, not a guaranteed suitable body circumference.

## Official research, accessed 15 October 2026

- https://litbuy.com/help — official Help Center. Direct page extraction returned an application loading shell. No policy amounts, deadlines or free-service claims were inferred from it.
- https://litbuy.com/estimation — official shipping estimation route surfaced in search. Used only to establish that shipping estimates are a separate part of the workflow; no rate, divisor, minimum, transit time or route guarantee was adopted.
- https://litbuy.com/ — official search result describes warehouse combination and tracking of storage, inspection and shipment progress. No marketing coupon, storage period or inspection guarantee was repeated.
- https://m.litbuy.com/notice/2018994272731774978 — official Refund Terms result mentions basic QC before international shipment. Full policy text was not extractable. The articles intentionally do not promise return eligibility, refund amounts or deadlines; readers are directed to their current applicable terms without adding an external website link in the article.

The content mostly provides original general comparison methods. Measurement and photograph limitations are explicit. There is no universal sizing-up rule, universally acceptable centimetre tolerance, fixed hoodie weight, inferred material specification, or claim that photos prove authenticity or long-term performance.

## Competitor research, accessed 15 October 2026

- https://litbuywithqc.com/spreadsheet/hoodies — verified that a dedicated hoodie discovery category exists and combines product cards with category navigation and guidance. This supports category-specific search intent, not measured keyword volume. None of its product counts, prices, promotional discounts, fixed weights, sizing rules or quality claims were reused.
- https://litbuyfinds.io/ — verified visible budget, clothing, hoodie and QC entry points, including a budget-under-$30 topic. This supports a clearly scoped budget selection page, not a claim of search volume, ranking or conversion rate. No competitor products, counts, testimonials or sales claims were imported.

Candidate keywords are `litbuy hoodies spreadsheet`, `litbuy hoodie finds`, `litbuy finds under $30`, `budget litbuy finds`, `litbuy clothing size guide` and related measurement language. No demand metrics were invented. Each article has a different practical purpose rather than duplicating the existing broad spreadsheet, shipping or QC guides.
