import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://usfanss.org"),
  title: "USFans Buyer Research 2026 | QC Evidence & Shipping Tools",
  description:
    "An independent USFans spreadsheet field guide with categorized finds, USD prices, QC checklists, sizing research and shipping tools.",
  robots:
    process.env.SITE_MODE === "production"
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
  openGraph: {
    siteName: "USFans Buyer Research",
    images: [{ url: "/usfans.png", width: 375, height: 123, alt: "USFans" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/usfans.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
