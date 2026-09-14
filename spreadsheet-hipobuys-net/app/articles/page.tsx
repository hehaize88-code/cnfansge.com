import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../components/GuideLayout";
import { articles } from "../article-data";

export const metadata: Metadata = {
  title: "Hipobuy Guides 2026: Spreadsheet, Fees, QC & Shipping",
  description: "Ten evidence-led Hipobuy guides covering spreadsheet searches, fees, QC photos, shipping cost, Europe routes, tracking, storage, returns and safety.",
  alternates: { canonical: "/articles/" }
};

export default function ArticlesPage() {
  return <GuideLayout kicker="Evidence-led buyer library" title="Hipobuy articles built around real decisions." intro="Long-form guides based on current official platform information, clearly separated from estimates, community reports and changing seller details.">
    <section className="article-hub">
      <div className="article-hub-intro"><p className="section-kicker">10 published guides</p><h2>Start with the workflow, then go deeper.</h2><p>The library follows real buyer decisions: find a listing, calculate fees, inspect QC, plan Europe shipping, manage storage, track the parcel and prepare evidence if something goes wrong.</p></div>
      <div className="article-card-grid">{articles.map((article, index) => <article className="article-card" key={article.slug}>
        <div className="article-card-top"><span>{String(index + 1).padStart(2, "0")}</span><p>{article.readTime}</p></div>
        {article.image ? <Link className="article-card-image" href={`/articles/${article.slug}/`}><img src={article.image} alt={article.imageAlt || ""} width="720" height="720" loading="lazy" /></Link> : <div className="article-card-visual"><b>{String(index + 1).padStart(2, "0")}</b><span>{article.keyword}</span></div>}
        <p className="article-keyword">{article.kicker}</p>
        <h2><Link href={`/articles/${article.slug}/`}>{article.title}</Link></h2>
        <p>{article.description}</p>
        <Link className="article-card-link" href={`/articles/${article.slug}/`}>Read full article <span>↗</span></Link>
      </article>)}</div>
    </section>
    <section className="editorial-note"><div><p className="section-kicker">Publishing standard</p><h2>Facts, claims and experience stay separate.</h2></div><div><p>Official platform statements are attributed and dated. Shipping figures remain estimates. Community reviews are used to identify recurring questions, not copied as universal conclusions.</p><ul><li>Enough detail to complete one buyer decision</li><li>A clearly defined purpose for every guide</li><li>Original checklists and decision frameworks</li><li>Visible source notes and update date</li><li>No fabricated review, delivery promise or price guarantee</li></ul></div></section>
  </GuideLayout>;
}
