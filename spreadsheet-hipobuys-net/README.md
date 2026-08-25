# Spreadsheet Hipobuys — Cloudflare Workers

Independent Hipobuy spreadsheet, QC and shipping guide.

## Project structure

- `app/` — pages, articles, translations and site data
- `public/` — brand and social-preview assets
- `worker/` — production worker entry point
- `tests/` — rendered HTML checks

## Cloudflare deployment

- Root directory: `spreadsheet-hipobuys-net`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Worker name: `spreadsheet-hipobuys-net`

Cloudflare currently recommends Vinext on Workers for Next.js applications. The Cloudflare Vite plugin builds the Worker and static assets together, and Wrangler automatically uses the generated deployment configuration.

## Commands

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm test`
- `npm run deploy`

The public site keeps all product, category and search actions pointed only at the owner's main catalog. Research sources are shown as non-clickable notes so the guide does not send visitors to third-party websites.
