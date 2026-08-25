import type { Metadata } from "next";
import { GuidePage } from "../guide-page";

export const metadata: Metadata = {
  title: "Superbuy Warehouse Storage & Parcel Consolidation Guide (2026)",
  description: "Use Superbuy's published 90-day free storage window to inspect items, resolve issues and build a deliberate parcel consolidation plan.",
  keywords: ["superbuy warehouse storage", "superbuy 90 day storage", "superbuy parcel consolidation", "superbuy warehouse guide"],
  alternates: { canonical: "/warehouse-storage/" },
};

export default function WarehousePage() {
  return <GuidePage
    eyebrow="WAREHOUSE · CONSOLIDATION"
    title="Use the warehouse window to make better parcel decisions"
    pagePath="/warehouse-storage/"
    intro="Superbuy currently publishes a 90-day free storage period for items. The real advantage is not simply waiting: it is using warehouse time to inspect arrivals, resolve problems and compare complete-parcel options."
    readMinutes={12}
    takeaways={[
      "Check the actual storage deadline shown for every item; do not rely only on a general policy page.",
      "Consolidation can reduce duplicated base charges, but a larger parcel can change dimensions, route eligibility and risk concentration.",
      "Complete QC and any seller-related remedy before international parcel submission.",
      "Create one clear parcel brief covering grouping, packaging, route, tracking and protection.",
    ]}
    sources={[
      { label: "Superbuy official User Guidance" },
      { label: "Superbuy official Service & Fees" },
      { label: "Superbuy official Parcel Forwarding Guide" },
    ]}
    next={{ label: "Review frequently asked questions", href: "/faq/" }}
    sections={[
      {
        heading: "What the 90-day warehouse window means",
        body: [
          "Superbuy’s official user guidance currently states that it provides 90 days of free storage for items after warehouse arrival. The guide explicitly connects that period with buying additional products and sending stored items together. This turns the warehouse into a planning stage between domestic purchasing and international parcel submission.",
          "Use the published 90 days as a current service fact, not a permanent promise or a reason to ignore the account. Superbuy’s fee page provides additional detail about storage after the free period and optional extension services, but terms and charges can change. The item-level deadline shown in your own warehouse account is the date that should control your action.",
          "Create an arrival list with the order number, warehouse date, displayed deadline, QC status and intended parcel group. If you are collecting several items, use the earliest deadline as the working boundary. Set a personal deadline well before it so there is time to resolve a defect, wait for a seller response or change the parcel plan without rushing.",
        ],
        points: ["Record each warehouse arrival date.", "Use the account’s item-specific deadline.", "Plan around the earliest deadline in a group.", "Set an earlier date for QC and after-sales decisions."],
      },
      {
        heading: "Use storage time for evidence, not procrastination",
        body: [
          "The first task after arrival is comparison. Match each product with the saved source link, selected variant and order note. Review the warehouse photos for the correct model, visible size label, quantity, included parts and obvious damage. If a key view or measurement is missing, request it while the item is still available for a China-side solution.",
          "The second task is to resolve exceptions. Separate items into four states: accepted, needs more evidence, after-sales in progress and excluded from the planned parcel. Do not allow an unresolved item to disappear into a large consolidation. A spreadsheet can help you find a replacement, but it should not encourage repeatedly buying alternatives before the original issue is closed.",
          "The third task is cost preparation. Once several arrivals have real warehouse weights and dimensions, your shipping estimate becomes more useful. Update the parcel worksheet with those facts rather than continuing to use seller estimates. This is the point at which the storage window starts producing financial value: you have evidence from the actual items instead of assumptions from thumbnails.",
        ],
        points: ["Match every item to its original order evidence.", "Assign a clear QC status.", "Keep unresolved items out of parcel submission.", "Replace seller estimates with warehouse data."],
      },
      {
        heading: "Consolidation saves selectively—not automatically",
        body: [
          "Superbuy recommends stocking items and consolidating them to save shipping fees. The logic is reasonable: several items can share one outer carton and may avoid paying separate starting charges on multiple parcels. Consolidation can also reduce repeated handling and packaging. But the saving depends on route rules, chargeable weight and the shapes of the items being combined.",
          "A larger parcel may cross a weight or dimension threshold, lose access to a route or require stronger packaging. One restricted product can affect route eligibility for otherwise ordinary items. Combining fragile goods with heavy goods can create a more difficult packing problem. Concentrating all high-value products in one parcel also changes the consequence of loss or damage.",
          "Compare at least two groupings: one complete consolidation and one sensible split. A sensible split is based on compatibility, not an arbitrary item count. Soft clothing may travel together efficiently; a large rigid box, battery item or fragile collectible may justify a separate plan. Use live route estimates for the actual destination rather than a universal rule such as “always ship ten kilograms.”",
        ],
        points: ["Compare total cost for one parcel and a logical split.", "Watch dimensions as well as scale weight.", "Separate incompatible or restricted contents.", "Consider how much value is concentrated in one shipment."],
      },
      {
        heading: "Resolve returns and visible problems before shipping",
        body: [
          "The warehouse is usually the most practical place to address a wrong option, incomplete order or visible defect. The seller is still in China and the item has not yet accumulated international freight. The exact remedy depends on the platform, seller, timing and Superbuy’s current after-sales rules, so do not promise that every return will be accepted or free.",
          "Document the issue objectively. Save the order selection, identify the relevant warehouse photo and state the mismatch in one sentence. If more evidence is needed, request a precise photo or measurement. Keep message dates and responses. This record helps the shopping agent communicate with the seller and prevents the request from becoming a vague debate about overall quality.",
          "Do not submit an item internationally while its status is unresolved merely to meet the parcel schedule. Once dispatched, a seller-side return can become impractical. If a storage deadline is approaching, contact Superbuy through the available account support channel and review current extension or disposal terms. This article deliberately avoids fixed return windows because they can differ by item and seller and should be verified in the live order.",
        ],
        points: ["Describe the exact mismatch.", "Attach the relevant order and QC evidence.", "Check the live order’s after-sales eligibility.", "Complete the decision before international submission."],
      },
      {
        heading: "Write a parcel brief that the warehouse can follow",
        body: [
          "A parcel brief converts scattered preferences into one coherent instruction set. List the destination, items in the group, fragile areas, original packaging to retain, packaging that may be removed, products that may be compressed and products that must stay rigid. If you want an optional service, connect it to an item and a reason instead of requesting “best packaging.”",
          "Superbuy’s official guidance lists package removal, reinforcement and insurance among additional services available during delivery submission. Its fee page describes a wider menu of packaging and inspection options. Those services vary in scope and price, and some change parcel weight or volume. Check the current description in the account before confirmation and avoid contradictory selections.",
          "Include route priorities in order: eligibility first, then the factors that matter to you—cost ceiling, tracking, transit range, compensation or another constraint. The warehouse and platform can show eligible choices, but they cannot decide your risk tolerance. A written priority order makes it easier to evaluate the final packed parcel if your first route is unavailable.",
        ],
        points: ["List items and packing requirements.", "State what may be removed or compressed.", "Identify fragile or high-risk contents.", "Rank route priorities and set a realistic cost ceiling."],
      },
      {
        heading: "Review the completed parcel and keep the timeline",
        body: [
          "After the parcel is assembled, compare its updated weight and dimensions with your estimate. Superbuy’s official guide says the international freight deposit uses estimated weight, route and destination, while the final shipping fee is based on package size and weight verified by the shipping company. The packed parcel—not the sum of product-card estimates—is the relevant object.",
          "Check the contents list, destination details, declarations, selected route and optional services before payment. Review whether the parcel remains eligible and whether the chosen protection matches the goods. Keep a buffer for carrier adjustment and possible destination charges. If the completed parcel is materially different from the plan, pause and compare alternatives rather than accepting it automatically.",
          "Save a simple timeline: seller order, warehouse arrival, QC decision, parcel submission, dispatch, carrier settlement and delivery. Superbuy says tracking is available in the Parcels area and parcel after-sales can be requested after delivery when relevant. This timeline makes future consolidation decisions more accurate and supports useful customer-review content later because it records facts instead of impressions.",
        ],
        points: ["Compare packed weight and dimensions with the estimate.", "Recheck route and destination details.", "Save final fees and tracking events.", "Use real parcel history to improve the next plan."],
      },
    ]}
  />;
}
