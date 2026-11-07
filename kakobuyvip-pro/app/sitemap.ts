import type {MetadataRoute} from 'next';
import {localeCodes,localPath,pagePaths,type PageKey} from './site-data';
import {isArticle,articleModified} from './article-registry';
import {reviewDate} from './editorial-update';
export default function sitemap():MetadataRoute.Sitemap{
 return localeCodes.flatMap(locale=>(Object.keys(pagePaths) as PageKey[]).map(page=>({
 url:`https://kakobuyvip.pro${localPath(locale,page)}`,
 lastModified:new Date(isArticle(page)?articleModified(page):reviewDate),
 changeFrequency:page==='home'||page==='articles'?'weekly' as const:'monthly' as const,
 priority:page==='home'?1:isArticle(page)?0.8:0.9,
 alternates:{languages:Object.fromEntries([...localeCodes.map(l=>[l,`https://kakobuyvip.pro${localPath(l,page)}`]),['x-default',`https://kakobuyvip.pro${localPath('en',page)}`]])}
 })));
}
