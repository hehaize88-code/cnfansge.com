import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteView } from "../site-view";
import { copy, localeCodes, localPath, pagePaths, type Locale, type PageKey } from "../site-data";
import { articleData } from "../article-data";
import { seoPageIntro } from "../research-copy";
import { decisions, decisionKeys, proHome, type DecisionKey } from "../pro-data";
import { orderIdentifiersArticleData } from "../order-identifiers-article";
import { orderTimelineArticleData } from "../order-timeline-article";
import { sellerHandoffArticleData } from "../seller-handoff-article";

function resolve(raw: string[] | undefined): { locale:Locale; page:PageKey } | null {
  const segments=[...(raw||[])];
  const first=segments[0];
  const locale:Locale=localeCodes.includes(first as Locale)?segments.shift() as Locale:"en";
  const path=segments.join("/");
  const entry=(Object.entries(pagePaths) as [PageKey,string][]).find(([,value])=>value===path);
  return entry?{locale,page:entry[0]}:null;
}

function compact(text:string,max:number){
  if(text.length<=max) return text;
  const slice=text.slice(0,max-1);
  const boundary=slice.lastIndexOf(" ");
  return `${slice.slice(0,boundary>34?boundary:max-1).replace(/[,:;\-–—]+$/u,"")}…`;
}

const conciseArticleTitles:Partial<Record<PageKey,string>>={
  qcArticle:"Kakobuy Spreadsheet & QC Decision Guide",
  shippingArticle:"Kakobuy Shipping Calculator: Weight & Parcel Cost",
  storageArticle:"Kakobuy Warehouse Status & Parcel Packing Guide",
  orderIdentifiersArticle:"Kakobuy Order vs Parcel vs Tracking Number Guide",
  orderTimelineArticle:"Kakobuy Order Timeline: Minimum Record Fields",
  sellerHandoffArticle:"Kakobuy Purchased vs Seller Sent: First Handoff",
};

export async function generateMetadata({params}:{params:Promise<{segments?:string[]}>}):Promise<Metadata> {
  const route=resolve((await params).segments);
  if(!route) return {};
  const {locale,page}=route;
  const article=page==="orderIdentifiersArticle"?orderIdentifiersArticleData[locale]:page==="orderTimelineArticle"?orderTimelineArticleData[locale]:page==="sellerHandoffArticle"?sellerHandoffArticleData[locale]:page.endsWith("Article")?articleData[locale][page as "qcArticle"|"shippingArticle"|"storageArticle"]:null;
  const decision=decisionKeys.includes(page as DecisionKey)?decisions[locale][page as DecisionKey]:null;
  const independent=page==="home"||page.endsWith("Article")||decision?null:seoPageIntro[locale][page as keyof typeof seoPageIntro.en];
  const rawTitle=page==="home"?"Kakobuy Shipping Calculator & Warehouse Guide":article?.title??decision?.title??independent?.[0]??copy[locale].pageIntro.articles[0];
  const title=locale==="en"&&conciseArticleTitles[page]?conciseArticleTitles[page]!:compact(rawTitle,60);
  const rawDescription=page==="home"?proHome[locale].body:article?.lede??decision?.description??independent?.[1]??copy[locale].pageIntro.articles[1];
  const description=compact(rawDescription,155);
  const languages=Object.fromEntries(localeCodes.map((l)=>[l,localPath(l,page)]));
  const socialImage={url:"/og.png",width:1200,height:630,alt:"Kakobuy VIP Pro — Shipping, Warehouse and Parcel Guides"};
  return {title:{absolute:title},description,alternates:{canonical:localPath(locale,page),languages:{...languages,"x-default":localPath("en",page)}},openGraph:{title,description,type:page.endsWith("Article")?"article":"website",images:[socialImage]},twitter:{card:"summary_large_image",title,description,images:["/og.png"]}};
}

export default async function Page({params}:{params:Promise<{segments?:string[]}>}) {
  const route=resolve((await params).segments);
  if(!route) notFound();
  return <SiteView {...route}/>;
}
