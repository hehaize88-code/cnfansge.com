# English alignment for the DE/ES October translation

The translated assets retain all original section and paragraph counts. The following evidence qualifications were incorporated in DE/ES; align English and FR/IT with them. They do not assert that historical policy descriptions are current policy. Existing FAQ block titles were changed to descriptive headings rather than adding questions.

## Legacy articles

- `litbuy-warehouse-city-guide`, “Stored status and the storage clock”, paragraph 1: replace `LitBuy's public pages currently promote warehouse storage and describe up to 120 days, with the first 90 days free.` with `Earlier public LitBuy descriptions referred to up to 120 days of storage, with the first 90 days free.` Keep the following account-deadline, fees, disposal and item-date explanation intact.
- `litbuy-order-status-guide`, “Stored creates the parcel-planning window”, paragraph 1: replace `LitBuy's public pages currently describe up to 120 days of storage with the first 90 days free` with `Earlier public LitBuy descriptions referred to up to 120 days of storage with the first 90 days free`. Keep the item-specific account deadline controlling planning.
- `litbuy-cost-workflow-checklist`, “Understand storage and timing”, paragraph 1: replace `LitBuy's current public pages describe up to 120 days of storage with the first 90 days free.` with `Earlier public LitBuy descriptions referred to up to 120 days of storage with the first 90 days free.`
- `litbuy-cost-workflow-checklist`, “What official QC can and cannot settle”, paragraph 1: refer to `published refund terms described basic checks` rather than implying a newly verified current contract. The full list of inspection limits remains unchanged.
- `litbuy-warehouse-city-guide`, “Forwarding orders and the current address”, paragraph 1: use `LitBuy has also described a forwarding workflow` rather than an assertion that the current public site was independently verified during translation.

## Research modules

- `spreadsheet`, final paragraph: replace the ranking/system inference beginning `Google can understand...` with `A focused product directory with stable internal detail pages is easier to follow than a grid of changing outbound URLs, duplicate titles and generic redirects.` The maintenance explanation preceding it remains.
- `finds`, “AT WAREHOUSE”, paragraph 1: use `LitBuy has advertised free QC and inspection on arrival. Published refund terms described the basic warehouse check more narrowly...` Keep the complete visible-check and photo-limit explanation.
- `finds`, “BEFORE SHIPPING”, paragraph 1, use: `Published LitBuy material distinguishes warehouse time from international transit. Earlier homepage wording referred to storage of up to 120 days with the first 90 days free, while help material highlighted the 90-day free period. A separate warehouse notice described overdue handling after the free period. Because wording can change, users should rely on the dates and fee status in their current warehouse account rather than a saved screenshot.`
- `guides`, “STEP 01”, paragraph 1: describe the unexpected-second-payment comments and developer responses as `published app reviews` / `published developer responses`; do not imply fresh current review sampling.
- `guides`, “STEP 02”, paragraph 1 and `qc` intro: use `Published refund terms described...` for the documented basic inspection scope. Do not claim a newly checked current contract.
- `guides`, “STEP 03”, paragraph 2, and `shipping`, “TIMING / CLAIMS”, paragraph 1: replace the opening processing claim with `A published LitBuy shipping policy described parcel processing as generally one to three business days, excluding weekends and public holidays; check the current version.` Keep all distinctions between processing, international transit, customs, weather, capacity and local handling.
- `qc`, “ACTION”, paragraph 2: frame refund-on-return and maximum-paid-amount statements as published terms, add that the applicable current conditions must be checked; retain payment-channel timing and seller/after-sales-window limits.
- `shipping`, “TIMING / CLAIMS”, paragraph 2: retain the complete evidence packet and no-promise-for-delay guidance. End with `Published terms linked refunds to confirmed delivery failure or receipt and inspection of a returned parcel; check the current rules for the specific case.`

## FAQ research blocks

Use descriptive titles: `Distinguish free storage from additional deadlines`; `Separate a seller return, account credit and payment receipt`; `Read customer feedback with dates and context`.

Replace STORAGE paragraph 1 with:

> Earlier LitBuy homepage wording advertised up to 120 days of storage and the first 90 days free. Help material highlighted a 90-day free-storage period. A separate warehouse notice also described a maximum 120-day window and overdue handling. These statements do not mean the same thing: 90 days described the advertised free period, while later time was an overdue or disposal window rather than another block of free storage.

Replace STORAGE paragraph 2 with:

> Because policy wording can change, the warehouse date and fee status in the current account should take priority over an old guide. The published notice described that items with unpaid overdue charges could eventually be treated as abandoned. Do not plan to use the maximum period before possible disposal as normal free storage; check the deadline that applies to the item.

REFUNDS: keep both complete original paragraphs, but use published/historical descriptions of refund terms and developer responses, and explicitly ask the reader to check applicable current conditions. Do not state that the cancellation control currently behaves this way without current verification.

Replace REVIEWS paragraph 1 with:

> Public customer comments include positive and negative experiences. Positive examples describe smooth purchasing, quick warehouse arrival, useful QC photos and successful delivery. Critical examples discuss international shipping cost, volumetric weight, an additional payment after the product stage, delayed support or difficulty cancelling. These are individual experiences rather than controlled tests, but recurring themes identify useful questions before spending.

Replace REVIEWS paragraph 2 with:

> Ratings and moderation notices on Trustpilot or Apple's App Store can change. Check the current status directly on each platform instead of assuming that old notices about removed reviews, an unavailable rating or a high average remain valid. Read the text, date, developer response and parcel details in both positive and negative accounts. That combination is more informative than a star average or one promotional testimonial.

## Articles research module

The root requested a reader-facing replacement after initial translation. The DE/ES `articles` research module now has three blocks with two paragraphs each: before purchase (source ID, variant, price/date; hoodie, under-$30 and sizing reading), after purchase (order status, warehouse intake and QC; stored is not automatically ready to ship), and before dispatch (weight, shipping and USA; complete cost and workflow/review checks). The module contains no publishing advice, SEO, rankings or search-volume claims. English and FR/IT should use the same reader-navigation intent rather than translate the previous editorial-planning text.

## Validation completed

- `legacy-de-es.json`: 5 article slugs × 2 languages; each article has 6 sections. Warehouse has 15 paragraphs per language; the other four each have 16.
- `research-de-es.json`: 7 keys × 2 languages; 3 blocks and 6 paragraphs per key.
- All JSON parses successfully; all section, block and paragraph counts match the source snapshot. No English fallback or empty paragraph exists in these files.
