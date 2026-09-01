import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lovegobuys.org"),
  title: {
    default: "LoveGoBuy Finds & Shopping Guide",
    template: "%s | LoveGoBuy Field Guide",
  },
  description:
    "Independent LoveGoBuy spreadsheet guide with real product routes, QC checks, source-link research and practical shipping planning.",
  icons: {
    icon: "/lovegobuy-logo.png",
    shortcut: "/lovegobuy-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "LoveGoBuy Field Guide",
    images: [{ url: "/lovegobuy-logo.png", width: 512, height: 164, alt: "LoveGoBuy Field Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/lovegobuy-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MBX2JGZC4R" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-MBX2JGZC4R");`}</Script>
        {children}
      </body>
    </html>
  );
}
