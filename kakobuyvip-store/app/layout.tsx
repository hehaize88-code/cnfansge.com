import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kakobuyvip.store"),
  title: "Kakobuy Spreadsheet & Finds 2026 | KakobuyVIP",
  description:
    "Independent Kakobuy spreadsheet, finds, QC, shipping and warehouse guides with matching product images and direct current routes.",
  keywords: ["Kakobuy spreadsheet", "Kakobuy finds", "Kakobuy QC", "Kakobuy shipping", "Kakobuy review"],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
    </html>
  );
}
