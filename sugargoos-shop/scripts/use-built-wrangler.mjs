import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";

const candidates = [
  "dist/sugargoos-shop/wrangler.json",
  "dist/server/wrangler.json",
];

const built = candidates.find(existsSync);
if (!built) {
  throw new Error(
    "Cloudflare build config not found. Checked: " + candidates.join(", "),
  );
}

// Wrangler follows this Vite deployment pointer. Keep the source config intact
// so the next build still starts from worker/index.ts and the source asset path.
const pointerDirectory = resolve(".wrangler/deploy");
mkdirSync(pointerDirectory, { recursive: true });
writeFileSync(resolve(pointerDirectory, "config.json"), JSON.stringify({
  configPath: relative(pointerDirectory, resolve(built)),
}, null, 2) + "\n");
console.log("Using generated Cloudflare deploy config:", built);
