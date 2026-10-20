import { readdir,readFile,mkdir,writeFile,copyFile,cp,rm } from 'node:fs/promises';
import { build } from 'esbuild';
await import('./verify-output.mjs');
const buildOptions={bundle:true,format:'esm',platform:'browser',target:'es2022',minify:true,legalComments:'none'};
if(process.argv.includes('--pages')){
  await rm('.pages-output',{recursive:true,force:true});
  await cp('.astro-output','.pages-output',{recursive:true,filter:path=>!path.endsWith('embedded-assets.json')});
  await build({...buildOptions,entryPoints:['worker/pages.mjs'],outfile:'.pages-output/_worker.js'});
  console.log('Packaged Astro pages as static assets, with a separate live-source API Worker.');
  process.exit(0);
}
const assets={};
async function walk(dir,prefix=''){for(const f of await readdir(dir,{withFileTypes:true})){if(f.isDirectory())await walk(`${dir}/${f.name}`,`${prefix}/${f.name}`);else{const path=`${prefix}/${f.name}`,data=await readFile(`${dir}/${f.name}`);const ext=f.name.split('.').pop();assets[path]={body:data.toString('base64'),type:({html:'text/html; charset=utf-8',css:'text/css',js:'text/javascript',png:'image/png',svg:'image/svg+xml',txt:'text/plain'})[ext]||'application/octet-stream'};}}}
await walk('.astro-output');await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});
await writeFile('.astro-output/embedded-assets.json',JSON.stringify(assets));
await build({...buildOptions,entryPoints:['worker/index.mjs'],outfile:'dist/server/index.js'});
await copyFile('.openai/hosting.json','dist/.openai/hosting.json');
console.log(`Packaged ${Object.keys(assets).length} Astro static assets with live-source Worker.`);
