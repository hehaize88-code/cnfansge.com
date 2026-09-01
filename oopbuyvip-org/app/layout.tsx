import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oopbuyvip.org"),
  title: "OOPBUY VIP — Spreadsheet, Finds & Guides",
  description: "Independent OOPBuy spreadsheet, product finds, QC checks, shipping planning and evidence-led guides.",
  applicationName: "OOPBUY VIP",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "OOPBUY VIP — Spreadsheet, Finds & Guides",
    description: "Independent OOPBuy spreadsheet, product finds, QC checks and shipping planning.",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "OOPBUY VIP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OOPBUY VIP — Spreadsheet, Finds & Guides",
    description: "Independent OOPBuy spreadsheet, product finds, QC checks and shipping planning.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3LYRM8MD9E" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-3LYRM8MD9E");`}</Script>
        {children}
      </body>
    </html>
  );
}
