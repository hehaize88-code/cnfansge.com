# CSSBuySH SEO review — 30 October 2026

## First-party observations
The GSC Wizard connector was blocked by an expired subscription. The user explicitly approved read-only inspection through their signed-in Chrome. These observations came from the cssbuysh.com properties, not other CSSBuy domains.

- Google Search Console, 28-day selector: 0 clicks, 135 impressions, CTR 0%, average position 15.9. Available chart dates: 25–27 October 2026. This is a new and very small sample, not a full 28-day operating history.
- GSC pages: warehouse consolidation 37 impressions / position 28.8; shipping time 36 / 21.5; QC guide 24 / 16.2; Spanish payment fees 9 / 9.0; shipping cost 4 / 8.0. Page impressions may aggregate differently from property totals; do not sum page rows into a property total.
- GSC queries: cssbuy parcel decision checklist 28 / 28.3; cssbuy qc return decision checklist 25 / 19.8; cssbuy spreadsheet warehouse decision checklist 17 / 16.4; cssbuy qc 2 / 11.0. These are observed impressions, not keyword search volumes or verified conversion demand.
- Countries/devices: USA 93 impressions; mobile 100, desktop 35. Prioritize mobile usability, but do not remove or stop maintaining other locales.
- GSC sitemap: success, 432 discovered URLs; last read 28 October. Indexing report still processing. Individual homepage and warehouse-article inspections confirmed indexed, successful smartphone crawling and matching canonicals.
- Bing search performance, 30-day selector: 0 clicks and impressions. Sitemap success, 432 discovered URLs. Homepage inspection: discovered but not crawled. Live URL test: can be indexed. Discovery does not prove indexing.
- Bing keyword research, all filters, 30 July–27 October: cssbuy 23.2K impressions; cssbuy spreadsheet 354. These are Bing's period metrics, not Google monthly search volume. Excluded unrelated automatic suggestions such as best buy and CSS programming terms.
- GA4 property 560775323 / G-WXZK6H99JM, 2–29 October: 54 sessions, 54 active users, 56 page views, 192 events, 4 engaged sessions (7.41%), average engagement per session 1 second. Direct 50 sessions; AI Assistant 2; Organic Search 2. Homepage 47 landing sessions, product 5, shipping-time article 1, Finnish homepage 1. Key events zero; report did not contain buy/register click events. Data cannot establish traffic quality or article conversion rates from this sample. GA4 suggested linking the GSC property; no account integration was changed.

## Public research and factual scope

Reviewed official CSSBuy pages:
- https://www.cssbuy.com/
- https://m.cssbuy.com/buyforme
- https://www.cssbuy.com/shop/helpCenter?id=12
- https://www.cssbuy.com/shop/helpCenter?id=51
- https://new.cssbuy.com/shipforme
- https://www.cssbuy.com/estimates

Official fee page: service charge formula uses (product price + China freight) × 6%, subject to the actual order and applicable conditions. Shipping-service page describes consolidation, suitable clothing compression and up to 90 days free storage. Inspection help describes a general check. No claim of authentication or exhaustive product testing is made. Shipping route availability, rates, delivery guarantees and US tariff thresholds are deliberately not asserted without a current parcel-specific source.

Competitor content architecture reviewed:
- https://cssbuywithqc.com/ — spreadsheet and category discovery, QC and shipping entry points.
- https://cssbuywithqc.com/shipping
- https://cssbuywithqc.com/qc
- https://sheetcssbuy.com/ — product categories and buying/shipping guides.
Bing's spreadsheet keyword report additionally showed cssbuy.net/cssbuy-spreadsheet/, JadeShip, rep.tools and other directory guides. Competitor traffic, product counts and promotional claims were not treated as verified facts.

Technical guidance:
- https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable

## Release scope
- Improve all ten existing guides and add USA shipping, shoes spreadsheet and hoodie spreadsheet guides in all 24 locales. English articles 1,200–1,800 words; translations retain the complete meaning and paragraph structure.
- Add two curated, localized catalog routes, canonicalize their legacy category URLs and preserve per-page canonicals/hreflang. Other search/sort/filter variants remain noindex.
- Contextual guide recommendations and article-to-category paths; six featured homepage guides.
- Bounded total source read deadline, short transient stale cache, honest 503 catalog errors; no invented products, new database, QC feed or image-search function.
- Explicit buy_click, register_click, article_open, catalog_open and catalog_filter events. No search terms or personal form values are included in these custom events. Events are observations, not completed purchases on CSSBuy.
- GSC/Bing account settings and submission state are not modified by this source release. Updated sitemap discovery and index requests can be handled separately.

## Release validation
- `npm run build:production`: 14 tests passed; 648 pages, 24 locales, 312 article pages and 672 FAQ entries passed static and runtime validation.
- Sitemap contains 552 canonical URLs. Runtime checks cover second-batch product pagination, category redirects, per-page canonical/hreflang, search noindex, empty deep-page 404, source failures and preview analytics isolation.
- Desktop and 390px mobile layouts checked with English, German and Swedish pages.
- All 648 HTML files reconstructed byte-for-byte from the compressed locale archives. Each decoded locale is about 1 MB or less (largest about 1.1 MB); only two are retained in memory.
- Changes are restricted to `cssbuysh-com/`; deployment remains the existing GitHub main → Cloudflare Worker integration.
