export const languages = ["en", "de", "es", "fr", "it"] as const;
export type Lang = typeof languages[number];
export const pageKeys = ["spreadsheet", "finds", "guides", "qc", "shipping", "faq", "articles"] as const;
export type PageKey = typeof pageKeys[number];
export const SITE_ORIGIN = "https://litbuys.store";
export const CATALOG_ORIGIN = "https://cnfansge.com";

export function isLanguage(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export function localPath(lang: Lang, path = "/") {
  const clean = path.split(/[?#]/)[0].replace(/^\/(en|de|es|fr|it)(?=\/|$)/, "");
  const normalized = `/${clean.replace(/^\/+|\/+$/g, "")}`;
  return `${lang === "en" ? "" : `/${lang}`}${normalized === "/" ? "/" : `${normalized}/`}`;
}

export function languageAlternates(path: string) {
  return Object.fromEntries([
    ...languages.map((lang) => [lang, SITE_ORIGIN + localPath(lang, path)]),
    ["x-default", SITE_ORIGIN + localPath("en", path)],
  ]);
}
