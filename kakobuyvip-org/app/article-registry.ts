import type { Locale, PageKey } from './site-data';
import { articleData } from './article-data';
import { officialWebsiteArticleData } from './official-website-article';
import { trustArticleData, type TrustArticleKey } from './trust-articles';
import { practicalArticleData, type PracticalArticleKey } from './practical-articles';

export type ArticlePageKey = Extract<PageKey, `${string}Article`>;
export const articleKeys: ArticlePageKey[] = ['qcPhotosArticle','feesArticle','linksArticle','trackingArticle','qcArticle','shippingArticle','storageArticle','officialWebsiteArticle','legitArticle','reviewsArticle','safeArticle','scamClaimsArticle','helpCenterArticle','copycatArticle','policyTrackerArticle'];
export function getArticle(locale: Locale, page: ArticlePageKey) {
  if (page in practicalArticleData[locale]) return practicalArticleData[locale][page as PracticalArticleKey];
  if (page === 'officialWebsiteArticle') return officialWebsiteArticleData[locale];
  if (page in trustArticleData[locale]) return trustArticleData[locale][page as TrustArticleKey];
  return articleData[locale][page as 'qcArticle'|'shippingArticle'|'storageArticle'];
}
export function articleDates(page: ArticlePageKey) {
  const added = ['qcPhotosArticle','feesArticle','linksArticle','trackingArticle'].includes(page);
  const original = ['qcArticle','shippingArticle','storageArticle'].includes(page);
  return {published:added?'2026-10-13':original?'2026-08-29':page==='officialWebsiteArticle'?'2026-08-31':'2026-09-21',modified:added||original?'2026-10-13':page==='officialWebsiteArticle'?'2026-08-31':'2026-09-21'};
}
export function relatedArticles(page: PageKey): ArticlePageKey[] {
  const routes: Partial<Record<PageKey,ArticlePageKey[]>> = {
    spreadsheet:['qcArticle','linksArticle','qcPhotosArticle'],finds:['linksArticle','qcPhotosArticle','feesArticle'],guide:['linksArticle','feesArticle','trackingArticle'],qc:['qcPhotosArticle','qcArticle','storageArticle'],shipping:['shippingArticle','feesArticle','trackingArticle'],
    qcArticle:['qcPhotosArticle','linksArticle','storageArticle'],qcPhotosArticle:['qcArticle','storageArticle','shippingArticle'],shippingArticle:['feesArticle','trackingArticle','storageArticle'],storageArticle:['qcPhotosArticle','trackingArticle','shippingArticle'],feesArticle:['shippingArticle','linksArticle','storageArticle'],linksArticle:['qcArticle','qcPhotosArticle','feesArticle'],trackingArticle:['shippingArticle','storageArticle','feesArticle'],
  };
  return routes[page]??['qcArticle','feesArticle','qcPhotosArticle'];
}
