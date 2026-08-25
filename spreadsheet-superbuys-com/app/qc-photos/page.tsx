import type { Metadata } from "next";
import { GuidePage } from "../guide-page";

export const metadata: Metadata = {
  title: "Superbuy QC Photos Guide: What to Check Before Shipping (2026)",
  description: "A practical Superbuy QC photo checklist for clothing, shoes and accessories, including photo limits and when to request a closer view.",
  keywords: ["superbuy qc photos", "superbuy quality check", "superbuy warehouse inspection", "how to check superbuy qc"],
  alternates: { canonical: "/qc-photos/" },
};

export default function QcPage() {
  return <GuidePage
    eyebrow="QUALITY CONTROL · CHECKLIST"
    title="Read Superbuy QC photos like evidence—not a promise"
    pagePath="/qc-photos/"
    intro="Superbuy warehouse photos can answer specific visual questions before international shipping. They are most useful when you compare them with the original order and understand what a photograph cannot prove."
    readMinutes={12}
    takeaways={[
      "Check identity first: model, color, visible size label, quantity and included parts.",
      "Review category-specific risk areas instead of searching every image for undefined “quality.”",
      "A photo cannot verify authenticity, fabric composition, comfort, odor, hidden construction or long-term durability.",
      "Ask for a precise angle, detail or measurement while the item is still in the warehouse.",
    ]}
    sources={[
      { label: "Superbuy official User Guidance" },
      { label: "Superbuy official Service & Fees" },
      { label: "Superbuy official Parcel Forwarding Guide" },
    ]}
    next={{ label: "Plan shipping costs", href: "/shipping-cost/" }}
    sections={[
      {
        heading: "What Superbuy’s warehouse inspection actually does",
        body: [
          "Superbuy’s official user guidance says that after a shopping-agent order reaches the warehouse, the item is inspected, photographed and placed in the buyer’s warehouse account. This creates a useful checkpoint between the Chinese seller and international dispatch. You can compare the arrival with the order before paying to send it much farther away.",
          "The word “QC” is often interpreted too broadly. A warehouse inspection is not the same as a manufacturer’s production audit, a laboratory test or a professional authentication service. Standard photographs show the item’s visible state from the provided angles. They are evidence of what the camera recorded at that time, not a guarantee about every hidden feature or how the product will perform after months of use.",
          "Superbuy also distinguishes normal shopping-agent inspection from parcel-forwarding situations in its public guidance. Its forwarding guide contains limitations about what staff confirm for self-purchased items. The safest approach is to read the inspection description shown for your own order type and avoid assuming that every product, platform and service receives identical treatment.",
        ],
        points: ["Confirm whether the order is shopping-agent or parcel-forwarding.", "Read the inspection status in the warehouse account.", "Use the photos as visible evidence, not a universal guarantee.", "Keep the original seller page for comparison."],
      },
      {
        heading: "Start with identity, variant and completeness",
        body: [
          "Before looking for a loose thread or tiny mark, confirm that the warehouse received the product you selected. Compare the overall silhouette, model, color family, quantity and visible option label with the screenshot saved at checkout. If the seller offered several similar versions, place the source image and warehouse image side by side instead of relying on memory.",
          "For clothing and shoes, look for a visible size tag or label, but remember that a printed size does not prove the garment’s actual measurements. For a multi-piece product, count the pieces and check whether detachable straps, laces, inserts, chargers or other stated accessories appear. Packaging may show a model code that is easier to compare than the product’s appearance alone.",
          "A correct-looking product can still be an incomplete order. Source photos sometimes show styling props or optional accessories that are not included, so use the seller’s written option description as the reference. If inclusion is unclear, ask before international shipping. The purpose of this first pass is binary: did the visibly received item match the documented order closely enough to continue?",
        ],
        points: ["Correct product and model", "Correct selected color or pattern", "Visible size or option label", "Correct quantity and stated accessories"],
      },
      {
        heading: "Use a category-specific inspection checklist",
        body: [
          "For clothing, check the front and back shape, print or embroidery placement, seam alignment, cuffs, hems, collar, zipper path and visible marks. Compare repeated elements for symmetry. A few loose thread ends may be minor; a twisted seam, large stain or badly shifted graphic is more consequential. If fit depends on a measurement, request that measurement rather than estimating from a flat photograph.",
          "For footwear, compare the left and right shoe, toe shape, heel height, sole edge, panel alignment, visible glue and surface damage. Look at the size label and any box label, then decide whether the retail box matters. The box adds volume to a parcel but may protect the shoe shape. A photograph cannot tell you whether the shoe will fit comfortably, so compare any measured insole length with footwear you already own.",
          "For bags and accessories, inspect corners, closures, handles, strap attachment points, visible hardware, surface scratches and the included components. For rigid or fragile goods, examine edges and packaging damage. Electronics need a different standard: an exterior image does not prove operation. Superbuy’s current fee page lists an optional power-on inspection for certain appliances and 3C products, but you should read the scope and current price before assuming it tests every function.",
        ],
        points: ["Clothing: seams, print, labels, measurements and stains", "Shoes: pair symmetry, soles, glue, labels and box condition", "Bags: corners, closures, straps, hardware and surfaces", "Electronics: request only the specific supported test you need"],
      },
      {
        heading: "Know the limits of color, materials and authenticity",
        body: [
          "Digital photos do not reproduce color perfectly. Warehouse lighting, camera white balance, compression and your screen can all shift the result. Use images to identify a clearly wrong color family, not to decide whether a subtle shade is exact. If color accuracy is critical, ask for a photo beside a neutral reference, but even that will not reproduce how the item looks under your own lighting.",
          "A picture also cannot confirm material composition, fabric weight, softness, smell, internal reinforcement, battery health or long-term durability. A measurement can answer a dimension question; a close-up can show a weave or surface; neither substitutes for physical testing. Good QC content states these limits because overclaiming turns a useful warehouse service into false reassurance.",
          "Warehouse photos cannot prove authenticity. Logos, labels and packaging can be photographed, but visual similarity is not independent authentication. Branded or potentially counterfeit products can also create intellectual-property, route and customs risks. Check Superbuy’s current policies and applicable law for your destination. Do not use a spreadsheet label or a warehouse image as a claim that a product is genuine or guaranteed to clear customs.",
        ],
        points: ["Treat subtle color as approximate.", "Do not infer composition or durability from appearance.", "Do not present warehouse photos as authentication.", "Review current restrictions before ordering branded goods."],
      },
      {
        heading: "Request additional evidence with a precise question",
        body: [
          "An extra photo is valuable only when it answers a defined question. “Please check quality” gives the warehouse no objective target. “Please photograph the left heel straight-on and show whether the sole edge is separated” identifies both the area and the decision you need to make. For sizing, request the exact dimension and how it should be measured, such as pit-to-pit width, garment length or insole length.",
          "Superbuy’s official fee page currently lists paid options including detailed photos, re-inspection, detailed inspection, product video and certain functional checks. These services have different scopes. A detailed photo is not the same as a comprehensive inspection, and a power-on photo is not a complete technical test. Read the current service description in your account and choose the narrowest service that resolves the uncertainty.",
          "Marking the concern helps. Save a copy of the QC image, circle the location and refer to the image number in your message. Keep your wording factual: describe what is visible and what you expected from the order. This creates a clearer record if the seller must be contacted or an after-sales request is opened.",
        ],
        points: ["Name the image and exact area.", "State the expected option or condition.", "Ask for one useful angle or measurement.", "Check the current service scope and price before confirming."],
      },
      {
        heading: "Decide before international parcel submission",
        body: [
          "Once you have enough evidence, choose deliberately: accept the item, request clarification, pursue the available seller or platform remedy, or exclude it from the parcel. The warehouse stage is usually the practical moment to solve a visible mismatch because the product is still in China. After international dispatch, return shipping and coordination can become slower and more expensive.",
          "Do not let consolidation hide an unresolved item. Superbuy states that it offers 90 days of free storage, giving buyers time to wait for other arrivals, but every order has an account deadline that should be checked. Set an earlier personal deadline for QC and any after-sales action so the last days are not spent making a rushed decision.",
          "Before submitting the parcel, do one final cross-check: every item has a resolved status, fragile surfaces have an appropriate packing request, unwanted packaging is handled intentionally and restricted items are compatible with the chosen route. Save the warehouse images and messages until delivery. They document what was visible before packing and can help you explain a later parcel issue without relying on memory.",
        ],
        points: ["Resolve each item before consolidation.", "Track the warehouse deadline in the account.", "Write clear packing instructions for fragile areas.", "Retain QC evidence through delivery and after-sales."],
      },
    ]}
  />;
}
