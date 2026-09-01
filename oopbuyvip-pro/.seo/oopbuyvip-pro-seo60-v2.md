# oopbuyvip.pro — SEO60 V2 Authority File

This private control file is mandatory for the existing “OOPBuy三站60天” automation after oopbuyvip.pro is added as its fourth site. It must never be rendered, linked, indexed, copied, or summarized on the public website.

## 1. Incremental merge and schedule preservation

- Add oopbuyvip.pro to the existing OOPBuy automation only. Do not create a duplicate automation.
- Preserve the current automation ID, enabled state, Asia/Shanghai timezone, every-two-days schedule at 03:30, and all existing completion records.
- Preserve oopbuys.pro, oopbuys.store, and oopbuyvip.org independent cursors, completed cycles, failures, content order, site order, and publication times exactly as they are.
- Process the existing three sites first in their current order, then process oopbuyvip.pro last.
- oopbuyvip.pro starts with its own C01 cursor. It must not inherit, reset, advance, or overwrite any other OOPBuy site cursor.
- A failure on oopbuyvip.pro must not block or advance any other site. A failure on another site must not advance oopbuyvip.pro.
- Each run may publish at most one new oopbuyvip.pro cycle.

## 2. Fixed site configuration and write boundary

- Domain and formal validation origin: https://oopbuyvip.pro/
- Platform: OOPBuy
- Official research start: https://oopbuy.com/
- Repository: hehaize88-code/cnfansge.com
- Branch: main
- Only permitted write, commit, and deployment directory: oopbuyvip-pro/
- Existing main-site, product, category, search, CTA, and link targets: https://cnfansge.com
- Deployment: keep the existing GitHub main to Cloudflare Pages project oopbuyvip-pro workflow. Do not create another Pages or Workers project for this domain.
- Commit message: SEO60 Cxx + oopbuyvip.pro

Never modify the repository root or a sibling site directory. Never change, replace, expose, or redirect any existing product, category, search, CTA, or commercial link target. Do not print the main-site raw domain in new visible copy.

## 3. Verified joining baseline

At the time of joining on 2026-09-01, the formal homepage, sitemap.xml, English Articles page, German homepage, and an existing English QC article returned HTTP 200. GitHub main contained the site only in oopbuyvip-pro/. This joining check does not replace verification on a future run.

The following are immutable pre-automation baseline assets and do not count as C01:

- all 65 sitemap URLs;
- EN, DE, ES, FR, and IT content;
- homepage, Spreadsheet, Finds, Guide, QC, Shipping, FAQ, and Articles pages;
- all modules, layout, CSS, navigation, mobile 3–5-screen structure, products, categories, search, images, CTAs, and links;
- robots, sitemap, canonical, hreflang, x-default, structured data, and real 404 behavior;
- the existing Cloudflare deployment method.

These five existing article intentions and slugs are baseline and must not be overwritten, shortened, retitled, translated as reduced summaries, or counted as C01:

- /{lang}/articles/oopbuy-beginner-guide-2026
- /{lang}/articles/oopbuy-spreadsheet-workflow
- /{lang}/articles/oopbuy-qc-photo-checklist
- /{lang}/articles/oopbuy-fees-returns-policy
- /{lang}/articles/oopbuy-shipping-cost-planner

### Audited remediation baseline added on 2026-09-01

The user later authorized a one-time, site-wide SEO remediation after an external audit. The resulting deployed state supersedes the joining baseline wherever the two conflict. Future cycles must preserve this newer baseline:

