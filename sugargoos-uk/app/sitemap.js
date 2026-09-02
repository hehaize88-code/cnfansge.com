import { languages, lastModifiedForPath, localPaths } from "../data/site";

export default function sitemap() {
  return languages.flatMap((lang) =>
    localPaths.map((parts) => ({
      url: `https://sugargoos.uk/${lang}${parts.length ? `/${parts.join("/")}` : ""}`,
      lastModified: new Date(lastModifiedForPath(parts)),
      changeFrequency: parts[0] === "articles" ? "monthly" : "weekly",
      priority: parts.length === 0 ? 1 : parts.length === 1 ? 0.8 : 0.65
    }))
  );
}
