export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isWww = url.hostname === "www.usfanss.org";
    const isHttp = url.protocol !== "https:";
    const isRoot = url.pathname === "/";

    if (isWww || isHttp || isRoot) {
      url.protocol = "https:";
      if (isWww) url.hostname = "usfanss.org";
      if (isRoot) url.pathname = "/en";

      return new Response(null, {
        status: 308,
        headers: {
          Location: url.toString(),
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-USFanss-Release", "2026-10-02-editorial");
    if (headers.get("Content-Type")?.includes("text/html") || ["/sitemap.xml", "/robots.txt"].includes(url.pathname)) {
      headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    }
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};
