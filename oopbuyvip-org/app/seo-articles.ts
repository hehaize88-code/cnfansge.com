export const articleSlugs = [
  "oopbuy-spreadsheet-guide",
  "oopbuy-qc-checklist",
  "oopbuy-shipping-planning",
  "oopbuy-fees-total-cost",
  "is-oopbuy-legit-review",
] as const;

export type ArticleSlug = (typeof articleSlugs)[number];

export type ArticleSource = {
  label: string;
  note: string;
  kind?: "official" | "customer";
  checked?: string;
  reference?: string;
};

export type Article = {
  title: string;
  eyebrow: string;
  description: string;
  read: string;
  updated: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources: ArticleSource[];
};

const officialGuide = {
  label: "OOPBuy Beginner's Guide",
  note: "Official ordering, warehouse, parcel submission and storage workflow.",
  kind: "official" as const,
  checked: "1 September 2026",
  reference: "m.oopbuy.com/pages/article-details/index?id=1739829963819945985",
};

const officialAgreement = {
  label: "OOPBuy User Registration Agreement",
  note: "Official service scope and responsibilities; its indexed text ties an 8% platform service fee to shipping cost.",
  kind: "official" as const,
  checked: "1 September 2026",
  reference: "m.oopbuy.com/notice/1772892211576897537",
};

const officialReturns = {
  label: "OOPBuy Returns and Refunds",
  note: "Official return and exchange request window after warehouse stock-in.",
  kind: "official" as const,
  checked: "1 September 2026",
  reference: "m.oopbuy.com/notice/1740656181012172801",
};

const officialEstimator = {
  label: "OOPBuy Shipping Estimation",
  note: "Official destination- and parcel-dependent route estimator.",
  kind: "official" as const,
  checked: "1 September 2026",
  reference: "oopbuy.com · live shipping estimation tool",
};

const officialServiceFees = {
  label: "OOPBuy Service & Fees",
  note: "Official page saying no other charges apply beyond product, international shipping, customs clearance and selected value-added services.",
  kind: "official" as const,
  checked: "1 September 2026",
  reference: "m.oopbuy.com/notice/1740653781924810754",
};

const officialGooglePlay = {
  label: "OOPBuy Google Play listing",
  note: "Current official app description says purchasing, warehousing and shipping are offered with no service fee.",
  kind: "official" as const,
  checked: "1 September 2026",
  reference: "play.google.com/store/apps/details?id=com.oopbuy.oopbuy",
};

