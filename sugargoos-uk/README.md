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

The build renders 85 localized routes as extensionless static HTML, plus a real
404 page, `robots.txt`, `sitemap.xml`, security headers and production redirects.
Only changes under `sugargoos-uk/*` should trigger this Cloudflare project.
