# Pikobuy.at preview

Astro 7.4.1 SSG interface with a read-only Cloudflare-compatible Worker. All product data and product images come from cnfansge.com at request time. No product database.

## Develop

Node 22.22+ or 24. `npm ci`, `npm run dev`. The Astro development server includes the same API adapter used by the Worker.

## Build

`npm run check && npm run build`.

Astro generates 120 static pages under `.astro-output/`. The build embeds those assets into `dist/server/index.js` with the live data adapter, so the preview is deployable as one Worker ESM bundle. No product data is embedded. `.openai/hosting.json` is the separate Sites preview identity. Cloudflare builds the same source directory with `npm run build:production`, which uses https://pikobuy.at for canonical URLs and emits the production robots.txt and sitemap.xml.

## Preview scope

Home, catalog, source-backed keyword search, source-backed sorting, 20-card pagination, product gallery, original-to-Pikobuy purchase links, official logo/favicon, 24 localized interfaces. Product names stay as supplied by the source. Image search and verified QC are explicitly pending source integration.

The default `npm run build` remains a noindex preview. Production uses Cloudflare Worker `pikobuy-at-preview`, repository branch `main`, root directory `pikobuy-at`, Node 24, build command `npm run build:production`, and deploy command `npx wrangler deploy dist/server/index.js --name pikobuy-at-preview --compatibility-date 2026-10-01`. Custom domains are managed in the Cloudflare dashboard. The production Worker redirects www.pikobuy.at to https://pikobuy.at, preserving the path and query.

Read PROJECT_MEMORY.md before continuing work. The long-term GitHub folder is `hehaize88-code/cnfansge.com/pikobuy-at/`.

## Restored editorial content

The production source includes the researched editorial content from commit f458aa28a02d4a019d820a081b140c0bb75e18c0 on preview/pikobuy-at-pages: 28 FAQs and10 individual articles in all24 advertised languages, with FAQ/Articles header and footer links and a home-page editorial section. The shared mobile compaction styles are preserved. The build now checks all409 HTML outputs for local-link integrity, navigation, canonicals, hreflang, language-complete content and structured data. Production emits360 indexable URLs in sitemap.xml; product and unavailable visual shells stay noindex.
