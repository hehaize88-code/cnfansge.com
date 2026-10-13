import Link from "next/link";
import { localizedPath, type Lang } from "./site-data";
import { articleNavigationText } from "./article-navigation";

export function GuideShortcuts({ lang }: { lang: Lang }) {
  const t = articleNavigationText[lang];
  const slugs = ["how-to-use-kakobuy", "kakobuy-shipping-calculator", "kakobuy-shipping-time-tracking", "qc-photo-checklist"];
  return <nav className="guide-shortcuts" aria-label={t.start}>
    <h2>{t.start}</h2><div>{slugs.map((slug, index) => <Link key={slug} href={localizedPath(`/articles/${slug}`, lang)}><span>0{index + 1}</span>{t.actions[index]}<span aria-hidden="true">↗</span></Link>)}</div>
  </nav>;
}
