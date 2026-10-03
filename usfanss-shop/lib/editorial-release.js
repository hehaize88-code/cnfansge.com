import copy from "./editorial-copy.json";
import { articleCards } from "./data";
import { researchedArticles } from "./articles";
import { localizedArticles } from "./article-translations";

export function applyEditorialRelease(translations) {
  for (const [language, t] of Object.entries(translations)) {
    const c = copy[language];
    Object.assign(t.hero, c.hero);
    Object.assign(t.seoTitles, c.seoTitles);
    Object.assign(t.common, c.common);
    t.pageIntro.spreadsheet = c.spreadsheetIntro;
    t.pageIntro.articles = c.articlesIntro;
    t.coreFacts = c.coreFacts;
    t.guideSteps[3] = c.guideWarehouse;
    t.faq[3][1] = c.faqOrder;
    t.faq[6][1] = c.faqShipping;
    t.faq[7][0] = c.faqLineTitle;
    t.faq[8][1] = c.faqReturn;
    t.faq[9][1] = c.faqReview;
    for (const card of articleCards) {
      const article = language === "en" ? researchedArticles[card.slug] : localizedArticles[language][card.slug];
      t.articleTitles[card.contentKey] = [article.title, article.description];
    }
  }
}
