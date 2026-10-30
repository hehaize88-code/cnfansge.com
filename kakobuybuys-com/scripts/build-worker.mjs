import fs from 'node:fs';import path from 'node:path';import {gzipSync} from 'node:zlib';import {build} from 'esbuild';
import {locales,paths,prefix} from '../src/data/locales.mjs';
import {SITE_ORIGIN,isIndexableRoute} from '../worker/seo.mjs';
const editorial=JSON.parse(fs.readFileSync('src/data/content/en.json','utf8'));
const routes=[...paths.filter(isIndexableRoute),...editorial.articles.map(article=>'articles/'+article.slug)];
const sitemapDir='.astro-output/sitemaps';fs.mkdirSync(sitemapDir,{recursive:true});
const pageUrl=(lang,route)=>SITE_ORIGIN+prefix(lang)+'/'+(route?route+'/':'');
const xmlHeader='<?xml version="1.0" encoding="UTF-8"?>\n';
for(const lang of Object.keys(locales)) {
  const urls=routes.map(route=>`<url><loc>${pageUrl(lang,route)}</loc><lastmod>${editorial.articles.find(a=>'articles/'+a.slug===route)?.dateModified||'2026-10-30'}</lastmod>${Object.keys(locales).map(alternate=>`<xhtml:link rel="alternate" hreflang="${alternate}" href="${pageUrl(alternate,route)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('en',route)}"/></url>`).join('\n');
  fs.writeFileSync(`${sitemapDir}/${lang}.xml`,xmlHeader+`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);
}
fs.writeFileSync('.astro-output/sitemap.xml',xmlHeader+`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(locales).map(lang=>`<sitemap><loc>${SITE_ORIGIN}/sitemaps/${lang}.xml</loc></sitemap>`).join('\n')}\n</sitemapindex>\n`);
const root='.astro-output',assets={};if(!fs.existsSync(root+'/index.html'))throw new Error('Build emitted no homepage');const types={'.html':'text/html;charset=utf-8','.css':'text/css;charset=utf-8','.js':'text/javascript;charset=utf-8','.xml':'application/xml;charset=utf-8','.png':'image/png','.ico':'image/x-icon','.svg':'image/svg+xml','.woff2':'font/woff2'};
function walk(dir){for(const name of fs.readdirSync(dir)){const file=path.join(dir,name);if(fs.statSync(file).isDirectory())walk(file);else if(name!=='embedded-assets.json'){const b=fs.readFileSync(file);assets['/'+path.relative(root,file).replaceAll('\\','/')]={body:gzipSync(b,{level:9}).toString('base64'),gzip:true,type:types[path.extname(file)]||'application/octet-stream'};}}}walk(root);fs.writeFileSync(root+'/embedded-assets.json',JSON.stringify(assets));fs.mkdirSync('dist/server',{recursive:true});fs.mkdirSync('dist/.openai',{recursive:true});fs.copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');await build({entryPoints:['worker/index.mjs'],outfile:'dist/server/index.js',bundle:true,format:'esm',platform:'browser',target:'es2022',minify:true,legalComments:'none',define:{'process.env.NODE_ENV':'"production"'}});console.log(`Worker built: ${Object.keys(assets).length} assets; ${fs.statSync('dist/server/index.js').size} bytes`);
