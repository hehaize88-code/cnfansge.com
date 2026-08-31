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
    icon: "/kakobuy.png",
    shortcut: "/kakobuy.png",
  },
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
