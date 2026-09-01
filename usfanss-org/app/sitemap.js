import { languages, routePaths } from "../lib/content";

export const dynamic = "force-static";

export default function sitemap() {
  return languages.flatMap((language) =>
    routePaths.map((path) => ({
      url: `https://usfanss.org/${language}${path}`,
      lastModified: new Date("2026-09-01T00:00:00.000Z"),
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
