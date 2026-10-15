import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lovegobuys.shop"),
  title: "LoveGoBuy Spreadsheet | Finds, QC & Sizing Guides",
  description: "Independent LoveGoBuy QC photo, sizing, product measurement, variant and chargeable-weight research for better pre-purchase decisions.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cnfansge.com" />
        <link rel="dns-prefetch" href="https://cnfansge.com" />
      </head>
      <body>
        <script src="/analytics.js" defer />
        {children}
        <script dangerouslySetInnerHTML={{__html:"document.documentElement.lang=(location.pathname.split('/')[1]||'en').match(/^(en|de|es|fr|it)$/)?.[0]||'en'"}} />
      </body>
    </html>
  );
}
