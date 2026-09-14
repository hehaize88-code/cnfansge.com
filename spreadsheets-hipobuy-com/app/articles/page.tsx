import PageHero from "../components/PageHero";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "HipoBuy Spreadsheet Guides 2026 | Size, QC & Shipping",
  description: "Read HipoBuy spreadsheet guides for shoes, hoodies, jerseys and jackets, plus live-link checks, QC photos, pricing and shipping.",
  path: "/articles/",
});
const articles=[
  ["SHOES","HipoBuy spreadsheet shoes: find sizes and check QC photos","Choose a defensible size and inspect pair shape, symmetry, soles and measurements.","/articles/hipobuy-spreadsheet-shoes/"],
  ["LINKS","HipoBuy product links not working: check a live listing","Separate redirects, removed pages and changed products before finding a replacement.","/articles/hipobuy-links-not-working/"],
  ["QC","HipoBuy QC photos: match product ID, color and size","Check identity and selected options before judging measurements and construction.","/articles/hipobuy-qc-photos-product-id-color-size/"],
  ["HOODIES","HipoBuy spreadsheet hoodies: measurements, sizing and QC","Compare garment measurements, selected options, prints and visible construction.","/articles/hipobuy-spreadsheet-hoodies/"],
  ["JERSEYS","HipoBuy spreadsheet jerseys: sizing, versions and print QC","Record the exact version, nameset and badges before inspecting the warehouse item.","/articles/hipobuy-spreadsheet-jerseys/"],
  ["PRICE","HipoBuy spreadsheet price vs delivered cost","Separate product, domestic, service, packaging and international shipping inputs.","/articles/hipobuy-spreadsheet-price-delivered-cost/"],
  ["JACKETS","HipoBuy spreadsheet jackets: size, material and packaging","Check fit evidence and construction, then model bulky parcel packaging.","/articles/hipobuy-spreadsheet-jackets/"],
  ["SEARCH","HipoBuy spreadsheet search query: from idea to precise terms","Build a reproducible query, diagnose weak results and change one token at a time.","/articles/hipobuy-spreadsheet-search-query/"],
  ["START","How to use a HipoBuy spreadsheet without buying blind","A start-to-finish method for product discovery, option checks, QC and parcel planning.","/articles/use-hipobuy-spreadsheet/"],
];
export default function ArticlesPage(){return <><PageHero eyebrow="BUYER EDITORIAL" title="Useful content with a job to do." copy="Every guide answers a real buying question and links back to the relevant tool, checklist or product category."/><section className="wrap articleCards">{articles.map(([tag,title,copy,url],i)=><a href={url} key={title}><span>{tag} / {String(i+1).padStart(2,"0")}</span><h2>{title}</h2><p>{copy}</p><b>Read guide →</b></a>)}</section></>}
