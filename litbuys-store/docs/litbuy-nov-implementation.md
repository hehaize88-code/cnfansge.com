# LitBuys Store — November 2026 content release

Scope: only `litbuys-store/` in the existing production repository. Publication date: 7 November 2026. Existing URLs are preserved.

## Content and discovery

- Three new topics, fully written in English, German, Spanish, French and Italian: shipping coupon eligibility, parcel tracking without updates, and returns/refunds before international release.
- Each new article has eight sections and sixteen corresponding paragraphs in each language. English body lengths are 1,340, 1,366 and 1,492 words. No language silently falls back to English.
- Five existing articles have localized title/description revisions and additional practical sections: spreadsheet link matching, QC evidence requests, actual versus volumetric weight, order-stage triage, and total-cost reconciliation.
- All five homepages have clearer product-discovery titles and introductions. The homepage and guide hubs offer direct routes by visitor task. The article hub shows 18 articles in every language.
- Contextual related links connect coupons to total cost, tracking to order status, and returns to QC. Existing product destinations and the original catalog data remain intact. The spreadsheet has category links and clearly identifies its eight historical examples as a starting point, not the full live catalog.
- Source references link to the official Help Center and, where relevant, Freight Estimator. Product/search/category actions still use the existing catalog.

## Sources and factual boundaries

Read/search checked 7 November 2026:

- https://litbuy.com/help — official public result identifies cancellation, after-sales and tracking topics. It does not establish a particular order's eligibility or exact UI controls.
- https://litbuy.com/estimation — official estimation page describes minimum/first weight units and subsequent billing. No current rate or universal divisor is reproduced.
- https://litbuy.com/pages/ and https://m.litbuy.com/ — public pages display shipping coupons, qualifying freight thresholds and promotional banners. No active code, current guaranteed discount or refund processing time is claimed.
- https://litbuy.net/ and https://www.ssfinds.com/litbuy-spreadsheet — competitor discovery pages informed product-link and budget/QC intent. No inventory counts, promises or third-party policies were copied.

The tracking guide uses clearly identified common logistics examples, not purported exact LitBuy account labels. Returns content separates seller returns, parcel after-sales, balance credits and payment settlement. Arithmetic examples are explicitly fictional. This is independent editorial guidance, not a firsthand purchase review.

## Technical changes

- Preserve all canonical paths, language-switch behavior and reciprocal EN/DE/ES/FR/IT/x-default alternates.
- Sitemap expands from 155 to 170 canonical URLs; article pages expand from 75 to 90. Publication dates remain historical on older articles; new/revised article dates change only where appropriate.
- Remove the redundant title suffix so the searchable page topic gets more room.
- Preserve `catalog_search`, `catalog_product_click`, `catalog_category_click`. Add `guide_open` and `article_next_step` for internal reading paths, excluding same-page anchors and language switching. No raw visitor search text is sent. Events do not represent purchases.
- Build-time translation checks, native navigation/privacy event checks and exported HTML validation cover all 170 canonical pages and full article bodies. Build/watch scope remains the existing Cloudflare Pages project.
