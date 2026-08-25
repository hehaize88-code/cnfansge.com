# Spreadsheet Hipobuys — Cloudflare Pages

Independent Hipobuy spreadsheet, QC and shipping guide.

## Project structure

- `app/` — pages, articles, translations and site data
- `public/` — brand and social-preview assets
- `tests/` — rendered HTML checks

## Cloudflare deployment

- Root directory: `spreadsheet-hipobuys-net`
- Build command: `npm run build`
- Build output directory: `out`

The site is exported as static HTML so Cloudflare Pages can publish every route directly from the `out` directory.

## Commands

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm test`

The public site keeps all product, category and search actions pointed only at the owner's main catalog. Research sources are shown as non-clickable notes so the guide does not send visitors to third-party websites.
