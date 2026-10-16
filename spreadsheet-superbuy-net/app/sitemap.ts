import type {MetadataRoute} from 'next';
import {languages,pageKeys,origin,routeFor,localPath,languageAlternates} from './routing';
import {slugs,getArticle} from './catalog';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap {return languages.flatMap(lang=>[...pageKeys.map(page=>({url:origin+localPath(lang,routeFor(page)),lastModified:new Date('2026-10-16'),alternates:{languages:languageAlternates(routeFor(page))}})),...slugs.map(slug=>({url:origin+localPath(lang,routeFor('article',slug)),lastModified:new Date(getArticle(lang,slug).modified),alternates:{languages:languageAlternates(routeFor('article',slug))}}))]);}
