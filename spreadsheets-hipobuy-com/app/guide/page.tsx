import PageHero from "../components/PageHero";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "How to Search a Hipobuy Spreadsheet | Step-by-Step Workflow",
  description: "Follow a six-stage Hipobuy spreadsheet workflow from product query and live listing checks to QC evidence and parcel decisions.",
  path: "/guide/",
});
const steps=[["Search","Use category filters or a specific product phrase. Shortlist several options instead of buying the first result."],["Open","Confirm the destination is the exact listing, not a generic marketplace homepage or an expired redirect."],["Translate","Read colour, size and batch labels. Never rely on the product image alone when options are machine translated."],["Order","Enter any required size note and keep a screenshot of the selected variation and seller page."],["Inspect","Compare warehouse photos with the listing, size chart and your own measurements. Request extra photos only for a specific decision."],["Ship","Review actual weight, volumetric weight, packaging and restrictions before selecting an available route."]];
export default function GuidePage(){return <><PageHero eyebrow="BUYER GUIDE" title="From product link to parcel decision." copy="A six-stage workflow that prevents the spreadsheet, seller listing, warehouse QC and shipping estimate from becoming one confused decision."/><section className="wrap stepList">{steps.map(([title,copy],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</section><div className="wrap actionPanel"><div><span className="kicker">READY TO START?</span><h2>Search the complete main index.</h2></div><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noreferrer">Open all products ↗</a></div></>}
