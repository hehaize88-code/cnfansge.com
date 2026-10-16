import type { MetadataRoute } from 'next';
import { articles } from './articles/articleData';
export const dynamic='force-static';
const origin='https://spreadsheets-hipobuy.com';
const languages=['en','de','fr','es','it'];
const routes=['/','/spreadsheet/','/finds/','/articles/','/guide/','/qc/','/shipping/','/faq/','/articles/use-hipobuy-spreadsheet/','/articles/hipobuy-spreadsheet-search-query/',...articles.map(a=>`/articles/${a.slug}/`)];
export default function sitemap():MetadataRoute.Sitemap{return routes.flatMap(route=>languages.map(lang=>({url:origin+(lang==='en'?'':`/${lang}`)+route,lastModified:'2026-10-16',alternates:{languages:Object.fromEntries([...languages.map(l=>[l,origin+(l==='en'?'':`/${l}`)+route]),['x-default',origin+route]])}})))}
