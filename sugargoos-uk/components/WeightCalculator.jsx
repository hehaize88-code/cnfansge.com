"use client";

import { useMemo, useState } from "react";

const labels = {
  en: { length: "Length", width: "Width", height: "Height", actual: "Actual weight", divisor: "Route divisor", volume: "Volumetric", charge: "Planning weight", note: "Use the higher figure for a cautious comparison. The live route quote remains final." },
  de: { length: "Länge", width: "Breite", height: "Höhe", actual: "Ist-Gewicht", divisor: "Routendivisor", volume: "Volumengewicht", charge: "Planungsgewicht", note: "Für einen vorsichtigen Vergleich die höhere Zahl nutzen. Entscheidend ist das Live-Angebot." },
  es: { length: "Largo", width: "Ancho", height: "Alto", actual: "Peso real", divisor: "Divisor de ruta", volume: "Volumétrico", charge: "Peso de planificación", note: "Usa la cifra mayor para una comparación prudente. La cotización en vivo es la final." },
  fr: { length: "Longueur", width: "Largeur", height: "Hauteur", actual: "Poids réel", divisor: "Diviseur route", volume: "Volumétrique", charge: "Poids de planification", note: "Utilisez la valeur la plus élevée pour comparer. Le devis en direct reste final." },
  it: { length: "Lunghezza", width: "Larghezza", height: "Altezza", actual: "Peso reale", divisor: "Divisore rotta", volume: "Volumetrico", charge: "Peso di pianificazione", note: "Usa il valore più alto per un confronto prudente. Il preventivo live resta finale." }
};

export default function WeightCalculator({ lang = "en" }) {
  const t = labels[lang] || labels.en;
  const [dims, setDims] = useState({ length: 45, width: 35, height: 22, actual: 4.2, divisor: 6000 });
  const result = useMemo(() => {
    const volumetric = (dims.length * dims.width * dims.height) / dims.divisor;
    return { volumetric, chargeable: Math.max(volumetric, dims.actual) };
  }, [dims]);
  const change = (key) => (event) => setDims((current) => ({ ...current, [key]: Math.max(0, Number(event.target.value)) }));

  return (
    <div className="weight-card">
      <div className="dimension-grid">
        {["length", "width", "height"].map((key) => (
          <label key={key}><span>{t[key]} <b>cm</b></span><input type="number" min="0" value={dims[key]} onChange={change(key)} /></label>
        ))}
        <label><span>{t.actual} <b>kg</b></span><input type="number" step="0.1" min="0" value={dims.actual} onChange={change("actual")} /></label>
        <label><span>{t.divisor}</span><select value={dims.divisor} onChange={change("divisor")}><option value="5000">5000</option><option value="6000">6000</option><option value="7000">7000</option></select></label>
      </div>
      <div className="weight-results">
        <div><span>{t.volume}</span><strong>{result.volumetric.toFixed(2)} kg</strong></div>
        <div className="highlight"><span>{t.charge}</span><strong>{result.chargeable.toFixed(2)} kg</strong></div>
      </div>
      <p className="calculator-note">{t.note}</p>
    </div>
  );
}
