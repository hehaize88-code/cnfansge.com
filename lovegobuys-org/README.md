# LoveGoBuy Field Guide

Independent multilingual LoveGoBuy spreadsheet, QC, shipping and shopping
research guide for `lovegobuys.org`. The site uses Next.js App Router through
Vinext and runs on Cloudflare Workers.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
node scripts/check-content.mjs
node scripts/check-worker-cache.mjs
npx tsc --noEmit
npm run deploy:dry
```

## Cloudflare deployment

```bash
npm run deploy
```

The Worker name is `lovegobuys-org`. The canonical host is
`https://lovegobuys.org`.

## November 2026 content revision

The site now has 16 articles and 20 FAQ answers per language (EN, DE, ES, FR,
IT), with 120 localized sitemap routes. New guides cover sizing, total-budget
product selection and order-to-delivery timing. France shipping, QC discovery
and spreadsheet workflow articles include additional decision checklists.

Article counts derive from the content collection. New guides have complete
localized sections, reciprocal language links and self-canonical URLs. Product
cards retain their dated discovery snapshots; examples in guides are not live
prices, delivery promises or evidence of test purchases. Existing analytics
events and the product-index destination are preserved.
