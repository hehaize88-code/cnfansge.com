# CSSBuy SH — cssbuysh.com

Astro 7.4.2 static editorial pages with a Worker that reads public product pages directly from cnfansge.com. No database or admin backend.

## Development

- `npm ci`
- `npm run dev`
- `npm run build`: tests, 24-language static build, Worker bundling, localized route validation.
- `npm run build:production`: canonical origin cssbuysh.com and search indexing enabled.

## Deployment

Preview: Cloudflare Worker `cssbuysh-preview`, built from GitHub branch `preview/cssbuysh`. The earlier Sites URL is blocked for the user. Production destination after user review: `hehaize88-code/cnfansge.com/cssbuysh-com/`. Domain DNS and production deployment have not been changed. GitHub stores source; the runtime Worker must run on an SSR-capable host, not plain GitHub Pages.

The output `dist/server/index.js` embeds the Astro pages and public assets. Product information is requested from cnfansge.com at runtime with brief in-memory caching. No product snapshots are committed.

## Current boundary

Catalog, keyword search, source sorting, 20-item pagination, and real product photos use the source. Public visual-search and QC APIs remain unverified and are explicitly shown as unavailable. Seller photos are never labeled QC.

Official CSSBuy logo is referenced from its CDN; official favicon is stored in public/brand.

Read PROJECT_MEMORY.md before continuing the project.
