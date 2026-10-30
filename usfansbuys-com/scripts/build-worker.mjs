import fs from 'node:fs/promises';
import path from 'node:path';
import {build} from 'esbuild';
await fs.mkdir('generated',{recursive:true});
// Remove the old deploy asset tree: all HTML/assets are served by the Worker.
await fs.rm('dist/client',{recursive:true,force:true});
const mime={'.html':'text/html;charset=utf-8','.css':'text/css;charset=utf-8','.js':'text/javascript;charset=utf-8','.json':'application/json','.xml':'application/xml','.txt':'text/plain;charset=utf-8','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon'};
const assets={};
async function walk(dir){for(const entry of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())await walk(p);else {const ext=path.extname(p),bin=['.png','.webp','.ico'].includes(ext),body=await fs.readFile(p);assets['/'+path.relative('generated/static',p)]={type:mime[ext]||'application/octet-stream',encoding:bin?'base64':'text',body:body.toString(bin?'base64':'utf8')};}}}
const isPreview=process.env.PREVIEW==='true';
const origin=(process.env.SITE_ORIGIN||'https://usfansbuys.com').replace(/\/$/,'');
await fs.writeFile('generated/static/robots.txt',isPreview?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`);
await walk('generated/static');
const urls=Object.keys(assets).filter(p=>p.endsWith('/index.html')&&!/\/(product|image-search)\//.test(p)).map(p=>origin+p.replace(/index.html$/,''));
const langs=['en','de','es','fr','it'];
const content={};for(const lang of langs)content[lang]=JSON.parse(await fs.readFile(`src/data/${lang}.json`,'utf8'));
const sitemap='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'+urls.map(u=>{
 const parts=new URL(u).pathname.split('/').filter(Boolean);const lang=langs.slice(1).includes(parts[0])?parts.shift():'en';const route=parts.join('/');
 const article=route.startsWith('articles/')?content[lang].articles.find(a=>route==='articles/'+a.slug):null;
 const modified=article?.dateModified||'2026-10-30';
 const alternates=[...langs,'x-default'].map(code=>{const target=code==='x-default'?'en':code;return '<xhtml:link rel="alternate" hreflang="'+code+'" href="'+origin+(target==='en'?'':'/'+target)+'/'+(route?route+'/':'')+'"/>';}).join('');
 return '<url><loc>'+u+'</loc><lastmod>'+modified+'</lastmod>'+alternates+'</url>';
}).join('')+'</urlset>';
await fs.writeFile('generated/static/sitemap.xml',sitemap);assets['/sitemap.xml']={type:'application/xml',encoding:'text',body:sitemap};const ui={};for(const lang of ['en','de','es','fr','it']){try{const d=JSON.parse(await fs.readFile(`src/data/${lang}.json`,'utf8'));ui[lang]={ui:d.ui,categories:d.categories};}catch{}}
await fs.writeFile('generated/assets.mjs','export const isPreview='+JSON.stringify(isPreview)+';\nexport const assets='+JSON.stringify(assets)+';\nexport const ui='+JSON.stringify(ui)+';');
await build({entryPoints:['worker/index.mjs'],outfile:'dist/server/index.js',bundle:true,format:'esm',platform:'browser',target:'es2022',minify:true,external:['node:*']});
// Sites preview metadata is optional; Cloudflare production needs only the bundled Worker.
try { await fs.access('.openai/hosting.json'); await fs.mkdir('dist/.openai',{recursive:true}); await fs.copyFile('.openai/hosting.json','dist/.openai/hosting.json'); } catch (e) { if(e.code!=='ENOENT') throw e; }
console.log(`Built ${Object.keys(assets).length} static assets and live catalog Worker.`);
