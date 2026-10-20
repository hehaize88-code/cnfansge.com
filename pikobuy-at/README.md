# Pikobuy.at preview

Astro 7.4.1 SSG interface with a read-only Cloudflare-compatible Worker. All product data and product images come from cnfansge.com at request time. No product database.

## Develop

Node 22.22+ or 24. `npm ci`, `npm run dev`. The Astro development server includes the same API adapter used by the Worker.

## Build

`npm run check && npm run build`.

Astro generates 120 static pages under `.astro-output/`. The build embeds those assets into `dist/server/index.js` with the live data adapter, so the preview is deployable as one Worker ESM bundle. No product data is embedded. `.openai/hosting.json` is the temporary preview identity; formal Cloudflare deployment should get a separate deployment config after review.

## Preview scope

Home, catalog, source-backed keyword search, source-backed sorting, 20-card pagination, product gallery, original-to-Pikobuy purchase links, official logo/favicon, 24 localized interfaces. Product names stay as supplied by the source. Image search and verified QC are explicitly pending source integration.

No production domain or DNS changes. The preview is marked noindex.

Read PROJECT_MEMORY.md before continuing work. The long-term GitHub folder is `hehaize88-code/cnfansge.com/pikobuy-at/`.
