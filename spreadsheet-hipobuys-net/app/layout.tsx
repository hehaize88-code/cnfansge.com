import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-hipobuys.net"),
  title: { default: "Hipobuy Spreadsheet 2026 — Verified Finds & QC Guide", template: "%s | Hipo Index" },
  description: "Browse an independent Hipobuy spreadsheet with organized product finds, source-page checks, QC guidance and practical shipping notes.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Hipobuy Spreadsheet 2026 — Verified Finds & QC Guide", description: "Organized product finds, source-page checks, QC guidance and practical shipping notes.", url: "/", siteName: "Hipo Index", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hipobuy Spreadsheet 2026" }] },
  twitter: { card: "summary_large_image", title: "Hipobuy Spreadsheet 2026 — Verified Finds & QC Guide", description: "Organized product finds, QC checks and shipping guidance.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", name: "Hipo Index", url: "https://spreadsheet-hipobuys.net/", description: "Independent Hipobuy spreadsheet and buyer education resource.",
  potentialAction: { "@type": "SearchAction", target: "https://cnfansge.com/search.html?channelid=2&keywords={search_term_string}", "query-input": "required name=search_term_string" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analytics = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-D14KS48G0Q');document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;var u=new URL(a.href,location.href);if(u.origin!==location.origin){gtag('event','outbound_product_click',{link_url:u.href,link_text:(a.textContent||'').trim().slice(0,100)})}else if(u.pathname.indexOf('/articles/')===0){gtag('event','article_click',{link_url:u.href,link_text:(a.textContent||'').trim().slice(0,100)})}});document.addEventListener('submit',function(e){if(e.target&&e.target.matches&&e.target.matches('.clean-search'))gtag('event','spreadsheet_search')});";
  return <html lang="en"><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-D14KS48G0Q" /><script dangerouslySetInnerHTML={{ __html: analytics }} /><LanguageProvider>{children}</LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></body></html>;
}
