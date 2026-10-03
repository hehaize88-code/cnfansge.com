# Manual editorial release — 3 October 2026

Scope: `usfanss-shop/` only. User-authorized manual improvement and deployment. This release does not complete or advance an SEO60 issue.

## Automation

The shared automation `6a6b6ea9479c81918d0530e21c327ad5` retains its enabled state and existing Asia/Shanghai schedule. A highest-priority exclusion stops automatic research, article changes, commits, deployments and cursor advancement for usfanss.shop only. Existing history and C01 remain unchanged. Other sites retain their existing instructions and states. Resume this site only on an explicit user request.

## Research basis and limits

- Search Console, settled 2–29 September 2026: 2 impressions, 0 clicks; insufficient query data for keyword-level CTR conclusions. The exposed page was the legacy HTTP www root. The English home was unknown in URL inspection and the existing spreadsheet article was discovered but not indexed at inspection. These observations motivate better discovery and indexing checks; they do not prove a site-wide indexing diagnosis.
- Sitemap was readable without reported parse errors. Submission does not guarantee indexing or rankings.
- GA4 report access was unavailable in the audit. The public production HTML contained measurement ID G-J9CM87EDCK, while the site's CSP blocked the Google script and collection origins. This release fixes that concrete browser-side obstruction and adds three interaction events. It does not claim verified GA4 property receipt or historical conversion results.
- Bing account data was not available during the audit. No Bing click, volume or ranking figures are inferred.
- Competitor topic research: https://usfanswithqc.com/spreadsheet, https://usfanswithqc.com/spreadsheet/hoodies, https://us-fansspreadsheet.com/guides and https://usfansspreadsheet.guide. Their visible category and guide coverage helped identify product-category and parcel-planning intents. No paid-tool search-volume or keyword-difficulty estimates were available; priorities are editorial judgments, not measured volume rankings. Competitor copy and fee claims were not reused.
- Official context: https://www.usfans.com/ and https://www.usfans.com/help, plus official product pages examined during the earlier audit. The current fetch did not expose enough text to reconfirm historical fixed photo counts, service hours, five-day return windows or ±5–10% price adjustments as universal current policy. Those statements were removed or explicitly qualified; the live item and route terms govern.
- Analytics CSP: https://developers.google.com/tag-platform/security/guides/csp, reviewed 3 October 2026. Only ordinary analytics origins were added; no advertising origins or unsafe-eval were introduced.

## Keyword and page mapping

| Page | Primary intent | Supporting terms |
| --- | --- | --- |
| `/spreadsheet` | USFans spreadsheet | USFans finds, shoes, hoodies |
| `/articles/international-shipping-cost` | USFans shipping cost | shipping calculator, parcel budget |
| `/articles/usfans-shoes-spreadsheet` | USFans shoes spreadsheet | sneakers, shoe sizing, QC, shoe-box weight |
| `/articles/usfans-hoodies-spreadsheet` | USFans hoodies spreadsheet | hoodie sizing, measurements, folded volume |
| `/articles/usfans-haul-budget` | USFans haul cost | fees, budget, payment, shipping costs |
| `/articles/usfans-shipping-time` | USFans shipping time | tracking, seller dispatch, warehouse processing |
| `/articles/usfans-volumetric-weight` | USFans volumetric weight | actual weight, chargeable weight, parcel dimensions |
| `/articles/usfans-parcel-packing` | USFans parcel consolidation | packing, remove shoe box, separate parcels |

Every route has an English, German, Spanish, French and Italian version. Existing article URLs remain stable. Six existing articles receive a topic-specific worked example and policy-claim corrections. Six new articles each have ten substantive sections. Numerical cases are expressly hypothetical; no fabricated product testing, platform fees or guaranteed delivery savings are asserted.

## Implementation and validation

- 12 distinct articles, 60 language-specific article pages, 100 canonical content URLs in the exported sitemap.
- English article bodies: 1,237–1,519 words including section headings. Localized versions retain every section and paragraph; no English fallback or truncated summary is used.
- Hand-edited localized titles, descriptions, interface text and all new article headings; numeric examples, units and important domain terms checked against the English source.
- Same-page language switching, five language alternates plus x-default, self-canonicals, Article dates and BreadcrumbList checked in exported HTML.
- Home features the six new articles; the article library retains all twelve. Each article links to three relevant guides.
- Existing twelve products, eight categories, destination URLs, images, reference prices and search action are unchanged.
- CSP now permits the existing production Google tag. `outbound_product_click`, `outbound_category_click` and `product_search` reuse it without a second tracker. Raw search terms are not collected by the added script.
- `npm run build` passed. All 100 exported pages passed metadata, internal-link, language, schema and sitemap checks. Event routing was checked without sending analytics traffic.
- Production verification must follow the GitHub-connected deployment. Check twelve entries per language, all thirty newly added URLs, sitemap content, response headers and the existing Google tag on the formal domain. Search indexing and click growth remain subsequent outcomes, not deployment acceptance claims.
