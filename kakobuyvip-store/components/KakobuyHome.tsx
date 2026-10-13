import { HomeClient } from "./HomeClient";
import { articleCards } from "./article-cards";
import type { Lang } from "./site-data";

export function KakobuyHome({ initialLang = "en" }: { initialLang?: Lang }) {
  return <HomeClient initialLang={initialLang} articles={articleCards(initialLang).slice(0, 4)} />;
}
