import { languages, localPaths } from "../data/site";

export default function sitemap() {
  const now = new Date("2026-09-01T00:00:00Z");
  return languages.flatMap((lang) =>
    localPaths.map((parts) => ({
      url: `https://sugargoos.uk/${lang}${parts.length ? `/${parts.join("/")}` : ""}`,
      lastModified: now,
      changeFrequency: parts[0] === "articles" ? "monthly" : "weekly",
      priority: parts.length === 0 ? 1 : parts.length === 1 ? 0.8 : 0.65
    }))
  );
}
