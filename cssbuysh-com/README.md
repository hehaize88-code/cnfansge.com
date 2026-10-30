# CSSBuy SH — cssbuysh.com

Astro 7.4.2 static editorial pages with a Worker that reads public product pages directly from cnfansge.com. No database or admin backend.

## Development

- `npm ci`
- `npm run dev`
- `npm run build`: tests, 24-language static build, Worker bundling, localized route validation.
- `npm run build:production`: canonical origin cssbuysh.com and search indexing enabled.

## Deployment

Production: `https://cssbuysh.com/`, with `www` redirecting to the apex. Reuse Cloudflare Worker `cssbuysh-preview`; the historical internal Worker name does not affect its production domain. Source: `hehaize88-code/cnfansge.com`, branch `main`, root directory `cssbuysh-com`, Node 24, build `npm run build:production`, deploy `npx wrangler deploy`, watch `cssbuysh-com/**`.

GitHub stores source; the runtime Worker must run on an SSR-capable host, not plain GitHub Pages. The workers.dev address remains noindex. Production sitemap is `/sitemap.xml` with 552 canonical URLs across 24 languages. Each locale has 13 complete articles and two curated category pages. Guide/shipping aliases canonicalize to their corresponding full articles and are excluded from the sitemap.

The output `dist/server/index.js` embeds the Astro pages in 24 compressed locale archives and includes public assets. The runtime caches at most two decoded locale archives. Internal Astro prerender artifacts are excluded. Product information is requested from cnfansge.com at runtime with brief in-memory caching. No product snapshots are committed.

Curated category routes are `/spreadsheet/shoes/` and `/spreadsheet/hoodies-sweaters/` with the same optional locale prefixes as all pages. Page 2 and later use self-referencing canonicals. Search, alternative sorting and other category filters stay noindex. Source requests have an 8.5-second total deadline, and recently successful public responses can be reused for a short, bounded stale period. A catalog outage returns 503 with Retry-After; editorial pages remain available independently.

## Current boundary

Catalog, keyword search, source sorting, 20-item pagination, and real product photos use the source. Public visual-search and QC APIs remain unverified and are explicitly shown as unavailable. Seller photos are never labeled QC.

Official CSSBuy logo is referenced from its CDN; official favicon is stored in public/brand.

Read PROJECT_MEMORY.md before continuing the project.

GA4: property `560775323`, web stream `16203811453`, measurement ID `G-WXZK6H99JM`. All production locale pages share the same tag. Preview hosts strip analytics tags; Google signals and ad personalization signals are disabled. Property timezone is China (UTC+8), reporting currency USD.

Custom navigation events are `buy_click`, `register_click`, `article_open`, `catalog_open` and `catalog_filter`. They measure site navigation, not completed purchases or registrations on CSSBuy. The custom parameters do not contain raw search text or personal form values. Research, metric windows and content priorities are recorded in `docs/SEO_RESEARCH_2026-10-30.md`.
