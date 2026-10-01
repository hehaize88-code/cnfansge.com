import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sugargoos.shop"),
  title: {
    default: "Sugargoo Finds — Spreadsheet, QC & Shipping Guides",
    template: "%s | Sugargoo Finds",
  },
  description:
    "An independent Sugargoo spreadsheet with current product routes, practical QC checks, shipping guidance and clearly labeled reference prices.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Sugargoo Find Desk",
    description: "Spreadsheet, QC and shipping guides for clearer product decisions.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sugargoo Find Desk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugargoo Find Desk",
    description: "Spreadsheet, QC and shipping guides for clearer product decisions.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-C3FNCR5MLG" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-C3FNCR5MLG");
document.addEventListener("click", function(event) {
  var anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (!anchor) return;
  var destination = new URL(anchor.href, window.location.href);
  if (destination.hostname === "cnfansge.com" || destination.hostname === "www.cnfansge.com") {
    gtag("event", "catalog_click", { link_path: destination.pathname, page_path: window.location.pathname });
  } else if (destination.origin === window.location.origin && /\\/articles\\/[^/]+/.test(destination.pathname)) {
    gtag("event", "article_open", { article_path: destination.pathname, page_path: window.location.pathname });
  }
});`}</Script>
        {children}
      </body>
    </html>
  );
}
