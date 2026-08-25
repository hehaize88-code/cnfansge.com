export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export const articleContent: Record<string, ArticleSection[]> = {
  "spreadsheet-without-buying-blind": [
    {
      heading: "A spreadsheet is a shortlist, not a promise",
      paragraphs: [
        "A useful Superbuy spreadsheet does one job well: it turns scattered product discovery into a list that can be checked. It does not prove that a seller is reliable, that a product is still in stock, that the pictured option is the one you will receive, or that an old price remains valid. Treat every saved row as a lead that still needs a current-page review.",
        "That distinction matters because the buying process has several separate stages. Superbuy’s official shopping-agent guide describes payment for the item and domestic delivery first, seller dispatch to the warehouse second, warehouse inspection and storage after arrival, and international parcel submission later. A sheet should follow those decision points instead of compressing them into one vague status such as “good” or “verified.”"
      ]
    },
    {
      heading: "Record the exact product decision before paying",
      paragraphs: [
        "The product URL alone is not enough. Beside every link, record the current title, chosen color, chosen size, quantity, displayed item price, domestic shipping charge if shown, and the date you checked the page. If a listing uses a broad title or combines unrelated options, save a short note describing the exact thumbnail or option text you intend to select.",
        "This protects you from a common research failure: remembering the product but forgetting the variation. When you reopen the page, compare the main image and option set with your note. If the seller has replaced the listing, removed the expected choice, or changed the price substantially, move the row back to “review” instead of treating an active URL as confirmation."
      ],
      bullets: [
        "Current destination and review date",
        "Exact option text, color, size and quantity",
        "Item price and domestic delivery shown at review",
        "One image-match note",
        "One question to answer from warehouse evidence"
      ]
    },
    {
      heading: "Separate platform fees from the product price",
      paragraphs: [
        "Superbuy’s current service-fee page says its standard purchasing service is free for mainstream platforms including Taobao, Tmall, JD.com and 1688. That does not mean the complete order has no extra cost. Stage one can still include the seller’s item price, domestic shipping in China and optional value-added services. Special or second-hand purchasing services use different fee rules, so the product page and current service table should be checked before payment.",
        "A good spreadsheet therefore avoids a single column called “final cost.” Use separate fields for product price, domestic shipping, optional services and an international-shipping placeholder. International delivery belongs to a later decision because the packed parcel, available route and destination are not known at product-discovery time."
      ]
    },
    {
      heading: "Use warehouse photos as new evidence",
      paragraphs: [
        "The official Superbuy homepage currently states that three free QC photos are taken after warehouse receipt. The shopping-agent guide also says warehouse staff carry out quality inspection, make photos available in the user area and contact the buyer when problems are found. Those images are more relevant than the seller’s promotional gallery because they show the unit received for the order.",
        "They still have limits. A warehouse image can help confirm visible color, quantity, shape, alignment, obvious damage and some construction details. It cannot reliably prove authenticity, fabric composition, comfort, long-term durability or fit. Superbuy also notes that products purchased from 1688 follow a different quality-control standard. Your spreadsheet should record what is visible, what remains unknown and whether an additional detailed photo is worth requesting."
      ]
    },
    {
      heading: "Turn QC into a decision, not a photo collection",
      paragraphs: [
        "Before the item reaches the warehouse, write one decision-critical question in the row. For shoes, that might be outsole condition, pair consistency or measured insole length. For a printed shirt, it might be print placement, garment width or visible cracking. For accessories, it may be the number of pieces, hardware color or the presence of a requested component.",
        "When photos arrive, finish the row with a concrete next action: accept for parcel, request a detailed image, ask about an abnormality, apply for return if eligible, or hold while another item arrives. Avoid labels such as “looks fine” without stating which visible checks passed. The value of a spreadsheet is not the number of links stored; it is the number of uncertain decisions made explicit."
      ]
    },
    {
      heading: "Use the 90-day storage window deliberately",
      paragraphs: [
        "Superbuy’s current guide and fee page state that items receive 90 days of free storage after warehouse arrival. The fee page adds that storage beyond the free period is charged per item per day, the standard maximum storage period is 180 days, and an extension service should be purchased before the limit when needed. Because terms can change, confirm the live account rules rather than relying on a date copied from an old guide.",
        "Add warehouse-arrival date and a parcel target date to the sheet. This prevents an early item from being forgotten while later purchases are still moving through domestic delivery. If you plan to consolidate, review the oldest stored item first and leave enough time for detailed photos, seller communication or a possible domestic return."
      ]
    },
    {
      heading: "Do not assume consolidation always saves money",
      paragraphs: [
        "Superbuy says multiple stored items can be consolidated into one parcel without a consolidation fee, and consolidation may reduce international shipping cost. The word “may” matters. A larger parcel can move into a different chargeable-weight band, trigger volumetric pricing, become unsuitable for a route or combine restricted and unrestricted items in a way that reduces available options.",
        "The spreadsheet should group items by likely parcel compatibility rather than simply by purchase date. Track rough weight, dimensions when known, fragility, batteries, liquids, branded or restricted characteristics, and whether original packaging matters. After warehouse data is available, compare the routes shown for the actual group. One parcel is a choice to test, not a universal rule."
      ]
    },
    {
      heading: "Build a status system that prevents accidental orders",
      paragraphs: [
        "Use a small, consistent set of statuses: discovery, listing checked, option confirmed, purchased, in domestic transit, warehouse review, more evidence needed, ready for parcel, submitted and closed. Each status should have a clear meaning. “Listing checked” confirms only that the current destination and intended option were reviewed; it does not certify quality or seller performance.",
        "Keep the review date visible and revisit old rows before using them. Product listings, options, prices and shipping eligibility change. A route checked several weeks ago should be treated as stale until reopened. This simple discipline makes the spreadsheet useful for search visitors while avoiding the exaggerated claim that every product has been permanently verified."
      ]
    },
    {
      heading: "The practical five-field template",
      paragraphs: [
        "If you want the smallest workable version, keep five fields beside every product: current link status, image match, intended option, current price reference and one QC question. Add review date and next action when the shortlist grows. This format supports the complete shopping-agent workflow without pretending to replace the live listing, warehouse evidence or shipping calculator.",
        "The final check happens immediately before payment: reopen the destination, confirm the exact option, review the current item and domestic delivery cost, and decide what visible evidence you will need after warehouse arrival. A spreadsheet becomes trustworthy when it shows uncertainty honestly and helps the reader take the next sensible action."
      ]
    }
  ],
  "qc-photo-checklist": [
    {
      heading: "What Superbuy QC photos actually represent",
      paragraphs: [
        "Superbuy’s current homepage says three free QC photos are taken after an item arrives at the warehouse. Its shopping-agent guide explains that warehouse staff inspect the received item, make photos available in the user center and contact the buyer if problems are found. These are photographs of the unit received for the order, not additional seller marketing images.",
        "That makes them useful, but not unlimited. A photograph can document visible identity, quantity, color, shape, measurements shown in frame and obvious damage. It normally cannot prove authenticity, internal construction, exact material composition, comfort, electronic function or long-term durability. Start every review by deciding which visible facts the images can reasonably answer."
      ]
    },
    {
      heading: "Begin with identity before judging quality",
      paragraphs: [
        "The first pass should be boring and factual. Confirm the product type, selected color, quantity and visible option details. Compare the warehouse images with the listing and the option note saved before purchase. If you ordered a pair or set, verify that the expected number of pieces is present and that both sides appear consistent.",
        "Do not jump directly to tiny stitching details while a larger mismatch is unresolved. A cleanly made item in the wrong color or size is still the wrong item. If the option cannot be confirmed from the standard views, request a focused image of the label, size tag, model code or included components while the item is still in the warehouse decision window."
      ],
      bullets: [
        "Product type and model",
        "Selected color and visible variation",
        "Quantity, pairs and set components",
        "Size label or option marker",
        "Accessories promised in the selected option"
      ]
    },
    {
      heading: "Compare measurements with something you own",
      paragraphs: [
        "Size labels are inconsistent across sellers and categories. If fit matters, compare warehouse measurements with a familiar item measured at the same points. For a shirt, useful dimensions can include chest width, body length and shoulder width. For trousers, waist, rise, inseam and leg opening may matter. For shoes, an insole or outsole measurement is often more actionable than the printed size alone.",
        "The comparison must use the same method. A flat garment width is not the same as body circumference, and a curved measurement can differ from a straight-line measurement. Record both the value and the measurement point in the spreadsheet. If the standard photos do not show the dimension that would change your decision, a paid detailed photo can be more useful than guessing."
      ]
    },
    {
      heading: "Inspect construction by product category",
      paragraphs: [
        "For clothing, look for seam continuity, loose threads that suggest an unfinished area, print or embroidery placement, panel symmetry, zipper alignment and visible stains. For shoes, compare the left and right item, outsole shape, toe alignment, glue marks, heel structure and hardware. For bags or accessories, inspect corners, closures, straps, attachment points and the presence of small components.",
        "Use the listing only as a reference for the offered appearance, not as proof of the warehouse item’s quality. Lighting and camera angle can change color and proportions. Focus on repeatable observations: the logo or graphic is visibly off-center, one shoe differs from the other, a seam is open, the requested accessory is absent, or a measured length differs from your recorded requirement."
      ]
    },
    {
      heading: "Know when to request a detailed photo",
      paragraphs: [
        "A detailed photo is worthwhile when it answers a decision that the free views cannot answer. Good requests identify one location and one purpose: photograph the size tag clearly, place a ruler across the chest, show the zipper teeth at close range, photograph the sole label, or lay all included accessories in one frame. Vague requests such as “check quality” are difficult to turn into useful evidence.",
        "Superbuy’s current fee page uses a CN¥3 detailed-photo charge in its stage-one example, but optional-service prices can change. Check the live service selection before ordering. The right question is not whether an extra image is cheap; it is whether the image can prevent a more expensive mistake before international shipping."
      ]
    },
    {
      heading: "Treat 1688 and special items carefully",
      paragraphs: [
        "Superbuy’s guide states that products purchased from 1688 use a different quality-control standard. The terms also explain that professional inspection may be unavailable for certain categories, including some electronics, cards, models and items that cannot be opened, so inspection may be limited to visible appearance and apparent completeness.",
        "For fragile, customized, deposit-based, second-hand or technically complex items, write stricter questions before purchase. A warehouse photo cannot test every function or authenticate every claim. If the seller does not accept returns, if the order is customized or if opening the packaging changes eligibility, the spreadsheet should display that risk instead of applying the same green “pass” used for an ordinary garment."
      ]
    },
    {
      heading: "Make the pass, request or return decision promptly",
      paragraphs: [
        "The most useful QC outcome is a next action. Pass means the visible checks you defined were answered and the item can move toward parcel planning. Request means one missing view or measurement could still change the decision. Return means the item appears mismatched or unacceptable and the current seller and platform rules allow an application.",
        "Superbuy’s published terms describe a five-day no-reason return or exchange framework for eligible shopping-agent products, with limits and exceptions. Do not treat that as a universal guarantee. Seller policy, product type, order status and service rules matter, and second-hand or customized products may not qualify. Check the live after-sales option immediately when a problem is found rather than waiting until parcel submission."
      ]
    },
    {
      heading: "A repeatable QC checklist",
      paragraphs: [
        "Use the same order every time: identity, quantity, option, measurements, construction, surface condition, completeness and one category-specific risk. Save a short result beside each check. If the warehouse flags an abnormality, read the message before making a decision and preserve the relevant photo or note for your own record.",
        "Finish by separating what you know from what you do not know. Visible color matched; measured width was acceptable; print looked centered; material composition remained unverified; durability remained unknown. This language is more honest and more useful than calling the product “verified.” QC photos reduce visible uncertainty, but they do not remove the inherent risks of seller listings and international shipping."
      ]
    },
    {
      heading: "Use storage time as part of quality control",
      paragraphs: [
        "The official workflow currently gives items 90 days of free warehouse storage. That window allows multiple purchases to arrive and be consolidated, but it is also time for inspection. Record the arrival date, photo-review date, any question sent and the final decision. Do not let an item sit untouched until the parcel deadline is close.",
        "When several items are in storage, prioritize those with return uncertainty, missing measurements or visible anomalies. Routine items can wait; decision-critical items should be resolved early. A disciplined QC record makes parcel submission faster because every item already has a documented reason to ship, request more evidence or leave the group."
      ]
    },
    {
      heading: "Common QC mistakes to avoid",
      paragraphs: [
        "Do not compare warehouse photographs only with an influencer image, an old spreadsheet thumbnail or a different seller’s item. Compare them with the exact listing and option saved at purchase. Do not reject an item solely because lighting changes the color slightly; look for several consistent signals and request a clearer image when color is decision-critical. Do not mistake packaging wrinkles for construction defects without checking the relevant close view.",
        "The opposite error is accepting everything because the product is already at the warehouse. International shipping can cost more than a domestic return, so unresolved problems are cheapest to investigate before parcel submission. Make a short evidence log, act within the available after-sales window and avoid claims that the photos cannot support. This keeps the checklist practical rather than turning it into a promise of perfect quality."
      ]
    }
  ],
  "shipping-cost-planning": [
    {
      heading: "Why a product price cannot predict the delivered cost",
      paragraphs: [
        "Superbuy separates the shopping-agent process into two broad cost stages. Stage one covers the item, domestic shipping in China and any selected purchasing or product services. Stage two begins when stored items are submitted as an international parcel. The official fee page says international shipping is calculated from the final parcel weight, selected line and destination country or region.",
        "This means a product card showing a USD reference is not a landed-cost quote. Before warehouse arrival, package size, verified weight, route eligibility, optional packing and destination charges are incomplete. Use a range for planning and replace estimates with live parcel data when it becomes available."
      ]
    },
    {
      heading: "Understand the shipping deposit and final adjustment",
      paragraphs: [
        "The official shopping-agent guide says the international shipping deposit is calculated from estimated product weight, chosen shipping method and destination. After packing, the shipping company verifies package size and weight. If the final fee differs from the deposit, the difference is returned to the Superbuy account after dispatch according to the current guide.",
        "That process explains why an early estimate and final charge may differ without either being a simple error. Record the estimate date, assumed weight, route and quoted amount. When the parcel is packed, record actual chargeable data and final adjustment separately. Comparing like with like makes future estimates more useful."
      ]
    },
    {
      heading: "Learn the difference between actual and volumetric weight",
      paragraphs: [
        "Actual weight is what the parcel weighs on a scale. Volumetric weight is a carrier calculation based on parcel dimensions, designed to price the space a shipment occupies. A light but bulky box may be charged as though it were heavier. The divisor and rounding rules vary by line, so do not copy a single universal formula into the spreadsheet as if every carrier used it.",
        "For soft goods, removing unnecessary retail packaging may reduce volume. For shoes, fragile items or collectible boxes, packaging removal can create a different risk. The correct decision balances dimensional savings against protection and the value of original packaging. Check the options available for the actual parcel rather than assuming maximum compression is always best."
      ]
    },
    {
      heading: "Consolidate because the group works, not because it is large",
      paragraphs: [
        "Superbuy states that multiple warehouse orders can be consolidated into one parcel for free, potentially lowering international shipping cost. Consolidation can reduce repeated base charges and packaging, but it can also create a bulkier parcel, change chargeable weight, cross a route limit or mix items with different restrictions.",
        "Build proposed parcel groups in your spreadsheet. For each group, note estimated weight, likely dimensions, fragile items, batteries or liquids, original boxes, high-value pieces and destination restrictions. Compare at least two sensible groupings after warehouse data appears. Sometimes one consolidated parcel wins; sometimes separating a bulky or restricted item leaves better routes for everything else."
      ]
    },
    {
      heading: "Compare eligible routes, not headline rates",
      paragraphs: [
        "Superbuy’s homepage currently advertises more than 100 shipping lines and service to more than 200 countries and regions, but the routes shown for one parcel are filtered by destination, item attributes, weight, dimensions and current carrier conditions. A low rate mentioned in an old post may not be available for your shipment.",
        "Compare the live options on the same day using the same parcel data. Record quoted price, estimated delivery range, chargeable-weight rule, tracking level, restrictions, insurance availability and any tax-handling description shown for that route. Do not rank lines by price alone, and do not promise a delivery time that depends on a third-party carrier or customs."
      ]
    },
    {
      heading: "Use packing services selectively",
      paragraphs: [
        "The official guide lists package removal, reinforcement and insurance among additional parcel services. Each option solves a different problem. Package removal can reduce size; reinforcement can improve protection; insurance can change the compensation framework for eligible loss or damage. None should be selected automatically for every order.",
        "Match the service to the item. Soft clothing may need little extra protection, while fragile or irregular goods may justify reinforcement. A valuable parcel may warrant reviewing insurance terms, exclusions and insured value. The spreadsheet should record why an option was selected, because optional services affect both cost and risk."
      ]
    },
    {
      heading: "Treat customs and taxes as destination-specific",
      paragraphs: [
        "Superbuy’s fee page identifies customs charges such as tariffs or VAT as recipient costs determined by the destination country and declared value. Its terms also warn that customs, security checks and carrier handling can create delay, return, damage, loss or confiscation risks outside the platform’s direct control. No spreadsheet can honestly guarantee tax-free delivery.",
        "Before submitting a parcel, check current destination rules, prohibited or restricted item guidance and the information requested for declaration. Avoid copying declarations from unrelated parcels or countries. Record the source and date of any customs assumption, and leave room for change when regulations or carrier procedures update."
      ]
    },
    {
      heading: "Plan with three estimates",
      paragraphs: [
        "Use three numbers instead of one. The discovery estimate is a rough range based on product type and seller information. The warehouse estimate uses received weight, measurements and the proposed parcel group. The submission estimate is the live quote for the chosen route and options. Only the last of these is close to an actionable shipping decision, and even it may be adjusted after final verification.",
        "Keep domestic shipping separate from international shipping. Include selected packing services and a destination-risk allowance in your budget. This approach will not make every parcel cheap, but it prevents a low product price from hiding the second-stage cost that becomes visible only after warehouse arrival."
      ]
    },
    {
      heading: "The final parcel-submission checklist",
      paragraphs: [
        "Before paying the shipping deposit, confirm that every included item has passed its visible QC decision, the destination address is complete, the parcel grouping still makes sense, and the selected line accepts the item attributes. Review actual versus volumetric weight, package-removal or reinforcement requests, insurance terms and the current customs information for the destination.",
        "Save the route, quote, submission date and tracking record. After delivery, compare estimated and final cost, transit time and any adjustment. That history turns the next shipping estimate into evidence rather than guesswork. The goal is not to predict an exact price too early; it is to make each uncertainty smaller at the stage when better data becomes available."
      ]
    },
    {
      heading: "Common shipping-planning mistakes",
      paragraphs: [
        "The first mistake is adding a fixed shipping amount to every product before warehouse data exists. The second is choosing the lowest visible quote without checking eligibility, tracking, restrictions or compensation terms. The third is combining every stored item automatically, even when one bulky or sensitive product removes otherwise useful routes. The fourth is treating an estimated delivery range as a guaranteed arrival date.",
        "Avoid these errors by keeping assumptions dated and reversible. Recalculate when the parcel group changes, when dimensions are updated or when a carrier notice affects the destination. Use the live calculator and the actual routes shown for the submitted parcel, then read the current line details before payment. A good plan is not a single perfect prediction; it is a record of what changed and why the final choice remained reasonable."
      ]
    }
  ]
};
