import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchPage, SectionKey } from "@/components/ResearchPage";
import { sectionMetadata } from "@/components/seo-data";

const sections: SectionKey[] = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (!sections.includes(section as SectionKey)) return {};
  return sectionMetadata(section as SectionKey, "en");
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section as SectionKey)) notFound();
  return <ResearchPage section={section as SectionKey} initialLang="en"/>;
}
