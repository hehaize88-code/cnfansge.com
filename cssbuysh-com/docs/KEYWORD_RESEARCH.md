# CSSBuy SH editorial research and project memory

Reviewed: 2026-10-23. English source: `editorial-en.json`. This research concerns CSSBuy only. Other platforms must have separate research and content decisions.

## Decisions carried forward

- Domain: cssbuysh.com, as selected by the user. Do not restart domain research or propose a different domain during this implementation.
- Primary homepage query: **cssbuy spreadsheet**. The homepage should combine product discovery and a concise explanation of how to compare offers.
- Products, seller images, prices, search and other catalog capabilities must originate from cnfansge.com. No separate product database, fabricated inventory or generated product photography.
- CSSBuy SH is independent. Official CSSBuy branding does not make the site an official CSSBuy service. Order/payment support belongs on cssbuy.com.
- The supplied account destination is `https://www.cssbuy.com/index`.
- The supplied Weidian buying template is `https://www.cssbuy.com/shop/goodsDetail?type=micro&id={productId}`. Product ID means the original marketplace identifier, not the cnfansge record ID.
- Example: marketplace ID `7755101935`; its source catalog internal record is different. Never substitute an internal record number in the buying destination.
- Seller gallery images are not automatically verified warehouse QC. Do not describe image search or QC retrieval as operational until the cnfansge capability is verified and implemented.
- No invented promotion, discount, product authenticity, safety, delivery deadline, refund guarantee or live shipping quote.
- Language versions must contain translated article and FAQ content, not only translated navigation around English bodies. Keep source IDs and editorial IDs stable across translations. Language-specific titles and descriptions should be natural, not mechanically repeated keywords.

## Research method and limits

Queries reviewed included `cssbuy spreadsheet`, `cssbuy shipping cost`, `how long does cssbuy take`, `cssbuy QC`, `cssbuy 1688`, and sizing/link-guide variants. Search-result recurrence and competitor page structures identify **qualitative intent**, not measured search volume. No keyword-volume, CPC, difficulty or ranking estimates were purchased or inferred numerically.

The article collection is original practical guidance. Specific CSSBuy policy facts are brief, dated and tied to official sources. Worked figures in the shipping and fee articles are expressly hypothetical calculations, not current tariffs. Most of the prose is an original decision framework, rather than a close rewrite of an official page or a competing article.

## Official evidence register

| Source | What was verified | Editorial use |
| --- | --- | --- |
| https://m.cssbuy.com/buyforme | URL-based product selection; options and quantity; purchase and domestic delivery; warehouse inspection; later parcel/delivery stage; shipping deposit versus verified final measurements; tracking in account; 1688 quantity caution | Overall process, stages, selected options, limited shipping-account facts |
| https://m.cssbuy.com/expertbuy | Manual product-information fields; third-party seller distinction; seller-channel risk notice | Manual requests, source-listing responsibility, no universal return guarantee |
| https://m.cssbuy.com/aboutus | Listed payment methods and broad service descriptions | Payment-method FAQ, subject to live availability |
| https://m.cssbuy.com/shipforme | Consolidation, warehouse photos, vacuum packing and reinforcement services | Warehouse and packaging decisions; no unconditional savings claim |
| https://new.cssbuy.com/estimates | Calculator asks weight, dimensions, destination and commodity attributes; route-specific volume/actual rules and restrictions; displayed formula varies by line | Cost inputs and illustrative volume comparison; no specific live quote |
| https://www.cssbuy.com/shop/helpCenter?id=12 | Root agent read official browser DOM: product, China freight, international freight and service components; displayed service calculation is 6% of product plus China freight | Dated FAQ fact; evergreen article explains checking current basis and checkout |
| https://www.cssbuy.com/shop/helpCenter?id=81&refush=1 | Root agent read official browser DOM: ordinary items 90 days from In Warehouse; item extension 15 RMB/order ID/month; specified abnormal and returned parcels 30 days; parcel extension 30 RMB/month; act before expiry, possible disposal | Four short dated FAQs and deadline planning |
| https://www.cssbuy.com/shop/helpCenter?id=80&refush=1 | Root agent read official browser DOM: relevant goods/packaging evidence; original proof and merchant policy matter; transport costs may apply; merchant after-sales outcome not guaranteed | Return evidence and transaction-specific eligibility |

The modern help pages were blank in web extraction; the mobile legacy help routes returned template placeholders. They were **not** treated as if the missing body had been read. The root agent independently captured the listed modern policies in the browser. Return-process route `id=37` was not used as a citation because its content was not verified during this editorial pass.

Official service pages may contain older interface labels. Articles therefore describe tasks and decisions, not brittle button-by-button instructions. Exact route choices, deadlines, available payment methods and order-specific fees must remain grounded in the live account.

## Competitor and reference observations

