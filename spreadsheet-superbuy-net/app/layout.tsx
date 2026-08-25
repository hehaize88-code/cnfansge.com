import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-superbuy.net"),
  title: {
    default: "Superbuy Spreadsheet 2026 | Checked Links & QC Notes",
    template: "%s | Superbuy Spreadsheet 2026",
  },
  description: "Browse a regularly checked Superbuy spreadsheet with current product links, USD price references, categories, QC notes and practical parcel guidance.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Superbuy Spreadsheet 2026",
    description: "Verified links. Clear QC checks. Smarter hauls.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary", title: "Superbuy Spreadsheet 2026", description: "Verified links. Clear QC checks. Smarter hauls." },
  icons: { icon: "/favicon.svg" },
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
