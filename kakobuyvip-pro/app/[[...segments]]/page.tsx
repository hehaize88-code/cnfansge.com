import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteView } from "../site-view";
import { copy, localeCodes, localPath, pagePaths, type Locale, type PageKey } from "../site-data";
import { articleData } from "../article-data";
import { seoPageIntro } from "../research-copy";
import { decisions, decisionKeys, proHome, type DecisionKey } from "../pro-data";

function resolve(raw: string[] | undefined): { locale:Locale; page:PageKey } | null {
  const segments=[...(raw||[])];
  const first=segments[0];
  const locale:Locale=localeCodes.includes(first as Locale)?segments.shift() as Locale:"en";
  const path=segments.join("/");
  const entry=(Object.entries(pagePaths) as [PageKey,string][]).find(([,value])=>value===path);
  return entry?{locale,page:entry[0]}:null;
}

export async function generateMetadata({params}:{params:Promise<{segments?:string[]}>}):Promise<Metadata> {
  const route=resolve((await params).segments);
  if(!route) return {};
  const {locale,page}=route;
  const article=page.endsWith("Article")?articleData[locale][page as "qcArticle"|"shippingArticle"|"storageArticle"]:null;
  const decision=decisionKeys.includes(page as DecisionKey)?decisions[locale][page as DecisionKey]:null;
  const independent=page==="home"||page.endsWith("Article")||decision?null:seoPageIntro[locale][page as keyof typeof seoPageIntro.en];
  const title=page==="home"?"Kakobuy Shipping Calculator, Warehouse & Returns Guide 2026":article?.title??decision?.title??independent?.[0]??copy[locale].pageIntro.articles[0];
  const description=page==="home"?proHome[locale].body:article?.lede??decision?.description??independent?.[1]??copy[locale].pageIntro.articles[1];
  const languages=Object.fromEntries(localeCodes.map((l)=>[l,localPath(l,page)]));
  return {title,description,alternates:{canonical:localPath(locale,page),languages:{...languages,"x-default":localPath("en",page)}},openGraph:{title,description,type:page.endsWith("Article")?"article":"website"}};
}

export default async function Page({params}:{params:Promise<{segments?:string[]}>}) {
  const route=resolve((await params).segments);
  if(!route) notFound();
  return <SiteView {...route}/>;
}
