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

`npm run build` emits a self-contained Worker ESM at `dist/server/index.js`. `.astro-output/` and `dist/` are generated and ignored. Pure GitHub Pages cannot run the live adapter: GitHub holds source; the final hosting target must support Worker/server requests. The public review build uses Sites hosting and does not bind the user's domain.

## Source contract

The site uses `https://www.cnfansge.com` only for product data. The source currently returns60 items per page; UI pages contain20. Search and sorting go to source queries, not a local subset. Category selection applies to browsing; keyword search uses the source's global search. Source errors remain errors and never become invented products or successful empty results. Short-lived request/cache entries are not a separate database.

Purchase buttons preserve the original marketplace URL and use `https://item2.kakobuy.com/item/details` with `affcode=rf8x8`. Registration is exactly `https://item2.kakobuy.com/register`. Source record IDs and original marketplace IDs are separate.

**Known integration gaps:** no verified source image-search upload API or reference QC-photo feed was found. These pages state the limitation; seller photos are explicitly labelled as seller photos. Do not mark these capabilities complete or connect another data source without the user's direction.

## Content and languages

English uses `/`;23 other locales use language prefixes. JSON content lives in `src/data/content/`. Each published locale must contain10 complete articles,28 FAQs and the same UI keys. Language switching retains route, query parameters and section anchors. Product names/brands remain source data; translation never invents attributes.

Official help research, competitor keyword observations and current integration evidence are in `docs/`. The durable project decisions and continuation checklist are in `PROJECT_MEMORY.md`. Official brand assets are recorded in `docs/brand-assets.json`.

All review-host pages use `noindex,nofollow`; `robots.txt` disallows crawling and no preview sitemap is published. Production indexing, canonical/query handling, sitemap generation, final hosting and domain binding must be implemented and verified as the next deployment phase, after design review.
