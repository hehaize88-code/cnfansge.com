import {readFile,writeFile,readdir,mkdir,cp,rm} from 'node:fs/promises';
import {load} from 'cheerio';
import {api,SOURCE,categories} from '../worker/source.mjs';
import {catalogMarkup,productMarkup,esc} from '../worker/render.mjs';

// A disposable SSG review build. Product records are fetched during this build;
// there is no database, catalog file in source control, or scheduled collection.
const base='/cnfansge.com/';
const origin='https://hehaize88-code.github.io';
const ui=JSON.parse(await readFile('src/data/ui-en.json','utf8'));
async function get(path){
 const response=await api(new Request('https://preview.invalid'+path));
 const data=await response.json();
 if(!response.ok)throw new Error(data.detail||data.error);
 return data;
}
const catalog=await get('/api/catalog?sort=latest');
if(catalog.products.length<3)throw new Error('Source catalog has too few verified products; refusing placeholder publication.');
const details=new Map();
for(const item of catalog.products.slice(0,8)){
 try{details.set(item.id,await get('/api/product?id='+item.id));}
 catch(error){console.warn('Product detail unavailable:',item.id,error.message);}
}
const captured=new Date().toISOString().slice(0,16).replace('T',' ')+' UTC';
await rm('pages-output',{recursive:true,force:true});
await cp('.astro-output','pages-output',{recursive:true});
await rm('pages-output/embedded-assets.json',{force:true});
const productTemplate=await readFile('.astro-output/product/index.html','utf8');
for(const [id,data] of details){
 const $=load(productTemplate);
 $('#product-detail').html(productMarkup(data,'/',ui));
 $('title').text(data.name+' | CSSBuy Home');
 const dir='pages-output/product/'+id;
 await mkdir(dir,{recursive:true});await writeFile(dir+'/index.html',$.html());
}
const sourceLink=(id)=>details.has(id)?'/product/'+id+'/':SOURCE+'/AllProducts/'+id+'.html';
async function transform(dir){
 for(const entry of await readdir(dir,{withFileTypes:true})){
  const file=dir+'/'+entry.name;
  if(entry.isDirectory()){await transform(file);continue;}
  if(!entry.name.endsWith('.html'))continue;
  const $=load(await readFile(file,'utf8'));
  const isHome=file==='pages-output/index.html';
  if($('#catalog-products').length){
   const rendered=catalogMarkup(catalog,new URL('https://preview.invalid/'),'/',ui,'en',isHome);
   $('#catalog-products').html(rendered.products);
   $('#hero-products').html(rendered.hero);
   $('#catalog-pagination').html('<a href="'+SOURCE+'/AllProducts/">Browse the complete live catalog ↗</a>');
  }
  if(file==='pages-output/product/index.html')$('#product-detail').html('<div class="page-heading"><h1>Choose a product</h1><p>Open a product from the preview collection, or browse the full source catalog.</p><a class="button button-dark" href="/spreadsheet/">Browse preview collection ↗</a></div>');
  $('a[href^="/product/?id="]').each((_,el)=>{$(el).attr('href',sourceLink(new URL($(el).attr('href'),'https://preview.invalid').searchParams.get('id')));});
  $('form.search-form, #catalog-form').each((_,el)=>{
   const form=$(el);form.attr('action',SOURCE+'/search.html').removeAttr('id');
   form.find('input[name="q"]').attr('name','keywords');
   form.find('label').remove();form.append('<input type="hidden" name="channelid" value="2">');
  });
  $('#catalog-status').html('This preview shows products fetched from cnfansge.com at build time. Search and category links open the live source catalog.');
  $('a[href^="/spreadsheet/?category="]').each((_,el)=>{
   const cat=new URL($(el).attr('href'),'https://preview.invalid').searchParams.get('category');
   if(categories.includes(cat))$(el).attr('href',SOURCE+(cat==='all'?'/AllProducts/':'/'+cat+'/'));
  });
  if(file==='pages-output/privacy/index.html')$('.prose p').text('This preview has no account, payment form, advertising tracker or product database. Products are fetched from cnfansge.com during the static build. Search and category navigation open cnfansge.com directly. External images and links are subject to their providers’ privacy policies. Hosting providers may process standard request logs.');
  $('body').attr('data-source-rendered','true');
  $('body').prepend('<div style="background:#eff4e8;border-bottom:1px solid #dce5d2;padding:10px 20px;font:12px/1.5 sans-serif;text-align:center;color:#33432b">Design preview · Source products captured '+esc(captured)+' · Search opens cnfansge.com · Not affiliated with CSSBuy</div>');
  $('[href], [src], [action]').each((_,el)=>{
   for(const attr of ['href','src','action']){
    const value=$(el).attr(attr);
    if(value?.startsWith('/')&&!value.startsWith('//'))$(el).attr(attr,base+value.slice(1));
   }
  });
  const rel=file.replace(/^pages-output\//,'').replace(/index\.html$/,'');
  $('link[rel="canonical"]').attr('href',origin+base+rel);
  $('meta[property="og:url"]').attr('content',origin+base+rel);
  $('meta[name="robots"]').attr('content','noindex,nofollow');
  await writeFile(file,$.html());
 }
}
await transform('pages-output');
await writeFile('pages-output/.nojekyll','');
await writeFile('pages-output/robots.txt','User-agent: *\nDisallow: /\n');
console.log(JSON.stringify({source:SOURCE,captured,sourceProducts:catalog.products.length,detailPages:details.size,articles:10,faqs:28,preview:origin+base}));
