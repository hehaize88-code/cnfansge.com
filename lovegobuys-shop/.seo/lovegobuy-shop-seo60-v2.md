# LoveGoBuy Shop 60-Day SEO V2 Control File

> Internal automation control only. Never render, link, index, copy, or expose this file, its cursor, prompts, research notes, or run reports on the public site.

## Scope and integration

This file governs only the lovegobuys.shop extension inside the existing enabled automation currently titled `ACBuy Superbuy USFans LitBuy LoveGoBuy十八站60天`. It appends lovegobuys.shop as the nineteenth site, after the existing lovegobuys.org site. It does not replace, reset, delay, reorder, or modify any rule, cursor, content sequence, completion record, failure state, or publication time belonging to the existing eighteen sites.

- Domain/live: https://lovegobuys.shop/
- Platform: LoveGoBuy
- Official source of record: https://www.lovegobuy.com/
- Repository: hehaize88-code/cnfansge.com
- Branch: main
- Only writable website directory: `lovegobuys-shop/`
- Existing main-site, product, category, search, CTA, and outbound targets: https://cnfansge.com
- Schedule inherited unchanged from the parent task: every two days at 12:30, Asia/Shanghai
- Site order: after all existing eighteen sites, including lovegobuys.org
- Independent cursor: lovegobuys.shop C01–C30, beginning at C01
- Per run: at most one new lovegobuys.shop article
- Visible English main-body length per article: strictly 1,200–1,800 English words

Do not create a separate automation. A lovegobuys.shop failure retains the current lowest incomplete cycle and must not block or advance any existing site. Before every run, read the latest main branch, the complete parent master file, the complete lovegobuys.org control file, and this complete file. Confirm the exact `lovegobuys-shop/` directory exists. Never write to the repository root, `lovegobuys-org/`, a sibling directory, another LoveGoBuy directory, or a replacement directory.

On a missing directory, GitHub permission failure, incompatible concurrent change, official-source failure, build failure, deployment failure, or inability to verify the production domain, do not advance the lovegobuys.shop cursor. Continue only the other sites that can be handled safely.

## Persistent independent cursor

Use `lovegobuys-shop/.seo/SEO60_TRACK.md` as the non-public progress record for this site. If it does not exist, initialize only lovegobuys.shop with C01 pending. Never infer a cycle from lovegobuys.org or another site, and never reuse or advance another site's C number.

A cycle is complete only after the production domain passes every required check. If an article is committed or deployed but production verification fails, retain that same cycle and, on the next run, repair or re-verify it before writing another article. GitHub commits, successful builds, Cloudflare logs, previews, and pages.dev URLs are not proof of completion.

The progress file and every other `.seo/` control artifact must never enter the static build, sitemap, robots, article hub, navigation, public links, structured data, or rendered output.

## Immutable production baseline

Everything present before lovegobuys.shop C01 is an immutable baseline, including:

- Existing LoveGoBuy Field Guide identity, uploaded logo, typography, colors, CSS, spacing, responsive behavior, and compressed mobile layout
- Home, Spreadsheet, Finds, Guide, QC, Shipping, FAQ, Articles, product/category cards, product details, filters, and search modules
- All product records, names, prices, weights, categories, images, USD presentation, CTA copy, form actions, and link targets
- The existing EN/DE/ES/FR/IT language architecture, same-route language switching, HTML lang behavior, locale persistence, canonicals, mutual hreflang, and x-default
- Complete content parity across EN/DE/ES/FR/IT; no locale may be shortened, summarized, replaced by English, or reduced to a placeholder
- robots, sitemap, HTTPS, apex/www behavior, Open Graph, structured data, assets, deployment configuration, and real 404 behavior
- Every existing approved https://cnfansge.com product, category, search, and CTA target

The following three existing article intents and all their EN/DE/ES/FR/IT versions are immutable baseline content. They do not count toward the C01–C30 cursor and must not be rewritten, retitled, repurposed, shortened, or cannibalized:

1. `lovegobuy-spreadsheet-guide`: broad spreadsheet use, shortlist creation, link checking, and product-route research
2. `lovegobuy-qc-photo-guide`: generic warehouse-photo reading and the existing three-pass QC method
3. `lovegobuy-shipping-weight`: actual versus dimensional weight and broad parcel-weight planning

