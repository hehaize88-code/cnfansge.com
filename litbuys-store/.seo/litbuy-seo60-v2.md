# LitBuy 60-Day SEO V2 Control File

> Internal automation control only. Never render, link, index, copy, or expose this file or its instructions on the public site.

## Scope and integration

This file governs only the LitBuy site extension inside the existing enabled automation `ACBuy Superbuy USFans十六站60天`. It adds LitBuy as the seventeenth site; it does not replace or modify any existing sixteen-site rule.

- Domain/live: https://litbuys.store/
- Platform: Litbuy
- Official source of record: https://litbuy.com/
- Repository: hehaize88-code/cnfansge.com
- Branch: main
- Only writable website directory: `litbuys-store/`
- Existing main-site/product/category/search/CTA targets: https://cnfansge.com
- Schedule inherited unchanged from the parent task: every two days at 12:30, Asia/Shanghai
- Site order: after all existing sixteen sites
- Independent cursor: LB C01–C30, beginning at C01
- Per run: at most one new LitBuy article

Do not create a separate automation. Do not reset, delay, reorder, backfill, skip, or change the cursor, completion record, content order, or publication time of any existing site. A LitBuy failure must retain the current lowest incomplete LB cycle and must not block the other sixteen sites.

Before every run, read the latest main branch and confirm the exact `litbuys-store/` directory exists. Never write to the repository root, a sibling directory, or a replacement directory. On missing directory, permission failure, incompatible concurrent change, official-source failure, build failure, deployment failure, or inability to verify the production domain, do not advance LB and continue the other sites.

## Persistent cursor

Use `litbuys-store/.seo/SEO60_TRACK.md` as the non-public persistent LB progress record. If it does not exist, initialize it with C01 pending. It must never enter the static build, sitemap, robots, article hub, public links, or rendered output.

A cycle is complete only after the production domain passes every required check. If an article is committed but production verification fails, retain that same cycle and, on the next run, repair or re-verify it before writing another article. Never infer completion from a GitHub commit, build log, Cloudflare preview, or pages.dev URL.

## Immutable site baseline

Everything present before LB C01 is an immutable baseline:

- Existing visual identity, logo, typography, CSS, responsive behavior, and mobile 3–5-screen compression
- Home, Spreadsheet, Finds, Guides, QC, Shipping, FAQ, Articles, product-detail, filtering, and search modules
- Product records, categories, images, USD display, CTA text, and all outbound targets
- EN/DE/ES/FR/IT language architecture, same-page switching, and cross-page language state
- robots, sitemap, canonical, hreflang, structured data, real 404 behavior, HTTPS, and www-to-apex redirect

The following four existing articles do not count toward the LB cursor and must not be rewritten or cannibalized:

1. `litbuy-spreadsheet-guide`: spreadsheet records, product IDs, image/link matching, and price snapshots
2. `litbuy-qc-photo-checklist`: warehouse QC-photo reading and pre-shipment visual checks
3. `litbuy-shipping-weight-guide`: shipping cost, actual/volumetric/chargeable weight, first weight, and rehearsal packing
4. `litbuy-review-2026`: platform facts, public customer-review themes, and overall buyer evaluation

New LB articles must not use LitBuy spreadsheet, LitBuy finds, LitBuy product links, LitBuy QC photos, LitBuy shipping cost, LitBuy volumetric weight, LitBuy review 2026, or LitBuy customer reviews as their primary keyword or search intent. Mention them only when necessary and link to the existing page rather than reproducing its explanation.

If another LitBuy site is added later, check all LitBuy domains before publication for duplicate title, slug, primary keyword, search intent, examples, structure, and internal-link path.

## Independent C01–C30 track

