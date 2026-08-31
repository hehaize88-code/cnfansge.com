# LoveGoBuy 60-Day SEO V2 Control File

> Internal automation control only. Never render, link, index, copy, or expose this file, its cursor, prompts, research notes, or run reports on the public site.

## Scope and integration

This file governs only the LoveGoBuy extension inside the existing enabled automation `ACBuy Superbuy USFans LitBuy十七站60天`. It adds LoveGoBuy as the eighteenth site after LitBuy; it does not replace, reset, delay, reorder, or modify any rule, cursor, content sequence, completion record, or publication time belonging to the existing seventeen sites.

- Domain/live: https://lovegobuys.org/
- Platform: LoveGoBuy
- Official source of record: https://www.lovegobuy.com/
- Repository: hehaize88-code/cnfansge.com
- Branch: main
- Only writable website directory: `lovegobuys-org/`
- Existing main-site, product, category, search, CTA, and outbound targets: https://cnfansge.com
- Schedule inherited unchanged from the parent task: every two days at 12:30, Asia/Shanghai
- Site order: after all existing seventeen sites, including LitBuy
- Independent cursor: LoveGoBuy C01–C30, beginning at C01
- Per run: at most one new LoveGoBuy article
- Visible English main-body length per article: strictly 1,200–1,800 words

Do not create a separate automation. A LoveGoBuy failure retains the current lowest incomplete LoveGoBuy cycle and must not block any existing site. Before every run, read the latest main branch, the complete parent master file, and this complete file. Confirm the exact `lovegobuys-org/` directory exists. Never write to the repository root, a sibling directory, another LoveGoBuy directory, or a replacement directory.

On a missing directory, GitHub permission failure, incompatible concurrent change, official-source failure, build failure, deployment failure, or inability to verify the production domain, do not advance the LoveGoBuy cursor. Continue only the other sites that can be handled safely.

## Persistent independent cursor

Use `lovegobuys-org/.seo/SEO60_TRACK.md` as the non-public persistent LoveGoBuy progress record. If it does not exist, initialize only this new site with C01 pending. Never infer a LoveGoBuy cycle from another site or reuse another site's C number.

A cycle is complete only after the production domain passes every required check. If an article is committed or deployed but production verification fails, retain that same cycle and, on the next run, repair or re-verify it before writing another LoveGoBuy article. A GitHub commit, successful build, Cloudflare log, Worker preview, or pages.dev URL is never proof of completion.

The progress file and every other `.seo/` control artifact must never enter the static build, sitemap, robots, article hub, navigation, public links, structured data, or rendered output.

## Immutable production baseline

Everything present before LoveGoBuy C01 is an immutable baseline, including:

- Existing LoveGoBuy Field Guide identity, logo, typography, CSS, spacing, responsive behavior, and mobile layout
- Home, Finds, Categories, Guide, QC, Shipping, FAQ, Articles, product cards, product details, filtering, and search modules
- All product records, names, prices, weights, categories, images, USD presentation, CTA copy, form actions, and outbound targets
- The existing EN/DE/ES/FR/IT site-language architecture, navigation, same-route switching, HTML language behavior, and language-state behavior
- The current English-only long-form article routing and article presentation; do not create empty, partial, or artificial translated article routes
- robots, sitemap, HTTPS, apex/www behavior, canonical, hreflang, Open Graph, structured data, assets, Worker configuration, and real 404 behavior
- Every existing link target, especially the approved https://cnfansge.com product, category, search, and CTA destinations

The following five existing English articles are baseline content. They do not count toward the LoveGoBuy cursor and must not be rewritten, retitled, repurposed, or cannibalized:

