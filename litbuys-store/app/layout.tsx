import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://litbuys.store"),
  title: "LitBuy Spreadsheet 2026: Finds, QC & Shipping",
  description:
    "Browse the LitBuy spreadsheet, matched product finds, QC photo guides and shipping advice. Compare routes, sizing and parcel weight before ordering.",
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
    title: "LitBuy Spreadsheet 2026: Finds, QC & Shipping",
    description: "Matched LitBuy product routes, spreadsheet records, QC photo guidance, warehouse help and shipping explainers.",
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DNXM4YXZ5C" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-DNXM4YXZ5C");`}</Script>
    </html>
  );
}
