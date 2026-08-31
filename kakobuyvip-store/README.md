# KakobuyVIP Store

Independent multilingual Kakobuy spreadsheet, finds, QC, shipping, warehouse,
returns and review site for `kakobuyvip.store`.

The `.store` edition focuses on recently added finds, current product routes
and category updates. English, German, Spanish, French and Italian use separate
crawlable URLs with reciprocal hreflang and x-default references.

## Local development

```bash
npm ci
npm run dev
```

## Cloudflare Pages

- Production branch: `main`
- Root directory: `kakobuyvip-store`
- Build command: `npm run build`
- Output directory: `out`

The site is statically exported so every guide and article has a crawlable HTML
page, canonical URL, sitemap entry, structured data and indexable robots policy.
