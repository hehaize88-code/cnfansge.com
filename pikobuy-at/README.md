# Pikobuy.at preview

Astro 7.4.1 SSG interface with a read-only Cloudflare-compatible Worker. All product data and product images come from cnfansge.com at request time. No product database.

## Develop

Node 22.22+ or 24. `npm ci`, `npm run dev`. The Astro development server includes the same API adapter used by the Worker.

## Build

`npm run build -- --pages` (includes content/source tests and generated-page validation).

Astro generates 408 localized pages plus a 404 page under `.astro-output/`. The Pages build copies HTML and public assets to `.pages-output/` and bundles the read-only API into `_worker.js`; normal pages are served through the Pages ASSETS binding. No product data is embedded. Keeping editorial HTML outside the Worker prevents script-size growth as translated content is added.

Current preview: https://pikobuy-at-preview.pages.dev/ . GitHub branch: `preview/pikobuy-at-pages`; root: `pikobuy-at`; build command: `npm run build -- --pages`; output: `.pages-output`; Node 24. The Pages-specific `wrangler.jsonc` belongs to this branch. The earlier Worker/Sites build is still available with `npm run build`, but it is not the active publishing target.

## Preview scope

Home, catalog, source-backed keyword search, source-backed sorting, 20-card pagination, product gallery, original-to-Pikobuy purchase links, official logo/favicon, 24 localized interfaces, 28 sourced FAQ answers and 10 original guides with full translated content. Product names stay as supplied by the source. Image search and verified QC are explicitly pending source integration.

Editorial content lives in `src/content/editorial/{locale}.json`. Its stable IDs and slugs link all locales. `npm run check` verifies complete translation structure, no English paragraph fallback, valid related links and source references, alongside the source-adapter tests. Research and policy uncertainties are documented under `docs/`.

No production domain or DNS changes. The preview is marked noindex.

Read PROJECT_MEMORY.md before continuing work. The long-term GitHub folder is `hehaize88-code/cnfansge.com/pikobuy-at/`.
