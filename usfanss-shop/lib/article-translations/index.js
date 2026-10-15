import { deArticles } from "./de";
import { esArticles } from "./es";
import { frArticles } from "./fr";
import { itArticles } from "./it";

import { applyContentRelease } from "../seo-release";

export const localizedArticles = {
  de: deArticles,
  es: esArticles,
  fr: frArticles,
  it: itArticles
};

for (const [language, articles] of Object.entries(localizedArticles)) applyContentRelease(articles, language);
