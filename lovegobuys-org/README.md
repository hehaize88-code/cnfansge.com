# LoveGoBuy Field Guide

Independent multilingual LoveGoBuy spreadsheet, QC, shipping and shopping
research guide for `lovegobuys.org`. The site uses Next.js App Router through
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

The Worker name is `lovegobuys-org`. The canonical host is
`https://lovegobuys.org`.
