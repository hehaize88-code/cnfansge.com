# USFans Buys — usfansbuys.com

Astro 7.4.2 editorial SSG with live catalog SSR in a Cloudflare Worker. Source folder: `hehaize88-code/cnfansge.com/usfansbuys-com/`. Production is live at https://usfansbuys.com/. The reviewed public preview remains https://usfansbuys-preview.hehaize88.chatgpt.site/ with noindex.

## Build and validate

Verified deployment toolchain: Node 24.22.1 and npm 11.9.0. `packageManager` pins npm 11.9.0; Cloudflare build variable `NODE_VERSION=24` selects Node 24.

```sh
npm ci
npm run build
npm run check
npm run check:production
```

Production is the default: canonical origin is `https://usfansbuys.com`, robots allow indexing, and sitemap contains 120 canonical pages. Set `PREVIEW=true` and `SITE_ORIGIN` explicitly for a separate preview. Search/filter and query-based product pages remain noindex.

## Cloudflare deployment

Worker entry is `dist/server/index.js`; all editorial HTML and static brand assets are embedded in it. No assets binding, database or background service is needed. `wrangler.jsonc` binds apex and www; www redirects to HTTPS apex. The Cloudflare account must contain the active usfansbuys.com zone.

```sh
npm run deploy
```

Cloudflare Workers Builds is connected to this repository's `main` branch and publishes automatically. Settings: root directory `usfansbuys-com`, build command `npm run build && npm run check:production`, deploy command `npx wrangler deploy`, include watch path `usfansbuys-com/**`, exclude `usfansbuys-com/*.md`. Preview builds are disabled. Apex and www are bound; workers.dev URLs are disabled.

GitHub Actions separately builds and validates this directory. Its optional credential-based deploy step is skipped when repository secrets are absent; Cloudflare's native Git integration already handles production deployment. Do not add a second deployment path unless intentionally replacing that integration. Never put credentials in this repository.

## Source and content

Product data, images, categories, keyword search, sorting, pagination and seller galleries come from cnfansge.com. Only source HTML responses are cached for 60 seconds. There is no product database, snapshot JSON, new index or backend administration.

EN/DE/ES/FR/IT each contain 28 official-source FAQs and 13 complete articles. Product names remain as provided upstream. All article and FAQ sources, brand assets, keyword research, decisions and delivery status are recorded in `PROJECT_MEMORY.md` and `docs/`.

A verified cnfansge image-search or independent warehouse-QC interface has not yet been identified. These capabilities are explicitly unavailable; seller galleries are never labeled QC.

SEO release checks: `npm run check:seo` verifies locale coverage, new-article completeness, internal links, comparison tables and pagination. `check:production` runs those checks before production assertions. See `docs/seo-release-2026-10-30.md` for research limits and release scope.
