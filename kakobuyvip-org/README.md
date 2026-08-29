# Kakobuy VIP

Independent multilingual Kakobuy spreadsheet, QC, shipping and warehouse guide
for `kakobuyvip.org`. The site uses Next.js App Router through Vinext and runs
on Cloudflare Workers.

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

The Worker name is `kakobuyvip-org`. Connect `kakobuyvip.org` and
`www.kakobuyvip.org` in Cloudflare after the first deploy, then redirect `www`
to the canonical non-`www` host.
