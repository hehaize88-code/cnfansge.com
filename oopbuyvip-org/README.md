# OOPBUY VIP

Multilingual OOPBuy spreadsheet, finds, QC, shipping and research guide for `oopbuyvip.org`.

## Cloudflare Pages deployment

- Project name: `oopbuyvip-org`
- Build command: `npm run build`
- Build output: `out`
- Root directory: `/oopbuyvip-org`

## 15 October 2026 editorial release

- 17 articles per locale (EN, DE, ES, FR, IT): three new complete guides on shipping time, shoe sizing and budget shortlists; refreshed spreadsheet, QC and shipping-calculator articles.
- Unknown product weights remain unknown. The previous values were not verified measurements. USD figures retain their historical reference date rather than being presented as live prices.
- Homepage: four recent article cards and four sample products; related sections: three relevant cards; complete directories retain every article.
- Responsive catalogue filters, article contents navigation, aligned canonical/hreflang and dated sitemap entries.
- Interaction events use the existing GA4 tag: `outbound_product_click`, `category_click`, `catalog_filter`, `search_submit`. Search terms are not sent by the custom handler. No event is automatically marked as a key event.

Validation: `npm run build && npm run audit`. The audit checks every sitemap page, all five article sets, translated section/paragraph parity, article length, internal destinations and approved outbound hosts. Deployment remains the existing GitHub main branch integration with root `oopbuyvip-org`; no DNS or hosting settings are changed by this release.
