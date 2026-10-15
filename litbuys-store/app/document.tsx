import type { ReactNode } from "react";
import Script from "next/script";
import { OutboundAnalytics } from "./analytics";
import { SITE_ORIGIN, localPath, type Lang } from "./i18n";
import "./globals.css";

export function SiteDocument({ children, lang }: { children: ReactNode; lang: Lang }) {
  const schema = { "@context": "https://schema.org", "@type": "WebSite", name: "LitBuys Store", url: SITE_ORIGIN + localPath(lang), inLanguage: lang };
  return <html lang={lang}><body className="antialiased">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    {children}<OutboundAnalytics />
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-DNXM4YXZ5C" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-DNXM4YXZ5C");`}</Script>
  </body></html>;
}

export const siteIcons = { icon: "/litbuy.png", shortcut: "/litbuy.png", apple: "/litbuy.png" };
