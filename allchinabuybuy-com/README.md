# AllChinaBuyBuy

Production: https://allchinabuybuy.com

Astro 7.4.2 SSG with a read-only Cloudflare Worker gateway to https://www.cnfansge.com. Source is isolated in this directory; no database, CMS, seeded products or persistent product storage.

## Build and deploy

Use Node 24 and npm 10.9.2 (the Cloudflare build image version). Regenerate the lockfile with npm 10.9.2; npm 11 resolves optional peer metadata differently. Run `npm ci`, then `npm run build:production`. The production build generates 105 pages and `dist/server/index.js`, then verifies all 95 sitemap URLs, metadata, logo references, preview noindex behavior and the www redirect.

Cloudflare Worker: `allchinabuybuy-preview` (the existing reviewed Worker is retained). Configure Workers Builds with repository `hehaize88-code/cnfansge.com`, production branch `main`, root directory `allchinabuybuy-com`, build command `npm run build:production`, deploy command `npx wrangler deploy`, and included build-watch path `allchinabuybuy-com/**`.

`wrangler.jsonc` binds the root and www domains. The www host redirects with HTTP 308 to the root domain while preserving paths and queries. The workers.dev address remains accessible with noindex and robots Disallow.

Editorial pages are indexable on the production domain; `/sitemap.xml` contains 95 canonical URLs across English, German, Spanish, French and Italian. `/robots.txt` lists the sitemap. API responses, parameterized product pages and unavailable image search remain noindex.

## Live data

- `/api/catalog`: source categories, keyword search, sorting and pagination; 60 source rows per fetch, 20 cards per UI page.
- `/api/product?id=6681`: source record detail and seller images. Source record IDs differ from marketplace product IDs.
- Purchase links retain the original seller URL and `partnercode=wbVgOT`.
- USD estimates use the source conversion value. The Worker has only a 60-second in-memory response cache.
- Image-search API and independent QC feed remain unverified; their availability is reported honestly. Seller photos are not labeled as QC evidence.

## Content and branding

10 complete original articles and 28 FAQs in all five languages. Research sources are recorded in `docs/`. The official platform showed maintenance on 2026-10-24, so current fees, registration benefits, storage limits and service timelines are not invented.

Header, footer and favicon use the user's original transparent `allchinabuy.png`, stored unchanged as `public/brand/allchinabuy-user-logo.png`.

Read `PROJECT_MEMORY.md` before continuing development. Never copy the preview hosting identity, dependencies or credentials into this repository.
