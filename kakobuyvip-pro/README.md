# Kakobuy VIP Pro

Independent multilingual Kakobuy shipping-calculator, route, parcel-packing,
warehouse-status, returns and QC troubleshooting guide for `kakobuyvip.pro`.
The original Spreadsheet, Finds, Guide, QC, Shipping, FAQ, Articles, products
and category modules remain available. The site uses Next.js App Router through
Vinext and runs on Cloudflare Workers.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run verify:content
npm run deploy:dry
```

## Cloudflare deployment

```bash
npm run deploy
```

The Worker name is `kakobuyvip-pro`. Connect `kakobuyvip.pro` and
`www.kakobuyvip.pro` in Cloudflare after the first deploy, then redirect `www`
to the canonical non-`www` host.

Production uses the existing GitHub integration: repository `hehaize88-code/cnfansge.com`,
branch `main`, root directory `kakobuyvip-pro`, build `npm run build`, deploy
`npx wrangler deploy`. Changes in this directory must preserve sibling sites.

## Content and measurement

`app/article-registry.ts` is the shared source for article rendering, metadata,
dates and related links. There are 18 articles in each of EN, DE, ES, FR and IT.
New fee and USA guides have complete translations in `app/content/`. The original
article URLs remain stable. The content verifier renders all 160 language pages,
checks their internal links, canonical and hreflang mappings, and verifies the
shipping-weight calculation without inventing a carrier rate.

The existing GA4 property is retained. Added events are `catalog_product_click`,
`catalog_category_click`, `catalog_open`, `catalog_search`, and
`shipping_weight_calculated`. They record language and page context, not search
terms, order references or recipient details. They are interaction events, not
purchase or revenue events. The weight calculator models the greater of actual
and volumetric weight with a user-supplied route divisor and billing increment;
it is not connected to a live freight pricing API.
