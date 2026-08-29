import type { Locale, PageKey } from "./site-data";
import { deArticleSections } from "./article-sections-de";
import { esArticleSections } from "./article-sections-es";
import { frArticleSections } from "./article-sections-fr";
import { itArticleSections } from "./article-sections-it";

export type ArticleSource = { label: string; url: string };
export type Article = {
  title: string;
  tag: string;
  lede: string;
  read: string;
  reviewed: string;
  sections: Array<[string, string[]]>;
  sources: ArticleSource[];
};
type ArticleKey = Extract<PageKey, "qcArticle" | "shippingArticle" | "storageArticle">;

const sources: Record<ArticleKey, ArticleSource[]> = {
  qcArticle: [
    { label: "Kakobuy Beginner's Guide", url: "https://www.kakobuy.com/index/information?information_id=12" },
    { label: "Kakobuy homepage — Quality Check", url: "https://www.kakobuy.com/" },
    { label: "Kakobuy QC Image Notice, 10 May 2026", url: "https://www.kakobuy.com/tipdetail?id=49" },
    { label: "Kakobuy 5-Day Return/Exchange Guarantee", url: "https://www.kakobuy.com/service/help/question?id=51" },
  ],
  shippingArticle: [
    { label: "Kakobuy Shipping Fee Estimation", url: "https://www.kakobuy.com/tools/estimate" },
    { label: "Kakobuy Services & Fees", url: "https://www.kakobuy.com/service/help/question?id=63" },
    { label: "Kakobuy Beginner's Guide", url: "https://www.kakobuy.com/index/information?information_id=12" },
    { label: "Kakobuy EU Duty-Free Shipping Lines Update, 30 Jun 2026", url: "https://www.kakobuy.com/tipdetail?id=52" },
  ],
  storageArticle: [
    { label: "Kakobuy service introduction — 100-day storage", url: "https://www.kakobuy.com/index/information?information_id=3" },
    { label: "Kakobuy Beginner's Guide", url: "https://www.kakobuy.com/index/information?information_id=12" },
    { label: "Kakobuy 5-Day Return/Exchange Guarantee", url: "https://www.kakobuy.com/service/help/question?id=51" },
    { label: "Kakobuy order cancellation guidance", url: "https://kakobuy.com/service/help/question?cid=35&id=87" },
  ],
};

