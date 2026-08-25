import type { Metadata } from "next";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", images: [{ url: "/superbuy-logo.png", width: 756, height: 120, alt: "Superbuy spreadsheet research" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/superbuy-logo.png"] },
  };
}
