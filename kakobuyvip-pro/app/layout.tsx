import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kakobuyvip.pro"),
  title: {
    default: "Kakobuy VIP Pro — Shipping, Warehouse & Returns Guide",
    template: "%s | Kakobuy VIP",
  },
  description:
    "An independent Kakobuy shipping calculator, warehouse-status, parcel packing, returns and QC troubleshooting guide.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html:`(()=>{const p=location.pathname.split('/')[1];document.documentElement.lang=['de','es','fr','it'].includes(p)?p:'en'})()`}}/>
      </head>
      <body>{children}</body>
    </html>
  );
}