C01. LitBuy Order Record Template: What to Save Before Submitting a Purchase  
C02. LitBuy Two-Stage Payment Record: Separate Product Purchase From International Parcel Payment  
C03. Preserve Color, Size, Quantity and Seller Notes Before a LitBuy Order Is Submitted  
C04. Read LitBuy Order Statuses With an Evidence Timeline Instead of Guessing the Next Step  
C05. Track Seller-to-Warehouse Movement With Order IDs, Dates and Carrier Evidence  
C06. Build a Warehouse Arrival Record for Variant, Quantity and Visible Label Matching  
C07. LitBuy Storage Planning: Track Arrival Dates and Verify Current Decision Deadlines  
C08. Consolidate or Wait: Decide Which Arrived LitBuy Orders Belong in One Parcel  
C09. Split a LitBuy Parcel by Restrictions, Urgency, Shape and Evidence Needs  
C10. Keep or Remove Original Packaging: A Product-Protection Decision Checklist  
C11. LitBuy Restricted Items: Verify Current Route Eligibility Before Parcel Submission  
C12. Compare LitBuy Shipping Lines by Restrictions, Tracking, Compensation Terms and Published Estimates  
C13. LitBuy Parcel Protection Choices: Match Packing Requests to Item Type Without Guaranteeing Outcomes  
C14. International Address Checklist for a LitBuy Parcel Submission  
C15. Build a Consistent Customs Declaration Record for Descriptions, Quantities and Values  
C16. LitBuy Taxes and Duties: Separate Platform Information From Destination-Country Rules  
C17. LitBuy Tracking Guide: Record Carrier Handoffs, Scan Dates and Delivery Evidence  
C18. LitBuy Tracking Has Not Updated: An Evidence-First Escalation Checklist  
C19. Cancel a LitBuy Order: Verify Status, Seller Progress and Current Timing Rules  
C20. Return a Warehouse Item to the Seller: Evidence, Deadlines and Seller Conditions  
C21. LitBuy Refund Timeline Record: Separate Request, Approval, Seller Return and Payment Settlement  
C22. Lost or Damaged Parcel Evidence Checklist: Orders, Packing, Tracking and Photos  
C23. Verify LitBuy Insurance and Compensation Terms Before Choosing Coverage  
C24. Write a Useful LitBuy Support Ticket With IDs, Timestamps, Evidence and a Requested Resolution  
C25. LitBuy Payment Issue Checklist: Currency, Provider Status and Transaction Evidence  
C26. Verify LitBuy Exchange Rates and Service Fees With a Dated Cost Record  
C27. LitBuy App vs Web: Compare Current Verified Features Before Choosing a Workflow  
C28. LitBuy Coupon and Promotion Verification: Eligibility, Expiry and Checkout Evidence  
C29. Common LitBuy Beginner Mistakes: A Preventive Workflow Based on Verifiable Steps  
C30. LitBuy 2026 Policy and Workflow Audit: Recheck Orders, Warehouse, After-Sales and Parcel Rules

Always select the lowest incomplete cycle. If that intent is already fully covered, record the duplicate evidence in the private run report and select the next uncovered track item. Do not manufacture a new page by retitling, translating, rearranging, or lightly rewriting existing content.

Dynamic topics such as C07, C11, C12, C16, C19–C23, and C25–C28 can be published only when current official evidence is accessible on the run date. Otherwise retain the cycle or select the next verifiable uncovered item.

## Research and factual limits

Before writing every article, re-open https://litbuy.com/ and current official pages directly relevant to that cycle: help, policy, fee, warehouse, logistics, return, refund, payment, tool, or app pages. Official pages are the factual source of record.

Do not fill missing facts from memory, old articles, sibling sites, competing agents, search-result snippets, or unverified customer posts. Fees, exchange rates, promotions, storage periods, processing times, routes, restrictions, QC, insurance or compensation, return/refund terms, payment options, tax statements, and app features are dynamic and must be checked again on the run date.

When a fact cannot be verified, narrow the claim, choose a verifiable topic, or stop the LitBuy publication. Never invent a price, percentage, timeframe, route, policy, feature, customer, order, rating, quotation, screenshot, experience, legal conclusion, or customs result. Never claim official affiliation, certification, authenticity, guaranteed quality, guaranteed delivery, or a guaranteed outcome.

Independent public sources may be used only when genuinely required and current, identifiable, directly accessible, and methodologically relevant. Do not create another broad LitBuy review article or compete with `litbuy-review-2026`.

## Article and language requirements

