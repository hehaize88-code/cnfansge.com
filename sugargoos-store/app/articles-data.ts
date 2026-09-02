import type { Language } from "./site-data";
import { spreadsheetMaintenanceArticles } from "./spreadsheet-maintenance-article";

export type ArticleSection = { heading: string; body: string[] };
export type Article = {
  slug: string;
  title: string;
  dek: string;
  label: string;
  published: string;
  readTime: string;
  primaryKeyword: string;
  sourceLine: string;
  visual: {
    title: string;
    items: { label: string; value: string; note: string }[];
  };
  sections: ArticleSection[];
};

const englishArticles: Article[] = [
  {
    slug: "sugargoo-spreadsheet-guide-2026",
    title: "How to Use a Sugargoo Spreadsheet Without Buying Blind",
    dek: "A 2026 decision framework for checking links, variants, CNY prices, warehouse photos, and parcel weight before committing to international shipping.",
    label: "Spreadsheet field guide",
    published: "September 1, 2026",
    readTime: "14 min read",
    primaryKeyword: "Sugargoo spreadsheet 2026",
    sourceLine: "Source review: Sugargoo official workflow, QC, storage and shipping guidance checked September 1, 2026.",
    visual: {
      title: "A spreadsheet route becomes useful only after four checks",
      items: [
        { label: "01 · Route", value: "Live page", note: "Confirm that the original listing and seller page still load." },
        { label: "02 · Variant", value: "Exact SKU", note: "Match size, color, model and seller notes before payment." },
        { label: "03 · QC", value: "Your item", note: "Judge the warehouse photos from your own order, not a sample." },
        { label: "04 · Parcel", value: "Chargeable", note: "Check weight, dimensions, restrictions and the live route quote." },
      ],
    },
    sections: [
      {
        heading: "A spreadsheet is a discovery tool, not proof",
        body: [
          "A useful Sugargoo spreadsheet reduces the time spent browsing unfamiliar Chinese marketplaces. It groups product routes into recognizable categories and makes it easier to compare images, reference prices, and seller pages. That convenience has a hard limit: a row cannot prove that stock is current, the seller will ship the pictured batch, or the item will meet your expectations. Treat every card as the beginning of research rather than a recommendation to pay.",
          "The independent catalog on this site therefore sends you to a live source page instead of copying a marketplace listing into a closed checkout. Open the route, inspect what is visible today, and remember that a product ID can remain active while its available colors, price, seller, or delivery promise changes. The most important habit is simple: verify the live listing at the moment you order.",
        ],
      },
      {
        heading: "Start by confirming the original marketplace route",
        body: [
          "Before pasting anything into an agent, identify the original marketplace. Taobao, Tmall, Weidian, 1688, JD, Xianyu, and Yupoo-style catalogs behave differently. Some offer structured variants and purchase history; others rely on manual notes or images. Confirm that the seller page loads, the item has not been replaced with a different product, and the selected size or color is still shown. A screenshot from a spreadsheet is not enough when the underlying listing has changed.",
          "If the route redirects to a login screen, error page, unrelated product, or a price that is dramatically different from the catalog reference, stop. Search for an alternative rather than forcing the order through. A clean spreadsheet should save time, not persuade you to ignore warning signs.",
        ],
      },
      {
        heading: "Understand what the buying agent actually does",
        body: [
          "Sugargoo operates as a purchasing and logistics agent. The typical flow is to submit a marketplace link, pay for the product and domestic delivery, wait for the seller to send it to the warehouse, review product photos, then create and pay for an international parcel. These stages are separate. Paying for the item does not include the final international shipment, and a successful purchase does not mean every international route will accept the item.",
          "Official Sugargoo guidance also describes warehouse inspection, optional services, consolidation, and tracking. Use the platform dashboard for the current status of your own order. An independent spreadsheet cannot see your account, solve a refund, change warehouse handling, or guarantee a delivery date.",
        ],
      },
      {
        heading: "Match the exact variant before paying",
        body: [
          "Large marketplace listings may contain dozens of colors or styles under one product ID. The headline image in a spreadsheet can represent only one of them. Compare the variant thumbnail, Chinese text, SKU code, size, color, and any seller note before submitting the order. If the agent form does not import the options correctly, use a clear order remark and attach the correct reference image where the platform permits it.",
          "For clothing and footwear, variant mistakes are expensive because international shipping can exceed the product price. A different shade, wrong size system, or mismatched model may be visible only after warehouse arrival. Precise selection at the beginning reduces refund delays and avoids paying domestic return freight for a preventable mistake.",
        ],
      },
      {
        heading: "Read CNY and USD prices correctly",
        body: [
          "The source catalog stores prices in Chinese yuan. This site shows an indicative US dollar value using ¥6.72 per US$1, based on the market rate checked on September 1, 2026. It is a browsing aid, not a checkout quote. Your payment provider, platform balance conversion, handling charges, domestic freight, optional services, and international shipping can all change the total.",
          "Compare products in CNY when possible because that is the seller’s native price. Use the dollar estimate only to shortlist. Before payment, review the exact amount shown inside the agent checkout and keep a reasonable buffer for exchange-rate movement and fees. Extremely low prices deserve more scrutiny, not less.",
        ],
      },
      {
        heading: "Look for evidence on the listing, not confidence words",
        body: [
          "Words such as premium, trusted, top batch, verified, and one-to-one are not objective measurements. Instead, look for consistent product photography, variant-specific images, recent transaction evidence where available, clear size information, material details, and a seller history that matches the product. Even then, marketplace evidence reduces uncertainty; it does not eliminate it.",
          "A responsible spreadsheet should not claim that every linked item is high quality. Sellers can change batches, factories can vary, and photos can be reused. Record why a route interests you—price, color, measurement, seller history, or a known model—so you can check that specific reason again when the warehouse photos arrive.",
        ],
      },
      {
        heading: "Plan the QC request before the order arrives",
        body: [
          "Sugargoo’s official help content from 2025–2026 states that five product photos are normally provided after warehouse arrival. Standard angles may be enough to confirm the broad item, but they may not show the detail that matters to you. Decide in advance whether you need an outsole measurement, inside label, embroidery close-up, zipper, serial marking, accessory count, electronics plug, or a photo under neutral light.",
          "When an additional photo is available as an optional service, request it while there is still time to return or exchange the item. A targeted request is more useful than asking the warehouse to judge whether something is ‘good.’ Give a concrete angle, measurement, or defect to inspect.",
        ],
      },
      {
        heading: "Review warehouse photos in a fixed order",
        body: [
          "Start with identity: is it the correct product, color, size, and quantity? Next inspect overall shape, symmetry, and major panels. Then zoom into stitching, prints, hardware, edges, glue, labels, and accessories. Finally compare measurements against an item you already own. This order prevents a small cosmetic detail from distracting you from a completely wrong variant.",
          "Lighting and camera distance can distort color and proportions. Compare several angles and use the measurement ruler as a stronger reference than visual scale. If a suspicious area appears in only one photograph, request a closer view rather than making a decision from a blurred crop.",
        ],
      },
      {
        heading: "Treat size charts as seller information, not universal sizing",
        body: [
          "Marketplace sizes are not standardized across sellers. A medium in one listing can match a small or large elsewhere. Read the actual garment measurements and check whether the chart refers to the garment or the body. For shoes, confirm the relevant internal or outsole measurement when the seller’s size conversion is unclear. For bags and accessories, dimensions affect both use and volumetric shipping weight.",
          "After warehouse arrival, compare the measured chest, length, waist, inseam, or sole with a well-fitting item you own. Allow for the seller’s stated measurement tolerance. If the result is materially different from the listing, save the screenshots and contact platform support before the return window closes.",
        ],
      },
      {
        heading: "Estimate parcel impact before choosing a product",
        body: [
          "A cheap product can be poor value if it is bulky, heavy, fragile, or restricted to an expensive shipping route. Shoes with boxes, thick jackets, speakers, and large bags deserve a parcel check before purchase. Carriers may charge the greater of actual weight and volumetric weight, so a lightweight but oversized item can cost more than expected.",
          "Use the shipping page on this site to compare the two weights. The result is not a live freight quote, but it reveals whether dimensions are likely to dominate. Consider whether packaging can be removed safely, whether items can be consolidated, and whether a battery or liquid changes route eligibility.",
        ],
      },
      {
        heading: "Separate product risk from shipping eligibility",
        body: [
          "A marketplace listing being purchasable does not guarantee that it can be shipped to every country. Batteries, liquids, magnets, food, cosmetics, branded goods, and unusually large items may have route restrictions. The destination’s import laws and carrier rules also change. Check eligibility inside the platform before building a parcel around a single uncertain route.",
          "This site labels electronics as items that deserve an extra route check. That label is not a ban and not a promise. It is a reminder to verify current options using the exact destination and item attributes shown in your account.",
        ],
      },
      {
        heading: "Use a final pre-purchase checklist",
        body: [
          "Before paying, confirm six things: the live marketplace page matches the card; the exact variant is selected; the CNY price and domestic freight make sense; seller evidence is current enough for your risk tolerance; your QC request is planned; and the likely parcel weight and route are acceptable. Save the product link and screenshots that support your decision.",
          "A good spreadsheet makes this process faster without hiding uncertainty. The goal is not to collect the largest number of links. It is to reach the warehouse with fewer surprises, review the received item with a clear standard, and decide on international shipping with the real product in front of you.",
        ],
      },
    ],
  },
  {
    slug: "how-to-read-sugargoo-qc-photos",
    title: "How to Read Sugargoo QC Photos Before Shipping",
    dek: "A category-by-category inspection method for warehouse photos, measurements, extra-photo requests, and return decisions.",
    label: "QC inspection manual",
    published: "August 29, 2026",
    readTime: "13 min read",
    primaryKeyword: "Sugargoo QC photos",
    sourceLine: "Source review: Sugargoo official QC and return guidance checked September 1, 2026.",
    visual: {
      title: "Read warehouse photos from the largest risk to the smallest",
      items: [
        { label: "Identity", value: "Right item", note: "Product, color, size and quantity come before cosmetic details." },
        { label: "Structure", value: "Shape", note: "Compare symmetry, panels, seams, damage and missing parts." },
        { label: "Evidence", value: "Measure", note: "Use rulers and targeted close-ups when an overview is ambiguous." },
        { label: "Decision", value: "Act early", note: "Storage time is not the same as the seller return window." },
      ],
    },
    sections: [
      {
        heading: "QC photos document arrival; they do not certify quality",
        body: [
          "Warehouse QC photos are a record of the product that arrived for your order. They can reveal a wrong color, obvious damage, missing accessory, crooked print, stain, or size-label problem before you pay international shipping. They cannot prove authenticity, material composition, long-term durability, internal construction, or how an item feels in daily use. Start with that boundary and your decisions will be more realistic.",
          "Sugargoo’s official help content says five product photos are normally supplied after warehouse arrival. The exact angles, service coverage, and optional photography can change, so use the current options in your account. Five useful photographs are better than twenty unfocused ones when you know exactly what to inspect.",
        ],
      },
      {
        heading: "Confirm identity and order details first",
        body: [
          "Before zooming into stitching, verify that the warehouse record belongs to the correct order and that the item matches the product, color, size, and quantity you submitted. Compare the order ID, seller reference, variant note, packaging label, and visible size tag. A beautifully made item is still a failed order if it is the wrong model.",
          "For multi-style listings, open the original product route again and compare the selected thumbnail with the warehouse overview. If the seller has changed the live page, use the screenshots saved at purchase. Report an identity mismatch immediately and keep the explanation factual.",
        ],
      },
      {
        heading: "Use the overview for shape, symmetry, and damage",
        body: [
          "The full front and back views answer the largest questions. Look for an uneven silhouette, twisted seams, mismatched panel height, crushed structure, missing parts, stains, holes, or obvious color variation. On footwear, compare the left and right shoe; on clothing, compare sleeves, pockets, and shoulder lines; on bags, check whether the body sits squarely and handles align.",
          "Perspective matters. A camera positioned off-center can make one side look larger. Use repeated evidence across several images before rejecting an item for symmetry. When a concern remains, request a straight, centered photo on a flat surface.",
        ],
      },
      {
        heading: "Do not judge color from one photograph",
        body: [
          "Warehouse lighting, automatic white balance, compression, and your display can shift color. Compare all photos, the seller’s neutral reference, and any color label on the packaging. If exact tone is important, request a photo under neutral light beside a white or gray reference. Avoid asking staff whether a color is accurate; ask for evidence you can evaluate yourself.",
          "Reflective materials, suede, patent surfaces, and black fabric are particularly difficult to judge. A change in texture across angles may be lighting rather than a defect. Look for consistency where the same material appears on different panels.",
        ],
      },
      {
        heading: "Inspect stitching, edges, glue, and hardware",
        body: [
          "Zoom into construction points that carry stress: pocket corners, side seams, zipper ends, strap attachments, sole edges, eyelets, and handles. Look for skipped stitches, loose thread clusters, open seams, frayed edges, excess glue, detached trim, scratches, and hardware that sits at an angle. A few loose thread ends can be cosmetic; an open seam or misaligned attachment is structural.",
          "Ask for a close-up when the standard photo is too soft to distinguish a shadow from damage. Mark the exact area in your request. A focused photo reduces back-and-forth and creates better evidence for support if the item differs from the listing.",
        ],
      },
      {
        heading: "Compare graphics, embroidery, and labels carefully",
        body: [
          "Check placement, scale, alignment, spelling, and edge quality. Compare a graphic with the product image while accounting for garment size. Embroidery should be examined for gaps, pulled fabric, uneven density, or loose borders. Labels can help confirm size and care information, but a label alone does not establish authenticity.",
          "If your decision depends on a small detail, request a square, close photograph rather than enlarging a distant overview. Image enhancement cannot restore detail that was never captured, and heavy sharpening can create misleading edges.",
        ],
      },
      {
        heading: "Measurements are often more useful than appearance",
        body: [
          "For apparel, compare chest width, body length, sleeve length, waist, rise, and inseam with a garment that already fits. Confirm where the ruler begins and whether the fabric is flat without being stretched. For shoes, request the insole or outsole measurement appropriate to the listing. For bags, check width, height, and depth because those dimensions affect both use and shipping volume.",
          "A measurement photo is evidence, not an interpretation. Record the number yourself and compare it with the seller chart and stated tolerance. If the discrepancy is significant, contact support before accepting the parcel.",
        ],
      },
      {
        heading: "Footwear needs left-right comparison",
        body: [
          "Place both shoes side by side in your review. Compare toe shape, heel height, panel alignment, tongue length, outsole attachment, lace holes, and visible size marks. Then inspect the medial and lateral sides separately. A single hero angle can hide differences between the pair.",
          "Boxes are often damaged during domestic transport and may add parcel weight. Decide whether the box matters before international packing. If the item itself is damaged, do not assume the box explains it; request a closer image and document the condition.",
        ],
      },
      {
        heading: "Electronics and battery items require different checks",
        body: [
          "Photos can confirm model appearance, plug type, included cable, visible screen damage, packaging, and accessory count. They usually cannot prove battery capacity, sound quality, wireless stability, internal components, or long-term safety. Ask whether a supported functional test exists, but do not treat a brief power-on as a complete evaluation.",
          "Battery products can also have fewer international routes. Check shipping eligibility before accepting the order, especially if the product is the main reason for the parcel. Do not rely on a product card to predict current carrier rules.",
        ],
      },
      {
        heading: "Request extra photos with precise instructions",
        body: [
          "A strong request identifies one area, one angle, and one purpose: ‘photograph the left pocket seam from 20 centimeters,’ ‘measure the insole from heel to longest toe,’ or ‘show the charging-port label and included plug.’ Avoid broad requests such as ‘check quality’ because warehouse staff cannot apply your personal standard without direction.",
          "Submit the request early enough to preserve the seller’s return window. Official storage guidance states a longer warehouse period, but storage time is not the same as the return deadline. The countdown in your order and current support response should guide the decision.",
        ],
      },
      {
        heading: "Make a return decision based on material differences",
        body: [
          "Separate issues into three groups: wrong order, material defect, and acceptable variation. Wrong size, wrong color, missing components, major damage, or a listing mismatch deserves immediate escalation. Minor thread ends, packaging dents, or small color differences may be acceptable depending on price and use. Your threshold should be decided before the photos arrive, not after you become attached to the purchase.",
          "Keep the source listing, order notes, QC photos, and measurements together. Describe observable facts to support rather than using vague labels such as bad quality. The platform and seller can respond more effectively to a specific discrepancy.",
        ],
      },
      {
        heading: "Approve shipping only after a final parcel check",
        body: [
          "Once the item is acceptable, review whether original packaging is necessary, whether fragile parts need protection, and whether consolidation changes volumetric weight. Confirm the destination, route restrictions, declaration requirements, and the current chargeable weight shown by the platform. QC approval and shipping choice are two separate decisions.",
          "Download or save the warehouse photos before shipment. They provide a condition record if the parcel arrives damaged or incomplete. A disciplined QC routine does not remove every risk, but it converts a rushed visual impression into a documented decision. Add the seller listing, ordered variant and any extra-photo request to the same folder; when a problem appears later, the complete sequence is far more useful than a single cropped warehouse image without its order context, date or measurement reference. Name files by order and date so a later parcel claim can distinguish seller evidence, warehouse condition and delivery damage without guessing which photograph belongs to which stage or item.",
        ],
      },
    ],
  },
  {
    slug: "sugargoo-shipping-cost-guide-2026",
    title: "Sugargoo Shipping Cost Guide 2026: Weight, Volume and Real Parcel Planning",
    dek: "A practical method for comparing actual and volumetric weight, route rules, pre-shipment simulation, consolidation, packaging and insurance before paying for a parcel.",
    label: "Shipping cost field guide",
    published: "September 1, 2026",
    readTime: "15 min read",
    primaryKeyword: "Sugargoo shipping cost",
    sourceLine: "Source review: Sugargoo official shipping, package simulation, insurance and restricted-item guidance checked September 1, 2026.",
    visual: {
      title: "A parcel quote is built from more than kilograms",
      items: [
        { label: "Mass", value: "Actual kg", note: "Products plus the final carton and protective materials." },
        { label: "Space", value: "L × W × H", note: "Bulky parcels may be billed by route-specific volumetric rules." },
        { label: "Eligibility", value: "Item type", note: "Batteries, liquids and other sensitive goods can narrow route choice." },
        { label: "Protection", value: "Options", note: "Packaging, simulation and insurance are separate decisions." },
      ],
    },
    sections: [
      {
        heading: "A shipping estimate is not the final invoice",
        body: [
          "A Sugargoo shipping estimate is useful for planning, but it is produced before or around a parcel workflow that can still change. The final amount depends on the packed weight, carton dimensions, destination, eligible line, product attributes and the carrier’s current billing rule. Treat an early number as a range for decision-making, not a guaranteed price or delivery promise.",
          "Official guidance directs users to enter destination and item information, compare available routes and then pay the overseas delivery fee after parcel submission. That sequence matters. A product can look inexpensive while its box, battery, dimensions or destination makes international delivery the largest part of the total cost.",
        ],
      },
      {
        heading: "List every input before comparing routes",
        body: [
          "Start with destination country and postal area, then record product category, estimated actual weight, packed length, width and height, battery or liquid status, declared value needs and protection requirements. Two parcels with the same actual weight can receive very different quotes when one is larger or contains an item that only a small number of lines accept.",
          "Do not compare routes by headline price alone. Check billing increment, maximum dimensions, insurance availability, tracking level, delivery estimate, customs model and excluded item types. The cheapest visible option is poor value if it cannot legally or safely carry the contents, or if its protection and after-sales terms do not match the risk.",
        ],
      },
      {
        heading: "Understand actual, volumetric and chargeable weight",
        body: [
          "Actual weight is what the finished parcel physically weighs. Volumetric weight estimates the transport space it occupies, commonly using length multiplied by width multiplied by height and divided by a route-specific divisor. Chargeable weight is the value the line uses for billing; depending on the route, it may be actual weight, volumetric weight or the greater of the two.",
          "The calculator on this site uses a divisor of 5000 only as an educational comparison. Sugargoo’s live route terms remain decisive because divisors and rounding rules can differ. If a parcel is light but oversized, focus on dimensions. If it is compact and dense, actual weight is more likely to control the calculation.",
        ],
      },
      {
        heading: "Do not publish one divisor as a universal Sugargoo rule",
        body: [
          "A common SEO mistake is to write that every Sugargoo shipment uses the same volumetric formula. Carrier families, economy lines and destination-specific services can use different divisors, minimum billing weights and size thresholds. A formula that helps explain the concept should never be presented as a permanent platform-wide tariff.",
          "When comparing routes, calculate more than one scenario. Test the current estimated dimensions at 5000 and 6000, then compare those results with actual weight. This does not replace the official estimator, but it reveals how sensitive the parcel is to size and helps you decide whether removing packaging is worth considering.",
        ],
      },
      {
        heading: "Use pre-shipment package simulation when dimensions matter",
        body: [
          "Sugargoo’s published 2025 guide describes a pre-shipment package simulation service that packs the selected goods in advance so users can receive a more realistic weight and volume before choosing a line. The guide displayed an 18 CNY service fee at that time. Prices and availability can change, so the current account screen is the source for a real order.",
          "Simulation is most useful for shoes with boxes, structured bags, thick jackets, multiple fragile items or a parcel near a route limit. It reduces uncertainty; it does not freeze a carrier tariff or guarantee customs treatment. Use the resulting dimensions to compare the routes shown for the exact destination and contents.",
        ],
      },
      {
        heading: "Consolidation saves duplicated packaging but can create volume",
        body: [
          "Official Sugargoo guidance explains that multiple warehouse orders can be combined into one international package. Consolidation often removes duplicated outer cartons and spreads the first-weight charge across more products. It also gives the warehouse one opportunity to apply the requested protection and produce a single trackable parcel.",
          "Bigger is not always cheaper. Combining dense clothing with several shoe boxes can push a parcel into volumetric billing or beyond a route’s dimension limit. Model two or three parcel plans instead of assuming one large box wins. Separate sensitive goods when their presence removes economical lines for otherwise ordinary items.",
        ],
      },
      {
        heading: "Remove packaging selectively, not automatically",
        body: [
          "Discarding retail boxes can reduce both weight and dimensions, especially for footwear. The tradeoff is protection, resale presentation and evidence of the original packaging. Soft clothing can usually tolerate compression better than structured bags, collectibles, electronics or products with fragile surfaces. Decide at item level rather than applying one instruction to the whole parcel.",
          "Optional add-on services described by Sugargoo include packaging, photography and protective reinforcement. Extra protection can increase weight and size while lowering damage risk. The right choice depends on replacement cost, fragility and route handling—not simply on reaching the smallest possible number on a calculator.",
        ],
      },
      {
        heading: "Sensitive goods change eligibility before they change price",
        body: [
          "Sugargoo’s restricted-item guidance identifies batteries, phones, power banks, perfumes, lotions, nail polish, food and supplements as categories that may require special handling or have limited routes. Branded goods and other sensitive items can also be treated differently by carriers and customs. A purchasable marketplace listing is not proof of international eligibility.",
          "Check the exact item status in the warehouse and the route list for the destination. Do not disguise or misdescribe contents to force a cheaper line. If a restricted product is central to the order, verify options before buying; otherwise it can leave the rest of the parcel with fewer choices and a higher total cost.",
        ],
      },
      {
        heading: "Insurance is a contract with limits, not a universal guarantee",
        body: [
          "Sugargoo’s published insurance guide from August 2025 described insured amounts from ¥500 to ¥5000 and a cost calculated as roughly 1%–4% of the insured amount, with one policy per package. Those figures are a dated source snapshot, not a promise for every current route. Read today’s covered events, exclusions, evidence requirements and claim deadline before paying.",
          "Choose insurance by possible loss rather than parcel price alone. A low-value parcel may not justify every option, while a concentrated parcel can create a large single-point risk. Insurance cannot make an ineligible item eligible, prevent customs inspection or turn a delivery estimate into a deadline.",
        ],
      },
      {
        heading: "Customs and declarations belong in the cost model",
        body: [
          "Import VAT, duty, brokerage, handling charges and local collection rules depend on destination, value, product type and current law. Tax-free or triangular routes can have different operational models, but no independent guide can guarantee clearance. Check the route description and destination rules using the real parcel details.",
          "Public reviews in 2026 include both successful deliveries and complaints about delays or declarations. Those reports are individual experiences, not a tariff table. They are useful reminders to review quantities, values and descriptions carefully, save the submitted parcel record and respond promptly if the carrier or customs authority requests information.",
        ],
      },
      {
        heading: "Follow a repeatable quote-to-payment workflow",
        body: [
          "Before purchase, estimate the likely weight and dimensions and confirm that at least one suitable route exists. After warehouse arrival, approve QC, decide which packaging stays, separate sensitive goods where useful and request simulation if volume uncertainty is material. Then compare the live eligible lines using chargeable weight and full terms. Repeat the comparison if removing a box changes any dimension enough to cross a billing threshold; a small physical change can alter the route ranking more than a larger change in actual weight.",
          "Save the final packed measurements, selected route, insurance choice, declaration and tracking number. A careful shipping decision is not the hunt for one permanent cheapest line. It is a documented comparison made with the current destination, actual contents and the platform information available at parcel submission. Keep the early estimate beside the packed result so you can learn which assumptions were wrong and improve the next parcel instead of relying on a generic shipping-price claim.",
        ],
      },
    ],
  },
  {
    slug: "sugargoo-fees-cost-breakdown-2026",
    title: "Sugargoo Fees Explained 2026: The Full Cost Before International Shipping",
    dek: "A transparent landed-cost model covering product price, domestic freight, payment handling, exchange rates, optional services, parcel shipping, insurance and import charges.",
    label: "Fees and landed cost",
    published: "September 1, 2026",
    readTime: "14 min read",
    primaryKeyword: "Sugargoo fees 2026",
    sourceLine: "Source review: Sugargoo official payment, purchasing, add-on, refund and shipping guidance checked September 1, 2026.",
    visual: {
      title: "The seller price is only the first layer of the total",
      items: [
        { label: "Layer 1", value: "Product", note: "Marketplace price, variant premium and Chinese domestic freight." },
        { label: "Layer 2", value: "Payment", note: "Channel handling and the currency conversion shown at checkout." },
        { label: "Layer 3", value: "Warehouse", note: "Optional photos, packaging, simulation and protection." },
        { label: "Layer 4", value: "Delivery", note: "International line, insurance, tax and destination charges." },
      ],
    },
    sections: [
      {
        heading: "Ask for landed cost, not a one-line service-fee answer",
        body: [
          "The question ‘What are Sugargoo’s fees?’ sounds simple but covers several payments made at different stages. A shopper may pay the product price, seller-to-warehouse freight, payment-channel handling, optional warehouse services, international parcel shipping, insurance and destination taxes. Some costs are platform charges, others belong to sellers, payment processors, carriers or customs authorities.",
          "A useful comparison adds every layer for the same basket and destination. Advertising one zero-fee component while ignoring payment conversion or parcel delivery produces a misleading total. Build a cost sheet before ordering and replace estimates with the live amounts shown when each stage becomes payable.",
        ],
      },
      {
        heading: "Begin with the native CNY product price",
        body: [
          "The marketplace listing is normally priced in Chinese yuan. Large listings can add premiums for particular sizes, colors, materials or bundles, so the first image or minimum price may not match the selected variant. Record the exact CNY amount imported into the order form and compare it with the live seller page before payment.",
          "This site shows an indicative USD conversion only to make browsing faster. It does not represent the amount charged by Sugargoo or a card provider. Use CNY to compare products, then use the account checkout for the transaction total and currency conversion that actually applies to the selected payment method.",
        ],
      },
      {
        heading: "Add Chinese domestic freight for every seller",
        body: [
          "Domestic delivery moves the item from the marketplace seller to the Sugargoo packing center. It is separate from international shipping and may be free, fixed or calculated after the order. Ordering from several sellers can create several domestic freight charges even when the products later travel in one consolidated international parcel.",
          "Two apparently identical products can have different landed costs because one seller charges more domestic freight, ships in a larger box or dispatches slowly enough to complicate consolidation. Keep domestic freight as its own row rather than hiding it inside the product price.",
        ],
      },
      {
        heading: "Understand what zero purchasing service fee does and does not mean",
        body: [
          "Sugargoo’s published guidance has promoted a 0% purchasing service fee for major supported marketplaces such as Taobao, Tmall, 1688 and JD. That statement refers to the purchasing-service layer. It does not mean that payment processing, domestic freight, optional services, international shipping or import charges disappear.",
          "Manual orders, resale, forwarding and non-mainstream platforms can follow different rules. The order page and current service description control the real transaction. When comparing agents, use the same product, payment channel, destination and parcel assumptions; otherwise a zero headline and a percentage headline may be describing different parts of the bill.",
        ],
      },
      {
        heading: "Payment-channel charges vary by method and date",
        body: [
          "An official Sugargoo payment guide published in August 2025 listed different handling formulas for different methods, including examples around 4.8% plus US$0.50 and 3.4% plus US$0.30. These are dated examples, not current universal prices. Available methods, fixed charges, percentages and processor rules can change by country and currency.",
          "Before funding a large balance, compare the exact fee shown for a small transaction and consider whether a fixed component makes repeated tiny payments inefficient. Also check withdrawal rules and refund destination. Do not copy an old fee table into a 2026 budget without verifying the live checkout.",
        ],
      },
      {
        heading: "Treat exchange rate as a cost even when it is not labeled a fee",
        body: [
          "Sugargoo’s published articles describe using a floating or real-time exchange rate, but a buyer should still compare the CNY amount, platform conversion, card statement and any foreign-transaction charge. The effective rate is the number of home-currency units paid for the CNY value after all conversion layers.",
          "A small rate difference matters on a large order. Record the live CNY total and the final payment amount at the same moment, then calculate the effective rate. Avoid assuming that the public mid-market rate is what any processor must offer at checkout.",
        ],
      },
      {
        heading: "Optional warehouse services should solve a named risk",
        body: [
          "Sugargoo publishes add-on options for photography, packaging, protection and pre-shipment simulation. The 2025 simulation guide displayed 18 CNY for pre-packing at that time. Extra photographs, measurements, reinforcement and packaging choices can improve evidence or reduce damage risk, but every selected option belongs in the cost model.",
          "Buy a service because it answers a decision: measure an insole, photograph a defect, protect a fragile corner or obtain more realistic parcel dimensions. Generic add-ons purchased without a specific risk can increase cost without changing the outcome.",
        ],
      },
      {
        heading: "International shipping is usually the largest variable",
        body: [
          "After QC approval and parcel preparation, the buyer selects an eligible international route and pays overseas delivery. The quote depends on destination, chargeable weight, dimensions, product type, route rules and optional protection. A low product price cannot compensate for a bulky parcel that triggers volumetric billing.",
          "Model shipping before purchasing heavy or oversized goods. Shoes with boxes, winter jackets, speakers and structured bags can change the economics of an order. Use the live estimator first and package simulation when the unknown dimensions could change the route or price materially.",
        ],
      },
      {
        heading: "Insurance and customs are separate risk budgets",
        body: [
          "Sugargoo’s August 2025 insurance article described insured amounts of ¥500–¥5000 and pricing around 1%–4% of the insured amount. Current coverage and exclusions must be read in the parcel screen. Insurance may cover defined events, but it does not erase prohibited-item rules, customs law or documentation duties.",
          "Destination VAT, duty, brokerage and handling are not predictable from the seller price alone. Some routes include a particular tax-handling model while others do not. Confirm what the route description actually includes and keep a contingency for charges collected after the parcel reaches the destination.",
        ],
      },
      {
        heading: "Refunds can return value without returning every original cost",
        body: [
          "If an order is cancelled before purchase, the process can be relatively simple. After seller purchase or warehouse arrival, a return may depend on seller acceptance, domestic return freight, the platform’s after-sales process and the applicable window. Certain processing or already-used services may not be recoverable.",
          "Official refund guidance describes different processing paths and timeframes, including up to ten working days for some warehouse-stage refunds. Read the current order status and support result rather than treating one timing statement as a guarantee. Record refunded product value, freight and fees separately so the net loss is visible.",
        ],
      },
      {
        heading: "Build a cost table before comparing products",
        body: [
          "Use rows for product CNY, variant premium, domestic freight, payment handling, exchange-rate difference, optional QC, packaging, simulation, international shipping, insurance and destination tax. Create low, likely and high scenarios for the unknown layers. This exposes products whose shipping footprint overwhelms their purchase price.",
          "Update the table at three checkpoints: marketplace submission, warehouse arrival and parcel payment. The best-value choice is not always the lowest seller price. It is the option with an acceptable total, enough evidence to approve QC and a realistic route for the destination.",
        ],
      },
      {
        heading: "Use current checkout evidence in every 2026 decision",
        body: [
          "Official articles are valuable for understanding the workflow, but published percentages and service prices can become outdated. Screenshots of the live payment and parcel pages are stronger evidence for a current order. If a fee or exchange result differs from an older guide, use the amount presented before you confirm payment and ask support about any unclear line. Compare the fee display before and after changing payment method, because a different processor can shift both the percentage and the fixed component without changing the underlying product order.",
          "A transparent cost guide should make uncertainty visible. It should not promise a fixed exchange rate, permanent zero total fees, universal delivery time or customs result. The practical goal is to know which layer can still change and how much buffer the order needs before money is committed. Archive the final CNY and home-currency totals so later refunds, balance credits and processor charges can be reconciled against the same baseline rather than against memory. That record also makes a future agent comparison fair because both services can be measured with the same basket, currency, destination and packed assumptions.",
        ],
      },
    ],
  },
  {
    slug: "sugargoo-review-2026",
    title: "Sugargoo Review 2026: What Official Rules and 641 Public Reviews Actually Show",
    dek: "An evidence-led review separating Sugargoo’s published service model from Trustpilot statistics, Reddit discussion, individual delivery stories and the checks a new buyer should run.",
    label: "Independent review analysis",
    published: "September 1, 2026",
    readTime: "16 min read",
    primaryKeyword: "Sugargoo review 2026",
    sourceLine: "Research snapshot: Sugargoo official material, Trustpilot profile and public Reddit discussions checked September 1, 2026.",
    visual: {
      title: "Trustpilot snapshot — September 1, 2026",
      items: [
        { label: "Profile", value: "3.4 / 5", note: "Average score shown across 641 reviews at the research snapshot." },
        { label: "Positive", value: "60% 5-star", note: "The distribution also showed 11% four-star and 6% three-star." },
        { label: "Negative", value: "19% 1-star", note: "Two-star reviews represented 4% of the displayed distribution." },
        { label: "Response", value: "85%", note: "Share of negative reviews Trustpilot said the company had answered." },
      ],
    },
    sections: [
      {
        heading: "This review uses three evidence layers",
        body: [
          "A reliable Sugargoo review should separate what the company says it offers, what an independent review platform measures and what individual customers report. Official pages can establish the workflow and published service rules. Trustpilot provides a changing score and distribution. Reddit and review text reveal recurring questions and experiences, but none of those personal accounts can be independently verified from the post alone.",
          "The research snapshot for this article was taken on September 1, 2026. Numbers can move after publication, operational rules can change and a seller or shipping line can affect the outcome separately from the agent. The aim is not to declare a platform universally good or bad; it is to identify which claims can be checked before a first order.",
        ],
      },
      {
        heading: "What Sugargoo officially says it does",
        body: [
          "Sugargoo describes itself as a purchasing, warehousing, consolidation and international logistics service for goods sourced from Chinese marketplaces. The normal flow is marketplace submission, product payment, seller delivery to the packing center, warehouse photography, parcel preparation, route selection and international tracking. Product purchase and overseas parcel payment are separate stages.",
          "Published guidance also describes five free QC photos per product after warehouse arrival, optional photography and packaging, ordinary purchasing storage of up to 100 days, shorter storage for some forwarding or resale orders, and multiple shipping routes. These are operational claims that should still be checked in the live account because category, destination and order type matter.",
        ],
      },
      {
        heading: "The Trustpilot score is mixed rather than one-sided",
        body: [
          "Trustpilot displayed 641 reviews and a 3.4 out of 5 average on September 1, 2026. The visible distribution was 60% five-star, 11% four-star, 6% three-star, 4% two-star and 19% one-star. Trustpilot also stated that Sugargoo had replied to 85% of negative reviews, typically within two weeks, and showed 50 reviews in the previous twelve months.",
          "Those numbers describe the profile at one point in time; they do not measure every order or prove that each post is accurate. The polarized distribution matters more than a single average. Many users report smooth orders, while a meaningful minority describe severe problems. A new buyer should therefore design a small, documented test rather than relying on the headline score alone.",
        ],
      },
      {
        heading: "Positive reviews commonly mention support, packaging and completed hauls",
        body: [
          "Recent positive reviewers described easy ordering, helpful customer service, careful packaging and parcels arriving without damage. Some reported deliveries to European destinations around one to two weeks, while others emphasized years of repeat use. These are personal outcomes tied to a particular route, period, parcel and expectation; they should not be converted into a universal delivery claim.",
          "The useful signal is the process behind the praise. Buyers valued clear support responses, adequate warehouse evidence and protection that matched the products. You can test those elements on a low-risk order: ask one specific question, inspect the response, request one measurable QC detail and compare the packed result with the selected service.",
        ],
      },
      {
        heading: "Negative reviews cluster around delays, communication and exception handling",
        body: [
          "One-star and lower-rated reviews in 2026 included complaints about long waits, tracking uncertainty, inconsistent answers, account reviews, refunds and parcels that customers said were delayed or returned. Some reviewers disputed customs declarations or the handling of collectibles. These are allegations or experiences reported by individuals, not independently established findings about every transaction.",
          "They still identify the areas where documentation matters most. Save the marketplace listing, payment record, QC images, packed weight, declaration, route terms and tracking number. If a parcel stalls, ask support one precise question and keep the written reply. A review article should turn complaint themes into a risk-control checklist, not repeat accusations as fact.",
        ],
      },
      {
        heading: "QC receives praise and criticism for the same reason",
        body: [
          "Sugargoo’s official standard of five free photos per product gives buyers a real inspection opportunity before international shipment. Positive reviews often praise QC access. Other reviewers say some images were rushed, blurry or did not follow a special instruction. Both patterns can coexist because usefulness depends on the product, angles and the buyer’s request.",
          "Plan the inspection before warehouse arrival. Standard views should confirm identity and visible condition; targeted requests should specify one area, angle or measurement. If a photo is unclear, request evidence while the seller return window may still be open. Do not treat the existence of QC photos as certification of authenticity or durability.",
        ],
      },
      {
        heading: "Delivery estimates are forecasts, not deadlines",
        body: [
          "Public discussions contain both faster-than-estimated deliveries and parcels that took far longer than the displayed range. An official Sugargoo Reddit parcel-check post in 2026 noted that some tax-free lines may show no public tracking before customs clearance and that no update in the first five days can be normal. That guidance explains a pattern; it does not guarantee a later scan.",
          "Judge a line by eligibility, tracking model, chargeable weight, insurance and current operational notices—not by the shortest number alone. Seasonal volume, weather, customs and last-mile handoff can change the result. If arrival timing is critical, build margin into the purchase rather than treating an estimate as a contractual date.",
        ],
      },
      {
        heading: "Restrictions and link handling are a frequent source of confusion",
        body: [
          "Reddit discussions repeatedly ask why some marketplace links require manual orders or why particular products cannot be purchased or shipped. Sugargoo’s own guidance distinguishes ordinary and sensitive items and notes route limitations for batteries, liquids, food, cosmetics and other restricted categories. Branded goods and destination rules can introduce further checks.",
          "A link loading successfully does not prove purchase approval or international eligibility. Check the live warning, item attribute and route list before paying. If the product requires a manual order, provide precise variant information and understand that after-sales handling may differ from a structured mainstream marketplace order.",
        ],
      },
      {
        heading: "Official communities are useful but not independent review samples",
        body: [
          "The Sugargoo subreddit contains route notices, help posts, QC discussions, positive haul reports and complaints. It also has platform-specific rules and official participation. That makes it valuable for current operational signals, but it is not a neutral random sample of all customers. Promotional posts, help requests and self-selected reviews have different incentives.",
          "Use community content to discover questions that deserve verification: tracking gaps, new customs notices, link restrictions or packaging issues. Then check the official account, carrier record or written policy for the real order. Avoid using an isolated viral post as proof of platform-wide performance.",
        ],
      },
      {
        heading: "No agent rating proves the seller or product",
        body: [
          "Sugargoo can purchase, receive, photograph and forward a product, but the marketplace seller determines what is dispatched. A positive platform review does not establish product authenticity, material, batch consistency or seller reliability. A failed seller order also does not automatically prove that the warehouse or carrier caused the problem.",
          "Separate the chain into seller, agent warehouse, international line, customs and last mile. Save evidence at every handoff. This makes support requests clearer and prevents a broad platform reputation from replacing the specific checks required for one product.",
        ],
      },
      {
        heading: "Run a controlled first-order test",
        body: [
          "Choose one or two ordinary, non-fragile products from a seller with clear variants. Avoid a time-sensitive event, large balance or restricted item. Record the CNY price, domestic freight and payment cost. At warehouse arrival, inspect the five standard photos, request one precise measurement and note how support handles any question.",
          "Before shipping, compare actual and volumetric weight, read the eligible route terms and decide whether insurance is justified. Save the packed record and tracking. This test measures the parts of the workflow that matter to you without exposing a large parcel to an untested process.",
        ],
      },
      {
        heading: "The evidence supports a conditional verdict, not a slogan",
        body: [
          "Sugargoo has a documented end-to-end agent workflow, established warehouse and parcel features, and many customers who report successful repeat use. It also has a mixed 2026 public review profile with recurring complaints about delays, communication, restrictions and exceptional cases. Both facts belong in an honest assessment.",
          "It can be a workable option for buyers who verify listings, use QC actively, understand chargeable weight and keep complete records. It is a poor fit for anyone expecting a marketplace listing to equal guaranteed quality, an estimate to equal a deadline or an agent to remove customs and seller risk. Start small, test the workflow and decide from your own documented order.",
        ],
      },
    ],
  },
  {
    slug: "sugargoo-returns-refunds-storage-guide",
    title: "Sugargoo Returns, Refunds and Warehouse Storage: The Three Clocks Buyers Miss",
    dek: "A 2026 after-sales guide to seller return windows, purchase-order storage, forwarding storage, cancellation stages, evidence, refund timing and parcel claims.",
    label: "Returns and storage manual",
    published: "September 1, 2026",
    readTime: "14 min read",
    primaryKeyword: "Sugargoo return refund storage",
    sourceLine: "Source review: Sugargoo official return, cancellation, refund and storage guidance checked September 1, 2026.",
    visual: {
      title: "Three clocks can run at the same time",
      items: [
        { label: "Seller", value: "Return window", note: "Often the shortest clock and dependent on seller/platform acceptance." },
        { label: "Warehouse", value: "100 / 30 days", note: "Published guidance separates purchasing orders from forwarding or resale." },
        { label: "Refund", value: "Processing", note: "Timing depends on order stage, seller response and payment destination." },
        { label: "Parcel", value: "Claim deadline", note: "After shipment, carrier and insurance evidence rules become separate." },
      ],
    },
    sections: [
      {
        heading: "Storage time is not return time",
        body: [
          "Buyers often see a long warehouse countdown and assume they have the same period to reject a product. That is incorrect. Seller returns, warehouse storage, refund processing and post-shipment claims are different clocks. The seller window may close while the item still has many days of storage left.",
          "Open the order record as soon as warehouse photos appear. Check the current after-sales button, seller terms and any platform notice before spending days discussing a visible problem. The safest rule is to make the product decision immediately and use storage only for parcel planning.",
        ],
      },
      {
        heading: "Official storage guidance distinguishes order types",
        body: [
          "Sugargoo’s August 2025 storage article states 100 days for purchasing orders and 30 days for resale and forwarding orders, counted from the status changing to the packing center. This is more precise than the common statement that every item receives 100 free days. The live account countdown remains decisive for a current order.",
          "Record the arrival date and storage category for each item. Products purchased weeks apart can have different deadlines. If consolidation depends on a slow seller, do not let the earliest item expire while waiting. Create reminders well before the final day and contact support if the displayed classification appears wrong.",
        ],
      },
      {
        heading: "Mainstream marketplace returns still depend on the seller",
        body: [
          "Sugargoo’s published Taobao and 1688 return guidance described a five-day return option for eligible orders. That does not mean every product can be returned for any reason. Customized goods, special categories, seller exclusions, damaged packaging and manual or non-mainstream orders can follow different conditions.",
          "Verify the return option on the specific order instead of copying a general rule. If the listing promises a size, color, quantity or component that did not arrive, save the product page and submit the observable discrepancy. A factual claim is easier to process than a broad statement that the quality is bad.",
        ],
      },
      {
        heading: "Cancellation changes after the agent purchases the item",
        body: [
          "An order that has not yet been purchased may be cancelled with relatively little seller involvement. Once Sugargoo has bought the product, cancellation requires coordination with the seller. After dispatch or warehouse arrival, the process becomes a return, with domestic logistics, acceptance and timing that can no longer be controlled by a single button.",
          "Official cancellation guidance separates these stages. Read the current status before submitting a duplicate request or placing a replacement order. If a deadline matters, ask support whether the seller has accepted cancellation and whether the refund is waiting on a physical return.",
        ],
      },
      {
        heading: "QC evidence should be built for an after-sales decision",
        body: [
          "The five standard warehouse photos can confirm the broad product, but a return request often needs evidence of the exact mismatch. Request a close-up of damage, a measurement, accessory count, label or variant code while the return option is available. Save the original seller page and order remark alongside the photographs.",
          "Do not ask the warehouse to certify authenticity or future durability. Ask it to document visible facts. If the problem is a wrong size, show the ordered variant and measured or labeled result. If a part is missing, show the seller’s included-items image and the warehouse overview.",
        ],
      },
      {
        heading: "Domestic return freight and processing can affect the refund",
        body: [
          "A seller may cover return freight when the seller is responsible, while a preference-based return can leave domestic delivery or processing with the buyer. Sugargoo’s published returns guide discusses cases where the first domestic fee is refunded and the seller covers return shipping, while noting that some processing deductions can remain.",
          "Do not assume the product price equals the final refund. Ask which amount covers the item, original domestic freight, return freight and any used service. Keep each amount on a separate line so a partial refund is not mistaken for a missing payment.",
        ],
      },
      {
        heading: "Refund timing depends on the physical stage",
        body: [
          "Sugargoo’s 2025 refund guide described different paths, including refunds within ten working days for some goods already received at the packing center. A seller must often receive or acknowledge a returned item before the agent can complete the balance credit. Weekends, marketplace disputes and payment withdrawal add further time.",
          "Treat published timing as a service description, not a guaranteed deadline for every case. Record the submission date, seller acceptance, return tracking, warehouse confirmation and balance credit. If withdrawing to the original method, check the separate processor time and any currency difference.",
        ],
      },
      {
        heading: "Manual, resale and forwarding orders need extra caution",
        body: [
          "A structured Taobao or 1688 order can import seller and variant data and may support a familiar after-sales path. Manual, resale, Xianyu-style or forwarding orders can have weaker seller protections, special handling and shorter storage. The official 30-day storage distinction for resale and forwarding orders is one visible example.",
          "Before paying, ask what evidence will exist if the seller sends the wrong item and whether returns are accepted. Use precise descriptions, attach the correct reference and avoid ambiguous variants. A cheap manual order can become expensive when the return path is unclear.",
        ],
      },
      {
        heading: "Storage expiry is an operational deadline, not a negotiation strategy",
        body: [
          "Leaving an item until the final storage day reduces the time available to resolve account, packing or route problems. Expired goods can be handled under platform disposal or extended-storage rules that may not preserve their full value. The current account notice, not an old blog summary, controls the consequence.",
          "Plan shipment when the first item reaches a conservative threshold rather than waiting for the last possible day. If a seller delay threatens consolidation, compare the cost of shipping in two parcels with the risk of expiring or repeatedly extending early items.",
        ],
      },
      {
        heading: "After international shipment, use parcel evidence and claim rules",
        body: [
          "Once a parcel leaves the warehouse, a seller return is usually no longer the relevant process. Loss, damage, missing contents, customs return and delay follow route, carrier and insurance rules. Save warehouse photos, packed weight, parcel images, declaration, tracking and the condition of the delivered carton.",
          "Open a claim within the period shown for the route or insurance product. Photograph damage before discarding packaging and compare received contents with the packing record. Public complaints can suggest which evidence is useful, but only the applicable contract and support result determine a claim.",
        ],
      },
      {
        heading: "Use a five-step after-sales checklist",
        body: [
          "First identify the stage: unpaid, purchased, seller-shipped, warehouse-stored or internationally shipped. Second identify the active clock: seller return, storage, refund or parcel claim. Third collect listing, order, photo and payment evidence. Fourth ask for the amounts and actions in writing. Fifth track the result until balance or original payment settlement.",
          "This method replaces vague waiting with a documented case. It cannot force a seller, carrier or customs authority to decide in your favor, but it reduces missed windows and unclear refund totals. The central lesson is simple: act on product problems when QC appears, not when storage is almost over. If support gives a new deadline or asks for additional evidence, add it to a dated case log and answer within that window. Do not open parallel requests with conflicting descriptions; one clear chronology makes seller acceptance, warehouse return, balance credit and payment withdrawal easier to trace. Close the case only after the credited amount matches the written breakdown, not merely when the order status changes. If several products are affected, keep a separate line for every order ID, seller, requested remedy and amount. A single parcel can contain items with different seller windows, storage categories and refund stages, so combining them into one undifferentiated complaint makes it harder to see which action is still outstanding and which deadline needs attention first. Record who must act next—buyer, agent, seller, warehouse, processor or carrier—and the evidence that unlocks that step. This turns a long conversation into a practical queue and prevents a completed refund for one item from hiding an unresolved return for another.",
        ],
      },
    ],
  },
];

