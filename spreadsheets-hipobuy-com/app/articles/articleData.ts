export type ArticleSection = {
  short: string;
  heading: string;
  paragraphs: string[];
  checklist?: string[];
};

export type ArticleRecord = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  readTime: number;
  lead: string;
  intro: string[];
  sections: ArticleSection[];
  decisionTitle: string;
  decision: string[];
  nextTitle: string;
  nextCopy: string;
  nextHref: string;
  nextLabel: string;
};

export const articles: ArticleRecord[] = [
  {
    slug: "hipobuy-spreadsheet-shoes",
    title: "HipoBuy Spreadsheet Shoes: Find Sizes and Check QC Photos",
    metaTitle: "HipoBuy Spreadsheet Shoes: Sizes & QC Photos (2026)",
    description: "Use the HipoBuy spreadsheet to find shoes, compare size evidence, verify the live option and inspect shape, symmetry, soles and measurements in QC photos.",
    kicker: "SHOES / SEARCH + QC",
    readTime: 10,
    lead: "A shoe row can help you discover a listing, but a reliable decision still depends on the exact variation, a usable length reference and warehouse photos of the pair you actually ordered.",
    intro: [
      "Searching a HipoBuy spreadsheet for shoes is fast because images and category links remove much of the marketplace vocabulary problem. The risk is that a familiar silhouette can make two listings appear interchangeable. They may use different size systems, construction, option labels or source photographs. Treat every row as a route to a live page, not as proof that the product is available or suitable.",
      "A disciplined shoe workflow has three separate decisions. Search decides whether a page deserves attention. Sizing decides which option is defensible from the evidence provided. Quality control decides whether the warehouse pair matches the selected option and passes visible checks. Keeping those stages separate makes it easier to reject a weak listing before money, storage time or shipping choices complicate the process."
    ],
    sections: [
      { short: "Search by construction", heading: "1. Search for the shoe type and one visible construction detail", paragraphs: [
        "Begin with the product noun and a feature that can be confirmed in photographs: low-top running shoe, suede clog, leather-look loafer or gum-sole trainer. Avoid promotional terms such as best quality, one-to-one or perfect batch. Those phrases do not describe a visible attribute and cannot be validated by a spreadsheet result. A compact query also gives you room to change one term when the result set is too broad or empty.",
        "Open several candidates before comparing price. Confirm that each destination still shows the shoe type from the row and that the seller has not replaced it with a different product. Check the thumbnail against the live gallery, then note the option labels. If the lowest displayed price belongs to laces, an accessory or a deposit, remove that page from a direct shoe-price comparison until the intended variation is selected."
      ], checklist: ["Category noun is explicit", "One visible feature narrows the result", "Live gallery matches the spreadsheet row", "Intended variation—not an accessory—sets the price"] },
      { short: "Decode the size", heading: "2. Identify the size system before choosing a number", paragraphs: [
        "A number such as 42 is not enough on its own. Determine whether the seller is using EU sizing, a Chinese label, foot length, insole length or another convention. Look for the chart attached to the exact listing instead of borrowing a chart from a similar product. Sellers can use different lasts and measurement guidance even when the silhouette looks identical. If the chart and option labels conflict, record the conflict rather than guessing which one is current.",
        "Use your foot measurement according to the seller’s stated method, or compare an insole from a shoe that fits when an insole reference is provided. Foot length and insole length are not automatically interchangeable: an insole normally needs space beyond the foot, while the amount varies with shape and intended fit. Never add a universal allowance taken from an unrelated guide. The defensible choice is the option supported by this listing’s instructions."
      ] },
      { short: "Save the option", heading: "3. Preserve the selected colour, size and version", paragraphs: [
        "Before submitting the order, capture the full option state. Save the listing URL, selected colour, selected size, version or batch label, source price and a screenshot of the size chart. If a buyer note is needed, make it concise and consistent with the selected variation. A screenshot matters because marketplace pages can be edited between payment, purchasing and warehouse arrival.",
        "Do not use product photos to infer an option name. A gallery may mix colours or versions for marketing. Translate each selector and check whether changing one option changes the product image, price or availability. Where several versions share a page, record the version text exactly rather than replacing it with your own quality label. This creates a clear reference when QC photos arrive and prevents a comparison against the wrong example."
      ] },
      { short: "Inspect pair shape", heading: "4. Check pair symmetry, shape and alignment in QC photos", paragraphs: [
        "Start with identity: the pair should match the ordered colour, size tag and main construction. Then compare left and right shoes from the same angle. Look at toe shape, panel height, lace rows, tongue position, heel height and the way the outsole meets the upper. Small perspective differences are normal, so do not declare asymmetry from two photographs taken at noticeably different angles.",
        "Use straight-on views for heel alignment and top-down views for toe shape. Side views are better for sole attachment, panel placement and visible glue. Lighting can exaggerate texture or colour, so compare within the same photograph before comparing with polished seller images. If one potential defect could change the decision, request a targeted close-up that names the location rather than asking for an undefined set of extra pictures."
      ], checklist: ["Correct colour and visible size tag", "Left and right pair shown together", "Toe and heel shapes compared from matching angles", "Sole edge, stitching and obvious marks inspected"] },
      { short: "Verify measurements", heading: "5. Ask for a measurement that can resolve the fit decision", paragraphs: [
        "When fit remains uncertain, an insole-length photograph can be more useful than another beauty shot. The measuring tape should begin at the correct edge, remain flat and show the endpoint clearly. A photograph with the tape curved, offset or hidden cannot support a precise conclusion. Compare the evidence with the method used for the shoe you measured at home and allow for the seller’s own guidance rather than a generic internet conversion.",
        "Measurements reduce uncertainty but do not prove comfort. Width, toe-box volume, arch shape, lining and material stiffness affect fit. Warehouse photos also cannot establish long-term wear or material composition. Mark those as unknowns. The aim is not to force a guarantee from limited evidence; it is to remove avoidable errors such as the wrong tagged size, visibly mismatched pair or measurement far outside the expected range."
      ] },
      { short: "Plan packaging", heading: "6. Include the shoe box decision in parcel planning", paragraphs: [
        "Shoes can be light relative to the space occupied by a retail box. Some shipping routes consider parcel dimensions as well as scale weight, so the box may affect the chargeable figure. Removing it can reduce volume, but it also removes structure and may increase the chance of compression. Decide only after seeing the shoe condition, available packaging options and current route calculation for your destination.",
        "If the box has collector value or contains size and model information you need, include that in the decision. If protection is the priority without the retail box, consider the platform’s available reinforcement choices and understand that extra material can add weight. There is no universal cheapest setting. Compare the packed parcel, route restrictions, included services and risk tolerance rather than using the product price as a shipping estimate."
      ] }
    ],
    decisionTitle: "Shoe decision sheet",
    decision: [
      "Record the spreadsheet row, final destination URL, selected variation text, sizing evidence, warehouse tag, measured length if requested, QC decision and packaging choice. Use unknown when a fact is not supported. This short record makes it possible to explain the order later without relying on a changed seller page.",
      "Reject the candidate when identity or size evidence is contradictory and cannot be resolved. Request one targeted photo when a visible uncertainty can change the decision. Approve only on the evidence you actually have, while recognising that images cannot prove authenticity, durability, exact material or future comfort."
    ],
    nextTitle: "Browse shoe listings with the checklist ready",
    nextCopy: "Open the shoe category, shortlist several live pages and keep sizing separate from QC.",
    nextHref: "https://cnfanssp.com/shoes/",
    nextLabel: "Open shoes"
  },
  {
    slug: "hipobuy-links-not-working",
    title: "HipoBuy Spreadsheet Product Links Not Working: Check a Live Listing",
    metaTitle: "HipoBuy Links Not Working? Check a Live Listing (2026)",
    description: "Diagnose HipoBuy spreadsheet links that redirect, expire, show zero results or lead to changed listings without confusing a working URL with a verified product.",
    kicker: "LINK CHECK / TROUBLESHOOTING",
    readTime: 10,
    lead: "A broken or changed link is a data-quality problem, not a reason to guess the destination. This workflow separates redirects, removed listings, changed products and temporary loading failures.",
    intro: [
      "Product links are snapshots of a marketplace at a particular time. A seller can remove a listing, replace its contents, change option labels or move inventory. A platform can also add a redirect or block a request temporarily. When a HipoBuy spreadsheet link stops behaving as expected, the safest response is to preserve the original evidence and diagnose the failure before searching for a replacement.",
      "The goal is not merely to make a browser show a page. A technically successful response can still be the wrong product, a generic category or an unrelated redirect. Link checking therefore has two layers: destination health and product identity. Both must pass before the row can be treated as a useful discovery route.",
      "Keep recovery work separate from purchasing. Do not log in through an unfamiliar redirect, paste account data into a link checker or copy personal order details into a public worksheet. The information needed for diagnosis is normally limited to the public URL, visible identifiers, result state and check date. A replacement should be evaluated through the platform’s normal current workflow only after its public identity has been established."
    ],
    sections: [
      { short: "Classify the failure", heading: "1. Name the link failure before changing anything", paragraphs: [
        "Open the link once in a normal browser and record what happens. Useful labels include not found, generic homepage, login wall, timeout, unrelated product, changed variation and redirect to a new product page. These labels distinguish transport problems from identity problems. A page that loads quickly but shows a different item has failed the row just as clearly as a 404 response.",
        "Keep the original URL, spreadsheet title, thumbnail or notes, and the time of the check. Do not overwrite the old address with the first plausible replacement. The original is part of the audit trail and may contain an item identifier that helps later. If repeated checks differ, note the sequence and avoid claiming permanent removal from one temporary error."
      ], checklist: ["Original URL preserved", "Final URL captured separately", "HTTP or visible outcome labelled", "Product identity checked after the page loads"] },
      { short: "Inspect redirects", heading: "2. Follow the redirect without assuming equivalence", paragraphs: [
        "A redirect can be legitimate, but the final page still needs an identity comparison. Check the visible product title, main images, seller or shop identity, item code where available and variation structure. A redirect to a marketplace homepage, search page or store front does not preserve the row’s product identity. It only proves that the domain responded.",
        "If the final page is similar but not exact, create a new candidate rather than silently treating it as the old item. Similar photographs are not enough because sellers can reuse images across different construction, options or prices. Preserve both addresses and describe the relationship as unknown until the identifiers and selected variation can be matched."
      ] },
      { short: "Rule out local errors", heading: "3. Separate a temporary browser problem from a dead listing", paragraphs: [
        "Before declaring a link dead, check for ordinary local causes. Reload once, remove an accidental trailing character copied with the URL, and try the page without an old fragment or tracking parameter. Confirm the device has a normal connection and that the browser did not block a required redirect. Do not repeatedly hammer the destination or use automated workarounds against access controls.",
        "A page may require the platform’s normal signed-in workflow or app handoff. In that case, record that the public check is limited rather than calling the listing verified. If the same clean URL consistently fails while the marketplace homepage works, the evidence for removal is stronger. Still use a dated status such as unavailable when checked instead of a timeless claim."
      ] },
      { short: "Search by identifiers", heading: "4. Recover candidates with stable identifiers before vague keywords", paragraphs: [
        "Look for an item number, model code, seller name or distinctive construction phrase in the preserved row. Search the main product index with the strongest exact identifier first. If it yields nothing, remove one element at a time. This maintains a reproducible path from the old record to any new candidate and avoids a broad image-led search that can return lookalikes.",
        "When only a title remains, strip promotional words and keep the category plus one or two observable attributes. Save each query and its outcome. A replacement found with different wording is a new listing that needs a fresh option, price and identity check. Never transfer the old row’s checked date, seller notes or QC conclusions to it."
      ], checklist: ["Exact item or model code tested first", "Seller identity used only when visible", "One query term changed per attempt", "Replacement stored as a new candidate"] },
      { short: "Validate the replacement", heading: "5. Rebuild the row from the new live page", paragraphs: [
        "A replacement row should be built from current evidence: final URL, page title, visible seller, selected option structure, source price with timestamp and a representative image. Compare it with the original product requirements rather than merely with the old thumbnail. If a required feature is missing, the replacement is not good enough even when the overall style looks close.",
        "Do not copy a quality label, sales count, review claim or stock state that cannot be confirmed. Marketplace signals change and may refer to the whole listing instead of the intended variation. Mark unsupported fields unknown. A smaller index with clear live destinations is more useful than a large sheet whose links technically open but no longer represent the recorded items."
      ] },
      { short: "Set recheck rules", heading: "6. Use dated statuses instead of permanent promises", paragraphs: [
        "Assign a last-checked date and a status that describes evidence: live and matching, live but changed, redirected and matching, redirected but unverified, unavailable, or access limited. These states give editors and users more information than a single green check. The date also prevents an old result from being read as a current guarantee.",
        "Prioritise rechecks by user impact. Rows receiving search clicks or leading to key category pages deserve attention before obscure records. Retain failures long enough to identify patterns, then remove or archive them according to a clear rule. Do not create automatic replacement loops that publish pages without human identity review; availability and similarity are not the same thing."
      ] }
    ],
    decisionTitle: "Live-link decision sheet",
    decision: [
      "Store the original URL, final URL, dated failure label, identity fields compared, recovery query and replacement URL if one exists. This provides a compact audit trail without storing account, order or payment information.",
      "Keep the row active only when the final destination and product identity both pass. If access is limited, label the limitation. If a replacement is merely similar, publish it as a new candidate and require the same option, price and QC checks as any other new listing.",
      "A useful maintenance note also states who or what performed the check: public browser review, signed-in platform review or later warehouse comparison. That context prevents a limited public result from being mistaken for a completed order-level verification."
    ],
    nextTitle: "Search the current index",
    nextCopy: "Use the original identifier or a compact category-plus-feature query to find a fresh candidate.",
    nextHref: "/articles/hipobuy-spreadsheet-search-query/",
    nextLabel: "Build a query"
  },
  {
    slug: "hipobuy-qc-photos-product-id-color-size",
    title: "HipoBuy QC Photos: Match Product ID, Color and Size Before Approval",
    metaTitle: "HipoBuy QC Photos: Product ID, Color & Size Checks",
    description: "Review HipoBuy QC photos in the right order: match the product identity and selected option, then inspect measurements, construction and visible defects.",
    kicker: "QC PHOTOS / IDENTITY FIRST",
    readTime: 10,
    lead: "Quality control begins with identity. A sharp warehouse photograph of the wrong colour, size or version is still a failed order, even when the item looks well made.",
    intro: [
      "Warehouse QC photos are strongest when they answer a defined decision. They can show the item received, option tags, measurements and visible construction. They cannot prove every material claim, authenticity, hidden defects or long-term durability. Starting with those limits prevents the photographs from being treated as a guarantee.",
      "The most reliable review order is identity, variation, measurements, category-specific construction and visible condition. That order matters. Detailed stitching analysis has little value if the photographs show a different size or version from the order. Preserve the listing and selected-option evidence beside the QC set so each comparison uses the same reference.",
      "Review on a screen large enough to see the full frame and the detail, but keep the original context. Extreme zoom can turn compression, reflections or fabric texture into apparent defects. First scan every photograph for coverage, then compare the decisive areas at a reasonable scale. If the platform provides filenames or view labels, preserve them in the decision record so a later note can point to the same evidence."
    ],
    sections: [
      { short: "Build the reference", heading: "1. Assemble the order reference before opening QC photos", paragraphs: [
        "Collect the final listing URL, item or model identifier, seller or shop identity, exact option text, selected colour, selected size, and any buyer note. Include the screenshot of the live page taken at order time. This is the reference set. Without it, reviewers tend to compare the warehouse item with a remembered thumbnail or a generic product photo that may show another variation.",
        "If the listing has changed since purchase, keep both the saved screenshot and current page. Do not rewrite the historical option to match the new wording. A changed listing is a limitation in the evidence and should be recorded. The warehouse item can still be checked against the order record even when the seller has removed the original public page."
      ], checklist: ["Final listing and seller identity", "Item or model identifier", "Exact colour, size and version text", "Order-time screenshot and buyer note"] },
      { short: "Match identity", heading: "2. Match the item identifier and overall construction", paragraphs: [
        "Look for a visible item label, model marking, packaging code or other identifier when the category normally includes one. Compare the overall product type, panel layout, closure, pockets and major components with the order reference. A similar colour or silhouette does not establish identity. If the product has no visible identifier, state that identity is based on construction and selected options rather than pretending certainty.",
        "Be careful with seller images that combine multiple versions. Compare the warehouse item with the exact selected variation, not the most attractive gallery image. If a major construction detail differs—such as a pullover instead of a zip closure, a different sole unit or missing pocket—the result fails identity before cosmetic inspection begins."
      ] },
      { short: "Confirm options", heading: "3. Confirm color, size and version as separate fields", paragraphs: [
        "Check the colour name in the order record and then compare the warehouse photographs under consistent lighting. Camera white balance, reflections and screen settings can shift colour, so use obvious mismatches rather than tiny shade differences as the first decision. Packaging or tags may provide a colour code that is more reliable than visual comparison when that code also appears in the selected option.",
        "Read the size tag and any version label independently. A correct size with the wrong version is not a pass. If the listing uses batch, material or trim variations, reproduce that label exactly in the QC record. Do not translate it into an unverified hierarchy such as premium or budget. When a label is hidden, request one targeted photograph of that label if it can resolve the decision."
      ] },
      { short: "Read measurements", heading: "4. Evaluate measurements only when the method is visible", paragraphs: [
        "A measurement photograph should show the starting point, tape path and endpoint. For garments, compare the same flat measurement points used by the seller chart and by a garment that fits. For shoes, distinguish foot-length guidance from actual insole length. For bags, note whether width is measured at the base, opening or widest point. A number without method is easy to misread.",
        "Allow for reasonable photographic limitations, but do not invent a tolerance when the seller or platform has not stated one. If the result sits near a personal cutoff, request a clearer measurement rather than rounding it toward the preferred answer. Measurements reduce fit uncertainty; they do not prove comfort, drape or how a material behaves after use."
      ], checklist: ["Tape begins at the intended reference point", "Tape remains flat and readable", "Method matches the seller chart", "Personal comparison uses the same measurement method"] },
      { short: "Inspect by category", heading: "5. Apply a short category-specific construction check", paragraphs: [
        "For clothing, inspect front and back alignment, seams, print or embroidery placement, closures and obvious marks. For shoes, compare pair symmetry, toe and heel shape, stitching and sole attachment. For bags, check dimensions, hardware finish, zip alignment, handles and interior construction. A fixed universal list either misses important category risks or creates noise from irrelevant details.",
        "Review photographs at normal scale before zooming into potential defects. Compression and sharpening can create edges that are not present on the item. Compare repeated elements within the same image, such as left and right embroidery or paired hardware, because lighting conditions are shared. Escalate only defects that are visible, localised and relevant to the final decision."
      ] },
      { short: "Make the decision", heading: "6. Approve, reject or request one targeted clarification", paragraphs: [
        "Approve when identity and selected options match and the category checklist shows no visible issue that crosses your decision threshold. Reject when the wrong item, option or substantial visible defect is already established. Request clarification only when one missing view or measurement can separate those outcomes. A vague request for more photos often adds time without producing better evidence.",
        "Write the reason in neutral, observable language: size tag shows M while order record shows L; left heel appears lower in the straight rear view; measurement endpoint is hidden. Avoid claims about authenticity, seller intent or future durability that the images cannot support. A precise record helps customer service understand the issue and helps you apply the same standard to later orders."
      ] }
    ],
    decisionTitle: "QC approval record",
    decision: [
      "Record the product identifier, selected colour, size and version, the QC photo set date, category checklist outcome, any measurement evidence and the final action. Link the reason to a specific image or visible field rather than a general feeling.",
      "A clean QC review is evidence about the visible warehouse item, not a promise of authenticity or lifetime performance. Keep shipping and packaging as a later parcel decision so an attractive route price does not influence whether the product itself passes.",
      "When several people review the same item, use the same ordered checklist and visible thresholds. Consistency matters more than adding dozens of vague criteria: it makes approvals explainable and exposes when a decision changed because new evidence arrived."
    ],
    nextTitle: "Use the compact QC checklist",
    nextCopy: "Move from identity to options, measurements and category-specific visible checks.",
    nextHref: "/qc/",
    nextLabel: "Open QC checklist"
  },
  {
    slug: "hipobuy-spreadsheet-hoodies",
    title: "HipoBuy Spreadsheet Hoodies: Measurements, Sizing and QC Checks",
    metaTitle: "HipoBuy Spreadsheet Hoodies: Size & QC Guide (2026)",
    description: "Find hoodies in the HipoBuy spreadsheet, compare garment measurements, verify closures and options, and review print, embroidery, seams and shape in QC photos.",
    kicker: "HOODIES / SIZE + QC",
    readTime: 10,
    lead: "Hoodie sizing works best when chest width, body length and sleeve method are compared directly—not when an S, M or L label is treated as universal.",
    intro: [
      "A HipoBuy spreadsheet can narrow hoodie discovery by colour, closure, graphic style and category. It cannot determine fit from the label or show how the received garment compares with the seller’s chart. Hoodies that look almost identical in a thumbnail may use different cuts, fabric claims, pocket construction or measurement conventions.",
      "The useful workflow is to describe the garment precisely, shortlist live listings, compare measurements with a hoodie that already fits, preserve the selected variation and inspect the warehouse item against that record. Each stage removes a different risk. Combining them into a single judgement such as looks good makes errors harder to explain and correct.",
      "Decide the intended use before choosing a size. A hoodie worn over a T-shirt may need less room than one used as a mid-layer over another sweatshirt, while a cropped style makes body length a harder limit. Write that use beside the reference measurements. This prevents a fashionable silhouette in seller photographs from silently replacing the fit requirement that started the search."
    ],
    sections: [
      { short: "Define the hoodie", heading: "1. Search by closure, cut and visible design", paragraphs: [
        "Start with hoodie or zip hoodie, then add one observable discriminator such as two-way zip, pullover, oversized, cropped, plain, embroidered or small front print. Use cut terms only when the listing provides enough images or measurements to support them. Marketing words such as luxury, perfect and top quality do not narrow the object in a testable way.",
        "Open several current pages and confirm the closure, pocket layout, hood construction and graphic placement. A low headline price may belong to a different colour or accessory, so select the intended variation before comparing. If the spreadsheet image shows a back graphic but the live page no longer offers it, treat the row as changed even if a plain version remains."
      ], checklist: ["Pullover or zip closure identified", "Cut term supported by images or chart", "Pocket and graphic layout match", "Price checked on intended variation"] },
      { short: "Measure a reference", heading: "2. Measure a hoodie you already wear", paragraphs: [
        "Lay a comfortable hoodie flat without stretching it. Record chest width from the points used in the seller diagram, body length from the stated shoulder or collar reference, shoulder width if supplied, and sleeve length using the same start point. A raglan sleeve cannot be compared directly with a set-in sleeve measurement unless the chart explains the method.",
        "Write the acceptable range for each measurement rather than chasing the same letter size. Decide which dimensions are non-negotiable. Chest width may control layering space, while body length may matter more for a cropped or long cut. This reference converts an abstract size chart into a comparison grounded in a garment whose fit you understand."
      ] },
      { short: "Read the chart", heading: "3. Compare chart values and option labels carefully", paragraphs: [
        "Check whether the chart lists garment measurements or body measurements. If the heading is unclear, do not assume. Compare all important dimensions because two sizes can increase unevenly. A larger chest does not guarantee longer sleeves, and an oversized description does not establish a specific amount of ease. Preserve the chart screenshot with the date and selected size.",
        "Translate colour and version labels separately from size. One listing can place different fabric weights, linings or graphic variants under similar thumbnails. Record the seller’s exact material and weight wording as a claim, not as a measured fact. When options are contradictory, choose a clearer listing or leave a precise note instead of resolving the ambiguity from the main photograph."
      ] },
      { short: "Verify the item", heading: "4. Match size, colour, closure and graphic in QC photos", paragraphs: [
        "Begin with the size tag and overall colour, allowing for lighting differences. Confirm pullover versus zip construction, zip direction when relevant, pockets, drawcords and the presence and placement of the selected graphic. Compare the front and back separately. A correct graphic on the wrong colour or size is still an option failure.",
        "If warehouse measurements are provided, read the tape endpoints and use the same method as your reference garment and seller chart. Do not invent a tolerance to make a borderline result pass. When the tape is curved or a start point is hidden, request a clearer targeted measurement only if that dimension changes the approval decision."
      ], checklist: ["Visible tag matches selected size", "Colour and version match order record", "Closure and pockets are correct", "Measurements use the same reference points"] },
      { short: "Inspect construction", heading: "5. Check seams, print, embroidery and hoodie shape", paragraphs: [
        "Review shoulder and side seams, cuffs, waistband, pocket alignment and zip path. Look for obvious twisting, skipped stitching, loose sections or marks. Compare repeated elements within the same photograph. For a graphic, inspect placement relative to seams and centre lines, edges, missing areas and visible cracking. For embroidery, check outline consistency and obvious loose threads without treating image compression as a defect.",
        "The hood should appear balanced and attached evenly, but soft fabric can fold differently between photographs. Ask for a straight, laid-flat view when shape is genuinely unclear. Warehouse images cannot prove fabric composition, exact weight, colour in every light or how the garment will change after washing. Keep those limitations in the decision rather than converting a clean photograph into a broad quality guarantee."
      ] },
      { short: "Plan the parcel", heading: "6. Account for fabric bulk and packaging", paragraphs: [
        "A thick or fleece-lined hoodie can occupy significant parcel space even when its scale weight seems moderate. International shipping may consider dimensions on some routes, so product price and a rough garment weight cannot predict delivered cost. Wait for warehouse data and compare actual and volumetric inputs using the live route options for the destination.",
        "Compression or simplified packaging may reduce volume, while protective packaging or consolidation changes the final parcel. Consider whether a graphic, structured hood or decorative hardware needs extra protection. Review restrictions and included services for the route, and keep the shipping choice separate from the QC outcome. A cheaper line should not persuade you to approve the wrong size."
      ] }
    ],
    decisionTitle: "Hoodie decision sheet",
    decision: [
      "Record closure, colour, graphic or version, selected size, seller chart, measurements from a reference hoodie, warehouse tag and measurements, visible QC outcome and parcel notes. The record should show which facts came from the listing and which were observed in QC photos.",
      "Choose the size from comparable measurements, not a universal label conversion. Approve the warehouse item only after identity and construction checks. Treat composition, warmth, durability and post-wash behaviour as unknown unless reliable evidence beyond photographs supports them.",
      "If two sizes are both plausible, document the tradeoff instead of presenting one as certain. A wider chest may improve layering but change sleeve or body proportions. The chart and reference garment support a preference; they do not guarantee an identical on-body result."
    ],
    nextTitle: "Browse hoodie listings",
    nextCopy: "Shortlist live pages, save each chart and compare the same measurement points.",
    nextHref: "https://cnfanssp.com/hoodies-sweaters/",
    nextLabel: "Open hoodies"
  },
  {
    slug: "hipobuy-spreadsheet-jerseys",
    title: "HipoBuy Spreadsheet Jerseys: Sizing, Versions and Print QC",
    metaTitle: "HipoBuy Spreadsheet Jerseys: Sizing & Print QC (2026)",
    description: "Search HipoBuy spreadsheet jerseys, separate player and fan versions, verify nameset and size options, and inspect badges, prints, seams and measurements.",
    kicker: "JERSEYS / VERSION + PRINT",
    readTime: 10,
    lead: "A jersey listing can combine seasons, fits, badges, player names and custom print options under one page. Record the exact configuration before judging the warehouse item.",
    intro: [
      "Jerseys create a dense option problem. A spreadsheet thumbnail may show one team, colour and nameset while the live page offers several seasons or versions. The same size label can fit differently across cuts, and customised print adds another field that must be checked character by character. Discovery is therefore only the first part of the process.",
      "A reliable jersey review separates product identity, version, size, personalisation and visible construction. This avoids approving a visually attractive shirt that does not match the ordered configuration. It also prevents a seller’s marketing label from being treated as proof of material, authenticity or on-body fit.",
      "Build a plain-text configuration line before ordering, for example: design, colour, adult or youth, version, sleeve, size, player name, number and badges. Compare that line with the cart and order confirmation. A compact record is more dependable than a gallery screenshot alone because it exposes a missing option even when the photograph looks broadly correct."
    ],
    sections: [
      { short: "Define the version", heading: "1. Search with season, colour and version only when supported", paragraphs: [
        "Begin with jersey plus a team, country or other lawful identifying description, then add season, home or away colour, long sleeve or a visible version term when the page supports it. Do not fill the query with claims such as authentic quality or exact replica. Search terms should identify the object, not decide authenticity or quality before inspection.",
        "Open multiple pages and compare collar, panel layout, trim, sponsor placement and available options. A listing may use the same gallery for fan and player-style cuts, youth and adult sizes, or several seasons. Select the intended variation before comparing the source price. If a season or design no longer appears, classify the spreadsheet row as changed."
      ], checklist: ["Season or design identified", "Home, away or alternate colour recorded", "Adult, youth or other cut confirmed", "Sleeve and version options selected"] },
      { short: "Separate fit types", heading: "2. Treat fan, player-style and youth sizing as different charts", paragraphs: [
        "Do not transfer a size choice between versions just because both use S, M or L. A closer cut can have different chest width, length and sleeve shape. Youth sizing may use height or age guidance that is not comparable with adult labels. Save the chart attached to the exact version and confirm that changing the version selector does not silently change the chart.",
        "Measure a jersey or lightweight shirt that fits, using the seller’s chest and length reference points. Decide whether the garment will be worn over another layer and include that in the preferred measurement range. Labels are useful only after the chart has been matched to the selected version. If the chart is missing or internally inconsistent, a different listing may be safer."
      ] },
      { short: "Record printing", heading: "3. Capture badge, nameset and custom text choices exactly", paragraphs: [
        "List every selected print element: player name, number, competition badge, sponsor option and any custom text. Preserve capitalisation, spacing and digits. If the seller provides a separate customisation field, take a screenshot of the submitted value. Never rely on a generic gallery image to represent the final combination.",
        "Check whether personalisation changes return or after-sales options in the live platform workflow. Do not assume a customised item can be handled like an unprinted one. When a listing combines included and paid badges, confirm the price after all intended options are selected. The spreadsheet’s reference price cannot represent every custom configuration."
      ] },
      { short: "Match the order", heading: "4. Verify colour, version, size and nameset before cosmetic QC", paragraphs: [
        "In the warehouse set, start with the overall design and colour, then read the size tag and compare collar, sleeve and panel construction with the selected version. Confirm each personalisation field separately. A correct name with the wrong number is not a pass, and a correct front does not establish that the back configuration is right.",
        "Use straight photographs to inspect print placement relative to centre lines and seams. Perspective can make one side look lower, so compare the garment when laid flat. If a character, badge or number is hidden by a fold, request a targeted flat view. Keep the request focused on the exact information needed for approval."
      ], checklist: ["Design and selected version match", "Size tag is visible", "Name and number checked character by character", "All ordered badges and sponsor options present"] },
      { short: "Inspect print QC", heading: "5. Review badges, heat transfers, embroidery and seams", paragraphs: [
        "Inspect print edges for missing areas, obvious lifting, major creases or contamination. Check badges for placement, orientation and visible edge problems. Embroidered elements should have coherent outlines without obvious gaps or long loose threads. Compression and lighting can create false texture, so use more than one photograph before escalating a subtle surface concern.",
        "Review collar symmetry, sleeve joins, side seams and hem shape. Lightweight fabric can shift when laid down, so distinguish a fold from a twisted seam. Warehouse photographs can show visible construction but cannot prove how transfers survive washing, the exact fibre content, breathability, authenticity or future colourfastness. Those remain outside the photograph’s evidence."
      ] },
      { short: "Package carefully", heading: "6. Protect prints while planning a consolidated parcel", paragraphs: [
        "Jerseys are usually compact, but namesets and transfers can be affected by sharp folds, heat or pressure. Review the platform’s available packaging choices and avoid inventing a universal method. If several printed garments are consolidated, consider how they will be folded and separated. Extra protection can increase weight or volume, so assess it with the actual parcel.",
        "Compare current routes using destination, packed weight, dimensions and restrictions. The official app listing describes broad international shipping availability, but that does not guarantee a particular route or time for a customised jersey. Use the live options presented for the completed parcel and follow destination rules for declarations and taxes."
      ] }
    ],
    decisionTitle: "Jersey decision sheet",
    decision: [
      "Record season or design, colour, version, selected size and chart, all personalisation text, badges, warehouse tag, print and seam findings, and the final action. Attach the order-time screenshot so the QC set is compared with the actual configuration.",
      "Approve only when identity and custom fields match before evaluating finish. Request a targeted flat image when a fold hides decisive evidence. Avoid claims about authenticity or long-term print durability that warehouse images cannot establish.",
      "Keep the uncustomised base garment and the added print decision conceptually separate. A correct shirt with incorrect personalisation still fails the selected configuration, while a perfect nameset cannot compensate for the wrong size, colour or version."
    ],
    nextTitle: "Browse jersey listings",
    nextCopy: "Compare live versions and charts before adding names, numbers or badge options.",
    nextHref: "https://cnfanssp.com/jersey/",
    nextLabel: "Open jerseys"
  },
  {
    slug: "hipobuy-spreadsheet-price-delivered-cost",
    title: "HipoBuy Spreadsheet Price vs Delivered Cost: What the Listed Price Excludes",
    metaTitle: "HipoBuy Spreadsheet Price vs Delivered Cost (2026)",
    description: "Understand what a HipoBuy spreadsheet price can and cannot show, then compare product, domestic delivery, service, exchange, packaging and international shipping inputs.",
    kicker: "PRICE / DELIVERED COST",
    readTime: 11,
    lead: "The number beside a spreadsheet row is a discovery reference. Delivered cost is a later calculation built from the selected variation, current platform charges and the packed international parcel.",
    intro: [
      "A low product price attracts clicks because it is simple and visible. The final cost is neither. It may include the selected marketplace variation, domestic delivery to a warehouse, currency conversion, platform services, optional inspection or packaging and international shipping. Destination taxes or duties can also apply under local rules. Treating the first number as the final one creates a comparison that favours incomplete information.",
      "The solution is not to invent a universal fee percentage. Rates, routes, exchange conditions and parcel data change. Instead, build a cost ledger with separate fields and timestamps. This preserves what was observed and makes two candidates comparable even when one seller uses a lower item price but different domestic delivery, packaging or size.",
      "Choose one comparison currency but retain every original amount. Converting all inputs for display is useful; discarding the source currency is not. If the platform’s final charge differs from a reference conversion, the ledger should show whether the change came from the selected variation, exchange method, a service, domestic delivery or shipping rather than attributing everything to an unexplained fee."
    ],
    sections: [
      { short: "Read the row price", heading: "1. Identify what the spreadsheet price actually represents", paragraphs: [
        "Check whether the row shows a source-currency amount, a converted reference or a price captured from a specific variation. The lowest number on a multi-option listing may belong to an accessory, deposit, sample or smaller configuration. Select the intended colour, size and version on the live page before recording the current product price.",
        "Add the observation date and source currency. A converted USD value is helpful for browsing but can change with exchange rates and platform conversion methods. Do not describe it as guaranteed checkout price. If the spreadsheet and live listing differ, keep both timestamps and use the current selected-variation price for the purchasing decision."
      ], checklist: ["Intended variation selected", "Source currency recorded", "Reference conversion labelled", "Observation date saved"] },
      { short: "Add domestic costs", heading: "2. Separate marketplace price from delivery to the warehouse", paragraphs: [
        "Some seller pages include domestic delivery while others add it later or vary it by warehouse region. Capture the amount shown in the current checkout workflow instead of assuming free domestic shipping. If the platform presents a service or purchasing charge, store it as another line rather than blending it into an unexplained product total.",
        "Optional services also belong in their own fields. Targeted extra photographs, detailed measurements, handling choices or other options should be counted only when actually selected and currently priced. A comparison that adds hypothetical services to one product and not another is misleading. Use the same service assumptions across candidates or show the difference explicitly."
      ] },
      { short: "Wait for parcel data", heading: "3. Do not estimate international shipping from product price", paragraphs: [
        "International shipping depends on the destination and packed parcel, not on the marketplace price. Actual scale weight is only one input. Some routes use a volumetric or size-based calculation, and bulky packaging can make a light item more expensive than expected. Restrictions can remove routes that appear in generic examples.",
        "Wait for warehouse measurements and the set of items you will actually ship. Consolidation may change repeated base costs, while a larger combined parcel can change available routes or dimensional impact. Compare the live shipping options after packaging choices are applied. Avoid copying another buyer’s rate unless destination, date, parcel and service are genuinely comparable."
      ] },
      { short: "Model packaging", heading: "4. Treat packaging as both protection and a cost input", paragraphs: [
        "Retail boxes, structured bags and thick garments can increase volume. Removing packaging may reduce size, but it can also reduce protection or discard labels you value. Reinforcement, corner protection or extra wrapping can add both weight and dimensions. List each choice and recalculate with the platform’s current estimate rather than assuming it always saves money.",
        "Consider the product-specific risk. Compressing an ordinary soft garment is different from compressing structured shoes, hardware or a graphic that could crease. There is no universal optimum. The decision should show the cost change, protection tradeoff and route availability for the current parcel."
      ], checklist: ["Actual weight captured", "Parcel dimensions captured", "Retail packaging choice recorded", "Reinforcement or compression included in estimate"] },
      { short: "Compare routes", heading: "5. Compare included services and constraints, not only the lowest number", paragraphs: [
        "For each available route, record chargeable basis, displayed price, estimated range, tracking, coverage or insurance terms, restrictions and any maximum dimensions. A cheaper headline may exclude a service that matters or may not accept the parcel contents. Route names and conditions can change, so use the live platform presentation for the current date and destination.",
        "Delivery estimates are not guarantees. Customs processing, peak periods, weather and local delivery can affect timing. The official HipoBuy app listing advertises international service across more than 200 countries and delivery as fast as five days, but those are platform-wide statements. They do not promise that speed, price or route for an individual parcel."
      ] },
      { short: "Include destination rules", heading: "6. Keep taxes, duties and declarations outside the marketing total", paragraphs: [
        "Destination taxes and duties depend on local rules, product classification, declared information and current thresholds. Use truthful declarations and consult the current official guidance for the destination. Do not follow a universal declaration value from an article or social post. A number that worked for another parcel may be unlawful or unsuitable for yours.",
        "When comparing delivered-cost scenarios, show destination charges as unknown until they can be determined reliably. This is more honest than hiding them in a confident final number. Also keep refund, return or after-sales risk separate: a cheap product can become expensive if a wrong variation cannot be resolved before international shipping."
      ] }
    ],
    decisionTitle: "Delivered-cost ledger",
    decision: [
      "Use rows for selected product price, domestic delivery, platform or selected service charges, currency conversion, optional inspection, packaging, international route and known destination charges. Give every value a currency and timestamp. Mark estimates and unknowns clearly.",
      "Compare alternatives under the same assumptions. The purpose is not to predict an exact future bill from a spreadsheet; it is to reveal which inputs are confirmed, which can still change and which decision—variation, packaging or route—caused the difference.",
      "Save at least three totals when useful: item-to-warehouse, warehouse-ready and international parcel. That staging shows where uncertainty remains and prevents the final shipping charge from being mistaken for a product-level price difference."
    ],
    nextTitle: "Plan the parcel with current inputs",
    nextCopy: "Compare actual weight, dimensions, packaging and route terms after warehouse arrival.",
    nextHref: "/shipping/",
    nextLabel: "Shipping guide"
  },
  {
    slug: "hipobuy-spreadsheet-jackets",
    title: "HipoBuy Spreadsheet Jackets: Size, Material and Packaging Checks",
    metaTitle: "HipoBuy Spreadsheet Jackets: Size & QC Guide (2026)",
    description: "Find jackets in the HipoBuy spreadsheet, compare garment measurements and material claims, inspect zips, lining, seams and shape, then plan bulky packaging.",
    kicker: "JACKETS / SIZE + PACKING",
    readTime: 10,
    lead: "Jackets combine fit, construction, material claims and parcel volume. A good shortlist records each field separately before comparing price or choosing packaging.",
    intro: [
      "A jacket thumbnail communicates style quickly but hides many of the details that decide fit and shipping: chest and shoulder measurements, lining, insulation, closure hardware, hood construction and packed volume. Similar-looking listings may describe different materials or use the same letter size for very different garment dimensions.",
      "Use the HipoBuy spreadsheet to discover candidates, then move to evidence on the live page. Save the exact version and chart, compare measurements with a jacket that fits, and inspect the warehouse item using a construction checklist. Plan shipping only after the jacket’s actual packed weight and dimensions are available.",
      "Define the weather and layering job in ordinary terms without converting it into an unsupported performance claim. A light outer layer for mild rain, an insulated casual jacket and a shell intended for active use create different fit and evidence requirements. This brief helps you reject a listing whose styling matches but whose visible construction, lining or measurements do not fit the intended use."
    ],
    sections: [
      { short: "Search by jacket type", heading: "1. Use the jacket type and visible construction in the query", paragraphs: [
        "Start with a concrete type such as puffer jacket, shell jacket, bomber, coach jacket, parka or zip overshirt. Add one feature that can be checked: hooded, quilted, two-way zip, snap front or lined. Avoid unsupported performance terms such as waterproof or technical unless the source provides a specific claim and evidence appropriate to it.",
        "Open several listings and compare silhouette, closure, pocket count, hood, cuffs and hem. Confirm that the live page still offers the version shown in the spreadsheet. Select the intended colour and construction before comparing price; an unlined or accessory variation can make the headline number look artificially low."
      ], checklist: ["Jacket type is specific", "Closure and hood recorded", "Lined or unlined version selected", "Live option matches the row image"] },
      { short: "Measure for layers", heading: "2. Compare jacket measurements with the layers you expect to wear", paragraphs: [
        "Measure a jacket that fits in a similar use case. Record flat chest width, shoulder width, body length and sleeve length using the seller’s illustrated points. If the new jacket will be worn over a hoodie, use a reference jacket that already accommodates that layer. Body measurements alone do not show the finished garment ease unless the chart explains how to use them.",
        "Raglan sleeves, dropped shoulders and padded construction can use different measurement methods. Do not compare numbers with different start points. Decide which dimensions are hard limits and which are preferences. A larger tagged size may add chest width without enough sleeve or body length, so evaluate the whole row of measurements."
      ] },
      { short: "Handle material claims", heading: "3. Record material and performance language as seller claims", paragraphs: [
        "Copy the fibre, lining, fill and coating description from the current source page with its date. Translate carefully and keep the original wording when a term is ambiguous. A product photograph cannot confirm fibre composition, fill percentage, waterproof rating or breathability. Do not upgrade leather-look to leather or water-resistant language to waterproof.",
        "If a claimed feature is essential, look for a specific specification or test standard on the live page and decide whether it is sufficient. Otherwise mark the feature unknown and choose based on visible construction and measurements. This prevents a broad marketing phrase from carrying more weight than the evidence."
      ] },
      { short: "Match the variation", heading: "4. Verify colour, size, lining, hood and closure in QC photos", paragraphs: [
        "Start with the size tag and overall colour, allowing for camera lighting. Confirm the selected lining or insulation version, detachable or fixed hood, main closure, pockets and any removable components. Photograph sets should show front and back and, where relevant, the inside. A clean exterior does not establish that the selected lining or internal pocket is present.",
        "Read measurement photos using the same points as the chart and reference garment. Thick padding can make flat measurement difficult, so use the clearest available evidence without pretending to greater precision than the image supports. If one critical field is hidden, request a targeted photo of that label, interior or measurement."
      ], checklist: ["Size tag and colour match", "Lining or fill version matches", "Hood and removable parts present", "Closures and pockets correspond to listing"] },
      { short: "Inspect construction", heading: "5. Review zips, snaps, lining, seams and overall shape", paragraphs: [
        "Inspect the main zip path, pullers, snaps and pocket closures for visible alignment and missing parts. Check shoulder, side and panel seams, cuff construction, hem and lining attachment. Quilted or padded jackets should have a generally coherent fill distribution, while acknowledging that compression during packing can temporarily change loft and shape.",
        "Look for obvious stains, tears, skipped stitching or damaged hardware. Compare symmetrical features within the same photograph. Warehouse images cannot prove a zip’s long-term durability, weather performance, exact warmth or material composition. Use neutral language about what is visible and avoid turning a tidy image set into a total quality or authenticity judgement."
      ] },
      { short: "Model parcel volume", heading: "6. Plan packaging around bulk and construction", paragraphs: [
        "Puffer and insulated jackets may occupy much more volume than their weight suggests. Some routes use dimensional inputs, so the final packed size can materially affect cost. Compression may reduce volume, but consider whether the garment, coating, hardware or shape could be affected and what packaging services the platform currently offers.",
        "A shell or light overshirt may need less space, while structured collars and decorative hardware may need protection. Compare scenarios only after warehouse data is available. Record actual weight, dimensions, packaging choice, chargeable basis and current route terms. Do not infer delivered cost from the spreadsheet product price."
      ] }
    ],
    decisionTitle: "Jacket decision sheet",
    decision: [
      "Record jacket type, colour, lining or fill version, size chart, reference garment measurements, material claims, warehouse tag and measurements, visible construction outcome and packaging scenario. Separate seller claims from observations in the QC set.",
      "Approve based on matching identity, fit evidence and visible construction. Treat weather performance, exact composition, warmth and long-term hardware durability as unknown unless supported by evidence beyond ordinary photographs. Recalculate shipping after any compression or reinforcement choice.",
      "When a material or performance feature is decisive but unsupported, do not let a low price close the gap. Choose a listing with clearer specifications, ask through the normal platform channel, or mark the candidate unsuitable for that specific job."
    ],
    nextTitle: "Browse jacket listings",
    nextCopy: "Compare exact versions and measurement charts before evaluating material claims or parcel cost.",
    nextHref: "https://cnfanssp.com/jackets/",
    nextLabel: "Open jackets"
  }
];

export const articleBySlug = new Map(articles.map(article => [article.slug, article]));
