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

## November 9, 2026: search-led editorial update

Adds parcel-photo, shipping-time, USA shipping and UK shipping guides in EN/DE/ES/FR/IT: 20 complete guides per locale, 100 article URLs and 140 sitemap URLs. Every new English article has 1,200–1,800 words, with full localized equivalents. Official Sugargoo guidance and current government import references are linked; no fixed shipping price or delivery promise is invented.

Expands the existing spreadsheet, QC and calculator guides in all five languages, and adds app/account/address guidance. Core-page headings and descriptions now describe search tasks directly. Homepage and topic hubs link the new guides; article counts come from the registry. Mobile spacing is smaller and the contents disclosure starts closed without removing article content. Existing URL normalization, product destinations, analytics configuration and automatic-editorial exclusions are retained. The HTML cache revision advances for this release.

Validation: TypeScript, production build, article and landing-page content parity, 100 rendered article routes with canonical/hreflang/schema checks, 140 unique sitemap URLs, navigation counts, 404 handling, analytics event tests and Wrangler deployment dry-run. The managed local visual preview could not start because its workerd binary supports only 2026-05-22, while production uses 2026-09-28; production browser verification follows deployment.
