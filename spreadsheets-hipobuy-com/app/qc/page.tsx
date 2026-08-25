import PageHero from "../components/PageHero";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Hipobuy QC Decision Checklist | Clothing, Shoes & Bags",
  description: "Use a category-specific Hipobuy QC checklist for clothing, shoes, bags and targeted extra-photo decisions.",
  path: "/qc/",
});
const groups=[["Clothing","Front and back alignment","Chest width and length","Stitching and loose threads","Print or embroidery edges"],["Shoes","Pair symmetry","Toe shape and heel alignment","Size tag and insole length","Glue, sole and stitching"],["Bags & accessories","Overall dimensions","Hardware colour and finish","Zip and closure alignment","Interior labels and construction"],["Before approval","Match the selected option","Compare seller and QC photos","Request a targeted extra photo","Record the final decision"]];
export default function QCPage(){return <><PageHero eyebrow="QC CHECKLIST" title="Approve evidence, not expectations." copy="Warehouse photos are a decision tool. Use a short category-specific checklist and focus extra-photo requests on issues that could change your decision."/><section className="wrap qcGrid">{groups.map(([title,...items],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h2>{title}</h2><ul>{items.map(x=><li key={x}>✓ {x}</li>)}</ul></article>)}</section><aside className="wrap notice"><b>Important:</b> A clean warehouse photo does not prove authenticity, long-term durability or exact colour under different lighting. Hipobuy’s own company description lists quality inspection as part of its service; that describes service scope, not a quality guarantee.</aside></>}