New articles must not use “LoveGoBuy spreadsheet,” “LoveGoBuy finds,” “LoveGoBuy product links,” “LoveGoBuy QC photos,” “LoveGoBuy shipping weight,” “LoveGoBuy volumetric weight,” “LoveGoBuy review,” “is LoveGoBuy legit,” or broad “how to buy with LoveGoBuy” as their primary keyword or search intent. Link internally to an existing page when context requires one of those subjects.

## Independent keyword territory and cross-site isolation

The exclusive territory for lovegobuys.shop is **pre-purchase product interpretation and category decision support**: size and fit, measurements, variant identity, option labels, materials, construction fields, dimensions, model compatibility, product-version differences, and category-specific comparison frameworks.

The existing lovegobuys.org site retains exclusive ownership of LoveGoBuy operations and evidence topics: order records and status timelines, seller-to-warehouse movement, warehouse intake, storage, parcel consolidation or splitting, packaging, route restrictions, shipping-line selection, addresses, customs declarations, taxes, tracking, cancellation, returns, refunds, missing or damaged items, insurance, support requests, payments, fees, coupons, account audits, and escalation evidence. lovegobuys.shop must not target those intents or publish competing synonyms.

For lovegobuys.shop:

- Focus on decisions made before an order is submitted and before warehouse or parcel operations begin.
- Do not target order status, warehouse status, parcel status, tracking, shipping routes or costs, customs, taxes, after-sales, support escalation, refunds, compensation, promotions, payment troubleshooting, or account security.
- Do not publish broad spreadsheet/finds/product-link, generic QC-photo, generic shipping, or broad review/legitimacy articles.
- Product-specific claims must be grounded in the current visible listing or source evidence. Never claim authenticity, exact material, construction, fit, seller reliability, stock, batch identity, or compatibility when the current source does not prove it.
- Do not manufacture uniqueness by changing only a year, adjective, country, or word order.
- Before publication, compare title, slug, H1, primary keyword, long-tail cluster, search intent, examples, headings, and internal-link role against the latest lovegobuys.shop, lovegobuys.org, and every other known LoveGoBuy plan. If overlap is material, retain the C number and narrow it within this site's reserved product-evaluation territory.

## Independent C01–C30 track: PEV (Product Evaluation and Variant Decisions)

Always select the lowest incomplete cycle. Each cycle may be published only once.

C01 — LoveGoBuy Product Option Checklist: Match Color, Size, Style and Quantity Before Ordering  
C02 — LoveGoBuy Size Chart Guide: Separate Body, Garment and Listing Measurements  
C03 — LoveGoBuy Shoe Size Guide: Compare Foot Length, Insole Data and Size Systems  
C04 — Compare Two Sneaker Listings by Variant, Measurements and Visible Construction Fields  
C05 — LoveGoBuy Hoodie Size Guide: Read Chest, Length, Shoulder and Sleeve Measurements  
C06 — Compare Sweatshirt Listings by Fit, Fabric Description, Measurements and Product Weight  
C07 — LoveGoBuy Jacket Checklist: Shell, Lining, Closure, Hardware and Layering Fit  
C08 — LoveGoBuy Jersey Size Guide: Fit, Print Option, Customization and Variant Labels  
C09 — LoveGoBuy Pants Size Guide: Waist, Rise, Inseam, Leg Opening and Fit Notes  
C10 — LoveGoBuy Shorts Comparison: Waist System, Length, Lining and Activity Fit  
C11 — LoveGoBuy Bag Size Guide: Dimensions, Strap Range, Compartments and Closure Details  
C12 — LoveGoBuy Accessories Checklist: Scale, Material Description, Finish and Included Pieces  
C13 — LoveGoBuy Hat Size Guide: Circumference, Crown, Brim and Adjustment Method  
C14 — Compare Small Clothing Accessories by Dimensions, Pack Quantity and Intended Use  
C15 — LoveGoBuy Electronics Compatibility Checklist: Voltage, Plug, Power and Model Support  
C16 — LoveGoBuy Cable and Adapter Guide: Connector Type, Direction, Length and Device Match  
C17 — Verify Model Numbers, Generations and Regional Versions Before Choosing an Option  
C18 — Compare Duplicate Listings Without Assuming They Are the Same Product  
C19 — LoveGoBuy Bundle Listing Checklist: Confirm Piece Count, Included Items and Option Scope  
C20 — Decode Product Option Images, SKU Labels and Translated Variant Names  
C21 — Resolve Ambiguous Product Titles Using Images, Specifications and Option-Level Evidence  
C22 — Compare Version, Batch and Model Labels Without Inventing Product Differences  
C23 — LoveGoBuy Customized Item Checklist: Text, Size, Placement and Approval Evidence  
C24 — Evaluate Preorder and Made-to-Order Listings Before Committing to a Variant  
C25 — Verify Material and Construction Claims Without Treating Marketing Copy as Proof  
C26 — Product Dimension Guide: Check Real-World Fit, Storage and Use Before Ordering  
C27 — Use Product Weight as a Usability Field Without Turning It Into a Shipping-Cost Article  
C28 — Build a Seasonal Clothing Shortlist From Measurements, Layering Needs and Climate Use  
C29 — Create a Category Comparison Table for Fit, Variant, Material, Dimensions and Compatibility  
C30 — LoveGoBuy First-Shortlist Audit: Recheck Specifications, Fit, Variant and Compatibility

