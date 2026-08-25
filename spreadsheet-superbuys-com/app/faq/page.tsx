import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Superbuy Spreadsheet FAQ",
  description: "Clear answers about spreadsheet links, QC photos, warehouse storage, shipping estimates and independent-site status.",
  alternates: { canonical: "/faq/" },
};

const faqs = [
  ["Is spreadsheet-superbuys.com an official Superbuy site?", "No. It is an independent product discovery and buyer education site. It is not endorsed by Superbuy."],
  ["Where do product and category buttons go?", "They open the matching live catalog, category or product page. The external site does not redirect product clicks to unrelated marketplaces."],
  ["Are spreadsheet listings always in stock?", "No. Availability, seller pages, options and prices can change. Open the live destination and verify it at the time of ordering."],
  ["Does inclusion mean a product is authentic or high quality?", "No. Inclusion is not an authenticity, legality, quality or customs guarantee. Evaluate the seller listing and the received item independently."],
  ["What does Superbuy inspect at the warehouse?", "Superbuy’s public guide says warehouse staff inspect items and take photos. Use the photos for visible comparisons and ask for clarification when an important area is not shown."],
  ["How long does Superbuy store items for free?", "Its public English guidance currently states 90 days of free storage. Check your own account deadline and the latest policy before relying on it."],
  ["Is the first shipping quote final?", "Not necessarily. Superbuy describes the international charge first as a deposit based on estimates. Carrier-confirmed parcel size and weight determine the final amount, with the difference adjusted afterward."],
  ["Can consolidation always reduce cost?", "No. It can reduce repeated base charges, but a larger parcel may change volumetric weight, route eligibility, insurance or customs exposure."],
  ["What should I check in QC photos?", "Confirm the item, variant, quantity, visible size label, shape, symmetry, print placement, seams, surface damage and included accessories."],
  ["What can QC photos not prove?", "They cannot reliably prove authenticity, exact color, material composition, comfort, durability, internal construction or customs acceptance."],
];

export default function FaqPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return (
    <div className="site-shell">
      <Header />
      <main className="faq-page wrap">
        <header className="article-hero"><span className="kicker" data-i18n="faqEyebrow">CLEAR ANSWERS · NO SALES CLAIMS</span><h1 data-i18n="faqPageTitle">Superbuy spreadsheet FAQ</h1><p data-i18n="faqPageIntro">Current, practical answers for the questions that matter between finding a product and submitting an international parcel.</p></header>
        <section className="faq-list full-faq">{faqs.map(([q,a], index) => <details key={q} open={index === 0}><summary><span>{String(index + 1).padStart(2,"0")}</span><span data-i18n={`faqFullQ${index + 1}`}>{q}</span><b>+</b></summary><p data-i18n={`faqFullA${index + 1}`}>{a}</p></details>)}</section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <Footer />
    </div>
  );
}
