# Kakobuy VIP

Independent multilingual Kakobuy spreadsheet, QC, shipping and warehouse guide
for `kakobuyvip.org`. The site uses Next.js App Router through Vinext and runs
on Cloudflare Workers.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run deploy:dry
```

## Cloudflare deployment

```bash
npm run deploy
```

The Worker name is `kakobuyvip-org`. Connect `kakobuyvip.org` and
`www.kakobuyvip.org` in Cloudflare after the first deploy, then redirect `www`
to the canonical non-`www` host.

## October 2026 editorial and SEO update

The production source is this `kakobuyvip-org` directory. Push changes through
the repository's existing connected build; do not replace the separate Sites
snapshot or modify unrelated site directories.

- 15 article topics in EN, DE, ES, FR and IT (75 article pages, 115 total URLs).
- New QC-photo, full-cost, product-link and tracking guides have complete local
  content in `app/content/{locale}.json`. The three original guides are revised
  together in `app/content/revised-originals.json`.
- Shared registry drives article routing, dates, related links and sitemap.
- Public HTTP/www and English aliases normalize to HTTPS non-www URLs. The
  Worker sets HTML language before delivery; page metadata provides canonical
  and reciprocal language alternatives.
- The weight calculator uses a user-supplied route divisor. It is not a freight
  quote and does not assume a universal carrier billing rule.
- Existing GA4 property is retained. Events: `catalog_click`, `catalog_search`,
  `article_open`, `language_switch`, `shipping_calculate`. Search text, parcel
  inputs, order identifiers and payment data are not event parameters.

Offline checks: `node scripts/verify-seo.mjs` and `npx tsc --noEmit`. The former
checks all routes with React static rendering, metadata, links, sitemap parity
and calculator edge cases. It does not run a browser or a deployed Worker.
`npm run build` validates the production bundle.
