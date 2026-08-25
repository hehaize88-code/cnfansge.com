import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheets-hipobuy.com"),
  title: "Hipobuy Spreadsheet",
  description: "Search and filter checked Hipobuy spreadsheet rows, then verify listing details, QC evidence and parcel decisions.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Hipobuy Spreadsheet",
    description: "Searchable rows, clearer checks and practical buyer guides.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Spreadsheets Hipobuy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hipobuy Spreadsheet",
    description: "Searchable rows, clearer checks and practical buyer guides.",
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
        <header className="siteHeader">
          <div className="wrap headerInner">
            <a href="/" className="brand" aria-label="Hipobuy spreadsheet home">
              <img className="brandLogo" src="/hipobuy-logo.png" alt="HIPOBUY" />
            </a>
            <nav aria-label="Primary navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
            <div className="headerActions">
              <LanguageSwitcher />
              <a className="openIndex" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noreferrer">Open index ↗</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="wrap footerGrid">
            <div><a href="/" className="brand footerBrand" aria-label="Hipobuy spreadsheet home"><img className="brandLogo" src="/hipobuy-logo.png" alt="HIPOBUY" /></a><p>Independent product discovery, link checking and buyer education.</p></div>
            <div><b>Explore</b><a href="/spreadsheet/">Spreadsheet</a><a href="/finds/">Product finds</a><a href="/articles/">Buyer articles</a></div>
            <div><b>Learn</b><a href="/guide/">Buyer guide</a><a href="/qc/">QC checklist</a><a href="/shipping/">Shipping notes</a></div>
            <div><b>Important</b><p>This site is independent and does not sell goods, process payments or guarantee sellers.</p></div>
          </div>
          <div className="wrap copyright"><span>© 2026 Spreadsheets Hipobuy</span><span>Independent buyer resource · Last checked 25 Aug 2026</span></div>
        </footer>
      </body>
    </html>
  );
}
