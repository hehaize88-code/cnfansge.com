# LitBuys Store — Cloudflare Pages

Independent LitBuy spreadsheet, product-find, QC, shipping and review guide.

## Cloudflare deployment

- Root directory: `litbuys-store`
- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`

The project exports every route as static HTML for Cloudflare Pages, including
the product detail pages, article pages, sitemap, robots file and real 404 page.
Language switching stays on the current route and preserves the complete page
content.

## Commands

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm run deploy`
