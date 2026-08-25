import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-hipobuys.net"),
  title: { default: "Hipobuy Order Reconciliation Guide — Spreadsheet to Parcel", template: "%s | Hipo Index" },
  description: "Use an independent Hipobuy order reconciliation guide to preserve item identity from a spreadsheet row through order, warehouse and parcel handoffs.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Hipobuy Order Reconciliation Guide — Spreadsheet to Parcel", description: "Preserve item identity from a spreadsheet row through order, warehouse and parcel handoffs.", url: "/", siteName: "Hipo Index", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hipobuy order reconciliation guide" }] },
  twitter: { card: "summary_large_image", title: "Hipobuy Order Reconciliation Guide", description: "Spreadsheet-to-order, warehouse and parcel handoff checks.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hipo Index",
  url: "https://spreadsheet-hipobuys.net/",
  description: "Independent Hipobuy order-reconciliation and spreadsheet handoff guide.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-D14KS48G0Q" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-D14KS48G0Q');" }} /><LanguageProvider>{children}</LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></body></html>;
}
