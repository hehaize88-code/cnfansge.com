# Multilingual SEO release — 30 October 2026

The implementation follows the user's first-party search/analytics review and competing content research. Private analytics exports are not included in the public source tree. The priority is clearer search intent and a measurable path from informational articles to the product catalogue.

## Content and search intent

| New slug | Primary topic | Supporting intent |
| --- | --- | --- |
| allchinabuy-shoes-spreadsheet | AllChinaBuy shoes spreadsheet | product links, shoe sizes, seller images versus order QC, packaging |
| allchinabuy-fees-explained | AllChinaBuy fees | item price, Chinese domestic delivery, optional services, currency, international quote |
| allchinabuy-order-status-tracking | AllChinaBuy tracking and order status | warehouse receipt, carrier acceptance, tracking gaps, delivery evidence |

All three have full English, German, Spanish, French and Italian text with matching section and paragraph structure. English bodies contain 1,517, 1,459 and 1,564 words respectively. This adds 15 article URLs; each locale now has 13 articles.

Existing spreadsheet, shortlist and maintenance guides retain their URLs and substantive bodies, with revised titles, descriptions, direct openings and practical closing sections. Official maintenance evidence was checked on 30 October. Status attribution is limited to the official notice; no restoration date, current fee schedule or individual order outcome is invented.

## Navigation and metadata

The homepage gives a direct catalogue action and compact category navigation. Catalogue pages link to shoe, fee and tracking guides; article pages link back to the relevant catalogue and three related articles in the same language. Homepage featured articles surface these priority intents.

Titles avoid a redundant appended brand. Each page retains a self canonical, five language alternates and x-default. Article JSON-LD includes publication/modification dates and canonical URLs; breadcrumbs describe the page hierarchy. The sitemap includes 110 canonical URLs and modification dates. HTTP and www redirect to HTTPS apex with paths and query strings preserved.

## Measurement

The existing GA4 property and one default page_view are retained. Client events record catalogue searches, catalogue opens, article-to-catalogue clicks, product opens, related-guide clicks and purchase-link clicks. Parameters contain language, paths and numeric product IDs where relevant, never search text or referral query strings. Events are implemented; receiving them and configuring key events are separate GA4 checks, not assumed complete.

Compare equivalent post-deployment periods, allowing reporting lag. Review query/page CTR at similar positions and country/device segments; review article landing-page engagement and article_catalog_click / product_open / purchase_link_click in GA4. Small samples must not be described as established traffic gains.

## Validation

- 10 semantic tests pass, including full five-language article structure and analytics classification.
- Production build: 120 pages, 110 unique sitemap URLs.
- All sitemap URLs checked for response/indexability, exact canonical, language alternates, single H1, metadata, internal link resolution and JSON-LD.
- Existing server-rendered catalogue, error handling, product link partner code and preview noindex tests retained.
- Browser checked homepage and complete French article layout. The local preview cannot reach the live source; it correctly displays the existing 503 state. Live production product verification is performed after release.

No dependency or lockfile changes. No persistent product database, new backend or fabricated product data. Release is confined to allchinabuybuy-com/.
