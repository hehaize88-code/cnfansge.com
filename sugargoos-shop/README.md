# Sugargoo Find Desk

Independent multilingual Sugargoo spreadsheet, finds, QC, shipping and shopping
research guide for `sugargoos.shop`. The site uses Next.js App Router through
Vinext and runs on Cloudflare Workers.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run test
npm run deploy:dry
```

## Cloudflare deployment

```bash
npm run deploy
```

The Worker name is `sugargoos-shop`. The canonical host is
`https://sugargoos.shop`.

## Search and content release — 2026-10-15

This release is scoped to `sugargoos-shop/` and uses the existing GitHub production build integration.

- Three new guides in EN/DE/ES/FR/IT: product-link troubleshooting, fees and total budget, storage deadlines and returns.
- 16 articles per language (80 article URLs), 120 sitemap URLs in total.
- Six existing guides expanded in all languages with actionable examples, short answers and comparison tables.
- Four featured homepage articles, clearer product discovery links and readable mobile typography.
- Current item-level deadlines replace stale storage figures in the FAQ; public official sources conflict on a universal duration.
- GA4 measurement ID retained. `main_site_click`, `product_click`, `search_submit` and `article_open` measure intent. Search input and query parameters are not sent in custom event payloads.
- HTML cache version incremented so prior cached HTML cannot hide the release.

Validation: TypeScript check, production build, rendered canonical/hreflang/language and redirect checks, all-language 1,200–1,800-word content parity, and analytics event/privacy checks. No guarantee of search indexing or traffic growth is implied.

The existing automatic article-update exclusion is unchanged by this manual release.
