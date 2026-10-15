import type { Article } from "./article-data";
import { articleData } from "./article-data";
import type { Locale, PageKey } from "./site-data";
import { orderIdentifiersArticleData } from "./order-identifiers-article";
import { orderTimelineArticleData } from "./order-timeline-article";
import { sellerHandoffArticleData } from "./seller-handoff-article";
import { domesticReceiptArticleData } from "./domestic-receipt-article";
import { warehouseIntakeArticleData } from "./warehouse-intake-article";
import { workflowArticleData, workflowArticleDates, workflowArticleKeys, type WorkflowArticleKey } from "./workflow-batch-articles";
import en from "./content/en.json";
import de from "./content/de.json";
import es from "./content/es.json";
import fr from "./content/fr.json";
import it from "./content/it.json";
import revisions from "./content/revisions.json";
import details from "./content/revision-details.json";

export type ArticlePageKey = Extract<PageKey, `${string}Article`>;
type NewArticleKey = "feesArticle" | "usaArticle";
type RevisedArticleKey = "qcArticle" | "shippingArticle" | "storageArticle";
export const updatedDate = "2026-10-15";
const translated = { en, de, es, fr, it };
const reviewed: Record<Locale,string> = {en:"Updated 15 October 2026",de:"Aktualisiert am 15. Oktober 2026",es:"Actualizado el 15 de octubre de 2026",fr:"Mis à jour le 15 octobre 2026",it:"Aggiornato il 15 ottobre 2026"};
const reads: Record<Locale,string> = {en:"8 min guide",de:"8 Min. Lesezeit",es:"8 min de lectura",fr:"8 min de lecture",it:"8 min di lettura"};
const sources = [
  {label:"Kakobuy — shipping estimator",url:"https://www.kakobuy.com/tools/estimate"},
  {label:"Kakobuy — service cost categories",url:"https://www.kakobuy.com/service/help/question?id=63"},
  {label:"Kakobuy — purchasing and parcel stages",url:"https://www.kakobuy.com/index/information?information_id=12"},
];

export const articleKeys: ArticlePageKey[] = ["feesArticle","usaArticle", "storageArticle","qcArticle","shippingArticle",...workflowArticleKeys,"warehouseIntakeArticle","domesticReceiptArticle","sellerHandoffArticle","orderTimelineArticle","orderIdentifiersArticle"];

export function isArticle(page: PageKey): page is ArticlePageKey {return articleKeys.includes(page as ArticlePageKey);}
export function isNewArticle(page: PageKey): page is NewArticleKey {return page === "feesArticle" || page === "usaArticle";}
export function articleDates(page: ArticlePageKey) {
  const published = isNewArticle(page) ? updatedDate : workflowArticleKeys.includes(page as WorkflowArticleKey) ? workflowArticleDates[page as WorkflowArticleKey] : page === "warehouseIntakeArticle" ? "2026-09-12" : page === "domesticReceiptArticle" ? "2026-09-10" : page === "sellerHandoffArticle" ? "2026-09-04" : page === "orderTimelineArticle" ? "2026-09-02" : "2026-08-31";
  return {published, modified: ["qcArticle","storageArticle","shippingArticle"].includes(page) ? updatedDate : published};
}

export function getArticle(locale: Locale, page: ArticlePageKey): Article & {description?:string} {
  if (isNewArticle(page)) {
    const a=translated[locale][page];
    return {...a,sections:a.sections as [string,string[]][],read:reads[locale],reviewed:reviewed[locale],sources};
  }
  if (workflowArticleKeys.includes(page as WorkflowArticleKey)) return workflowArticleData[locale][page as WorkflowArticleKey];
  const previous: Partial<Record<ArticlePageKey, Article>> = {
    orderIdentifiersArticle:orderIdentifiersArticleData[locale],orderTimelineArticle:orderTimelineArticleData[locale],sellerHandoffArticle:sellerHandoffArticleData[locale],domesticReceiptArticle:domesticReceiptArticleData[locale],warehouseIntakeArticle:warehouseIntakeArticleData[locale],
  };
  if (previous[page]) return previous[page]!;
  const key=page as RevisedArticleKey;
  const base=articleData[locale][key];
  const revision=revisions[locale][key];
  const sections=base.sections.map(([h,p])=>[h,[...p]] as [string,string[]]);
  for (const [index, section] of Object.entries(revision.replacements)) sections[Number(index)]=section as [string,string[]];
  if(key==="shippingArticle")sections[6][1][1]=details[locale].customs;
  if(key==="storageArticle")sections[3][1][1]=details[locale].images;
  const references=base.sources.filter(source=>!source.url.includes("tipdetail"));
  return {...base,title:revision.title,lede:revision.lede,sections,reviewed:reviewed[locale],sources:key==="storageArticle"?[{label:"Kakobuy — storage start and period",url:"https://www.kakobuy.com/service/help/question?id=1"},...references]:references};
}

export function relatedPages(page: PageKey): PageKey[] {
  if(["warehouse","storageArticle","warehouseIntakeArticle"].includes(page)) return ["returns","qcTroubleshooting","packing","feesArticle"];
  if(["returns","qcTroubleshooting","qcArticle","qc"].includes(page)) return ["qcArticle","returns","warehouse","feesArticle"].filter(p=>p!==page) as PageKey[];
  if(["calculator","shipping","shippingLines","shippingArticle","feesArticle","usaArticle","packing"].includes(page)) return ["calculator","feesArticle","usaArticle","storageArticle"].filter(p=>p!==page) as PageKey[];
  return ["warehouse","qcArticle","feesArticle"];
}