1. `lovegobuy-spreadsheet-research-workflow`: spreadsheet maintenance, product records, link checks, price observations, shortlist workflow, and spreadsheet research
2. `how-to-buy-with-lovegobuy-2026`: broad start-to-finish buying workflow from source search through warehouse, QC, and parcel creation
3. `lovegobuy-qc-photos-guide`: QC-photo interpretation and pre-parcel visual checks
4. `lovegobuy-shipping-cost-guide`: shipping-cost planning, actual/volumetric/chargeable weight, rehearsal packing, and route-cost comparison
5. `is-lovegobuy-legit-review-2026`: platform-fact review, public customer-review themes, trust evaluation, and overall legitimacy intent

New articles must not target “LoveGoBuy spreadsheet,” “LoveGoBuy finds,” “LoveGoBuy product links,” “how to buy with LoveGoBuy,” “LoveGoBuy QC photos,” “LoveGoBuy shipping cost,” “LoveGoBuy volumetric weight,” “LoveGoBuy review,” “is LoveGoBuy legit,” or “LoveGoBuy customer reviews” as their primary keyword or search intent. Where context requires one of those subjects, link to the existing article instead of reproducing its explanation.

## Independent keyword territory

The exclusive content territory for lovegobuys.org C01–C30 is **evidence-led LoveGoBuy operations, status records, exception handling, and support escalation**. Each article must solve one narrow operational decision with a dated evidence record, timeline, checklist, or escalation path.

Before publication, search the latest main branch, the production sitemap, all public articles on lovegobuys.org, and every other known LoveGoBuy-branded domain and active LoveGoBuy plan for duplicate title, slug, H1, primary keyword, long-tail cluster, search intent, examples, heading structure, and internal-link role. If another same-brand site already owns the proposed intent, retain the cycle and narrow it to this site's reserved operations/evidence territory or move to the next uncovered cycle. Do not create a competing synonym page.

Generic agent keywords, broad platform review, general spreadsheet/finds/product discovery, generic QC-photo reading, and generic shipping-price/calculator content are outside this track. Do not manufacture uniqueness by changing only a year, adjective, country, or word order.

## Independent C01–C30 track

C01. LoveGoBuy Order Evidence Record: Save Source, Variant, Price and Submission Details  
C02. LoveGoBuy Two-Stage Payment Ledger: Separate Product Purchase From International Parcel Payment  
C03. Preserve Color, Size, Quantity and Seller Notes Before a LoveGoBuy Order Is Submitted  
C04. Recheck a LoveGoBuy Listing After Price, Stock or Variant Details Change  
C05. LoveGoBuy Order Status Timeline: Record Verified Events Without Guessing the Next Step  
C06. Track Seller-to-Warehouse Movement With Order IDs, Carrier Evidence and Dates  
C07. Build a LoveGoBuy Warehouse Intake Record for Quantity, Variant and Label Matching  
C08. LoveGoBuy Storage Planning: Record Arrival Dates and Recheck Current Decision Deadlines  
C09. Consolidate or Wait: Decide Which Arrived LoveGoBuy Orders Belong in One Parcel  
C10. Split a LoveGoBuy Parcel by Restrictions, Urgency, Shape and Evidence Needs  
C11. Keep or Remove Original Packaging: A LoveGoBuy Product-Protection Decision Record  
C12. LoveGoBuy Restricted Items: Verify Current Route Eligibility Before Parcel Submission  
C13. Compare LoveGoBuy Shipping Lines by Restrictions, Tracking, Compensation Terms and Published Estimates  
C14. International Address Validation Checklist for a LoveGoBuy Parcel  
C15. Build a Consistent LoveGoBuy Customs Declaration Record for Descriptions, Quantities and Values  
C16. LoveGoBuy Taxes and Duties: Separate Platform Information From Destination-Country Rules  
C17. LoveGoBuy Tracking Timeline: Record Carrier Handoffs, Scan Dates and Delivery Evidence  
C18. LoveGoBuy Tracking Not Updating: An Evidence-First Escalation Checklist  
C19. Cancel a LoveGoBuy Order: Verify Status, Seller Progress and Current Timing Rules  
C20. Return a LoveGoBuy Warehouse Item to the Seller: Evidence, Deadlines and Seller Conditions  
C21. LoveGoBuy Refund Timeline: Separate Request, Approval, Seller Return and Payment Settlement  
C22. Wrong, Missing or Mismatched Warehouse Item: Build a LoveGoBuy Resolution Record  
C23. Lost or Damaged LoveGoBuy Parcel: Preserve Packing, Tracking and Delivery Evidence  
C24. Verify LoveGoBuy Insurance and Compensation Terms Before Choosing Coverage  
C25. Write a Useful LoveGoBuy Support Request With IDs, Timestamps, Evidence and a Requested Resolution  
C26. LoveGoBuy Payment Issue Checklist: Currency, Provider Status and Transaction Evidence  
C27. Verify LoveGoBuy Exchange Rates and Service Fees With a Dated Cost Record  
C28. LoveGoBuy Coupon and Promotion Verification: Eligibility, Expiry and Checkout Evidence  
C29. LoveGoBuy Account and Notification Audit: Preserve Security, Contact and Status Evidence  
C30. LoveGoBuy 2026 Operations Audit: Recheck Orders, Warehouse, After-Sales and Parcel Rules

