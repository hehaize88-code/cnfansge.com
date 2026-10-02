# sugargoos.store

Production source for the independent Sugargoo spreadsheet, finds, QC, shipping,
FAQ and evidence-led article site at `https://sugargoos.store/`.

- Repository directory: `sugargoos-store/`
- Cloudflare Worker: `sugargoos-store`
- Production branch: `main`
- Cloudflare root directory: `/sugargoos-store`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config dist/server/wrangler.json --name sugargoos-store`
- Server configuration: `dist/server/wrangler.json`
- Static assets: `dist/client`
- Languages: English, German, Spanish, French and Italian
- Catalog destination: `https://cnfansge.com/`

## Build and deploy

Connect the existing `sugargoos-store` Worker to this repository in Workers
Builds, with production branch `main` and root directory `/sugargoos-store`.
Run the build command above, followed by the deploy command above. Configure
build watch paths to include `sugargoos-store/*` when isolating this project
from other sites in the repository.

Deploy both the compiled server and its assets through the generated Wrangler
configuration. Publishing only `dist/client` as a Pages site does not deploy
the server-rendered application. The production Worker should run the compiled
application directly rather than forward traffic to the old preview hostname.

Run `npm ci`, `npm test`, then `npm run build` for local verification. The
Vinext build writes its server configuration to `dist/server/wrangler.json`
and static assets to `dist/client`.

## Included pages

- Homepage
- Spreadsheet and finds
- Buying guide
- QC guide
- Shipping calculator and guide
- FAQ
- Article index and six long-form SEO articles
- English, German, Spanish, French and Italian routes

## SEO behavior

The production source uses `https://sugargoos.store` for canonical URLs,
hreflang alternates, sitemap and robots. Unknown routes return a real 404.
Catalog, search and conversion links point only to `https://cnfansge.com/`.
