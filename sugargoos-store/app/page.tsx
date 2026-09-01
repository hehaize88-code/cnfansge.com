import type { Metadata } from "next";
import { SitePage } from "./site-page";
import { SITE_ORIGIN, copy, languages, localizedPath } from "./site-data";

export const metadata: Metadata = {
  title: "Sugargoo Spreadsheet 2026 | Finds, QC Photos & Shipping Guide",
  description: "Independent Sugargoo spreadsheet with searchable product routes, indicative USD prices, QC photo checklists, shipping weight tools and long-form buyer guides.",
  alternates: {
    canonical: SITE_ORIGIN,
    languages: { ...Object.fromEntries(languages.map((lang) => [lang, `${SITE_ORIGIN}${localizedPath(lang)}`])), "x-default": SITE_ORIGIN },
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Sugar Scout — Sugargoo Spreadsheet & Buyer Guide",
        url: SITE_ORIGIN,
        inLanguage: ["en", "de", "es", "fr", "it"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://cnfansge.com/search.html?keywords={search_term_string}&channelid=2",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "Sugar Scout",
        url: SITE_ORIGIN,
        description: "Independent Sugargoo product-discovery and buyer-education resource.",
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.en.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SitePage lang="en" /></>;
}
