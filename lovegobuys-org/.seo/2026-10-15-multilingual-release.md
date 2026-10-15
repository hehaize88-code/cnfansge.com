# Multilingual recovery and SEO release — 2026-10-15

## Research and prioritization

GSC property `sc-domain:lovegobuys.org`: inspected three-month view had 11 impressions and zero clicks. Only the brand query `lovegobuys` was visible. October 8 indexing report showed 4 indexed and 50 excluded URLs, including 49 discovered but not indexed. Six September article URLs returned HTTP 404 after the hosting migration. Their source was recovered from prior source commit `78b3c8e2f0381138ef2293972913f1b53568b9fe` without republishing the former hosting environment.

GA4 property 552154230, measurement G-MBX2JGZC4R: July 16–October 13 view showed 14 active users, 17 views, 14 sessions and no Organic Search sessions. Latest inspected 28-day period showed 4 users and 7 views. Bing data was unavailable. These small samples do not establish keyword volumes or ranking stability.

| Keyword intent | Slug | Action in EN/DE/ES/FR/IT |
| --- | --- | --- |
| Taobao, 1688, Weidian links and failed import | lovegobuy-taobao-1688-weidian-links | New full guide |
| USA shipping cost and packed weight | lovegobuy-shipping-usa-cost-weight-guide | New full guide; research hypothesis, not measured keyword volume |
| QC finder and warehouse photos | lovegobuy-qc-finder-warehouse-photos | Restore English and publish four translations |
| France shipping | lovegobuy-shipping-france-weight-route-checks | Restore and translate |
| Order status | lovegobuy-order-status-warehouse-parcel | Restore and translate |
| Rehearsal shipping | lovegobuy-rehearsal-shipping-packed-weight | Restore and translate |
| Warehouse return and refund | lovegobuy-warehouse-return-refund-evidence | Restore and translate |
| Parcel tracking | lovegobuy-parcel-tracking-status-handoff | Restore and translate |
| Spreadsheet, buying, QC, shipping cost, legitimacy | Existing five slugs preserved | Improved titles, descriptions, introductions and practical checklists |

Research sources:

- https://www.lovegobuy.com/article/index?article_id=10003 — official purchasing instructions.
- https://www.lovegobuy.com/ — official search and public workflow.
- https://lovegobuy.cc/guide/how-to-use-lovegobuy/ — competitor tutorial coverage.
- https://www.jadeship.com/shipping-calculator/classic/lovegobuy — parcel and destination comparison intent.
- https://rep.tools/guides/lovegobuy-spreadsheet — original product-link research intent.
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet

No live tariffs, guaranteed delivery dates, current review scores or verified test purchases are invented. Calculation examples are hypothetical. Stale rating/count sections were removed from rendered reviews. Articles have no added FAQ sections.

## Release details

13 article topics × 5 languages = 65 article editions, plus 40 base routes = 105 sitemap URLs. Each language has the same slugs and section counts. Restored English dates remain September 23; new translations use October 15. Sitemap dates reflect the respective content revisions and include language alternates.

Added article contents navigation, topic-related links, index navigation, four homepage article cards, a localized buying overview and an article-index breadcrumb parent. Article metadata uses concise descriptions. Product listing pictures no longer interrupt instructions as if they were warehouse QC evidence.

Existing GA4 tag now receives `product_index_click`, `product_search_submit` and `article_open` events with language, source path and relevant destination/placement. The custom search event sends no search text. These are navigation signals, not verified purchases. No key events or cross-domain conversion claims were added. Later delivery and performance must be checked in GA4.

Worker HTML cache uses a release revision and excludes RSC/prefetch requests. HTTP/www canonical redirects are preserved. Deploy through the existing GitHub main-branch connection only; no Cloudflare administrative changes or replacement Site publication.

## Verification

```sh
node scripts/check-content.mjs
node scripts/check-worker-cache.mjs
npx tsc --noEmit
npm run build
```

Post-deployment: check all 105 sitemap URLs, canonical and alternate links, response languages, six restored topics, two new topics and 13 article cards per language. Assess GSC indexing and query performance after fresh crawl data accumulates; no traffic uplift is promised.
