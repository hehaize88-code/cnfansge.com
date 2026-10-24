import {locales,articles,path} from '../data/site';

export function GET(){
  const routes=['','spreadsheet','guide','qc','shipping','faq','articles',...articles('en').map(a=>'articles/'+a.slug)];
  const base='https://superbuybuyss.com';
  const entries=locales.flatMap(lang=>routes.map(route=>{
    const alternates=[...locales.map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${base+path(l,route)}"/>`),`<xhtml:link rel="alternate" hreflang="x-default" href="${base+path('en',route)}"/>`].join('');
    return `<url><loc>${base+path(lang,route)}</loc>${alternates}</url>`;
  })).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
