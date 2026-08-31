/** Cloudflare Worker entry point for LoveGoBuy Field Guide. */
import handler from "vinext/server/app-router-entry";

const worker = {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    return handler.fetch(request, env, ctx);
  },
};

export default worker;
