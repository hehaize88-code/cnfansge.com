"use client";
import { useMemo, useState } from 'react';
import Link from 'next/link';

const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

export default function ArticleDirectory({ articles, language, labels, cta }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const filtered = useMemo(() => articles.filter(article =>
    (category === 'all' || category === article.category) &&
    normalize(`${article.title} ${article.dek}`).includes(normalize(query.trim()))
  ), [articles, category, query]);
  return <>
    <div className="guide-tools">
      <label><span>{labels.search}</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={labels.search} /></label>
      <div className="filter-row" aria-label={labels.topics}>{['all','buying','qc','shipping'].map(value=><button key={value} type="button" aria-pressed={category===value} className={category===value?'active':''} onClick={()=>setCategory(value)}>{labels[value]}</button>)}</div>
      <p role="status">{filtered.length} / {articles.length} {labels.count}</p>
    </div>
    <div className="article-grid directory-grid">{filtered.map(article=><Link href={`/${language}/articles/${article.slug}`} className="article-card" key={article.slug}>
      <span>{labels[article.category]} · {article.minutes} {labels.reading}</span>
      <h3>{article.title}</h3><p>{article.dek}</p><b>{cta}</b>
    </Link>)}</div>
    {!filtered.length && <p className="empty-state">{labels.empty}</p>}
  </>;
}
