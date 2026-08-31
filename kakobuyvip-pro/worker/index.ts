/** Cloudflare Worker entry point for Kakobuy VIP. */
import handler from "vinext/server/app-router-entry";

const worker = {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname.toLowerCase() === "www.kakobuyvip.pro") {
      url.protocol = "https:";
      url.hostname = "kakobuyvip.pro";
      return Response.redirect(url.toString(), 308);
    }
    return handler.fetch(request, env, ctx);
  },
};

export default worker;
