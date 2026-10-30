# USFans multilingual SEO release — 30 October 2026

## Evidence and limits

GSC browser review: 43 impressions, 0 clicks, average position 6.5 in the selected 28-day report, all visible impressions dated 27 October. This is too little data to establish a durable CTR problem. Queries included `usfans with sizing measurements` (5 impressions, position 3), `catalogo us fans` (2, 10), `usfans qc photos` (2, 15.5), and `usfans refund` (1, 8). Query rows do not sum to the property total because some queries are hidden. Highest visible pages included sizing (7 impressions), tracking (6), refunds (6), QC (4), and Italian shipping cost (3). Mobile had 32 of 43 impressions; US and Italy had 16 and 14 respectively.

Bing keyword research, global/all languages/devices, 30 July–27 October 2026: `usfans` 43.4K, `us fans spreadsheet` 5.2K, `spreadsheet us fans` 1.3K, `usfans spreadsheet` 651, `us fans links` 219, `spreadsheet usfans` 163. These are the displayed Bing keyword-research figures for that period, not monthly Google search volumes or this site's impressions. Bing property performance was still preparing data. Both Google and Bing had successfully read the existing 90-URL sitemap.

No `usfansbuys` GA4 property was found in the accessible account. The visible cssbuysh property belongs to a different site and was not used. No invented measurement ID, cross-site tracking, historical engagement metrics or conversion claim is included in this release. GA4 setup remains outstanding.

## Delivered content

All English, German, Spanish, French and Italian editions receive the same features and complete localized content:

- Three new seven-section articles: `usfans-fees-payment-methods`, `usfans-warehouse-storage-deadlines`, `usfans-no-shipping-routes`. Each English article has 1,200–1,800 words. Other languages contain complete localized guides, with matching sections, sources and related destinations.
- Sizing, QC, tracking and returns articles gain a practical four-row decision table, clearer title/description and relevant internal links. Existing articles gain related-guide navigation.
- Three category landing pages: `/category/shoes/`, `/category/hoodies-sweaters/`, `/category/jersey/`, in every locale. These serve the original catalog source with localized purchasing guidance, not copied databases.
- Search-oriented titles across main pages; homepage retains the USFans spreadsheet keyword. Featured guides now include new/high-priority topics; article library puts new publications first.
- Storage, additional-photo and unavailable-route FAQs avoid unverified universal policy claims.

## Technical behavior

- 130 static routes; 120 indexable sitemap URLs (65 article pages). Product and unavailable image-search utility pages remain outside the sitemap and explicitly noindex.
- Server-rendered category product cards and real previous/next links. Valid catalog pagination has its own canonical and all five reciprocal hreflang URLs plus x-default; page 1 redirects to the clean base URL.
- Search, arbitrary filter/sort and malformed page URLs remain noindex. Benign UTM/click-identification parameters no longer make otherwise indexable pages noindex; their canonical strips those parameters.
- Legacy supported category query URLs redirect to their locale-specific category landing page.
- Sitemap adds reciprocal alternates and actual editorial dates. Article JSON-LD and visible dates agree; newly authored articles are dated 30 October, older unchanged article bodies retain 26 October.
- Original registration URL, source-only catalog, marketplace IDs and referral code SWD92F remain intact.

## Official fact sources

- https://www.usfans.com/beginner-guide — two payment stages, 90-day advertised storage, examples of payment options and shipping workflow.
- https://www.usfans.com/page/serviceAgreement — service scopes differ; do not generalize a commission from another service or competitor.
- https://www.usfans.com/help/HCON_STATIC_053 — estimated versus actual billing weight, possible extra payment and conditional balance credit, volumetric rules.
- https://www.usfans.com/product/1/897643733710 — purchase and shipping restrictions.
- Help pages `_071`, `_049`, `_038`, `_008` were not all readable in this review. They are references for account-specific follow-up, not a basis for inventing extension prices, universal forwarding periods, fees or buttons.
- https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading — crawlable links, individual pagination canonicals, excluding unwanted filter variants.

## Measurement after release

Compare the next complete 28 days with the prior period, separating query/page, country and device. Focus first on sizing, QC, tracking and refunds; monitor the three new topic groups and category pages for impressions before judging CTR. Measure impressions, clicks, CTR and position together. Do not claim a traffic increase from publication or successful deployment alone. When a genuine GA4 property is connected, add same-site engagement and outbound purchase-link events with the appropriate consent handling.
