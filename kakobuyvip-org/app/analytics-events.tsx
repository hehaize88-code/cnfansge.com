'use client';
import { useEffect } from 'react';
type AnalyticsWindow=Window & {gtag?:(...args:unknown[])=>void};
export function trackEvent(name:string,parameters:Record<string,string|number>){
 if(typeof window==='undefined')return;
 (window as AnalyticsWindow).gtag?.('event',name,parameters);
}
export default function AnalyticsEvents(){
 useEffect(()=>{
  const click=(event:MouseEvent)=>{
   const anchor=(event.target as Element)?.closest?.('a');if(!anchor)return;
   const url=new URL(anchor.href,window.location.href);
   const lang=document.documentElement.lang;
   if(['cnfansge.com','www.cnfansge.com'].includes(url.hostname))trackEvent('catalog_click',{language:lang,link_path:url.pathname,placement:anchor.className||'content'});
   else if(url.origin===location.origin&&url.pathname.includes('/articles/')&&url.pathname!==location.pathname)trackEvent('article_open',{language:lang,article_path:url.pathname,source_path:location.pathname});
  };
  const submit=(event:SubmitEvent)=>{if((event.target as HTMLFormElement)?.classList.contains('searchbox'))trackEvent('catalog_search',{language:document.documentElement.lang,source_path:location.pathname});};
  document.addEventListener('click',click);document.addEventListener('submit',submit);
  return()=>{document.removeEventListener('click',click);document.removeEventListener('submit',submit);};
 },[]);
 return null;
}
