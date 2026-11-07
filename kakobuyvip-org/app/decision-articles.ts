import type {Article} from './article-data';
import type {Locale} from './site-data';
import en from './content/decisions-en.json';
import de from './content/decisions-de.json';
import es from './content/decisions-es.json';
import fr from './content/decisions-fr.json';
import it from './content/decisions-it.json';
export type DecisionArticleKey='germanyArticle'|'sizeArticle'|'consolidationArticle';
export const decisionArticleData={en,de,es,fr,it} as Record<Locale,Record<DecisionArticleKey,Article>>;
