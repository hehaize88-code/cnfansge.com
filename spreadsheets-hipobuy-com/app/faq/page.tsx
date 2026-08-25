import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Hipobuy Spreadsheet Search FAQ | Links, QC & Shipping",
  description: "Get direct answers about Hipobuy spreadsheet links, reference prices, sizing, QC photos, shipping estimates and official claims.",
  path: "/faq/",
});
const faqs=[["Is this the official Hipobuy website?","No. Spreadsheets Hipobuy is an independent discovery and education site. It does not process orders or payments."],["What does a checked link mean?","It means the destination page loaded when it was reviewed. Stock, option labels, price and seller status can still change."],["Are prices shown in USD?","Yes. They are reference conversions from the last observed source price and do not include service fees, exchange-rate changes or international shipping."],["Do product cards prove quality?","No. A card is a discovery record. Use warehouse photographs, measurements and the live listing before approving an item."],["How should I choose a size?","Compare the seller size chart with a garment you already own. Label-based sizing alone is not enough."],["What should I check in QC photos?","Start with selected options and measurements, then inspect shape, alignment, stitching, print, hardware and visible defects relevant to the category."],["How can I estimate shipping?","Use packed weight and dimensions, destination and item restrictions. Compare the services included rather than only the lowest displayed number."],["What does Hipobuy officially advertise?","Its current official app listings describe 24/7 purchasing assistance, 90 days of free storage, service to more than 200 countries and delivery advertised as fast as five days. These are platform-wide statements, not parcel guarantees."],["Why can a product link stop working?","Sellers remove listings, change inventory or replace products. That is why every row needs a check date and why the live page must be confirmed before payment."]];
const faqSchema = [
  breadcrumbSchema("FAQ", "/faq/"),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
];

export default function FAQPage(){return <><JsonLd data={faqSchema}/><PageHero eyebrow="QUESTIONS / ANSWERED" title="Clear answers before you buy." copy="No invented guarantees and no confusing platform claims. These answers separate product discovery, purchasing, QC and shipping."/><section className="wrap faqList">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section></>}
