import Link from "next/link";
import { languages, localizedPath, type Lang } from "./site-data";
import { articleNavigationText } from "./article-navigation";

export function LanguageLinks({ pathname, lang }: { pathname: string; lang: Lang }) {
  return <nav className="page-languages" aria-label={articleNavigationText[lang].language}>
    {languages.map(language => <Link key={language} prefetch={false} href={localizedPath(pathname, language)} hrefLang={language} lang={language} aria-current={language === lang ? "page" : undefined}>{({ en: "English", de: "Deutsch", es: "Español", fr: "Français", it: "Italiano" })[language]}</Link>)}
  </nav>;
}
