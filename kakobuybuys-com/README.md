# Kakobuy Buys

Independent product discovery and buying guides for **kakobuybuys.com**. This folder is the complete single-domain project and belongs at `kakobuybuys-com/` in `hehaize88-code/cnfansge.com`.

## Runtime

- Astro **7.4.2**, static generation for editorial and translated pages.
- A small Cloudflare-compatible Worker reads the existing public `cnfansge.com` catalog, search, sorting and detail pages. It enriches catalog/detail HTML at request time and exposes same-origin JSON endpoints for retries and development.
- Product images continue to use the source site's actual `/uploads/` image URLs. No product database, admin panel, independent search index or merchandise fixtures.
- Node **22.23.4+**; development and builds were run with Node24.19.0 and npm11.9.0.

```sh
npm ci
npm run dev
npm run build
npm run check
```

`npm run build` emits a self-contained Worker ESM at `dist/server/index.js`. `.astro-output/` and `dist/` are generated and ignored. Pure GitHub Pages cannot run the live adapter: GitHub holds source; the final hosting target must support Worker/server requests.

Production domain: **https://kakobuybuys.com/**. Temporary preview: **https://kakobuybuys-preview.hehaize88.workers.dev/**. The earlier Sites URL was blocked for the user at its hosting security entry point. The Worker runs in the user's Cloudflare account; production and preview indexing rules are separated by hostname.

The V2 template uses a fixed desktop navigation rail, a compact search-first introduction, an 11-category sidebar and eight live product cards on the homepage. Mobile uses seven visible navigation links and two product columns. Editorial pages use a compact article list and chapter navigation. Deployment and responsive checks are recorded in `docs/redesign-qa.json`; screenshots are `docs/redesign-preview.jpg`, `docs/redesign-mobile.jpg` and `docs/redesign-article-mobile.jpg`.

Cloudflare Worker: `kakobuybuys-preview`; GitHub production branch: `main`; root: `kakobuybuys-com`; build: `npm run build && npm run check`; deploy: `npx wrangler deploy`; `NODE_VERSION=24.19.0`. `wrangler.jsonc` deploys the already bundled Worker, with no databases or bindings. Watch paths include `kakobuybuys-com/**` and exclude its `docs/**`, `PROJECT_MEMORY.md` and `README.md`. Other branches' automatic previews are disabled.

## Source contract

The site uses `https://www.cnfansge.com` only for product data. The source currently returns 60 items per page; UI pages contain 20. Search and sorting go to source queries, not a local subset. Category selection applies to browsing; keyword search uses the source's global search. Source errors remain errors and never become invented products or successful empty results. Short-lived request/cache entries are not a separate database.

Purchase buttons preserve the original marketplace URL and use `https://item2.kakobuy.com/item/details` with `affcode=rf8x8`. Registration is exactly `https://item2.kakobuy.com/register`. Source record IDs and original marketplace IDs are separate.

**Known integration gaps:** no verified source image-search upload API or reference QC-photo feed was found. These pages state the limitation; seller photos are explicitly labelled as seller photos. Do not mark these capabilities complete or connect another data source without the user's direction.

## Content and languages

English uses `/`;23 other locales use language prefixes. JSON content lives in `src/data/content/`. Each published locale must contain 13 complete articles,28 FAQs and the same UI keys. Language switching retains route, query parameters and section anchors. Product names/brands remain source data; translation never invents attributes.

Official help research, competitor keyword observations and current integration evidence are in `docs/`. The durable project decisions and continuation checklist are in `PROJECT_MEMORY.md`. Official brand assets are recorded in `docs/brand-assets.json`.

Production content pages are indexable. `/sitemap.xml` lists 24 language sitemaps containing 528 canonical content URLs and reciprocal hreflang alternatives. Product parameter pages, search filters, pagination and the visual-search tool use `noindex,follow` and are excluded from sitemaps. The www host and HTTP redirect to `https://kakobuybuys.com`, preserving path and query. Preview hosts remain `noindex,nofollow`, disallow crawling and do not serve sitemaps. Run `npm run check` after building: it includes production/preview policy, redirect and sitemap validation. Domain binding and latest live verification are recorded in `PROJECT_MEMORY.md`.

Run `node scripts/check-source.mjs` only when changing the source adapter or investigating a live-feed issue; it performs real public-source reads. The default check is local and deterministic.

## SEO content release (2026-10-30)

All 24 languages include three additional guides: chargeable-weight calculation, a pre-order credibility checklist and shipping stages/tracking. Five existing guides receive concise search-intent answers and metadata improvements; refunds, payments and shipping costs also gain practical comparison tables. Existing article paths and original section anchors are preserved.

The weight calculator is a browser-only tool using user-entered dimensions, mass, divisor and billing increment. Its sample inputs are hypothetical, not official rates. It neither returns live prices nor submits parcels. `npm run check` validates its arithmetic, 312 article versions, 576 pages and 528 sitemap URLs.

GA4 retains the existing production-only measurement ID. Additional intent events are `affiliate_click` (register/product), `guide_navigation`, `catalog_search` and `shipping_calculation`. They do not represent purchases, carry free-text searches or contain order/account data. GA4 key-event configuration is not changed by this release.
