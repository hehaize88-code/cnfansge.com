import Link from "next/link";
import { articles, type ArticleSlug } from "@/lib/articles";
import { editorialUI } from "@/lib/editorial-ui";
import type { Locale } from "@/lib/site-data";

const bySection: Record<string, ArticleSlug[]> = {
  spreadsheet: ["sugargoo-spreadsheet-guide-2026", "sugargoo-link-not-working-weidian-taobao", "sugargoo-fees-total-cost-guide"],
  finds: ["sugargoo-link-not-working-weidian-taobao", "sugargoo-spreadsheet-guide-2026", "sugargoo-first-order-checkpoints"],
  guide: ["sugargoo-first-order-checkpoints", "sugargoo-fees-total-cost-guide", "sugargoo-warehouse-storage-returns"],
  shipping: ["sugargoo-fees-total-cost-guide", "sugargoo-shipping-calculator-estimate-check", "sugargoo-shipping-weight-guide-2026"],
  qc: ["sugargoo-qc-photo-checklist", "sugargoo-extra-qc-photo-request-brief", "sugargoo-warehouse-storage-returns"],
  faq: ["sugargoo-warehouse-storage-returns", "sugargoo-fees-total-cost-guide", "sugargoo-support-request-evidence-checklist"],
};
export function GuideRoutes({locale, section}:{locale:Locale; section:string}) {
  const slugs = bySection[section];
  if (!slugs) return null;
  return <nav className="guide-routes page-width" aria-label={editorialUI[locale].related}><h2>{editorialUI[locale].related}</h2><div>{slugs.map(slug => <Link href={`/${locale}/articles/${slug}/`} key={slug}>{articles[locale][slug].title}<span aria-hidden="true">↗</span></Link>)}</div></nav>;
}