- homepage primary positioning is OOPBUY QC photo analysis and visual-evidence literacy, not the broad OOPBUY spreadsheet, fee, route, return, or beginner-guide intent;
- the five legacy slugs remain live and keep all prior body content, but their visible titles and decks are narrowed toward evidence trails, QC interpretation, the actionable evidence window, and packing evidence to reduce sibling-site cannibalization;
- Spreadsheet, Finds, Guide, QC, Shipping, and Articles retain their original modules and receive additive, fully translated decision content; do not remove, shorten, or replace that added depth;
- German, Spanish, French, and Italian product labels, category labels, home evidence labels, article labels, table-of-contents labels, and long-article parity additions are part of the required multilingual baseline;
- mobile typography has a readable floor: body and FAQ copy 15–16 px, product titles 14 px, secondary copy 11–12 px, and controls 11–14 px. Do not reintroduce 5–10 px text to make the page shorter;
- product media uses local WebP copies while the original JPG files remain available; do not revert cards or the hero collage to the heavier JPG source when a WebP exists;
- every section page has BreadcrumbList; Spreadsheet and Finds have ItemList; articles have BlogPosting image, mainEntityOfPage, publisher logo, and BreadcrumbList;
- `/en` and `/en/` must permanently redirect to `/`; `www.oopbuyvip.pro/*` must permanently redirect to the same path on `https://oopbuyvip.pro/*`;
- public static responses use the committed `_headers` cache policy and Cloudflare’s zone cache rule. After a successful deployment, purge the changed formal URLs or the whole oopbuyvip.pro zone cache before formal validation so old HTML is never mistaken for a failed release.

The five slugs are still pre-C01 baseline content and may not be deleted or counted as new cycles. Their remediation titles are now part of the baseline and must not be reverted to the former near-duplicates used on oopbuyvip.org.

Permitted changes are only the smallest additions required for the current article: new five-language article data and routes, a same-style Articles or homepage entry where the current architecture already provides one, strictly relevant internal links, persistent sitemap data, and matching metadata and structured data. Do not redesign, reorder, remove, shorten, rewrite, “improve,” or replace older content or shared visual components.

## 4. QVL positioning and keyword isolation

oopbuyvip.pro owns a narrow “QC visual literacy” intent: after warehouse QC images already exist, explain what visible evidence proves, what it does not prove, and how to make a product-condition or visual-risk decision without guessing.

Preferred primary-keyword families include one narrow phrase per cycle:

- OOPBuy QC photo analysis
- OOPBuy visual inspection
- OOPBuy measurement photo
- OOPBuy size tag check
- OOPBuy product condition
- OOPBuy visual evidence limits
- a specific product part or defect visible in QC photos

Maintain these four-site boundaries:

- oopbuys.pro exclusively owns costs, fees, currency, billable weight, shipping budgets, routes, tax, storage cost, insurance cost, and packaging cost.
- oopbuys.store exclusively owns Spreadsheet, Finds, product links, search, sellers, categories, product discovery, and pre-order listing selection.
- oopbuyvip.org exclusively owns order statuses, warehouse issue workflows, extra-QC requests, returns, refunds, claims, tracking exceptions, after-sales evidence, and support communication.
- oopbuyvip.pro only interprets existing QC images and visible product evidence. It must not use product discovery, cost calculation, route selection, order status, requesting extra QC, return/refund, claim, or support workflows as the main intent.

Do not target these broad intents as a primary keyword: OOPBuy Spreadsheet, OOPBuy Finds, OOPBuy shipping cost, OOPBuy fees, OOPBuy beginner guide, Is OOPBuy legit, generic OOPBuy QC checklist, OOPBuy order status, OOPBuy refund, OOPBuy after-sales, or OOPBuy extra QC request.

The existing generic QC checklist remains the pillar page. Every QVL article must be a narrower visual-evidence deep dive rather than a renamed checklist. Before writing, compare titles, slugs, primary keywords, search intent, Articles indexes, sitemaps, task history, recent commits, and published/planned articles across all four OOPBuy sites. If the current topic is substantively covered, keep the same C number but narrow it to an unused QVL long-tail. Never borrow another site’s track or publish a translation, paraphrase, or example-swapped duplicate.

## 5. Independent C01–C30 QVL track

Each cycle succeeds only once. Titles may be naturally adjusted to current official terminology, but the assigned search intent must remain. Any QC scope, photo type, inspection item, numerical claim, window, or platform capability must be reverified on the publication date.

