"use client";

import { useState } from "react";
import { calculateParcelWeight } from "../lib/parcel-weight.mjs";

export default function WeightCalculator({ copy, lang }) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const defaults = { actual: "3.2", length: "40", width: "30", height: "25", divisor: "6000" };
  const format = new Intl.NumberFormat(lang, { maximumFractionDigits: 2 });
  function calculate(event) {
    event.preventDefault();
    const value = calculateParcelWeight(Object.fromEntries(new FormData(event.currentTarget)));
    setResult(value);
    setError(!value);
    if (value && typeof window.gtag === "function") window.gtag("event", "parcel_weight_calculate", { page_language: lang, source_path: window.location.pathname });
  }
  return <section className="weight-calculator" aria-labelledby="weight-title">
    <h2 id="weight-title">{copy.title}</h2><p>{copy.intro}</p>
    <form onSubmit={calculate} onChange={() => { setResult(null); setError(false); }}>
      <div className="weight-fields">{Object.entries(defaults).map(([key, value]) => <label key={key}>{copy[key]}<input type="number" name={key} defaultValue={value} min="0.001" step="any" required inputMode="decimal" aria-describedby={key === "divisor" ? "divisor-help" : undefined} /></label>)}</div>
      <p id="divisor-help" className="calculator-help">{copy.divisorHelp}</p>
      <button type="submit" className="button primary">{copy.button}<span aria-hidden="true">→</span></button>
    </form>
    <div aria-live="polite" aria-atomic="true">{error && <p role="alert">{copy.error}</p>}{result && <div className="weight-results"><p><span>{copy.volume}</span><strong>{format.format(result.volumetric)} kg</strong></p><p><span>{copy.basis}</span><strong>{format.format(result.basis)} kg</strong></p></div>}</div>
    <p className="calculator-formula">{copy.formula}</p><p className="calculator-help">{copy.note}</p>
  </section>;
}
