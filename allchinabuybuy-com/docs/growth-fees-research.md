# AllChinaBuy fees article — research and validation

Research date: 2026-10-30, Asia/Shanghai.
Asset: `src/data/editorial/growth-fees.json`.
Scope: one original article, complete English/German/Spanish/French/Italian versions. No publication or changes to other project files in this subtask.

## Primary source checked

- https://www.allchinabuy.com/ — direct web read returned the official maintenance notice on 30 October 2026 (`turn5view0`). It supplies no confirmed restoration date. This is the sole external source linked in the article, and supports only the short, dated maintenance observation. It does not establish current prices, working account functions, ordering, freight availability or any individual order's outcome.
- https://m.allchinabuy.com/en/goodsdetail/ — direct retrieval returned 502 (`turn5view1`). This is a retrieval limitation, not proof that the underlying platform route is unavailable to everyone. No fee rules were taken from this failed read.
- https://m.allchinabuy.com/en/freightcompute/ — direct retrieval returned 502 (`turn5view2`). No shipping prices, fees, divisors, service allowances or route availability were inferred from it.

The article is an original editorial cost-recording method, not a paraphrase of a platform fee schedule. Previous root research identified fees/domestic-delivery/checkout-cost articles on same-topic sites as a content gap; those pages were used for topic selection only and are not sources for policy claims.

## Content boundaries

- All listed cost categories are conditional checks, not assertions that each fee is charged by AllChinaBuy.
- Distinguishes item price, seller-to-warehouse delivery, optional services, payment/conversion effects and international parcel quote.
- Distinguishes estimate, quote and unknown; records inclusions so bundled services are not counted twice.
- Distinguishes adding funds to a balance from spending the same balance. Does not recommend a payment provider, predict exchange rates or promise refund eligibility.
- No fixed platform fees, live rate table, bonus, coupon, storage term, tax threshold, guarantee or fabricated first-hand purchase.
- No copied competitor prose, invented products or images, FAQ/question-answer section, or internal SEO strategy in customer-facing content.
- The weight discussion points to the existing weight article rather than duplicating a calculator or asserting a billing divisor.

## Hypothetical arithmetic

All monetary examples are expressly fictional and use CNY throughout:

- Goods: 120 + 180 = 300.
- Domestic delivery: 10 + 15 = 25.
- Chosen optional service: 18.
- Hypothetical international freight: 160.
- Example subtotal: 300 + 25 + 18 + 160 = 503.
- If an additional applicable payment cost of 12 is confirmed and not already included: 503 + 12 = 515.
- Removing the optional service while all other assumptions remain fixed: 503 - 18 = 485.

The text explicitly says that no scenario proves a different freight price and that unquoted/excluded expenses prevent treating the subtotal as a guaranteed landed cost.

## Structure and validation

All locales use slug `allchinabuy-fees-explained`, category `costs`, 10 matched sections with 2 full paragraphs each, one source link, and dates `2026-10-30`. Full translations preserve each substantive step and the same numerical examples. There is no English-body fallback.

Body word counts (whitespace-delimited, excluding headings, title, metadata and sources):

| Locale | Words |
| --- | ---: |
| EN | 1459 |
| DE | 1278 |
| ES | 1526 |
| FR | 1559 |
| IT | 1476 |

JSON parsing, locale keys, slug parity, section/paragraph parity, date parity, official-only source hosts, related-existing-article links and arithmetic all checked. English is within 1200–1800 words.

Related article slugs: `allchinabuy-shipping-cost-guide`, `actual-weight-vs-volumetric-weight`, `allchinabuy-product-links-guide`.