function localizedArticleShell(lang: Exclude<Language, "en">, base: Article): Article {
  const localized = localizedArticleText[lang][base.slug];
  return {
    ...base,
    title: localized.title,
    dek: localized.dek,
    label: localized.label,
    readTime: localized.readTime,
    sections: localized.sections.map((section, index) => ({
      heading: section.heading,
      body: section.body.length === base.sections[index].body.length ? section.body : base.sections[index].body,
    })),
  };
}

type LocalizedArticleText = Pick<Article, "title" | "dek" | "label" | "readTime" | "sections">;

function sectionSet(base: Article, headings: string[], first: string[], second: string[]): ArticleSection[] {
  return base.sections.map((_, index) => ({
    heading: headings[index],
    body: [first[index], second[index]],
  }));
}

const localizedArticleText: Record<Exclude<Language, "en">, Record<string, LocalizedArticleText>> = {
  de: {
    "sugargoo-spreadsheet-guide-2026": {
      title: "Eine Sugargoo-Tabelle nutzen, ohne blind zu kaufen",
      dek: "Ein Entscheidungsrahmen für Links, Varianten, CNY-Preise, Lagerfotos und Paketgewicht.",
      label: "Praxisleitfaden Tabelle",
      readTime: "14 Min. Lesezeit",
      sections: englishArticles[0].sections.map((s, i) => ({
        heading: ["Eine Tabelle ist Suche, kein Beweis", "Originalen Marktplatz prüfen", "Die Rolle des Agenten verstehen", "Exakte Variante auswählen", "CNY und USD richtig lesen", "Belege statt Werbewörter", "QC vorab planen", "Lagerfotos systematisch prüfen", "Größentabellen kritisch lesen", "Paketwirkung vor dem Kauf schätzen", "Produktrisiko und Versand trennen", "Abschließende Kaufprüfung"][i],
        body: [
          `Abschnitt ${i + 1} behält denselben Prüfablauf wie die englische Fassung: Live-Angebot, Variante, Preis, Lagerbeleg und Versand werden getrennt bewertet. Eine Produktkarte spart Suchzeit, ersetzt aber weder die aktuelle Verkäuferseite noch die Fotos deines eigenen Auftrags. Prüfe jede konkrete Angabe im Moment der Bestellung und speichere die Belege, die deine Entscheidung stützen.`,
          `Wichtig ist eine nachvollziehbare Reihenfolge statt eines schnellen Qualitätsurteils. Vergleiche CNY-Preis und Variante, plane gezielte Zusatzfotos, kontrolliere Maße und beachte Ist- sowie Volumengewicht. So wird die Tabelle zu einem Recherchewerkzeug und nicht zu einer unbelegten Kaufempfehlung.`,
        ],
      })),
    },
    "how-to-read-sugargoo-qc-photos": {
      title: "Sugargoo-QC-Fotos vor dem Versand richtig lesen",
      dek: "Eine vollständige Prüfmethode für Lagerfotos, Maße, Zusatzbilder und Rückgabeentscheidungen.",
      label: "QC-Prüfhandbuch",
      readTime: "13 Min. Lesezeit",
      sections: englishArticles[1].sections.map((s, i) => ({
        heading: ["QC dokumentiert den Eingang", "Identität zuerst bestätigen", "Form, Symmetrie und Schaden", "Farbe nicht nach einem Bild bewerten", "Nähte, Kanten und Beschläge", "Grafiken, Stickerei und Etiketten", "Maße vor Optik", "Schuhe links und rechts vergleichen", "Elektronik getrennt prüfen", "Zusatzfotos präzise bestellen", "Materielle Abweichungen bewerten", "Vor Versand den Paketcheck abschließen"][i],
        body: [
          `Dieser Prüfschritt entspricht der vollständigen englischen Methode. Kontrolliere zuerst, ob Produkt, Farbe, Größe und Menge stimmen, und gehe danach von der Gesamtform zu Details und Maßen. Lagerfotos können sichtbare Abweichungen zeigen, aber weder Authentizität noch Haltbarkeit oder innere Konstruktion beweisen.`,
          `Wenn ein Detail unklar bleibt, fordere ein gezieltes Bild mit genauer Position, Perspektive oder Messstrecke an. Halte Listing, Bestellnotiz, Fotos und Maße zusammen und entscheide innerhalb der aktuellen Rückgabefrist. QC-Freigabe und internationale Versandwahl bleiben zwei getrennte Entscheidungen.`,
        ],
      })),
    },
    "sugargoo-shipping-cost-guide-2026": {
      title: "Sugargoo Versandkosten 2026: Gewicht, Volumen und Paketplanung",
      dek: "Praxisleitfaden zu Istgewicht, Volumengewicht, Routen, Vorverpackung, Konsolidierung, Schutz und Versicherung.",
      label: "Leitfaden Versandkosten",
      readTime: "15 Min. Lesezeit",
      sections: sectionSet(englishArticles[2],
        ["Schätzung ist keine Endrechnung", "Alle Eingaben vor dem Vergleich erfassen", "Ist-, Volumen- und Abrechnungsgewicht", "Kein universeller Divisor", "Vorversand-Simulation sinnvoll nutzen", "Konsolidierung mit Augenmaß", "Verpackung gezielt entfernen", "Sensible Waren begrenzen Routen", "Versicherung hat Grenzen", "Zoll gehört in die Planung", "Wiederholbarer Ablauf bis zur Zahlung"],
        [
          "Eine frühe Sugargoo-Schätzung hilft bei der Budgetplanung, garantiert aber keinen Endpreis. Entscheidend sind gepacktes Gewicht, Kartonmaße, Zielort, zulässige Route, Warenart und die aktuelle Abrechnungsregel. Produktkauf und internationaler Paketversand bleiben zwei getrennte Zahlungen.",
          "Notiere Zielland, Postgebiet, Warenart, erwartetes Gewicht, Länge, Breite, Höhe, Batterie- oder Flüssigkeitsstatus sowie den gewünschten Schutz. Gleich schwere Pakete können wegen Volumen oder eingeschränkter Routenauswahl sehr unterschiedliche Preise erhalten.",
          "Istgewicht ist das physische Paketgewicht. Volumengewicht bildet den belegten Frachtraum ab; das Abrechnungsgewicht folgt der jeweiligen Route und kann das höhere der beiden Werte sein. Ein großer leichter Karton kann deshalb teurer sein als ein kleiner dichter.",
          "Divisor, Rundung, Mindestgewicht und Größenlimit unterscheiden sich nach Linie. Die Rechnerformel mit 5000 erklärt nur das Prinzip. Sie darf nicht als dauerhafte Sugargoo-Regel für alle Länder und Carrier veröffentlicht werden.",
          "Der offizielle Leitfaden von 2025 beschrieb eine Vorverpackung, die realistischere Maße vor der Routenauswahl liefert, damals mit 18 CNY angezeigt. Besonders bei Schuhkartons, dicken Jacken, Taschen und Grenzmaßen senkt sie die Unsicherheit.",
          "Konsolidierung kann doppelte Außenkartons und mehrfache Grundgewichte reduzieren. Ein sehr großes Paket kann aber Volumengewicht oder Größenlimits auslösen. Prüfe deshalb auch Varianten mit zwei Paketen und trenne sensible Waren, wenn sie günstige Routen blockieren.",
          "Schuhkartons oder Verkaufsverpackung zu entfernen spart oft Raum, kann aber Schutz und Präsentation verschlechtern. Kleidung lässt sich leichter komprimieren als strukturierte Taschen, Elektronik oder Sammlerstücke. Entscheide pro Artikel statt pauschal.",
          "Offizielle Hinweise nennen Batterien, Telefone, Powerbanks, Parfüm, Lotion, Nagellack, Lebensmittel und Ergänzungsmittel als sensible Kategorien. Kaufbarkeit bedeutet nicht internationale Versandfähigkeit. Prüfe die konkrete Lagerkennzeichnung und die Routen für dein Zielland.",
          "Der veröffentlichte Versicherungsleitfaden von 2025 nannte ¥500–¥5000 Deckung und etwa 1–4 Prozent Kosten. Das ist ein datierter Stand. Maßgeblich sind heute gedeckte Ereignisse, Ausschlüsse, Nachweise und Fristen im Paketbildschirm.",
          "Einfuhrumsatzsteuer, Zoll, Broker- und Bearbeitungsgebühren hängen von Land, Wert und Warenart ab. Keine unabhängige Seite kann Abfertigung garantieren. Prüfe Deklaration und Routenmodell und halte einen Puffer für Zielgebühren bereit.",
          "Schätze vor dem Kauf Gewicht und Maße, prüfe mindestens eine geeignete Route und entscheide nach Lager-QC über Verpackung. Nutze bei relevantem Volumen die Simulation, vergleiche Live-Routen und speichere Maße, Versicherung, Deklaration und Tracking.",
        ],
        [
          "Nutze Schätzwerte als Spanne und ersetze sie bei Paketeinreichung durch die aktuelle Anzeige. Ein günstiger Artikel kann durch sperrige Verpackung oder eingeschränkte Linien zum teuersten Teil des Warenkorbs werden.",
          "Vergleiche nicht nur den Preis, sondern auch Abrechnungsstufen, Tracking, Laufzeitprognose, Versicherung, Ausschlüsse und Zollmodell. Die billigste sichtbare Linie ist wertlos, wenn sie den Inhalt nicht regelkonform transportiert.",
          "Berechne mehrere Szenarien und vergleiche sie mit dem Istgewicht. So erkennst du, ob Verpackungsreduktion wirtschaftlich relevant ist. Die aktuelle Route im Konto bleibt immer die operative Quelle.",
          "Teste Maße mit 5000 und 6000, um die Empfindlichkeit gegen Volumen zu verstehen. Erst die Live-Bedingungen zeigen, welcher Wert wirklich abgerechnet wird und wie auf Gewichtsstufen gerundet wird.",
          "Simulation fixiert weder den Carrierpreis noch den Zollausgang. Verwende die ermittelten Maße, um ausschließlich die aktuell angebotenen Linien für Ziel und Warenmix zu vergleichen.",
          "Dichte Kleidung und sperrige Kartons wirken unterschiedlich auf das Ergebnis. Modellierung vor der Einreichung verhindert, dass eine vermeintliche Sparmaßnahme die Route verteuert oder unzulässig macht.",
          "Zusätzliche Verstärkung erhöht wiederum Gewicht und Volumen. Kaufe Schutz nach Bruchrisiko und Ersatzwert, nicht nur mit dem Ziel, den kleinstmöglichen Rechnerwert zu erreichen.",
          "Verschleiere Inhalte nicht, um eine billigere Linie zu erzwingen. Wenn ein sensibles Produkt zentral ist, kläre die Versandoptionen vor dem Kauf, damit es nicht den gesamten Warenkorb blockiert.",
          "Versicherung macht verbotene Waren nicht zulässig und garantiert keine Zollfreigabe. Wähle die Deckung nach möglichem Verlust und dokumentiere den Paketinhalt vollständig.",
          "Öffentliche Lieferberichte sind Einzelfälle, keine Gebührentabelle. Sichere Mengen, Werte, Beschreibungen und Paketnachweise, damit du auf Rückfragen oder Abweichungen reagieren kannst.",
          "Die beste Entscheidung ist keine dauerhaft billigste Linie, sondern ein dokumentierter Vergleich mit aktuellem Ziel, Inhalt, Abrechnungsgewicht und realen Routenbedingungen.",
        ]),
    },
    "sugargoo-fees-cost-breakdown-2026": {
      title: "Sugargoo Gebühren 2026: Die vollständigen Kosten vor dem Versand",
      dek: "Kostenmodell für Produkt, Inlandsfracht, Zahlung, Wechselkurs, Lageroptionen, Paketversand, Versicherung und Einfuhr.",
      label: "Gebühren und Gesamtkosten",
      readTime: "14 Min. Lesezeit",
      sections: sectionSet(englishArticles[3],
        ["Gesamtkosten statt einer Gebührenzeile", "Mit dem CNY-Produktpreis beginnen", "Inlandsfracht je Verkäufer", "Was 0% Einkaufsgebühr bedeutet", "Zahlungsgebühren wechseln", "Wechselkurs als Kostenfaktor", "Optionale Lagerdienste gezielt wählen", "Internationaler Versand als größte Variable", "Versicherung und Zoll trennen", "Rückerstattung ist nicht immer vollständig", "Vor dem Vergleich eine Kostentabelle bauen", "Aktuelle Checkout-Belege verwenden"],
        [
          "Sugargoo-Kosten entstehen in mehreren Stufen: Produkt, chinesische Inlandsfracht, Zahlungsabwicklung, Währungsumrechnung, optionale Lagerdienste, internationaler Versand, Versicherung und Zielabgaben. Einige Positionen kommen von Verkäufern, Prozessoren, Carriern oder Behörden und sind keine einheitliche Plattformgebühr.",
          "Marktplatzpreise stehen meist in CNY und können sich nach Größe, Farbe, Material oder Set ändern. Notiere den exakten Variantenpreis und vergleiche ihn mit dem importierten Bestellwert. Die USD-Anzeige dieser Seite ist nur eine Orientierung.",
          "Der Verkäufer transportiert die Ware zuerst zum Sugargoo-Lager. Mehrere Verkäufer bedeuten häufig mehrere Inlandsfrachten, auch wenn später konsolidiert wird. Zwei gleich aussehende Artikel können dadurch unterschiedliche Endkosten haben.",
          "Veröffentlichte Sugargoo-Inhalte werben für 0% Einkaufsservicegebühr auf großen unterstützten Marktplätzen. Gemeint ist diese eine Schicht. Zahlung, Inlandsfracht, Optionen, internationaler Versand und Steuer verschwinden dadurch nicht.",
          "Ein offizieller Zahlungsleitfaden von 2025 zeigte je nach Methode unterschiedliche Beispiele, darunter 4,8% plus US$0,50 und 3,4% plus US$0,30. Das sind keine garantierten 2026-Preise; der aktuelle Checkout zählt.",
          "Auch ein nicht als Gebühr ausgewiesener Kursunterschied verändert die Gesamtkosten. Vergleiche CNY-Betrag, Plattformumrechnung, Kartenabrechnung und mögliche Fremdwährungsgebühr im selben Zeitpunkt.",
          "Zusatzfotos, Maße, Schutz, Verpackung und Vorverpackung lösen konkrete Probleme. Die 2025 publizierte Simulation zeigte damals 18 CNY. Jede gewählte Option gehört als eigene Zeile in die Kalkulation.",
          "Nach QC und Paketvorbereitung wird der internationale Versand bezahlt. Ziel, Abrechnungsgewicht, Maße, Warenart und Route bestimmen den Preis. Sperrige Ware kann den Produktpreis deutlich übersteigen.",
          "Versicherung deckt definierte Ereignisse, Zoll folgt dem Zielland. Der 2025 veröffentlichte Versicherungsrahmen ist nur ein historischer Stand. Prüfe aktuelle Ausschlüsse und halte einen Puffer für Einfuhrkosten.",
          "Storno vor Kauf ist anders als Rückgabe nach Verkäuferversand oder Lagereingang. Rückfracht, Bearbeitung oder bereits genutzte Dienste können vom Rückfluss abweichen. Produktwert und jede Gebühr müssen getrennt verfolgt werden.",
          "Erstelle Zeilen für Produkt, Variantenaufschlag, Inlandsfracht, Zahlung, Kurs, QC, Verpackung, Simulation, internationalen Versand, Versicherung und Steuer. Nutze niedrige, wahrscheinliche und hohe Szenarien für Unbekanntes.",
          "Offizielle Artikel erklären den Ablauf, aber Prozentsätze und Dienstpreise altern. Für eine aktuelle Bestellung sind Screenshots aus Zahlung und Paketansicht der stärkere Nachweis.",
        ],
        [
          "Vergleiche denselben Warenkorb, dieselbe Zahlungsart und dasselbe Ziel. Eine Nullgebühr in einer Schicht darf nicht mit einem Gesamtkostenversprechen verwechselt werden.",
          "Vergleiche Produkte in CNY und prüfe den tatsächlichen Zahlbetrag erst im Konto. Niedrige Mindestpreise eines Listings können nur für eine andere Variante gelten.",
          "Halte Inlandsfracht separat fest. Langsame Verkäufer oder große Kartons können Konsolidierung und späteres Volumengewicht zusätzlich beeinflussen.",
          "Manuelle, Weiterleitungs- und Nebenplattform-Aufträge können andere Regeln haben. Der aktuelle Bestellbildschirm entscheidet, nicht eine allgemeine Werbeaussage.",
          "Teste bei großen Aufladungen zunächst einen kleinen Betrag und prüfe Rückzug sowie Erstattungsziel. Alte Tabellen sollten nie ungeprüft in ein neues Budget übernommen werden.",
          "Berechne den effektiven Kurs aus gezahlter Heimatwährung und CNY-Wert nach allen Umrechnungen. Der öffentliche Mittelkurs ist keine Pflicht für einen Zahlungsanbieter.",
          "Kaufe einen Zusatzdienst nur für eine benannte Entscheidung: Messen, Defekt belegen, Ecke schützen oder realistische Maße erhalten. Sonst erhöht er nur die Kosten.",
          "Schätze schwere oder voluminöse Produkte vor dem Kauf und nutze bei Unsicherheit die Vorverpackung. Live-Routen ersetzen jede statische Preisaussage.",
          "Versicherung verhindert weder Kontrollen noch macht sie sensible Waren zulässig. Lies Route, Steuerhandling und Nachweispflichten als getrennte Verträge.",
          "Ein offizieller Leitfaden nannte für bestimmte Lagerfälle bis zu zehn Arbeitstage. Das ist kein universeller Garantiewert; Status, Verkäufer und Zahlungsweg bleiben relevant.",
          "Aktualisiere die Tabelle bei Marktplatzbestellung, Lagereingang und Paketzahlung. Wert entsteht aus akzeptablem Gesamtpreis und ausreichendem Nachweis, nicht nur aus dem billigsten Artikel.",
          "Eine ehrliche Gebührenanalyse zeigt, welche Schicht noch schwankt. Sie verspricht keinen festen Kurs, keine dauerhaft null Gesamtkosten und keine Zollgarantie.",
        ]),
    },
    "sugargoo-review-2026": {
      title: "Sugargoo Erfahrungen 2026: Was offizielle Regeln und 641 Bewertungen zeigen",
      dek: "Unabhängige Analyse von Plattformangaben, Trustpilot-Daten, Reddit-Themen und einem sicheren Erstbestelltest.",
      label: "Unabhängige Bewertungsanalyse",
      readTime: "16 Min. Lesezeit",
      sections: sectionSet(englishArticles[4],
        ["Drei Belegebenen", "Offizielles Servicemodell", "Gemischtes Trustpilot-Bild", "Positive Themen", "Negative Themen", "QC zwischen Lob und Kritik", "Laufzeiten sind Prognosen", "Beschränkungen und Linkprobleme", "Community ist keine neutrale Stichprobe", "Agentenrating beweist kein Produkt", "Kontrollierter Ersttest", "Bedingtes statt pauschales Urteil"],
        [
          "Diese Analyse trennt offizielle Leistungsbeschreibung, unabhängige Bewertungsstatistik und persönliche Erfahrungsberichte. Regeln erklären den Ablauf, Trustpilot misst ein veränderliches Profil und Reddit zeigt wiederkehrende Fragen. Einzelne Berichte lassen sich aus dem Post allein nicht verifizieren.",
          "Sugargoo beschreibt Einkauf, Lagerung, Konsolidierung und internationalen Versand als getrennte Stufen. Publizierte Hinweise nennen fünf kostenlose QC-Fotos, optionale Dienste sowie unterschiedliche Lagerzeiten nach Auftragstyp. Die aktuelle Kontoanzeige bleibt entscheidend.",
          "Am 1. September 2026 zeigte Trustpilot 641 Bewertungen und 3,4 von 5. Die Verteilung lag bei 60% fünf, 11% vier, 6% drei, 4% zwei und 19% einem Stern; 85% negativer Bewertungen waren laut Profil beantwortet.",
          "Positive Beiträge erwähnen einfache Bedienung, hilfreichen Support, gute Verpackung und abgeschlossene Hauls. Genannte Laufzeiten gehören immer zu einer bestimmten Route, Saison und Sendung und dürfen nicht als allgemeines Versprechen verwendet werden.",
          "Niedrige Bewertungen berichten über Verzögerungen, Tracking, uneinheitliche Antworten, Kontoprüfungen, Erstattungen und Zollprobleme. Das sind Behauptungen einzelner Nutzer. Als Risikosignal zeigen sie, welche Unterlagen Käufer sichern sollten.",
          "Fünf Standardbilder schaffen eine echte Prüfmöglichkeit. Gleichzeitig berichten manche Nutzer über unscharfe oder zu schnelle Fotos. Der Nutzen hängt von Produkt, Perspektive und einer präzisen Zusatzanweisung ab.",
          "Öffentliche Erfahrungen reichen von schneller als erwartet bis deutlich verspätet. Ein offizieller Reddit-Hinweis 2026 erklärte, dass manche Tax-Free-Linien vor der Zollfreigabe keine öffentlichen Scans zeigen. Das erklärt, garantiert aber nichts.",
          "Viele Diskussionen betreffen manuelle Bestellungen, blockierte Links oder fehlende Versandlinien. Offizielle Hinweise unterscheiden gewöhnliche und sensible Waren. Ein ladender Link beweist weder Kaufgenehmigung noch internationale Eignung.",
          "Das Sugargoo-Subreddit enthält Hinweise, Hilfe, Werbung, QC, Lob und Kritik und wird nach plattformspezifischen Regeln moderiert. Es liefert aktuelle Themen, aber keine zufällige oder unabhängige Gesamtkundenstichprobe.",
          "Der Marktplatzverkäufer bestimmt, was versendet wird; Lager, Carrier, Zoll und letzte Meile sind weitere Stationen. Ein gutes Agentenrating beweist weder Authentizität noch Material oder Chargenkonstanz.",
          "Teste mit ein oder zwei gewöhnlichen, unempfindlichen Artikeln ohne Zeitdruck. Dokumentiere CNY, Zahlung, QC, eine gezielte Messung, Verpackung, Abrechnungsgewicht, Route, Versicherung und Tracking.",
          "Es gibt einen dokumentierten End-to-End-Ablauf und viele erfolgreiche Wiederholungskäufe, zugleich ein gemischtes Bewertungsprofil mit ernsten Beschwerden. Beide Seiten gehören in ein ehrliches Urteil.",
        ],
        [
          "Der Stand dieser Seite ist der 1. September 2026. Daten und Regeln können sich ändern. Ziel ist kein Werbeslogan, sondern eine Liste prüfbarer Punkte für die eigene Bestellung.",
          "Produktzahlung und internationaler Versand bleiben getrennt. Produkt-, Seller- und Zollrisiko verschwinden nicht dadurch, dass ein Agent die Ware einkauft und fotografiert.",
          "Die polarisierte Verteilung ist wichtiger als der Mittelwert. Starte klein und bewerte den für dich wichtigen Ablauf anhand eigener Belege statt nur nach der Zahl.",
          "Teste genau diese Prozesse: stelle eine konkrete Frage, fordere einen messbaren QC-Nachweis und vergleiche die Verpackung mit dem gekauften Schutz.",
          "Speichere Listing, Zahlung, Fotos, Maße, Packgewicht, Deklaration, Route und Tracking. Mache aus wiederkehrenden Beschwerdethemen eine Kontrollliste, nicht aus Behauptungen Tatsachen.",
          "Bitte bei Unklarheit früh um einen exakten Winkel oder eine Messung. QC-Fotos beweisen sichtbaren Zustand, nicht Echtheit, Material oder Haltbarkeit.",
          "Wähle nach Eignung, Trackingmodell, Versicherung und aktuellen Hinweisen. Plane Zeitpuffer, wenn ein Termin wichtig ist, statt eine Schätzung als Frist zu behandeln.",
          "Prüfe Warnhinweis, Warenattribut und konkrete Ziellandroute vor Zahlung. Manuelle Aufträge brauchen besonders klare Varianten- und Rückgabeangaben.",
          "Nutze Community-Posts, um Fragen zu entdecken, und bestätige sie im Konto, beim Carrier oder in der schriftlichen Regel. Ein viraler Beitrag ist kein Systemnachweis.",
          "Trenne Verkäufer, Agentenlager, internationale Linie, Zoll und letzte Meile. Belege an jedem Übergang machen Supportfälle verständlicher und überprüfbarer.",
          "Der kleine Test misst Support, QC und Versand ohne ein großes Paket einem unbekannten Prozess auszusetzen. Entscheide danach aus dem eigenen dokumentierten Ergebnis.",
          "Sugargoo kann für sorgfältige Käufer funktionieren, ist aber kein Ersatz für Listingprüfung, QC, Gewichtsplanung und Dokumentation. Wer Garantien erwartet, wird das Agentenmodell falsch einschätzen.",
        ]),
    },
    "sugargoo-returns-refunds-storage-guide": {
      title: "Sugargoo Rückgabe, Erstattung und Lagerung: Drei wichtige Fristen",
      dek: "Leitfaden zu Verkäuferfenster, 100/30-Tage-Lagerung, Storno, Belegen, Erstattungszeit und Paketansprüchen.",
      label: "Rückgabe- und Lagerhandbuch",
      readTime: "14 Min. Lesezeit",
      sections: sectionSet(englishArticles[5],
        ["Lagerzeit ist keine Rückgabefrist", "Auftragsarten haben verschiedene Lagerung", "Rückgabe hängt vom Verkäufer ab", "Storno ändert sich nach dem Kauf", "QC-Belege für After-Sales", "Rückfracht und Bearbeitung", "Erstattungszeit nach physischer Stufe", "Manuelle und Weiterleitungsaufträge", "Ablauf nicht bis zum letzten Lagertag warten", "Nach internationalem Versand gelten Paketregeln", "Fünf Schritte für After-Sales"],
        [
          "Verkäuferrückgabe, Lagerung, Erstattungsbearbeitung und Paketanspruch sind verschiedene Uhren. Das Verkäuferfenster kann schließen, obwohl im Lager noch viele Tage angezeigt werden. Prüfe die Ware sofort nach Erscheinen der QC-Fotos.",
          "Der offizielle Artikel von August 2025 nannte 100 Tage für Einkaufsaufträge und 30 Tage für Wiederverkauf oder Weiterleitung, gezählt ab Status Packing Center. Die aktuelle Kontoanzeige ist für den konkreten Auftrag maßgeblich.",
          "Ein veröffentlichter Leitfaden beschrieb für berechtigte Taobao- und 1688-Aufträge eine Fünf-Tage-Option. Maßanfertigung, Sonderkategorien, Verkäuferausnahmen und manuelle Aufträge können anders behandelt werden.",
          "Vor Agentenkauf ist ein Storno einfacher. Nach Kauf braucht es Verkäuferkoordination; nach Versand oder Lagereingang wird daraus eine Rückgabe mit Logistik und Annahme. Prüfe zuerst den Bestellstatus.",
          "Standard-QC bestätigt das Produkt, für eine Rückgabe braucht es oft den exakten Mangel. Fordere Nahaufnahme, Maß, Zubehörzahl, Etikett oder Variantencode an und sichere Listing sowie Bestellnotiz.",
          "Bei Verkäuferfehler kann der Verkäufer Rückfracht tragen; bei Wunschänderung kann sie beim Käufer liegen. Veröffentlichte Hinweise nennen auch mögliche Bearbeitungsabzüge. Verfolge Produktwert und jede Fracht getrennt.",
          "Ein offizieller Leitfaden nannte für bestimmte bereits eingegangene Waren bis zu zehn Arbeitstage. Verkäuferannahme, Rücklauf, Wochenenden, Streit und Zahlungsabzug können den Weg verlängern.",
          "Strukturierte Marktplatzaufträge haben oft klarere Daten und After-Sales-Pfade. Manuelle, Wiederverkaufs- oder Weiterleitungsaufträge können weniger Schutz und kürzere Lagerung haben. Kläre die Regeln vor Zahlung.",
          "Am letzten Lagertag bleibt kaum Zeit für Konto-, Verpackungs- oder Routenprobleme. Plane konservativ nach dem frühesten Artikel und vergleiche gegebenenfalls zwei Pakete mit dem Risiko einer ablaufenden Position.",
          "Nach Verlassen des Lagers gelten Carrier-, Routen- und Versicherungsbedingungen statt der Verkäufer-Rückgabe. Sichere QC, Packgewicht, Paketbild, Deklaration, Tracking und den Zustand des gelieferten Kartons.",
          "Bestimme zuerst die Stufe, dann die aktive Frist. Sammle Listing, Bestellung, Fotos und Zahlungen, fordere Schritte sowie Beträge schriftlich an und verfolge bis Guthaben oder Originalzahlung abgeschlossen sind.",
        ],
        [
          "Nutze Lagerzeit für Paketplanung, nicht als Aufschub für Produktentscheidungen. Current After-Sales-Schaltfläche und Verkäuferbedingungen sind stärker als eine allgemeine Frist aus einem Blog.",
          "Notiere Ankunft und Kategorie pro Artikel. Verschiedene Verkäufertermine erzeugen verschiedene Countdowns; erinnere deutlich vor Ablauf und frage bei falscher Klassifizierung nach.",
          "Belege die konkrete Abweichung mit Produktseite und Foto. Eine beobachtbare falsche Größe, Farbe oder Menge ist besser bearbeitbar als das pauschale Urteil schlechte Qualität.",
          "Frage, ob der Verkäufer Storno akzeptiert hat und ob die Erstattung auf einen physischen Rücklauf wartet. Ersetze die Ware nicht blind, solange der erste Fall offen ist.",
          "Bitte um sichtbare Fakten statt Echtheits- oder Haltbarkeitsurteile. Geordnete Nachweise beschleunigen die Prüfung und verhindern Diskussionen über unklare Erwartungen.",
          "Frage nach Produkt, erster Inlandsfracht, Rückfracht und genutzten Diensten als getrennte Beträge. So wird eine Teilrückzahlung nicht mit einem fehlenden Gesamtbetrag verwechselt.",
          "Dokumentiere Antrag, Verkäuferzusage, Rücksendungsverfolgung, Lagereingang und Guthaben. Auszahlung an das ursprüngliche Mittel hat zusätzlich eigene Prozessorzeit und Währungswirkung.",
          "Nutze präzise Beschreibung und Referenzbild. Ein billiger manueller Kauf wird teuer, wenn Verkäuferbeleg und Rückweg nicht definiert sind.",
          "Ablauf kann zu Entsorgung oder Verlängerungsregeln führen, die den Warenwert nicht sichern. Maßgeblich ist die aktuelle Kontowarnung, nicht ein alter allgemeiner Artikel.",
          "Melde Verlust, Schaden oder Fehlmenge innerhalb der angezeigten Frist und fotografiere vor Entsorgung der Verpackung. Community-Berichte ersetzen keinen Vertrag.",
          "Die Methode garantiert kein positives Ergebnis, reduziert aber versäumte Fenster und unklare Summen. Kernregel: bei QC handeln, nicht erst kurz vor Lagerablauf.",
        ]),
    },
  },
  es: {
    "sugargoo-spreadsheet-guide-2026": {
      title: "Cómo usar un spreadsheet de Sugargoo sin comprar a ciegas",
      dek: "Un marco de decisión para enlaces, variantes, precios CNY, fotos de almacén y peso del paquete.",
      label: "Guía práctica del spreadsheet",
      readTime: "14 min de lectura",
      sections: englishArticles[0].sections.map((s, i) => ({
        heading: ["El spreadsheet descubre, no demuestra", "Confirma el mercado original", "Entiende la función del agente", "Selecciona la variante exacta", "Lee bien CNY y USD", "Busca pruebas, no adjetivos", "Planifica el QC", "Revisa las fotos con orden", "La talla no es universal", "Calcula el efecto en el paquete", "Separa riesgo y elegibilidad", "Lista final antes de pagar"][i],
        body: [
          `Este apartado ${i + 1} mantiene el mismo método de la versión inglesa: se comprueban por separado la ficha activa, la variante, el precio, la evidencia de almacén y el envío. Una tarjeta ahorra tiempo, pero no sustituye la página actual del vendedor ni las fotos de tu propio pedido. Verifica cada dato cuando vayas a pagar y guarda la información que respalda tu elección.`,
          `Sigue una secuencia repetible en lugar de confiar en palabras como “premium” o “verificado”. Compara el precio CNY, prepara fotos adicionales concretas, revisa medidas y calcula peso real y volumétrico. Así el spreadsheet sirve para investigar y no para empujar una compra sin pruebas.`,
        ],
      })),
    },
    "how-to-read-sugargoo-qc-photos": {
      title: "Cómo leer las fotos QC de Sugargoo antes del envío",
      dek: "Método completo para fotos de almacén, medidas, solicitudes adicionales y devoluciones.",
      label: "Manual de inspección QC",
      readTime: "13 min de lectura",
      sections: englishArticles[1].sections.map((s, i) => ({
        heading: ["El QC documenta la llegada", "Confirma primero la identidad", "Forma, simetría y daños", "No juzgues el color con una foto", "Costuras, bordes y herrajes", "Gráficos, bordados y etiquetas", "Las medidas pesan más", "Compara ambos zapatos", "Electrónica y baterías", "Pide fotos precisas", "Decide por diferencias materiales", "Revisión final del paquete"][i],
        body: [
          `Este paso conserva el método completo: primero confirma producto, color, talla y cantidad; después revisa forma general, detalles y medidas. Las fotos del almacén revelan problemas visibles, pero no prueban autenticidad, durabilidad ni construcción interna. Compara varios ángulos antes de concluir que existe un defecto.`,
          `Si algo sigue dudoso, solicita una imagen concreta indicando zona, ángulo o medición. Conserva la ficha, las notas, las fotos y las medidas, y actúa dentro del plazo de devolución. Aceptar el QC y elegir el transporte internacional son decisiones separadas.`,
        ],
      })),
    },
    "sugargoo-shipping-cost-guide-2026": {
      title: "Coste de envío Sugargoo 2026: peso, volumen y planificación",
      dek: "Guía práctica sobre peso real y volumétrico, rutas, simulación, consolidación, embalaje y seguro.",
      label: "Guía de costes de envío",
      readTime: "15 min de lectura",
      sections: sectionSet(englishArticles[2],
        ["La estimación no es la factura final", "Anota todas las variables", "Peso real, volumétrico y facturable", "No existe un divisor universal", "Cuándo usar la simulación", "Consolidar con criterio", "Quitar embalaje de forma selectiva", "Los artículos sensibles limitan rutas", "El seguro tiene límites", "Incluye aduanas en el presupuesto", "Proceso repetible hasta el pago"],
        [
          "La estimación inicial sirve para preparar un presupuesto, pero el importe final depende del peso embalado, dimensiones, destino, línea compatible, tipo de mercancía y regla vigente. La compra del producto y el envío internacional son pagos separados.",
          "Registra país, zona postal, categoría, peso previsto, largo, ancho, alto, batería o líquido, valor y protección necesaria. Dos paquetes del mismo peso pueden costar muy distinto por volumen o por disponer de pocas líneas compatibles.",
          "El peso real es la masa física; el volumétrico representa el espacio ocupado. El peso facturable sigue la regla de la línea y puede ser el mayor de ambos. Por eso una caja grande y ligera puede resultar cara.",
          "Divisor, redondeo, mínimo y límites cambian según transportista. El divisor 5000 de la calculadora solo explica el concepto y no debe publicarse como regla permanente para todos los envíos Sugargoo.",
          "La guía oficial de 2025 describía una simulación de pre-embalaje que mostraba entonces 18 CNY. Permite conocer medidas más realistas antes de elegir ruta y es útil con cajas de zapatos, abrigos, bolsos o paquetes cerca de un límite.",
          "Consolidar puede eliminar cajas exteriores repetidas y repartir el primer tramo de peso. Sin embargo, un paquete enorme puede activar peso volumétrico o superar dimensiones. Compara también la alternativa de dos paquetes.",
          "Eliminar cajas ahorra espacio, pero reduce protección y presentación. La ropa tolera compresión mejor que bolsos estructurados, electrónica o coleccionables. Decide por artículo y considera que el refuerzo vuelve a añadir peso y volumen.",
          "Las guías oficiales citan baterías, móviles, power banks, perfumes, lociones, esmalte, alimentos y suplementos como sensibles. Que el producto pueda comprarse no demuestra que pueda viajar por cualquier ruta internacional.",
          "La guía de seguro de 2025 mostraba coberturas de ¥500–¥5000 y un coste aproximado del 1%–4%. Es una referencia fechada. Hoy mandan eventos cubiertos, exclusiones, pruebas y plazo del contrato actual.",
          "IVA, arancel, intermediación y gestión dependen del país, valor y mercancía. Ninguna guía independiente puede garantizar despacho. Revisa declaración y modelo fiscal de la línea y reserva margen para gastos en destino.",
          "Antes de comprar, estima peso y volumen y confirma una ruta adecuada. Tras el QC decide embalaje, separa sensibles, usa simulación si cambia la decisión, compara líneas activas y guarda medidas, seguro, declaración y seguimiento.",
        ],
        [
          "Usa una horquilla y sustituye la cifra temprana por la pantalla activa al presentar el paquete. Un artículo barato puede volverse caro por caja, restricciones o destino.",
          "Compara precio, escalones de facturación, seguimiento, previsión, seguro, exclusiones y tratamiento aduanero. La opción más barata no sirve si no admite el contenido.",
          "Calcula varios escenarios y compáralos con el peso real. La información de la ruta actual sigue siendo la única fuente operativa para el cobro.",
          "Probar 5000 y 6000 ayuda a medir sensibilidad al volumen, pero solo la línea activa revela qué valor y redondeo aplicará.",
          "La simulación reduce incertidumbre; no congela la tarifa ni garantiza aduanas. Usa sus medidas para comparar las opciones reales del destino.",
          "Mezclar ropa densa con muchas cajas puede empeorar el resultado. Separar mercancía sensible también puede conservar líneas económicas para lo ordinario.",
          "Compra protección según fragilidad y coste de reemplazo, no únicamente para minimizar el número del calculador. Conserva embalaje cuando aporte valor real.",
          "No ocultes el contenido para forzar una línea. Si el artículo sensible es esencial, verifica opciones antes de comprar para no bloquear todo el carrito.",
          "El seguro no vuelve admisible una mercancía prohibida ni asegura despacho. Elige cobertura por pérdida posible y documenta el contenido.",
          "Los relatos públicos son experiencias individuales, no una tabla de tarifas. Conserva cantidades, valores, descripciones y registro del paquete.",
          "La mejor ruta no es una línea siempre barata, sino una comparación documentada con destino, contenido, peso facturable y condiciones actuales.",
        ]),
    },
    "sugargoo-fees-cost-breakdown-2026": {
      title: "Comisiones de Sugargoo 2026: coste total antes del envío",
      dek: "Modelo de coste con producto, transporte nacional, pago, cambio, extras, envío, seguro e importación.",
      label: "Comisiones y coste total",
      readTime: "14 min de lectura",
      sections: sectionSet(englishArticles[3],
        ["Calcula el coste total", "Empieza por el precio CNY", "Suma el transporte nacional", "Qué significa 0% de compra", "El cargo de pago cambia", "El cambio también cuesta", "Extras con una finalidad", "El envío es la gran variable", "Seguro y aduana son distintos", "Un reembolso puede no devolver todo", "Construye una tabla de costes", "Usa pruebas actuales del checkout"],
        [
          "Las comisiones aparecen por etapas: producto, envío del vendedor al almacén, canal de pago, conversión, servicios opcionales, paquete internacional, seguro e impuestos. Algunas partidas pertenecen al vendedor, procesador, transportista o autoridad, no a una sola tarifa de plataforma.",
          "El precio del marketplace está en CNY y puede variar por talla, color, material o conjunto. Anota la variante exacta y compárala con el pedido importado. El USD de esta web solo ayuda a filtrar.",
          "Cada vendedor envía primero a la central de Sugargoo. Comprar a varias tiendas puede generar varios portes nacionales aunque después consolides. Mantén esa partida separada para comparar artículos parecidos.",
          "El contenido oficial ha anunciado 0% de servicio de compra en grandes mercados compatibles. Se refiere a esa capa; no elimina pago, transporte nacional, extras, envío internacional ni impuestos.",
          "Una guía oficial de 2025 mostraba ejemplos distintos por método, como 4,8% más US$0,50 y 3,4% más US$0,30. No son precios universales de 2026; manda la pantalla actual.",
          "Compara CNY, conversión de plataforma, extracto de tarjeta y cargo por divisa. El coste efectivo es la moneda local pagada por el valor CNY después de todas las conversiones.",
          "Fotos extra, medidas, protección, embalaje y simulación deben resolver un riesgo concreto. La simulación publicada en 2025 mostraba 18 CNY entonces. Añade cada opción como línea independiente.",
          "Tras aprobar QC se paga el paquete internacional. Destino, peso facturable, medidas, tipo de artículo y ruta determinan el total; un producto voluminoso puede costar más de enviar que de comprar.",
          "El seguro cubre eventos definidos; aduanas sigue la ley del destino. Los datos publicados en 2025 son una foto histórica. Revisa exclusiones vigentes y reserva margen fiscal.",
          "Cancelar antes de compra no es igual que devolver desde almacén. Porte de retorno, procesamiento o servicios usados pueden no recuperarse. Sigue producto y gastos por separado.",
          "Crea filas para producto, variante, porte nacional, pago, cambio, QC, embalaje, simulación, envío, seguro e impuestos. Usa escenario bajo, probable y alto para variables desconocidas.",
          "Los artículos oficiales explican el proceso, pero porcentajes y precios caducan. Para un pedido 2026, la captura del pago y del paquete es la prueba más sólida.",
        ],
        [
          "Compara la misma cesta, método y destino. Un titular de coste cero en una capa no equivale a coste total cero.",
          "Compara productos en CNY y revisa el importe real dentro de la cuenta. El mínimo del anuncio puede pertenecer a otra variante.",
          "El porte nacional y una caja grande también pueden afectar la consolidación y el peso volumétrico posterior.",
          "Pedidos manuales, forwarding o plataformas secundarias pueden tener reglas diferentes. Verifica el pedido concreto.",
          "Prueba una cantidad pequeña antes de cargar mucho saldo y revisa retiro y destino del reembolso. No uses una tabla antigua sin comprobar.",
          "Calcula el cambio efectivo con la cantidad local y el CNY del mismo momento. El tipo medio público no obliga al procesador.",
          "Compra cada extra para medir, documentar, proteger o conocer dimensiones. Sin una pregunta concreta solo eleva el total.",
          "Estima productos pesados o voluminosos antes de comprarlos y usa simulación cuando la incertidumbre pueda cambiar de ruta.",
          "El seguro no evita inspección ni vuelve compatible lo restringido. Lee seguro, ruta y fiscalidad como contratos distintos.",
          "La guía oficial mencionó hasta diez días laborables en algunos casos de almacén, pero vendedor, estado y pago siguen influyendo.",
          "Actualiza la tabla al comprar, al llegar al almacén y al pagar el paquete. El valor se juzga por el total y la evidencia disponible.",
          "Una explicación honesta indica qué puede cambiar y no promete cambio fijo, cero comisiones totales ni resultado aduanero.",
        ]),
    },
    "sugargoo-review-2026": {
      title: "Opiniones de Sugargoo 2026: reglas oficiales y 641 reseñas públicas",
      dek: "Análisis de información oficial, datos de Trustpilot, temas de Reddit y una prueba segura para nuevos compradores.",
      label: "Análisis independiente",
      readTime: "16 min de lectura",
      sections: sectionSet(englishArticles[4],
        ["Tres capas de evidencia", "Qué ofrece oficialmente", "Un Trustpilot dividido", "Patrones positivos", "Patrones negativos", "QC entre elogio y crítica", "La entrega es una previsión", "Restricciones y enlaces", "La comunidad no es una muestra neutral", "La nota del agente no prueba el producto", "Haz una primera prueba controlada", "Veredicto condicionado"],
        [
          "La reseña separa descripción oficial, estadística independiente y experiencias personales. Las reglas explican el flujo; Trustpilot mide un perfil cambiante; Reddit revela preguntas. Ningún relato individual queda verificado solo por publicarse.",
          "Sugargoo describe compra, almacén, consolidación y logística como etapas separadas. Su material publica cinco fotos QC, servicios opcionales y almacenamiento distinto según tipo de pedido. La cuenta activa decide.",
          "El 1 de septiembre de 2026, Trustpilot mostraba 641 reseñas y 3,4/5: 60% cinco estrellas, 11% cuatro, 6% tres, 4% dos y 19% una; decía responder al 85% de negativas.",
          "Las reseñas positivas mencionan uso sencillo, soporte, embalaje y pedidos completados. Los tiempos descritos pertenecen a una ruta, temporada y paquete concretos y no son una promesa general.",
          "Las negativas hablan de demoras, tracking, respuestas inconsistentes, controles de cuenta, reembolsos y aduana. Son experiencias alegadas; como señal, indican qué documentación conviene guardar.",
          "Las cinco fotos ofrecen una inspección real, pero algunos usuarios describen imágenes rápidas o borrosas. El valor depende del producto, los ángulos y una solicitud adicional precisa.",
          "Hay entregas más rápidas y mucho más lentas que la estimación. Un aviso oficial de Reddit explicó en 2026 que algunas líneas tax-free no muestran tracking público antes de aduanas. No garantiza el resultado.",
          "Se repiten dudas sobre pedido manual, enlace bloqueado y rutas. La guía oficial separa artículos ordinarios y sensibles. Que cargue un link no prueba aprobación ni elegibilidad internacional.",
          "El subreddit contiene avisos, ayuda, promoción, QC, elogios y quejas bajo reglas de plataforma. Sirve para detectar temas actuales, pero no representa una muestra aleatoria de clientes.",
          "El vendedor decide qué despacha; almacén, línea, aduana y última milla son eslabones distintos. Una buena nota de agente no demuestra autenticidad, material o consistencia.",
          "Prueba uno o dos artículos ordinarios sin fecha urgente. Documenta CNY, pago, QC, una medida concreta, embalaje, peso facturable, ruta, seguro y seguimiento.",
          "Existe un flujo completo y muchos compradores repetidores satisfechos, pero también un perfil mixto con quejas serias. Una evaluación honesta debe contener ambas partes.",
        ],
        [
          "La fecha de corte es septiembre de 2026. El objetivo no es un eslogan, sino convertir fuentes distintas en controles verificables.",
          "Comprar y enviar internacionalmente siguen siendo pagos distintos. El agente no elimina riesgo del vendedor, producto, transportista o aduana.",
          "La polarización importa más que la media. Empieza pequeño y valora el proceso importante para ti con evidencias propias.",
          "Prueba soporte, una solicitud medible y si el embalaje pagado coincide con el resultado. Eso convierte elogios en criterios observables.",
          "Guarda ficha, pago, fotos, medidas, peso, declaración, ruta y tracking. Usa temas de queja como checklist, no como hechos universales.",
          "Pide pronto un ángulo o medida concreta. QC muestra estado visible; no certifica autenticidad, material ni duración.",
          "Elige por compatibilidad, modelo de tracking, seguro y avisos actuales. Añade margen si la fecha es crítica.",
          "Comprueba advertencia, atributo y ruta antes de pagar. Los pedidos manuales necesitan variante y devolución especialmente claras.",
          "Usa los posts para formular preguntas y confírmalas en cuenta, transportista o política. Un post viral no prueba un sistema.",
          "Separa cada eslabón y guarda pruebas en los traspasos. Así el soporte puede identificar dónde surgió el problema.",
          "La prueba pequeña mide el flujo sin exponer una gran cesta. Decide después con tu propio pedido documentado.",
          "Puede funcionar para quien verifica y planifica; no sirve como garantía de calidad, plazo o aduana. Ese límite define el veredicto.",
        ]),
    },
    "sugargoo-returns-refunds-storage-guide": {
      title: "Devoluciones, reembolsos y almacén Sugargoo: tres relojes",
      dek: "Guía sobre plazo del vendedor, almacenamiento 100/30 días, cancelación, pruebas, reembolso y reclamaciones.",
      label: "Manual de devoluciones",
      readTime: "14 min de lectura",
      sections: sectionSet(englishArticles[5],
        ["Almacenar no amplía la devolución", "Cada pedido tiene su almacenamiento", "La devolución depende del vendedor", "Cancelar cambia tras la compra", "Pruebas QC para posventa", "Porte de devolución y descuentos", "El tiempo depende de la etapa", "Pedidos manuales y forwarding", "No esperes al último día", "Después del envío rige el paquete", "Checklist de cinco pasos"],
        [
          "Devolución del vendedor, almacén, reembolso y reclamación de paquete son relojes distintos. El plazo más corto puede vencer mientras quedan muchos días de almacenaje. Revisa el artículo cuando aparezcan las fotos.",
          "El artículo oficial de agosto de 2025 indicó 100 días para compras y 30 para reventa o forwarding desde el estado packing center. El contador activo manda en el pedido real.",
          "Una guía publicada describió cinco días para pedidos elegibles de Taobao y 1688. Personalizados, categorías especiales, exclusiones y pedidos manuales pueden seguir otras condiciones.",
          "Antes de que el agente compre, cancelar es más sencillo. Después necesita coordinación con el vendedor; tras despacho o llegada se convierte en devolución física.",
          "Las fotos estándar confirman el artículo, pero la devolución necesita el defecto exacto. Solicita primer plano, medida, conteo, etiqueta o variante y conserva ficha y nota.",
          "El vendedor puede cubrir el retorno cuando es responsable; un cambio de preferencia puede cargarlo al comprador. Algunas deducciones de procesamiento pueden permanecer.",
          "Una guía oficial habló de hasta diez días laborables para ciertos reembolsos de almacén. Aceptación del vendedor, retorno, fin de semana, disputa y pago cambian el calendario.",
          "Los pedidos estructurados suelen tener datos y posventa más claros. Manuales, reventa o forwarding pueden ofrecer menos protección y 30 días de almacén. Verifica antes de pagar.",
          "Esperar al último día deja poco margen para cuenta, embalaje o ruta. Planifica usando el artículo más antiguo y compara dos paquetes si un vendedor lento amenaza el plazo.",
          "Tras salir del almacén se aplican transportista, ruta y seguro, no la devolución del vendedor. Guarda QC, peso, foto de paquete, declaración, tracking y estado al recibir.",
          "Identifica etapa y reloj, reúne ficha, pedido, fotos y pagos, pide por escrito acciones e importes y sigue el caso hasta saldo o método original.",
        ],
        [
          "Usa el almacén para planificar el paquete, no para aplazar el QC. El botón y condición actual son más fuertes que un artículo general.",
          "Anota llegada y categoría por artículo y crea recordatorios anticipados. Productos comprados en fechas distintas tienen contadores distintos.",
          "Demuestra la diferencia observable entre anuncio y recibido. Es más procesable que decir simplemente mala calidad.",
          "Pregunta si el vendedor aceptó y si el dinero espera una devolución física. No compres sustituto a ciegas con el primer caso abierto.",
          "Pide hechos visibles, no autenticidad o duración. Evidencia ordenada reduce discusiones sobre expectativas ambiguas.",
          "Separa producto, primer porte, retorno y servicios utilizados. Así un reembolso parcial no parece una cantidad desaparecida.",
          "Registra solicitud, aceptación, tracking de retorno, recepción y crédito. Retirar al método original añade tiempo del procesador y divisa.",
          "Utiliza descripción y referencia precisas. Un pedido manual barato es caro cuando el vendedor y la devolución no están definidos.",
          "La expiración puede activar reglas de eliminación o extensión. La advertencia activa, no un blog antiguo, controla la consecuencia.",
          "Reclama dentro del plazo y fotografía antes de tirar la caja. La comunidad no sustituye el contrato aplicable.",
          "El método no garantiza éxito, pero evita plazos perdidos e importes confusos. Regla central: actúa al llegar QC.",
        ]),
    },
  },
  fr: {
    "sugargoo-spreadsheet-guide-2026": {
      title: "Utiliser un tableur Sugargoo sans acheter à l’aveugle",
      dek: "Un cadre de décision pour les liens, variantes, prix CNY, photos d’entrepôt et poids du colis.",
      label: "Guide pratique du tableur",
      readTime: "14 min de lecture",
      sections: englishArticles[0].sections.map((s, i) => ({
        heading: ["Un tableur découvre, il ne prouve pas", "Vérifier la route marketplace", "Comprendre le rôle de l’agent", "Choisir la variante exacte", "Lire correctement CNY et USD", "Chercher des preuves", "Planifier le QC", "Examiner les photos dans l’ordre", "La taille n’est pas universelle", "Estimer l’impact colis", "Séparer risque et admissibilité", "Contrôle final avant paiement"][i],
        body: [
          `Cette partie ${i + 1} conserve la même méthode que la version anglaise : fiche active, variante, prix, preuve d’entrepôt et expédition sont évalués séparément. Une carte facilite la recherche mais ne remplace ni la page actuelle du vendeur ni les photos de votre propre commande. Vérifiez chaque donnée au moment de payer et gardez les éléments qui justifient votre choix.`,
          `Suivez un ordre reproductible plutôt que des mots comme « premium » ou « vérifié ». Comparez le prix CNY, préparez des demandes photo précises, contrôlez les mesures et anticipez poids réel et volumétrique. Le tableur reste ainsi un outil de recherche, pas une recommandation sans preuve.`,
        ],
      })),
    },
    "how-to-read-sugargoo-qc-photos": {
      title: "Lire les photos QC Sugargoo avant l’expédition",
      dek: "Méthode complète pour photos d’entrepôt, mesures, demandes supplémentaires et retours.",
      label: "Manuel d’inspection QC",
      readTime: "13 min de lecture",
      sections: englishArticles[1].sections.map((s, i) => ({
        heading: ["Le QC documente l’arrivée", "Confirmer l’identité", "Forme, symétrie et dommage", "Ne pas juger la couleur sur une photo", "Coutures, bords et métal", "Graphiques, broderies et étiquettes", "Les mesures avant l’apparence", "Comparer les deux chaussures", "Électronique et batteries", "Demander des photos précises", "Évaluer les écarts importants", "Contrôle final du colis"][i],
        body: [
          `Cette étape garde la méthode complète : confirmez d’abord produit, couleur, taille et quantité, puis passez de la forme générale aux détails et aux mesures. Les photos d’entrepôt montrent des problèmes visibles mais ne prouvent ni authenticité, ni durabilité, ni construction interne. Comparez plusieurs angles avant de conclure.`,
          `Si une zone reste incertaine, demandez une photo ciblée avec emplacement, angle ou mesure. Conservez fiche, notes, images et dimensions et agissez pendant le délai de retour. Valider le QC et choisir l’expédition internationale restent deux décisions différentes.`,
        ],
      })),
    },
    "sugargoo-shipping-cost-guide-2026": {
      title: "Coût de livraison Sugargoo 2026 : poids, volume et colis",
      dek: "Méthode complète pour poids réel et volumétrique, routes, simulation, consolidation, emballage et assurance.",
      label: "Guide des coûts de livraison",
      readTime: "15 min de lecture",
      sections: sectionSet(englishArticles[2],
        ["Une estimation n’est pas une facture", "Lister toutes les variables", "Poids réel, volumétrique et facturable", "Aucun diviseur universel", "Utiliser la simulation", "Consolider avec méthode", "Retirer l’emballage au cas par cas", "Les produits sensibles limitent les routes", "L’assurance a des limites", "Intégrer douane et taxes", "Du devis au paiement"],
        [
          "L’estimation prépare un budget sans garantir le montant final. Poids emballé, dimensions, destination, ligne admissible, nature du produit et règle actuelle déterminent le prix. Achat du produit et livraison internationale restent deux paiements séparés.",
          "Notez pays, zone postale, catégorie, poids, longueur, largeur, hauteur, batterie ou liquide, valeur et protection. Deux colis de même masse peuvent coûter très différemment selon leur volume et les lignes disponibles.",
          "Le poids réel est mesuré; le volumétrique représente l’espace. Le poids facturable suit la ligne et peut retenir le plus élevé. Une grande boîte légère peut ainsi dépasser un colis compact et dense.",
          "Diviseur, arrondi, minimum et dimensions changent selon le transporteur. La formule avec 5000 est pédagogique et ne constitue jamais une règle Sugargoo permanente pour toutes les routes.",
          "Le guide officiel 2025 décrivait une simulation de pré-emballage affichée alors à 18 CNY. Elle fournit des mesures plus réalistes avant le choix d’une ligne, utile pour chaussures, manteaux, sacs et colis proches d’une limite.",
          "La consolidation retire des cartons répétés et répartit le premier poids. Un colis trop grand peut toutefois déclencher le volume ou dépasser une limite. Comparez aussi deux colis et isolez un produit sensible s’il bloque les lignes ordinaires.",
          "Retirer une boîte réduit le volume mais aussi la protection et la présentation. Les vêtements supportent mieux la compression que sacs structurés, électronique ou objets de collection. Décidez produit par produit.",
          "Les sources officielles citent batteries, téléphones, power banks, parfums, lotions, vernis, aliments et compléments comme sensibles. Un achat possible ne garantit pas une expédition internationale admissible.",
          "Le guide d’assurance 2025 indiquait ¥500–¥5000 de couverture et environ 1%–4% du montant assuré. C’est un instantané daté; le contrat actuel fixe événements, exclusions, preuves et délais.",
          "TVA, droits, courtage et traitement dépendent du pays, de la valeur et du produit. Aucun guide indépendant ne garantit le dédouanement. Vérifiez déclaration et modèle fiscal de la route.",
          "Avant achat, estimez masse et volume et confirmez une route. Après QC, choisissez l’emballage, séparez les sensibles, simulez si nécessaire, comparez les lignes actives et conservez mesures, assurance, déclaration et suivi.",
        ],
        [
          "Utilisez une fourchette puis remplacez-la par l’écran actif lors de la soumission. Un article peu cher peut devenir coûteux à cause de sa boîte ou de ses restrictions.",
          "Comparez prix, paliers, suivi, délai indicatif, assurance, exclusions et douane. La ligne la moins chère n’a aucune valeur si elle refuse le contenu.",
          "Calculez plusieurs scénarios et comparez-les au poids réel. Les conditions affichées dans le compte restent la seule source opérationnelle.",
          "Tester 5000 et 6000 révèle la sensibilité au volume; seule la ligne actuelle décide du diviseur et de l’arrondi réellement facturés.",
          "La simulation réduit l’incertitude sans figer le tarif ni garantir la douane. Utilisez ses dimensions uniquement avec les lignes proposées au vrai colis.",
          "Mélanger vêtements denses et boîtes volumineuses peut annuler l’économie. Modéliser avant soumission évite une mauvaise consolidation.",
          "Le renforcement ajoute de nouveau poids et volume. Achetez la protection selon fragilité et coût de remplacement, pas seulement pour minimiser un calcul.",
          "Ne masquez pas le contenu pour forcer une ligne. Vérifiez une option avant achat si le produit sensible est essentiel au panier.",
          "L’assurance ne rend pas un produit interdit admissible et ne garantit pas la douane. Choisissez-la selon la perte possible et documentez le colis.",
          "Les témoignages publics sont individuels. Gardez quantités, valeurs, descriptions et dossier du colis pour répondre aux demandes.",
          "La meilleure ligne n’est pas toujours la moins chère : c’est une comparaison documentée avec destination, contenu et poids facturable actuels.",
        ]),
    },
    "sugargoo-fees-cost-breakdown-2026": {
      title: "Frais Sugargoo 2026 : le coût complet avant l’expédition",
      dek: "Produit, transport chinois, paiement, change, options, livraison, assurance et importation expliqués séparément.",
      label: "Frais et coût total",
      readTime: "14 min de lecture",
      sections: sectionSet(englishArticles[3],
        ["Calculer le coût rendu", "Partir du prix CNY", "Ajouter chaque transport national", "Ce que signifie 0%", "Les frais de paiement varient", "Le change est un coût", "Des options pour un risque précis", "La livraison reste la grande variable", "Assurance et douane sont séparées", "Un remboursement n’efface pas tout", "Construire un tableau", "Utiliser le checkout actuel"],
        [
          "Les coûts apparaissent en plusieurs couches : produit, transport vendeur-entrepôt, paiement, conversion, services, colis international, assurance et taxes. Plusieurs acteurs les facturent; il n’existe donc pas une seule ligne universelle appelée frais Sugargoo.",
          "Le vendeur affiche généralement en CNY et le prix change selon variante. Relevez le montant exact importé dans la commande. L’équivalent USD de ce site aide à filtrer mais ne constitue pas un devis.",
          "Chaque vendeur expédie d’abord en Chine. Plusieurs boutiques peuvent créer plusieurs frais nationaux avant une consolidation unique. Conservez cette ligne séparée pour comparer correctement deux offres.",
          "Le contenu officiel a annoncé 0% de service d’achat sur de grandes marketplaces prises en charge. Cela vise cette couche et non paiement, fret national, options, livraison internationale ou taxes.",
          "Un guide officiel 2025 montrait selon la méthode des exemples autour de 4,8% plus US$0,50 et 3,4% plus US$0,30. Ce ne sont pas des tarifs universels 2026; l’écran de paiement prévaut.",
          "Comparez CNY, conversion de plateforme, relevé bancaire et frais de devise. Le taux effectif est la monnaie locale réellement payée pour la valeur CNY après toutes les couches.",
          "Photo, mesure, protection, emballage et simulation doivent répondre à une décision précise. Le guide 2025 affichait alors 18 CNY pour la simulation. Chaque option doit figurer dans le budget.",
          "Après QC, destination, poids facturable, dimensions, produit et ligne fixent le transport international. Un article encombrant peut coûter plus à livrer qu’à acheter.",
          "L’assurance couvre des événements définis; la douane applique la loi du pays. Les chiffres 2025 sont historiques. Lisez exclusions actuelles et prévoyez une marge fiscale.",
          "Annuler avant achat diffère d’un retour depuis l’entrepôt. Retour national, traitement et services consommés peuvent ne pas revenir. Suivez produit et chaque frais séparément.",
          "Créez des lignes pour produit, variante, fret national, paiement, change, QC, emballage, simulation, livraison, assurance et taxes. Utilisez scénarios bas, probable et haut.",
          "Les articles officiels expliquent le flux, mais pour une commande 2026 les captures du paiement et du colis constituent la preuve la plus actuelle.",
        ],
        [
          "Comparez le même panier, moyen de paiement et pays. Un zéro sur une couche ne veut pas dire coût total nul.",
          "Comparez en CNY puis consultez le total réel du compte. Le prix minimum du listing peut concerner une autre variante.",
          "Le carton et le délai national influencent aussi consolidation et volume futur. Ne les cachez pas dans le prix produit.",
          "Commande manuelle, revente et forwarding peuvent suivre d’autres règles. Vérifiez le type exact avant de généraliser.",
          "Testez un petit montant avant un gros solde et lisez retrait et destination du remboursement. Une ancienne grille ne suffit pas.",
          "Calculez le taux effectif au même moment. Le taux moyen public n’est pas obligatoirement celui du processeur.",
          "N’achetez un extra que pour mesurer, prouver, protéger ou obtenir des dimensions. Sans question, il ajoute seulement du coût.",
          "Estimez poids et volume avant achat et utilisez la simulation si l’incertitude peut changer de route ou de tarif.",
          "L’assurance n’évite pas l’inspection ni ne rend un sensible admissible. Lisez assurance, route et taxe séparément.",
          "Le guide officiel mentionnait jusqu’à dix jours ouvrés dans certains cas, mais vendeur, statut et paiement modifient le délai.",
          "Mettez le tableau à jour à la commande, à l’arrivée et au paiement du colis. La valeur se mesure au total et aux preuves.",
          "Un guide honnête montre ce qui peut encore varier; il ne promet ni taux fixe, ni zéro total, ni résultat douanier.",
        ]),
    },
    "sugargoo-review-2026": {
      title: "Avis Sugargoo 2026 : règles officielles et 641 témoignages publics",
      dek: "Analyse séparant informations officielles, statistiques Trustpilot, discussions Reddit et test prudent.",
      label: "Analyse indépendante",
      readTime: "16 min de lecture",
      sections: sectionSet(englishArticles[4],
        ["Trois niveaux de preuve", "Le service publié", "Un profil Trustpilot partagé", "Thèmes positifs", "Thèmes négatifs", "QC : atout et limite", "Un délai reste une prévision", "Restrictions et liens", "La communauté n’est pas neutre", "La note ne prouve pas le produit", "Faire un premier test contrôlé", "Un verdict conditionnel"],
        [
          "Cette analyse sépare description officielle, statistique indépendante et récits personnels. Les règles établissent le flux, Trustpilot mesure un profil mouvant et Reddit révèle des questions. Un témoignage seul n’est pas vérifié par sa publication.",
          "Sugargoo décrit achat, stockage, consolidation et livraison comme étapes distinctes. Les guides annoncent cinq photos QC, options et durées de stockage selon commande. L’écran du compte reste décisif.",
          "Au 1er septembre 2026, Trustpilot affichait 641 avis et 3,4/5 : 60% cinq étoiles, 11% quatre, 6% trois, 4% deux et 19% une; 85% des négatifs avaient reçu une réponse.",
          "Les avis positifs citent simplicité, assistance, emballage et colis réussis. Les délais racontés appartiennent à une ligne, une saison et un envoi précis et ne deviennent pas une promesse.",
          "Les avis négatifs parlent de retard, suivi, réponses, vérification de compte, remboursement et douane. Ce sont des expériences alléguées; elles signalent surtout quels documents conserver.",
          "Les cinq photos permettent une inspection, mais certains utilisateurs les jugent rapides ou floues. Leur valeur dépend du produit, des angles et d’une demande supplémentaire précise.",
          "Les expériences vont de plus rapide à beaucoup plus lent. Un post officiel Reddit 2026 expliquait que certaines lignes tax-free n’affichent rien avant la douane. Cela n’assure pas la suite.",
          "Les discussions portent souvent sur commande manuelle, lien bloqué et route absente. Les guides séparent ordinaire et sensible. Un lien accessible ne prouve ni achat ni expédition.",
          "Le subreddit mêle annonces, aide, promotion, QC, compliments et plaintes sous règles spécifiques. Il détecte des thèmes actuels mais ne constitue pas un échantillon aléatoire.",
          "Le vendeur choisit ce qu’il expédie; entrepôt, ligne, douane et dernier kilomètre suivent. Une bonne note d’agent ne prouve ni authenticité, matière ni constance.",
          "Testez un ou deux produits ordinaires sans échéance. Documentez CNY, paiement, QC, mesure, emballage, poids facturable, route, assurance et suivi.",
          "Il existe un flux complet et de nombreux clients satisfaits, mais aussi un profil mixte avec plaintes graves. Une conclusion honnête conserve les deux réalités.",
        ],
        [
          "L’arrêt de recherche est septembre 2026. Le but est une liste de contrôles vérifiables, pas un slogan favorable ou hostile.",
          "Achat produit et colis international sont séparés. L’agent ne supprime pas les risques vendeur, produit, transporteur ou douane.",
          "La polarisation compte plus que la moyenne. Commencez petit et jugez le processus important pour vous sur vos propres preuves.",
          "Testez une question précise, une preuve mesurable et la conformité de l’emballage acheté. Cela transforme l’éloge en critère observable.",
          "Gardez listing, paiement, photos, mesures, poids, déclaration, route et tracking. Convertissez les plaintes en checklist, pas en vérités générales.",
          "Demandez vite un angle ou une mesure. QC montre le visible, sans certifier authenticité, matière ou durée.",
          "Choisissez selon admissibilité, tracking, assurance et avis actuels. Ajoutez de la marge si une date est importante.",
          "Vérifiez avertissement, attribut et route avant paiement. Une commande manuelle exige une variante et un retour très clairs.",
          "Utilisez les posts pour formuler une question, puis confirmez dans le compte, chez le transporteur ou dans la règle écrite.",
          "Séparez chaque maillon et gardez une preuve à chaque passage. Le support peut ainsi localiser le problème.",
          "Le petit test mesure le flux sans exposer un grand panier. Décidez ensuite depuis votre propre dossier.",
          "Sugargoo peut convenir à l’acheteur méthodique, mais ne garantit ni qualité, délai, vendeur ou douane. Ce cadre définit le verdict.",
        ]),
    },
    "sugargoo-returns-refunds-storage-guide": {
      title: "Retours, remboursements et stockage Sugargoo : trois horloges",
      dek: "Délais vendeur, stockage 100/30 jours, annulation, preuves, remboursement et réclamation expliqués.",
      label: "Manuel retours et stockage",
      readTime: "14 min de lecture",
      sections: sectionSet(englishArticles[5],
        ["Stockage et retour sont différents", "Durée selon le type de commande", "Le vendeur décide du retour", "L’annulation change après achat", "Construire la preuve QC", "Transport retour et déductions", "Le délai suit l’étape physique", "Manuel, revente et forwarding", "Ne pas attendre le dernier jour", "Après expédition : règles colis", "Checklist en cinq étapes"],
        [
          "Retour vendeur, stockage, traitement du remboursement et réclamation colis sont des horloges distinctes. Le délai vendeur peut finir avec beaucoup de jours de stockage restants. Examinez dès l’apparition du QC.",
          "L’article officiel d’août 2025 indiquait 100 jours pour achats et 30 pour revente ou forwarding à partir du statut packing center. Le compteur actif prévaut.",
          "Un guide publié décrivait cinq jours pour certains achats Taobao et 1688. Personnalisation, catégorie, exclusion vendeur et commande manuelle peuvent suivre d’autres conditions.",
          "Avant l’achat agent, annuler est simple. Après achat, le vendeur intervient; après expédition ou arrivée, il faut un retour physique. Vérifiez le statut avant toute action.",
          "Les photos standard confirment le produit, mais le retour demande l’écart exact. Demandez gros plan, mesure, quantité, étiquette ou variante et gardez listing et remarque.",
          "Le vendeur peut payer le retour s’il est responsable; un changement de préférence peut rester au client. Des déductions de traitement peuvent subsister.",
          "Un guide officiel évoquait jusqu’à dix jours ouvrés dans certains cas d’entrepôt. Accord vendeur, retour, week-end, litige et paiement modifient le calendrier.",
          "Une commande structurée a souvent une meilleure trace. Manuel, revente et forwarding peuvent offrir moins de protection et 30 jours. Clarifiez avant paiement.",
          "Le dernier jour laisse peu de marge pour compte, emballage ou route. Planifiez selon l’article le plus ancien et comparez deux colis si nécessaire.",
          "Après départ, transporteur, route et assurance remplacent le retour vendeur. Gardez QC, poids, photo colis, déclaration, tracking et état à réception.",
          "Identifiez l’étape et l’horloge, rassemblez listing, commande, photos et paiements, demandez actions et montants par écrit, puis suivez jusqu’au règlement.",
        ],
        [
          "Utilisez le stockage pour préparer le colis, jamais pour reporter une décision produit. Le bouton after-sales actuel est plus fort qu’une règle générale.",
          "Notez date et catégorie par article et programmez une alerte en avance. Des achats à des dates différentes ont des compteurs distincts.",
          "Prouvez l’écart visible entre listing et réception. C’est plus exploitable qu’une appréciation vague de mauvaise qualité.",
          "Demandez si le vendeur a accepté et si l’argent attend le retour. N’achetez pas un remplacement à l’aveugle pendant le dossier.",
          "Demandez des faits visibles, pas une certification d’authenticité ou de durée. Des preuves ordonnées réduisent l’ambiguïté.",
          "Séparez produit, premier transport, retour et services consommés. Un remboursement partiel devient alors compréhensible.",
          "Consignez demande, accord, suivi retour, réception et crédit. Le retrait vers le moyen initial ajoute délai processeur et change.",
          "Décrivez précisément et joignez la bonne référence. Une commande manuelle bon marché devient coûteuse si le recours est flou.",
          "L’expiration peut déclencher élimination ou extension. L’avertissement du compte, pas un ancien blog, contrôle la conséquence.",
          "Réclamez dans le délai et photographiez avant de jeter la boîte. La communauté ne remplace pas le contrat.",
          "La méthode ne garantit pas l’issue mais évite délais perdus et montants confus. Règle centrale : agir au QC.",
        ]),
    },
  },
  it: {
    "sugargoo-spreadsheet-guide-2026": {
      title: "Usare un foglio Sugargoo senza comprare alla cieca",
      dek: "Un metodo decisionale per link, varianti, prezzi CNY, foto di magazzino e peso del pacco.",
      label: "Guida pratica al foglio",
      readTime: "14 min di lettura",
      sections: englishArticles[0].sections.map((s, i) => ({
        heading: ["Il foglio scopre, non dimostra", "Conferma il marketplace", "Capisci il ruolo dell’agente", "Scegli la variante esatta", "Leggi bene CNY e USD", "Cerca prove, non slogan", "Pianifica il QC", "Controlla le foto in ordine", "Le taglie non sono universali", "Stima l’impatto sul pacco", "Separa rischio e spedibilità", "Controllo finale prima del pagamento"][i],
        body: [
          `Questa sezione ${i + 1} mantiene lo stesso metodo della versione inglese: pagina attiva, variante, prezzo, prova di magazzino e spedizione vengono valutati separatamente. Una scheda accelera la ricerca ma non sostituisce la pagina attuale del venditore o le foto del tuo ordine. Verifica i dati al momento del pagamento e conserva le prove della scelta.`,
          `Segui una sequenza ripetibile invece di parole come “premium” o “verificato”. Confronta il prezzo CNY, pianifica richieste fotografiche precise, controlla misure e peso reale o volumetrico. Il foglio rimane così uno strumento di ricerca e non un consiglio d’acquisto senza prove.`,
        ],
      })),
    },
    "how-to-read-sugargoo-qc-photos": {
      title: "Come leggere le foto QC Sugargoo prima della spedizione",
      dek: "Metodo completo per foto di magazzino, misure, richieste extra e decisioni di reso.",
      label: "Manuale di ispezione QC",
      readTime: "13 min di lettura",
      sections: englishArticles[1].sections.map((s, i) => ({
        heading: ["Il QC documenta l’arrivo", "Conferma prima l’identità", "Forma, simmetria e danni", "Non giudicare il colore da una foto", "Cuciture, bordi e ferramenta", "Grafiche, ricami ed etichette", "Le misure contano di più", "Confronta entrambe le scarpe", "Elettronica e batterie", "Richiedi foto precise", "Valuta le differenze materiali", "Controllo finale del pacco"][i],
        body: [
          `Questo passaggio conserva il metodo completo: prima conferma prodotto, colore, taglia e quantità, poi passa dalla forma generale ai dettagli e alle misure. Le foto di magazzino mostrano problemi visibili ma non provano autenticità, durata o costruzione interna. Confronta più angoli prima di concludere.`,
          `Se un’area resta dubbia, richiedi un’immagine mirata indicando posizione, angolo o misura. Conserva pagina, note, foto e dimensioni e agisci entro la finestra di reso. Approvare il QC e scegliere la spedizione internazionale sono decisioni separate.`,
        ],
      })),
    },
    "sugargoo-shipping-cost-guide-2026": {
      title: "Costi di spedizione Sugargoo 2026: peso, volume e pacchi",
      dek: "Guida a peso reale e volumetrico, rotte, simulazione, consolidamento, imballaggio e assicurazione.",
      label: "Guida ai costi di spedizione",
      readTime: "15 min di lettura",
      sections: sectionSet(englishArticles[2],
        ["La stima non è la fattura", "Raccogli tutte le variabili", "Peso reale, volumetrico e fatturabile", "Nessun divisore universale", "Quando usare la simulazione", "Consolidare con criterio", "Rimuovere imballi selettivamente", "Le merci sensibili riducono le rotte", "L’assicurazione ha limiti", "Dogana e tasse nel budget", "Dal preventivo al pagamento"],
        [
          "La stima iniziale aiuta il budget ma non garantisce l’importo. Peso imballato, misure, destinazione, linea idonea, tipo di merce e regola corrente determinano il prezzo. Acquisto e spedizione internazionale restano pagamenti separati.",
          "Annota paese, area postale, categoria, peso, lunghezza, larghezza, altezza, batterie o liquidi, valore e protezione. Due pacchi dello stesso peso possono avere costi diversi per volume o disponibilità di linee.",
          "Il peso reale è la massa fisica; quello volumetrico rappresenta lo spazio. Il peso fatturabile segue la rotta e può usare il maggiore. Una scatola grande e leggera può quindi costare molto.",
          "Divisore, arrotondamento, minimo e limiti cambiano per vettore. Il 5000 del calcolatore spiega solo il concetto e non è una regola Sugargoo permanente per ogni linea.",
          "La guida ufficiale 2025 descriveva la simulazione pre-imballaggio, allora mostrata a 18 CNY. Offre misure più realistiche prima della rotta, utile per scarpe, cappotti, borse e limiti dimensionali.",
          "Consolidare può eliminare cartoni doppi e distribuire il primo peso. Un pacco enorme può però attivare volume o superare limiti. Confronta anche due pacchi e separa il sensibile se blocca linee ordinarie.",
          "Togliere scatole riduce spazio ma anche protezione e presentazione. Vestiti comprimibili differiscono da borse strutturate, elettronica e collezionabili. Decidi per singolo articolo.",
          "Le fonti ufficiali citano batterie, telefoni, power bank, profumi, lozioni, smalti, alimenti e integratori come sensibili. Essere acquistabile non prova la spedibilità internazionale.",
          "La guida assicurativa 2025 indicava coperture ¥500–¥5000 e circa 1%–4% del valore assicurato. È un dato storico; oggi contano eventi, esclusioni, prove e scadenze attuali.",
          "IVA, dazi, intermediazione e gestione dipendono da paese, valore e merce. Nessuna guida indipendente garantisce lo sdoganamento. Verifica dichiarazione e modello fiscale della linea.",
          "Prima dell’acquisto stima peso e volume e conferma una rotta. Dopo QC scegli imballo, separa sensibili, simula se serve, confronta linee attive e salva misure, assicurazione, dichiarazione e tracking.",
        ],
        [
          "Usa un intervallo e sostituiscilo con la schermata attiva alla presentazione. Un prodotto economico può diventare caro per scatola, restrizioni o destinazione.",
          "Confronta prezzo, scaglioni, tracking, previsione, assicurazione, esclusioni e dogana. La linea più economica non vale se non accetta il contenuto.",
          "Calcola scenari diversi e confrontali col peso reale. Le condizioni dell’account restano la fonte operativa per il costo.",
          "Provare 5000 e 6000 mostra la sensibilità al volume, ma solo la rotta attiva decide divisore e arrotondamento.",
          "La simulazione riduce incertezza senza bloccare tariffa o dogana. Usa le misure solo per le opzioni offerte al pacco reale.",
          "Vestiti densi e molte scatole possono annullare il risparmio. Modellare prima evita un consolidamento controproducente.",
          "Il rinforzo aggiunge peso e volume. Acquista protezione per fragilità e costo di sostituzione, non solo per minimizzare il calcolo.",
          "Non nascondere il contenuto per forzare una linea. Verifica prima di acquistare se il prodotto sensibile è essenziale.",
          "L’assicurazione non rende idonea merce vietata e non garantisce la dogana. Sceglila per la perdita possibile e documenta tutto.",
          "Le esperienze pubbliche non sono una tabella tariffaria. Conserva quantità, valori, descrizioni e registro del pacco.",
          "La migliore linea è un confronto documentato con destinazione, contenuto, peso fatturabile e condizioni attuali, non un prezzo fisso.",
        ]),
    },
    "sugargoo-fees-cost-breakdown-2026": {
      title: "Commissioni Sugargoo 2026: costo totale prima della spedizione",
      dek: "Prodotto, trasporto interno, pagamento, cambio, servizi, spedizione, assicurazione e importazione.",
      label: "Commissioni e costo totale",
      readTime: "14 min di lettura",
      sections: sectionSet(englishArticles[3],
        ["Calcola il costo complessivo", "Parti dal prezzo CNY", "Aggiungi il trasporto interno", "Cosa significa 0%", "Le spese di pagamento cambiano", "Anche il cambio costa", "Servizi per un rischio preciso", "La spedizione è la variabile maggiore", "Assicurazione e dogana sono diverse", "Il rimborso può non restituire tutto", "Crea una tabella dei costi", "Usa il checkout corrente"],
        [
          "I costi arrivano a strati: prodotto, venditore-magazzino, pagamento, conversione, servizi, pacco internazionale, assicurazione e tasse. Venditore, processore, vettore e autorità possono fatturare parti diverse; non esiste una singola commissione universale.",
          "Il marketplace usa CNY e il prezzo cambia per variante. Registra l’importo esatto importato nell’ordine. Il valore USD del sito è solo un aiuto alla selezione, non un preventivo.",
          "Ogni venditore spedisce prima in Cina. Più negozi possono creare più costi interni anche con un solo pacco finale. Mantieni questa voce separata nel confronto.",
          "I contenuti ufficiali hanno promosso 0% di servizio d’acquisto sui principali marketplace supportati. Riguarda quello strato, non pagamento, trasporto interno, extra, spedizione internazionale o tasse.",
          "Una guida 2025 mostrava esempi per metodo, tra cui 4,8% più US$0,50 e 3,4% più US$0,30. Non sono prezzi universali 2026; vale la schermata attuale.",
          "Confronta CNY, conversione piattaforma, estratto carta e costo valuta. Il tasso effettivo è la moneta locale pagata per il CNY dopo tutte le conversioni.",
          "Foto, misure, protezione, imballo e simulazione devono rispondere a una decisione. La simulazione 2025 mostrava 18 CNY allora. Ogni extra va nel budget.",
          "Dopo QC, destinazione, peso fatturabile, misure, merce e rotta determinano il trasporto internazionale. Un oggetto voluminoso può costare più da spedire che da comprare.",
          "L’assicurazione copre eventi definiti; la dogana segue la legge del paese. I numeri 2025 sono storici. Leggi esclusioni correnti e prevedi margine fiscale.",
          "Annullare prima dell’acquisto differisce dal reso dal magazzino. Ritorno interno, elaborazione e servizi usati possono non rientrare. Traccia ogni voce.",
          "Crea righe per prodotto, variante, trasporto interno, pagamento, cambio, QC, imballo, simulazione, spedizione, assicurazione e tasse. Usa scenari basso, probabile e alto.",
          "Gli articoli ufficiali spiegano il flusso, ma per il 2026 le schermate di pagamento e pacco sono la prova più aggiornata.",
        ],
        [
          "Confronta stesso carrello, metodo e destinazione. Uno zero su uno strato non significa costo totale zero.",
          "Confronta in CNY e controlla il totale reale nell’account. Il minimo del listing può appartenere a un’altra variante.",
          "Costo e scatola interni influenzano anche consolidamento e volume futuro. Non nasconderli nel prezzo prodotto.",
          "Ordini manuali, forwarding o piattaforme secondarie possono seguire regole diverse. Controlla il tipo concreto.",
          "Prova un piccolo importo prima di caricare molto saldo e leggi prelievo e rimborso. Una tabella vecchia non basta.",
          "Calcola il tasso effettivo nello stesso momento. Il cambio medio pubblico non obbliga il processore.",
          "Compra un extra solo per misurare, provare, proteggere o conoscere le misure. Senza domanda aumenta soltanto il costo.",
          "Stima peso e volume prima dell’acquisto e usa la simulazione se l’incertezza può cambiare rotta o prezzo.",
          "L’assicurazione non evita l’ispezione né rende idoneo il sensibile. Leggi assicurazione, rotta e imposte separatamente.",
          "Una guida indicava fino a dieci giorni lavorativi in alcuni casi, ma venditore, stato e pagamento influenzano il tempo.",
          "Aggiorna la tabella all’ordine, all’arrivo e al pagamento del pacco. Il valore dipende dal totale e dalle prove.",
          "Una guida onesta mostra ciò che varia; non promette tasso fisso, zero costi totali o risultato doganale.",
        ]),
    },
    "sugargoo-review-2026": {
      title: "Recensione Sugargoo 2026: regole ufficiali e 641 opinioni pubbliche",
      dek: "Analisi di fonti ufficiali, dati Trustpilot, temi Reddit e una prova prudente per nuovi utenti.",
      label: "Analisi indipendente",
      readTime: "16 min di lettura",
      sections: sectionSet(englishArticles[4],
        ["Tre livelli di prova", "Il servizio dichiarato", "Un Trustpilot misto", "Temi positivi", "Temi negativi", "QC tra forza e limite", "La consegna è una previsione", "Restrizioni e link", "La community non è neutrale", "Il voto non prova il prodotto", "Primo test controllato", "Verdetto condizionato"],
        [
          "L’analisi separa descrizione ufficiale, statistica indipendente e racconti personali. Le regole definiscono il flusso, Trustpilot misura un profilo mutevole e Reddit mostra domande. Un racconto non è verificato solo perché pubblicato.",
          "Sugargoo descrive acquisto, deposito, consolidamento e spedizione come fasi distinte. Le guide indicano cinque foto QC, opzioni e tempi di deposito per tipo d’ordine. L’account attivo decide.",
          "Il 1 settembre 2026 Trustpilot mostrava 641 recensioni e 3,4/5: 60% cinque stelle, 11% quattro, 6% tre, 4% due e 19% una; 85% delle negative aveva risposta.",
          "Le recensioni positive citano facilità, assistenza, imballaggio e haul completati. I tempi raccontati appartengono a rotta, stagione e pacco specifici e non sono promesse.",
          "Le negative parlano di ritardi, tracking, risposte, controlli account, rimborsi e dogana. Sono esperienze riferite; segnalano soprattutto quali prove conservare.",
          "Cinque foto permettono un controllo reale, ma alcuni utenti descrivono immagini veloci o sfocate. Il valore dipende da prodotto, angoli e richiesta precisa.",
          "Le esperienze vanno da più veloce a molto più lenta della stima. Un post ufficiale Reddit 2026 spiegava che alcune linee tax-free non mostrano dati prima della dogana. Non garantisce il seguito.",
          "Ricorrono dubbi su ordine manuale, link bloccato e rotte. Le guide distinguono ordinario e sensibile. Un link aperto non prova approvazione o spedibilità.",
          "Il subreddit contiene avvisi, aiuto, promozione, QC, elogi e lamentele sotto regole specifiche. È utile per temi correnti, non come campione casuale.",
          "Il venditore decide cosa invia; magazzino, linea, dogana e ultimo miglio sono separati. Un buon voto agente non prova autenticità, materiale o costanza.",
          "Prova uno o due articoli ordinari senza scadenza. Documenta CNY, pagamento, QC, misura, imballo, peso fatturabile, rotta, assicurazione e tracking.",
          "Esiste un flusso completo e molti clienti soddisfatti, ma anche un profilo misto con lamentele serie. Una valutazione onesta include entrambi.",
        ],
        [
          "La data della ricerca è settembre 2026. L’obiettivo è una checklist verificabile, non uno slogan positivo o negativo.",
          "Prodotto e pacco internazionale sono pagamenti separati. L’agente non elimina rischio del venditore, del vettore o della dogana.",
          "La polarizzazione conta più della media. Parti piccolo e valuta il processo importante con prove del tuo ordine.",
          "Prova una domanda precisa, una misura verificabile e se l’imballo pagato corrisponde. Così l’elogio diventa criterio osservabile.",
          "Salva listing, pagamento, foto, misure, peso, dichiarazione, rotta e tracking. Trasforma i temi negativi in controlli, non fatti universali.",
          "Chiedi presto un angolo o una misura. Il QC mostra il visibile, non certifica autenticità, materiale o durata.",
          "Scegli per idoneità, tracking, assicurazione e avvisi correnti. Aggiungi margine se una data è importante.",
          "Controlla avviso, attributo e rotta prima del pagamento. Un ordine manuale richiede variante e reso molto chiari.",
          "Usa i post per formulare domande, poi conferma in account, vettore o regola scritta. Un post virale non prova il sistema.",
          "Separa ogni anello e conserva prove ai passaggi. Il supporto può così localizzare meglio il problema.",
          "Il test piccolo misura il flusso senza esporre un grande carrello. Decidi dopo con il tuo dossier.",
          "Può funzionare per chi verifica e pianifica, ma non garantisce qualità, tempi o dogana. Questo limite definisce il giudizio.",
        ]),
    },
    "sugargoo-returns-refunds-storage-guide": {
      title: "Resi, rimborsi e deposito Sugargoo: tre orologi",
      dek: "Finestra venditore, deposito 100/30 giorni, annullamento, prove, rimborso e reclamo pacco.",
      label: "Manuale resi e deposito",
      readTime: "14 min di lettura",
      sections: sectionSet(englishArticles[5],
        ["Deposito e reso sono diversi", "Durata per tipo d’ordine", "Il reso dipende dal venditore", "L’annullamento cambia dopo l’acquisto", "Prove QC per il post-vendita", "Trasporto di ritorno e trattenute", "Il tempo segue la fase", "Manuale, rivendita e forwarding", "Non aspettare l’ultimo giorno", "Dopo la spedizione valgono le regole pacco", "Checklist in cinque passi"],
        [
          "Reso venditore, deposito, rimborso e reclamo pacco sono orologi distinti. La finestra più breve può finire con molti giorni di deposito rimasti. Controlla appena appare il QC.",
          "L’articolo ufficiale di agosto 2025 indicava 100 giorni per acquisti e 30 per rivendita o forwarding dallo stato packing center. Vale il contatore attivo.",
          "Una guida pubblicata descriveva cinque giorni per ordini Taobao e 1688 idonei. Personalizzati, categorie speciali, esclusioni e manuali possono avere condizioni diverse.",
          "Prima che l’agente acquisti, annullare è più semplice. Dopo serve il venditore; dopo invio o arrivo diventa un reso fisico. Controlla lo stato.",
          "Le foto standard confermano l’articolo, ma il reso richiede il difetto esatto. Chiedi primo piano, misura, quantità, etichetta o variante e conserva listing e nota.",
          "Il venditore può pagare il ritorno se responsabile; un ripensamento può restare al cliente. Alcune spese di elaborazione possono rimanere.",
          "Una guida ufficiale citava fino a dieci giorni lavorativi per alcuni casi di magazzino. Venditore, ritorno, weekend, disputa e pagamento cambiano il calendario.",
          "Gli ordini strutturati hanno spesso dati più chiari. Manuali, rivendita e forwarding possono offrire meno protezione e 30 giorni. Verifica prima.",
          "L’ultimo giorno lascia poco margine per account, imballo o rotta. Pianifica dall’articolo più vecchio e confronta due pacchi se necessario.",
          "Dopo l’uscita valgono vettore, rotta e assicurazione, non il reso venditore. Conserva QC, peso, foto pacco, dichiarazione, tracking e stato alla consegna.",
          "Identifica fase e orologio, raccogli listing, ordine, foto e pagamenti, chiedi azioni e importi per iscritto e segui fino al saldo.",
        ],
        [
          "Usa il deposito per pianificare il pacco, non per rinviare il QC. Il pulsante after-sales attuale è più forte di una regola generale.",
          "Annota data e categoria per articolo e imposta avvisi anticipati. Acquisti in date diverse hanno contatori diversi.",
          "Dimostra la differenza visibile tra listing e ricevuto. È più gestibile di un giudizio generico di scarsa qualità.",
          "Chiedi se il venditore ha accettato e se il denaro attende il ritorno. Non comprare alla cieca un sostituto.",
          "Chiedi fatti visibili, non autenticità o durata. Prove ordinate riducono discussioni su aspettative vaghe.",
          "Separa prodotto, primo trasporto, ritorno e servizi usati. Un rimborso parziale diventa comprensibile.",
          "Registra richiesta, consenso, tracking ritorno, ricezione e credito. Il metodo originale aggiunge tempo e cambio.",
          "Descrivi con precisione e allega il riferimento. Un manuale economico diventa costoso se il ricorso è indefinito.",
          "La scadenza può attivare eliminazione o estensione. L’avviso dell’account, non un vecchio blog, controlla la conseguenza.",
          "Reclama entro il termine e fotografa prima di buttare la scatola. La community non sostituisce il contratto.",
          "Il metodo non garantisce l’esito ma evita finestre perse e somme confuse. Regola centrale: agire al QC.",
        ]),
    },
  },
};

const articlePriority = [
  "build-reliable-sugargoo-spreadsheet-fields-dates-evidence",
  "sugargoo-spreadsheet-guide-2026",
  "sugargoo-shipping-cost-guide-2026",
  "sugargoo-fees-cost-breakdown-2026",
  "how-to-read-sugargoo-qc-photos",
  "sugargoo-review-2026",
  "sugargoo-returns-refunds-storage-guide",
];

export function getArticles(lang: Language): Article[] {
  const localized = lang === "en" ? [...englishArticles, spreadsheetMaintenanceArticles.en] : [...englishArticles.map((article) => localizedArticleShell(lang, article)), spreadsheetMaintenanceArticles[lang]];
  return articlePriority.map((slug) => localized.find((article) => article.slug === slug)!).filter(Boolean);
}

export function getArticle(lang: Language, slug: string) {
  return getArticles(lang).find((article) => article.slug === slug);
}
