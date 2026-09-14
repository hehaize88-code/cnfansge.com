import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import AnalyticsEvents from "./components/AnalyticsEvents";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheets-hipobuy.com"),
  title: "HipoBuy Spreadsheet",
  description: "Search HipoBuy spreadsheet product links by category, then verify the live listing, size, QC photos and shipping inputs.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "HipoBuy Spreadsheet",
    description: "Search product links by category and check listings, sizes, QC photos and shipping inputs.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Spreadsheets Hipobuy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HipoBuy Spreadsheet",
    description: "Search product links by category and check listings, sizes, QC photos and shipping inputs.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const nav = [
  ["Spreadsheet", "/spreadsheet/"], ["Finds", "/finds/"], ["Articles", "/articles/"],
  ["Guide", "/guide/"], ["QC", "/qc/"], ["Shipping", "/shipping/"], ["FAQ", "/faq/"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LXGCJ9PL8W" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LXGCJ9PL8W');`}</Script>
        <AnalyticsEvents />
        <header className="siteHeader">
          <div className="wrap headerInner">
            <Link href="/" className="brand" aria-label="Hipobuy spreadsheet home">
              <img className="brandLogo" src="/hipobuy-logo.png" alt="HIPOBUY" />
            </Link>
            <nav aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
            <div className="headerActions">
              <LanguageSwitcher />
              <a className="openIndex" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noreferrer">Open index ↗</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="wrap footerGrid">
            <div><Link href="/" className="brand footerBrand" aria-label="Hipobuy spreadsheet home"><img className="brandLogo" src="/hipobuy-logo.png" alt="HIPOBUY" /></Link><p>Independent product discovery, link checking and buyer education.</p></div>
            <div><b>Explore</b><Link href="/spreadsheet/">Spreadsheet</Link><Link href="/finds/">Product finds</Link><Link href="/articles/">Buyer articles</Link></div>
            <div><b>Learn</b><Link href="/guide/">Buyer guide</Link><Link href="/qc/">QC checklist</Link><Link href="/shipping/">Shipping notes</Link></div>
            <div><b>Important</b><p>This site is independent and does not sell goods, process payments or guarantee sellers.</p></div>
          </div>
          <div className="wrap copyright"><span>© 2026 Spreadsheets HipoBuy</span><span>Independent buyer resource · Updated 14 Sep 2026</span></div>
        </footer>
      </body>
    </html>
  );
}
