# CSSBuy SH — cssbuysh.com

Astro 7.4.2 static editorial pages with a Worker that reads public product pages directly from cnfansge.com. No database or admin backend.

## Development

- `npm ci`
- `npm run dev`
- `npm run build`: tests, 24-language static build, Worker bundling, localized route validation.
- `npm run build:production`: canonical origin cssbuysh.com and search indexing enabled.

## Deployment

Production: `https://cssbuysh.com/`, with `www` redirecting to the apex. Reuse Cloudflare Worker `cssbuysh-preview`; the historical internal Worker name does not affect its production domain. Source: `hehaize88-code/cnfansge.com`, branch `main`, root directory `cssbuysh-com`, Node 24, build `npm run build:production`, deploy `npx wrangler deploy`, watch `cssbuysh-com/**`.

GitHub stores source; the runtime Worker must run on an SSR-capable host, not plain GitHub Pages. The workers.dev address remains noindex. Production sitemap is `/sitemap.xml` with 432 canonical URLs across 24 languages. Guide/shipping aliases canonicalize to their corresponding full articles and are excluded from the sitemap.

The output `dist/server/index.js` embeds the Astro pages and public assets. Product information is requested from cnfansge.com at runtime with brief in-memory caching. No product snapshots are committed.

## Current boundary

Catalog, keyword search, source sorting, 20-item pagination, and real product photos use the source. Public visual-search and QC APIs remain unverified and are explicitly shown as unavailable. Seller photos are never labeled QC.

Official CSSBuy logo is referenced from its CDN; official favicon is stored in public/brand.

Read PROJECT_MEMORY.md before continuing the project.