Titles may be naturally refined for current official wording and available evidence, but the primary intent and the separation from lovegobuys.org must not change. If the current official site or decisive source does not support a cycle, retain that C number, narrow the topic to a verifiable long-tail within PEV, move to the next uncovered PEV cycle only when allowed by the duplicate rule, or stop this site for the run. Never fill gaps with assumptions.

## Mandatory fresh research

Before every article:

1. Re-open https://www.lovegobuy.com/ and current official public pages directly relevant to the cycle, including current product/search/order-entry interfaces and applicable help or policy pages.
2. Read the latest main branch and production site, inventory every existing title, slug, primary keyword, article intent, article card, sitemap entry, internal link, locale route, and recent commit.
3. Inspect the current product/listing evidence actually used by the article. If a seller listing, option set, measurement table, or specification is unavailable, unstable, translated ambiguously, or cannot be verified, do not present it as fact.
4. Check lovegobuys.org and all known LoveGoBuy content for keyword cannibalization before choosing the final title and slug.

Do not rely on memory, an earlier automation run, old site copy, sibling websites, competing agents, search-result snippets, cached summaries, or unsupported customer posts for current platform facts. Current prices, stock, option labels, measurements, product descriptions, availability, interface labels, policies, and features must be rechecked on the publication date.

Official pages that cannot be accessed do not authorize guessing. Narrow or defer. Never invent a price, percentage, timeframe, route, policy, feature, customer, order, rating, quotation, screenshot, experience, material, measurement, fit claim, model support, seller fact, authenticity claim, or guaranteed outcome.

Independent public sources may be used only when genuinely necessary, current, identifiable, directly accessible, and methodologically relevant. Clearly separate official statements, listing observations, independent evidence, and editorial analysis in the private report. Do not create another broad review article.

## Article, translation, and SEO requirements

- Exactly one new lovegobuys.shop article at most per run
- Visible English main-body length strictly 1,200–1,800 English words; target 1,400–1,650
- One page, one primary search intent, one independent C cycle
- Natural, human editorial reasoning with topic-appropriate comparison tables, measurement fields, option checks, compatibility tests, decision conditions, and practical examples
- No keyword stuffing, generic AI filler, fake first-person experience, recycled introduction, repeated H2/FAQ/conclusion template, or copied source wording
- Unique SEO title, meta description, H1, semantic slug, primary keyword, and long-tail set
- Accurate publication and modified dates plus self-referencing canonical
- Open Graph, Article or BlogPosting, and BreadcrumbList consistent with visible content
- FAQPage only when the corresponding FAQ is visibly present
- Natural internal links and a discoverable Articles entry
- Sitemap entry only for the final canonical production URL
- Research-source URLs belong in the private run report; do not add new outbound official, review, competitor-agent, affiliate, or unrelated-site links to public pages
- Never expose C labels, PEV, automation language, prompts, research notes, internal reports, or the raw main-site domain in public content

