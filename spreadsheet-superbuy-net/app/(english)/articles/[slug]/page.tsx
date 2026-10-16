import {SitePage} from '../../../site-client';
import {getArticle,slugs} from '../../../catalog';
import {pageMetadata} from '../../../seo';
export const dynamicParams=false;
export function generateStaticParams(){return slugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params,a=getArticle('en',slug);return pageMetadata(`/articles/${slug}/`,a.title,a.description,'en',true);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;return <SitePage page="article" slug={slug}/>;}
