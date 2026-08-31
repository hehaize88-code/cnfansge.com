"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function LocaleSwitcher({ value, label, paths }: { value:string; label:string; paths:Record<string,string> }) {
  useEffect(()=>{ document.documentElement.lang=value; },[value]);
  return (
    <div className="locale-links" role="navigation" aria-label={label}>
      {Object.entries(paths).map(([language,path])=><Link href={path} key={language} className={language===value?"active":""} hrefLang={language}>{language.toUpperCase()}</Link>)}
    </div>
  );
}
