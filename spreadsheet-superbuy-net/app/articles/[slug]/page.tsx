import type { Metadata } from "next";
import { SitePage } from "../../site-client";
import { articleMetaData, newArticleRows } from "../../article-library";

const articleMeta:Record<string,{title:string;description:string}>={
  "spreadsheet-without-buying-blind":{title:"How to Use a Superbuy Spreadsheet Without Buying Blind",description:"A fact-checked workflow for reviewing Superbuy product links, exact options, warehouse evidence, storage dates and parcel decisions."},
  "qc-photo-checklist":{title:"Superbuy QC Photo Checklist: What to Inspect",description:"Use Superbuy warehouse photos to check visible identity, measurements, construction and completeness without overstating what QC can prove."},
  "shipping-cost-planning":{title:"Superbuy Shipping Cost: Plan Before You Submit",description:"Plan Superbuy international shipping with actual and volumetric weight, consolidation choices, live route eligibility and destination-specific costs."}
  ,...articleMetaData
};

const slugs=["spreadsheet-without-buying-blind","qc-photo-checklist","shipping-cost-planning",...newArticleRows.map(x=>x[0])];
export function generateStaticParams(){ return slugs.map(slug=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const m=articleMeta[slug]||articleMeta["spreadsheet-without-buying-blind"];const url=`/articles/${slug}/`;return{title:m.title,description:m.description,alternates:{canonical:url},openGraph:{title:m.title,description:m.description,url,type:"article"},twitter:{card:"summary",title:m.title,description:m.description}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const m=articleMeta[slug]||articleMeta["spreadsheet-without-buying-blind"];const url=`https://spreadsheet-superbuy.net/articles/${slug}/`;const articleSchema={"@context":"https://schema.org","@type":"Article",headline:m.title,description:m.description,datePublished:"2026-09-14",dateModified:"2026-09-14",mainEntityOfPage:url,author:{"@type":"Organization",name:"Independent Spreadsheet Research"},publisher:{"@type":"Organization",name:"Independent Spreadsheet Research"}};const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://spreadsheet-superbuy.net/"},{"@type":"ListItem",position:2,name:"Articles",item:"https://spreadsheet-superbuy.net/articles/"},{"@type":"ListItem",position:3,name:m.title,item:url}]};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/><SitePage page="article" slug={slug}/></>;}
