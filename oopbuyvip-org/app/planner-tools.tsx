"use client";
import { useState } from "react";
import type { Language } from "./content";
import { plannerCopy } from "./planner-copy";
import { parcelWeights } from "./parcel-math.mjs";

export function ParcelWorksheet({ lang }: { lang: Language }) {
  const t = plannerCopy[lang];
  const [values, setValues] = useState(["", "", "", "", ""]);
  const [result, setResult] = useState<ReturnType<typeof parcelWeights>>(null);
  const [error, setError] = useState(false);
  const format = new Intl.NumberFormat(lang, { maximumFractionDigits: 3 });
  return <section className="section planner-panel" id="parcel-worksheet">
    <p className="eyebrow">OOPBUY / {t.heading}</p><h2>{t.heading}</h2><p>{t.intro}</p>
    <form onSubmit={e => { e.preventDefault(); const [g,l,w,h,d] = values.map(Number); const next = parcelWeights(g,l,w,h,d); setResult(next); setError(!next); if (next) (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "parcel_calculate", { page_language: lang, page_path: window.location.pathname }); }}>
      <div className="planner-inputs">{t.labels.map((label, i) => <label key={label}>{label}<input type="number" min="0.001" step="any" required inputMode="decimal" value={values[i]} onChange={e => { setValues(values.map((v, index) => index === i ? e.target.value : v)); setResult(null); setError(false); }} /></label>)}</div>
      <div className="planner-actions"><button className="button-link" type="submit">{t.calculate}</button><button type="button" className="planner-example" onClick={() => { setValues(["2000", "40", "30", "20", "6000"]); setResult(null); setError(false); }}>{t.example}</button></div>
    </form>
    <div aria-live="polite" aria-atomic="true">{error && <p role="alert">{t.error}</p>}{result && <dl className="planner-results">{[result.volume,result.actual,result.volumetric,result.comparison].map((value,i) => <div key={t.results[i]}><dt>{t.results[i]}</dt><dd>{format.format(value)}</dd></div>)}</dl>}</div>
    <p className="planner-note">{t.note}</p>
  </section>;
}
