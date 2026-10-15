# LitBuys Store

Independent LitBuy product records, spreadsheet, QC and shipping guides.

## Production

The existing hosting integration deploys `main` from `hehaize88-code/cnfansge.com`.
Changes for this project are scoped to `litbuys-store/`.

- Root directory: `litbuys-store`
- Build command: `npm run build`
- Build output directory: `out`
- Public site: `https://litbuys.store`
- Hosting project: `litbuys-store` (`https://litbuys-store.pages.dev`)

Use the established GitHub deployment path. Do not treat a successful push alone
as proof that the production site has changed: verify the public article and
language routes after deployment.

## Content and language routes

English uses `/`; German, Spanish, French and Italian use `/de/`, `/es/`, `/fr/`
and `/it/`. Every language has the same 31 pages, including all 15 full articles.
Language switching preserves the current page. Pages are exported as static HTML
with the correct document language, canonical URL, reciprocal hreflang links,
localized metadata, structured data and matching sitemap entries.

Article resolution is centralized in `app/articles.ts`. October revisions and
new multilingual articles are in `app/content-oct/`; older complete content is in
`app/article-*.ts`. Missing translations fail the build instead of falling back to
English. Keep translation section and paragraph coverage aligned.

Product images, product actions, category links and search all lead to the matched
`https://cnfansge.com` catalog destinations. Search uses the native GET endpoint
`/search.html?keywords=...&channelid=2`. Product prices are historical references
from 29 August 2026, not live offers.

## Measurement

The existing GA4 tag records `catalog_search`, `catalog_product_click` and
`catalog_category_click`, with language, page path, product ID where applicable
and entry point. Search events send query length, not raw visitor-entered text.
Navigation works even when analytics is unavailable. These events are not
purchases or evidence of downstream conversions on the main catalog.

## Build and checks

```sh
npm ci
node scripts/validate-content.cjs /tmp/litbuy-articles-expected.json
node scripts/validate-analytics.cjs
npm run build
python scripts/validate-export.py /tmp/litbuy-articles-expected.json
```

The export validator requires Python with `lxml`. It checks all 155 canonical
pages, the complete 75 article bodies, same-language internal links, all language
alternates, sitemap parity, native search fields, matched product destinations,
local images and the real noindex 404. Browser rendering should also be checked
on production after deployment.
