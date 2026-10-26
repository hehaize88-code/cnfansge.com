# USFans Buys — usfansbuys.com

Astro 7.4.2 editorial SSG with live catalog SSR in a Cloudflare Worker. Source folder: `hehaize88-code/cnfansge.com/usfansbuys-com/`. The reviewed public preview is https://usfansbuys-preview.hehaize88.chatgpt.site/.

## Build and validate

Node >=22.23.4 (Node 24 recommended), npm >=9.6.5.

```sh
npm ci
npm run build
npm run check
npm run check:production
```

Production is the default: canonical origin is `https://usfansbuys.com`, robots allow indexing, and sitemap contains 90 canonical pages. Set `PREVIEW=true` and `SITE_ORIGIN` explicitly for a separate preview. Search/filter and query-based product pages remain noindex.

## Cloudflare deployment

Worker entry is `dist/server/index.js`; all editorial HTML and static brand assets are embedded in it. No assets binding, database or background service is needed. `wrangler.jsonc` binds apex and www; www redirects to HTTPS apex. The Cloudflare account must contain the active usfansbuys.com zone.

```sh
npm run deploy
```

GitHub Actions builds and validates only this directory. If `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets are available, it also publishes from main; otherwise it records that Cloudflare deployment is pending and uploads a ready-to-deploy bundle. Never put credentials in this repository. Alternatively, Cloudflare Workers Builds can use root directory `usfansbuys-com`, build command `npm run build`, deploy command `npx wrangler deploy`.

## Source and content

Product data, images, categories, keyword search, sorting, pagination and seller galleries come from cnfansge.com. Only source HTML responses are cached for 60 seconds. There is no product database, snapshot JSON, new index or backend administration.

EN/DE/ES/FR/IT each contain 28 official-source FAQs and 10 complete articles. Product names remain as provided upstream. All article and FAQ sources, brand assets, keyword research, decisions and delivery status are recorded in `PROJECT_MEMORY.md` and `docs/`.

A verified cnfansge image-search or independent warehouse-QC interface has not yet been identified. These capabilities are explicitly unavailable; seller galleries are never labeled QC.