- Visible English main-body length: strictly 1,200–1,800 words; target 1,400–1,650
- One page, one primary search intent
- Natural human editorial reasoning with concrete records, timelines, field tables, checklists, evidence templates, comparisons, or decision conditions appropriate to the topic
- No keyword stuffing, generic AI filler, fake first-person experience, recycled introduction, repeated H2/FAQ/conclusion template, or copied source wording
- Unique title, meta description, H1, semantic slug, primary keyword, and long-tail set
- Accurate publication/update date and self-referencing canonical
- Open Graph, Article or BlogPosting, and BreadcrumbList matching visible content
- Natural internal links and a discoverable Articles entry
- Sitemap entry only for the final canonical production URL

Preserve EN/DE/ES/FR/IT. Every new article must retain the same sections, paragraphs, lists, tables, FAQ, images, information density, and internal links in all five languages. DE/ES/FR/IT must be complete natural translations, not abbreviated versions. Language switching must remain on the same article and keep state across navigation. HTML lang, canonical, hreflang reciprocity plus x-default, Open Graph, Article/BlogPosting, and BreadcrumbList must match the current language content and URL.

Images are optional. Add one to three only when they materially improve evidence or process comprehension and their rights are clear. Host and compress assets locally, include accurate alt, width/height, visible caption, and source; use lazy loading outside the hero. Never use hotlinks, private orders, addresses, payments, tracking numbers, chats, avatars, customer-private images, or unclear copyrighted assets.

## Allowed changes

Only add the current article and the minimum required article card, route, related internal link, sitemap/structured-data entry, asset, and private progress record inside `litbuys-store/`.

Do not redesign, remove, shorten, overwrite, reorder, or otherwise change any old content, article, home/standalone-page module, navigation, language, product, category, filter, search, image, USD display, CTA, target URL, CSS, font, responsive rule, canonical/hreflang setup, robots behavior, or real 404 behavior.

All existing product, category, search, and CTA routes must keep their approved https://cnfansge.com targets. Do not show cnfans, cnf, the raw main-site domain, chat transcripts, prompts, research process, automation instructions, internal reports, or C-cycle labels on the public site.

Before editing, refresh main and inspect current articles, titles, slugs, H1s, primary intents, Articles entry, sitemap, internal links, recent commits, and the immutable baseline. Commit only confirmed `litbuys-store/` files for this cycle. Preserve concurrent changes. Never force-push. If the build or deployment requires a cross-directory change, stop LitBuy and retain the cycle.

## Validation, production gate, and reporting

Before publication validate:

- Exact visible English word count
- Complete equal-information EN/DE/ES/FR/IT content
- Factual support and current source dates
- Duplicate/cannibalization check
- Unique metadata, H1, slug, and target query
- Internal links and Articles discoverability
- Sitemap and robots
- Canonical, hreflang plus x-default, Open Graph, Article/BlogPosting, and BreadcrumbList
- Image rights, size, alt, dimensions, captions, and loading behavior
- Successful production build
- Real random-path 404
- Mobile layout with no horizontal overflow
- Zero reduction or change to baseline content, modules, languages, products, categories, search, CTAs, images, layout, and link targets

After pushing main and allowing the existing Cloudflare Pages deployment to run, verify on https://litbuys.store/:

- New article and all five language states
- Language switching on the same article
- Articles entry and home article card when that is the existing architecture
- Sitemap and robots
- All four baseline articles
- Spreadsheet, Finds, Guides, QC, Shipping, FAQ
- At least one product detail
- Product/category/search/CTA destinations
- CSS/JS and structured data
- Canonical and hreflang
- HTTP status, real 404, mobile rendering
- HTTP-to-HTTPS and full-path 301 from https://www.litbuys.store/ to the apex domain

GitHub files, commits, successful builds, Cloudflare logs, previews, or pages.dev URLs do not replace production-domain verification. Advance LB only when every production check passes with no regression.

Each run report must include: LB cycle, title, production URL, exact English word count, primary/long-tail keyword, search intent, same-site and cross-LitBuy duplicate findings, official and supplemental sources with check date, images, changed files, commit SHA, deployment and production results, and baseline confirmation that old content, five languages, modules, layout, products, categories, search, CTAs, and link targets did not change.
