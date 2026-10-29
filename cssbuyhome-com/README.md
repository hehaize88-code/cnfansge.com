# CSSBuy Home

Astro 7.4.2 project in `cssbuyhome-com/` of `hehaize88-code/cnfansge.com`. Production origin: https://cssbuyhome.com. Production source branch: `main`. The isolated `preview/cssbuyhome` branch retains the previous review source.

- Node 24; `npm ci`, `npm run dev`, `npm run build` for a noindex preview, or `npm run build:production` for the production origin and indexing configuration.
- Astro pre-renders 504 routes across 24 languages. Each language has twelve full articles and 28 sourced FAQs. Switching language retains the current route, query and fragment.
- The Worker reads product/catalog/search/category/sorting data only from cnfansge.com. Product navigation, search, pagination and photo viewing stay on this site. There is no product database or admin. Twenty items per UI page is pagination, not a catalog limit.
- Official CSSBuy logo and favicon are retained; the site identifies itself as independent. Weidian purchase links use the original itemID.
- Visual search and a separately verified QC-photo feed remain unavailable; seller photos are clearly labeled. Do not substitute an unrelated API or fabricate results.
- Production canonical, hreflang and x-default use cssbuyhome.com. The sitemap contains 456 editorial/catalog routes. Product utility pages, image-search placeholders and keyword results are noindex. The workers.dev host remains noindex, while www and HTTP canonical requests redirect to the HTTPS apex with path/query preserved.

## Deployment

Existing Cloudflare Worker: `cssbuyhome-preview` (internal name retained to preserve the working integration). Its GitHub production branch is configured as `main`, root `cssbuyhome-com`, build command `npm run build:production`, and deploy command `npx wrangler deploy dist/server/index.js --name cssbuyhome-preview --compatibility-date 2026-10-24`. Only `cssbuyhome-com/**` should trigger builds. `wrangler.jsonc` declares the apex and www custom domains.

The GitHub Actions workflow validates both branches, enables production indexing only for main, and runs real-source integration checks across all 24 languages. `npm run build:production` also checks all page metadata, sitemap count, preview exclusion, and canonical redirects. Do not restore the rejected GitHub Pages snapshot or copy the stale Sites checkout over this project.

See `PROJECT_MEMORY.md` for observed deployment status, `docs/I18N.md` for translation maintenance, and `docs/KEYWORD_RESEARCH.md` for the original keyword/source research. Narrow-screen browser verification remains pending because the prior test browser did not apply viewport overrides.

Production deployment verified on 2026-10-24: https://cssbuyhome.com/ is live over HTTPS; www redirects to the apex. Cloudflare build `481dcc5a-98e6-4312-8a7a-384f84c7cd2a` and GitHub Actions run `40058698105` succeeded. Public checks verified same-site search/details, localized results, 24 language options, canonical/indexing, and the 408-URL sitemap.

## Analytics

GA4 property `560553438`, web stream `16192979969`, measurement ID `G-0T1GYYQRZJ`. The shared Analytics component runs only on the production HTTPS apex and is included across all locales. Google signals and ad personalization are disabled. Preview/local hosts do not load Google tag. Keep all localized privacy notices aligned with analytics changes.
