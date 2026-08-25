import assert from "node:assert/strict";
import test from "node:test";

test("renders production SEO metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>Hipobuy Spreadsheet 2026/i);
  assert.match(html, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.net\/?"/i);
  assert.match(html, /name="robots" content="index, follow"/i);
  assert.doesNotMatch(html, /codex-preview|noindex|nofollow/i);
});
