import type { Metadata } from "next";
import { SitePage } from "../../site-client";

const articleMeta:Record<string,{title:string;description:string}>={
  "spreadsheet-without-buying-blind":{title:"How to Use a Superbuy Spreadsheet Without Buying Blind",description:"A fact-checked workflow for reviewing Superbuy product links, exact options, warehouse evidence, storage dates and parcel decisions."},
  "qc-photo-checklist":{title:"Superbuy QC Photo Checklist: What to Inspect",description:"Use Superbuy warehouse photos to check visible identity, measurements, construction and completeness without overstating what QC can prove."},
  "shipping-cost-planning":{title:"Superbuy Shipping Cost: Plan Before You Submit",description:"Plan Superbuy international shipping with actual and volumetric weight, consolidation choices, live route eligibility and destination-specific costs."}
};

export function generateStaticParams(){ return ["spreadsheet-without-buying-blind","qc-photo-checklist","shipping-cost-planning"].map(slug=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const m=articleMeta[slug]||articleMeta["spreadsheet-without-buying-blind"];const url=`/articles/${slug}/`;return{title:m.title,description:m.description,alternates:{canonical:url},openGraph:{title:m.title,description:m.description,url,type:"article"},twitter:{card:"summary",title:m.title,description:m.description}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <SitePage page="article" slug={slug}/>; }
