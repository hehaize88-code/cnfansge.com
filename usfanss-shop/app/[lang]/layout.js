import "../globals.css";
import { languages } from "../../lib/data";

export const metadata = {
  metadataBase: new URL("https://usfanss.shop"),
  title: {
    default: "USFans Parcel Planner 2026 | QC, Weight & Shipping Decisions",
    template: "%s | USFans Index"
  },
  description:
    "Independent USFans parcel research covering product routes, warehouse QC evidence, chargeable weight, packaging and international shipping decisions.",
  applicationName: "USFans Index",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "USFans Parcel Planner 2026",
    description: "Product routes, QC evidence, chargeable weight and international parcel decisions.",
    siteName: "USFans Index",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "USFans Parcel Planner" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "USFans Parcel Planner 2026",
    description: "Product routes, QC evidence, chargeable weight and international parcel decisions.",
    images: ["/og-cover.png"]
  }
};

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;
  const language = languages.includes(lang) ? lang : "en";
  return <html lang={language}><body>{children}</body></html>;
}
