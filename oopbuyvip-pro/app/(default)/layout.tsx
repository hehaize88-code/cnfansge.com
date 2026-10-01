import type { Metadata } from "next";
import "../globals.css";
import { SiteShell } from "@/components/site-shell";
import { alternateUrls, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "OOPBuy QC Photos: Checklists & Inspection Guides", template: "%s | OOPBUY VIP" },
  description: "Read OOPBuy QC photos with practical guides to shoe shape, clothing measurements, jersey text, color differences and visible defects.",
  alternates: { canonical: SITE_URL, languages: alternateUrls("home") },
  openGraph: { type: "website", url: SITE_URL, siteName: "OOPBUY VIP", title: "OOPBuy QC Photos: Checklists & Inspection Guides", description: "Read the evidence, mark the unknowns and decide without guessing beyond the image.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "OOPBUY QC photo analysis and visual evidence guide" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "theme-color": "#1027d6" },
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteShell locale="en">{children}</SiteShell></body></html>;
}
