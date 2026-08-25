const CANONICAL_HOST = "spreadsheet-superbuys.com";
const CACHE_VERSION = "2026-08-25-link-checker-v1";
const HTML_EDGE_TTL_SECONDS = 600;

function withHeader(response, name, value) {
  const headers = new Headers(response.headers);
  headers.set(name, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env, context) {
    const url = new URL(request.url);

    if (url.hostname === `www.${CANONICAL_HOST}` || url.protocol === "http:") {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (request.method !== "GET") return env.ASSETS.fetch(request);

    const cacheUrl = new URL(request.url);
    cacheUrl.hostname = CANONICAL_HOST;
    cacheUrl.searchParams.set("__edge_version", CACHE_VERSION);
    const cacheKey = new Request(cacheUrl.toString(), { method: "GET" });
    const cache = caches.default;
    const cached = await cache.match(cacheKey);
    if (cached) return withHeader(cached, "X-Edge-Cache", "HIT");

    const assetResponse = await env.ASSETS.fetch(request);
    const headers = new Headers(assetResponse.headers);
    const contentType = headers.get("content-type") || "";

    if (assetResponse.status === 404) {
      headers.set("Cache-Control", "no-store");
      return new Response(assetResponse.body, { status: 404, statusText: assetResponse.statusText, headers });
    }

    if (assetResponse.ok && contentType.includes("text/html")) {
      headers.set("Cache-Control", `public, max-age=0, s-maxage=${HTML_EDGE_TTL_SECONDS}`);
      headers.set("Cache-Tag", "spreadsheet-superbuys-html");
      const cacheable = new Response(assetResponse.body, { status: assetResponse.status, statusText: assetResponse.statusText, headers });
      context.waitUntil(cache.put(cacheKey, cacheable.clone()));
      return withHeader(cacheable, "X-Edge-Cache", "MISS");
    }

    return new Response(assetResponse.body, { status: assetResponse.status, statusText: assetResponse.statusText, headers });
  },
};
