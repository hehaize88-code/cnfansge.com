# Sugargoo Find Desk

Independent multilingual Sugargoo spreadsheet, finds, QC, shipping and shopping
research guide for `sugargoos.shop`. The site uses Next.js App Router through
Vinext and runs on Cloudflare Workers.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run test
npm run deploy:dry
```

## Cloudflare deployment

```bash
npm run deploy
```

The Worker name is `sugargoos-shop`. The canonical host is
`https://sugargoos.shop`.