Always select the lowest incomplete cycle. If its intent is already substantially covered, record the duplicate evidence in the private run report and choose the next uncovered track item. Do not retitle, translate, rearrange, or lightly rewrite an existing page to claim a new cycle.

Dynamic topics, especially C08 and C12–C30, may be published only when current official evidence is accessible and sufficient on the run date. When evidence is insufficient, narrow the claim, choose the next verifiable uncovered cycle, or stop LoveGoBuy for that run. Never fill gaps with assumptions.

## Mandatory fresh research

Before writing every LoveGoBuy article, re-open https://www.lovegobuy.com/ and current official pages directly relevant to that cycle, including any applicable order, warehouse, parcel, shipping-estimator, policy, return, refund, payment, promotion, account, help, or support page. The official platform as observed on the run date is the factual source of record.

Do not rely on memory, an earlier automation run, old site copy, sibling websites, competing agents, search-result snippets, cached summaries, or unverified customer posts for current platform facts. Fees, exchange rates, promotions, coupons, storage periods, processing times, status labels, routes, restrictions, packing, insurance, compensation, returns, refunds, payment options, tax statements, account features, and support flows are dynamic and must be checked again before publication.

When the official site or a decisive official page cannot be accessed, do not guess. Narrow or defer the topic and do not advance that cycle. Never invent a price, percentage, timeframe, route, status meaning, policy, feature, customer, order, rating, quotation, screenshot, experience, legal conclusion, customs result, or guaranteed outcome. Never claim official affiliation, certification, authenticity, guaranteed quality, guaranteed delivery, or guaranteed savings.

Independent public sources may be used only when genuinely necessary, current, identifiable, directly accessible, and methodologically relevant. Clearly separate official statements, verifiable observations, independent reports, and editorial analysis in the private report. Do not create another broad review article.

## Article and SEO requirements

- Exactly one new LoveGoBuy article at most per run
- Visible English main-body length strictly 1,200–1,800 words; target 1,400–1,650
- One page, one primary search intent, one independent C cycle
- Natural human editorial reasoning with topic-appropriate evidence fields, timelines, tables, checklists, calculations, decision conditions, or escalation steps
- No keyword stuffing, generic AI filler, fake first-person experience, recycled introduction, repeated H2/FAQ/conclusion template, or copied source wording
- Unique title, meta description, H1, semantic slug, primary keyword, and long-tail set
- Accurate publication and modified dates plus self-referencing canonical
- Open Graph, Article or BlogPosting, and BreadcrumbList consistent with visible content
- Natural internal links to relevant existing pages and a discoverable Articles entry
- Sitemap entry only for the final canonical production URL
- Research-source URLs belong in the private run report; do not add new outbound official, review, competitor-agent, or affiliate links to public pages
- Do not expose C labels, automation language, prompts, internal reports, or the raw main-site domain in public content

