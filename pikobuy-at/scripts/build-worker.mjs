import { readdir,readFile,mkdir,writeFile,copyFile } from 'node:fs/promises';
import { build } from 'esbuild';
const assets={};
const production=process.env.SITE_INDEXABLE==='true';
const origin=process.env.SITE_ORIGIN||'https://pikobuy-at-preview.hehaize88.chatgpt.site';
if(production){
 const pages=[];
 async function findPages(dir,prefix=''){
  for(const f of await readdir(dir,{withFileTypes:true})){
   if(f.isDirectory())await findPages(`${dir}/${f.name}`,`${prefix}/${f.name}`);
   else if(f.name==='index.html'&&!/\/(product|visual)$/.test(prefix))pages.push(`${prefix}/`);
  }
 }
 await findPages('.astro-output');
 await writeFile('.astro-output/robots.txt',`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`);
 await writeFile('.astro-output/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(path=>`<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>`);
}

async function walk(dir,prefix=''){for(const f of await readdir(dir,{withFileTypes:true})){if(f.isDirectory())await walk(`${dir}/${f.name}`,`${prefix}/${f.name}`);else{const path=`${prefix}/${f.name}`,data=await readFile(`${dir}/${f.name}`);const ext=f.name.split('.').pop();assets[path]={body:data.toString('base64'),type:({html:'text/html; charset=utf-8',css:'text/css',js:'text/javascript',png:'image/png',svg:'image/svg+xml',txt:'text/plain',xml:'application/xml; charset=utf-8'})[ext]||'application/octet-stream'};}}}
await walk('.astro-output');await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});
await writeFile('.astro-output/embedded-assets.json',JSON.stringify(assets));
await build({entryPoints:['worker/index.mjs'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js',minify:true,legalComments:'none',define:{'__PRODUCTION__':JSON.stringify(production),'__SITE_ORIGIN__':JSON.stringify(origin)}});
await copyFile('.openai/hosting.json','dist/.openai/hosting.json');
console.log(`Packaged ${Object.keys(assets).length} Astro static assets with live-source Worker.`);