| Page reviewed | Observed intent | Decision for CSSBuy SH |
| --- | --- | --- |
| https://kakobuypicklist.com/ | Spreadsheet-led homepage, categories, seller listings, estimated prices, language navigation, FAQ and clear distinction between seller images and QC references | Use the discovery-to-detail flow and language availability as structural reference; do not copy its products, images, text or QC claims |
| https://cssbuywithqc.com/ | Spreadsheet/product discovery with navigation for QC, conversion and shipping | Address the related reader questions through accurate guides; only advertise operational tools verified against cnfansge |
| https://bestcssbuyspreadsheet.com/help/ | Ordering, QC, shipping, payment and storage questions grouped around purchase stages | Include a broad FAQ set rather than repeating only registration and browsing questions |
| https://cssbuychina.net/faq | Warehouse, QC, shipping, restrictions and planning questions | Distinguish seller dispatch, buyer decisions and international transit |
| https://cssbuylinks.org/guides/ | Link types, fees, sizing, warehouse and shipping guide cluster | Give each article a distinct decision and avoid ten near-duplicate generic buying guides |
| https://cssbuy.tips/cssbuy-spreadsheet | Two-stage payment, QC and shipping wording; exact fee claims | Use the intent cluster only; source policy claims from CSSBuy and avoid copying competitor rate tables |
| https://cssbuyreps.com/ | Product spreadsheet, sizing and shipping content | Address fit and cost using measurements and worked reasoning, without universal promises |

Several observed pages reused nearly identical wording and exact fee figures across unrelated domains. Their existence is evidence of a content cluster, not confirmation that a fee or policy is correct. Competitor claims about photo counts, delivery times, exchange rates, discounts and authenticity were not carried into the editorial content.

## Keyword-to-page plan

| Page / slug | Primary intent | Secondary phrases | Distinct value |
| --- | --- | --- | --- |
| Homepage | cssbuy spreadsheet | cssbuy finds, cssbuy product links | Browse real source data, understand the independent site and begin a shortlist |
| cssbuy-spreadsheet-guide | how to use a cssbuy spreadsheet | cssbuy finds, cssbuy product links | Comparison worksheet, evidence categories and a complete-budget decision |
| how-to-buy-weidian-cssbuy | how to buy weidian cssbuy | weidian to cssbuy, cssbuy weidian | Marketplace ID, exact option and clear order instructions |
| cssbuy-qc-photos-guide | cssbuy qc photos | cssbuy quality check, warehouse photos | Identity-first inspection, useful measurement requests and photo limitations |
| cssbuy-shipping-cost | cssbuy shipping cost | cssbuy calculator, volumetric weight | Dimension example, scenario budgeting and comparable parcel quotes |
| cssbuy-shipping-time | how long does cssbuy take | cssbuy shipping time, order status | Stage-based timeline and actionable tracking questions |
| cssbuy-warehouse-consolidation | cssbuy warehouse | cssbuy storage, consolidation | Inventory decisions, storage deadlines and physically compatible parcels |
| cssbuy-returns-refunds | cssbuy returns | cssbuy refund, return policy | Evidence package, eligibility questions and separate money/movement events |
| cssbuy-payment-fees | cssbuy fees | payment methods, total cost | Itemized budget, fee basis and payment reconciliation |
| cssbuy-taobao-1688-links | cssbuy taobao / cssbuy 1688 | link converter, marketplace links | Source identifiers, quantity tiers and manual-order completeness |
| cssbuy-size-guide | cssbuy size guide | shoe sizing, Weidian sizing, Taobao clothing size | Comparable garments, defined measuring methods and fit uncertainty |

These phrases guide useful page coverage. They should not be inserted repeatedly into paragraphs or fabricated product titles. Titles, descriptions and internal links can communicate the page intent naturally.

## Content package and validation

- `editorial-en.json`: 10 article objects, 28 FAQ objects, official source registry plus project/catalog/link references.
- Each article has a unique slug, introduction, substantive sections, takeaways and source IDs.
- Article lengths: 909–1,267 words; 10,538 words total, excluding titles and descriptions. Initial scope of 1,200+ each was adjusted by root to prioritize 10 complete distinct articles with a minimum of 700 substantive words; actual output exceeds 900 each.
- `word-counts.json` records individual counts.
- `build_editorial.py` is the reproducible source assembly and validation script. It checks exact article/FAQ counts, unique slugs, minimum article length and known source IDs.
- Content deliberately avoids external image assets; these are editorial pages, while product imagery remains supplied by the cnfansge integration.
- Source `project` points to `/about/`; the implementation should map that disclosure source to the actual localized about/disclosure page if the routing differs.
- Sources that are internal project disclosures explain site behavior; they are not CSSBuy policy citations. Official policy entries use CSSBuy-controlled domains.

## Next maintenance action when revising this site

Revisit the fee, storage and return help pages before changing their short dated FAQ statements. Preserve the distinction between a normal item and an abnormal/returned parcel, and between a seller image and warehouse QC. Recheck the integration rather than upgrading a feature claim based on a competitor's interface. Update this memory with verified behavior and the date whenever a capability or policy changes.
