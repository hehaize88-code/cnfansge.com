# spreadsheet-superbuy.net

Static Next.js export prepared for Cloudflare Pages.

## Cloudflare Pages settings

- Root directory: `spreadsheet-superbuy-net`
- Build command: `npm run build`
- Build output directory: `dist/client`
- Node.js version: `22`

The build also creates the standard `out` directory. Canonical URLs, `robots.txt` and `sitemap.xml` use `https://spreadsheet-superbuy.net`.

## Languages and editorial content

English keeps the existing root URLs. German, French, Spanish and Italian use `/de/`, `/fr/`, `/es/` and `/it/`, including every article. Each of the five languages contains 13 full guides. Language selectors preserve the current route; canonical URLs are self-referencing and hreflang links are reciprocal.

New and newly translated guides live in `content/<language>/*.md`. Each article starts with `# slug | title | description | category`; sections use `## Heading` and plain paragraphs. `scripts/prepare-content.mjs` generates the typed application's JSON inputs before every build. Original guide content and localized UI labels live in `app/content/legacy-*.json` and `ui-*.json`. `app/catalog.ts` refuses missing translations.

The build verifies all 105 exported pages, article bodies, internal links, sitemap URLs, canonical and language metadata, structured data and the existing GA4 ID. Run `node scripts/verify-export.mjs` to repeat the export checks after building.

Product, category and search destinations remain on `https://cnfansge.com`. Product references retain the original destination IDs and images. GA4 `outbound_click` events distinguish product, category, catalog and search clicks and include language and page path. Article policy statements were reviewed on 2026-10-16 against Superbuy's Shopping Agent Guide, Fee Structure, Help Center and Terms of Service, with GOV.UK used for UK import rules. They are not promises of fixed fees or processing times.
