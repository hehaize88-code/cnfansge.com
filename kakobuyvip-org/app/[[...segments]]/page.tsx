import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { SiteView } from '../site-view';
import { copy, localeCodes, localPath, pagePaths, type Locale, type PageKey } from '../site-data';
import { articleDates, getArticle, type ArticlePageKey } from '../article-registry';
import { seoPageIntro } from '../research-copy';

const homeTitles:Record<Locale,string>={en:'Kakobuy Spreadsheet, QC Photos & Shipping Guides',de:'Kakobuy Spreadsheet, QC-Fotos & Versandratgeber',es:'Kakobuy: hoja de productos, fotos QC y envío',fr:'Kakobuy : tableur, photos QC et livraison',it:'Kakobuy: foglio prodotti, foto QC e spedizione'};
const homeDescriptions:Record<Locale,string>={en:'Explore Kakobuy product links, inspect QC photos and plan shipping costs. Independent guides to fees, Taobao and Weidian links, tracking and warehouse decisions.',de:'Kakobuy-Produktlinks entdecken, QC-Fotos prüfen und Versandkosten planen. Unabhängige Hilfen zu Gebühren, Taobao, Weidian, Tracking und Lagerung.',es:'Explora enlaces Kakobuy, revisa fotos QC y calcula el envío. Guías independientes de comisiones, Taobao, Weidian, seguimiento y almacén.',fr:'Explorez les liens Kakobuy, vérifiez les photos QC et préparez le budget. Guides indépendants sur frais, Taobao, Weidian, suivi et entrepôt.',it:'Esplora link Kakobuy, controlla foto QC e pianifica la spedizione. Guide indipendenti a costi, Taobao, Weidian, tracking e magazzino.'};
function resolve(raw?:string[]):{locale:Locale;page:PageKey}|null{
 const segments=[...(raw??[])];
 const locale:Locale=localeCodes.includes(segments[0] as Locale)?segments.shift() as Locale:'en';
 const entry=(Object.entries(pagePaths) as [PageKey,string][]).find(([,v])=>v===segments.join('/'));
 return entry?{locale,page:entry[0]}:null;
}
export async function generateMetadata({params}:{params:Promise<{segments?:string[]}>}):Promise<Metadata>{
 const route=resolve((await params).segments);if(!route)return {robots:{index:false,follow:false}};
 const {locale,page}=route;
 const article=page.endsWith('Article')?getArticle(locale,page as ArticlePageKey):null;
 const intro=page==='home'||article?null:seoPageIntro[locale][page as keyof typeof seoPageIntro.en];
 const title=page==='home'?homeTitles[locale]:article?.title??intro?.[0]??copy[locale].pageIntro.articles[0];
 const description=page==='home'?homeDescriptions[locale]:article?.lede??intro?.[1]??copy[locale].pageIntro.articles[1];
 const canonical=`https://kakobuyvip.org${localPath(locale,page)}`;
 const languages=Object.fromEntries(localeCodes.map(l=>[l,`https://kakobuyvip.org${localPath(l,page)}`]));
 const dates=article?articleDates(page as ArticlePageKey):null;
 return {title,description,robots:{index:true,follow:true},alternates:{canonical,languages:{...languages,'x-default':languages.en}},openGraph:{title,description,url:canonical,siteName:'Kakobuy VIP',locale:{en:'en_US',de:'de_DE',es:'es_ES',fr:'fr_FR',it:'it_IT'}[locale],type:article?'article':'website',...(dates?{publishedTime:dates.published,modifiedTime:dates.modified}:{})},twitter:{card:'summary',title,description}};
}
export default async function Page({params}:{params:Promise<{segments?:string[]}>}){
 const raw=(await params).segments;const route=resolve(raw);if(!route)notFound();
 if(raw?.[0]==='en')permanentRedirect(localPath('en',route.page));
 return <SiteView {...route}/>;
}
