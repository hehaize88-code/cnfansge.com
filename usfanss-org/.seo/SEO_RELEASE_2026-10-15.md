# USFanss SEO release — 15 October 2026

## Evidence and limits

Current GSC, Bing Webmaster and GA4 account metrics were not retrieved: GSC Wizard returned a subscription/trial error, and the authorized browser recovered but all three services require sign-in. Historical September GSC figures in the October 2 note are not current metrics. No search volume or traffic increase is claimed.

Topic prioritization uses the existing inventory and public competitor coverage reviewed during this task: us-fansspreadsheet.com/guides, usfanswithqc.com/qc and usfanswithqc.com/shipping. Primary Google guidance reviewed covers title links and localized versions. USFans service pages did not expose enough current text to substantiate new fixed fees, storage windows, photo counts or return deadlines. Updated guides direct readers to current order and route notices; numerical examples are hypothetical.

## Changes

Four full articles in EN/DE/ES/FR/IT add 20 URLs. Each language now has 18 articles, and the site has 130 canonical content URLs.

| Article | Search intent |
| --- | --- |
| how-to-order-on-usfans | first order, warehouse QC, parcel workflow |
| usfans-fees-total-budget | fees, total cost, domestic/international shipping budget |
| usfans-rehearsal-shipping-consolidation | rehearsal shipping, consolidation, volumetric weight |
| usfans-size-guide-measurements | size guide, clothing measurements, shoe sizing |

Spreadsheet, shipping-cost, QC-photo and review guides are refreshed in all five languages, retaining publication dates and setting substantive modification dates to October 15. Outdated universal service claims and old ratings/allegations are removed.

Localized article search, topic filters, related links, paragraph spacing and collapsible contents improve navigation. Homepage displays the newest four guides. The shipping calculator now accepts a route-specific divisor and rejects invalid numbers; results are illustrative weights, not quotes.

Production export explicitly enables indexing and preserves canonicals, reciprocal five-language alternates plus x-default, HTML lang, Article/Breadcrumb markup and sitemap alignment. The existing gtag function, when present, receives guide_open, catalog_outbound and product_search events without adding a duplicate script. Pre-deploy live HTML contained G-BF0K245D1T; GA4 event receipt is not verified without account access.

The original 50 product references, images, prices and outbound destinations remain byte-identical. Product data is separated from editorial modules to avoid loading article prose in the catalog client bundle.

## Validation

Production build succeeded: 136 framework routes including 130 content pages. Export audit passed for one H1, index/follow, descriptions, exact canonical, reciprocal alternates/x-default, HTML lang, JSON-LD, internal URLs and contents anchors on all content pages. Zero broken internal links. All 20 new translations preserve section counts and related URLs without English fallback bodies. Nine weight-calculation checks and git diff --check passed. The existing CSS align-items:end autoprefixer warning is nonblocking.

Publication uses the existing GitHub deployment path. No Cloudflare account connection or setting changes are included. Live verification and analytics sign-in follow-up are reported in the conversation.
