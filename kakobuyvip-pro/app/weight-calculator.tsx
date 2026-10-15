"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "./site-data";
import { track } from "./analytics-events";

const labels = {
  en:{title:"Parcel weight calculator",intro:"Enter centimetres and kilograms. Copy the divisor and rounding increment from your chosen route; the result is a planning weight, not a price.",weight:"Actual packed weight (kg)",length:"Length (cm)",width:"Width (cm)",height:"Height (cm)",divisor:"Route divisor (cm³/kg)",increment:"Billing increment (kg)",button:"Calculate weight",volume:"Volumetric weight",billable:"Rounded chargeable weight",note:"Model: round up the greater of actual and volumetric weight. Check any minimum weight, limits and exceptions on the live route.",error:"Enter positive numbers in every field."},
  de:{title:"Paketgewicht berechnen",intro:"Zentimeter und Kilogramm eingeben. Divisor und Gewichtsschritt der gewählten Linie übernehmen; das Ergebnis ist Planungsgewicht, kein Preis.",weight:"Packgewicht (kg)",length:"Länge (cm)",width:"Breite (cm)",height:"Höhe (cm)",divisor:"Linien-Divisor (cm³/kg)",increment:"Abrechnungsschritt (kg)",button:"Gewicht berechnen",volume:"Volumengewicht",billable:"Gerundetes Abrechnungsgewicht",note:"Modell: höheren Wert aus Ist- und Volumengewicht aufrunden. Mindestgewicht, Grenzen und Ausnahmen der aktuellen Linie prüfen.",error:"In jedes Feld eine positive Zahl eingeben."},
  es:{title:"Calculadora de peso del paquete",intro:"Introduce centímetros y kilogramos. Copia divisor e incremento de la ruta elegida; el resultado es un peso orientativo, no un precio.",weight:"Peso embalado real (kg)",length:"Largo (cm)",width:"Ancho (cm)",height:"Alto (cm)",divisor:"Divisor de ruta (cm³/kg)",increment:"Incremento facturable (kg)",button:"Calcular peso",volume:"Peso volumétrico",billable:"Peso facturable redondeado",note:"Modelo: redondear hacia arriba el mayor entre peso real y volumétrico. Revisa mínimos, límites y excepciones de la ruta actual.",error:"Introduce números positivos en todos los campos."},
  fr:{title:"Calculateur de poids du colis",intro:"Saisissez centimètres et kilogrammes. Reprenez diviseur et palier de la ligne choisie ; le résultat est un poids de planification, pas un prix.",weight:"Poids emballé réel (kg)",length:"Longueur (cm)",width:"Largeur (cm)",height:"Hauteur (cm)",divisor:"Diviseur de ligne (cm³/kg)",increment:"Palier facturable (kg)",button:"Calculer le poids",volume:"Poids volumétrique",billable:"Poids facturable arrondi",note:"Modèle : arrondir vers le haut le maximum entre poids réel et volumétrique. Vérifiez minimum, limites et exceptions de la ligne actuelle.",error:"Saisissez un nombre positif dans chaque champ."},
  it:{title:"Calcolatore del peso del pacco",intro:"Inserisci centimetri e chilogrammi. Copia divisore e scatto dalla linea scelta: il risultato è un peso di pianificazione, non un prezzo.",weight:"Peso reale imballato (kg)",length:"Lunghezza (cm)",width:"Larghezza (cm)",height:"Altezza (cm)",divisor:"Divisore della linea (cm³/kg)",increment:"Scatto fatturabile (kg)",button:"Calcola peso",volume:"Peso volumetrico",billable:"Peso fatturabile arrotondato",note:"Modello: arrotonda per eccesso il maggiore tra peso reale e volumetrico. Verifica minimo, limiti ed eccezioni della linea attuale.",error:"Inserisci numeri positivi in ogni campo."}
};

export function calculateWeight(weight:number,length:number,width:number,height:number,divisor:number,increment:number) {
  const inputs=[weight,length,width,height,divisor,increment];
  if(inputs.some(n=>!Number.isFinite(n)||n<=0)) return null;
  const volume=length*width*height/divisor;
  const billable=Math.ceil((Math.max(weight,volume)/increment)-1e-10)*increment;
  return Number.isFinite(volume)&&Number.isFinite(billable)?{volume,billable}:null;
}

export default function WeightCalculator({locale}:{locale:Locale}) {
  const c=labels[locale];
  const [result,setResult]=useState<{volume:number;billable:number}|null>(null);
  const [error,setError]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const values=["weight","length","width","height","divisor","increment"].map(key=>Number(data.get(key)));
    const next=calculateWeight(...values as [number,number,number,number,number,number]);
    setResult(next);setError(!next);
    if(next) track("shipping_weight_calculated",{page_language:locale});
  }
  const format=(n:number)=>new Intl.NumberFormat(locale,{maximumFractionDigits:3}).format(n);
  return <section className="section weight-tool" aria-labelledby="weight-title"><h2 id="weight-title">{c.title}</h2><p>{c.intro}</p><form onSubmit={submit} onChange={()=>{setResult(null);setError(false);}}><div className="weight-fields">{(["weight","length","width","height","divisor","increment"] as const).map(key=><label key={key} htmlFor={`weight-${key}`}>{c[key]}<input id={`weight-${key}`} name={key} type="number" min="0.001" step="any" required inputMode="decimal"/></label>)}</div><button type="submit" className="primary-action">{c.button}</button></form><div aria-live="polite" className="weight-result">{error&&<p role="alert">{c.error}</p>}{result&&<dl><div><dt>{c.volume}</dt><dd>{format(result.volume)} kg</dd></div><div><dt>{c.billable}</dt><dd>{format(result.billable)} kg</dd></div></dl>}</div><p className="tool-note">{c.note}</p></section>;
}
