import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sugargoos.shop"),
  title: {
    default: "Sugargoo Finds — Spreadsheet, QC & Shipping Guides",
    template: "%s | Sugargoo Finds",
  },
  description:
    "An independent Sugargoo spreadsheet with current product routes, practical QC checks, shipping guidance and clearly labeled reference prices.",
  robots: { index: false, follow: false },
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
