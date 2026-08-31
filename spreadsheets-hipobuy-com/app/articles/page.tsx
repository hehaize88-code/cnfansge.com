import PageHero from "../components/PageHero";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Hipobuy Spreadsheet Search Guides | Queries, QC & Shipping",
  description: "Read independent Hipobuy guides covering spreadsheet search, listing checks, warehouse QC evidence and parcel planning.",
  path: "/articles/",
});
const articles=[["SEARCH","Hipobuy spreadsheet search query: from product idea to precise terms","Build a reproducible query, diagnose weak results and change one token at a time.","/articles/hipobuy-spreadsheet-search-query/"],["GUIDE","How to use a Hipobuy spreadsheet without buying blind","A start-to-finish method for product discovery, option checks, QC and parcel planning.","/articles/use-hipobuy-spreadsheet/"],["QC","Hipobuy QC photos: a category-by-category inspection method","Turn warehouse photos into a repeatable decision instead of a quick visual guess.","/qc/"],["SHIPPING","Hipobuy shipping estimates: weight, dimensions and route checks","Understand why a low product price says almost nothing about the delivered cost.","/shipping/"]];
export default function ArticlesPage(){return <><PageHero eyebrow="BUYER EDITORIAL" title="Useful content with a job to do." copy="Every guide answers a real buying question and links back to the relevant tool, checklist or product category."/><section className="wrap articleCards">{articles.map(([tag,title,copy,url],i)=><a href={url} key={title}><span>{tag} / {String(i+1).padStart(2,"0")}</span><h2>{title}</h2><p>{copy}</p><b>Read guide →</b></a>)}</section></>}
