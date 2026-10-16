import {notFound} from 'next/navigation';
import {SitePage} from '../../site-client';
import {getArticle,getUI,slugs} from '../../catalog';
import {languages,pageKeys,routeFor,type Lang,type PageKey} from '../../routing';
import {pageMetadata} from '../../seo';
export const dynamicParams=false;
export function generateStaticParams(){return languages.filter(l=>l!=='en').flatMap(lang=>[...pageKeys.map(p=>({lang,segments:p==='home'?[]:[p]})),...slugs.map(slug=>({lang,segments:['articles',slug]}))]);}
function resolve(lang:string,segments:string[]=[]){if(!languages.includes(lang as Lang)||lang==='en')notFound();let page:PageKey;if(!segments.length)page='home';else if(segments.length===1&&pageKeys.includes(segments[0] as any))page=segments[0] as PageKey;else if(segments.length===2&&segments[0]==='articles'&&slugs.includes(segments[1]))page='article';else notFound();return{lang:lang as Lang,page,slug:segments[1]||''};}
export async function generateMetadata({params}:{params:Promise<{lang:string;segments?:string[]}>}){const p=await params,{lang,page,slug}=resolve(p.lang,p.segments),t=getUI(lang),a=page==='article'?getArticle(lang,slug):undefined;return pageMetadata(routeFor(page,slug),a?.title||(page==='home'?t.hero:t.pageTitles[page]),a?.description||(page==='home'?t.intro:t.pageIntro[page]),lang,!!a);}
export default async function Page({params}:{params:Promise<{lang:string;segments?:string[]}>}){const p=await params;return <SitePage {...resolve(p.lang,p.segments)}/>;}
