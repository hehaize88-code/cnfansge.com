# sugargoos.store

Production source for the independent Sugargoo spreadsheet, finds, QC, shipping,
FAQ and evidence-led article site at `https://sugargoos.store/`.

- Repository directory: `sugargoos-store/`
- Cloudflare Pages project: `sugargoos-store`
- Production branch: `main`
- Cloudflare root directory: `/sugargoos-store`
- Build command: `npm run build`
- Build output: `dist/client`
- Languages: English, German, Spanish, French and Italian
- Catalog destination: `https://cnfansge.com/`

## Build and deploy

The production site is connected to Cloudflare Pages from this repository. Only
changes under `sugargoos-store/*` trigger this Pages project.

Run `npm ci`, `npm test`, then `npm run build` for local verification. The
Vinext build writes its server configuration to `dist/server/wrangler.json`
and static assets to `dist/client`.

## Included pages

- Homepage
- Spreadsheet and finds
- Buying guide
- QC guide
- Shipping calculator and guide
- FAQ
- Article index and six long-form SEO articles
- English, German, Spanish, French and Italian routes

## SEO behavior

The production source uses `https://sugargoos.store` for canonical URLs,
hreflang alternates, sitemap and robots. Unknown routes return a real 404.
Catalog, search and conversion links point only to `https://cnfansge.com/`.
