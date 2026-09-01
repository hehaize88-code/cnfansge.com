import type { PageSlug } from "@/lib/page-content";
import type { ArticleSlug } from "@/lib/articles";

export type ResearchBasis = {
  checked: string;
  sources: string[];
  metrics?: { label: string; value: string }[];
};

export const pageResearchBasis: Record<PageSlug, ResearchBasis> = {
  spreadsheet: {
    checked: "September 1, 2026",
    sources: [
      "Live destination, image and price-label review on cnfansge.com",
      "Sugargoo official buying-flow and DIY-order guides (2025–2026)",
      "Sugargoo official QC and shipping-estimator guides (2025)",
    ],
  },
  finds: {
    checked: "September 1, 2026",
    sources: [
      "Live product-route and category review on cnfansge.com",
      "Sugargoo official buying, QC and restricted-item guidance",
      "Manual separation of listing claims, warehouse evidence and parcel decisions",
    ],
  },
  guide: {
    checked: "September 1, 2026",
    sources: [
      "Understanding How to Buy From Taobao Using a Sugargoo Agent (official, August 2025)",
      "How to Use DIY Order on Sugargoo (official, September 2025)",
      "Sugargoo Forwarding Guide for Taobao, JD and 1688 (official, August 2025)",
    ],
  },
  qc: {
    checked: "September 1, 2026",
    sources: [
      "The Ultimate QC Guide for Overseas Buyers (official, August 2025)",
      "Sugargoo QC: Quality Check for Taobao, JD and 1688 (official, September 2025)",
      "Official guidance states five standard product photos and free retakes for unclear images; confirm the current order interface",
    ],
  },
  shipping: {
    checked: "September 1, 2026",
    sources: [
      "Estimate International Shipping Costs Online with Sugargoo (official, September 2025)",
      "How Does Package Consolidation Work at Sugargoo? (official, August 2025)",
      "Pre-shipment Package Simulation and Shipping Restrictions guides (official, September 2025)",
    ],
  },
  faq: {
    checked: "September 1, 2026",
    sources: [
      "Sugargoo official storage guide: 100-day free period; extension described as CNY 8 per order per month, up to 180 days per purchase (August 2025)",
      "Sugargoo Returns and Refunds guide (official, September 2025)",
      "Sugargoo Payment Methods guide (official, August 2025); availability must be checked at checkout",
    ],
  },
  articles: {
    checked: "September 1, 2026",
    sources: [
      "Sugargoo official public help and blog material",
      "Current live-interface checks where a figure can change",
      "Public review data is labeled separately from official platform claims",
    ],
  },
};

export const articleResearchBasis: Record<ArticleSlug, ResearchBasis> = {
  "sugargoo-spreadsheet-guide-2026": {
    checked: "September 1, 2026",
    sources: [
      "Sugargoo official buying-flow, DIY-order, QC and shipping-estimator guides",
      "Current live product routes, images and reference-price labels on cnfansge.com",
      "Route status is deliberately separated from seller, material and warehouse-quality claims",
    ],
  },
  "sugargoo-qc-photo-checklist": {
    checked: "September 1, 2026",
    sources: [
      "Sugargoo official QC guides published August and September 2025",
      "Official public guidance describes five standard product photos and free retakes for unclear images",
      "Current service scope and optional photography must be confirmed in the live order interface",
    ],
  },
  "sugargoo-shipping-weight-guide-2026": {
    checked: "September 1, 2026",
    sources: [
      "Sugargoo official shipping-estimator, consolidation and pre-shipment simulation guides",
      "Sugargoo official restricted-items and international-shipping guidance",
      "No route price, divisor or delivery estimate is treated as permanent",
    ],
  },
  "sugargoo-review-2026": {
    checked: "September 1, 2026",
    sources: [
      "Sugargoo official service, buying, QC, storage, shipping and refund guides",
      "Trustpilot public Sugargoo profile and review distribution checked September 1, 2026",
      "Recent positive and negative reviews were grouped by recurring topic; individual allegations were not treated as verified facts",
    ],
    metrics: [
      { label: "Trustpilot score", value: "3.4 / 5" },
      { label: "Public reviews", value: "641" },
      { label: "Five-star share", value: "60%" },
      { label: "One-star share", value: "19%" },
    ],
  },
};
