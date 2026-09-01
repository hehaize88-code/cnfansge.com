import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://usfanss.org"),
  title: "USFans Spreadsheet 2026 | Finds, QC & Shipping Field Guide",
  description:
    "An independent USFans spreadsheet field guide with categorized finds, USD prices, QC checklists, sizing research and shipping tools.",
  robots:
    process.env.SITE_MODE === "production"
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
