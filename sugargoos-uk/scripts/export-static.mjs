import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { languages, localPaths } from "../data/site.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist", "static");
const port = 4399;
const origin = `http://127.0.0.1:${port}`;
const routes = languages.flatMap((lang) =>
  localPaths.map((parts) => `/${lang}${parts.length ? `/${parts.join("/")}` : ""}`),
);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(join(root, "dist", "client"), output, { recursive: true });

const server = spawn(
  process.execPath,
  [join(root, "node_modules", "vinext", "dist", "cli.js"), "start", "--hostname", "127.0.0.1", "--port", String(port)],
  { cwd: root, env: { ...process.env, NODE_ENV: "production" }, stdio: ["ignore", "pipe", "pipe"] },
);

let serverLog = "";
server.stdout.on("data", (chunk) => { serverLog += chunk; });
server.stderr.on("data", (chunk) => { serverLog += chunk; });

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Vinext server exited early.\n${serverLog}`);
    try {
      const response = await fetch(`${origin}/en`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Vinext server did not become ready.\n${serverLog}`);
}

function htmlFile(route) {
  const clean = route.replace(/^\//, "");
  return join(output, `${clean}.html`);
}

function hoistMetadata(html) {
  const headEnd = html.indexOf("</head>");
  const metadataStart = html.indexOf("<title>", headEnd);
  if (headEnd < 0 || metadataStart < 0) return html;
  const metadataEnd = html.indexOf("<script>document.querySelectorAll", metadataStart);
  if (metadataEnd < 0) return html;
  const metadata = html.slice(metadataStart, metadataEnd);
  const withoutBodyMetadata = html.slice(0, metadataStart) + html.slice(metadataEnd);
  return withoutBodyMetadata.replace("</head>", `${metadata}</head>`);
}

async function exportRoute(route) {
  const response = await fetch(`${origin}${route}`, {
    headers: { accept: "text/html", "user-agent": "Googlebot" },
  });
  if (response.status !== 200) throw new Error(`${route} returned ${response.status}`);
  const target = htmlFile(route);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, hoistMetadata(await response.text()));
}

try {
  await waitForServer();
  for (let index = 0; index < routes.length; index += 8) {
    await Promise.all(routes.slice(index, index + 8).map(exportRoute));
  }

  for (const asset of ["/robots.txt", "/sitemap.xml"]) {
    const response = await fetch(`${origin}${asset}`);
    if (response.status !== 200) throw new Error(`${asset} returned ${response.status}`);
    await writeFile(join(output, asset.slice(1)), await response.text());
  }

  const missing = await fetch(`${origin}/route-that-does-not-exist`, {
    headers: { "user-agent": "Googlebot" },
  });
  if (missing.status !== 404) throw new Error(`Unknown route returned ${missing.status}, expected 404`);
  await writeFile(join(output, "404.html"), await missing.text());

  await writeFile(
    join(output, "_redirects"),
    [
      "https://www.sugargoos.uk/* https://sugargoos.uk/:splat 301",
      "/ /en 301",
      "",
    ].join("\n"),
  );
  await writeFile(
    join(output, "_headers"),
    [
      "/*",
      "  X-Content-Type-Options: nosniff",
      "  Referrer-Policy: strict-origin-when-cross-origin",
      "  X-Frame-Options: SAMEORIGIN",
      "",
      "/_next/static/*",
      "  Cache-Control: public, max-age=31536000, immutable",
      "",
    ].join("\n"),
  );

  console.log(`Static export complete: ${routes.length} localized pages`);
} finally {
  server.kill("SIGTERM");
}
