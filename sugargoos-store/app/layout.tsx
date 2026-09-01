import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sugargoos.store"),
  title: { default: "Sugargoo Spreadsheet 2026 | Sugar Scout", template: "%s | Sugar Scout" },
  description: "Independent Sugargoo spreadsheet, finds, QC photo and shipping research.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Sugar Scout",
    title: "Sugargoo Spreadsheet 2026 | Finds, QC & Shipping",
    description: "Find first. Check twice. Ship smarter.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sugargoo Spreadsheet & Buyer Guide" }],
  },
  twitter: { card: "summary_large_image", title: "Sugargoo Spreadsheet 2026", description: "Find first. Check twice. Ship smarter.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
