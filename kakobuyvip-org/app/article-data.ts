import revisedOriginals from './content/revised-originals.json';
import type { Locale } from './site-data';
export type ArticleSource = {label:string;url:string};
export type Article = {title:string;tag:string;lede:string;read:string;reviewed:string;sections:Array<[string,string[]]>;sources:ArticleSource[]};
export const articleData = revisedOriginals as Record<Locale,Record<'qcArticle'|'shippingArticle'|'storageArticle',Article>>;
