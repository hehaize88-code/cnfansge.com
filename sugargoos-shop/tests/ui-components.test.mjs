import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({
  appType: "custom",
  configFile: false,
  root,
  resolve: { alias: { "@": root } },
  server: { middlewareMode: true },
});

after(async () => {
  await vite.close();
});

async function readCssTree(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const contents = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return readCssTree(entryPath);
      }
      return entry.name.endsWith(".css") ? readFile(entryPath, "utf8") : "";
    }),
  );
  return contents.join("\n");
}

test("emits the catalog's animation and scrolling utilities", async () => {
  const css = await readCssTree(path.join(root, "dist"));

  assert.match(css, /--tw-enter-opacity/);
  assert.match(css, /scrollbar-width:\s*thin/);
  assert.match(css, /scrollbar-width:\s*none/);
  assert.match(css, /scrollbar-gutter:\s*stable/);
  assert.match(css, /scroll-fade-reveal-b/);
  assert.match(css, /mask-image:/);
  assert.match(css, /tw-shimmer/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("forwards progress semantics to the primitive", async () => {
  const { Progress } = await vite.ssrLoadModule("/components/ui/progress.tsx");
  const html = renderToStaticMarkup(React.createElement(Progress, { value: 37 }));

  assert.match(html, /aria-valuenow="37"/);
  assert.match(html, /aria-valuetext="37%"/);
  assert.match(html, /data-state="loading"/);
});

test("emits chart themes for the starter's media dark mode", async () => {
  const { ChartStyle } = await vite.ssrLoadModule("/components/ui/chart.tsx");
  const html = renderToStaticMarkup(
    React.createElement(ChartStyle, {
      id: "contract",
      config: {
        latency: { theme: { light: "#ffffff", dark: "#000000" } },
      },
    }),
  );

  assert.match(html, /\[data-chart=contract\]/);
  assert.match(html, /@media \(prefers-color-scheme: dark\)/);
  assert.doesNotMatch(html, /\.dark/);
});

test("renders sidebar skeletons deterministically", async () => {
  const { SidebarMenuSkeleton } = await vite.ssrLoadModule(
    "/components/ui/sidebar.tsx",
  );
  const first = renderToStaticMarkup(React.createElement(SidebarMenuSkeleton));
  const second = renderToStaticMarkup(React.createElement(SidebarMenuSkeleton));

  assert.equal(first, second);
  assert.match(first, /--skeleton-width:70%/);
});

function wordCount(value) {
  return (value.match(/\p{L}+(?:[’'-]\p{L}+)*/gu) ?? []).length;
}

test("keeps every translated SEO article complete", async () => {
  const { articles, articleSlugs } = await vite.ssrLoadModule("/lib/articles.ts");
  const locales = ["de", "es", "fr", "it"];

  for (const locale of locales) {
    for (const slug of articleSlugs) {
      const article = articles[locale][slug];
      const text = [
        article.title,
        article.description,
        ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
      ].join(" ");
      const count = wordCount(text);

      assert.ok(count >= 1200, `${locale}/${slug} is shortened to ${count} words`);
      assert.ok(count <= 1800, `${locale}/${slug} exceeds 1800 words (${count})`);
      assert.ok(article.sections.length >= articles.en[slug].sections.length);
    }
  }
});

test("keeps localized landing pages and FAQs at content parity", async () => {
  const { faqCopy, pageContent, pageSlugs } = await vite.ssrLoadModule("/lib/page-content.ts");
  const locales = ["de", "es", "fr", "it"];

  for (const locale of locales) {
    for (const slug of pageSlugs) {
      const localized = pageContent[locale][slug];
      const english = pageContent.en[slug];
      assert.equal(localized.sections.length, english.sections.length);
      assert.ok(
        wordCount(JSON.stringify(localized)) >= wordCount(JSON.stringify(english)) * 0.9,
        `${locale}/${slug} lost more than 10% of the source information`,
      );
    }
    assert.equal(faqCopy[locale].length, faqCopy.en.length);
    assert.ok(wordCount(JSON.stringify(faqCopy[locale])) >= wordCount(JSON.stringify(faqCopy.en)) * 0.9);
  }
});

test("renders the language menu as a solid detached surface", async () => {
  const switcher = await readFile(path.join(root, "components/LanguageSwitcher.tsx"), "utf8");
  const css = await readFile(path.join(root, "app/globals.css"), "utf8");

  assert.match(switcher, /position="popper"/);
  assert.match(switcher, /className="lang-menu"/);
  assert.match(css, /\.lang-menu\s*\{[^}]*background:#fff!important/);
  assert.match(css, /\.lang-trigger\s*\{[^}]*background:#20201d!important/);
});

test("keeps every homepage module in the dense mobile layout", async () => {
  const homepage = await readFile(path.join(root, "app/[locale]/page.tsx"), "utf8");
  const css = await readFile(path.join(root, "app/globals.css"), "utf8");

  assert.match(homepage, /<main className="home-page">/);
  assert.match(css, /\.home-page \.category-grid\s*\{[^}]*repeat\(4,minmax\(0,1fr\)\)/);
  assert.match(css, /\.home-page \.product-grid\s*\{[^}]*repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(css, /\.home-page \.workflow-inner ol\s*\{[^}]*repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(css, /\.home-page \.home-article-grid\s*\{[^}]*repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(css, /\.inner-page \.product-grid\s*\{[^}]*repeat\(2,minmax\(0,1fr\)\)/);
  assert.doesNotMatch(css, /\.home-page[^{}]*\{[^}]*display\s*:\s*none/);
});
