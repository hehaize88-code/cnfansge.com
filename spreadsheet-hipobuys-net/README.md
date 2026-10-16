# Spreadsheet Hipobuys

Independent Hipobuy product directory and buyer guides at https://spreadsheet-hipobuys.net.

## Existing deployment

GitHub repository: `hehaize88-code/cnfansge.com`, production branch `main`.
Cloudflare Pages project root: `spreadsheet-hipobuys-net`.
Build command: `npm run build`; output directory: `out`.
Keep the existing GitHub-triggered deployment. Do not upload the tracked legacy root HTML as the build output.

## Content and languages

- English URLs remain unchanged. German, Spanish, French and Italian use `/de/`, `/es/`, `/fr/`, `/it/`.
- 7 primary routes and 13 articles per language: 100 indexable HTML pages, including 65 complete article versions.
- `app/article-data.ts` and `app/seo-articles-2026.ts` retain the existing articles.
- `app/article-improvements.ts` contains specific additions and related-guide mappings.
- `app/october-articles.ts` adds size charts, sneaker selection and hoodie selection.
- `content/corpus.json` and the four language dictionaries supply complete static translations.
- `scripts/localize.mjs` creates reciprocal hreflang, self canonicals, localized metadata/JSON-LD, same-article language links and the full sitemap. Missing translations fail the build.
- The final HTML has no React hydration; native interactions and GA4 events live in `public/site.js` so English cannot replace translated content after load.
- The shipping calculator compares actual and volumetric weight only. It does not fetch rates, guarantee route eligibility, calculate taxes or apply carrier rounding.

## Editing

1. `npm ci`
2. Change source content.
3. `npm run build:source`
4. `node scripts/extract-copy.mjs` generates pending strings; update each language dictionary.
5. `npm test` verifies all routes, article lengths, language links, sitemap, catalog search and calculator arithmetic.
6. Commit only this project’s changes and push to the existing production branch after validation.

`translate-content.py` is an optional offline drafting aid using Argos Translate models from the official model index. Production does not download models or call a translation service. Review terminology, metadata, numbers and fit/shipping guidance before publishing.

## Measurement

Existing GA4 property `G-D14KS48G0Q` retained. Events include `outbound_product_click`, `article_click`, `spreadsheet_search`, `language_change`, `category_filter` and `shipping_weight_calculation` with page language. No search terms or form contents are sent by the custom search event.

October 16 decisions used verified GSC data for Sep 16–Oct 13: the shipping route had 515 impressions and 5 clicks; 9 existing articles were discovered but not indexed. Bing and GA4 reports were unavailable in this session, so no performance claims were based on them.
