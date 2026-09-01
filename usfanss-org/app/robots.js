export const dynamic = "force-static";

export default function robots() {
  const isProduction = process.env.SITE_MODE === "production";
  return {
    rules: isProduction
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: "https://usfanss.org/sitemap.xml",
  };
}
