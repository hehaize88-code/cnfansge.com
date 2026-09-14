import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-superbuy.net"),
  title: {
    default: "Superbuy Spreadsheet 2026: Links, QC & Shipping",
    template: "%s | Superbuy Spreadsheet",
  },
  description: "Use a checked Superbuy spreadsheet for current product links, exact options, warehouse QC, fees, shipping estimates and parcel planning.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Superbuy Spreadsheet 2026",
    description: "Checked links, warehouse QC, fee and shipping guidance for better-informed parcel decisions.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary", title: "Superbuy Spreadsheet 2026", description: "Checked links, warehouse QC, fee and shipping guidance." },
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
