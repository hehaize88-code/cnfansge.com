"use client";

import { usePathname } from "next/navigation";
import { languages, localPath, type Lang } from "./i18n";

const names = { en: "English", de: "Deutsch", es: "Español", fr: "Français", it: "Italiano" };

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  return <details className="language-switcher">
    <summary aria-label={names[lang]}>{lang.toUpperCase()} <span aria-hidden="true">⌄</span></summary>
    <nav aria-label={{ en: "Language", de: "Sprache", es: "Idioma", fr: "Langue", it: "Lingua" }[lang]}>{languages.map((language) => <a
      key={language} href={localPath(language, pathname)} hrefLang={language} lang={language}
      aria-current={language === lang ? "page" : undefined}
    >{names[language]}</a>)}</nav>
  </details>;
}
