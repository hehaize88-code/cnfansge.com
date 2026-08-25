import type { Metadata } from "next";
import GuideLayout from "../components/GuideLayout";

export const metadata: Metadata = { title: "Hipobuy Spreadsheet FAQ", description: "Answers about Hipobuy spreadsheets, source links, QC photos, storage, shipping estimates, returns, taxes and independent-site status.", alternates: { canonical: "/faq/" } };

const faqs = [
  ["Is this the official Hipobuy website?","No. Hipo Index is an independent product-discovery and education resource. The official Hipobuy domain is hipobuy.com."],
  ["What is a Hipobuy spreadsheet?","It is an organized directory of product links from Chinese marketplaces. It can make discovery faster, but it does not prove seller reliability or product quality."],
  ["Can I buy directly from this website?","No. This site does not process payments or handle orders. Product cards open third-party source or product-index pages where you can continue the workflow."],
  ["Which marketplaces does Hipobuy say it supports?","The current Apple App Store and Google Play descriptions specifically name Taobao and 1688. A live source page can still change or become unavailable, so verify the exact listing before submitting an order."],
  ["Are prices and availability live?","Treat every displayed value as a snapshot. Sellers can change price, variants, domestic delivery and availability without notice, so verify the exact listing before paying."],
  ["Does Hipobuy provide QC photos?","Hipobuy’s public app landing page promotes finding products and viewing QC photos first. The number, angle and usefulness of images can vary by item, so compare the available set with your saved listing and order record."],
  ["How long can purchases stay in the warehouse?","Hipobuy’s official app listing states 90 days of free storage. Check the current account terms before relying on that window because platform policies can change."],
  ["Does Hipobuy ship worldwide?","The official app descriptions advertise delivery to more than 200 countries. That does not mean every line, item category or service is available to every destination; eligibility depends on the actual parcel and current route rules."],
  ["Does Hipobuy guarantee five-day delivery?","No. The official app description says delivery can be as fast as five days. That is a possible best-case platform claim, not a guarantee for every route. Use the estimate shown for the selected line and allow for customs and carrier delays."],
  ["Which shipping line should I choose?","There is no universally best line. Compare eligibility, chargeable weight, destination, restrictions, estimated timing, tracking, insurance and compensation terms for the actual parcel."],
  ["Are tax and customs included?","That depends on destination rules and the selected shipping service. Verify current official local guidance; do not rely on a spreadsheet for legal or tax advice."],
  ["Which payment methods are shown by Hipobuy?","The current app landing page displays PayPal, Klarna, Visa, Mastercard and JCB. Availability can vary by account or region, and this independent site does not process payment."],
  ["Can QC photos guarantee quality?","No. Photos can show visible condition, measurements and order matching, but cannot prove comfort, material composition or long-term durability."],
  ["What do public app reviews say?","Current Apple and Google store reviews are mixed. Recurring themes include workflow usability, shipping cost, communication and app performance. A review describes one order or device experience; use it to form questions, not as a universal verdict."],
  ["Can every warehouse item be returned?","Do not assume so. Return eligibility and timing can depend on the seller, marketplace terms, product condition and the current platform process. Check the live terms and submit a documented request before international shipping when a clear issue appears."],
  ["What should I do when a listing is unavailable?","Do not replace it blindly with a similarly titled product. Search the category again and compare the new source page, seller details, variants and price from the beginning."]
];

export default function FAQPage() {
  const schema = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}})) };
  return <GuideLayout kicker="Buyer questions" title="Clear answers, with the uncertainty left visible." intro="The goal is to help you make a better check—not to turn changing platform terms, seller listings or shipping estimates into guarantees." accent="lime">
    <section className="full-faq"><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}</summary><p>{a}</p></details>)}</div><aside><p className="section-kicker">Still searching?</p><h2>Open the complete product index.</h2><p>Search by product name or browse the matching category, then verify the live source listing.</p><a href="https://cnfansge.com/AllProducts/">Browse catalog ↗</a></aside></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </GuideLayout>;
}
