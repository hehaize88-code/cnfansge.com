import type { MetadataRoute } from 'next';
import { localeCodes, localPath, pagePaths, type PageKey } from './site-data';
import { articleDates, type ArticlePageKey } from './article-registry';
export default function sitemap():MetadataRoute.Sitemap{
 return localeCodes.flatMap(locale=>(Object.keys(pagePaths) as PageKey[]).map(page=>({
  url:`https://kakobuyvip.org${localPath(locale,page)}`,
  lastModified:page.endsWith('Article')?articleDates(page as ArticlePageKey).modified:'2026-10-13',
  alternates:{languages:Object.fromEntries([...localeCodes.map(l=>[l,`https://kakobuyvip.org${localPath(l,page)}`]),['x-default',`https://kakobuyvip.org${localPath('en',page)}`]])}
 })));
}
