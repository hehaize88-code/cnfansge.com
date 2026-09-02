import "../globals.css";

export const metadata = {
  metadataBase: new URL("https://sugargoos.uk"),
  title: "Sugargoo UK Spreadsheet 2026 — Finds, QC & Shipping Guide",
  description: "An independent UK-focused Sugargoo spreadsheet with curated finds, QC guidance, shipping planning and direct product routes.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
