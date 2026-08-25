import Link from "next/link";
import { categories, products } from "./site-data";
import { LanguageSwitcher } from "./language-switcher";

export function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>;
}

export function Header() {
  return (
    <header className="topbar">
      <div className="wrap nav-wrap">
        <Link className="brand" href="/" aria-label="Superbuy Spreadsheet home">
          <img src="/superbuy-logo.png" alt="Superbuy" width="726" height="142" />
          <span data-i18n="brandSuffix">SPREADSHEET</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/spreadsheet/" data-i18n="spreadsheet">Spreadsheet</Link>
          <Link href="/#finds" data-i18n="finds">Finds</Link>
          <Link href="/qc-photos/" data-i18n="qc">QC guide</Link>
          <Link href="/shipping-cost/" data-i18n="shipping">Shipping</Link>
          <Link href="/articles/" data-i18n="articles">SEO Articles</Link>
          <Link href="/faq/" data-i18n="faq">FAQ</Link>
        </nav>
        <div className="nav-actions"><LanguageSwitcher /><a className="nav-cta" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer"><span data-i18n="open">Open index</span> <ArrowIcon /></a></div>
      </div>
    </header>
  );
}

export function SearchBox() {
  return (
    <form className="search-box" method="get" action="https://cnfansge.com/search.html" target="_blank">
      <label className="sr-only" htmlFor="product-search">Search the product index</label>
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></svg>
      <input id="product-search" name="keywords" placeholder="Search shoes, hoodies, jerseys…" data-i18n-placeholder="search" />
      <input type="hidden" name="channelid" value="2" />
      <input type="hidden" name="method" value="1" />
      <button type="submit"><span data-i18n="searchButton">Search</span> <ArrowIcon /></button>
    </form>
  );
}

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <a href={category.href} target="_blank" rel="noopener noreferrer" className="category-card" key={category.name}>
          <div><h3 data-i18n={`cat_${category.code}`}>{category.name}</h3><p data-i18n={`catDesc_${category.code}`}>{category.count}</p></div>
          <ArrowIcon />
        </a>
      ))}
    </div>
  );
}

export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <a className="product-card" href={product.href} target="_blank" rel="noopener noreferrer" key={product.id}>
          <div className="product-image-wrap">
            <img src={product.image} alt={product.title} width="600" height="600" loading="lazy" />
            <span><span data-i18n="openListing">Open listing</span> <ArrowIcon /></span>
          </div>
          <div className="product-meta"><small data-i18n={`productCategory${index + 1}`}>{product.category}</small><b data-i18n={`productTitle${index + 1}`}>{product.title}</b></div>
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div><Link className="brand footer-brand" href="/"><img src="/superbuy-logo.png" alt="Superbuy" width="726" height="142" /><span data-i18n="brandSuffix">SPREADSHEET</span></Link><p data-i18n="footerIntro">Independent product discovery and practical buyer education.</p></div>
        <div><b data-i18n="footerExplore">EXPLORE</b><Link href="/spreadsheet/" data-i18n="spreadsheet">Spreadsheet</Link><Link href="/how-to-use/" data-i18n="footerHow">How to use</Link><Link href="/qc-photos/" data-i18n="footerQc">QC photos</Link></div>
        <div><b data-i18n="footerPlan">PLAN</b><Link href="/shipping-cost/" data-i18n="footerShipping">Shipping cost</Link><Link href="/warehouse-storage/" data-i18n="footerWarehouse">Warehouse</Link><Link href="/articles/" data-i18n="articles">SEO Articles</Link><Link href="/faq/" data-i18n="faq">FAQ</Link></div>
        <div><b data-i18n="footerDestination">DESTINATION</b><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer"><span data-i18n="footerProducts">All products</span> ↗</a><a href="https://cnfansge.com/Agents/" target="_blank" rel="noopener noreferrer"><span data-i18n="footerAgents">Agents</span> ↗</a></div>
      </div>
      <div className="wrap legal"><span data-i18n="legal">This independent site is not Superbuy and is not endorsed by Superbuy. Product availability, prices, routes, customs rules and service terms can change; verify current details before purchase.</span> <span>© 2026 spreadsheet-superbuys.com</span></div>
    </footer>
  );
}
