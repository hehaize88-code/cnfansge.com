import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://litbuys.store"),
  title: "LitBuys Store — LitBuy Spreadsheet, Finds & QC Guides",
  description:
    "Browse LitBuy product finds, matched product routes, QC guidance and shipping explainers before opening the final listing.",
  icons: {
    icon: "/litbuy.png",
    shortcut: "/litbuy.png",
    apple: "/litbuy.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://litbuys.store",
    siteName: "LitBuys Store",
    title: "LitBuys Store — Spreadsheet, Finds & QC Guides",
    description: "Matched product routes, LitBuy spreadsheet records, QC guidance and shipping explainers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
