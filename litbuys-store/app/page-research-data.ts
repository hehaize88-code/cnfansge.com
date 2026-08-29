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
          "The safer response is to mark the item unavailable, preserve its original source ID for audit, or replace it only after a new record has been matched from the beginning. That maintenance method also produces better search pages. Google can understand a focused product directory with stable internal detail pages more easily than a grid of changing outbound URLs, duplicate titles and generic redirects."
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
          "LitBuy advertises free QC and inspection on arrival. Its refund terms describe the basic warehouse check more narrowly: quantity, visible appearance and obvious external defects. That wording matters. Warehouse images can help confirm that an item arrived, whether the visible option appears correct, and whether obvious damage or asymmetry is present. They cannot prove fibre composition, durability, comfort, smell, electronics performance or authenticity.",
          "Review the full silhouette first, then symmetry, construction, labels, measurements and packaging. If a decision depends on a small area, request one precise view rather than making a broad conclusion from a blurred image. Keep the order ID and image reference in any support request. A specific observation such as 'the left sleeve appears shorter in the flat measurement' is easier to act on than 'quality looks bad.'"
        ]
      },
      {
        eyebrow: "BEFORE SHIPPING",
        title: "Recheck weight, storage time and route restrictions",
        paragraphs: [
          "LitBuy's current public pages distinguish warehouse time from international transit. The homepage advertises storage of up to 120 days with the first 90 days free, while the help center emphasizes the 90-day free period. A separate warehouse notice describes overdue handling after the free period. Because those labels have changed, users should rely on the dates and fee status shown inside their own warehouse account rather than a saved screenshot.",
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
          "LitBuy describes itself as a shopping and forwarding agent rather than a conventional retailer that ships every product directly from one checkout. The first payment covers the selected product and related purchasing stage. After items reach the warehouse and the user chooses what to ship, international freight is calculated separately. Several negative app reviews describe the second payment as unexpected; LitBuy's developer responses say this is the normal agent workflow. New users should understand that distinction before ordering.",
          "A practical budget therefore has at least two columns: product-stage spending and parcel-stage spending. Keep an additional contingency for seller domestic delivery, packing choices, payment conversion, route surcharges, tax or duty exposure and after-sales costs. A coupon or rate headline should be applied only after its eligibility, date and route conditions are verified in the live account."
        ]
      },
      {
        eyebrow: "STEP 02",
        title: "Make warehouse evidence answer a specific question",
        paragraphs: [
          "The official refund terms say basic QC verifies quantity, visible appearance and obvious external defects. Use that scope to frame a checklist. First ask whether the expected item and option arrived. Then check shape, symmetry, visible construction, labels, measurements and packaging. If the question is not visually answerable, do not present the photo as proof.",
          "After-sales timing can depend on the seller and order status. LitBuy's help center includes separate topics for order cancellation, returns, exchanges and after-sales service. The useful habit is to inspect promptly and submit a support ticket with the order ID, image reference and desired resolution while the item is still in the warehouse. Waiting until after international dispatch usually narrows practical options."
        ]
      },
      {
        eyebrow: "STEP 03",
        title: "Compare complete parcel routes",
        paragraphs: [
          "LitBuy provides a shipping-estimation tool and explains that the first-weight unit is the minimum weight charged for a route. A route may then add continuation increments, dimensional rules, restrictions and service conditions. Entering an item weight without final dimensions can make a bulky parcel appear cheaper than it will be after packing. Use rehearsal data when a route decision depends heavily on dimensions.",
          "The official shipping policy says parcel processing generally takes one to three business days, excluding weekends and public holidays. That is warehouse processing, not a promise that international delivery will finish in the same period. Delivery estimates begin after dispatch and can be affected by carrier capacity, customs, weather and local handling. A responsible guide keeps processing, transit and customs as separate time ranges."
        ]
      }
    ]
  },
  qc: {
    title: "What LitBuy QC photos can and cannot establish",
    intro: "LitBuy markets free QC and inspection, while its refund terms define the basic warehouse inspection as a check of quantity, visible appearance and obvious external defects. This checklist stays inside that documented scope.",
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
          "LitBuy's refund terms state that refunds may be processed after returned goods are received and inspected, and that the refund cannot exceed the amount actually paid for the relevant order. Final credit timing depends on the payment channel. Seller rules and after-sales windows can still affect whether a return is accepted, so a QC objection should be raised promptly rather than stored for the parcel stage."
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
          "LitBuy's published shipping policy says parcel processing normally takes one to three business days, excluding weekends and public holidays. That window refers to processing before dispatch. International delivery estimates start after shipment and are not guaranteed. Customs inspections, weather, route capacity and destination-carrier handling can extend the journey without changing the warehouse processing record.",
          "For missing or damaged parcels, preserve tracking events, parcel images, packaging evidence and delivery records. LitBuy's common-questions area has separate topics for customs inspection, insurance and compensation, which means the applicable route and selected protection matter. Do not promise a refund while a parcel is merely delayed or held; the official policy says refunds are tied to confirmed delivery failure or a returned parcel being received and inspected."
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
        title: "Is storage 90 days or 120 days?",
        paragraphs: [
          "LitBuy's current homepage advertises storage for up to 120 days and states that the first 90 days are free. The help center highlights a 90-day free-storage period. A separate warehouse notice also describes a maximum 120-day window and overdue handling. These statements are not identical, but they can be read together: 90 days is the public free period, while later time is an overdue or disposal window rather than another block of free storage.",
          "Policy wording has changed, so the warehouse date and fee status shown inside the user's account should take priority over an old guide. The official notice says items with unpaid overdue charges may eventually be treated as abandoned. Users should not plan to use the maximum disposal window as normal free storage."
        ]
      },
      {
        eyebrow: "REFUNDS",
        title: "When is a LitBuy refund complete?",
        paragraphs: [
          "A seller return, LitBuy account refund and payment-channel credit are different stages. The official refund terms say returned goods must be received and inspected before a refund can be processed, and the amount cannot exceed what was actually paid for the relevant order. The time when funds appear outside the platform depends on the payment provider's own processing cycle.",
          "Cancellation may also depend on order status and the seller's rules. LitBuy's help center separates cancellation, returns and after-sales questions, and developer responses to app reviews say the cancellation button can close after the applicable processing window. Users should therefore raise a precise support ticket as soon as a problem is visible rather than assume every purchased item remains cancellable."
        ]
      },
      {
        eyebrow: "REVIEWS",
        title: "How should customer reviews be read?",
        paragraphs: [
          "Customer feedback is mixed. Positive reviews commonly describe a smooth purchasing flow, quick warehouse arrival, useful QC photos and successful parcel delivery. Critical reviews frequently focus on international shipping cost, dimensional weight, additional payment after the product stage, delayed support or difficulty cancelling. These are individual experiences, not controlled tests, but the repeated themes identify useful questions to ask before spending.",
          "Trustpilot currently marks LitBuy's rating unavailable because of a breach of review guidelines and says fake reviews were removed. Apple's App Store currently shows a strong aggregate rating but also displays sharply negative reviews alongside positive ones. That combination is a reason to read the review text, dates, developer responses and parcel details instead of relying on a star average or a single promotional testimonial."
        ]
      }
    ]
  },
  articles: {
    title: "The editorial order behind these LitBuy guides",
    intro: "The first content cluster answers the highest-value questions in the same order a new user encounters them: find identity, warehouse evidence, shipping cost and independent review signals.",
    blocks: [
      {
        eyebrow: "CLUSTER 01",
        title: "Start with the process and spreadsheet intent",
        paragraphs: [
          "The foundational search intent is practical: users want a LitBuy spreadsheet, working product links and a clear explanation of how the agent process differs from normal retail checkout. That article should connect product IDs, images, options and source routes without turning the page into a list of keywords. It also creates internal links to finds, product details, QC and shipping pages.",
          "A second article should explain how to order with LitBuy from source link to warehouse arrival. The target phrases can include how to use LitBuy, how to buy from LitBuy and LitBuy beginner guide. It should explain the separate product and international-shipping stages early because review data shows that this is a common source of surprise."
        ]
      },
      {
        eyebrow: "CLUSTER 02",
        title: "Publish QC and shipping before broad opinion pieces",
        paragraphs: [
          "QC and shipping articles answer concrete decisions and are easier to support with official evidence. The QC article can target LitBuy QC photos, LitBuy warehouse inspection and QC checklist. The shipping article can target LitBuy shipping cost, LitBuy shipping calculator, LitBuy rehearsal parcel and volumetric weight. Both should link to the relevant functional page rather than compete with it: the functional page is the concise tool, while the article is the complete explanation.",
          "Only after those foundations should the site publish a LitBuy review article. A useful review page needs platform facts, positive and negative customer themes, source caveats and a decision checklist. Publishing it too early can produce a thin opinion page; publishing it after the process guides lets the review link to specific explanations of the payment, QC, storage and shipping issues users mention."
        ]
      },
      {
        eyebrow: "CLUSTER 03",
        title: "Expand into storage, refunds and country routes",
        paragraphs: [
          "The next support cluster should cover LitBuy storage time, returns, cancellation, refunds, insurance and customs. These are lower-volume terms than spreadsheet or shipping, but they build topical coverage and capture users who are already close to a decision. Policy pages must carry a verified date and avoid copying temporary promotion language into evergreen text.",
          "Country and category pages should come later and only when each page has unique value. A UK or Germany article needs route, tax and delivery context specific to that destination. A shoes or hoodies article needs its own QC and packing advice. Repeating the same generic template across countries or categories creates more URLs without adding evidence, which is unlikely to outperform a smaller, well-linked cluster."
        ]
      }
    ]
  }
};