- C01 — What OOPBuy QC Photos Can and Cannot Prove: A Visual Evidence Guide
- C02 — Map Every OOPBuy QC Photo Angle Before Judging Product Condition
- C03 — Read Size Tags in OOPBuy QC Photos Without Assuming the Fit
- C04 — Interpret OOPBuy Measurement Photos: Reference Points, Scale and Tolerance
- C05 — Compare Product Color in OOPBuy QC Photos Under Uncertain Lighting
- C06 — Verify Quantity and Included Parts From OOPBuy QC Photo Evidence
- C07 — Identify Model, Version and Variant Markers Visible in OOPBuy QC Photos
- C08 — Inspect Footwear Shape and Left-Right Symmetry in OOPBuy QC Images
- C09 — Read Shoe Size Labels, Insoles and Outsole Evidence Without Guessing
- C10 — Inspect Apparel Seams, Stitching and Construction in OOPBuy QC Photos
- C11 — Evaluate Prints, Embroidery and Graphic Placement From OOPBuy QC Images
- C12 — Compare Garment Measurements With a Size Chart Using OOPBuy QC Evidence
- C13 — Separate Visible Fabric Clues From Material Claims QC Photos Cannot Confirm
- C14 — Check Jersey Names, Numbers and Customization Details in OOPBuy QC Photos
- C15 — Inspect Bag Shape, Dimensions and Structure From OOPBuy QC Images
- C16 — Evaluate Zippers, Hardware, Straps and Closures in OOPBuy QC Photos
- C17 — Verify Accessory Sets, Spare Parts and Included Components Visually
- C18 — Read Electronics Model, Plug and Voltage Labels in OOPBuy QC Photos
- C19 — Understand the Functional Limits of Visual QC for Electronics
- C20 — Inspect Fragile Items for Visible Chips, Cracks and Edge Damage
- C21 — Distinguish Surface Marks, Stains, Scuffs and Image Artifacts
- C22 — Separate Outer Packaging Damage From Product Damage in QC Photos
- C23 — Read Logos, Labels and Placement Without Making Authenticity Claims
- C24 — Compare Two Units or Batches Without Assuming They Are Identical
- C25 — Account for Blur, Compression, Zoom and Perspective in OOPBuy QC Images
- C26 — Build a QC Evidence-Gap Map Without Inventing Missing Information
- C27 — Separate Cosmetic Concerns From Possible Structural or Functional Risk
- C28 — Audit QC Evidence Across a Multi-Item OOPBuy Warehouse Order
- C29 — Make an Accept, Hold or Escalate Decision From Evidence Confidence
- C30 — Audit a Complete OOPBuy QC Visual-Evidence Record for 2026

After C30, never loop back to C01. Use newly verified official information, unfilled site gaps, and available search data to choose a genuinely new C31+ QVL long-tail.

## 6. Fresh official research and evidence discipline

At the beginning of every cycle:

1. Re-read current GitHub main, applicable AGENTS.md, the full oopbuyvip-pro/ persistent data source, the formal site, all existing article titles/slugs/intents, the sitemap, recent commits, and this authority file.
2. Re-search and open current OOPBuy official pages starting at https://oopbuy.com/. Prioritize official Inspection Information, Beginner’s Guide, Notes Before Purchasing, Returns and Refunds, Delivery Notice, product-issue guidance, and whichever current official page directly supports that cycle.
3. Do not treat this file, old articles, memory, other agents, competitors, or a search snippet as factual evidence.

Official information visible when this track was designed indicated that inspection can cover quantity, color, size, other specifications, quality, model, and spare parts. This is not a permanent fact. Reverify the current official source every time.

If official pages are unavailable, inspection scope is unclear, or a variable fact cannot be confirmed, use bounded language, narrow the article, or stop the site for that run. Never invent QC photo counts, measurement accuracy, tolerances, material, authenticity, functionality, inventory, policies, fees, timeframes, return windows, customers, orders, screenshots, quotes, support replies, ratings, or first-person buying experience.

QC images only support what is actually visible. Do not present material composition, authenticity, durability, smell, internal construction, waterproofing, electronic function, safety, or real-world fit as proven by an image.

