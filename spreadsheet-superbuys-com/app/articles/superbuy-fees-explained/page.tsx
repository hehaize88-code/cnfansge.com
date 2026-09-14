import type { Metadata } from "next";
import { feesArticle } from "../../seo-article-data";
import { SeoArticlePage } from "../../seo-article-page";

export const metadata: Metadata = {
  title: "Superbuy Fees Explained: Complete 2026 Cost Guide",
  description: feesArticle.description,
  keywords: ["superbuy fees", "superbuy service fee", "superbuy shipping fees", "superbuy agent fees"],
  alternates: { canonical: `/articles/${feesArticle.slug}/` },
};

export default function Page() { return <SeoArticlePage article={feesArticle} />; }
