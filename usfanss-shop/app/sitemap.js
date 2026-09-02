import { languages, routes } from "../lib/data";

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://usfanss.shop";
  return languages.flatMap((language) =>
    routes.map((route) => ({
      url: `${base}/${language}${route ? `/${route}` : ""}`,
      lastModified: new Date("2026-09-02T00:00:00.000Z"),
      changeFrequency: route.startsWith("articles/") ? "monthly" : "weekly",
      priority: route === "" ? 1 : route.startsWith("articles/") ? 0.7 : 0.8
    }))
  );
}
