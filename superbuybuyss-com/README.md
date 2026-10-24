# Superbuybuyss.com

Astro 7.4.2 static pages and a Cloudflare Worker for live, read-only product requests to **cnfansge.com**. This directory is the complete, isolated project for **superbuybuyss.com**.

## Runtime and deployment

- Node 24.19.0; npm 11.9.0; Wrangler 4.152.0, with a committed lockfile.
- GitHub: `hehaize88-code/cnfansge.com`, production branch `main`.
- Cloudflare Worker: `superbuybuyss-com`.
- Cloudflare Git root directory: `superbuybuyss-com`.
- Build command: `npm run build && npm run check`.
- Deploy command: `npx wrangler deploy`.
- Build watch path: `superbuybuyss-com/**`.
- Build environment: `NODE_VERSION=24.19.0`, `NPM_VERSION=11.9.0`.
- Custom domains: `superbuybuyss.com` and `www.superbuybuyss.com`; `www` redirects to the canonical root, preserving the path and query.
- No database, KV, R2, product mirror, or administration service is required.

```sh
npm ci
npm run build
npm run check
npx wrangler deploy --dry-run
# With the existing authorized Cloudflare deployment connection:
npm run deploy
```

Cloudflare Git builds handle future releases. Do not commit API tokens or other credentials. The HTML, CSS, JS and official brand files are bundled into the Worker; product records and product photographs are not included in the bundle.

## Content and product behavior

- EN, DE, ES, FR and IT: 10 complete articles and 28 FAQ entries per language.
- Product directory, keyword search, categories, ordering and pagination use the source site's actual responses. Search stays on this site.
- Product photos load directly from `cnfansge.com/uploads/`.
- Purchase URLs preserve the original marketplace URL and `partnercode=ES7pVI`. Source record IDs and marketplace product IDs are distinct.
- Independent image search and verified warehouse QC lookup remain unavailable until the source endpoints are verified. Listing photos are not presented as QC photos.

## Indexing

- `https://superbuybuyss.com/sitemap.xml`: 85 static, indexable URLs, including all five languages and 50 article pages, with language alternates and `x-default`.
- `https://superbuybuyss.com/robots.txt`: allows public pages and disallows API endpoints.
- Client-rendered product detail shells retain `noindex,follow`; they are excluded from the sitemap until server-rendered product SEO is implemented.
- Every non-canonical host, including workers.dev, returns `X-Robots-Tag: noindex, nofollow` and a blocking robots file. The previous temporary preview stays separate.

See `PROJECT_MEMORY.md`, `docs/research.md` and `docs/brand-sources.json` for decisions and source attribution.
