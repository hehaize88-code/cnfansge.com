import type { Metadata } from "next";
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
    </html>
  );
}