export const englishArticles: Record<ArticleSlug, Article> = {
  "oopbuy-spreadsheet-guide": {
    eyebrow: "OOPBuy spreadsheet guide",
    title: "How to Use an OOPBuy Spreadsheet as a Buying Checklist, Not a Promise",
    description: "A practical, evidence-led method for moving from an OOPBuy spreadsheet row to a live listing, warehouse QC decision and realistic parcel budget.",
    read: "12 min read",
    updated: "1 September 2026",
    sections: [
      {
        heading: "What an OOPBuy spreadsheet can—and cannot—do",
        paragraphs: [
          "An OOPBuy spreadsheet is most useful as a discovery index. It can organize product routes by category, preserve an item ID, show a reference price and place a likely weight beside the listing. Those fields reduce search time, but none of them proves that the seller still has the same stock, that every color uses the same material, or that the final parcel will be inexpensive. A spreadsheet row is therefore a lead to investigate. It is not a certificate of quality, authenticity, availability or delivery.",
          "This distinction matters because shopping-agent purchases involve several separate decisions. First you choose a seller listing. Then OOPBuy purchases or receives the item, the warehouse records it, QC images become available, and you decide whether to keep, return or ship it. Finally you select an international route using the parcel's measured information. A good spreadsheet supports that sequence. A weak one tries to replace it with a large product count and vague words such as verified or best.",
          "Use the list category by category. Shoes, hoodies, electronics and accessories have different size risks, packaging needs and QC priorities. Comparing three similar items is usually more informative than opening thirty unrelated tabs. Record why each item made the shortlist: current price, useful photos, a clear size chart, a known material or a manageable stated weight. If you cannot write a specific reason, the row is probably noise rather than a serious candidate."
        ],
      },
      {
        heading: "Open the live item route before you compare prices",
        paragraphs: [
          "Seller pages change. A price visible in a spreadsheet may apply only to the cheapest option, an old promotion or a small accessory rather than the pictured product. Open the current route and match the channel, item ID, selected color, size, version and seller description. If a page redirects, shows a different item or removes the option you wanted, treat the spreadsheet entry as expired until it is reviewed again.",
          "Do not compare products by converted USD price alone. Keep the original CNY amount visible and note when you checked it. Currency conversion, options and platform exchange-rate handling can all change the displayed total. OOPBuy's public fee statements checked on 1 September 2026 conflict: the registration agreement ties an 8% platform service fee to shipping cost, Service & Fees says there are no other charges beyond its listed categories, and the current Google Play description says no service fee. A spreadsheet should flag that conflict and send the buyer back to the current agreement, live checkout and written support confirmation instead of applying one fixed percentage.",
          "A useful row contains a source ID, category, exact option, source price, stated domestic shipping if visible, weight clue, date checked and a short risk note. For example, a shoe with a rigid box deserves a packaging note; an electronic item needs voltage and connector checks; a garment needs a measurement plan. That context is more valuable than an unexplained score. It also makes future maintenance easier because an editor can see what needs to be rechecked."
        ],
      },
      {
        heading: "Build a total-cost range before placing the order",
        paragraphs: [
          "The product price is only the first layer. A realistic plan can include the seller price, domestic delivery to the OOPBuy warehouse, every fee actually shown in the current checkout, optional warehouse services, return or exchange costs, international freight, payment or currency-conversion effects and possible destination taxes. Not every order pays every layer, but ignoring them produces the familiar situation in which a cheap find becomes an expensive parcel.",
          "Make a low and high estimate instead of pretending one number is exact. The low case can use the stated item weight and minimal packaging. The high case should allow for a heavier warehouse measurement, rigid packaging, volume-based charging or a less favorable route. OOPBuy provides an official shipping estimator, but its result depends on destination and parcel data. Before warehouse measurement, it is a planning tool rather than a guaranteed invoice.",
          "The biggest spreadsheet improvement is often a landed-cost column with a confidence label. Mark source prices as current, weights as seller-stated or warehouse-measured, and shipping as pre-order estimate or live parcel quote. This prevents unlike numbers from being treated as equally reliable. It also lets readers compare two items on total purchasing risk rather than choosing the lowest headline price."
        ],
      },
      {
        heading: "Treat warehouse QC as the real decision gate",
        paragraphs: [
          "OOPBuy's official workflow describes inspection after an item reaches the warehouse, and product pages advertise QC photos after stock-in. Start by confirming identity: color, size label, option, quantity and major design features. Then inspect overall shape, symmetry, seams, edges, closures, prints and obvious damage. A visually attractive listing image is irrelevant if the warehouse item does not match the option ordered.",
          "QC images have limits. They can show visible defects and mismatches, but they cannot prove long-term durability, exact material composition, internal electronic performance or authenticity. Lighting and lens angle can also change apparent color and proportion. If a measurement or detail is essential and not visible, use the current platform options to request the evidence before approving the item for shipment.",
          "Timing matters. OOPBuy's published return and refund guidance says return or exchange requests submitted within five days after stock-in are handled under its standard procedure. Seller acceptance, shipping costs and service charges can still affect the outcome. That makes the warehouse review a time-sensitive task. Put the stock-in date and review deadline beside the spreadsheet row rather than leaving the item untouched until parcel day."
        ],
      },
      {
        heading: "Use storage and consolidation deliberately",
        paragraphs: [
          "OOPBuy's beginner material and platform-protection page currently describe 90 days of free warehouse storage. The practical benefit is not permission to forget an item for three months. It is time to receive related purchases, finish QC and create a coherent parcel. Check the current account rule because extended storage, disposal and value-added services may have separate conditions.",
          "Consolidation can reduce repeated base charges, but bigger is not automatically cheaper. Routes can have weight, dimension, product and destination restrictions. Bulky clothing, shoe boxes and protective packaging may increase chargeable volume. Group items only after they pass QC, then compare at least two plausible parcel plans. A lighter split can sometimes unlock a better route, while one consolidated package can sometimes reduce repeated fees.",
          "Update the spreadsheet after warehouse intake. Replace seller-stated weights with measured values where available, record QC status and mark return, hold or ship. This turns a static discovery sheet into a decision log. It also prevents the same uncertain product from being recommended repeatedly after new evidence shows a mismatch or unexpectedly high shipping impact."
        ],
      },
      {
        heading: "A repeatable OOPBuy spreadsheet workflow",
        paragraphs: [
          "Use this sequence: choose one category; shortlist three comparable listings; open every live route; confirm the exact option and item ID; calculate a total-cost range; place only the orders that still make sense; review QC immediately after stock-in; update weight and dimensions; decide return, hold or ship; then compare current routes in the official estimator. Each stage replaces an assumption with stronger evidence.",
          "The most trustworthy spreadsheet is not necessarily the largest. It is the one that reveals its limits, dates its checks, removes expired routes and separates source claims from warehouse facts. Readers should be able to see what is known, what is estimated and what still needs verification. That approach is slower than publishing thousands of unmaintained rows, but it is far more useful to a person making a real purchase decision.",
          "Finally, keep the directory independent from the transaction. Product discovery can happen here, but account balances, platform fees, policies, shipping routes and after-sales requests must be checked on the current service pages at the moment they matter. A spreadsheet should make that verification easier—not encourage anyone to skip it."
        ],
      },
    ],
    sources: [officialGuide, officialAgreement, officialServiceFees, officialGooglePlay, officialReturns, officialEstimator],
  },
  "oopbuy-qc-checklist": {
    eyebrow: "OOPBuy QC photos",
    title: "OOPBuy QC Photos: A Repeatable Warehouse Inspection Checklist",
    description: "How to review OOPBuy QC photos in the right order, identify missing evidence and make a return-or-ship decision within the published after-sales window.",
    read: "12 min read",
    updated: "1 September 2026",
    sections: [
      {
        heading: "What OOPBuy QC is designed to show",
        paragraphs: [
          "OOPBuy's platform-protection page advertises quality inspection after an item is received at the warehouse, and live product pages describe QC photos becoming available after stock-in. That creates an important checkpoint between the seller and international shipping. The photos can help confirm that a parcel arrived, that the visible item resembles the selected option and that obvious exterior problems are not ignored.",
          "QC is not the same as product certification. A warehouse image cannot reliably establish authenticity, fiber composition, waterproofing, battery health, long-term durability or hidden construction. Even visible color can shift under warehouse lighting. The useful question is not whether a photo proves that an item is good. It is whether the available views provide enough evidence for the specific decision you need to make.",
          "Prepare before the images arrive. Save the live listing, exact option, size chart, expected color and any measurement that matters. If you wait until stock-in and rely on memory, you are more likely to rationalize a mismatch. A simple expected-versus-observed note keeps the review objective."
        ],
      },
      {
        heading: "Step one: confirm identity before judging quality",
        paragraphs: [
          "Start with the order identity. Compare the item count, color, selected size, visible label, version and main design features with the live order. Check whether a pair is actually a matching pair and whether accessories shown in the seller description are present. A well-finished item is still wrong if the warehouse received a different variant.",
          "Keep the order page and QC gallery open side by side. Look for a consistent item or order reference if the interface provides one. When a listing has several visually similar options, write the defining difference before reviewing the photos. This reduces confirmation bias and makes an after-sales request easier to explain.",
          "If the package remains closed or a dust bag blocks the item, the images may not answer the identity question. Do not infer what is hidden. Use the current additional-photo or support route if available, especially when the missing view affects size, model compatibility or a time-limited return decision."
        ],
      },
      {
        heading: "Step two: inspect from large shapes to small details",
        paragraphs: [
          "Review the overall silhouette first. For shoes, compare the pair together: toe shape, heel height, left-right symmetry, sole edges and obvious glue or material problems. For clothing, look at body proportions, sleeve alignment, hems, collar shape, panel placement and twisting. For bags, examine structure, handles, closures and major hardware alignment before zooming into stitching.",
          "Then move to details that can reasonably be seen: seams, printed areas, edge finishing, zippers, buttons, loose threads, scratches, dents and stains. One isolated close-up should not override the full set. A camera angle can make one side appear longer, while a compressed garment can look misshapen until unfolded.",
          "Use neutral language in your notes. Write heel alignment appears uneven in rear view or ruler view is missing, rather than declaring an item perfect or unusable from one frame. Precise observations are more actionable for support and more honest for readers."
        ],
      },
      {
        heading: "Step three: measure what affects fit or compatibility",
        paragraphs: [
          "A size tag does not prove fit. Compare ruler images with a similar item you already own, using the same measurement points. For a garment, useful dimensions can include chest width, length, shoulder width, sleeve and waist. For shoes, insole length may be more practical than relying only on regional size labels. The exact measurement depends on the product and the evidence the platform can provide.",
          "Electronics and accessories need a different checklist. Confirm visible model number, plug or connector type, dimensions, included parts and obvious physical damage. Photos cannot prove internal performance, so decide whether the seller's return conditions and the product's value justify the remaining uncertainty.",
          "Write acceptable tolerances before opening the gallery. If a jacket must be at least a certain chest width or a case must fit a specific device, a prewritten threshold prevents wishful thinking. Missing a threshold is not proof of failure, but it is a reason to obtain better evidence before paying international freight."
        ],
      },
      {
        heading: "Use the five-day return window as a working deadline",
        paragraphs: [
          "OOPBuy's published returns guidance says standard return or exchange requests should be submitted within five days after warehouse stock-in. The user agreement also describes a five-day period for returns or exchanges where applicable. Seller policy, responsibility, domestic freight and service charges may still affect whether a request succeeds and what it costs.",
          "Treat the deadline as a review window, not a promise of a free return. Check stock-in notifications promptly, complete the QC review and file a clear request while the option is still open. Include the order reference, selected variant, the exact mismatch and the relevant photo. A concise factual explanation is more useful than a long emotional message.",
          "If the issue is merely a preference change, distinguish that from seller fault or an obvious mismatch. OOPBuy's published return-and-exchange information indicates that customer-responsible requests can involve shipping and service costs. Always confirm the current amount in the live after-sales screen."
        ],
      },
      {
        heading: "Make a documented return, hold or ship decision",
        paragraphs: [
          "End every QC review with one of three statuses: return, hold for evidence or approved for parcel planning. Return when the visible item clearly fails an essential requirement and the current policy route remains available. Hold when a decisive view or measurement is missing. Approve only when the visible evidence matches the order closely enough for your risk tolerance.",
          "Keep the QC record with the product route and warehouse weight. This makes later parcel planning easier and prevents an unreviewed item from being consolidated by accident. It also gives a spreadsheet editor a reason to retain, flag or remove a recommendation.",
          "The goal is not to create false certainty. It is to use the warehouse checkpoint efficiently. A careful reviewer acknowledges what the photos show, what they do not show and which remaining uncertainty belongs to the buyer, seller, platform or shipping route."
        ],
      },
      {
        heading: "Category-specific QC questions worth saving",
        paragraphs: [
          "For footwear, save questions about pair symmetry, outsole edges, heel alignment, toe shape, size marking and insole measurement. For clothing, focus on the selected color, label, chest width, length, sleeve, print placement, seam direction and visible staining. For bags and accessories, confirm dimensions, closure, hardware count, handle attachment and included pieces. These questions are observable; they do not ask a photo to prove origin or long-term performance.",
          "For electronics, separate appearance from function. A warehouse image may confirm model text, plug type, ports, exterior condition and accessories, but not battery capacity, internal components or reliable operation. If testing is available, read exactly what the service covers. If it is not available, price the unresolved risk into the decision instead of describing the item as fully checked.",
          "Save the checklist beside the listing before purchase. Reusing the same category questions makes QC faster and creates comparable notes across products. It also improves editorial quality: a directory can explain why an item remains listed, was flagged or was removed, rather than relying on unexplained green ticks.",
          "Do not publish another customer's warehouse photos without permission or remove identifiers in a way that changes their meaning. The most persuasive QC illustration is a clear, consented example with arrows or captions explaining exactly what a reader should inspect. A blurry collage adds decoration but weakens trust."
        ],
      },
    ],
    sources: [
      {
        label: "OOPBuy Platform Guarantee",
        note: "Official statements about inspection and free storage.",
      },
      officialReturns,
      officialAgreement,
      {
        label: "OOPBuy Inspection Information",
        note: "Official warehouse receiving, opening, inspection and measurement process.",
      },
    ],
  },
  "oopbuy-shipping-planning": {
    eyebrow: "OOPBuy shipping cost",
    title: "OOPBuy Shipping Cost Guide: Weight, Volume, Packaging and Route Risk",
    description: "A practical OOPBuy shipping-planning model covering estimates, warehouse measurements, bulky parcels, consolidation, restricted goods and claims.",
    read: "13 min read",
    updated: "1 September 2026",
    sections: [
      {
        heading: "Why product price is a poor shipping predictor",
        paragraphs: [
          "A low seller price does not imply low landed cost. International freight is usually affected by destination, route, measured weight, dimensions, product type and packaging. A light but bulky jacket can consume more chargeable space than expected; a shoe box may add volume; batteries, liquids or restricted categories may reduce the available routes. That is why OOPBuy maintains a destination-based shipping estimator rather than publishing one universal price per kilogram.",
          "Start shipping planning before ordering. List each product's seller-stated weight, likely packed dimensions and packaging type. Mark rigid boxes, puffer jackets, electronics and fragile items separately. The purpose is not to predict the final bill exactly. It is to identify which item can change the parcel economics before you have already paid for it.",
          "Create a range. The lower estimate can use the stated weight and compact packaging. The upper estimate should allow for warehouse measurement differences, protective materials, volume charging and a less favorable route. A range is more honest and more useful than a precise number built from uncertain inputs."
        ],
      },
      {
        heading: "Actual weight, dimensions and chargeable weight",
        paragraphs: [
          "Carriers commonly use route-specific chargeable-weight rules. Depending on the line, the billed value may be actual weight, a dimensional calculation or the higher of the two. OOPBuy's live estimator and route detail should be checked for the current rule; do not assume a universal divisor or billing increment from an old community post.",
          "Warehouse data is stronger than seller data because it reflects the received item, but even that may change after consolidation and final packaging. Use seller-stated weight for pre-order screening, warehouse item weight for shortlist refinement and packed parcel measurements for the final route comparison. Label those stages clearly in any spreadsheet.",
          "Dimensions deserve equal attention. Removing optional packaging may reduce volume, but it can also reduce protection or affect resale presentation. The correct choice depends on the product, the route and the value you place on the packaging. Do not present box removal as an automatic saving."
        ],
      },
      {
        heading: "Packaging choices can change both price and risk",
        paragraphs: [
          "OOPBuy's packaging guidance specifically notes vacuum bags for bulky items such as puffer jackets or plush products because reducing volume can reduce the bill. That can be useful when the product tolerates compression. It is less appropriate for items that can crease, deform or break under pressure.",
          "Protective options should solve a defined risk. Edge guards, moisture barriers, reinforced cartons and shoe protection add material and sometimes weight, but they can be reasonable for fragile or high-value contents. A spreadsheet should record why an option is needed rather than recommending every add-on to every parcel.",
          "Review QC before packaging. There is no benefit in paying to protect and ship an item you would have returned after seeing a visible mismatch. The cost sequence should be QC decision first, parcel design second and route purchase last."
        ],
      },
      {
        heading: "Consolidate with a route in mind",
        paragraphs: [
          "OOPBuy's official beginner guide describes selecting stored items and submitting them as a package, while current platform material advertises 90 days of free storage. Storage makes consolidation possible, but it should not become an excuse to build an uncontrolled haul. Route limits can change as weight, dimensions and product mix change.",
          "Compare at least two parcel plans. Plan A can combine everything that passed QC. Plan B can separate a bulky or restricted item. Check which routes remain available, how each plan changes chargeable weight and whether splitting duplicates significant base charges. There is no universal answer because destinations and live route conditions differ.",
          "Keep some safety margin. Exchange rates, measured dimensions and route availability can move between pre-order research and parcel submission. If the budget only works under the most optimistic estimate, the purchase is not truly affordable."
        ],
      },
      {
        heading: "Customs, restrictions and insurance are separate decisions",
        paragraphs: [
          "OOPBuy publishes prohibited and restricted item guidance covering categories that cannot be transported for legal or safety reasons, including hazardous goods and other controlled items. Its international parcel agreement also lists prohibited contents. Review the live restrictions for both the platform and destination before ordering; a seller's willingness to ship domestically does not guarantee international eligibility.",
          "Customs outcomes cannot be guaranteed by a spreadsheet or agent. OOPBuy's customs guidance recommends controlling parcel weight, volume, value and excessive quantities of identical items to reduce inspection risk, but that is risk management rather than immunity. The recipient remains responsible for accurate information and destination rules.",
          "Insurance or compensation should be evaluated by line, coverage and exclusions. OOPBuy's published insurance guidance says parcel loss or damage compensation follows the standard for each shipping line. Read the current route terms, evidence requirements and excluded events before treating insurance as complete protection."
        ],
      },
      {
        heading: "A better shipping estimate worksheet",
        paragraphs: [
          "Build four columns for every item: source price, seller-stated weight, warehouse-measured weight and packed contribution. Add a packaging-risk label and a restricted-category check. For the parcel, record destination, route, actual weight, dimensions, chargeable-weight rule, quoted price, insurance terms and quote date. This makes it clear which data is factual and which is provisional.",
          "Recalculate at three points: before ordering, after warehouse stock-in and immediately before paying for the route. The first calculation filters obviously uneconomic products. The second uses better evidence. The third captures the current line and final parcel measurements. A quote copied months earlier should never be presented as today's cost.",
          "The final question is not which OOPBuy route is always cheapest. It is which currently available route fits this destination, parcel, product mix, delivery expectation and risk tolerance. That answer belongs to the live estimator and route details, supported by a disciplined worksheet."
        ],
      },
      {
        heading: "Three scenarios that expose bad estimates",
        paragraphs: [
          "Scenario one is a low-cost pair of shoes with its retail box. The item price looks attractive, but the rigid box may increase parcel dimensions and remove some economy routes. Compare keeping the box, protective replacement packaging and box removal only after considering damage risk. The cheapest product route is not automatically the cheapest delivered choice.",
          "Scenario two is several puffer jackets. Their actual weight may be moderate while their uncompressed volume is large. OOPBuy's packaging page specifically recommends vacuum bags for bulky soft goods. Model both compressed and uncompressed volume, then confirm whether compression is suitable for the material and whether the chosen line uses dimensional rules.",
          "Scenario three is a mixed parcel containing ordinary clothing and a restricted or sensitive product. One item can reduce the lines available for the whole parcel. Price a split shipment before assuming consolidation wins. These scenarios show why a useful calculator needs product type and dimensions, not just kilograms.",
          "Run every scenario with the current destination selected. A route available to Germany may not appear for the United States, and identical line names can carry different limits over time. Save the quote date, currency and whether tax, insurance or a coupon is included. Without those fields, two screenshots that appear comparable may describe different products. Recheck the result after final packing because small dimensional changes can move a parcel into another billing increment. Keep the final route screenshot with the parcel record."
        ],
      },
    ],
    sources: [
      officialEstimator,
      officialGuide,
      {
        label: "OOPBuy Packaging Guidance",
        note: "Official guidance on packaging choices, including vacuum bags for bulky items.",
      },
      {
        label: "OOPBuy Prohibited and Restricted Items",
        note: "Official categories that may not be accepted for international transport.",
      },
      {
        label: "OOPBuy Insurance and Compensation",
        note: "Official statement that compensation depends on each line's standard.",
      },
    ],
  },
  "oopbuy-fees-total-cost": {
    eyebrow: "OOPBuy fees",
    title: "OOPBuy Fees Explained: How to Estimate the Total Cost Before You Buy",
    description: "A transparent model for OOPBuy product price, conflicting public fee statements, domestic delivery, returns, payment conversion and international freight.",
    read: "12 min read",
    updated: "1 September 2026",
    sections: [
      {
        heading: "Start by acknowledging the published fee conflict",
        paragraphs: [
          "OOPBuy's public materials checked on 1 September 2026 do not present one consistent fee rule. The indexed User Registration Agreement describes an 8% platform service fee calculated from shipping cost. The official Service & Fees page says the platform charges no other fees beyond product fees, international shipping, customs clearance and any selected value-added services. The current official Google Play description goes further and says the service has no service fee. These statements cannot responsibly be collapsed into an 8% charge on the goods price.",
          "Treat the discrepancy as a fact that needs verification, not as permission to choose the most convenient wording. Before payment, compare the current agreement with the live checkout and ask support to confirm the fee basis in writing if any charge is unclear. Record the date, selected service and exact line item. A future promotion, contract revision or account-specific display may change the result, so the amount shown for the actual transaction is stronger evidence than an undated article.",
          "Before placing an order, write down the source price in CNY, the selected option and the amount displayed at checkout. If the two differ, investigate whether the difference comes from domestic shipping, a service charge, exchange-rate handling or the option itself. Do not assume every difference is hidden commission."
        ],
      },
      {
        heading: "Domestic seller delivery is part of the product stage",
        paragraphs: [
          "Many marketplace listings charge delivery from the seller to the OOPBuy warehouse. This is separate from international shipping. Some sellers include domestic delivery, while others calculate it by item or destination. The live listing and checkout should show the current amount where available.",
          "When comparing two sellers, add source price, domestic freight and only the service charges actually displayed for the current order before deciding which is cheaper. A slightly higher item price with lower domestic delivery can produce a lower warehouse cost. Availability and return cooperation may matter more than a small headline difference.",
          "Record the domestic amount separately in a spreadsheet. That makes later cost analysis possible and prevents it from being mistaken for international freight."
        ],
      },
      {
        heading: "Payment method and exchange rate can change the effective cost",
        paragraphs: [
          "OOPBuy's PayPal guidance says PayPal recharge is converted in US dollars and references exchange-rate adjustment using Bank of China information. The platform also publishes recharge-method guidance. The amount charged by a card issuer or payment provider can include its own conversion or cross-border treatment, which is outside a simple product-price comparison.",
          "Compare the amount needed in the platform account with the amount that leaves your payment method. Use the same currency basis when comparing purchases. If one screenshot uses CNY, another uses USD balance value and a third uses a bank-set exchange rate, the apparent fee comparison is unreliable.",
          "Avoid publishing a universal best payment method without current evidence. Availability varies by country and account, and payment-provider terms can change. The useful advice is to review the live recharge screen and your provider's disclosed charges before funding a large order."
        ],
      },
      {
        heading: "Returns and exchanges can add service and shipping costs",
        paragraphs: [
          "OOPBuy's current return-and-exchange service page says a customer-responsible return can include shipping to the seller, return shipping and a 5 CNY service fee; an exchange can include shipping to the seller, the seller's second shipment and a 5 CNY service fee. The published standard also distinguishes non-customer-responsible situations. Always verify the live after-sales amount and seller acceptance.",
          "The platform's returns guidance gives a five-day request window after warehouse stock-in for the standard process. This is why delayed QC review can create a real cost. Missing the window can reduce available options even when the item itself was inexpensive.",
          "Budgeting a small QC contingency is more honest than assuming every return is free. More importantly, inspect carefully before international shipment, because returning an item after it leaves the warehouse can be much harder or uneconomic."
        ],
      },
      {
        heading: "International freight is not an extension of product price",
        paragraphs: [
          "The second major payment occurs when stored items are submitted as a parcel. OOPBuy's beginner guide separates product purchase from international shipment, and the official estimator requires destination and parcel information. This means two customers buying the same product can face very different freight options.",
          "Estimate with weight and dimensions, not item value alone. Packaging, consolidation, volume charging, restricted categories, route availability, insurance and destination rules can all affect the quote. A coupon is temporary; it should reduce a current quote, not be built into a permanent article as if everyone will receive it.",
          "Keep taxes and customs separate from the freight quote unless a route explicitly states how they are handled. Destination charges can depend on local rules and declaration details. A responsible guide does not promise tax-free or seizure-free shipping."
        ],
      },
      {
        heading: "A complete OOPBuy cost formula",
        paragraphs: [
          "Use this planning model: selected seller price plus domestic delivery plus any service charge explicitly shown in the current checkout plus payment or conversion effects plus optional warehouse services plus return or exchange costs if triggered plus international freight plus insurance plus possible destination charges. Not every order includes every line, but every line should be considered.",
          "Calculate a confirmed subtotal and an estimated subtotal. Confirmed values come from the live seller page, checkout or warehouse record. Estimated values include pre-order shipping, future route availability and possible destination charges. Never add both a provisional estimate and its later final replacement.",
          "The best comparison is total cost per useful item, not simply shipping per kilogram. An item that fails QC, needs an exchange or creates excessive parcel volume can make a cheap haul less efficient. A transparent cost sheet helps readers decide before sunk costs take over."
        ],
      },
      {
        heading: "How to compare two OOPBuy orders fairly",
        paragraphs: [
          "Choose the same currency and the same cost boundary. If Order A includes only the seller price while Order B includes domestic delivery, agent service and international freight, the comparison is meaningless. Decide whether you are comparing warehouse cost, parcel cost or delivered cost, then include the same layers for both.",
          "Separate fixed and variable costs. A parcel may have a base charge that is spread across several items, while volume, optional packaging and insurance vary with the contents. Allocate shared freight by weight, volume contribution or item value depending on the question. State the method so the result can be reproduced.",
          "Date every quote and keep promotional discounts in their own field. A shipping coupon can improve one order without proving that the underlying route is generally cheaper. Likewise, a refund after final measurement should replace the provisional freight value instead of being counted as unrelated savings.",
          "Use a confidence column. Mark live checkout values as confirmed, seller weights as low confidence, warehouse weights as medium or high confidence, and customs charges as destination-dependent. This keeps estimated savings from being presented as cash already saved.",
          "A fair comparison also needs the same outcome. If one order was returned, another shipped without boxes and a third included insurance, their totals answer different questions. Keep failed-purchase costs visible rather than deleting them from the analysis. The cheapest successful order may not belong to the platform with the lowest advertised fee; seller quality, QC timing and route fit can matter more.",
          "Review the formula immediately before payment. The conflicting public fee statements, the published 5 CNY customer-responsible return or exchange service fee, payment methods and route prices are dated references rather than permanent guarantees. Where the live checkout differs, preserve the discrepancy and use the transaction-specific amount after confirming it. Save that final breakdown with the order so a later refund or adjustment can be reconciled correctly."
        ],
      },
    ],
    sources: [
      officialAgreement,
      officialServiceFees,
      officialGooglePlay,
      {
        label: "OOPBuy Return and Exchange Service",
        note: "Official published return/exchange cost components and 5 CNY service fee.",
      },
      {
        label: "OOPBuy PayPal Guidance",
        note: "Official PayPal currency-conversion and supported-card information.",
      },
      officialEstimator,
    ],
  },
  "is-oopbuy-legit-review": {
    eyebrow: "OOPBuy review 2026",
    title: "Is OOPBuy Legit? A 2026 Review of the Workflow, Complaints and Evidence",
    description: "A balanced OOPBuy review separating verified platform features from self-reported customer experiences, current Trustpilot warnings and practical buyer checks.",
    read: "14 min read",
    updated: "1 September 2026",
    sections: [
      {
        heading: "What 'legit' should mean in an OOPBuy review",
        paragraphs: [
          "Asking whether OOPBuy is legit combines several different questions: does a functioning shopping-agent service exist, can it purchase or receive marketplace goods, does it provide warehouse records and QC photos, can customers submit international parcels, and how reliably are problems resolved? A useful review separates those questions instead of giving one dramatic yes-or-no answer.",
          "The official site publishes a beginner workflow, shipping estimator, warehouse-protection claims, returns guidance, user agreement and parcel rules. Those documents support the conclusion that OOPBuy presents an operating shopping-agent process. They do not prove that every seller product is authentic, that every parcel arrives, that every support case is handled well or that every review online is reliable.",
          "The right approach is evidence layering. Use official pages for the declared process and terms. Use the live account for current prices and route availability. Use independent reviews to identify recurring themes, while treating each individual story as unverified and self-selected."
        ],
      },
      {
        heading: "What the official OOPBuy workflow actually offers",
        paragraphs: [
          "OOPBuy's beginner guide describes pasting or selecting a marketplace product, purchasing it, waiting for warehouse intake, reviewing stored goods and submitting selected items as a package. The official platform-protection page advertises inspection after receipt and 90 days of free storage. Product pages also show estimated weights, dimensions or QC areas where available.",
          "The published returns information says standard requests should be initiated within five days after stock-in. The current public fee materials conflict, so a review should report the disagreement and rely on transaction-level confirmation rather than inventing one universal percentage. The shipping estimator asks for destination and parcel information rather than promising one global price. These are concrete features a reviewer can verify without relying on influencer claims.",
          "Important limits are also published. Prohibited-item and parcel agreements restrict certain contents, customs outcomes are not guaranteed, and compensation depends on route terms. A review that mentions only benefits while hiding these limits is incomplete."
        ],
      },
      {
        heading: "Trustpilot currently carries a serious warning",
        paragraphs: [
          "On 1 September 2026, OOPBuy's Trustpilot page displayed 906 reviews but showed the company's rating as unavailable because of a breach of Trustpilot guidelines. The page also stated that Trustpilot had removed a number of fake reviews for the company. That warning must be disclosed in any responsible review; the star distribution cannot be treated as a clean reputation score.",
          "The same page showed 75% five-star and 17% one-star reviews, with the remainder spread across other ratings. Recent positive reviewers mentioned delivery speed, product satisfaction and support. Recent negative reviewers described expensive shipping, delayed responses, QC-image limitations or parcel problems. These are reviewer allegations and experiences, not independently proven facts about every order.",
          "Because the rating is unavailable and fake reviews were removed, it would be misleading to advertise OOPBuy as a 4-star or 5-star service based on an older snapshot. It would also be misleading to select one one-star story and call the entire platform a scam. The evidence supports caution and verification, not a simplistic score."
        ],
      },
      {
        heading: "What Reddit experiences add—and what they cannot prove",
        paragraphs: [
          "Reddit discussions are mixed. One detailed December 2024 post described a familiar interface, variable QC photo quality, slow website support, a shipping refund after the estimate changed and a parcel that arrived after 24 days; the author still said they would use the service again. More recent complaint threads describe long waits, slow responses and dissatisfaction with shipping costs, while some commenters report faster outcomes.",
          "These posts are useful for discovering questions to ask: how long did warehouse processing take, were QC views sufficient, how different was the estimate from the final quote, what route was used, and how was support contacted? They are not controlled studies. Users self-select, referral relationships may exist, details can be incomplete and service conditions change over time.",
          "A credible review should cite the date and avoid generalizing one haul to every country or route. Delivery time without origin date, destination, carrier and customs context is not a universal benchmark."
        ],
      },
      {
        heading: "Practical risks a buyer can reduce",
        paragraphs: [
          "The clearest controllable risk is choosing an item without checking the current seller page. Confirm the option, size chart, price and domestic delivery before purchase. Save the item ID and seller evidence. A spreadsheet is useful for discovery, but it cannot guarantee future stock or product quality.",
          "The second risk is approving warehouse goods without a disciplined QC review. Compare identity, visible condition and measurements while the published five-day after-sales window is relevant. Ask for missing evidence when the decision depends on it. Photos cannot prove internal function or authenticity.",
          "The third risk is underestimating shipping. Use the official estimator before ordering, update the calculation after warehouse measurement and compare final routes immediately before payment. Keep a budget margin for packaging, chargeable volume, route changes and destination charges. Review restricted-item and compensation terms before choosing a line."
        ],
      },
      {
        heading: "Verdict: use evidence, not reputation shortcuts",
        paragraphs: [
          "OOPBuy has a documented shopping-agent workflow with warehouse intake, QC, storage, parcel submission and after-sales rules. That makes it more accurate to describe it as an operating service than as an anonymous product seller. However, the current Trustpilot guideline breach and removed fake reviews mean its public review profile should not be used as straightforward proof of reliability.",
          "A cautious buyer should start small, verify the exact listing, avoid depositing more balance than needed, review QC quickly, keep screenshots of terms and quotes, and choose a route only after final measurements. Pay attention to support responsiveness before building a large parcel. These steps do not eliminate customs, seller or carrier risk, but they create better evidence if something goes wrong.",
          "The most honest answer to is OOPBuy legit is conditional: the published platform and workflow are real, but the quality of an individual purchase depends on the seller, the received item, the warehouse evidence, the shipping line and problem resolution. Treat strong praise and strong accusations as leads to investigate, not substitutes for current account-level checks."
        ],
      },
      {
        heading: "How this review weighs conflicting evidence",
        paragraphs: [
          "Official documents receive the most weight for stated fees, deadlines and workflow because they define what the platform currently publishes. They receive less weight for performance claims such as fastest logistics, because those require independent delivery data. Live account screens outrank an old guide when the two differ.",
          "Third-party reviews are grouped by theme rather than averaged into a new score. Repeated mentions of shipping cost, support speed or QC quality identify issues worth checking, but repetition does not prove prevalence. Referral codes, incentives, deleted accounts and unverifiable order details lower confidence. Trustpilot's current guideline warning is especially important because it undermines a simple star-based conclusion.",
          "A buyer's own small test order provides account-specific evidence, but even that should not be generalized to every route. Record purchase time, warehouse time, QC adequacy, estimated and final freight, dispatch time, delivery time and support outcome. Those fields make future decisions more useful than a single emotional rating.",
          "This article should therefore be refreshed when the official fee or return terms change, when Trustpilot restores or alters the rating status, or when enough recent route-specific evidence changes the balance. A dated review is honest about what it could verify at publication time."
        ],
      },
    ],
    sources: [
      officialGuide,
      {
        label: "OOPBuy Platform Guarantee",
        note: "Official inspection and 90-day free-storage claims.",
      },
      officialAgreement,
      {
        label: "Trustpilot: OOPBuy",
        note: "Current review count, rating status, guideline warning and displayed review distribution.",
        kind: "customer",
        checked: "1 September 2026",
        reference: "trustpilot.com/review/oopbuy.com",
      },
      {
        label: "Reddit: My OOPBuy Experience (Good and bad)",
        note: "A detailed self-reported purchase and delivery experience; anecdotal, not independently verified.",
        kind: "customer",
        checked: "1 September 2026",
        reference: "Reddit · self-reported OOPBuy experience discussed in article",
      },
    ],
  },
};
