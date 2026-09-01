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

    return env.ASSETS.fetch(request);
  },
};
