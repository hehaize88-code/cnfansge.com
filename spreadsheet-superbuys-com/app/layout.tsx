import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-superbuys.com"),
  title: {
    default: "Superbuy Spreadsheet 2026 | Finds, QC Photos & Buyer Guides",
    template: "%s | Superbuy Spreadsheet 2026",
  },
  description:
    "Browse organized Superbuy product finds, open current listings, check QC guidance and plan warehouse consolidation and shipping.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Superbuy Spreadsheet 2026",
    description: "Organized product finds with practical QC, warehouse and shipping notes.",
    type: "website",
    url: "/",
    siteName: "Superbuy Spreadsheet 2026",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Superbuy Spreadsheet 2026 — Finds, QC and Shipping" }],
  },
  twitter: {
    card: "summary",
    title: "Superbuy Spreadsheet 2026",
    description: "Organized product finds with practical QC, warehouse and shipping notes.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Superbuy Spreadsheet 2026",
    url: "https://spreadsheet-superbuys.com/",
    description: "An independent product-discovery index and buyer guide.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cnfansge.com/search.html?keywords={search_term_string}&channelid=2&method=1",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
