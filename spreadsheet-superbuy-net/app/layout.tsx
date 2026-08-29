import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-superbuy.net"),
  title: {
    default: "Superbuy Spreadsheet 2026 | Checked Links & QC Notes",
    template: "%s",
  },
  description: "Browse a regularly checked Superbuy spreadsheet with current product links, USD price references, categories, QC notes and practical parcel guidance.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Superbuy Spreadsheet 2026",
    description: "Verified links. Clear QC checks. Smarter hauls.",
    type: "website",
    url: "/",
    images: [{ url: "/superbuy-logo.png", width: 756, height: 120, alt: "Superbuy spreadsheet research" }],
  },
  twitter: { card: "summary_large_image", title: "Superbuy Spreadsheet 2026", description: "Verified links. Clear QC checks. Smarter hauls.", images: ["/superbuy-logo.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><Script src="https://www.googletagmanager.com/gtag/js?id=G-F1ZYDC5LV5" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-F1ZYDC5LV5');`}</Script>{children}</body>
    </html>
  );
}
