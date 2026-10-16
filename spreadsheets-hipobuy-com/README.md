# spreadsheets-hipobuy-com

Production source for https://spreadsheets-hipobuy.com/.
Only this directory is part of this site's change. Product discovery remains bound to https://cnfansge.com.

## Existing GitHub / Cloudflare Pages deployment

- Repository: hehaize88-code/cnfansge.com
- Production branch: main
- Root directory: spreadsheets-hipobuy-com
- Build command: npm run build
- Output directory: out (the build also mirrors this into dist/client for existing configurations)
- Node.js: 22.13 or newer

## Static multilingual publication

Next.js produces the English source markup. `scripts/localize.mjs` converts it to complete static HTML in English (existing root URLs), German (/de/), French (/fr/), Spanish (/es/) and Italian (/it/). Each of the 21 routes has five equivalents: 105 pages, including 13 articles per language. Language switching stays on the same page. Canonical, hreflang, metadata and Article schema are localized at build time.

The publication deliberately does not hydrate React. `public/site.js` owns the small progressive enhancements: product filters, validated main-index search, the weight illustration and analytics. This prevents client code from replacing translated HTML with English. Links, forms and language navigation remain native HTML.

GA4 uses the existing measurement ID G-LXGCJ9PL8W. `language_change` fires only for an explicit change to a different language, never initialization. `article_click` covers all locale article routes. Existing outbound handoff events remain separate from search submissions. No key-event configuration is changed by this repository.

## Content maintenance

1. Edit the English page or article sources.
2. Run `node_modules/.bin/next build`, then `node scripts/extract-copy.mjs` to refresh `content/corpus.json` and produce local pending translation lists.
3. Complete every pending ID in `content/de.json`, `fr.json`, `es.json`, and `it.json`. IDs are stable hashes of normalized source strings. Preserve every paragraph, example and fact; do not substitute summaries.
4. Run `npm test`. The build fails on untranslated corpus strings. Tests inspect all 105 static pages, reciprocal alternates, internal links, article completeness and native interactions.
5. Publish through the existing GitHub integration; verify the matching site check run and `/release.json`.

Product prices are historical references dated 2026-09-14, not live quotes. Shipping calculations are explicitly illustrative and do not assert a current HipoBuy tariff or universal route divisor. New country guides link to relevant official customs guidance. Retain the independent-site disclosure.
