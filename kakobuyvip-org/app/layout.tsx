import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kakobuyvip.org"),
  title: {
    default: "Kakobuy VIP — Spreadsheet, Finds & QC Guide",
    template: "%s | Kakobuy VIP",
  },
  description:
    "An independent Kakobuy research desk for curated finds, QC checks, shipping planning and practical buying guides.",
  icons: {
    icon: "/kakobuy.png",
    shortcut: "/kakobuy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-M114ZXGDY0" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-M114ZXGDY0");`}</Script>
    </html>
  );
}
