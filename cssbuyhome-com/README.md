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


## Live preview requirement

GitHub Pages snapshots were rejected because they limited the visible catalog and sent searches to cnfansge.com. `scripts/build-github-preview.mjs` has been removed. Do not restore that export. The deployment artifact is `dist/server/index.js`, an ES module Worker serving the Astro pages and same-origin `/api/catalog` and `/api/product` routes. All products are read on demand from cnfansge.com; the UI shows 20 items per page and supports page numbers beyond the first 60 source records. There is no product database.

Build with `npm run build`. In an environment that can reach the source, run `node scripts/check-live-source.mjs` to validate source pages 1, 4 and 10, keyword-search page 4, category pagination, price ordering, local navigation and CSSBuy product-ID mapping. The GitHub Actions workflow runs this check and uploads the complete Worker. It no longer deploys the rejected static snapshot.

The live source adapter is ready for an SSR-capable host. As of this correction, a new public runtime has not been published; the previous GitHub Pages URL still serves the old snapshot. Cloudflare connector authentication requires renewal. The formal cssbuyhome.com domain has not been bound.

The source's currently visible public catalog and product pages expose keyword search, categories, sorting and seller photos. A verified image-search API and a separately identified QC-photo feed have not been supplied or observed. These remain unavailable instead of using unrelated APIs, fake results or relabeled seller photos.
