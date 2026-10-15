import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteView } from "../site-view";
import { copy, localeCodes, localPath, pagePaths, type Locale, type PageKey } from "../site-data";
import { seoPageIntro } from "../research-copy";
import { decisions, decisionKeys, proHome, type DecisionKey } from "../pro-data";
import { getArticle, isArticle, articleDates } from "../article-registry";

const origin="https://kakobuyvip.pro";
const homeTitles:Record<Locale,string>={en:"Kakobuy Shipping Calculator, Storage & QC Guides",de:"Kakobuy: Versandrechner, Lagerung und QC-Leitfäden",es:"Kakobuy: calculadora de envío, almacén y guías QC",fr:"Kakobuy : calculateur, stockage et guides QC",it:"Kakobuy: calcolatore spedizione, deposito e guide QC"};

export function resolve(raw: string[] | undefined): { locale:Locale; page:PageKey } | null {
  const segments=[...(raw||[])];
  const first=segments[0];
  const locale:Locale=localeCodes.includes(first as Locale)?segments.shift() as Locale:"en";
  const path=segments.join("/");
  const entry=(Object.entries(pagePaths) as [PageKey,string][]).find(([,value])=>value===path);
  return entry?{locale,page:entry[0]}:null;
}
function compact(text:string,max:number){
  if(text.length<=max) return text;
  const slice=text.slice(0,max-1);const boundary=slice.lastIndexOf(" ");
  return `${slice.slice(0,boundary>34?boundary:max-1).replace(/[,:;\-–—]+$/u,"")}…`;
}
export async function generateMetadata({params}:{params:Promise<{segments?:string[]}>}):Promise<Metadata> {
  const route=resolve((await params).segments);
  if(!route) return {title:"Page not found | Kakobuy VIP",robots:{index:false,follow:false}};
  const {locale,page}=route;
  const article=isArticle(page)?getArticle(locale,page):null;
  const decision=decisionKeys.includes(page as DecisionKey)?decisions[locale][page as DecisionKey]:null;
  const intro=page==="home"||article||decision?null:seoPageIntro[locale][page as keyof typeof seoPageIntro.en];
  const title=page==="home"?homeTitles[locale]:article?.title??decision?.title??intro?.[0]??copy[locale].pageIntro.articles[0];
  const description=compact(page==="home"?proHome[locale].body:article?.description??article?.lede??decision?.description??intro?.[1]??copy[locale].pageIntro.articles[1],160);
  const canonical=origin+localPath(locale,page);
  const languages=Object.fromEntries(localeCodes.map(l=>[l,origin+localPath(l,page)]));
  const dates=isArticle(page)?articleDates(page):null;
  const images=[{url:origin+"/og.png",width:1200,height:630,alt:title}];
  return {title:{absolute:title},description,alternates:{canonical,languages:{...languages,"x-default":origin+localPath("en",page)}},openGraph:{title,description,url:canonical,type:article?"article":"website",locale,images,...(dates?{publishedTime:dates.published,modifiedTime:dates.modified}:{})},twitter:{card:"summary_large_image",title,description,images:[origin+"/og.png"]}};
}
export default async function Page({params}:{params:Promise<{segments?:string[]}>}) {
  const route=resolve((await params).segments);if(!route) notFound();
  return <SiteView {...route}/>;
}
