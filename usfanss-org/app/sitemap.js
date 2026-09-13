import { languages, routePaths } from "../lib/content";

export const dynamic = "force-static";

export default function sitemap() {
  return languages.flatMap((language) =>
    routePaths.map((path) => ({
      url: `https://usfanss.org/${language}${path}`,
      lastModified: new Date(path.includes("usfans-warehouse-measurement-photo-evidence") ? "2026-09-13T00:00:00.000Z" : path.includes("usfans-warehouse-size-tag-evidence") ? "2026-09-11T00:00:00.000Z" : path.includes("usfans-warehouse-photo-angle-map") ? "2026-09-09T00:00:00.000Z" : path.includes("usfans-warehouse-evidence-gap-map") ? "2026-09-07T00:00:00.000Z" : "2026-09-01T00:00:00.000Z"),
      changeFrequency: path.includes("articles/") ? "monthly" : "weekly",
      priority: path === "" ? 1 : path === "/spreadsheet" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries([
          ...languages.map((code) => [code, `https://usfanss.org/${code}${path}`]),
          ["x-default", `https://usfanss.org/en${path}`],
        ]),
      },
    }))
  );
}
