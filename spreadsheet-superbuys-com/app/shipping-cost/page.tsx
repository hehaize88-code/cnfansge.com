import type { Metadata } from "next";
import { GuidePage } from "../guide-page";

export const metadata: Metadata = {
  title: "Superbuy Shipping Cost Guide: Estimate Total Cost (2026)",
  description: "Understand Superbuy shipping cost, estimated deposits, final carrier settlement, parcel weight, packaging and route selection.",
  keywords: ["superbuy shipping cost", "superbuy shipping calculator", "superbuy international shipping", "superbuy volumetric weight"],
  alternates: { canonical: "/shipping-cost/" },
};

export default function ShippingPage() {
  return <GuidePage
    eyebrow="SHIPPING · COST PLANNING"
    title="Plan Superbuy shipping without inventing a final price"
    pagePath="/shipping-cost/"
    intro="Superbuy shipping cost is determined by the completed parcel, destination and available route—not by a product-card number. Build the estimate in layers, then reconcile it with the carrier-confirmed parcel."
    readMinutes={12}
    takeaways={[
      "Separate product price, Chinese domestic delivery, optional services, international freight and destination charges.",
      "The international amount collected at parcel submission is based on estimated data; the carrier-confirmed size and weight determine the final settlement.",
      "Packaging can change both physical and chargeable volume, so the lightest-looking parcel is not always the safest or cheapest overall.",
      "Compare eligible routes by restrictions, tracking and compensation—not price alone.",
    ]}
    sources={[
      { label: "Superbuy official User Guidance" },
      { label: "Superbuy official Shipping Calculator" },
      { label: "Superbuy official Service & Fees" },
    ]}
    next={{ label: "Use warehouse storage wisely", href: "/warehouse-storage/" }}
    sections={[
      {
        heading: "Start with the full landed-cost chain",
        body: [
          "A spreadsheet find usually shows a product price, but that is only the first layer of the delivered budget. Superbuy’s official fee explanation separates the buying stage from international shipping. At the buying stage, the total can include the seller’s item price, Chinese domestic delivery and any source-dependent purchasing or optional service charge. After warehouse arrival, the parcel stage adds international freight and any selected warehouse or packaging services.",
          "Destination costs sit outside the product card as well. Depending on the route and country, the recipient may face tax, duty, customs clearance or carrier handling. Some routes may display tax-related treatment in their current terms, but those terms must be read at the time of parcel submission. Do not copy a claim such as “tax free” from an old discussion and apply it to a different country or parcel.",
          "The practical formula is therefore not one magic number. Record product price, domestic shipping, purchasing/service charges, optional warehouse services, international parcel freight and possible destination charges in separate rows. When a cost changes, you will know which assumption failed instead of concluding that the whole estimate was meaningless.",
        ],
        points: ["Item price", "Chinese domestic delivery", "Purchasing and optional service fees", "International freight and destination charges"],
      },
      {
        heading: "Understand the shipping deposit and final settlement",
        body: [
          "Superbuy’s current user guidance says that the international shipping fee deposit is calculated using the product’s estimated weight, the chosen shipment method and the destination. This amount is collected when the parcel is submitted so the warehouse can prepare and dispatch it. It is a working charge based on the information available before the carrier completes its own verification.",
          "The same official guide says the final shipping fee is calculated from package size and weight verified by the shipping company. Any difference between the deposit and final fee is adjusted after shipment. Superbuy’s newer fee explanation similarly says the logistics provider’s official bill determines the final cost and describes reconciliation for overpayment or underpayment. That is why a pre-parcel quote should never be presented as guaranteed freight.",
          "When comparing an estimate with the final charge, compare the same data: destination, route, chargeable weight, dimensions and selected services. A difference can result from packaging, a route’s billing unit or carrier measurements—not necessarily an unexplained fee. Save both the initial parcel estimate and final settlement so the next estimate uses real history rather than a generic online example.",
        ],
        points: ["Save the estimated weight and dimensions.", "Record the chosen route and destination.", "Compare the carrier-confirmed parcel details.", "Keep the reconciliation in the parcel record."],
      },
      {
        heading: "Physical weight is only part of the parcel",
        body: [
          "International routes may charge by actual scale weight, parcel dimensions or another route-specific chargeable-weight rule. Even when an item itself is light, a large box can occupy meaningful transport space. The exact divisor and rounding unit depend on the route, so use the live calculator and route rules rather than one universal volumetric formula copied from another carrier.",
          "Think in shapes as well as kilograms. Shoes with retail boxes, structured bags, helmets, figurine boxes and protective packaging can create much more volume than folded clothing. Combining them may use empty space efficiently, or it may require a larger outer carton. An estimated product weight before packing cannot predict that final carton.",
          "A useful planning comparison has three scenarios: the likely actual weight, a slightly higher packed weight and a larger-dimensional case. If the route price changes sharply at a threshold, consider whether a different grouping reduces the chargeable parcel without removing necessary protection. This is scenario planning, not a promise that the warehouse will achieve a specific dimension.",
        ],
        points: ["Check actual and chargeable-weight rules.", "Note route rounding increments.", "Model packaging volume for rigid products.", "Leave a buffer before a price threshold."],
      },
      {
        heading: "Choose packaging by risk and cost together",
        body: [
          "Removing unnecessary packaging can lower weight or volume, but “remove every box” is not a sound rule. Retail packaging can protect a structured product, keep small parts together or preserve an item’s condition. Reinforcement adds material and may increase the parcel charge, yet it can be reasonable for fragile corners or high-value contents. The right choice depends on what failure you are trying to prevent.",
          "Superbuy’s official pages list options such as package removal, reinforcement, insurance and other value-added packing services. Its fee page currently describes services including simple packaging, vacuum packaging for suitable soft goods, folding shoe boxes and several protective materials. Prices and scope can change, so this guide does not freeze those numbers. Check the current service description before selecting one.",
          "Write non-contradictory instructions. Do not request maximum package removal and full retail-box protection for the same item without explaining the priority. State which item can be compressed, which corner needs protection, which box may be folded and which original packaging must remain. Clear packing instructions make the later parcel result easier to evaluate.",
        ],
        points: ["Protect fragile and structured items.", "Compress only suitable soft goods.", "Remove bulky packaging for a defined reason.", "Check how each service affects weight, volume and protection."],
      },
      {
        heading: "Compare routes beyond the cheapest headline",
        body: [
          "The lowest displayed rate is useful only if the complete parcel is eligible. Superbuy warns that some items are restricted for certain delivery methods and presents recommended available methods during parcel submission. Batteries, liquids, magnets, food, branded goods and other categories can affect eligibility. A single restricted item may remove a preferred route for the entire consolidated parcel.",
          "Compare tracking, expected transit range, compensation or insurance terms, handoff carriers and destination coverage. Read what is included and what requires a separate service. A longer stated transit window may be acceptable for a low-urgency parcel; a route with clearer tracking may be worth more for a time-sensitive or higher-value shipment. No article can select this tradeoff without knowing the parcel and destination.",
          "Superbuy’s public guidance explicitly warns that third-party logistics and customs can involve delays, confiscation, taxes, package damage and missing parcels. Those warnings should be part of the budget because risk has a cost. Avoid planning around a fixed arrival date, and do not order an item you cannot afford to have delayed while a carrier or customs issue is resolved.",
        ],
        points: ["Confirm eligibility for every item.", "Compare tracking and route handoffs.", "Read compensation and insurance scope.", "Use transit times as ranges, not delivery promises."],
      },
      {
        heading: "A repeatable method for estimating before checkout",
        body: [
          "First, make a list of intended items with seller price, domestic shipping, estimated weight and rough dimensions where available. Second, add optional service assumptions separately. Third, enter a reasonable combined parcel into Superbuy’s current shipping calculator for the correct destination. Record at least two eligible routes instead of anchoring the budget to only the cheapest result.",
          "Next, add a buffer for packaging, chargeable-volume uncertainty and destination costs. Recalculate when warehouse weights become available, then reassess after consolidation and packing. If the final parcel exceeds your limit, compare removing a nonessential item, changing packaging where safe, splitting incompatible goods or selecting another eligible route. Do not solve a cost problem by making a fragile parcel unreasonably vulnerable.",
          "Finally, keep the estimated and final figures. Divide the final parcel cost by item only if that allocation is useful to you; do not pretend each item caused an equal share when one bulky product drove the carton size. Over several orders, your own parcel history becomes far more useful than a screenshot of someone else’s shipment to another country. This produces practical cost content without pretending that one shipping price applies to every buyer.",
        ],
        points: ["Estimate two or more eligible routes.", "Add packaging and destination buffers.", "Recalculate with warehouse and packed-parcel data.", "Use your final parcel history to improve future estimates."],
      },
    ]}
  />;
}
