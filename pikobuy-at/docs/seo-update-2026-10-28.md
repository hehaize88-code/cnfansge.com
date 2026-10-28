# Pikobuy multilingual SEO update — 28 October 2026

Scope: pikobuy.at only. Preserve the existing product adapter, original marketplace ID mapping, the 24 locales, and existing article URLs. Product records remain live reads from the original source with short-lived HTTP caching; no product database or build-time mirror is introduced.

## Editorial decisions

- Distinguish the discovery homepage from the full spreadsheet directory in titles, descriptions and headings.
- Add shoe, hoodie/sweatshirt and jersey category landing pages with their own metadata, buying checks, related guides and live server-rendered products. Redirect the equivalent old category-query links to the new paths.
- Expand how-to-use-pikobuy, weidian-taobao-links, fees-budget, shipping-cost, qc-photos and order-tracking with concrete decision checklists and examples, while keeping their URLs.
- Add pikobuy-review, shipping-germany and shipping-usa. The review is based on public sources, not a test purchase or an authenticity audit. Country guides explain parcel planning and link current official import information without claiming a universal rate or delivery guarantee.
- Preserve the original publication dates for revised articles; set their review dates to 2026-10-28. New articles are published and reviewed on that date. Unchanged articles retain their earlier date.
- Translate full changed paragraphs and new articles into all advertised languages; retain the original content in unaffected paragraphs. Validate structural parity, source links, numerical facts and absence of English fallback paragraphs. Localized pages disclose that they are translations of the English editorial guide.
- Keep the upstream source links and data provenance available through a localized source label, without exposing its brand in public copy.

## Source checks

- https://www.pikobuy.com/guide — buying stages and tracking-information timing after dispatch, not a three-day delivery promise.
- https://www.pikobuy.com/shipping-cost — destination, product type, kilograms and outer dimensions in centimetres. No universal divisor or freight rate is asserted.
- https://www.pikobuy.com/protocol/user — the published 8% shipping service fee is not described as a percentage of the merchandise price; prevent double-counting if a quote already includes it.
- https://www.pikobuy.com/protocol/returns — eligible warehouse items, the 120-hour application window, seller consent, conditions and potential fees. The original-shipping wording needs an order-specific explanation; no universal free-return claim.
- https://www.pikobuy.com/protocol/shipping — distinguish photographs and visible checks from professional inspection or authentication.
- https://www.dhl.de/en/privatkunden/hilfe-kundenservice/themen/international/zoll/fragen-zu-einfuhrverzollung.html — German postal-import guidance updated for 1 July 2026. Do not reuse old blanket EUR 150 duty-exemption advice.
- https://www.bundesfinanzministerium.de/Web/DE/Themen/Zoll/Post-und-Reise/post-und-reise.html — German official postal/import information.
- https://www.help.cbp.gov/s/article/Article-1902?language=en_US and https://content.govdelivery.com/accounts/USDHSCBP/bulletins/40b3d6e — US de minimis suspension; do not publish a blanket USD 800 exemption or a universal tariff rate.
- https://www.help.cbp.gov/s/article/Article-1174 — missing-package enquiries belong first with the seller/carrier; CBP does not track ordinary purchase deliveries.

## Measurement and deployment

Production-only GA4 events: product_click, category_click, site_search (query length only), and pikobuy_buy_click. The last event measures an outbound buying intention, not a completed purchase or revenue. No additional page_view is sent.

The existing Cloudflare build used npm 10.9.2 while the earlier lockfile was incomplete for that version. Reproduced the missing esbuild 0.28.2 entries, repaired the lockfile without upgrading existing locked packages, and added a clean output step to prevent stale generated assets.

Final validation and production deployment evidence are recorded in PROJECT_MEMORY.md after publication. Search submission success is distinct from actual indexing, rankings or traffic growth.
