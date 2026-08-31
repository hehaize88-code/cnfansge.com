# Kakobuy VIP Pro

Independent multilingual Kakobuy shipping-calculator, route, parcel-packing,
warehouse-status, returns and QC troubleshooting guide for `kakobuyvip.pro`.
The original Spreadsheet, Finds, Guide, QC, Shipping, FAQ, Articles, products
and category modules remain available. The site uses Next.js App Router through
Vinext and runs on Cloudflare Workers.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run deploy:dry
```

## Cloudflare deployment

```bash
npm run deploy
```

The Worker name is `kakobuyvip-pro`. Connect `kakobuyvip.pro` and
`www.kakobuyvip.pro` in Cloudflare after the first deploy, then redirect `www`
to the canonical non-`www` host.
