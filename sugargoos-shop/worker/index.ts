/** Cloudflare Worker entry point for Sugargoo Find Desk. */
import handler from "vinext/server/app-router-entry";

const HTML_CACHE_CONTROL =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

function canonicalRedirect(request: Request) {
  const url = new URL(request.url);
  const isApex = url.hostname === "sugargoos.shop";
  const isWww = url.hostname === "www.sugargoos.shop";
  if ((!isApex && !isWww) || (isApex && url.protocol === "https:")) return null;

  url.protocol = "https:";
  url.hostname = "sugargoos.shop";
  url.port = "";
  if (url.pathname === "/") url.pathname = "/en/";
  return Response.redirect(url.toString(), 308);
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
  const html = (await response.text()).replace(
    /<html lang="[^"]*">/,
    `<html lang="${language}">`,
  );
  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const worker = {
  async fetch(
    request: Request,
    env: unknown,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const redirect = canonicalRedirect(request);
    if (redirect) return redirect;

    const url = new URL(request.url);
    const shouldCache =
      request.method === "GET" &&
      url.hostname === "sugargoos.shop" &&
      url.search === "";
    if (!shouldCache) {
      return localizeDocumentLanguage(await handler.fetch(request, env, ctx), url);
    }

    const edgeCache = (caches as CacheStorage & { default: Cache }).default;
    const cacheKey = new Request(url.toString(), { method: "GET" });
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
