import type { Metadata } from "next";
import { GuidePage } from "../guide-page";

export const metadata: Metadata = {
  title: "How to Use a Superbuy Spreadsheet: Step-by-Step Guide (2026)",
  description: "Learn how to use a Superbuy spreadsheet, verify live product links, place an agent order, review warehouse QC photos and plan a parcel.",
  keywords: ["how to use superbuy spreadsheet", "superbuy spreadsheet guide", "superbuy product links", "superbuy agent order"],
  alternates: { canonical: "/how-to-use/" },
};

export default function HowToUsePage() {
  return <GuidePage
    eyebrow="START HERE · WORKFLOW"
    title="How to use a Superbuy spreadsheet without skipping the checks"
    pagePath="/how-to-use/"
    intro="A Superbuy spreadsheet can shorten product research, but it does not replace the live listing, warehouse inspection or parcel quote. This step-by-step workflow shows where the index helps—and where you must verify the facts yourself."
    readMinutes={12}
    takeaways={[
      "Use the spreadsheet to discover products, then open the current destination and verify the exact variant before ordering.",
      "Keep the source URL, selection screenshot and order notes together; they become your reference when warehouse photos arrive.",
      "Treat warehouse arrival as a fresh decision point. Resolve visible discrepancies before international parcel submission.",
      "Estimate total cost in layers. A product card cannot predict the final carrier-confirmed international freight.",
    ]}
    sources={[
      { label: "Superbuy official User Guidance" },
      { label: "Superbuy official Service & Fees" },
      { label: "Superbuy official Shipping Calculator" },
    ]}
    next={{ label: "How to read QC photos", href: "/qc-photos/" }}
    sections={[
      {
        heading: "What a Superbuy spreadsheet is—and is not",
        body: [
          "A Superbuy spreadsheet is best understood as a curated discovery layer. It groups product finds by category and gives you a faster starting point than searching several Chinese marketplaces from zero. The useful part is organization: a broad search such as shoes, hoodies or accessories becomes a smaller set of links that can be reviewed one by one. It is not an inventory system connected to every seller, and it cannot make an old listing current again.",
          "That distinction matters because marketplace listings change. A seller may remove a color, change a size chart, replace photos, revise the price or close the listing. The spreadsheet entry may still look familiar while the destination no longer matches it. Always judge the live destination, not the thumbnail or title that brought you there. If the product page has materially changed, search for a current alternative instead of assuming the old description still applies.",
          "Inclusion in an index is also not a certification. It does not prove authenticity, seller reliability, material quality or customs acceptance. A useful index should help you find and compare; your order record, the current seller page and the warehouse evidence remain the sources for the actual purchase decision.",
        ],
        points: ["Open the current product destination.", "Compare the current images and options with the index entry.", "Note the date you checked the listing.", "Reject any link that now points to a different product."],
      },
      {
        heading: "Verify the live listing before you copy the link",
        body: [
          "Begin with the option you intend to buy. Confirm color, size, model, quantity, included parts and any seller note that changes what is supplied. If a size chart is shown, save it with the listing date. Generic product titles are common in indexes, so a title alone is weak evidence; images, option labels and the original marketplace URL are more useful when you later compare the warehouse arrival.",
          "Look for practical warning signs. A price that changes sharply after selecting a variant may mean the lowest displayed price belonged to another option. A photo may show several items while the listing price covers only one. Pre-sale items can have different dispatch expectations. Electronics, liquids, batteries and branded goods can also face route restrictions. Superbuy says some products are restricted for particular delivery methods, so check route eligibility before building an entire parcel around one difficult item.",
          "Create a compact order record before leaving the live page: source URL, selected option, quantity, current item price, domestic delivery shown by the seller and one screenshot of the chosen variant. This takes less than a minute and prevents the most common later problem—trying to remember what the seller page looked like after it has changed.",
        ],
        points: ["Save the source URL, not only the spreadsheet URL.", "Capture the selected color, size or model.", "Read seller notes and estimated domestic dispatch information.", "Check whether the item creates shipping restrictions."],
      },
      {
        heading: "Move from the source link to a Superbuy order",
        body: [
          "Superbuy’s official user guidance describes two normal purchase paths. For supported listings from platforms such as Taobao, Tmall and JD.com, paste the product link into Superbuy or search for the product name. When the page information is captured, choose the available options and submit the item. If the system cannot capture the listing, Superbuy may show a manual shopping-agent form instead.",
          "A manual form needs more care because the agent is relying on the information you provide. Use the original product URL, copy the exact option text, enter the correct quantity and place any essential instruction in the remarks. Avoid vague requests such as “the one in the photo.” If two variants look similar, describe the identifying label or attach the screenshot saved during verification. Superbuy’s guide says shopping agents can contact the seller and may ask for missing details through messages or email.",
          "At this stage, separate price components. The official guide says the buyer pays the item price and Chinese local delivery before the seller ships to the warehouse. Superbuy’s current fee page says ordinary purchasing from mainstream platforms such as Taobao, Tmall, JD.com and 1688 carries no purchasing service fee, while some second-hand, unlisted or special services use different charges. Check the current fee display for the actual source rather than applying one rule to every order.",
        ],
        points: ["Paste the original marketplace link into Superbuy.", "Complete every manual-order field precisely if capture fails.", "Keep item price and Chinese domestic shipping separate.", "Read the current order total before payment."],
      },
      {
        heading: "Use warehouse arrival as a second purchase decision",
        body: [
          "According to Superbuy’s official workflow, items are inspected and photographed after they arrive at the warehouse, then appear in the buyer’s warehouse account. Do not treat arrival as an automatic signal to ship. It is the moment to compare what was received with the evidence you saved before ordering: variant, visible size label, quantity, design, color family and included accessories.",
          "Warehouse photos answer visible questions. They can reveal an obviously wrong color, misaligned print, missing accessory, surface scratch or damaged box. They cannot prove comfort, fabric composition, internal electronics, long-term durability or authenticity. Lighting can shift color and a single angle can hide an important detail. If the answer matters, request a useful additional view or measurement rather than guessing from a standard photo.",
          "Be specific when reporting a problem. Identify the photo and the exact location: for example, ask for a close view of the size label, a measurement of the insole or confirmation that a detachable strap is present. Superbuy lists optional detailed photography and re-inspection among its value-added services, with current charges shown on its official fee page. Review the live price before requesting one because these service prices can change.",
        ],
        points: ["Compare the arrival with your saved variant screenshot.", "Check visible damage, symmetry and included parts.", "Request a targeted photo or measurement when evidence is missing.", "Resolve a discrepancy before parcel submission."],
      },
      {
        heading: "Build a parcel plan before choosing a route",
        body: [
          "Superbuy currently states that items receive 90 days of free warehouse storage. That window allows buyers to wait for other orders, inspect arrivals and consolidate several products. Consolidation may reduce repeated base charges and packaging, but it is not automatically the cheapest or safest choice. A larger parcel can cross a route’s weight or dimension threshold, concentrate more value in one shipment or make a restricted item affect everything packed with it.",
          "Before submitting delivery, group compatible items and decide what packaging should remain. A shoe box protects shape but adds volume; vacuum packing can reduce the volume of suitable soft goods but is inappropriate for items that should not be compressed. Superbuy’s user guide lists package removal, reinforcement and insurance as additional options, while its fee page provides a larger menu of optional services. Select them for a clear reason rather than ticking every box.",
          "Check available delivery methods only after the complete parcel contents and destination are known. The cheapest route is not necessarily the best if tracking, compensation, restrictions or expected processing do not fit the order. Current route availability is account- and parcel-specific, so no spreadsheet article can responsibly promise that one named line will always be available.",
        ],
        points: ["Compare one consolidated parcel with sensible smaller groups.", "Keep fragile or restricted items separate when useful.", "Choose packaging based on the contents.", "Review route restrictions for every item in the parcel."],
      },
      {
        heading: "Calculate the real budget and keep the record",
        body: [
          "The delivered budget has several layers: item price, Chinese domestic delivery, any source-dependent purchasing charge, optional warehouse services, international freight and possible destination taxes or handling. A spreadsheet price usually represents only the first layer. Superbuy’s official guidance says the international shipping deposit is calculated from estimated weight, the selected shipping method and destination. The final amount is based on package size and weight verified by the shipping company, with the difference reconciled after shipment.",
          "Use Superbuy’s current shipping calculator as a planning tool, not a guarantee. Test a plausible parcel weight and destination, then keep a buffer for packaging and chargeable volume. Re-check after the warehouse has real item data and again when the parcel is assembled. Customs decisions, taxes and third-party logistics delays sit outside the spreadsheet and outside the warehouse’s direct control; Superbuy itself warns about delays, confiscation, tax, damage and loss risks during international transport.",
          "After dispatch, retain the parcel number, declared contents, paid freight, route name and tracking record. Superbuy says tracking is available from the Parcels area and that parcel-related after-sales requests can be opened after delivery when needed. A good spreadsheet workflow therefore ends with a complete record, not with the first product click. That record is what lets you understand the real delivered cost and make the next order more accurately.",
        ],
        points: ["Budget every cost layer separately.", "Treat the first freight figure as an estimate.", "Save the final carrier-adjusted parcel details.", "Track the parcel and keep evidence until the order is resolved."],
      },
    ]}
  />;
}
