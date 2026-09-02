import "../globals.css";
import { languages } from "../../lib/data";

export const metadata = {
  metadataBase: new URL("https://usfanss.shop"),
  title: {
    default: "USFans Spreadsheet 2026 | Finds, QC & Shipping Guide",
    template: "%s | USFans Index"
  },
  description:
    "An independent USFans spreadsheet with curated product routes, QC guidance, sizing research and international shipping planning.",
  applicationName: "USFans Index",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "USFans Spreadsheet 2026",
    description: "Curated finds, QC guidance and a clearer route from product research to parcel planning.",
    siteName: "USFans Index",
    images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: "USFans Index" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "USFans Spreadsheet 2026",
    description: "Curated finds, QC guidance and international shipping research.",
    images: ["/og-cover.svg"]
  }
};

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;
  const language = languages.includes(lang) ? lang : "en";
  return <html lang={language}><body>{children}</body></html>;
}
