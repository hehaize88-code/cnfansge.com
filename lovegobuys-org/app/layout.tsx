import type { Metadata } from "next";
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
