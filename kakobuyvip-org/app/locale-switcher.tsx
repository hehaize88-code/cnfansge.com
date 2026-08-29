"use client";

import { useEffect } from "react";

export default function LocaleSwitcher({ value, label, paths }: { value:string; label:string; paths:Record<string,string> }) {
  useEffect(()=>{ document.documentElement.lang=value; },[value]);
  return (
    <label className="locale-select">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => { window.location.href = paths[event.target.value]; }} aria-label={label}>
        <option value="en">EN</option><option value="de">DE</option><option value="es">ES</option><option value="fr">FR</option><option value="it">IT</option>
      </select>
    </label>
  );
}
