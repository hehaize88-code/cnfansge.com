import assert from "node:assert/strict";
import { build } from "esbuild";
const output = await build({ entryPoints: ["worker/index.ts"], bundle: true, platform: "node", format: "esm", write: false,
  plugins: [{ name: "handler-fixture", setup(b) {
    b.onResolve({ filter: /^vinext\/server\/app-router-entry$/ }, () => ({ path: "handler", namespace: "fixture" }));
    b.onLoad({ filter: /.*/, namespace: "fixture" }, () => ({ contents: `export default { async fetch(r) { globalThis.renderCalls++; return r.headers.has("RSC") ? new Response("flight",{headers:{"Content-Type":"text/x-component"}}) : new Response('<html lang="en"><body>fresh content</body></html>',{headers:{"Content-Type":"text/html"}}); } };`, loader: "js" }));
  } }],
});
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(output.outputFiles[0].text).toString("base64")}`);
const data = new Map();
globalThis.renderCalls = 0;
globalThis.caches = { default: { match: async r => data.get(r.url)?.clone(), put: async (r, v) => data.set(r.url, v.clone()) } };
const ctx = { waitUntil(p) { pending.push(p); } }; const pending = [];
const base = "https://lovegobuys.org/de/articles/lovegobuy-qc-finder-warehouse-photos";
data.set(base, new Response("stale pre-release content", {headers:{"Content-Type":"text/html"}}));
const html = () => new Request(base, { headers: { Accept: "text/html" } });
let response = await worker.fetch(html(), {}, ctx);
assert.equal(response.headers.get("X-LoveGoBuy-Cache"), "MISS");
assert.equal(response.headers.get("Content-Language"), "de");
assert.match(await response.text(), /<html lang="de">/);
await Promise.all(pending);
response = await worker.fetch(html(), {}, ctx);
assert.equal(response.headers.get("X-LoveGoBuy-Cache"), "HIT");
assert.match(await response.text(), /fresh content/);
assert.equal(globalThis.renderCalls, 1);
response = await worker.fetch(new Request(base,{headers:{RSC:"1",Accept:"text/html"}}),{},ctx);
assert.equal(response.headers.get("Content-Type"), "text/x-component");
assert.equal(await response.text(), "flight");
assert.equal(globalThis.renderCalls, 2);
response = await worker.fetch(new Request("http://www.lovegobuys.org/"), {}, ctx);
assert.equal(response.status, 308); assert.equal(response.headers.get("Location"), "https://lovegobuys.org/en");
console.log("Worker checks passed: release cache isolation, HTML HIT/MISS, German document language, RSC bypass and canonical redirect.");
