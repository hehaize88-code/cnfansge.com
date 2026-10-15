export type ResearchPageKey = "spreadsheet" | "finds" | "guides" | "qc" | "shipping" | "faq" | "articles";

export type ResearchBlock = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export const pageResearch: Record<ResearchPageKey, { title: string; intro: string; blocks: ResearchBlock[] }> = {
  spreadsheet: {
    title: "What a useful LitBuy spreadsheet should preserve",
    intro: "This page is built around the workflow LitBuy describes publicly: a purchasing and forwarding service, warehouse arrival, basic inspection, parcel preparation and international shipping. A spreadsheet is most useful when it keeps evidence connected across those stages instead of acting as a list of unexplained links.",
    blocks: [
      {
        eyebrow: "IDENTITY / SOURCE",
        title: "Keep the marketplace record attached to the find",
        paragraphs: [
          "LitBuy publicly positions itself as a route for purchasing from Chinese marketplaces and forwarding goods internationally. That makes the original marketplace record important. A dependable spreadsheet row should preserve the product ID, neutral item description, representative image, source price and final route. If a platform parser or seller page changes, the product ID and image still provide a way to audit what the row originally described.",
          "The product name should never carry more certainty than the listing. Avoid upgrading a short seller title into an unsupported material, model or authenticity claim. The official LitBuy product disclaimer says the service provides search, purchasing and forwarding, while product quality and authenticity remain matters the buyer must evaluate. A spreadsheet should follow the same evidence boundary: describe what can be confirmed and leave uncertain attributes clearly uncertain."
        ]
      },
      {
        eyebrow: "PRICE / OPTIONS",
        title: "Treat the displayed price as a recorded reference",
        paragraphs: [
          "A source listing may contain several colors, sizes, bundles or accessories under one product ID. The lowest visible price can belong to a different option from the image used in a spreadsheet. Before a row is published, the option selector should be checked and the CNY amount should remain visible beside any USD conversion. The converted figure is a browsing reference, not the amount a user is guaranteed to pay later.",
          "The agent workflow also separates the product purchase from international parcel shipping. This distinction appears repeatedly in LitBuy's own responses to app reviews and in its help material. A low product price is therefore not a landed-cost estimate. Domestic delivery, service choices, packing, international freight, taxes or duties, and payment conversion can affect the eventual total. A good spreadsheet makes that boundary obvious instead of using a product price as a shipping promise."
        ]
      },
      {
        eyebrow: "MAINTENANCE / TRUST",
        title: "Review routes instead of silently replacing them",
        paragraphs: [
          "Seller pages can disappear, variants can be removed and catalog routes can change. Every row needs a visible review date and a manual check that the destination still shows the expected item. A page returning successfully is not enough: the image, product identity and option area must still match. When a record fails, redirecting it to a broad category hides the failure and weakens user trust.",
          "The safer response is to mark the item unavailable, preserve its original source ID for audit, or replace it only after a new record has been matched from the beginning. That maintenance method also produces better search pages. A focused product directory with stable internal detail pages is easier to follow than a grid of changing outbound URLs, duplicate titles and generic redirects."
        ]
      }
    ]
  },
  finds: {
    title: "How to evaluate LitBuy finds before adding them to a parcel",
    intro: "LitBuy finds are discovery leads, not finished buying decisions. Use the source listing, selected variant, warehouse evidence and parcel rules as four separate checkpoints.",
    blocks: [
      {
        eyebrow: "BEFORE ORDERING",
        title: "Read the complete listing, not only the gallery image",
        paragraphs: [
          "Start by matching the product ID, current options and source price. Seller galleries often combine several colors or bundles, while a single thumbnail may represent only one choice. Read measurements, option notes, domestic delivery information and the seller's return position before paying. LitBuy's published service description says it assists with purchasing and payment processing; it does not turn a marketplace image into a guarantee of material, fit or long-term performance.",
          "For apparel, compare actual garment measurements with an item you already own. For footwear, use the measurement method requested by the listing and look for internal-length information when available. Letter sizes are not a reliable cross-seller standard. For bags and accessories, check dimensions, closures and included pieces. These checks reduce uncertainty before the order reaches the warehouse, where after-sales timing may already be narrower."
        ]
      },
      {
        eyebrow: "AT WAREHOUSE",
        title: "Use inspection photos for visible questions",
        paragraphs: [
          "LitBuy has advertised free QC and inspection on arrival. Published refund terms described the basic warehouse check more narrowly: quantity, visible appearance and obvious external defects. That wording matters. Warehouse images can help confirm that an item arrived, whether the visible option appears correct, and whether obvious damage or asymmetry is present. They cannot prove fibre composition, durability, comfort, smell, electronics performance or authenticity.",
          "Review the full silhouette first, then symmetry, construction, labels, measurements and packaging. If a decision depends on a small area, request one precise view rather than making a broad conclusion from a blurred image. Keep the order ID and image reference in any support request. A specific observation such as 'the left sleeve appears shorter in the flat measurement' is easier to act on than 'quality looks bad.'"
        ]
      },
      {
        eyebrow: "BEFORE SHIPPING",
        title: "Recheck weight, storage time and route restrictions",
        paragraphs: [
          "Published LitBuy material distinguishes warehouse time from international transit. Earlier homepage wording referred to storage of up to 120 days with the first 90 days free, while help material highlighted the 90-day free period. A separate warehouse notice described overdue handling after the free period. Because wording can change, users should rely on the dates and fee status in their current warehouse account rather than a saved screenshot.",
          "Before submitting a parcel, identify items that are bulky, fragile, restricted or likely to require protective packaging. Compare route rules using the packed parcel, not the sum of seller weights. If the best route is sensitive to dimensions, rehearsal packing can provide a more useful basis than an early estimate. The cheapest visible headline rate is not automatically the cheapest acceptable route once size, restrictions, insurance and protection are considered."
        ]
      }
    ]
  },
  guides: {
    title: "A fact-based order for researching LitBuy",
    intro: "The most useful reading order follows the actual decision sequence: understand the agent model, verify the listing, review warehouse evidence, then plan the parcel and after-sales position.",
    blocks: [
      {
        eyebrow: "STEP 01",
        title: "Understand the two-stage payment model",
        paragraphs: [
          "LitBuy describes itself as a shopping and forwarding agent rather than a conventional retailer that ships every product directly from one checkout. The first payment covers the selected product and related purchasing stage. After items reach the warehouse and the user chooses what to ship, international freight is calculated separately. Published negative app reviews described the second payment as unexpected; Published developer responses said this is the normal agent workflow. New users should understand that distinction before ordering.",
          "A practical budget therefore has at least two columns: product-stage spending and parcel-stage spending. Keep an additional contingency for seller domestic delivery, packing choices, payment conversion, route surcharges, tax or duty exposure and after-sales costs. A coupon or rate headline should be applied only after its eligibility, date and route conditions are verified in the live account."
        ]
      },
      {
        eyebrow: "STEP 02",
        title: "Make warehouse evidence answer a specific question",
        paragraphs: [
          "Published refund terms described basic QC as verifying quantity, visible appearance and obvious external defects. Use that scope to frame a checklist. First ask whether the expected item and option arrived. Then check shape, symmetry, visible construction, labels, measurements and packaging. If the question is not visually answerable, do not present the photo as proof.",
          "After-sales timing can depend on the seller and order status. LitBuy's help center includes separate topics for order cancellation, returns, exchanges and after-sales service. The useful habit is to inspect promptly and submit a support ticket with the order ID, image reference and desired resolution while the item is still in the warehouse. Waiting until after international dispatch usually narrows practical options."
        ]
      },
      {
        eyebrow: "STEP 03",
        title: "Compare complete parcel routes",
        paragraphs: [
          "LitBuy provides a shipping-estimation tool and explains that the first-weight unit is the minimum weight charged for a route. A route may then add continuation increments, dimensional rules, restrictions and service conditions. Entering an item weight without final dimensions can make a bulky parcel appear cheaper than it will be after packing. Use rehearsal data when a route decision depends heavily on dimensions.",
          "A published LitBuy shipping policy described parcel processing as generally one to three business days, excluding weekends and public holidays; check the current version. That is warehouse processing, not a promise that international delivery will finish in the same period. Delivery estimates begin after dispatch and can be affected by carrier capacity, customs, weather and local handling. A responsible guide keeps processing, transit and customs as separate time ranges."
        ]
      }
    ]
  },
  qc: {
    title: "What LitBuy QC photos can and cannot establish",
    intro: "LitBuy has marketed free QC and inspection, while published refund terms described the basic warehouse inspection as a check of quantity, visible appearance and obvious external defects. This checklist stays inside that documented scope.",
    blocks: [
      {
        eyebrow: "VISIBLE EVIDENCE",
        title: "Begin with identity, option and quantity",
        paragraphs: [
          "Confirm that the warehouse record belongs to the expected source order. Compare the product ID, selected color or size, visible model, quantity and included pieces. A wrong option is a stronger finding than a subjective quality impression because it can be tied directly to the order. Photograph labels and packaging when they help distinguish variants, but do not use a label alone to make an authenticity conclusion.",
          "Next review the full front, side and rear views. Overall shape can reveal mismatched panels, leaning construction, crushed structure or an obvious sizing difference that close-up photos hide. Compare left and right using stable reference points. Perspective can create false asymmetry, so ask for a straighter angle or a measurement when the first image is inconclusive."
        ]
      },
      {
        eyebrow: "LIMITS",
        title: "Do not turn a photograph into a laboratory test",
        paragraphs: [
          "Warehouse photography cannot establish exact fibre content, internal construction, waterproofing, battery health, long-term durability, comfort or smell. Lighting and white balance can also shift color. A visible mark can be documented; the cause of the mark may remain uncertain. Separate observations from interpretations so the support request remains defensible.",
          "The same rule applies to authenticity. A photo can show the placement and appearance of a logo or label, but it cannot prove provenance. LitBuy's public product disclaimer says quality and authenticity are not guaranteed by the search, purchasing and forwarding service. This site therefore treats QC as evidence for a warehouse decision, not certification."
        ]
      },
      {
        eyebrow: "ACTION",
        title: "Escalate visible problems while the decision is reversible",
        paragraphs: [
          "Document the order ID, exact photo, location of the issue and requested next step. If a measurement is needed, specify the start and end points. If a closure needs checking, ask for it to be shown open and closed. Precise requests reduce unnecessary image rounds and give the agent a clearer basis for communicating with the seller.",
          "Published LitBuy refund terms stated that refunds could be processed after returned goods are received and inspected, and that the refund cannot exceed the amount actually paid for the relevant order. Check the applicable current conditions. Final credit timing depends on the payment channel. Seller rules and after-sales windows can still affect whether a return is accepted, so a QC objection should be raised promptly rather than stored for the parcel stage."
        ]
      }
    ]
  },
  shipping: {
    title: "How to estimate LitBuy shipping without hiding uncertainty",
    intro: "A useful parcel estimate separates actual weight, dimensional weight, chargeable weight, packing decisions and route-specific fees. LitBuy's estimator provides a starting point, not a guaranteed final invoice.",
    blocks: [
      {
        eyebrow: "CALCULATION",
        title: "Start with the packed parcel and route rule",
        paragraphs: [
          "Actual weight comes from the packed parcel on a scale. Dimensional or volumetric weight converts external length, width and height into a weight-like figure using the divisor published for a route. Chargeable weight is the value the carrier uses after comparing relevant measurements and applying its rounding increment. The exact formula and divisor can differ by route, so a generic number copied from another guide should never be presented as universal.",
          "LitBuy's shipping estimator explains that the first-weight unit is the minimum billed amount for a line. Parcels within that unit are charged as the full first unit, with later weight usually billed in continuation increments. That structure is why a small reduction does not always lower the quotation. Compare the packed value with the next billing boundary before removing protection merely to save a few grams."
        ]
      },
      {
        eyebrow: "REHEARSAL",
        title: "Use rehearsal when dimensions can change the route",
        paragraphs: [
          "Seller weights and product dimensions are early planning inputs. They may omit retail boxes, outer cartons, protective material and consolidation. Rehearsal packing is valuable when the parcel contains shoe boxes, structured bags, hats, rugs or several differently shaped items. It replaces some assumptions with a packed weight and size before the final freight decision.",
          "Rehearsal does not make every later cost certain. Carrier remeasurement, route restrictions, remote-area rules, customs, taxes, optional insurance and address corrections can remain outside a simple weight estimate. The right comparison records destination, packed dimensions, actual weight, route formula, chargeable weight, included services and visible surcharges on the same date."
        ]
      },
      {
        eyebrow: "TIMING / CLAIMS",
        title: "Separate warehouse processing from international transit",
        paragraphs: [
          "A published LitBuy shipping policy described parcel processing as generally one to three business days, excluding weekends and public holidays; check the current version. That window refers to processing before dispatch. International delivery estimates start after shipment and are not guaranteed. Customs inspections, weather, route capacity and destination-carrier handling can extend the journey without changing the warehouse processing record.",
          "For missing or damaged parcels, preserve tracking events, parcel images, packaging evidence and delivery records. LitBuy's common-questions area has separate topics for customs inspection, insurance and compensation, which means the applicable route and selected protection matter. Do not promise a refund while a parcel is merely delayed or held; published terms linked refunds to confirmed delivery failure or receipt and inspection of a returned parcel; check the current rules for the specific case."
        ]
      }
    ]
  },
  faq: {
    title: "Important LitBuy policy answers that need context",
    intro: "Short answers are useful only when they preserve the difference between an advertised feature, a help-center rule and the status shown in a user's live account.",
    blocks: [
      {
        eyebrow: "STORAGE",
        title: "Distinguish free storage from additional deadlines",
        paragraphs: [
          "Earlier LitBuy homepage wording advertised up to 120 days of storage and the first 90 days free. Help material highlighted a 90-day free-storage period. A separate warehouse notice also described a maximum 120-day window and overdue handling. These statements do not mean the same thing: 90 days described the advertised free period, while later time was an overdue or disposal window rather than another block of free storage.",
          "Because policy wording can change, the warehouse date and fee status in the current account should take priority over an old guide. The published notice described that items with unpaid overdue charges could eventually be treated as abandoned. Do not plan to use the maximum period before possible disposal as normal free storage; check the deadline that applies to the item."
        ]
      },
      {
        eyebrow: "REFUNDS",
        title: "Separate a seller return, account credit and payment receipt",
        paragraphs: [
          "A seller return, LitBuy account refund and payment-channel credit are different stages. Published refund terms said returned goods had to be received and inspected; check the applicable current conditions before a refund can be processed, and the amount cannot exceed what was actually paid for the relevant order. The time when funds appear outside the platform depends on the payment provider's own processing cycle.",
          "Cancellation may also depend on order status and the seller's rules. LitBuy's help center separates cancellation, returns and after-sales questions, and published developer responses to app reviews described how a cancellation option could close after the applicable processing window. Users should therefore raise a precise support ticket as soon as a problem is visible rather than assume every purchased item remains cancellable."
        ]
      },
      {
        eyebrow: "REVIEWS",
        title: "Read customer feedback with dates and context",
        paragraphs: [
          "Public customer comments include positive and negative experiences. Positive examples describe smooth purchasing, quick warehouse arrival, useful QC photos and successful delivery. Critical examples discuss international shipping cost, volumetric weight, an additional payment after the product stage, delayed support or difficulty cancelling. These are individual experiences rather than controlled tests, but recurring themes identify useful questions before spending.",
          "Ratings and moderation notices on Trustpilot or Apple's App Store can change. Check the current status directly on each platform instead of assuming that old notices about removed reviews, an unavailable rating or a high average remain valid. Read the text, date, developer response and parcel details in both positive and negative accounts. That combination is more informative than a star average or one promotional testimonial."
        ]
      }
    ]
  },
  articles: {
    title: "Choose a LitBuy guide for your next decision",
    intro: "Start with the stage you are at: finding an item, checking a warehouse order or comparing a parcel quote. Each guide explains a different decision and the evidence needed to make it.",
    blocks: [
      { eyebrow: "BEFORE ORDERING", title: "Connect the find to the exact listing", paragraphs: [
        "Begin with the spreadsheet guide when you need to connect a product image to its source ID, selected option and price date. A saved row is a starting point for comparison. Open the main catalog to check the current size, color, quantity and price before deciding whether the item still matches your requirements.",
        "Use the hoodie guide for garment-specific checks, the under-$30 guide for historical product-price examples and the clothing-size guide for measurement methods. The budget examples exclude shipping and other charges. Compare a garment you own with the listing measurements instead of treating a letter size or a low headline price as a complete buying decision."
      ]},
      { eyebrow: "AT THE WAREHOUSE", title: "Match order status to visible evidence", paragraphs: [
        "The order-status and warehouse guides separate seller dispatch, domestic delivery, intake and stored inventory. A domestic carrier marking a package delivered does not necessarily mean the item is ready for an international parcel. Keep the order ID and domestic tracking reference together so a support question identifies the stage that needs attention.",
        "Once warehouse photos are available, use the QC guide and photo checklist to inspect identity, quantity, measurements and visible condition. Ask for a precise view when a material question remains unresolved. Check each item's current storage deadline and available after-sales options before combining it with other orders."
      ]},
      { eyebrow: "BEFORE DISPATCH", title: "Compare the complete parcel decision", paragraphs: [
        "Read the shipping guide and weight guide together when comparing actual weight, external dimensions, chargeable weight and packaging. The USA guide adds destination-specific planning questions without promising a universal route or tax result. Use the same parcel inputs for every current quote and distinguish warehouse processing from carrier transit.",
        "The cost-and-workflow checklist and independent review bring the stages together. Separate the recorded product price from purchasing charges, international freight and possible destination costs. Keep known amounts, estimates and unresolved terms visible. Use the review to decide whether the staged agent process fits your needs, rather than treating a rating or another buyer's successful parcel as a guarantee."
      ]}
    ]
  }
};
