import type { Metadata } from "next";
import "../globals.css";
import { SiteShell } from "@/components/site-shell";
import { alternateUrls, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "OOPBUY VIP Spreadsheet — QC-First Finds & Shipping", template: "%s | OOPBUY VIP" },
  description: "Independent OOPBUY spreadsheet, curated product finds, warehouse QC checklists and shipping cost planning.",
  alternates: { canonical: SITE_URL, languages: alternateUrls("home") },
  openGraph: { type: "website", url: SITE_URL, siteName: "OOPBUY VIP", title: "OOPBUY VIP — Spreadsheet, QC & Shipping", description: "Find first. Check twice. Ship with a plan.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "OOPBUY VIP spreadsheet, QC and shipping research hub" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "theme-color": "#1027d6" },
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteShell locale="en">{children}</SiteShell></body></html>;
}
