# Manual five-language update — 2026-10-15

Authorized by the owner to improve and deploy oopbuyvip.pro, including every language. This does not restart automated publishing.

## Scope and evidence

GitHub repository `hehaize88-code/cnfansge.com`, directory `oopbuyvip-pro`, existing main-to-Pages deployment only. No Cloudflare API connection or project changes. Catalog destinations remain `https://cnfansge.com`; existing GA tag and consent configuration are reused, not initialized again.

Research used the live site and public search results, including QC tools at oopbuywithqc.com/qc, guides at oopspreadsheet.com/guides and tools at oopbuy.click/tools. These observations support topic selection, not search-volume or ranking claims. No private GSC, Bing Webmaster or GA4 performance dataset was obtained. GSC Wizard required payment; Bing sign-in did not complete. No CTR uplift or traffic forecast is claimed.

Respect the site allocation in the authority file: .pro focuses on interpreting existing QC photos. Order status, extra-photo request procedures, refunds and support remain outside the new article topics.

## Published topics and query intent

All four articles have complete English, German, Spanish, French and Italian bodies with identical section, paragraph, example and checklist-table structure.

| Slug suffix | English query family | Purpose |
| --- | --- | --- |
| photo-angles | oopbuy qc photo angles; oopbuy qc photos front back side | Identify which available view supports a particular observation |
| quantity-accessories | oopbuy qc accessories; oopbuy qc quantity; included parts | Compare visible items with the selected option, without assuming hidden contents |
| prints-embroidery | oopbuy qc print placement; embroidery qc; logo alignment | Check wording, placement and visible edges separately |
| blur-compression | blurry oopbuy qc photos; qc image quality; compression artifacts | Distinguish image limitations from visible product features |

These are researched editorial keyword targets, not measured query volumes. No fabricated customer cases, QC photographs, policy guarantees or keyword-stuffed headings were added.

English prose lengths, excluding headings, summaries and tables: 1,252 / 1,247 / 1,238 / 1,261 words. Translations preserve all seven sections, fourteen paragraphs, five table rows and three takeaways per article. Examples are explicitly hypothetical.

## Other changes

- Each locale grows from 14 to 18 articles; 20 new localized URLs, 90 total article pages.
- Preserve all existing article sections and paragraphs; add two topic-specific quick checks to every older article.
- Add a deliberate related-article map connecting older pages and the four new topics.
- Clarify that figures in the older fees/returns article are historical and have not been reverified for this update. Replace its numerical promotional summary with a dated-recordkeeping description.
- Shorten article-index titles and replace internal editorial/search-intent wording with useful reading instructions in all five languages.
- Display the latest four articles on each homepage.
- Footer language links retain the current article or section, like the header.
- Add mobile table of contents, accessible semantic inspection tables and compact spacing without hiding article body content.
- Display actual article update dates; retain original publication dates on older articles.
- Add optional events through the already configured window.gtag: article_end_reached, article_related_click, article_toc_click, language_switch, catalog_click and catalog_search. Parameters include language, article slug and relevant path/section. Search terms are never sent by this code. Delivery and GA reporting require the existing tag and applicable consent; no analytics account settings were changed.
- Update sitemap to 130 canonical URLs, including all 20 new pages. Preserve redirects and product links.

## Validation

`npm run build` passes compilation, TypeScript and static export (133 generated routes including redirects/not-found variants). Static export audit verifies 130 sitemap URLs, 90 unique article titles and descriptions, 18 articles per language, four homepage article cards per language, reciprocal language alternates, self canonicals, BlogPosting/BreadcrumbList, same-page footer language links, one checklist table per new article, 280 new localized paragraphs and 1,281 preserved original paragraphs. 3,350 internal links resolve in the exported output. `git diff --check` passes.

No local preview service or browser was started in the managed container, following the Sites skill's environment rule. Public deployment verification is recorded in the task response after GitHub publication. New analytics events have not been verified in a private GA4 report.

Deployment f884b1e succeeded through the existing GitHub Pages integration. The new article URL was verified on the production custom domain. An older article-index response was still cached. Follow-up reduces shared HTML, sitemap and robots cache lifetime to five minutes (static fingerprinted assets remain immutable); this applies to newly cached responses and does not purge already cached responses. No Cloudflare API was used.