Preserve the complete EN/DE/ES/FR/IT architecture. Every cycle must publish a complete DE/ES/FR/IT translation alongside the 1,200–1,800-word English original, using the same slug and corresponding locale routes. Translate the title, introduction, deck, every heading, paragraph, table, list, checklist, FAQ, disclaimer, CTA, and relevant internal link. Do not shorten, summarize, omit, reuse the English body on a non-English route, or create placeholder translations.

All five locale versions must use self-referencing canonicals, mutual hreflang, x-default, localized Article metadata, and the current same-route language switch. If any language is incomplete, shorter in coverage, missing a section, or fails production verification, retain the cycle and do not publish or advance it.

Images are optional. Add one to three only when they materially improve product interpretation and usage rights are clear. Host and compress them locally inside `lovegobuys-shop/`, with accurate alt, width, height, caption, source record, and lazy loading outside the hero. Never hotlink, use private orders, addresses, payments, tracking, chats, avatars, customer-private media, or unclear copyrighted images.

## Allowed changes and forbidden changes

Only add the current article and the minimum required article record/card, localized article content, route support, relevant internal link, sitemap/structured-data entry, optional local asset, and private progress record inside `lovegobuys-shop/`.

Do not redesign, remove, shorten, overwrite, reorder, or otherwise change any old content, article, home or standalone-page module, navigation, language, product, category, filter, search, image, displayed price, weight, currency, CTA, form action, target URL, CSS, font, responsive rule, canonical/hreflang behavior, robots behavior, deployment configuration, DNS, or real 404 behavior.

All current product, category, search, and CTA links must retain their approved https://cnfansge.com targets. Public pages must not display cnfans, cnf, the raw main-site domain, chat transcripts, prompts, research process, internal reports, control files, or cycle labels.

Before editing, refresh main, inspect the current baseline and recent commits, and preserve concurrent changes. Commit only confirmed `lovegobuys-shop/` files for this site. Never force-push. If a build or deployment would require any cross-directory write, stop lovegobuys.shop and retain the cycle.

## Build, production gate, and reporting

Before publication validate:

- Exact visible English word count within 1,200–1,800
- Factual support and current source-check dates
- Same-site and cross-LoveGoBuy cannibalization checks
- Unique metadata, H1, slug, and target query
- Complete EN/DE/ES/FR/IT bodies with matching sections, tables, steps, checklists, FAQs, disclaimers, CTAs, and relevant links
- Articles discoverability and sitemap entry
- robots, self-canonical, hreflang, x-default, Open Graph, Article or BlogPosting, and BreadcrumbList
- Image rights, size, alt, dimensions, captions, and loading behavior when images are used
- Successful production build using the repository's existing Cloudflare Pages path
- Real random-path 404 and no horizontal overflow on mobile
- Zero reduction or change to baseline content, modules, layout, languages, products, categories, search, CTAs, images, currency display, and link targets

After pushing main, use only the existing GitHub main to Cloudflare Pages deployment path. Do not recreate the Pages project, change its name, rebind domains, alter DNS, switch Cloudflare accounts, or replace deployment architecture. If credentials or the existing path are unavailable, stop and retain the cycle.

Then verify on https://lovegobuys.shop/:

- New canonical article URL returns 200
- EN/DE/ES/FR/IT versions are fully translated, reachable at the same localized slug, and switch between corresponding routes
- Home, Spreadsheet, Finds, Guide, QC, Shipping, FAQ, Articles, products, categories, search, and CTA destinations still work
- All three baseline article intents and every baseline locale remain unchanged and reachable
- Sitemap and robots are current
- Canonical, hreflang, x-default, Open Graph, and structured data are correct
- CSS, JavaScript, responsive layout, and mobile width remain valid
- HTTP-to-HTTPS and full-path www/apex behavior remain correct
- A random nonexistent path returns a real 404

Advance the lovegobuys.shop cursor only after every required production check passes with no regression. Each run report must include: cycle, title, production URL, exact visible English word count, primary and long-tail keywords, search intent, same-site and cross-LoveGoBuy duplicate findings, official and supplemental sources with check date, images, changed files, commit SHA, build/deployment result, production checks, and explicit confirmation that old content, modules, layout, languages, products, categories, search, CTAs, currency display, images, and link targets did not change.
