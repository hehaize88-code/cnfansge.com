# CSSBuy Home preview

Standalone Astro 7.4.2 project intended for the `cssbuyhome-com/` folder in `hehaize88-code/cnfansge.com`. The review preview is hosted separately; cssbuyhome.com DNS and the user's GitHub repository have not been changed.

- `npm install`, `npm run dev`, `npm run build` (Node >=22.23.4).
- Astro pre-renders editorial pages. A compact Worker serves static output and renders real catalog/product data on each eligible request, with a shared 60-second HTTP cache.
- `worker/source.mjs` is the sole product adapter: cnfansge.com only, no database, no generated product records, no source admin access.
- Official CSSBuy logo and favicon URLs are used without alteration. The site identifies itself as independent.
- Preview is noindex. Production deployment requires domain/origin verification and additional source interface checks; set `SITE_ORIGIN` and `SITE_INDEXABLE=true` only after those checks.
- English editorial is complete in this preview. The 24-language plan remains in config; a locale is published only when its full UI and editorial JSON exist. Language switching preserves page and query. No English fallback masquerades as a translation.
- Visual search and verified QC-photo feeds are not enabled until a real cnfansge interface is documented. Seller galleries are not labeled QC.
- Weidian purchase URLs use the original marketplace itemID, not the source content ID. Unsupported marketplace mappings retain the original listing link for pasting into CSSBuy.

See `PROJECT_MEMORY.md` and `docs/KEYWORD_RESEARCH.md` for decisions and sources.


## Temporary GitHub Pages preview

The `preview/cssbuyhome` branch exports this site with `npm exec astro build && node scripts/build-github-preview.mjs`. Source products are fetched during each build and rendered directly into HTML. No product database is created. Search and categories open the live cnfansge.com source. This is a static design preview; real-time search, image search and QC are not represented as complete. The original Worker source is retained for subsequent full deployment. The production domain is not configured.
