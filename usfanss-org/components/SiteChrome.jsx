import Link from "next/link";
import LanguagePicker from "./LanguagePicker";
import LanguageSync from "./LanguageSync";
import SearchBox from "./SearchBox";
import InteractionEvents from "./InteractionEvents";

export default function SiteChrome({ language, content, children, showSearch = true }) {
  return (
    <div className="site-shell">
      <LanguageSync language={language} />
      <InteractionEvents language={language} />
      <div className="research-bar">
        <span>{content.label}</span>
        <span>{content.updated}</span>
      </div>
      <header className="topbar">
        <Link href={`/${language}`} className="wordmark" aria-label={content.homeLabel}>
          <img src="/usfans.png" alt="USFans" width="375" height="123" />
        </Link>
        <nav aria-label={content.navLabel}>
          {Object.entries(content.nav).map(([path, label]) => (
            <Link href={`/${language}/${path}`} key={path}>{label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <details className="mobile-menu">
            <summary>{content.menuLabel}</summary>
            <nav aria-label={content.navLabel}>
              {Object.entries(content.nav).map(([path, label]) => (
                <Link href={`/${language}/${path}`} key={path}>{label}</Link>
              ))}
            </nav>
          </details>
          <LanguagePicker current={language} label={content.languageLabel} />
        </div>
      </header>
      {showSearch && <div className="site-search"><SearchBox compact placeholder={content.searchPlaceholder} button={content.searchButton}/></div>}
      <main>{children}</main>
      <footer>
        <div className="footer-brand">
          <img src="/usfans.png" alt="USFans" width="375" height="123" />
          <strong>{content.label}</strong>
        </div>
        <p>{content.footer}</p>
        <span>{content.updated}</span>
      </footer>
    </div>
  );
}