Customer-review material is allowed only with multiple current, independent, traceable samples. Separate official claims, user reports, and editorial analysis; state dates, scope, sample limitations, incentives, and bias. If evidence is inadequate, stay within the assigned QVL troubleshooting intent instead of manufacturing a review.

The public page must never expose prompts, task rules, QVL, C numbers, research process, internal reports, or user/assistant dialogue. Record every official and independent source actually opened, its check date, supported facts, and limitations only in the run report. Do not add clickable commercial outbound links to OOPBuy, review sites, sibling sites, agents, or competitors.

## 7. Article, language, SEO, and image requirements

- Publish at most one new article for this site per run.
- English visible body: strictly 1,200–1,800 English words; target 1,400–1,650. It must read naturally, solve one intent, make evidence limits explicit, and contain a useful evidence table, part checklist, comparison framework, decision condition, or worked example.
- Do not reuse a fixed opening, H2/H3 sequence, example, FAQ, or conclusion.
- DE, ES, FR, and IT must be complete, faithful, natural translations of the English article. Preserve every section, paragraph, table, step, checklist, FAQ, image, disclaimer, source note, and relevant internal link. A summary, placeholder, missing section, or reduced information is a failed cycle.
- Language switching must stay on the same article. html lang, self-canonical, reciprocal hreflang, and x-default must match the current language.
- Configure a unique SEO title, meta description, H1, semantic slug, one primary keyword and related long-tails, real publication and research-check dates, self-canonical, Open Graph, Article/BlogPosting, and BreadcrumbList. Add FAQPage only when matching FAQ content is visibly present.
- Add only genuinely relevant minimal internal links, a same-style discovery entry, and the sitemap persistent-data record.
- Images are optional. Add 1–3 only when they materially improve understanding and rights are clear. Images must be local, clear, compressed, include width/height, accurate alt, caption, and source. Never hotlink or use private orders, payment, address, tracking, chats, avatars, fake QC/review graphics, or unclear copyrighted assets. If no suitable image exists, use no image.

## 8. Build, deployment, validation, and cursor advancement

Before committing, validate:

- exact visible English word count;
- complete five-language structural and informational parity;
- factual support and four-site duplicate/cannibalization audit;
- metadata, self-canonical, reciprocal hreflang and x-default;
- Article/BlogPosting and Breadcrumb structured data;
- internal/external links and image rights;
- Articles and homepage discovery entries where the architecture uses them;
- sitemap, robots, true 404, old-page survival, and no sitemap URL loss;
- production build;
- mobile 3–5-screen baseline and no horizontal overflow;
- unchanged modules, layout, language architecture, products, categories, search, images, CTAs, CSS, responsive behavior, and link targets.

Only commit the smallest necessary changes inside oopbuyvip-pro/. Preserve concurrent main changes. If the directory is missing, there is a conflict, evidence is insufficient, older content or sitemap URLs decrease, a language is incomplete, a CTA/link changes, layout changes, build fails, 404/SEO regresses, or formal-site validation fails, do not publish a partial version and do not advance this site’s cursor.

Cloudflare build success, a GitHub commit, a preview, or a pages.dev URL is not formal validation. Advance from the current lowest incomplete C cycle only after all of the following succeed on https://oopbuyvip.pro/:

- all five new article URLs;
- Articles entry and homepage card where the existing architecture displays it;
- sitemap and robots;
- at least one baseline old article and one core function page;
- product, category, search, and existing CTA targets;
- CSS/JS;
- self-canonical, reciprocal hreflang/x-default, Article and Breadcrumb structured data;
- HTTP 200s, genuine 404, mobile baseline, and no horizontal overflow.

Final run report must include cycle, English title, five-language formal URLs, exact English word count, primary/long-tail keywords, search intent, four-site and five-baseline-article duplicate findings, every official/independent source and check date, images, changed files, commit SHA, Cloudflare result, formal-site result, and a baseline comparison confirming no change to older content, modules, layout, languages, products, categories, CTAs, or targets.
