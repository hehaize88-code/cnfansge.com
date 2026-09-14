import type { Metadata } from "next";
import { agentVsForwardingArticle } from "../../seo-article-data";
import { SeoArticlePage } from "../../seo-article-page";

export const metadata: Metadata = {
  title: "Superbuy Shopping Agent vs Parcel Forwarding",
  description: agentVsForwardingArticle.description,
  keywords: ["superbuy shopping agent", "superbuy parcel forwarding", "superbuy forwarding fees", "superbuy agent service"],
  alternates: { canonical: `/articles/${agentVsForwardingArticle.slug}/` },
};

export default function Page() { return <SeoArticlePage article={agentVsForwardingArticle} />; }
