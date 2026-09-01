import type { Metadata } from "next";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { languageAlternates } from "@/components/seo-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kakobuyvip.store"),
  title: "Latest Kakobuy Finds & Product Routes 2026",
  description:
    "Browse recently added Kakobuy finds, focused categories, matching product images, current routes and practical QC checks.",
  keywords: ["Kakobuy finds", "Kakobuy product links", "Kakobuy categories", "Kakobuy spreadsheet", "Kakobuy QC"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/", languages: languageAlternates("/") },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BE0ZJNGLKL" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-BE0ZJNGLKL");`}</Script>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang=(location.pathname.match(/^\\/(de|es|fr|it)(?:\\/|$)/)||[])[1]||'en'" }} />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "KakobuyVIP Store",
          url: "https://kakobuyvip.store/",
          description: "Independent directory for current Kakobuy finds, product routes, categories and buyer research.",
          inLanguage: ["en", "de", "es", "fr", "it"],
        }} />
        {children}
      </body>
    </html>
  );
}
