import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteView } from "../site-view";
import { copy, localeCodes, localPath, pagePaths, type Locale, type PageKey } from "../site-data";
import { articleData } from "../article-data";
import { officialWebsiteArticleData } from "../official-website-article";
import { trustArticleData, type TrustArticleKey } from "../trust-articles";
import { seoPageIntro } from "../research-copy";

const trustKeys = new Set<PageKey>(["legitArticle","reviewsArticle","safeArticle","scamClaimsArticle","helpCenterArticle","copycatArticle","policyTrackerArticle"]);
const homeTitles:Record<Locale,string>={
  en:"Kakobuy Review, Official Site & Evidence Guides 2026",
  de:"Kakobuy Erfahrungen, offizielle Website & Quellen 2026",
  es:"Kakobuy: Opiniones, web oficial y guías 2026",
  fr:"Kakobuy : avis, site officiel et guides 2026",
  it:"Kakobuy: recensioni, sito ufficiale e guide 2026",
};
const homeDescriptions:Record<Locale,string>={
  en:"Independent Kakobuy reviews, official website checks, policy tracking and evidence-led guides for safer research, QC and parcel decisions.",
  de:"Unabhängige Kakobuy-Erfahrungen, offizielle Website-Prüfung, Richtlinien-Tracking und belegbasierte Leitfäden.",
  es:"Opiniones independientes de Kakobuy, verificación de la web oficial, seguimiento de políticas y guías con evidencia.",
  fr:"Avis Kakobuy indépendants, vérification du site officiel, suivi des politiques et guides fondés sur des preuves.",
  it:"Recensioni Kakobuy indipendenti, verifica del sito ufficiale, monitoraggio delle politiche e guide basate su prove.",
};

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
  const article=page==="officialWebsiteArticle"?officialWebsiteArticleData[locale]:trustKeys.has(page)?trustArticleData[locale][page as TrustArticleKey]:page.endsWith("Article")?articleData[locale][page as "qcArticle"|"shippingArticle"|"storageArticle"]:null;
  const independent=page==="home"||page.endsWith("Article")?null:seoPageIntro[locale][page as keyof typeof seoPageIntro.en];
  const title=page==="home"?homeTitles[locale]:article?.title??independent?.[0]??copy[locale].pageIntro.articles[0];
  const description=page==="home"?homeDescriptions[locale]:article?.lede??independent?.[1]??copy[locale].pageIntro.articles[1];
  const languages=Object.fromEntries(localeCodes.map((l)=>[l,localPath(l,page)]));
  return {title,description,alternates:{canonical:localPath(locale,page),languages:{...languages,"x-default":localPath("en",page)}},openGraph:{title,description,type:page.endsWith("Article")?"article":"website"}};
}

export default async function Page({params}:{params:Promise<{segments?:string[]}>}) {
  const route=resolve((await params).segments);
  if(!route) notFound();
  return <SiteView {...route}/>;
}
