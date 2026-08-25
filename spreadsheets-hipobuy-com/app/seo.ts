import type { Metadata } from "next";

export const SITE_URL = "https://spreadsheets-hipobuy.com";
const DEFAULT_IMAGE = "/og.jpg";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Hipobuy Spreadsheet",
      type,
      images: [{ url: image, width: image === DEFAULT_IMAGE ? 1200 : 1024, height: image === DEFAULT_IMAGE ? 630 : 500, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
    ],
  };
}
