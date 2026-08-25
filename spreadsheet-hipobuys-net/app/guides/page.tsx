import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../components/GuideLayout";

export const metadata: Metadata = { title: "Hipobuy Order Reconciliation Guides", description: "Evidence-led Hipobuy guides for source-to-order handoffs, warehouse intake discrepancies, QC clarification and item-to-parcel records.", alternates: { canonical: "/guides/" } };

export default function GuidesPage() { return <GuideLayout path="/guides/" kicker="Buyer library" title="Guides organized around real decisions." intro="No invented delivery promises, guaranteed quality claims or recycled sneaker news. Each guide explains a specific decision and identifies what must be checked again on the live platform.">
  <section className="formula-card"><div><p className="section-kicker">Research baseline · 25 August 2026</p><h2>What Hipobuy’s current public pages confirm</h2></div><p>The official app descriptions name Taobao and 1688 purchasing, 90 days of free storage, international shipping to more than 200 countries, professional buyers advertised as available 24/7 and a community hub. The app landing page promotes QC-photo search and displays PayPal, Klarna, Visa, Mastercard and JCB. Every guide below separates those platform statements from changing seller details and individual user experience.</p></section>
  <section className="guide-cards">{[
    ["Start here","How the shopping-agent workflow works","Understand source marketplace → purchasing → warehouse → QC → parcel → international delivery.","/spreadsheet/"],
    ["Warehouse","How to read Hipobuy QC photos","Use an eight-point visual checklist and know when standard photos are not enough.","/qc/"],
    ["Parcel","How to compare shipping lines","Compare eligibility, chargeable weight, timing, tracking, insurance and compensation terms.","/shipping/"],
    ["Storage","How to consolidate without creating a bulky parcel","Use storage time deliberately and estimate whether consolidation reduces the delivered cost.","/shipping/"],
    ["Sizing","Why a size label is not a measurement","Compare photographed dimensions with a garment you own before accepting warehouse QC.","/qc/"],
    ["Safety","What a spreadsheet can and cannot verify","Treat every product row as a discovery lead, then validate the seller and current source page.","/spreadsheet/"]
  ].map(([tag,title,desc,href],i)=><article key={title}><span>{String(i+1).padStart(2,"0")} / {tag}</span><h2>{title}</h2><p>{desc}</p><Link href={href}>Read guide →</Link></article>)}</section>
  <section className="editorial-note"><div><p className="section-kicker">Editorial standard</p><h2>What “fact checked” means here</h2></div><div><p>Platform features are attributed to Hipobuy’s official website, official app landing page or current Apple and Google store listings. Product details are treated as time-sensitive snapshots. Shipping, tax and customs guidance tells readers where uncertainty remains instead of presenting estimates as guarantees.</p><ul><li>Dates shown for platform and catalog checks</li><li>Official claims labelled as claims—not universal outcomes</li><li>Customer reviews used to identify recurring questions, never copied as fact</li><li>Clear independent-site disclosure</li><li>No claim that every seller has been tested</li><li>No fabricated quotation, price or delivery promise</li></ul></div></section>
  </GuideLayout>; }
