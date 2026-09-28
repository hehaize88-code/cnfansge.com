import { copyFileSync, existsSync } from "node:fs";

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

copyFileSync(built, "wrangler.jsonc");
console.log("Using generated Cloudflare deploy config:", built);
