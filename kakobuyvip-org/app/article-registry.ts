import { decisionArticleData, type DecisionArticleKey } from './decision-articles';
import type { Locale, PageKey } from './site-data';
import { articleData } from './article-data';
import { officialWebsiteArticleData } from './official-website-article';
import { trustArticleData, type TrustArticleKey } from './trust-articles';
import { practicalArticleData, type PracticalArticleKey } from './practical-articles';

export type ArticlePageKey = Extract<PageKey, `${string}Article`>;
export const articleKeys: ArticlePageKey[] = ['germanyArticle','sizeArticle','consolidationArticle','qcPhotosArticle','feesArticle','linksArticle','trackingArticle','qcArticle','shippingArticle','storageArticle','officialWebsiteArticle','legitArticle','reviewsArticle','safeArticle','scamClaimsArticle','helpCenterArticle','copycatArticle','policyTrackerArticle'];
export function getArticle(locale: Locale, page: ArticlePageKey) {
  if (page in decisionArticleData[locale]) return decisionArticleData[locale][page as DecisionArticleKey];
  if (page in practicalArticleData[locale]) return practicalArticleData[locale][page as PracticalArticleKey];
  if (page === 'officialWebsiteArticle') return officialWebsiteArticleData[locale];
  if (page in trustArticleData[locale]) return trustArticleData[locale][page as TrustArticleKey];
  return articleData[locale][page as 'qcArticle'|'shippingArticle'|'storageArticle'];
}
export function articleDates(page: ArticlePageKey) {
  if(['germanyArticle','sizeArticle','consolidationArticle'].includes(page))return {published:'2026-11-07',modified:'2026-11-07'};
  const added = ['germanyArticle','sizeArticle','consolidationArticle','qcPhotosArticle','feesArticle','linksArticle','trackingArticle'].includes(page);
  const original = ['qcArticle','shippingArticle','storageArticle'].includes(page);
  return {published:added?'2026-10-13':original?'2026-08-29':page==='officialWebsiteArticle'?'2026-08-31':'2026-09-21',modified:added||original?'2026-11-07':page==='officialWebsiteArticle'?'2026-08-31':'2026-09-21'};
}
export function relatedArticles(page: PageKey): ArticlePageKey[] {
  const routes: Partial<Record<PageKey,ArticlePageKey[]>> = {
    spreadsheet:['sizeArticle','linksArticle','qcPhotosArticle'],finds:['linksArticle','qcPhotosArticle','feesArticle'],guide:['linksArticle','feesArticle','trackingArticle'],qc:['qcPhotosArticle','sizeArticle','storageArticle'],shipping:['germanyArticle','consolidationArticle','shippingArticle'],
    qcArticle:['qcPhotosArticle','linksArticle','storageArticle'],qcPhotosArticle:['sizeArticle','storageArticle','qcArticle'],shippingArticle:['germanyArticle','consolidationArticle','feesArticle'],storageArticle:['qcPhotosArticle','trackingArticle','shippingArticle'],feesArticle:['consolidationArticle','germanyArticle','shippingArticle'],linksArticle:['qcArticle','qcPhotosArticle','feesArticle'],trackingArticle:['shippingArticle','storageArticle','feesArticle'],
    germanyArticle:['shippingArticle','feesArticle','trackingArticle'],sizeArticle:['qcPhotosArticle','qcArticle','storageArticle'],consolidationArticle:['shippingArticle','feesArticle','storageArticle'],
  };
  return routes[page]??['qcArticle','feesArticle','qcPhotosArticle'];
}
