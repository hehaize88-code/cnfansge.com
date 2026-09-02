import { languages, routes } from "../lib/data";

export const dynamic = "force-static";

// Keep dates route-specific so future editorial releases update only the URLs
// whose visible content or metadata actually changed.
const lastModifiedByRoute = {
  "": "2026-09-02",
  spreadsheet: "2026-09-02",
  finds: "2026-09-02",
  guide: "2026-09-02",
  qc: "2026-09-02",
  shipping: "2026-09-02",
  faq: "2026-09-02",
  articles: "2026-09-02",
  "articles/use-usfans-spreadsheet": "2026-09-02",
  "articles/beginner-ordering-guide": "2026-09-02",
  "articles/qc-photo-checklist": "2026-09-02",
  "articles/international-shipping-cost": "2026-09-02",
  "articles/warehouse-returns-guide": "2026-09-02",
  "articles/taobao-weidian-1688": "2026-09-02"
};

export default function sitemap() {
  const base = "https://usfanss.shop";
  return languages.flatMap((language) =>
    routes.map((route) => ({
      url: `${base}/${language}${route ? `/${route}` : ""}`,
      lastModified: new Date(`${lastModifiedByRoute[route]}T00:00:00.000Z`),
      changeFrequency: route.startsWith("articles/") ? "monthly" : "weekly",
      priority: route === "" ? 1 : route.startsWith("articles/") ? 0.7 : 0.8
    }))
  );
}
