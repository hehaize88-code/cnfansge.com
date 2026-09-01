import type { Metadata } from "next";
import "../globals.css";
import { SiteShell } from "@/components/site-shell";
import { alternateUrls, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "OOPBUY QC Photo Analysis — Visual Evidence Guide", template: "%s | OOPBUY VIP" },
  description: "Independent OOPBUY QC photo analysis for interpreting visible warehouse evidence, marking uncertainty and making a defensible product-condition decision.",
  alternates: { canonical: SITE_URL, languages: alternateUrls("home") },
  openGraph: { type: "website", url: SITE_URL, siteName: "OOPBUY VIP", title: "OOPBUY QC Photo Analysis — Visual Evidence Guide", description: "Read the evidence, mark the unknowns and decide without guessing beyond the image.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "OOPBUY QC photo analysis and visual evidence guide" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "theme-color": "#1027d6" },
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteShell locale="en">{children}</SiteShell></body></html>;
}
