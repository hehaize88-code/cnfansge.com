/** Cloudflare Worker entry point for Sugargoo Find Desk. */
import handler from "vinext/server/app-router-entry";
import sitemap from "../app/sitemap";

const HTML_CACHE_CONTROL =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

function crawlMetadata(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const path = new URL(request.url).pathname;
  // Serve file endpoints before Vinext's trailing-slash normalization.
  if (path === "/sitemap.xml/" || path === "/robots.txt/") {
    const url = new URL(request.url);
    url.pathname = path.slice(0, -1);
    return Response.redirect(url.toString(), 308);
  }
  if (path !== "/sitemap.xml" && path !== "/robots.txt") return null;
  const isSitemap = path === "/sitemap.xml";
  const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
  const body = isSitemap
    ? '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + sitemap().map((entry) =>
      `<url><loc>${escapeXml(entry.url)}</loc>${entry.lastModified ? `<lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>` : ""}${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ""}${entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : ""}</url>`
    ).join("") + "</urlset>"
    : "User-agent: *\nAllow: /\n\nSitemap: https://sugargoos.shop/sitemap.xml\n";
  return new Response(request.method === "HEAD" ? null : body, {
    headers: { "Content-Type": isSitemap ? "application/xml; charset=utf-8" : "text/plain; charset=utf-8", "Cache-Control": "public, max-age=300" },
  });
}

function canonicalRedirect(request: Request) {
  const url = new URL(request.url);
  const isApex = url.hostname === "sugargoos.shop";
  const isWww = url.hostname === "www.sugargoos.shop";
  if (!isApex && !isWww) return null;
  const original = url.toString();

  url.protocol = "https:";
  url.hostname = "sugargoos.shop";
  url.port = "";
  if (url.pathname === "/") url.pathname = "/en/";
  if (/^\/(en|de|es|fr|it)(?:\/|$)/.test(url.pathname) &&
      !url.pathname.endsWith("/") && !url.pathname.split("/").pop()?.includes(".")) {
    url.pathname += "/";
  }
  return url.toString() === original ? null : Response.redirect(url.toString(), 308);
}

function cacheableHtml(response: Response, cacheState: "HIT" | "MISS") {
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", HTML_CACHE_CONTROL);
  headers.set(
    "Cloudflare-CDN-Cache-Control",
    "public, max-age=3600, stale-while-revalidate=86400",
  );
  headers.set("X-Sugargoo-Cache", cacheState);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function localizeDocumentLanguage(response: Response, url: URL) {
  const language = url.pathname.match(/^\/(en|de|es|fr|it)(?:\/|$)/)?.[1];
  const contentType = response.headers.get("Content-Type") ?? "";
  if (!language || !contentType.includes("text/html")) return response;

  const headers = new Headers(response.headers);
  headers.set("Content-Language", language);
  headers.delete("Content-Length");
  const localized = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
  return new HTMLRewriter().on("html", {
    element(element) { element.setAttribute("lang", language); },
  }).transform(localized);
}

const worker = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const redirect = canonicalRedirect(request);
    if (redirect) return redirect;
    const metadata = crawlMetadata(request);
    if (metadata) return metadata;

    const url = new URL(request.url);
    const shouldCache =
      request.method === "GET" &&
      url.hostname === "sugargoos.shop" &&
      url.search === "";
    if (!shouldCache) {
      return localizeDocumentLanguage(await handler.fetch(request, env, ctx), url);
    }

    const edgeCache = (caches as CacheStorage & { default: Cache }).default;
    const versionedUrl = new URL(url);
    versionedUrl.searchParams.set("__site_version", "2026-10-01-editorial-2");
    const cacheKey = new Request(versionedUrl.toString(), { method: "GET" });
    const cached = await edgeCache.match(cacheKey);
    if (cached) return cacheableHtml(cached, "HIT");

    const response = await localizeDocumentLanguage(
      await handler.fetch(request, env, ctx),
      url,
    );
    const contentType = response.headers.get("Content-Type") ?? "";
    if (
      response.status !== 200 ||
      !contentType.includes("text/html") ||
      response.headers.has("Set-Cookie")
    ) {
      return response;
    }

    const fresh = cacheableHtml(response, "MISS");
    ctx.waitUntil(edgeCache.put(cacheKey, fresh.clone()));
    return fresh;
  },
};

export default worker;
