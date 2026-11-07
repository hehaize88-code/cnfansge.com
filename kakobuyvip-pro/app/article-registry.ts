import type { Locale, PageKey } from './site-data';
import { articleData } from './article-data';
import preserved from './preserved-articles.json';
import { newArticleData,newArticleKeys,editorialUi,reviewDate,type EditorialArticle } from './editorial-update';
import { orderIdentifiersArticleData } from './order-identifiers-article';
import { orderTimelineArticleData } from './order-timeline-article';
import { sellerHandoffArticleData } from './seller-handoff-article';
import { domesticReceiptArticleData } from './domestic-receipt-article';
import { warehouseIntakeArticleData } from './warehouse-intake-article';
import { workflowArticleData,workflowArticleDates,workflowArticleKeys,type WorkflowArticleKey } from './workflow-batch-articles';
export type ArticlePageKey=Extract<PageKey,`${string}Article`>;
export const articleKeys:ArticlePageKey[]=[...newArticleKeys,'feesArticle','usaArticle','storageArticle','qcArticle','shippingArticle',...workflowArticleKeys,'warehouseIntakeArticle','domesticReceiptArticle','sellerHandoffArticle','orderTimelineArticle','orderIdentifiersArticle'];
export function isArticle(page:PageKey):page is ArticlePageKey{return articleKeys.includes(page as ArticlePageKey);}
export function getArticle(locale:Locale,page:ArticlePageKey):EditorialArticle{
 if(newArticleKeys.includes(page as typeof newArticleKeys[number]))return newArticleData[locale][page as typeof newArticleKeys[number]];
 const restored=preserved[locale][page as keyof typeof preserved.en];
 if(restored){
  const a=restored as EditorialArticle;
  return {...a,reviewed:editorialUi[locale].reviewed,sources:a.sources.map(s=>({...s,url:s.url.includes('/tools/estimate')?'https://item2.kakobuy.com/tools/estimate':s.url}))};
 }
 if(workflowArticleKeys.includes(page as WorkflowArticleKey))return workflowArticleData[locale][page as WorkflowArticleKey];
 const legacy={orderIdentifiersArticle:orderIdentifiersArticleData[locale],orderTimelineArticle:orderTimelineArticleData[locale],sellerHandoffArticle:sellerHandoffArticleData[locale],domesticReceiptArticle:domesticReceiptArticleData[locale],warehouseIntakeArticle:warehouseIntakeArticleData[locale]};
 return (legacy[page as keyof typeof legacy]||articleData[locale][page as keyof typeof articleData.en]) as EditorialArticle;
}
export function articlePublished(page:ArticlePageKey){
 if(newArticleKeys.includes(page as typeof newArticleKeys[number]))return reviewDate;
 if(page==='feesArticle'||page==='usaArticle')return '2026-10-15';
 if(workflowArticleKeys.includes(page as WorkflowArticleKey))return workflowArticleDates[page as WorkflowArticleKey];
 return page==='warehouseIntakeArticle'?'2026-09-12':page==='domesticReceiptArticle'?'2026-09-10':page==='sellerHandoffArticle'?'2026-09-04':page==='orderTimelineArticle'?'2026-09-02':'2026-08-31';
}
export function articleModified(page:ArticlePageKey){return page in preserved.en||newArticleKeys.includes(page as typeof newArticleKeys[number])?reviewDate:articlePublished(page);}
