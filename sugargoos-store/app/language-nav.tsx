"use client";

import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";
import { languages, type Language } from "./site-data";

const names: Record<Language, string> = { en: "EN", de: "DE", es: "ES", fr: "FR", it: "IT" };

function pathFor(pathname: string, target: Language) {
  const parts = pathname.split("/").filter(Boolean);
  if (["de", "es", "fr", "it"].includes(parts[0])) parts.shift();
  const suffix = parts.length ? `/${parts.join("/")}` : "";
  return target === "en" ? suffix || "/" : `/${target}${suffix}`;
}

export function LanguageNav({ current }: { current: Language }) {
  const pathname = usePathname();
  return (
    <details className="language-menu">
      <summary aria-label="Change language"><Globe2 size={17} aria-hidden="true" /> {names[current]}</summary>
      <div className="language-popover">
        {languages.map((lang) => (
          <a key={lang} href={pathFor(pathname, lang)} className={lang === current ? "active" : ""} hrefLang={lang}>
            <span>{names[lang]}</span>{lang === current && <small>Current</small>}
          </a>
        ))}
      </div>
    </details>
  );
}

