# sugargoos.uk

Production source for the independent Sugargoo UK spreadsheet, finds, QC,
shipping, FAQ and evidence-led article site at `https://sugargoos.uk/`.

- Repository directory: `sugargoos-uk/`
- Cloudflare Pages project: `sugargoos-uk`
- Primary domain: `sugargoos.uk` (`www` redirects to the apex domain)
- Production branch: `main`
- Cloudflare root directory: `/sugargoos-uk`
- Build command: `npm run build`
- Build output: `dist/static`
- Languages: English, German, Spanish, French and Italian
- Catalogue destination: `https://cnfansge.com/`

The build renders 155 localized routes as extensionless static HTML, including
17 articles in each of five languages (85 article pages), plus a real
404 page, `robots.txt`, `sitemap.xml`, security headers and production redirects.
Only changes under `sugargoos-uk/*` should trigger this Cloudflare project.

Article auto-publishing for sugargoos.uk is paused by owner request on 2 October 2026.
Do not advance its editorial cursor or resume automatic writes; see `.seo/AUTO_UPDATE_PAUSED.md`.

The owner-authorized manual release on 15 October 2026 adds four fully localized
decision guides and improves search-intent matching, internal links, article
tables and GA4 interaction measurement. See `docs/seo-2026-10-15.md` for research,
keyword mapping and measurement limits. Automatic publishing remains paused.
