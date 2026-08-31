import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteView } from "../site-view";
import { copy, localeCodes, localPath, pagePaths, type Locale, type PageKey } from "../site-data";
import { articleData } from "../article-data";
import { officialWebsiteArticleData } from "../official-website-article";
import { seoPageIntro } from "../research-copy";

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
  const article=page==="officialWebsiteArticle"?officialWebsiteArticleData[locale]:page.endsWith("Article")?articleData[locale][page as "qcArticle"|"shippingArticle"|"storageArticle"]:null;
  const independent=page==="home"||page.endsWith("Article")?null:seoPageIntro[locale][page as keyof typeof seoPageIntro.en];
  const title=page==="home"?"Kakobuy Spreadsheet, Finds & QC Guide 2026":article?.title??independent?.[0]??copy[locale].pageIntro.articles[0];
  const description=page==="home"?copy[locale].heroBody:article?.lede??independent?.[1]??copy[locale].pageIntro.articles[1];
  const languages=Object.fromEntries(localeCodes.map((l)=>[l,localPath(l,page)]));
  return {title,description,alternates:{canonical:localPath(locale,page),languages:{...languages,"x-default":localPath("en",page)}},openGraph:{title,description,type:page.endsWith("Article")?"article":"website"}};
}

export default async function Page({params}:{params:Promise<{segments?:string[]}>}) {
  const route=resolve((await params).segments);
  if(!route) notFound();
  return <SiteView {...route}/>;
}
