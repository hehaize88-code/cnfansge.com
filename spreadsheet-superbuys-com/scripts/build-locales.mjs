import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";

const base = "https://spreadsheet-superbuys.com";
const root = path.resolve("out");
const locales = ["en", "de", "fr", "es", "it", "pl"];
const collect = process.argv.includes("--collect");
const strings = new Set();
const pages = [];
const norm = s => s.trim();
const translatable = s => /[A-Za-z]/.test(s) && !/^https?:\/\//.test(s);
const localized = (route, locale) => locale === "en" ? route : `/${locale}${route}`;
function walk(dir) {
  for (const file of fs.readdirSync(dir, {withFileTypes: true})) {
    if (file.isDirectory() && !file.name.startsWith("_") && file.name !== "404" && !locales.slice(1).includes(file.name)) walk(path.join(dir,file.name));
    else if (file.isFile() && file.name === "index.html") {
      const relative = path.relative(root,path.dirname(path.join(dir,file.name))).replaceAll(path.sep,"/");
      pages.push({route:relative ? `/${relative}/` : "/", html:fs.readFileSync(path.join(dir,file.name),"utf8")});
    }
  }
}
walk(root);
pages.sort((a,b)=>a.route.localeCompare(b.route));
const routes = new Set(pages.map(p=>p.route));
const dictionaries = {};
const overrides = JSON.parse(fs.readFileSync("content/translation-overrides.json", "utf8"));
if (!collect) for (const locale of locales.slice(1)) dictionaries[locale] = {...JSON.parse(fs.readFileSync(`content/translations/${locale}.json`,"utf8")), ...overrides[locale]};
function translate(text,locale) {
  const key=norm(text);
  if(!key || !translatable(key)) return text;
  strings.add(key);
  if(collect || locale === "en") return text;
  const translated = dictionaries[locale][key];
  if(!translated) throw new Error(`Missing ${locale} translation: ${key.slice(0,100)}`);
  return text.replace(key,()=>translated);
}
function localUrl(value,locale) {
  if(typeof value !== "string") return value;
  if(value.startsWith(base)) {
    const u = new URL(value);
    if(routes.has(u.pathname)) return `${base}${localized(u.pathname,locale)}${u.search}${u.hash}`;
  }
  if(value.startsWith("/") && !value.startsWith("//")) {
    const u = new URL(value,base);
    if(routes.has(u.pathname)) return `${localized(u.pathname,locale)}${u.search}${u.hash}`;
  }
  return value;
}
function schemaLocalize(data, locale, key="") {
  if(Array.isArray(data)) return data.map(v=>schemaLocalize(v,locale,key));
  if(data && typeof data === "object") {
    const result = Object.fromEntries(Object.entries(data).map(([k,v])=>[k,schemaLocalize(v,locale,k)]));
    if(["Article","WebSite","FAQPage","ItemList"].includes(result["@type"])) result.inLanguage=locale;
    return result;
  }
  if(typeof data === "string") {
    if(["headline","description","name","text"].includes(key)) return translate(data,locale);
    if(["url","item","mainEntityOfPage","@id"].includes(key)) return localUrl(data,locale);
  }
  return data;
}
for(const page of pages) for(const locale of (collect?["en"]:locales)) {
  const $=load(page.html);
  // Ship static documents: React hydration would overwrite localized text.
  $('script:not([type="application/ld+json"]),link[as="script"],link[rel="modulepreload"]').remove();
  $('body').find('*').addBack().contents().each((_,node)=>{
    if(node.type !== "text") return;
    const parent=$(node).parent();
    if(parent.closest('script,style,[data-language],[data-current-language]').length) return;
    node.data=translate(node.data,locale);
  });
  $('title').text(translate($('title').text(),locale));
  $('meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[name="twitter:title"],meta[name="twitter:description"]').each((_,n)=>$(n).attr('content',translate($(n).attr('content')||"",locale)));
  $('[alt],[placeholder],[aria-label],[title]').each((_,n)=>{
    for(const attr of ['alt','placeholder','aria-label','title']) if($(n).attr(attr)) $(n).attr(attr,translate($(n).attr(attr),locale));
  });
  $('script[type="application/ld+json"]').each((_,n)=>{
    $(n).text(JSON.stringify(schemaLocalize(JSON.parse($(n).text()),locale)).replaceAll("<","\\u003c"));
  });
  if(collect) continue;
  $('html').attr('lang',locale);
  $('[data-i18n],[data-i18n-placeholder]').removeAttr('data-i18n').removeAttr('data-i18n-placeholder');
  $('a[href]').not('[data-language]').each((_,n)=>$(n).attr('href',localUrl($(n).attr('href'),locale)));
  $('[data-current-language]').text(locale.toUpperCase());
  $('[data-language]').each((_,n)=>{
    const code=$(n).attr('data-language');
    $(n).attr('href',localized(page.route,code));
    if(code === locale) $(n).attr('aria-current','page');
  });
  const canonical=`${base}${localized(page.route,locale)}`;
  $('link[rel="canonical"],link[hreflang],meta[property="og:url"],meta[property="og:locale"],meta[name="keywords"]').remove();
  $('head').append(`<link rel="canonical" href="${canonical}"><meta property="og:url" content="${canonical}"><meta property="og:locale" content="${{en:'en_US',de:'de_DE',fr:'fr_FR',es:'es_ES',it:'it_IT',pl:'pl_PL'}[locale]}">`);
  for(const code of locales) $('head').append(`<link rel="alternate" hreflang="${code}" href="${base}${localized(page.route,code)}">`);
  $('head').append(`<link rel="alternate" hreflang="x-default" href="${base}${page.route}">`);
  $('meta[name="site-release"]').remove();
  $('head').append('<meta name="site-release" content="2026-10-15-six-languages-v2">');
  $('head').append('<script async src="https://www.googletagmanager.com/gtag/js?id=G-NJEYHQ693H"></script><script defer src="/site.js"></script>');
  const output=path.join(root,localized(page.route,locale),'index.html');
  fs.mkdirSync(path.dirname(output),{recursive:true});
  fs.writeFileSync(output,$.html());
}
if(collect) {
  fs.mkdirSync('work',{recursive:true});
  fs.writeFileSync('work/translation-strings.json',JSON.stringify([...strings],null,2));
  console.log(`Collected ${strings.size} strings from ${pages.length} English routes`);
} else {
  const entries=[];
  for(const page of pages) for(const locale of locales) {
    const links=[...locales.map(code=>`<xhtml:link rel="alternate" hreflang="${code}" href="${base}${localized(page.route,code)}"/>`),`<xhtml:link rel="alternate" hreflang="x-default" href="${base}${page.route}"/>`].join('');
    entries.push(`<url><loc>${base}${localized(page.route,locale)}</loc><lastmod>2026-10-15</lastmod>${links}</url>`);
  }
  fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`);
  for(const file of ['_worker.js','_headers']) fs.copyFileSync(file,path.join(root,file));
  // Remove unused React data files so only canonical HTML and necessary assets ship.
  function prune(dir) {for(const file of fs.readdirSync(dir,{withFileTypes:true})) {const f=path.join(dir,file.name);if(file.isDirectory()) prune(f);else if(file.name.endsWith('.txt') && file.name!=='robots.txt') fs.unlinkSync(f);}}
  prune(root);
  const notFound = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>404</title><style>body{font:17px/1.6 system-ui;max-width:700px;margin:12vh auto;padding:24px;color:#17202a;background:#f7f8f6}h1{font-size:48px}nav{display:flex;flex-wrap:wrap;gap:24px}a{color:#394dd0}</style></head><body><h1>404</h1><p>Page not found · Seite nicht gefunden · Page introuvable · Página no encontrada · Pagina non trovata · Nie znaleziono strony</p><nav><a href="/" lang="en">English</a><a href="/de/" lang="de">Deutsch</a><a href="/fr/" lang="fr">Français</a><a href="/es/" lang="es">Español</a><a href="/it/" lang="it">Italiano</a><a href="/pl/" lang="pl">Polski</a></nav></body></html>';
  for(const file of ['404.html','404/index.html','_not-found/index.html']) {fs.mkdirSync(path.dirname(path.join(root,file)),{recursive:true});fs.writeFileSync(path.join(root,file),notFound);}
  function removeUnusedRuntime(dir) {for(const entry of fs.readdirSync(dir,{withFileTypes:true})) {const f=path.join(dir,entry.name);if(entry.isDirectory())removeUnusedRuntime(f);else if(/\.(js|map)$/.test(entry.name))fs.unlinkSync(f);}}
  removeUnusedRuntime(path.join(root,'_next'));
  fs.writeFileSync(path.join(root,'release.json'),JSON.stringify({release:'2026-10-15-six-languages-v2',languages:locales,pages:pages.length*locales.length,articlesPerLanguage:15}));
  console.log(`Exported ${pages.length*locales.length} fully localized pages`);
}
