import type { ArticleRecord } from './articleData';

export const newArticles: ArticleRecord[] = [
{
 slug: 'hipobuy-shipping-spain',
 title: 'HipoBuy Shipping to Spain: Costs, Routes and Parcel Checks',
 metaTitle: 'HipoBuy Shipping to Spain: Cost & Parcel Checklist',
 description: 'Plan HipoBuy shipping to Spain with a destination checklist, packed-weight example, route comparison and a record of the costs still to confirm.',
 kicker: 'SPAIN / SHIPPING', readTime: 9,
 lead: 'For a useful Spain shipping estimate, enter the exact delivery postcode, confirm that the route accepts your items, and compare quotes using the same packed weight and dimensions.',
 intro: [
 'HipoBuy shipping to Spain does not have one price per kilogram that applies to every parcel. The destination, contents, packaging and services can change the available routes and the amount charged. A screenshot from another buyer is useful as a question to investigate, but it is not a quote for your address. Build your comparison from the parcel you actually intend to send.',
 'This guide is for the stage between choosing products and paying for international delivery. It gives you a way to keep product costs, packaging decisions and route terms in one record. It does not supply a live tariff, select a carrier for you or promise a customs outcome. The final route description and checkout quote are the current sources for availability and price.'
 ],
 sections: [
 {short:'Destination',heading:'1. Enter the complete Spanish destination first',paragraphs:[
 'Use the recipient name, street type and name, building number, floor and door where needed, postcode, locality and province. Check that the postcode and locality agree. Preserve address details such as escalera or piso when they are needed to find the entrance. Use a contact number you can actually answer and verify the completed address before requesting a packing service.',
 'Do not assume that a quote for mainland Spain also covers the Balearic Islands, Canary Islands, Ceuta or Melilla. Enter the real destination and read any territory exclusions, remote-area conditions and delivery restrictions in the available route. If your location is not explicitly supported, ask the platform about that postcode before paying. Changing the address later can change both eligibility and the quote.'
 ],checklist:['Recipient name matches the delivery record','Street, building, floor and door are complete','Postcode, locality and province agree','The selected route accepts the actual territory']},
 {short:'Contents',heading:'2. Check the contents before comparing prices',paragraphs:[
 'Make a short contents list from the warehouse items: product type, quantity, material claims and any battery, liquid, magnetic part or other relevant characteristic. A general description such as accessories can hide a restriction. A phone case and a power bank are different shipping decisions even if both appear in an accessories category.',
 'Confirm the selected route accepts each item and the total parcel limits. Check the current platform and destination rules for any product you are uncertain about. Do not change the description to make a restricted item appear acceptable. A cheap line that cannot carry your contents is not a valid alternative, and splitting a parcel does not remove the need to follow the applicable rules.'
 ]},
 {short:'Packed weight',heading:'3. Compare packed weight with parcel dimensions',paragraphs:[
 'Product weights alone leave out the outer carton, protection and retained retail packaging. Ask for the packed weight and external length, width and height when available. Some routes use a size-based weight, some use scale weight, and some impose additional limits or rounding rules. Read the selected line rather than assuming every route uses the same divisor.',
 'Illustrative calculation, not a HipoBuy tariff: a parcel measuring 40 × 30 × 25 cm has a volume of 30,000 cm³. If a route explicitly uses a divisor of 5,000, its volumetric weight is 6 kg. If its actual packed weight is 4 kg and the route charges the greater value, the comparison starts at 6 kg before that route’s rounding or minimum. Replace the assumed divisor with the one shown for your line.',
 'A lower item weight does not automatically make a bulky parcel cheaper. Compare a second packing proposal only if the item protection remains adequate. Record the dimensions of each proposal; a statement such as remove boxes is not enough to predict the result.'
 ]},
 {short:'Cost record',heading:'4. Keep the shipping quote separate from the purchase budget',paragraphs:[
 'Use separate entries for the goods, domestic transport to the warehouse, platform or payment charges, optional packing, international delivery and any destination charges not included. Record the currency and date beside each figure. An unknown charge should remain unknown until you have evidence; entering zero can make an incomplete budget look finished.',
 'For each Spain route, save the full name and quote, the weight basis, included services, relevant restrictions, estimated transit range and the conditions for any tax-related wording. Do not translate a route name containing tax-free into a personal guarantee that every possible charge is covered. Read the actual terms and check current guidance from the Spanish tax authority or the appointed carrier where relevant.',
 'If two quotes include different services, add those differences to the comparison before ranking by price. A cheaper headline may exclude a service included elsewhere. Keep the quote screenshot with the parcel details so later changes can be traced to a new weight, address, service or exchange-rate input.'
 ]},
 {short:'Before payment',heading:'5. Finish QC and packaging decisions before approval',paragraphs:[
 'Confirm the received product identity, selected colour and size, quantities and any measurements that affect your decision. Resolve a visible defect before adding the item to an international parcel. Paying for shipping does not improve the evidence available for a product, and a later return can involve different practical constraints.',
 'For a shoe-and-hoodie parcel, decide separately whether shoe boxes are needed and whether compression is appropriate for the garment. Keep protection around parts that could be damaged. Request a new measurement when the final packing differs materially from the quote. Use the rehearsal guide below to record what was packed and what remained in the warehouse.'
 ]},
 {short:'After dispatch',heading:'6. Follow the parcel through the carrier handoff',paragraphs:[
 'Save the parcel reference, selected route and carrier tracking number when issued. An order number identifies a purchase; it may not be searchable on the carrier website. A label-created event also does not establish that the carrier has physically received the package. Read the event text and timestamp together.',
 'When a local carrier takes over, save its reference and check delivery instructions through its official channel. If an update requests information or payment, verify the request by opening the platform or carrier yourself. For a delay, send support the parcel reference, last event and date, destination postcode and the exact uncertainty. Share personal documents only through the verified support process.'
 ]}
 ],
 decisionTitle:'Spain parcel record',
 decision:['Keep one dated record containing destination territory, postcode, contents, QC decision, packing choices, measured weight, dimensions, route name, quote currency and unresolved charges. This is the basis for comparing routes and understanding a revised bill.','Move forward when the actual destination and contents are accepted, the measurements describe the final packing, and the included services are understood. If any of those inputs changes, refresh the quote instead of relying on an earlier screenshot.'],
 nextTitle:'Measure the parcel before comparing routes',nextCopy:'Use the rehearsal checklist, then return to the shipping overview with the final measurements.',nextHref:'/articles/hipobuy-rehearsal-parcel/',nextLabel:'Read the rehearsal guide'
},
{
 slug:'hipobuy-shipping-germany',title:'HipoBuy Shipping to Germany: Weight, Routes and Delivery Checks',
 metaTitle:'HipoBuy Shipping to Germany: Weight & Route Guide',
 description:'Prepare HipoBuy shipping to Germany: check the address, contents, packed measurements, route terms and tracking handoff before approving delivery.',
 kicker:'GERMANY / SHIPPING',readTime:9,
 lead:'Start a Germany shipping comparison with the real postcode and parcel contents, then verify packed measurements and the services included in each available line.',
 intro:[
 'A HipoBuy shipping quote for Germany is meaningful only when the destination, contents and packaging are defined. Two buyers can send the same number of products and receive different quotes because the boxes, route eligibility and included services differ. Comparing only the parcel’s product weight leaves out several inputs that can change the final amount.',
 'Use this guide to prepare a repeatable comparison, not to copy another buyer’s route or declaration. It covers the delivery address, warehouse decisions, billable-weight example and records to keep after dispatch. Current platform route descriptions control availability; current customs and carrier guidance control the requirements that apply to your shipment.'
 ],
 sections:[
 {short:'German address',heading:'1. Make the German delivery address unambiguous',paragraphs:[
 'Check the recipient’s name, street and house number, any apartment or c/o detail, five-digit postcode and town. Preserve umlauts and other characters when the form supports them, and check the final saved address rather than only the text you typed. The recipient name should allow the delivery person to identify the correct doorbell or mailbox.',
 'A Packstation, parcel shop or collection-point address should be used only when the selected route and final carrier explicitly support that service and you have met its own account and address requirements. Do not paste a collection-point address into a normal home-delivery field and assume it will be recognised. If the final carrier is not yet confirmed, resolve the address type before dispatch.'
 ],checklist:['Recipient and doorbell or mailbox details agree','Street and house number are separate and readable','Postcode matches the town','The chosen service supports the address type']},
 {short:'Eligible route',heading:'2. Eliminate routes that do not accept the parcel',paragraphs:[
 'List the actual item types and quantities before opening the estimator. Identify relevant batteries, liquids, magnets, fragile parts and other characteristics that may change route eligibility. Seller category labels are not enough: a cosmetic pouch and a liquid cosmetic product need different checks even if they share a category.',
 'Read the current restrictions, maximum weight and dimension limits for each available line. Confirm whether the listed carrier is responsible for the whole journey or only the final delivery stage. A familiar carrier name in a route label does not describe every handoff or guarantee a particular timetable. Keep the exact line name with your quote so that similar names are not mixed later.'
 ]},
 {short:'Weight example',heading:'3. Test how dimensions change the comparison',paragraphs:[
 'Separate item weight, packed scale weight and volumetric weight in your record. The completed parcel includes the carton and protective material. A bulky jacket or several retail shoe boxes can occupy substantial space without adding much scale weight. Check whether the chosen route bills actual weight, volumetric weight or another stated method, including its rounding increments.',
 'For an illustrative comparison, assume a line uses length × width × height in centimetres divided by 6,000 and bills the larger of that result and scale weight. A 45 × 35 × 30 cm box gives 7.875 kg volumetric weight. At an actual weight of 5 kg, dimensions determine the comparison before rounding. These are example inputs, not a claim that HipoBuy uses this divisor for Germany.',
 'If appropriate packing reduces only the height to 24 cm, the same formula gives 6.3 kg. That is a difference in the weight basis, not a confirmed cash saving. You still need the current tariff, rounding rules and any packing fee. Do not reduce protective material solely to reach a smaller number.'
 ]},
 {short:'Cost comparison',heading:'4. Compare the complete quote and unresolved charges',paragraphs:[
 'Record product cost, delivery to the warehouse, payment or service charges, packing, international delivery and any destination costs not included in the selected service. Keep the original currency alongside any euro or dollar conversion and note the conversion date. The spreadsheet’s reference product price is not a delivered-price promise.',
 'Read any tax-related route wording together with its conditions. Confirm what the quote includes, who handles any required procedure and which charges could still be requested. Do not replace a truthful item description or paid value with a fixed amount copied from a forum. Use the current information from German customs and the responsible carrier for the requirements relevant to your purchase.',
 'A useful comparison has one row per route and the same destination, contents and measurements in every row. Mark differences in insurance or protection options, tracking, delivery arrangements and other services before choosing. If the platform cannot clarify an important condition, retain it as an unresolved issue instead of assuming the cheaper interpretation.'
 ]},
 {short:'Warehouse decision',heading:'5. Resolve QC and packing while the parcel is still controllable',paragraphs:[
 'Review the warehouse photographs against the exact selected options. Check size tags, garment measurements, pair symmetry and visible damage as applicable. Ask for one targeted photograph when it can settle a real decision. Product inspection and shipping preparation are different approvals: a well-packed wrong size remains the wrong size.',
 'Record which products are included and which remain in storage. Decide whether retail packaging has value and whether reinforcement is needed. If a rehearsal or other measurement service is available in the current interface, confirm its fee, scope and whether packing can be changed afterward before submitting it. Check the returned weight and dimensions rather than assuming the service must reduce the bill.'
 ]},
 {short:'Delivery follow-up',heading:'6. Distinguish dispatch, arrival and final delivery events',paragraphs:[
 'Save the platform parcel reference and the carrier tracking number separately. Compare the last event with the route’s stated delivery range and any service notice. A gap between handoffs is a reason to check the actual status, not proof of loss. An electronic label event is not the same as physical acceptance by the carrier.',
 'For an address problem, missed delivery or collection notice, use the official final-carrier channel and verify the recipient details. If a parcel is shown as delivered but cannot be found, check the recorded delivery place and household or building reception, then report the discrepancy promptly through the relevant support process. Keep event screenshots and packaging if the contents arrive damaged.'
 ]}
 ],
 decisionTitle:'Germany route comparison record',decision:[
 'Keep the delivery address type, postcode, contents, packed weight, dimensions, charging method, line name, quote date and currency in one record. Add the included services and anything that still needs clarification. The comparison should explain why the selected line fits the actual parcel.',
 'Refresh the record after a packing change, address correction or route change. An earlier quote cannot establish the final charge for a different parcel. Once dispatched, keep the parcel and carrier identifiers together so that a support request can identify the correct shipment without a long reconstruction.'
 ],nextTitle:'Understand the tracking events',nextCopy:'Use the tracking guide to separate purchase status, parcel preparation and carrier updates.',nextHref:'/articles/hipobuy-tracking/',nextLabel:'Read the tracking guide'
},
{
 slug:'hipobuy-rehearsal-parcel',title:'HipoBuy Rehearsal Parcel: Weight, Dimensions and Packing',
 metaTitle:'HipoBuy Rehearsal Parcel: Packing & Weight Checklist',
 description:'Prepare a HipoBuy rehearsal parcel, record packing instructions and review measured weight and dimensions before comparing the final shipping quote.',
 kicker:'PARCEL / PRE-PACKING',readTime:9,
 lead:'A rehearsal parcel is useful when it gives you measured information about a defined packing plan. Confirm the current service, fee and change rules, then compare the result with the items and instructions you submitted.',
 intro:[
 'The phrase HipoBuy rehearsal parcel is commonly used for a pre-shipment packing or measurement step. The practical goal is to replace uncertain parcel inputs with a clearer record before the final shipping decision. It should not be treated as a coupon, a guaranteed price reduction or an instruction to remove every box.',
 'The exact interface, service scope and fee can change. Check what your account currently offers and read the terms before submitting a request. This guide focuses on the information you need before and after that step. It deliberately avoids an unverified fixed fee or promised completion time.'
 ],
 sections:[
 {short:'When to use it',heading:'1. Identify the uncertainty a rehearsal should resolve',paragraphs:[
 'A measurement step is most useful when packing can materially change the shipping comparison. Several shoe boxes, a bulky jacket, mixed fragile and soft items, or a parcel close to a route’s size limit deserve particular attention. For a straightforward compact parcel with reliable measurements, consider whether the service provides enough additional information to justify its current cost.',
 'Write the decision you need to make: retain or remove a retail box, combine or separate items, choose between eligible routes, or understand an estimate that changed. This turns a vague request for cheaper shipping into a measurable question. A rehearsal cannot fix an incorrect product size, prove authenticity or make a restricted item eligible.'
 ]},
 {short:'Before submission',heading:'2. Finish the product checks and list the exact items',paragraphs:[
 'Confirm that the relevant warehouse items are present and that you have completed any QC decision affecting inclusion. Record each item reference, selected variation and quantity. Do not rely on a parcel title such as my haul to show what is inside. Keep a separate list of products that must remain in storage.',
 'Resolve a wrong option, missing measurement or visible defect before asking the warehouse to pack that item. If you are waiting for a response or considering a return, keep the item out of the packing plan until the decision is made. This avoids paying for a measurement of a parcel you already know may change.',
 'Save the destination and preferred route if the service requires them. Read whether the result is tied to the selected route or can be used to compare other eligible lines. Check the fee, expected process and rules for changing packing after completion in the current interface or with support.'
 ],checklist:['Item references and quantities saved','QC decisions resolved for included items','Items remaining in storage listed separately','Current fee and packing-change rules understood']},
 {short:'Packing instructions',heading:'3. Give specific, compatible packing instructions',paragraphs:[
 'Distinguish retail packaging from protective packaging. Removing a decorative outer box may reduce bulk, while removing a support that protects the product may create avoidable damage. Specify which item each instruction applies to. Keep a shoe box when it has value to you; do not let a generic remove boxes note override that decision.',
 'Compression may be suitable for some soft goods, but it is not a universal instruction for structured, delicate or fragile items. Reinforcement can add both weight and dimensions. Ask what the available option actually includes rather than assuming a reassuring label describes a particular material or protection level.',
 'Avoid contradictory requests such as preserve every retail box and minimise all volume at any cost. Set priorities explicitly: which packaging is essential, which can be removed, and which product surfaces need protection. Keep a screenshot or copy of the final instruction so that the returned packing plan has a clear reference.'
 ]},
 {short:'Read the result',heading:'4. Review the measurements and contents together',paragraphs:[
 'When a result is available, first confirm that it covers the intended products and quantities. Then record the packed scale weight, external dimensions, chosen packing options and any available photographs. Check units carefully: a value in grams is not kilograms, and centimetres must not be mixed with millimetres in a volume calculation.',
 'If dimensions or the packing description are missing, ask for the specific input needed for your decision. A single total price does not explain whether the route used actual weight, volumetric weight, a minimum or another charge. Keep the original estimate and measured result as separate records so that the source of a change remains visible.',
 'Do not assume a higher measured figure is automatically an error. The original estimate may have excluded packaging or understated volume. Conversely, a lower weight does not prove the final bill will fall by the same percentage because routes can use increments, minimums and separate service charges.'
 ]},
 {short:'Worked example',heading:'5. Recalculate with the selected route’s actual rule',paragraphs:[
 'The general dimensional formula is length × width × height divided by the route’s stated divisor. The units and divisor must come from that route. For a transparent example only, assume centimetres, a divisor of 5,000 and charging by the greater of actual and dimensional weight.',
 'A 40 × 30 × 30 cm parcel gives 7.2 kg dimensional weight. If its actual weight is 4.8 kg, the example route would start from 7.2 kg before rounding. A revised 40 × 30 × 24 cm parcel gives 5.76 kg. The difference is 1.44 kg in the comparison basis; it is not a price quote or a guaranteed saving from rehearsal.',
 'To decide whether the change is worthwhile, apply the current tariff and rounding rules to both versions, then include any extra packing or service fee. If protection or eligibility deteriorates, a smaller dimensional number is not enough to justify the change. Save the two sets of inputs beside the decision.'
 ]},
 {short:'Final approval',heading:'6. Confirm the final parcel before paying for delivery',paragraphs:[
 'Compare the available routes using the same measured parcel and destination. Check accepted contents, size limits, included services and any unresolved destination charges. Confirm whether a change of route or packaging requires a new measurement or a new request. Use the current terms rather than assuming an old tutorial still matches the interface.',
 'Before final approval, make sure the parcel record, packing result and quote describe the same shipment. Save the confirmation and later carrier number. If you decide not to proceed, check the platform’s current cancellation or repacking process before submitting another request, so duplicate instructions do not create confusion.'
 ]}
 ],decisionTitle:'Rehearsal comparison sheet',decision:[
 'Record the included item references, packing instructions, destination, service fee, before-and-after weights, external dimensions, route divisor and quote. Add a short decision explaining why the chosen packing balances protection and cost.',
 'The useful outcome is better evidence, even when the quote does not decrease. Approve a parcel because its contents, measurements and route conditions are understood. If an input remains unresolved, obtain that specific answer instead of treating the rehearsal label as a complete guarantee.'
 ],nextTitle:'Compare the destination requirements',nextCopy:'Use the shipping overview to continue with the country and route checks.',nextHref:'/shipping/',nextLabel:'Plan shipping'
},
{
 slug:'hipobuy-tracking',title:'HipoBuy Tracking: Order Status and Parcel Updates',
 metaTitle:'HipoBuy Tracking: Parcel Status & Next Steps',
 description:'Understand HipoBuy order and parcel tracking, distinguish label creation from carrier acceptance and prepare a useful support request when updates stop.',
 kicker:'TRACKING / DELIVERY',readTime:9,
 lead:'First identify whether you are following a purchase, a warehouse parcel or a carrier shipment. Use the reference for that stage and read the last event with its timestamp before deciding what to do next.',
 intro:[
 'HipoBuy tracking questions often start with the wrong identifier. A purchase can have an internal order reference before there is an international parcel. A packed parcel can have a platform reference before a carrier has physically accepted it. Those records describe different stages, so an order number that fails on a carrier website does not establish that a package is missing.',
 'This guide helps you classify the stage, preserve a clear event record and choose the next useful check. It is not a live tracking service and cannot access your order. Use the platform parcel page and the official carrier channel for the actual status, then use the method here to interpret what is known and what remains uncertain.'
 ],sections:[
 {short:'Choose the number',heading:'1. Separate order, parcel and carrier references',paragraphs:[
 'An order reference identifies the purchase and is useful for seller dispatch, warehouse arrival and product questions. A platform parcel reference identifies the group of warehouse items submitted for international delivery. A carrier tracking number identifies the shipment within the named carrier’s system. Keep all three in different fields rather than replacing one with another.',
 'Open the relevant order or parcel in your account and copy the reference exactly. Remove accidental spaces introduced by copying, but do not guess a different number or change its characters. Use the carrier specified for that reference. If no carrier number has been issued, check the preparation stage in the platform rather than entering an internal reference into unrelated tracking sites.'
 ],checklist:['Purchase reference saved separately','International parcel reference saved','Carrier name and tracking number paired','Latest event text and timestamp copied']},
 {short:'Before dispatch',heading:'2. Read warehouse and preparation statuses in context',paragraphs:[
 'A purchased item, seller dispatch, warehouse arrival, QC review and parcel preparation are separate events. The exact labels vary by interface, but the practical distinction remains: the item must be received and included in a parcel before international carrier events can describe its journey. Check which products the parcel actually contains.',
 'If preparation appears paused, look for a pending payment, missing instruction, product review or other explicit action in the account. Do not assume a generic processing label names a particular problem. Ask support for the outstanding step, using the order or parcel reference appropriate to that stage. Repeatedly creating new parcels can complicate the record instead of accelerating the existing one.'
 ]},
 {short:'Carrier events',heading:'3. Distinguish electronic data from physical movement',paragraphs:[
 'A label-created or information-received event usually describes data supplied to a carrier. It is different from an acceptance scan showing physical possession. Later events may describe processing, departure, arrival, a handoff, delivery preparation or delivery. Read the actual wording rather than inferring movement from a colourful progress bar.',
 'Compare timestamps and time zones when two systems appear to disagree. A platform may display a translated summary while a carrier shows a more detailed local event. Save both when the difference matters. The newest visible event is evidence of a recorded action, not continuous live location.',
 'For example, a Monday label event followed by a Wednesday acceptance scan should be recorded as two stages. The interval is not automatically two days of international transit. This hypothetical example illustrates event interpretation; it does not establish a normal HipoBuy dispatch timetable.'
 ]},
 {short:'No new updates',heading:'4. Investigate a quiet tracking period without guessing',paragraphs:[
 'Start with the last event, its date and the selected route’s current stated range or service notice. Check whether the parcel is still in preparation, awaiting physical acceptance, moving between hubs or awaiting a delivery-stage action. A gap can have different explanations at each stage. Do not apply a universal number of silent days to every route.',
 'Open the official carrier tracking page yourself and compare it with the platform. Check for a replacement or local tracking number if a handoff is recorded. If the actual timeframe exceeds the applicable estimate or an explicit problem appears, contact the platform or carrier through its verified channel and ask for the next action.',
 'A useful request includes the parcel reference, carrier and tracking number, last visible event with timestamp, selected route and the discrepancy you want resolved. Avoid posting the full address, label barcode or identity documents in public discussions. The evidence should make the parcel easy to identify without exposing unnecessary personal data.'
 ]},
 {short:'Action required',heading:'5. Handle address, document and payment requests carefully',paragraphs:[
 'When a status asks for information, read the exact request and deadline in the verified account or carrier channel. Correct an address issue through the responsible service rather than replying to an unexpected message with personal details. If documents are required, use the official upload process and check that the request refers to your parcel.',
 'For a payment notification, independently open the platform or carrier site and verify the reference and charge. Do not treat a message that knows your first name as proof of legitimacy. Keep the invoice or receipt and the relevant route terms so an unexpected amount can be discussed with a clear record.',
 'A customs-related status does not by itself prove a particular outcome or tax amount. Follow the current instructions from the responsible authority or carrier. Use accurate descriptions and transaction records; do not invent a value or alter a document to match a claim from another buyer.'
 ]},
 {short:'Delivery issues',heading:'6. Preserve evidence when delivery does not match the record',paragraphs:[
 'If tracking shows delivered but the parcel is not visible, check the recorded delivery location, household members, building reception and any official proof of delivery available. Verify that the destination in the order is correct. Report an unresolved discrepancy promptly through the carrier and platform process instead of waiting for an arbitrary deadline from an unrelated guide.',
 'For damaged or incomplete contents, keep the outer packaging, label and packing material. Photograph the parcel and contents in a way that shows the issue and preserve the order and parcel records. Follow the service’s current reporting requirements and time limits. Photographs support a claim but do not guarantee that it will be accepted.',
 'After resolution, retain the event timeline and final response. This helps distinguish a product issue from a transport issue in future decisions. It also gives you better information than relying on a remembered delivery duration when planning another order.'
 ]}
 ],decisionTitle:'Tracking support note',decision:[
 'Prepare a short note with: parcel reference; selected route; carrier and number; last event and timestamp; expected stage; action already checked; and the exact help needed. Keep the purchase reference separately for any product question. Use private verified support for personal information.',
 'The next step should follow the evidence: complete an account action, check the correct carrier, respond to a verified request or report a documented discrepancy. A tracking gap alone is not enough to declare a parcel lost, and a label alone is not enough to declare it in transit.'
 ],nextTitle:'Check the packing record behind the shipment',nextCopy:'The rehearsal guide explains which item and measurement records to keep before dispatch.',nextHref:'/articles/hipobuy-rehearsal-parcel/',nextLabel:'Review parcel preparation'
}
];
