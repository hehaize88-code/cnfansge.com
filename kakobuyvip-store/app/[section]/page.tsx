import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchPage, SectionKey } from "@/components/ResearchPage";

const sections: SectionKey[] = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];

const seo: Record<SectionKey, { title: string; description: string; keywords: string[] }> = {
  spreadsheet: { title: "Kakobuy Spreadsheet 2026: Finds & Product Links", description: "Browse a visual Kakobuy spreadsheet with current product routes, matching images, USD references and focused categories.", keywords: ["Kakobuy spreadsheet", "Kakobuy links", "Kakobuy products"] },
  finds: { title: "Kakobuy Finds 2026: Current Product Routes", description: "Explore current Kakobuy finds with matching product images, useful category labels and direct detail routes.", keywords: ["Kakobuy finds", "Kakobuy product links", "Kakobuy items"] },
  guide: { title: "How to Use Kakobuy: Order and Warehouse Guide", description: "Understand the Kakobuy shopping-agent flow from a live product link to warehouse QC, storage, returns and international shipping.", keywords: ["how to use Kakobuy", "Kakobuy guide", "Kakobuy order"] },
  qc: { title: "Kakobuy QC Guide: How to Check Warehouse Photos", description: "Use a practical Kakobuy QC checklist for item identity, shape, measurements, stitching, prints and visible defects.", keywords: ["Kakobuy QC", "Kakobuy QC photos", "Kakobuy quality check"] },
  shipping: { title: "Kakobuy Shipping Guide: Cost, Weight and Packing", description: "Plan Kakobuy shipping with actual weight, dimensions, packaging, live route rules, customs uncertainty and current estimates.", keywords: ["Kakobuy shipping", "Kakobuy shipping cost", "Kakobuy shipping calculator"] },
  faq: { title: "Kakobuy FAQ: Storage, Fees, Returns and QC", description: "Fact-checked answers about Kakobuy warehouse storage, costs, QC photos, returns, exchanges and international shipping.", keywords: ["Kakobuy FAQ", "Kakobuy fees", "Kakobuy return policy"] },
  articles: { title: "Kakobuy Guides and Review Articles 2026", description: "Read long-form Kakobuy guides covering ordering, QC photos, shipping cost, fees, storage, returns and user reviews.", keywords: ["Kakobuy guide", "Kakobuy review", "Kakobuy articles"] },
};

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (!sections.includes(section as SectionKey)) return {};
  return {
    ...seo[section as SectionKey],
    alternates: { canonical: `/${section}` },
  };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section as SectionKey)) notFound();
  return <ResearchPage section={section as SectionKey}/>;
}
