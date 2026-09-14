import Link from "next/link";
import { LanguageSwitcher } from "./LanguageProvider";

const mainSite = "https://cnfansge.com";

export default function GuideLayout({ kicker, title, intro, accent = "blue", children }: { kicker: string; title: string; intro: string; accent?: "blue" | "lime" | "orange"; children: React.ReactNode }) {
  return <main>
    <header className="site-header">
      <Link className="brand logo-brand" href="/" aria-label="Hipobuy guide home"><img src="/hipobuy-logo.png" alt="Hipobuy" width="220" height="52" /></Link>
      <nav className="desktop-nav"><Link href="/spreadsheet/">Spreadsheet</Link><Link href="/qc/">QC Guide</Link><Link href="/shipping/">Shipping</Link><Link href="/guides/">Guides</Link><Link href="/articles/">Articles</Link><Link href="/faq/">FAQ</Link></nav>
      <div className="header-actions"><LanguageSwitcher/><a className="header-cta" href={`${mainSite}/AllProducts/`}>Open catalog <span>↗</span></a></div>
    </header>
    <section className={`sub-hero ${accent}`}><div><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{intro}</p></div><span className="sub-hero-mark">HI / 26</span></section>
    <div className="subpage-body">{children}</div>
    <footer><div className="footer-brand"><img src="/hipobuy-logo.png" alt="Hipobuy" width="180" height="43"/><p>Independent Hipobuy spreadsheet directory.</p></div><div className="footer-links"><Link href="/">Home</Link><Link href="/spreadsheet/">Spreadsheet</Link><Link href="/qc/">QC</Link><Link href="/shipping/">Shipping</Link><Link href="/guides/">Guides</Link><Link href="/articles/">Articles</Link><Link href="/faq/">FAQ</Link></div><p className="footer-note">Independent information resource. Not affiliated with Hipobuy, Taobao, 1688 or any product brand. Check current information before purchase. © 2026 Hipo Index.</p></footer>
  </main>;
}
