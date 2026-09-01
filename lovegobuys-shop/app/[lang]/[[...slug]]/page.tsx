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

export const dynamicParams=false;

export function generateStaticParams(){
  const pages=[[],["spreadsheet"],["finds"],["guide"],["qc"],["shipping"],["faq"],["articles"]];
  const articles=articleSlugs.map(slug=>["articles",slug]);
  return languages.flatMap(lang=>[...pages,...articles].map(slug=>({lang,slug})));
}

export async function generateMetadata({params}:{params:Promise<Params>}):Promise<Metadata>{
  const {lang,slug=[]}=await params; if(!isLanguage(lang)) return {};
  const path=slug.join("/"); const article=slug[0]==="articles"&&slug[1]?getArticle(lang,slug[1]):null; const copy=slug.length===1?pageCopy[lang][slug[0]]:null;
  const title=article?.title??copy?.title??"LoveGoBuy Finds & QC Guide"; const description=article?.deck??copy?.deck??"Independent LoveGoBuy spreadsheet, finds, QC and shipping research guide.";
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
