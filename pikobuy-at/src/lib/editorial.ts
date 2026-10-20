export const articleSlugs = ['spreadsheet-guide','how-to-use-pikobuy','weidian-taobao-links','size-guide','fees-budget','shipping-cost','qc-photos','warehouse-consolidation','order-tracking','returns-refunds'];
export const faqGroups = ['getting-started','orders','warehouse','shipping'];
export const reviewedDate = '2026-10-20';
export interface EditorialArticle { slug:string;title:string;description:string;category:string;eyebrow:string;summary:string;sections:{id:string;title:string;paragraphs:string[];bullets?:string[]}[];sources:string[];related:string[] }
export interface EditorialContent {labels:Record<string,string>;groups:Record<string,string>;faqs:{id:string;group:string;q:string;a:string;sources:string[]}[];articles:EditorialArticle[]}
const files = import.meta.glob('../content/editorial/*.json',{eager:true,import:'default'}) as Record<string,EditorialContent>;
export function editorial(locale:string):EditorialContent {
  const content=files[`../content/editorial/${locale}.json`];
  if(!content)throw new Error(`Missing complete editorial translation: ${locale}`);
  return content;
}
export function sourceLabel(url:string){const parsed=new URL(url);return `${parsed.hostname.replace(/^www\./,'')}${parsed.pathname==='/'?'':parsed.pathname}`;}
