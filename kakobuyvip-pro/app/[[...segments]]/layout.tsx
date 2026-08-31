import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kakobuyvip.pro"),
  title: {
    default: "Kakobuy VIP Pro — Shipping, Warehouse & Returns Guide",
    template: "%s | Kakobuy VIP",
  },
  description:
    "An independent Kakobuy shipping calculator, warehouse-status, parcel packing, returns and QC troubleshooting guide.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/app-icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Kakobuy VIP Pro",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kakobuy VIP Pro — Shipping, Warehouse and Parcel Guides" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{segments?:string[]}>;
}>) {
  const first=(await params).segments?.[0];
  const lang=["de","es","fr","it"].includes(first||"")?first!:"en";
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
