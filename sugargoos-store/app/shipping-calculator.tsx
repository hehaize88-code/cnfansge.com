"use client";

import { useMemo, useState } from "react";
import { Box, Calculator, Scale } from "lucide-react";
import type { Language } from "./site-data";

const labels = {
  en: { title: "Chargeable-weight planner", actual: "Actual weight", length: "Length", width: "Width", height: "Height", volumetric: "Volumetric weight", chargeable: "Planning weight", note: "Uses L × W × H ÷ 5000 as an educational example. Your carrier may use another divisor or rule." },
  de: { title: "Planer für abrechenbares Gewicht", actual: "Ist-Gewicht", length: "Länge", width: "Breite", height: "Höhe", volumetric: "Volumengewicht", chargeable: "Planungsgewicht", note: "Beispiel mit L × B × H ÷ 5000. Der aktuelle Transporteur kann eine andere Regel verwenden." },
  es: { title: "Planificador de peso facturable", actual: "Peso real", length: "Largo", width: "Ancho", height: "Alto", volumetric: "Peso volumétrico", chargeable: "Peso de planificación", note: "Ejemplo educativo con L × A × H ÷ 5000. El transportista puede aplicar otra fórmula." },
  fr: { title: "Planificateur du poids facturable", actual: "Poids réel", length: "Longueur", width: "Largeur", height: "Hauteur", volumetric: "Poids volumétrique", chargeable: "Poids de planification", note: "Exemple avec L × l × H ÷ 5000. Le transporteur actuel peut appliquer une autre règle." },
  it: { title: "Pianificatore del peso fatturabile", actual: "Peso reale", length: "Lunghezza", width: "Larghezza", height: "Altezza", volumetric: "Peso volumetrico", chargeable: "Peso di pianificazione", note: "Esempio didattico con L × P × A ÷ 5000. Il vettore può usare una formula diversa." },
} as const;

export function ShippingCalculator({ lang }: { lang: Language }) {
  const t = labels[lang];
  const [actual, setActual] = useState(2.4);
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(18);
  const volumetric = useMemo(() => Math.max(0, (length * width * height) / 5000), [height, length, width]);
  const chargeable = Math.max(actual, volumetric);

  return (
    <section className="calculator-card" aria-labelledby="shipping-calculator-title">
      <div className="calculator-heading">
        <span className="icon-tile"><Calculator size={22} aria-hidden="true" /></span>
        <div>
          <p className="eyebrow">Planning tool</p>
          <h2 id="shipping-calculator-title">{t.title}</h2>
        </div>
      </div>
      <div className="calculator-grid">
        <label><span>{t.actual} (kg)</span><input type="number" min="0" step="0.1" value={actual} onChange={(event) => setActual(Number(event.target.value))} /></label>
        <label><span>{t.length} (cm)</span><input type="number" min="0" value={length} onChange={(event) => setLength(Number(event.target.value))} /></label>
        <label><span>{t.width} (cm)</span><input type="number" min="0" value={width} onChange={(event) => setWidth(Number(event.target.value))} /></label>
        <label><span>{t.height} (cm)</span><input type="number" min="0" value={height} onChange={(event) => setHeight(Number(event.target.value))} /></label>
      </div>
      <div className="calculator-results">
        <div><Box size={18} aria-hidden="true" /><span>{t.volumetric}</span><strong>{volumetric.toFixed(2)} kg</strong></div>
        <div className="result-primary"><Scale size={18} aria-hidden="true" /><span>{t.chargeable}</span><strong>{chargeable.toFixed(2)} kg</strong></div>
      </div>
      <p className="calculator-note">{t.note}</p>
    </section>
  );
}

