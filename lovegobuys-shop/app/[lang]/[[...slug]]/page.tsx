import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle } from "../../article-copy";
import { ArticlePage } from "../../components/ArticlePage";
import { ContentPage } from "../../components/ContentPage";
import { HomePage } from "../../components/HomePage";
import { pageCopy } from "../../page-copy";
import { articleSlugs, languages, type Language } from "../../site-content";

type Params={lang:string;slug?:string[]};
const isLanguage=(value:string):value is Language=>languages.includes(value as Language);

const homeMetadata:Record<Language,{title:string;description:string}>={
  en:{title:"LoveGoBuy QC Checker & Product Measurement Guide 2026",description:"Independent LoveGoBuy QC photo, sizing, product measurement, variant and chargeable-weight research for better pre-purchase decisions."},
  de:{title:"LoveGoBuy QC-Prüfer & Produktmaß-Ratgeber 2026",description:"Unabhängige Recherche zu LoveGoBuy-QC-Fotos, Größen, Produktmaßen, Varianten und abrechenbarem Gewicht vor der Produktauswahl."},
  es:{title:"Verificador QC LoveGoBuy y guía de medidas 2026",description:"Investigación independiente sobre fotos QC, tallas, medidas, variantes y peso facturable de LoveGoBuy antes de elegir un producto."},
  fr:{title:"Vérificateur QC LoveGoBuy et guide des mesures 2026",description:"Recherche indépendante sur les photos QC, tailles, mesures, variantes et poids facturable LoveGoBuy avant de choisir un produit."},
  it:{title:"Controllo QC LoveGoBuy e guida alle misure 2026",description:"Ricerca indipendente su foto QC, taglie, misure, varianti e peso tassabile LoveGoBuy prima di scegliere un prodotto."},
};

export const dynamicParams=false;

export function generateStaticParams(){
  const pages=[[],["spreadsheet"],["finds"],["guide"],["qc"],["shipping"],["faq"],["articles"]];
  const articles=articleSlugs.map(slug=>["articles",slug]);
  return languages.flatMap(lang=>[...pages,...articles].map(slug=>({lang,slug})));
}

export async function generateMetadata({params}:{params:Promise<Params>}):Promise<Metadata>{
  const {lang,slug=[]}=await params; if(!isLanguage(lang)) return {};
  const path=slug.join("/"); const article=slug[0]==="articles"&&slug[1]?getArticle(lang,slug[1]):null; const copy=slug.length===1?pageCopy[lang][slug[0]]:null;
  const title=article?.title??copy?.title??homeMetadata[lang].title; const description=article?.deck??copy?.deck??homeMetadata[lang].description;
  const suffix=path?`/${path}`:""; const alternateLanguages=Object.fromEntries(languages.map(code=>[code,`/${code}${suffix}`]));
  return {title,description,robots:{index:true,follow:true},alternates:{canonical:`/${lang}${suffix}`,languages:{...alternateLanguages,"x-default":`/en${suffix}`}}};
}

export default async function LocalizedRoute({params}:{params:Promise<Params>}){
  const {lang,slug=[]}=await params; if(!isLanguage(lang)) notFound();
  if(slug.length===0) return <HomePage lang={lang} />;
  if(slug[0]==="articles"&&slug[1]&&slug.length===2){const article=getArticle(lang,slug[1]);if(!article)notFound();return <ArticlePage lang={lang} slug={slug[1]} article={article} />;}
  if(slug.length===1&&pageCopy[lang][slug[0]]) return <ContentPage lang={lang} slug={slug[0]} copy={pageCopy[lang][slug[0]]} />;
  notFound();
}
