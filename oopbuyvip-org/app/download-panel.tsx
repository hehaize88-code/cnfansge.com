import type { Language } from "./content";
import { plannerCopy } from "./planner-copy";
export function DownloadPanel({ lang, showGuide = true }: { lang: Language; showGuide?: boolean }) {
  const t = plannerCopy[lang];
  return <section className="section planner-panel download-panel" id="planning-downloads"><p className="eyebrow">PDF / CSV</p><h2>{t.title}</h2><p>{t.body}</p><div className="planner-actions">{(["pdf", "csv"] as const).map(format => <a className="button-link" href={`/downloads/oopbuy-planner-${lang}.${format}`} download data-track="template_download" data-format={format} key={format}>{t[format]}</a>)}{showGuide && <a className="text-link" href={`/${lang}/articles/oopbuy-spreadsheet-template`} data-track="article_click" data-article="oopbuy-spreadsheet-template">{t.guide} →</a>}</div><p className="planner-note">{t.version}</p></section>;
}
