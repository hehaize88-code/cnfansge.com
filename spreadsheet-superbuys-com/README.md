# spreadsheet-superbuys.com

Independent product-discovery and buying guides, published from this directory in the shared `hehaize88-code/cnfansge.com` repository. Keep changes scoped to this site. The catalog destination is **cnfansge.com**.

## Build and release

Requires Node 22.13 or newer. Run `npm ci`, then `npm run build` and `node --test tests/rendered-html.test.mjs`. The build produces matching `out/` and `dist/client/` static sites. Production has historically served the checked-in static files at the site root; a source-only commit does not update those files.

After validation, run `node scripts/sync-static-release.mjs`, inspect the diff and publish the complete source plus static release in one GitHub commit. Preserve files belonging to other sites in this repository. Verify the `Cloudflare Pages: spreadsheet-superbuys-com` GitHub check and then check the production `/release.json`, home page, language pages and sitemap. A successful check alone does not establish that the intended content is live.

Publication is manual and review-based. No automatic article-generation schedule is enabled.

## Languages and content

English stays at existing URLs. German, French, Spanish, Italian and Polish use `/de/`, `/fr/`, `/es/`, `/it/` and `/pl/` with the same page paths. Every language has the full article body, metadata, JSON-LD, reciprocal hreflang and internal navigation. There are 19 canonical pages and 15 guides per language.

Article sources are `app/seo-article-data.ts`, `app/new-article-data.ts` and the four core guide pages. `scripts/build-locales.mjs` converts the Next export into static documents and fails if a translated string is absent. It intentionally removes React hydration, which would otherwise overwrite translated HTML. Native links, forms and details controls work without a React runtime; `public/site.js` supplies analytics and compatibility with older `?lang=` links.

To add or edit text:

1. Update the English source and build the Next export with `node_modules/.bin/next build`.
2. Run `node scripts/build-locales.mjs --collect` to collect exact source strings in `work/translation-strings.json`.
3. Supply complete translations in `content/translations/{language}.json`. Reviewed corrections belong in `content/translation-overrides.json`; these take precedence. Never leave an English paragraph as a fallback. Translation drafts require editorial checks, especially numbers, policy limits, negations, product terminology and headings.
4. Run the complete build and validation, then sync the static release.

Builds use committed translation data and do not call an external translation service. Do not restore the old generated translation module: its previous committed contents were corrupted by truncated tool output.

## Analytics

Preserves GA4 measurement ID `G-NJEYHQ693H`. Events: `catalog_outbound_click` (product, category or catalog), `article_click`, `product_index_search`, and `language_change`. Events include page language. Free-form search terms are not sent to GA4. Key-event definitions in the Analytics account are separate and are not changed by this release.