export const articleData: Record<Locale, Record<ArticleKey, Article>> = {
  en: {
    qcArticle: {
      title: "Kakobuy Spreadsheet Guide 2026: From Product Link to QC Decision",
      tag: "Spreadsheet & QC",
      read: "14 min evidence-led guide",
      reviewed: "Official sources reviewed 29 Aug 2026",
      lede: "A useful Kakobuy spreadsheet should do more than collect fashionable links. It should preserve the exact product route, show what still needs checking, and help you make a defensible decision when warehouse photos arrive.",
      sources: sources.qcArticle,
      sections: [
        ["What a Kakobuy spreadsheet should actually do", [
          "People often search for a “Kakobuy spreadsheet” expecting a giant list of products. Size alone is not quality. A useful sheet connects a clear product description to a live destination, records the visible price and variant context, and makes it easy to return to the original evidence later. It should never imply that a listing is safe, authentic or high quality simply because somebody added it to a table. The sheet is a discovery and record-keeping tool; the purchase decision still belongs to the buyer.",
          "Our inclusion rule is therefore simple: the card image, product name and destination must describe the same item when checked. A route is removed or rechecked when the destination changes, disappears or shows a different product. Prices are snapshots rather than promises because sellers can edit listings and currency conversions move. This narrower method may produce fewer finds than an unfiltered social list, but it gives each result a traceable job in the buying process.",
        ]],
        ["The official Kakobuy flow, separated into decisions", [
          "Kakobuy’s public beginner material describes a familiar agent workflow: choose a product on a Chinese marketplace, copy its link, paste it into Kakobuy, select the required options, pay for the product, wait for warehouse arrival and quality inspection, then submit an international parcel. That sequence matters because the payment for an item and the payment for international transport happen at different stages. Treating everything as one checkout makes it harder to understand which cost or delay belongs to which decision.",
          "A disciplined buyer pauses at four gates. Gate one is the source listing: is the item, seller and option understandable? Gate two is the order record: is the selected size, color and quantity correct? Gate three is the warehouse evidence: does the photographed item visibly match that record? Gate four is the parcel: are the packaging choice, route, declaration and final estimate acceptable? A spreadsheet is most valuable when it helps you carry accurate information from one gate to the next.",
        ]],
        ["Build the order record before paying", [
          "Save the exact source URL, listing title, selected variant, quantity, seller-displayed price and any size chart or option image that affected your choice. Add a date because live listings change. If a color is identified only by a number or a small thumbnail, save that detail too. When the warehouse photos arrive, memory is a poor reference; a compact order record lets you compare the received item with what was actually selected rather than with a similar post seen days earlier.",
          "Pay particular attention to translated options. Machine translation can turn material names, bundles and colorways into ambiguous English. Do not guess when two variants look similar. Open the source page, compare option images and use an order note only when it resolves a real ambiguity. Long, contradictory notes can create new errors. If the seller does not provide a measurement you need, treat the missing information as uncertainty instead of inventing a precise fit prediction.",
        ]],
        ["Read price as a stack, not a single number", [
          "The product price is only the first layer. A typical agent purchase can also involve domestic delivery from the seller to the warehouse, a payment-channel charge, optional value-added services and later international shipping. Kakobuy’s Services & Fees page currently says the basic shopping-agent service does not add a handling charge beyond item cost and shipping, while optional services can cost extra. Its payment help currently lists a PayPal handling charge of 3.5% plus US$0.30. These are live platform terms, not permanent constants.",
          "That distinction is important for SEO content because repeating one attractive product price without the surrounding cost stack misleads the reader. Our USD labels are approximate conversions from visible CNY prices and exclude services and transport. Before paying, check the live Kakobuy checkout and the selected payment method. Before submitting a parcel, use the live estimator again. If the displayed platform term and an old guide disagree, the current Kakobuy page should win.",
        ]],
        ["What Kakobuy says happens at warehouse arrival", [
          "Kakobuy’s public homepage says that after products reach its warehouse, a quality check covers visible issues such as defects, size and color. That is useful, but the wording does not mean that every material, measurement or hidden construction detail is verified. Warehouse photography is evidence of what the camera can show. It cannot prove long-term durability, comfort, composition or authenticity, and it cannot reveal a defect hidden inside a sole, lining or electronic component.",
          "The platform’s 10 May 2026 notice about recent QC image display issues is a good reminder to separate the physical item from the interface that presents it. The notice said the display problem affecting some QC images did not affect warehouse storage or normal parcel submission. In practice, if an image is missing or fails to load, do not treat the absence as approval or rejection. Recheck the page, contact support when necessary and wait for decision-critical evidence.",
        ]],
        ["Use a three-layer QC review", [
          "Layer one is identity. Confirm quantity, ordered color, size tag, variant, visible accessories and the broad shape of the item. If the wrong option appears, stop there and document it. Layer two is construction. For shoes, compare toe profile, heel height, panel alignment, sole shape, stitching and heavy glue. For clothing, inspect front and back views, collar, sleeves, print or embroidery position, seams, stains and holes. For bags and accessories, check dimensions, hardware color, closures, corners and edge finish.",
          "Layer three is decision-specific evidence. Ask what could change your answer from accept to return. If fit depends on chest width, a ruler photo matters more than another beauty shot. If a bag’s clasp is the concern, request that angle rather than a generic close-up. Perspective can distort proportions, so compare several views before declaring asymmetry. Describe any problem by location and observable feature—“right heel, outer edge, separated seam”—instead of using vague labels such as “bad quality.”",
        ]],
        ["Do not confuse storage time with return time", [
          "Kakobuy’s public information currently advertises 100 days of free warehouse storage. That gives buyers room to wait for other items and plan a consolidated parcel, but it is not a 100-day seller return window. Return and exchange eligibility follows the specific seller, order status, item condition and the platform process. Kakobuy also publishes a “5-Day Return/Exchange Guarantee,” described as a seller-provided after-sales service on supported third-party marketplace items. The label should not be presented as universal coverage for every product.",
          "Inspect promptly when the order reaches the warehouse. If a mismatch is visible, preserve the relevant image, state the selected option and explain the difference while the order is still easy to trace. Avoid irreversible alterations until you have accepted the item. Seller refusal, domestic return shipping and time for a replacement to travel back to the warehouse can all affect the outcome. Kakobuy’s help text notes that an exchanged product can take roughly 7–20 days to reach storage again depending on the seller.",
        ]],
        ["A practical decision rule for every spreadsheet find", [
          "Accept when the photographed item matches the recorded variant, no decision-critical visible defect appears and the remaining uncertainty is acceptable for the price. Request evidence when a missing angle or measurement could genuinely change the decision. Raise an after-sales request when there is a clear, documentable mismatch or visible defect and the order remains eligible. Rejecting an item because a photo angle is unflattering wastes time; accepting an item without checking identity wastes the entire purpose of QC.",
          "After acceptance, update the spreadsheet record with arrival date, estimated weight, packaging needs and your parcel deadline. Recheck the destination link before sharing it with anyone else. This turns the sheet from a static list into a lightweight audit trail. It also supports better Google content: each recommendation can be explained with a method, caveats and current source checks rather than empty claims such as “best seller,” “1:1 quality” or “guaranteed safe.”",
        ]],
      ],
    },
    shippingArticle: {
      title: "Kakobuy Shipping Guide 2026: Cost, Weight and Parcel Planning",
      tag: "Shipping",
      read: "13 min evidence-led guide",
      reviewed: "Official sources reviewed 29 Aug 2026",
      lede: "Kakobuy shipping cost is not a fixed price attached to a product. It is a parcel decision shaped by destination, packed weight, dimensions, item restrictions, current routes and optional services.",
      sources: sources.shippingArticle,
      sections: [
        ["Why the estimator is a planning tool, not a final quote", [
          "Kakobuy provides a Shipping Fee Estimation page, which is the correct place to compare currently available routes before a parcel exists. An estimate is still based on inputs and route rules rather than the final packed box. Seller packaging, warehouse repacking, item category and the carrier’s billing method can change the result. Use the estimator to compare scenarios and build a budget range; do not copy one number into an article and present it as the permanent shipping price for a country.",
          "The most useful comparison starts with destination, realistic packed weight and approximate dimensions. Then note route availability, restrictions, tracking, compensation terms and the currency shown. Repeat the check immediately before parcel submission because line names, discounts and operational notices can change. Kakobuy’s own update history—including route and tracking notices—shows why evergreen articles should describe the decision method while sending readers back to live information for the final choice.",
        ]],
        ["Understand actual and volumetric weight", [
          "Actual weight is the number on the scale after packing. Volumetric weight converts the space occupied by a parcel into a billable figure, commonly using length multiplied by width multiplied by height and divided by a route-specific divisor. Some lines bill the greater of actual and volumetric weight; others use different thresholds, rounding steps or category rules. The exact divisor must come from the current route details, not from an old social-media screenshot.",
          "Dense products such as folded clothing often track closer to actual weight. Bulky shoes, rigid gift boxes, padded coats and protective void fill can use much more space than their mass suggests. That is why two parcels with the same scale weight can produce different estimates. Record both weight and dimensions when comparing options. If the interface shows only an early estimate, leave a buffer for the warehouse’s packed measurement and the carrier’s billing increments.",
        ]],
        ["Map the full cost stack before shipping", [
          "The international charge sits on top of earlier costs: product price, possible domestic seller delivery, payment-channel charges and any optional warehouse service. Kakobuy’s Services & Fees help page currently says the basic shopping-agent service has no handling charge apart from item cost and shipping, while optional value-added services can be selected. The same official section says a parcel customs-declaration charge is generally RMB 8, depending on shipping method. Those statements should be verified on the live page when you submit.",
          "Avoid adding unrelated numbers into a single “fee percentage.” A payment charge is not the same as an exchange-rate spread; domestic delivery is not international freight; optional reinforcement is not a platform handling charge; customs duties collected at destination are not necessarily included in the shipping estimate. A transparent budget separates each layer and marks unknown values. This makes it easier to compare routes and prevents an attractive headline price from hiding the real landed cost.",
        ]],
        ["Packaging is a cost and protection decision", [
          "Removing a shoe box can reduce dimensions, but it also removes structure and may reduce resale or gift value. Vacuum packing can compress soft garments, but it is inappropriate for items that crease badly or rely on shape. Reinforcement adds mass and sometimes volume, yet can be sensible for fragile contents or a long multi-handoff journey. There is no universal “remove all packaging” rule; the right choice depends on the item and the consequence of damage.",
          "Sort packaging into three categories. Essential packaging protects shape, glass, hardware or moisture-sensitive material. Useful packaging groups small parts or identifies the variant. Decorative packaging adds presentation but little transport protection. Remove the third category first when volume is the problem. If you request a service, review its live price and specify the goal clearly. A shorter instruction such as “remove retail shoe boxes; keep internal shoe supports” is more actionable than “make it cheap but safe.”",
        ]],
        ["Consolidate deliberately during the storage window", [
          "Kakobuy’s official information advertises 100 days of free warehouse storage and explicitly connects storage with buying more items and shipping them together. Consolidation can reduce repeated outer packaging and avoid several small international parcels. It also gives you time to wait for compatible items. But bigger is not automatically cheaper: one oversized box can trigger volumetric billing, exceed a line limit or combine restricted and ordinary products in a way that reduces route choice.",
          "Group products by destination, urgency, fragility and route compatibility. A slow, low-value clothing order does not always belong with an urgent or fragile item. Compare at least two parcel scenarios when possible: one consolidated box and a logical split. Include packaging preferences in both. The goal is not the smallest number of parcels; it is the lowest acceptable total cost for the protection, speed and risk level you actually need.",
        ]],
        ["Line eligibility changes with product and destination", [
          "Batteries, liquids, magnets, branded goods, food-like products and other sensitive categories may reduce the lines shown or require special handling. Availability also varies by destination and current carrier operations. Never promise that a route will accept a specific item based only on a previous shipment. Use the current estimate page and the parcel interface after the warehouse has classified the products. When classification looks wrong, ask support before paying rather than assuming a route will be added later.",
          "Time-sensitive platform notices should be treated as dated evidence. Kakobuy published an EU Duty-Free Shipping Lines Update on 30 June 2026, for example. That confirms the existence of a current operational change; it does not justify an evergreen claim that every future EU parcel will be duty-free. In SEO writing, give the notice date, explain that route terms can change, and avoid turning a temporary promotion or update into a permanent platform feature.",
        ]],
        ["Customs, declaration and destination taxes", [
          "A shipping line can assist with transport and customs handling, but the buyer remains responsible for understanding destination rules and providing truthful information. Declared value, product description, quantity and local thresholds can affect assessment. Tax-free or duty-paid route labels must be read according to their current terms. No independent guide can guarantee that a parcel will avoid inspection, charges or delay, and undervaluation advice should not be presented as a shipping trick.",
          "Check the customs authority for the destination when value or product restrictions matter. Keep purchase and payment records, use accurate recipient details and review the declaration before submission. If Kakobuy shows an optional declaration service or line-specific instruction, read what is included. The official Services & Fees snippet currently says the declaration cost is generally RMB 8 depending on shipping method; that is a platform service detail, not the customs duty that a destination authority may assess.",
        ]],
        ["The final parcel checklist", [
          "Before paying, verify recipient name, address, telephone number and postal code; item list and quantities; restricted-item classification; requested packaging; packed or estimated dimensions; billable-weight rule; route tracking and compensation terms; declaration; and the total shown. Save the parcel number and a screenshot of the selected route details. This record is more useful than a generic delivery promise if tracking later pauses or a support conversation is needed.",
          "Choose the route that best fits your tolerance for cost, delay and loss—not simply the route with the shortest displayed estimate. Delivery windows are estimates because customs, flight capacity, seasonal volume and local handoff remain outside a shopping agent’s complete control. A good Kakobuy shipping guide teaches readers how to compare live options. It does not claim a universal cheapest line, a guaranteed number of days or one divisor that applies to every destination.",
          "After payment, follow tracking by event rather than refreshing for an imagined daily movement. Export departure, flight allocation, customs processing and local-carrier handoff can create quiet periods. Compare the latest event with the route's stated tracking pattern and contact support with the parcel number when a pause materially exceeds the current guidance. Do not use another buyer's timeline as a deadline for your parcel: identical route names can still leave on different dates, encounter different customs workloads and enter different local delivery networks.",
        ]],
      ],
    },
    storageArticle: {
      title: "Kakobuy Warehouse Guide 2026: 100-Day Storage, Returns and Timing",
      tag: "Warehouse & Returns",
      read: "12 min evidence-led guide",
      reviewed: "Official sources reviewed 29 Aug 2026",
      lede: "Kakobuy’s advertised 100-day free storage window is useful planning time, but storage, seller returns, exchanges and international shipping operate on separate clocks.",
      sources: sources.storageArticle,
      sections: [
        ["What the 100-day storage statement means", [
          "Kakobuy’s public service introduction and beginner material currently advertise 100 days of free storage at its warehouse. The same material encourages buyers to purchase more items and ship them together to save international shipping cost. That is a concrete platform statement checked on 29 August 2026. It should still be confirmed in the user account and current help pages because warehouse policies can be updated after an article is published.",
          "Storage begins after an item is accepted into the warehouse, not when you first discover it or pay the seller. Different items can therefore have different arrival dates and remaining time. Create a simple tracker with order number, product, warehouse date, QC status, return decision, estimated weight and personal parcel deadline. Set your own deadline earlier than the platform limit so a forgotten item or support delay does not force a rushed decision.",
        ]],
        ["Separate the clocks before making a decision", [
          "There are at least four clocks. The seller-dispatch clock runs between purchase and delivery to Kakobuy. The after-sales clock controls cancellation, return or exchange eligibility. The warehouse-storage clock controls how long an accepted item can remain. The international-transit clock begins only after a parcel is submitted and handed into the selected logistics route. These clocks can overlap, but one does not automatically extend another.",
          "The most common mistake is assuming that 100 days of storage creates 100 days to return an item. It does not. The storage allowance is a warehouse service, while a return depends on seller participation, order status, item condition and Kakobuy’s procedure. Inspect early even when you plan to store for weeks. The longer storage period is best used for consolidation and route planning after the item has passed your review.",
        ]],
        ["Cancellation depends on order status", [
          "Kakobuy’s published cancellation guidance distinguishes status. Its help snippet says that when an order shows “paid,” the buyer can contact customer service to cancel. When an order is “Processing,” the purchaser may already have completed the purchase even if the merchant has not dispatched it, so cancellation becomes a different operational request. Once a seller has shipped or an item has arrived, the process is no longer equivalent to cancelling an untouched payment.",
          "Act quickly and use precise information: order number, requested action and reason. Do not place a duplicate order until the first cancellation is confirmed. If a seller has already accepted or shipped the order, domestic return cost or refusal may apply. This is why a guide should describe statuses rather than promise “free cancellation.” The live order record and customer-service response determine what is possible for that exact transaction.",
        ]],
        ["Inspect immediately at warehouse arrival", [
          "Kakobuy’s public homepage says warehouse quality checking covers visible issues including defects, size and color after the product arrives. Use that moment to confirm identity first: quantity, ordered option, color, size label and visible accessories. Then inspect shape, construction and damage. Save any seller measurement or option image that matters. A fast comparison is more reliable than trying to reconstruct the order after several other products arrive.",
          "QC photos reduce visible uncertainty; they do not certify authenticity, material composition, comfort, electrical function or long-term durability. If a critical view or measurement is missing, request only what could change the decision. If the interface fails to show an image, remember that Kakobuy’s 10 May 2026 notice separated a QC image display issue from warehouse storage and parcel submission. Confirm the evidence instead of assuming that a display problem means the physical item is lost.",
        ]],
        ["Understand the 5-Day Return/Exchange label", [
          "Kakobuy has an official help page titled “What is 5-Day Return/Exchange Guarantee?” The page describes it as a special after-sales service offered by sellers on supported third-party marketplace products. That wording matters: it is seller-linked coverage, not proof that every listing can be returned for any reason. Check whether the relevant item carries the service and read the current conditions before treating the label as part of the purchase decision.",
          "An exchange adds a second domestic journey. Kakobuy’s help text says the exchanged product is returned to the seller and shipped again, and that storage can take roughly 7–20 days depending on the seller. That interval is not a guaranteed completion time. Stock availability, seller response, domestic transport and another warehouse check can all affect it. If timing matters more than keeping the item, compare exchange, return-and-reorder and acceptance as separate choices.",
        ]],
        ["Keep the item eligible and the request factual", [
          "Avoid irreversible value-added work, tag removal or disposal of important packaging before the acceptance decision. Return eligibility can depend on condition and seller rules. When reporting a problem, identify the ordered variant, the photographed variant, the exact image and the observable difference. “Size tag says 42; order record says 44” is actionable. “Looks fake” is not a precise warehouse defect report and asks the support agent to infer facts that a photograph may not establish.",
          "Expect possible domestic shipping, seller refusal or non-refundable service cost. If the issue is a visible seller error, document it; if it is buyer preference or a sizing decision made against the listing, the outcome may differ. Never claim that a spreadsheet link guarantees a free return. The best a curated link can do is preserve the original route and make the evidence easier to compare while the platform process remains open.",
        ]],
        ["Use storage to build a better parcel", [
          "Once an item is accepted, storage becomes planning space. Wait for compatible products, compare the combined estimate, decide which retail packaging is necessary and check route eligibility. Kakobuy’s own beginner material connects its 100-day storage service with combining items. The potential saving comes from avoiding repeated outer boxes and fixed parcel components, not from a guarantee that every larger parcel is cheaper.",
          "Run at least two scenarios if the shipment is bulky or mixed: consolidated and logically split. Separate fragile goods from items that can be compressed; separate urgent goods from products that can wait; separate route-sensitive products if they block ordinary lines. Track the oldest warehouse date and leave time for repacking or support. A personal parcel deadline around two weeks before the advertised limit provides a practical buffer without changing the official rule.",
        ]],
        ["A simple weekly warehouse routine", [
          "Once a week, sort warehouse items into five states: awaiting QC, need more evidence, after-sales open, accepted for parcel, or hold for consolidation. Record the next action and date. Check open after-sales cases more frequently because seller-response windows can be shorter than storage. Revisit the shipping estimator when the likely parcel changes. Remove dead product links from any public spreadsheet rather than allowing a warehouse guide to point to unrelated destinations.",
          "This routine turns storage from passive waiting into controlled operations. It also produces better editorial content: facts have dates, platform claims are attributed, variable terms are identified and buyer decisions are explained. That is more useful to a search visitor than a copied help center or an invented review. Kakobuy’s live account, order status and current help pages remain the authority for a transaction; the guide provides the framework for reading them carefully.",
          "When an item approaches your personal deadline, decide from the evidence already available instead of waiting for a perfect future parcel. Close any unresolved QC question, check whether after-sales is still open, and compare shipping with and without the item. If it is inexpensive but blocks every suitable route, a separate decision may cost less than forcing it into the main box. If several accepted items are ready, submit with enough time for packing and measurement before the advertised storage limit. Keep screenshots of the warehouse list and parcel request so dates, options and instructions remain recoverable during support conversations.",
        ]],
      ],
    },
  },
  de: {
    qcArticle: {
      title: "Kakobuy Spreadsheet 2026: Vom Produktlink zur QC-Entscheidung",
      tag: "Spreadsheet & QC",
      read: "Ausführlicher Leitfaden",
      reviewed: "Offizielle Quellen geprüft am 29. Aug. 2026",
      lede: "Ein gutes Kakobuy-Spreadsheet sammelt nicht nur Links. Es bewahrt Produktziel, Variante und Preisstand und hilft, Lagerfotos nachvollziehbar zu beurteilen.",
      sources: sources.qcArticle,
      sections: [
        ["Was ein Kakobuy-Spreadsheet leisten muss", ["Eine lange Liste ist noch keine gute Liste. Bild, Produktname und Zielseite müssen denselben Artikel zeigen; Preis und Prüfung brauchen ein Datum. Ein Eintrag ist eine Suchhilfe, keine Garantie für Qualität, Echtheit oder Sicherheit.", "Wir entfernen oder prüfen Routen erneut, wenn das Ziel wechselt, verschwindet oder ein anderes Produkt zeigt. So entsteht ein kleinerer, aber nachvollziehbarer Katalog statt einer unkontrollierten Link-Sammlung."]],
        ["Der offizielle Ablauf als Entscheidungskette", ["Kakobuy beschreibt: Produktlink eines chinesischen Marktplatzes kopieren, bei Kakobuy einfügen, Variante wählen und bezahlen, Lagereingang mit Qualitätsprüfung abwarten und anschließend ein internationales Paket einreichen.", "Vier Stopps sind entscheidend: Quellangebot verstehen, Bestelldaten sichern, Lagerfotos bewerten und Paket samt Route, Verpackung und Deklaration prüfen."]],
        ["Bestelldaten vor der Zahlung sichern", ["Speichern Sie URL, Titel, Variante, Menge, sichtbaren CNY-Preis, Größentabelle und relevante Optionsbilder mit Datum. Maschinenübersetzte Farben oder Bundles können unklar sein.", "Vergleichen Sie die Lagerfotos später mit diesem Datensatz, nicht mit Erinnerung oder einem ähnlichen Social-Media-Post. Fehlende Maße bleiben Unsicherheit; sie dürfen nicht als genaue Passformprognose erfunden werden."]],
        ["Preis als Kostenstapel lesen", ["Zum Artikelpreis können Inlandslieferung, Zahlungsgebühr, optionale Leistungen und später internationaler Versand kommen. Die offizielle Gebührenseite nennt derzeit keine zusätzliche Bearbeitungsgebühr für den Basis-Einkaufsservice; Zusatzdienste kosten separat.", "Die PayPal-Hilfe nennt aktuell 3,5 % plus 0,30 US-Dollar. Diese Live-Bedingungen können sich ändern. Deshalb sind USD-Angaben nur Näherungen und keine Endpreise."]],
        ["Was Kakobuy beim Lagereingang prüft", ["Kakobuy nennt auf der Startseite sichtbare Mängel, Größe und Farbe als Teile der Qualitätsprüfung nach dem Lagereingang. Fotos belegen jedoch weder Material, Haltbarkeit, Komfort noch Echtheit.", "Die Mitteilung vom 10. Mai 2026 zu QC-Anzeigeproblemen trennte fehlende Bilddarstellung von Lagerung und normaler Paketeinreichung. Fehlende Bilder daher erneut prüfen oder Support fragen."]],
        ["QC in drei Ebenen", ["Ebene eins: Menge, Farbe, Größe, Variante und Zubehör. Ebene zwei: Form, Nähte, Kleber, Druck, Beschläge, Flecken und Schäden. Ebene drei: gezielte Belege wie Maße oder ein fehlender Winkel.", "Beschreiben Sie Abweichungen mit Ort und sichtbarem Merkmal. Mehrere Perspektiven nutzen, da ein einzelnes Foto Proportionen verzerren kann."]],
        ["Lagerzeit ist keine Rückgabefrist", ["Kakobuy bewirbt aktuell 100 Tage kostenlose Lagerung. Das ist Planungszeit, aber kein 100-tägiges Rückgaberecht. Rückgabe hängt von Verkäufer, Status, Zustand und Prozess ab.", "Die 5-Day Return/Exchange Guarantee ist laut Hilfe eine von unterstützten Verkäufern angebotene Leistung, nicht universell. Ein Austausch kann laut Kakobuy je nach Verkäufer etwa 7–20 Tage bis zur erneuten Einlagerung benötigen."]],
        ["Klare Entscheidungsregel", ["Akzeptieren, wenn Variante stimmt, kein entscheidender sichtbarer Mangel vorliegt und die Restunsicherheit tragbar ist. Beleg anfordern, wenn genau ein fehlendes Foto die Entscheidung ändern kann.", "Nach Annahme Ankunft, Gewicht, Verpackungsbedarf und eigene Paketfrist notieren. So bleibt das Spreadsheet ein nachvollziehbarer Prüfpfad statt einer Werbeliste."]],
      ],
    },
    shippingArticle: {
      title: "Kakobuy Versand 2026: Kosten, Gewicht und Paketplanung",
      tag: "Versand",
      read: "Ausführlicher Leitfaden",
      reviewed: "Offizielle Quellen geprüft am 29. Aug. 2026",
      lede: "Kakobuy-Versand ist kein fester Produktpreis. Ziel, Packgewicht, Maße, Artikelklasse, aktuelle Linien und Zusatzdienste bestimmen die Planung.",
      sources: sources.shippingArticle,
      sections: [
        ["Estimator statt Festpreis", ["Kakobuy bietet eine Versandkostenschätzung für aktuelle Routen. Vor dem Packen bleibt sie eine Szenariorechnung, weil Verpackung, Maße, Klassifizierung und Linienregeln das Ergebnis verändern.", "Mit realistischem Gewicht, Abmessungen und Ziel mehrere Routen vergleichen und die Prüfung unmittelbar vor Einreichung wiederholen. Datierten Hinweisen immer Vorrang vor alten Screenshots geben."]],
        ["Ist- und Volumengewicht", ["Istgewicht kommt von der Waage. Volumengewicht bildet den beanspruchten Raum ab: Länge × Breite × Höhe geteilt durch einen linienspezifischen Divisor.", "Manche Linien berechnen den höheren Wert oder runden in Stufen. Schuhkartons, Geschenkboxen und dicke Jacken erhöhen häufig das Volumen stärker als die Masse."]],
        ["Vollständiger Kostenstapel", ["Produkt, Inlandslieferung, Zahlungsgebühr, optionale Lagerleistung und internationaler Versand sind getrennte Positionen. Kakobuy nennt den Basis-Agentenservice ohne zusätzliche Handling-Gebühr, Zusatzdienste aber kostenpflichtig.", "Die offizielle Seite nennt eine allgemeine Paket-Deklarationsgebühr von rund 8 RMB je nach Versandmethode. Dies ist keine mögliche Einfuhrabgabe im Zielland."]],
        ["Verpackung bewusst wählen", ["Schuhkartons entfernen spart Raum, aber auch Schutz und Präsentationswert. Vakuumierung passt zu weichen Textilien, nicht zu formempfindlichen Artikeln.", "Zuerst dekorative Verpackung entfernen, funktionale Innenverpackung und Schutz für fragile Teile gezielt behalten. Anweisungen kurz und eindeutig formulieren."]],
        ["Konsolidierung mit 100 Tagen Lagerzeit", ["Kakobuy verbindet die beworbenen 100 Tage kostenlose Lagerung ausdrücklich mit dem gemeinsamen Versand mehrerer Artikel. Mehrere Außenkartons können entfallen.", "Ein sehr großer Karton kann aber Volumengrenzen überschreiten oder Linien ausschließen. Konsolidiert und sinnvoll geteilt vergleichen, insbesondere bei fragilen, dringenden oder eingeschränkten Produkten."]],
        ["Linien ändern sich", ["Batterien, Flüssigkeiten, Magnete, Marken und andere sensible Kategorien können Auswahl und Behandlung verändern. Auch Ziel und laufender Betrieb beeinflussen die Liste.", "Der EU Duty-Free-Hinweis vom 30. Juni 2026 ist ein datiertes Update, keine ewige Garantie für jedes EU-Paket. Live-Bedingungen bleiben maßgeblich."]],
        ["Zoll und Deklaration", ["Empfängerregeln, wahrheitsgemäße Beschreibung, Wert und Produktbeschränkungen müssen geprüft werden. Keine Route kann Kontrolle, Gebührenfreiheit oder eine feste Zollzeit garantieren.", "Plattform-Deklarationsservice und staatliche Einfuhrabgabe sind getrennt. Belege sichern und bei höherem Wert die zuständige Zollbehörde prüfen."]],
        ["Checkliste vor Zahlung", ["Adresse, Telefon, Artikel, Mengen, Klassifizierung, Verpackung, Gewicht, Maße, Tracking, Entschädigung und Deklaration kontrollieren. Routendetails und Paketnummer sichern.", "Nicht nur die kürzeste Anzeige wählen. Kosten, Verzögerungsrisiko, Schutz und Nachverfolgung gemeinsam bewerten; Lieferfenster bleiben Schätzungen."]],
      ],
    },
    storageArticle: {
      title: "Kakobuy Lager 2026: 100 Tage, Rückgaben und Zeitplanung",
      tag: "Lager & Rückgabe",
      read: "Ausführlicher Leitfaden",
      reviewed: "Offizielle Quellen geprüft am 29. Aug. 2026",
      lede: "Die beworbenen 100 Tage kostenlose Lagerung schaffen Planungszeit. Lagerung, Verkäufer-Rückgabe, Austausch und internationaler Versand folgen aber verschiedenen Fristen.",
      sources: sources.storageArticle,
      sections: [
        ["Bedeutung der 100 Tage", ["Kakobuy nennt aktuell 100 Tage kostenlose Lagerung und empfiehlt, Artikel gemeinsam zu versenden. Die Regel wurde am 29. August 2026 geprüft und sollte im Konto erneut bestätigt werden.", "Jeder Artikel kann ein anderes Eingangsdatum haben. Bestellnummer, Lagerdatum, QC, Gewicht und eigene Paketfrist in einer einfachen Tabelle führen."]],
        ["Vier getrennte Uhren", ["Verkäuferversand, After-Sales, Lagerung und internationaler Transport starten unterschiedlich. Eine lange Lagerdauer verlängert keine Verkäufer-Rückgabe.", "Daher sofort prüfen, auch wenn das Paket erst Wochen später geplant ist. Die Lagerzeit dient nach Annahme der Konsolidierung."]],
        ["Stornierung nach Status", ["Kakobuys Hilfe unterscheidet bezahlt und Processing. Bei bezahlt kann Support zur Stornierung kontaktiert werden; bei Processing kann der Einkauf bereits abgeschlossen sein.", "Ordernummer und Wunsch klar nennen, keine Doppelbestellung vor Bestätigung. Nach Versand ist der Vorgang eher Rückgabe als einfache Stornierung."]],
        ["Früh prüfen", ["Beim Lagereingang Menge, Variante, Größe, Farbe und Zubehör prüfen; danach Form, Verarbeitung und Schäden. Relevante Verkäuferbilder sichern.", "QC-Fotos beweisen keine Echtheit oder Haltbarkeit. Fehlende, entscheidende Ansicht gezielt anfordern und Anzeigeprobleme nicht mit verlorenem Artikel verwechseln."]],
        ["5-Day Return/Exchange richtig lesen", ["Die offizielle Hilfe beschreibt die Leistung als Verkäuferangebot für unterstützte Produkte. Sie gilt nicht automatisch für jede Bestellung und jeden Grund.", "Ein Austausch geht zum Verkäufer zurück und erneut zum Lager. Kakobuy nennt dafür ungefähr 7–20 Tage je nach Verkäufer, ohne Garantie."]],
        ["Rückgabefähigkeit erhalten", ["Vor Entscheidung keine irreversiblen Services, Etikettenentfernung oder Entsorgung wichtiger Verpackung verlangen. Zustand und Verkäuferregeln können entscheidend sein.", "Abweichung mit Bild, Ort und bestellter Variante dokumentieren. Inlandsversand, Ablehnung oder nicht erstattbare Dienste bleiben möglich."]],
        ["Lagerzeit für Paketplanung nutzen", ["Kompatible Artikel sammeln, Verpackung festlegen und Routen prüfen. Einsparung entsteht durch weniger Doppelverpackung, nicht automatisch durch den größten Karton.", "Konsolidiert und geteilt vergleichen; fragile, dringende oder routenempfindliche Produkte gegebenenfalls trennen."]],
        ["Wöchentliche Routine", ["Artikel in QC offen, Beleg nötig, After-Sales, akzeptiert und Konsolidierung einteilen. Für jede Position nächste Aktion und Datum notieren.", "Eigene Frist vor dem offiziellen Limit setzen. So wird Lagerung zu kontrollierter Planung statt passivem Warten."]],
      ],
    },
  },
  es: {
    qcArticle: {
      title: "Hoja Kakobuy 2026: Del enlace a la decisión QC",
      tag: "Hoja & QC",
      read: "Guía detallada",
      reviewed: "Fuentes oficiales revisadas el 29 ago 2026",
      lede: "Una buena hoja de Kakobuy conserva la ruta, variante y precio observado, y permite comparar las fotos de almacén con el pedido real.",
      sources: sources.qcArticle,
      sections: [
        ["Qué debe hacer una hoja Kakobuy", ["Una lista enorme no es necesariamente útil. Imagen, nombre y destino deben corresponder, y cada precio necesita fecha. Un enlace ayuda a descubrir; no garantiza calidad, autenticidad o seguridad.", "La ruta se retira o revisa cuando cambia, desaparece o muestra otro artículo. Así el catálogo sigue siendo trazable y no una copia de tendencias."]],
        ["Flujo oficial por decisiones", ["Kakobuy explica: copiar un enlace de una tienda china, pegarlo, elegir opciones, pagar, esperar llegada y control de calidad, y finalmente enviar un paquete internacional.", "Conviene parar en cuatro puntos: fuente, registro de pedido, evidencia de almacén y paquete con ruta, embalaje y declaración."]],
        ["Guardar el registro antes de pagar", ["Conserva URL, título, variante, cantidad, precio CNY, tabla de tallas e imágenes de opciones con fecha. La traducción automática puede confundir colores o paquetes.", "Compara más tarde con este registro, no con memoria o una publicación parecida. Un dato ausente sigue siendo incertidumbre."]],
        ["Leer el precio por capas", ["Al producto pueden sumarse entrega nacional, comisión del canal de pago, servicios opcionales y envío internacional. La página oficial indica que el servicio básico de agente no añade handling fee; extras se pagan aparte.", "La ayuda de PayPal muestra actualmente 3,5 % más US$0,30. Son condiciones vivas. Nuestros precios USD son conversiones aproximadas, no totales finales."]],
        ["Control al llegar al almacén", ["La página principal de Kakobuy dice que el control revisa defectos visibles, talla y color. Las fotos no prueban material, duración, comodidad o autenticidad.", "El aviso del 10 de mayo de 2026 separó un problema de visualización QC del almacenamiento y envío normal. Si falta una foto, comprueba o consulta soporte."]],
        ["QC en tres capas", ["Primero identidad: cantidad, color, talla, variante y accesorios. Después construcción: forma, costuras, pegamento, impresión, herrajes y manchas. Por último, evidencia específica como una medida.", "Describe el lugar y el rasgo visible. Usa varias vistas porque una perspectiva única puede deformar proporciones."]],
        ["Almacenamiento no es devolución", ["Kakobuy anuncia actualmente 100 días gratuitos de almacén, pero no 100 días para devolver. El retorno depende de vendedor, estado y condiciones.", "La garantía de 5 días es un servicio de vendedores compatibles, no universal. Un cambio puede tardar aproximadamente 7–20 días en volver al almacén según el vendedor."]],
        ["Regla de decisión", ["Acepta si variante y evidencia coinciden y la incertidumbre restante es razonable. Pide evidencia solo cuando una foto o medida pueda cambiar la decisión.", "Tras aceptar, registra llegada, peso, embalaje y fecha de paquete. La hoja se convierte en historial verificable y no en publicidad."]],
      ],
    },
    shippingArticle: {
      title: "Envío Kakobuy 2026: Coste, peso y planificación",
      tag: "Envío",
      read: "Guía detallada",
      reviewed: "Fuentes oficiales revisadas el 29 ago 2026",
      lede: "El envío Kakobuy depende de destino, peso embalado, dimensiones, clasificación, rutas actuales y servicios elegidos.",
      sources: sources.shippingArticle,
      sections: [
        ["Estimador, no precio fijo", ["Kakobuy ofrece un estimador para comparar rutas. Antes de embalar sigue siendo una hipótesis, porque caja, dimensiones y reglas cambian el resultado.", "Usa peso y medidas realistas y repite la consulta antes de enviar. Los avisos actuales tienen prioridad sobre capturas antiguas."]],
        ["Peso real y volumétrico", ["El real sale de la báscula. El volumétrico representa espacio: largo × ancho × alto dividido por el divisor de la línea.", "Algunas rutas cobran el mayor o redondean por tramos. Cajas de zapatos, regalos y chaquetas pueden elevar más el volumen que la masa."]],
        ["Mapa completo de costes", ["Producto, entrega nacional, canal de pago, servicios opcionales y envío internacional son conceptos separados. Kakobuy dice que el agente básico no añade handling fee.", "La ayuda oficial indica un coste de declaración generalmente de RMB 8 según método. No es el posible impuesto de aduana del destino."]],
        ["Elegir embalaje", ["Quitar una caja ahorra espacio pero reduce estructura y valor. El vacío sirve para textiles blandos, no para productos que pierden forma.", "Retira primero lo decorativo; conserva protección funcional. Da instrucciones breves y concretas."]],
        ["Consolidar durante 100 días", ["Kakobuy conecta sus 100 días de almacenamiento gratuito con agrupar compras. Puede evitar embalajes exteriores repetidos.", "Una caja grande también puede activar peso volumétrico o bloquear rutas. Compara consolidado y división lógica para productos frágiles, urgentes o sensibles."]],
        ["Rutas variables", ["Baterías, líquidos, imanes, marcas y otras categorías pueden reducir opciones. Destino y operación actual también influyen.", "El aviso europeo Duty-Free del 30 de junio de 2026 es una actualización fechada, no una promesa eterna para todo paquete."]],
        ["Aduana y declaración", ["Valor, descripción, cantidades y restricciones deben ser veraces. Ninguna guía puede garantizar ausencia de inspección, impuestos o retrasos.", "El servicio de declaración de la plataforma y los tributos del país son distintos. Guarda recibos y consulta la autoridad cuando sea necesario."]],
        ["Lista final", ["Comprueba destinatario, artículos, clasificación, embalaje, peso, dimensiones, tracking, compensación y declaración. Guarda ruta y número de paquete.", "Elige por equilibrio de coste, protección y riesgo, no solo por el plazo más corto mostrado."]],
      ],
    },
    storageArticle: {
      title: "Almacén Kakobuy 2026: 100 días, devoluciones y plazos",
      tag: "Almacén & devoluciones",
      read: "Guía detallada",
      reviewed: "Fuentes oficiales revisadas el 29 ago 2026",
      lede: "Los 100 días gratuitos anunciados permiten planificar, pero almacenamiento, devolución del vendedor, cambio y tránsito tienen relojes distintos.",
      sources: sources.storageArticle,
      sections: [
        ["Qué significan los 100 días", ["Kakobuy anuncia 100 días gratuitos y sugiere agrupar artículos. La información fue revisada el 29 de agosto de 2026 y debe confirmarse en la cuenta.", "Cada artículo llega en fecha distinta. Registra pedido, fecha, QC, peso y tu propia fecha límite."]],
        ["Cuatro relojes", ["Despacho del vendedor, posventa, almacenamiento y transporte internacional comienzan de forma diferente. Un plazo no amplía otro.", "Inspecciona al llegar aunque planees esperar semanas. El almacenamiento sirve para consolidar después de aceptar."]],
        ["Cancelar según estado", ["La guía distingue paid y Processing. En paid se puede contactar soporte; en Processing la compra puede estar completada.", "Da número y solicitud clara. Tras el envío, el proceso se parece a devolución y puede tener coste o rechazo."]],
        ["Inspección temprana", ["Confirma cantidad, variante, talla, color y accesorios; después forma, construcción y daños. Guarda referencias del vendedor.", "Las fotos no certifican autenticidad o duración. Pide solo el ángulo decisivo y separa un fallo de visualización de un artículo perdido."]],
        ["Garantía de cinco días", ["La ayuda oficial la describe como servicio de vendedores en productos compatibles. No cubre automáticamente toda compra o motivo.", "Un cambio vuelve al vendedor y al almacén. Kakobuy señala unos 7–20 días según vendedor, sin garantía."]],
        ["Mantener elegibilidad", ["Evita cambios irreversibles, quitar etiquetas o desechar embalaje importante antes de decidir.", "Documenta imagen, lugar y variante. Puede haber envío nacional, rechazo o servicios no reembolsables."]],
        ["Planificar el paquete", ["Agrupa artículos compatibles y compara rutas. El ahorro viene de menos embalaje repetido, no de hacer la caja más grande.", "Compara consolidado y dividido, separando fragilidad, urgencia y restricciones."]],
        ["Rutina semanal", ["Clasifica: QC pendiente, evidencia, posventa, aceptado o consolidación. Anota próxima acción y fecha.", "Fija un límite personal anterior al oficial para evitar decisiones apresuradas."]],
      ],
    },
  },
  fr: {
    qcArticle: {
      title: "Tableur Kakobuy 2026 : du lien à la décision QC",
      tag: "Tableur & QC",
      read: "Guide détaillé",
      reviewed: "Sources officielles vérifiées le 29 août 2026",
      lede: "Un bon tableur Kakobuy conserve la route, la variante et le prix observé, puis permet de comparer les photos d'entrepôt avec la commande réelle.",
      sources: sources.qcArticle,
      sections: [
        ["Le rôle réel du tableur", ["Une immense liste n'est pas forcément utile. Image, nom et destination doivent correspondre, avec une date de contrôle. Un lien n'est pas une garantie de qualité, d'authenticité ou de sécurité.", "La route est retirée ou vérifiée lorsqu'elle change, disparaît ou montre un autre produit. Le catalogue reste ainsi traçable."]],
        ["Le parcours officiel en décisions", ["Kakobuy décrit : copier un lien de marketplace chinoise, le coller, choisir les options, payer, attendre l'arrivée et le contrôle, puis soumettre le colis international.", "Quatre portes : comprendre la source, enregistrer la commande, lire les preuves d'entrepôt et valider le colis, la ligne et la déclaration."]],
        ["Créer le dossier avant paiement", ["Conservez URL, titre, variante, quantité, prix CNY, guide des tailles et images d'options avec la date. La traduction automatique peut rendre les variantes ambiguës.", "Comparez ensuite avec ce dossier, pas avec la mémoire ou un post ressemblant. Une mesure absente reste une incertitude."]],
        ["Lire le prix par couches", ["Au produit peuvent s'ajouter transport domestique, frais de paiement, services optionnels et transport international. Kakobuy indique que le service d'agent de base n'ajoute pas de handling fee.", "L'aide PayPal affiche actuellement 3,5 % plus 0,30 USD. Ce sont des conditions évolutives ; nos conversions USD ne sont pas des totaux finaux."]],
        ["Contrôle à l'entrepôt", ["La page d'accueil Kakobuy cite les défauts visibles, la taille et la couleur. Les photos ne prouvent ni matière, durabilité, confort ou authenticité.", "L'avis du 10 mai 2026 séparait un problème d'affichage QC du stockage et de l'envoi normal. Si une image manque, revérifiez ou contactez le support."]],
        ["QC en trois niveaux", ["D'abord identité : quantité, couleur, taille, variante et accessoires. Ensuite fabrication : forme, couture, colle, impression, métal et taches. Enfin une preuve ciblée comme une mesure.", "Décrivez lieu et différence visible. Utilisez plusieurs angles car la perspective peut fausser les proportions."]],
        ["Stockage et retour sont distincts", ["Kakobuy annonce 100 jours de stockage gratuit, pas 100 jours de retour. Le retour dépend du vendeur, du statut et de l'état.", "La garantie cinq jours est un service de vendeurs compatibles, non universel. Un échange peut demander environ 7 à 20 jours pour revenir en stock selon le vendeur."]],
        ["Règle de décision", ["Acceptez si variante et preuve correspondent et si l'incertitude restante est tolérable. Demandez une preuve lorsqu'elle peut réellement changer la décision.", "Après acceptation, notez arrivée, poids, emballage et échéance de colis. Le tableur devient un historique vérifiable."]],
      ],
    },
    shippingArticle: {
      title: "Livraison Kakobuy 2026 : coût, poids et préparation",
      tag: "Livraison",
      read: "Guide détaillé",
      reviewed: "Sources officielles vérifiées le 29 août 2026",
      lede: "Le coût Kakobuy dépend de la destination, du poids emballé, des dimensions, de la catégorie, des lignes actuelles et des services.",
      sources: sources.shippingArticle,
      sections: [
        ["Un estimateur, pas un prix fixe", ["Kakobuy propose un estimateur de lignes. Avant emballage, le chiffre reste une hypothèse car carton, dimensions et règles peuvent changer.", "Comparez avec des données réalistes et recommencez juste avant soumission. Les avis datés priment sur les anciennes captures."]],
        ["Poids réel et volumétrique", ["Le poids réel vient de la balance. Le volumétrique traduit l'espace : longueur × largeur × hauteur ÷ diviseur de ligne.", "Certaines lignes prennent le plus élevé ou arrondissent. Boîtes et manteaux gonflent souvent davantage le volume que la masse."]],
        ["Toutes les couches de coût", ["Produit, livraison locale, paiement, services optionnels et transport international sont distincts. Kakobuy indique que l'agent de base n'ajoute pas de handling fee.", "L'aide officielle cite généralement 8 RMB de frais de déclaration selon la méthode. Ce n'est pas le droit de douane du pays."]],
        ["Choisir l'emballage", ["Retirer une boîte réduit l'espace mais aussi la protection. Le vide convient aux textiles souples, pas aux objets qui doivent garder leur forme.", "Retirez d'abord le décoratif et gardez la protection fonctionnelle. Donnez une instruction courte et précise."]],
        ["Regrouper pendant 100 jours", ["Kakobuy relie ses 100 jours gratuits au regroupement de commandes. Cela évite parfois plusieurs cartons extérieurs.", "Un grand colis peut aussi déclencher le volumétrique ou exclure des lignes. Comparez regroupé et séparation logique."]],
        ["Lignes variables", ["Batteries, liquides, aimants, marques et catégories sensibles réduisent parfois les choix. Destination et opérations comptent aussi.", "L'avis EU Duty-Free du 30 juin 2026 est une mise à jour datée, pas une promesse permanente."]],
        ["Douane et déclaration", ["Valeur, description, quantité et restrictions doivent être exactes. Aucun guide ne garantit absence de contrôle, taxe ou retard.", "Le service de déclaration et les taxes d'importation sont différents. Conservez les preuves et consultez l'autorité locale si nécessaire."]],
        ["Checklist finale", ["Vérifiez destinataire, articles, classification, emballage, poids, dimensions, suivi, compensation et déclaration.", "Choisissez selon coût, protection et risque, pas seulement le délai le plus court affiché."]],
      ],
    },
    storageArticle: {
      title: "Entrepôt Kakobuy 2026 : 100 jours, retours et délais",
      tag: "Entrepôt & retours",
      read: "Guide détaillé",
      reviewed: "Sources officielles vérifiées le 29 août 2026",
      lede: "Les 100 jours gratuits donnent du temps, mais stockage, retour vendeur, échange et transport international suivent des délais distincts.",
      sources: sources.storageArticle,
      sections: [
        ["Sens des 100 jours", ["Kakobuy annonce 100 jours gratuits et encourage le regroupement. Cette règle a été vérifiée le 29 août 2026 et doit être reconfirmée dans le compte.", "Chaque article arrive à une date différente. Notez commande, arrivée, QC, poids et échéance personnelle."]],
        ["Quatre horloges", ["Expédition vendeur, après-vente, stockage et transport international commencent séparément. Une période n'allonge pas l'autre.", "Inspectez dès l'arrivée, même si le colis attendra. Le stockage sert ensuite au regroupement."]],
        ["Annuler selon le statut", ["L'aide distingue paid et Processing. En paid, contactez le support ; en Processing, l'achat peut déjà être terminé.", "Donnez le numéro et l'action exacte. Après expédition, il s'agit plutôt d'un retour avec frais ou refus possibles."]],
        ["Inspecter tôt", ["Confirmez quantité, variante, taille, couleur et accessoires, puis forme, fabrication et dommages. Gardez les références vendeur.", "Les photos ne certifient pas l'authenticité ou la durée. Demandez seulement l'angle décisif."]],
        ["Garantie cinq jours", ["L'aide officielle la décrit comme un service de vendeurs sur produits compatibles. Elle n'est pas universelle.", "Un échange repart au vendeur puis au dépôt. Kakobuy indique environ 7 à 20 jours selon le vendeur, sans garantie."]],
        ["Préserver l'éligibilité", ["Évitez modification irréversible, retrait d'étiquette ou destruction d'un emballage important avant décision.", "Documentez image, emplacement et variante. Transport local, refus ou service non remboursable restent possibles."]],
        ["Planifier le colis", ["Regroupez les produits compatibles et comparez les lignes. L'économie vient de l'emballage répété évité.", "Comparez regroupé et séparé ; isolez fragilité, urgence et restrictions."]],
        ["Routine hebdomadaire", ["Classez QC en attente, preuve, après-vente, accepté ou consolidation. Notez prochaine action et date.", "Fixez une échéance personnelle avant la limite officielle."]],
      ],
    },
  },
  it: {
    qcArticle: {
      title: "Foglio Kakobuy 2026: dal link alla decisione QC",
      tag: "Foglio & QC",
      read: "Guida dettagliata",
      reviewed: "Fonti ufficiali verificate il 29 ago 2026",
      lede: "Un buon foglio Kakobuy conserva percorso, variante e prezzo osservato e permette di confrontare le foto di magazzino con l'ordine reale.",
      sources: sources.qcArticle,
      sections: [
        ["Cosa deve fare il foglio", ["Una lista enorme non è automaticamente utile. Immagine, nome e destinazione devono corrispondere, con data. Un link non garantisce qualità, autenticità o sicurezza.", "Il percorso viene rimosso o ricontrollato se cambia, scompare o mostra altro. Il catalogo resta tracciabile."]],
        ["Flusso ufficiale a decisioni", ["Kakobuy descrive: copiare il link da un marketplace cinese, incollarlo, scegliere opzioni, pagare, attendere arrivo e controllo, poi inviare il pacco internazionale.", "Quattro passaggi: capire la fonte, salvare l'ordine, leggere le prove di magazzino e approvare pacco, linea e dichiarazione."]],
        ["Salvare i dati prima del pagamento", ["Conserva URL, titolo, variante, quantità, prezzo CNY, taglie e immagini delle opzioni con data. La traduzione automatica può creare ambiguità.", "Confronta poi con questi dati, non con memoria o post simili. Un'informazione assente resta incertezza."]],
        ["Leggere il prezzo a livelli", ["Al prodotto possono aggiungersi consegna interna, costo del pagamento, servizi opzionali e spedizione internazionale. Kakobuy indica che il servizio base non aggiunge handling fee.", "L'aiuto PayPal mostra ora 3,5% più US$0,30. Sono termini variabili; i nostri USD sono conversioni, non totali finali."]],
        ["Controllo in magazzino", ["La homepage Kakobuy cita difetti visibili, taglia e colore. Le foto non provano materiale, durata, comfort o autenticità.", "L'avviso del 10 maggio 2026 separava un problema di visualizzazione QC dal deposito e invio normale. Se manca una foto, ricontrolla o chiedi supporto."]],
        ["QC in tre livelli", ["Prima identità: quantità, colore, taglia, variante e accessori. Poi costruzione: forma, cuciture, colla, stampa, metallo e macchie. Infine prova mirata come una misura.", "Descrivi posizione e differenza visibile. Usa più angoli perché la prospettiva può alterare proporzioni."]],
        ["Deposito non è reso", ["Kakobuy pubblicizza 100 giorni gratuiti, non 100 giorni di reso. Il reso dipende da venditore, stato e condizioni.", "La garanzia cinque giorni è un servizio di venditori compatibili, non universale. Uno scambio può richiedere circa 7–20 giorni per tornare in deposito."]],
        ["Regola decisionale", ["Accetta se variante e prova corrispondono e l'incertezza residua è tollerabile. Chiedi prova solo quando può cambiare la decisione.", "Dopo l'accettazione registra arrivo, peso, imballo e scadenza. Il foglio diventa uno storico verificabile."]],
      ],
    },
    shippingArticle: {
      title: "Spedizione Kakobuy 2026: costo, peso e pianificazione",
      tag: "Spedizione",
      read: "Guida dettagliata",
      reviewed: "Fonti ufficiali verificate il 29 ago 2026",
      lede: "Il costo dipende da destinazione, peso imballato, dimensioni, categoria, linee disponibili e servizi scelti.",
      sources: sources.shippingArticle,
      sections: [
        ["Stimatore, non prezzo fisso", ["Kakobuy offre uno stimatore di linee. Prima dell'imballo è un'ipotesi perché scatola, misure e regole cambiano il risultato.", "Usa dati realistici e ripeti prima dell'invio. Gli avvisi datati prevalgono su vecchi screenshot."]],
        ["Peso reale e volumetrico", ["Il reale viene dalla bilancia. Il volumetrico traduce lo spazio: lunghezza × larghezza × altezza ÷ divisore della linea.", "Alcune linee usano il maggiore o arrotondano. Scatole e giacche gonfiano spesso il volume più della massa."]],
        ["Mappa dei costi", ["Prodotto, consegna interna, canale di pagamento, servizi opzionali e spedizione sono separati. Kakobuy dice che il servizio base non aggiunge handling fee.", "L'aiuto cita generalmente RMB 8 per la dichiarazione a seconda del metodo. Non è il dazio del paese."]],
        ["Scegliere l'imballo", ["Togliere una scatola riduce spazio ma anche protezione. Il sottovuoto va bene per tessuti morbidi, non per articoli che devono mantenere forma.", "Rimuovi prima il decorativo e conserva la protezione funzionale. Istruzioni brevi e chiare."]],
        ["Consolidare nei 100 giorni", ["Kakobuy collega i 100 giorni gratuiti al raggruppamento. Può evitare più scatole esterne.", "Un pacco grande può attivare volumetrico o escludere linee. Confronta consolidato e divisione logica."]],
        ["Linee variabili", ["Batterie, liquidi, magneti, marchi e categorie sensibili possono ridurre la scelta. Anche destinazione e operatività contano.", "L'avviso EU Duty-Free del 30 giugno 2026 è un aggiornamento datato, non una promessa permanente."]],
        ["Dogana e dichiarazione", ["Valore, descrizione, quantità e restrizioni devono essere veritieri. Nessuna guida garantisce assenza di controlli, tasse o ritardi.", "Servizio di dichiarazione e imposte d'importazione sono distinti. Conserva prove e consulta l'autorità se necessario."]],
        ["Checklist finale", ["Controlla destinatario, articoli, classificazione, imballo, peso, misure, tracking, compensazione e dichiarazione.", "Scegli per equilibrio di costo, protezione e rischio, non solo per il tempo più breve mostrato."]],
      ],
    },
    storageArticle: {
      title: "Magazzino Kakobuy 2026: 100 giorni, resi e tempi",
      tag: "Deposito & resi",
      read: "Guida dettagliata",
      reviewed: "Fonti ufficiali verificate il 29 ago 2026",
      lede: "I 100 giorni gratuiti offrono tempo, ma deposito, reso del venditore, cambio e trasporto internazionale seguono scadenze separate.",
      sources: sources.storageArticle,
      sections: [
        ["Significato dei 100 giorni", ["Kakobuy pubblicizza 100 giorni gratuiti e suggerisce di raggruppare. La regola è stata verificata il 29 agosto 2026 e va confermata nell'account.", "Ogni articolo arriva in data diversa. Registra ordine, arrivo, QC, peso e scadenza personale."]],
        ["Quattro orologi", ["Spedizione venditore, post-vendita, deposito e trasporto internazionale iniziano separatamente. Un periodo non estende l'altro.", "Ispeziona all'arrivo anche se aspetterai settimane. Il deposito serve poi alla consolidazione."]],
        ["Annullamento per stato", ["L'aiuto distingue paid e Processing. Con paid contatta supporto; con Processing l'acquisto può essere completato.", "Fornisci numero e azione. Dopo la spedizione si tratta più di un reso, con costi o rifiuto possibili."]],
        ["Controllo precoce", ["Conferma quantità, variante, taglia, colore e accessori, poi forma, costruzione e danni. Salva i riferimenti del venditore.", "Le foto non certificano autenticità o durata. Chiedi solo l'angolo decisivo."]],
        ["Garanzia cinque giorni", ["L'aiuto ufficiale la descrive come servizio di venditori per prodotti compatibili. Non è universale.", "Un cambio torna al venditore e poi al deposito. Kakobuy indica circa 7–20 giorni secondo il venditore, senza garanzia."]],
        ["Mantenere l'idoneità", ["Evita modifiche irreversibili, rimozione etichette o distruzione di imballi importanti prima di decidere.", "Documenta immagine, posizione e variante. Consegna interna, rifiuto o servizi non rimborsabili restano possibili."]],
        ["Pianificare il pacco", ["Raggruppa articoli compatibili e confronta le linee. Il risparmio viene da meno imballo ripetuto.", "Confronta consolidato e separato, isolando fragilità, urgenza e restrizioni."]],
        ["Routine settimanale", ["Classifica QC in attesa, prova, post-vendita, accettato o consolidamento. Registra azione e data.", "Fissa una scadenza personale prima del limite ufficiale."]],
      ],
    },
  },
};

for (const articleKey of ["qcArticle", "shippingArticle", "storageArticle"] as const) {
  articleData.de[articleKey].sections = deArticleSections[articleKey];
  articleData.es[articleKey].sections = esArticleSections[articleKey];
  articleData.fr[articleKey].sections = frArticleSections[articleKey];
  articleData.it[articleKey].sections = itArticleSections[articleKey];
}
