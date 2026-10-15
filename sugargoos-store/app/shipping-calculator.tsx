"use client";

import { useMemo, useState } from "react";
import { Box, Calculator, Scale } from "lucide-react";
import type { Language } from "./site-data";
import { utilityCopy } from "./site-utility-copy";
import { planWeight } from "./planning-logic";

const labels = {
  en: { title: "Chargeable-weight planner", actual: "Actual weight", length: "Length", width: "Width", height: "Height", volumetric: "Volumetric weight", chargeable: "Planning weight", note: "Uses L × W × H ÷ 5000 as an educational example. Your carrier may use another divisor or rule." },
  de: { title: "Planer für abrechenbares Gewicht", actual: "Ist-Gewicht", length: "Länge", width: "Breite", height: "Höhe", volumetric: "Volumengewicht", chargeable: "Planungsgewicht", note: "Beispiel mit L × B × H ÷ 5000. Der aktuelle Transporteur kann eine andere Regel verwenden." },
  es: { title: "Planificador de peso facturable", actual: "Peso real", length: "Largo", width: "Ancho", height: "Alto", volumetric: "Peso volumétrico", chargeable: "Peso de planificación", note: "Ejemplo educativo con L × A × H ÷ 5000. El transportista puede aplicar otra fórmula." },
  fr: { title: "Planificateur du poids facturable", actual: "Poids réel", length: "Longueur", width: "Largeur", height: "Hauteur", volumetric: "Poids volumétrique", chargeable: "Poids de planification", note: "Exemple avec L × l × H ÷ 5000. Le transporteur actuel peut appliquer une autre règle." },
  it: { title: "Pianificatore del peso fatturabile", actual: "Peso reale", length: "Lunghezza", width: "Larghezza", height: "Altezza", volumetric: "Peso volumetrico", chargeable: "Peso di pianificazione", note: "Esempio didattico con L × P × A ÷ 5000. Il vettore può usare una formula diversa." },
} as const;

export function ShippingCalculator({ lang }: { lang: Language }) {
  const t = labels[lang];
  const u = utilityCopy[lang];
  const [actual, setActual] = useState("2.4");
  const [length, setLength] = useState("40");
  const [width, setWidth] = useState("30");
  const [height, setHeight] = useState("18");
  const [rule, setRule] = useState("5000");
  const result = useMemo(() => planWeight([actual, length, width, height], rule), [actual, height, length, width, rule]);
  const format = (value: number) => new Intl.NumberFormat(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

  return (
    <section className="calculator-card" aria-labelledby="shipping-calculator-title">
      <div className="calculator-heading">
        <span className="icon-tile"><Calculator size={22} aria-hidden="true" /></span>
        <div>
          <p className="eyebrow">{u.planner}</p>
          <h2 id="shipping-calculator-title">{t.title}</h2>
        </div>
      </div>
      <div className="calculator-grid">
        <label><span>{t.actual} (kg)</span><input type="number" min="0" step="0.01" value={actual} onChange={(event) => setActual(event.target.value)} /></label>
        <label><span>{t.length} (cm)</span><input type="number" min="0" step="0.1" value={length} onChange={(event) => setLength(event.target.value)} /></label>
        <label><span>{t.width} (cm)</span><input type="number" min="0" step="0.1" value={width} onChange={(event) => setWidth(event.target.value)} /></label>
        <label><span>{t.height} (cm)</span><input type="number" min="0" step="0.1" value={height} onChange={(event) => setHeight(event.target.value)} /></label>
      </div>
      <label className="calculator-rule"><span>{u.rule}</span><select value={rule} onChange={(event) => setRule(event.target.value)}><option value="5000">{u.divisor}: 5000</option><option value="6000">{u.divisor}: 6000</option><option value="actual">{u.actualOnly}</option></select></label>
      <div className="calculator-results" aria-live="polite" aria-atomic="true">
        <div><Box size={18} aria-hidden="true" /><span>{t.volumetric}</span><strong>{result?.volumetric != null ? `${format(result.volumetric)} kg` : "—"}</strong></div>
        <div className="result-primary"><Scale size={18} aria-hidden="true" /><span>{t.chargeable}</span><strong>{result ? `${format(result.chargeable)} kg` : "—"}</strong></div>
      </div>
      {!result && <p className="calculator-note" role="alert">{u.invalid}</p>}
      <p className="calculator-note">{u.calcNote}</p>
    </section>
  );
}