Preserve the current language architecture exactly. The site has EN/DE/ES/FR/IT static routes while its long-form article routes are currently English-only. New C articles must follow that current English-only article architecture unless the latest main branch already contains an approved complete multilingual article system. Do not create empty translations, partial translations, fake hreflang, or language reduction. Do not change language navigation, route behavior, or existing static localized content.

Images are optional. Add one to three only when they materially improve evidence or process understanding and rights are clear. Host and compress them locally inside `lovegobuys-org/`, with accurate alt, width, height, caption, source record, and lazy loading outside the hero. Never use hotlinks, private orders, addresses, payment records, tracking numbers, support chats, avatars, customer-private images, or unclear copyrighted material.

## Allowed changes and forbidden changes

Only add the current article and the minimum required article record/card, route support, related internal link, sitemap/structured-data entry, local asset, and private progress record inside `lovegobuys-org/`.

Do not redesign, remove, shorten, overwrite, reorder, or otherwise change any old content, article, home or standalone-page module, navigation, language, product, category, filter, search, image, displayed price, weight, currency, CTA, form action, target URL, CSS, font, responsive rule, canonical/hreflang behavior, robots behavior, Worker route, deployment account, DNS, or real 404 behavior.

All existing product, category, search, and CTA routes must retain their approved https://cnfansge.com targets. Public pages must not show cnfans, cnf, the raw main-site domain, chat transcripts, prompts, research process, internal reports, or cycle labels.

Before editing, refresh main and inspect current articles, titles, slugs, H1s, intents, Articles entry, sitemap, internal links, recent commits, deployment configuration, and immutable baseline. Preserve concurrent changes. Commit only confirmed `lovegobuys-org/` files for this site. Never force-push. If a build or deployment would require any cross-directory write, stop LoveGoBuy and retain the cycle.

## Build, production gate, and reporting

Before publication validate:

- Exact visible English word count within 1,200–1,800
- Factual support and current source-check dates
- Same-site and cross-LoveGoBuy cannibalization checks
- Unique metadata, H1, slug, and target query
- Internal links and Articles discoverability
- Sitemap and robots
- Canonical, Open Graph, Article or BlogPosting, and BreadcrumbList
- Preservation of current language architecture without fake hreflang
- Image rights, size, alt, dimensions, captions, and loading behavior when images are used
- Successful production build using the repository's existing Vinext/Cloudflare Worker setup
- Real random-path 404 and no horizontal overflow on mobile
- Zero reduction or change to baseline content, modules, layout, languages, products, categories, search, CTAs, images, currency display, and link targets

After pushing main, use only the repository's already configured deployment path. Do not recreate the Worker, change its name, rebind domains, alter DNS, switch Cloudflare accounts, or replace deployment architecture. If deployment credentials or the existing path are unavailable, stop and retain the cycle.

Then verify on https://lovegobuys.org/:

- New article returns 200 at its final canonical URL
- The Articles entry exposes it according to the existing architecture
- Home and all baseline routes still work
- Sitemap and robots are current
- All five baseline articles remain unchanged and reachable
- Finds, Categories, Guide, QC, Shipping, FAQ, product details, product/category/search/CTA destinations, CSS, JS, structured data, and existing language routes still work
- Canonical and current language metadata remain correct
- HTTP status, mobile rendering, and a random nonexistent path returning a real 404
- HTTP-to-HTTPS and full-path www-to-apex behavior remain correct

Advance the LoveGoBuy cursor only after every required production-domain check passes with no regression. GitHub files, commit SHAs, builds, Worker logs, previews, or pages.dev URLs do not replace formal-site verification.

Each run report must include: LoveGoBuy cycle, article title, production URL, exact visible English word count, primary and long-tail keywords, search intent, same-site and cross-LoveGoBuy duplicate findings, official and supplemental sources with check date, images, changed files, commit SHA, build/deployment result, production checks, and explicit confirmation that old content, modules, layout, languages, products, categories, search, CTAs, currency display, images, and link targets did not change.
