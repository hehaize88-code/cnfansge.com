const languages = [["en", "English"], ["de", "Deutsch"], ["fr", "Français"], ["es", "Español"], ["it", "Italiano"], ["pl", "Polski"]];

export function LanguageSwitcher() {
  return <details className="language-picker"><summary aria-label="Choose language"><span data-current-language>EN</span></summary><nav aria-label="Language">{languages.map(([code, label]) => <a key={code} href={code === "en" ? "/" : `/${code}/`} lang={code} hrefLang={code} data-language={code}>{label}</a>)}</nav></details>;
}
