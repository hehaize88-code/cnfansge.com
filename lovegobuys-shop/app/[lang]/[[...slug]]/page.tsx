import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle } from "../../article-copy";
import { ArticlePage } from "../../components/ArticlePage";
import { ContentPage } from "../../components/ContentPage";
import { HomePage } from "../../components/HomePage";
import { pageCopy } from "../../page-copy";
import { articleSlugs, languages, type Language } from "../../site-content";

import { seo } from "../../editorial-config";

type Params={lang:string;slug?:string[]};
const isLanguage=(value:string):value is Language=>languages.includes(value as Language);

export const dynamicParams=false;

export function generateStaticParams(){
  const pages=[[],["spreadsheet"],["finds"],["guide"],["qc"],["shipping"],["faq"],["articles"]];
  return languages.flatMap(lang=>[...pages,...articleSlugs.map(slug=>["articles",slug])].map(slug=>({lang,slug})));
}

export async function generateMetadata({params}:{params:Promise<Params>}):Promise<Metadata>{
  const {lang,slug=[]}=await params; if(!isLanguage(lang)) return {};
  const path=slug.join("/"); const article=slug[0]==="articles"&&slug[1]?getArticle(lang,slug[1]):null; const copy=slug.length===1?pageCopy[lang][slug[0]]:null;
  const title=article?.title??seo[lang].pages[path]??seo[lang].home; const description=article?.deck??copy?.deck??seo[lang].description;
  const suffix=path?`/${path}`:""; const availableLanguages=languages; const alternateLanguages=Object.fromEntries(availableLanguages.map(code=>[code,`/${code}${suffix}`]));
  return {title,description,openGraph:{title,description,url:`https://lovegobuys.shop/${lang}${suffix}`,type:article?"article":"website",siteName:"LoveGoBuy Field Guide",locale:{en:"en_US",de:"de_DE",es:"es_ES",fr:"fr_FR",it:"it_IT"}[lang]},robots:{index:true,follow:true},alternates:{canonical:`/${lang}${suffix}`,languages:{...alternateLanguages,"x-default":`/en${suffix}`}}};
}

export default async function LocalizedRoute({params}:{params:Promise<Params>}){
  const {lang,slug=[]}=await params; if(!isLanguage(lang)) notFound();
  if(slug.length===0) return <HomePage lang={lang} />;
  if(slug[0]==="articles"&&slug[1]&&slug.length===2){const article=getArticle(lang,slug[1]);if(!article)notFound();return <ArticlePage lang={lang} slug={slug[1]} article={article} />;}
  if(slug.length===1&&pageCopy[lang][slug[0]]) return <ContentPage lang={lang} slug={slug[0]} copy={pageCopy[lang][slug[0]]} />;
  notFound();
}
