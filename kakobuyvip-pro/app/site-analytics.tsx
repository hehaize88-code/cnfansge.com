'use client';
import {useEffect} from 'react';
type AnalyticsWindow=Window & {gtag?:(...args:unknown[])=>void;dataLayer?:unknown[]};
export function trackEvent(name:string,params:Record<string,string|number>){
 const w=window as AnalyticsWindow;
 if(w.gtag)w.gtag('event',name,params);
 else{w.dataLayer=w.dataLayer||[];w.dataLayer.push(['event',name,params]);}
}
export default function SiteAnalytics(){
 useEffect(()=>{
  const onClick=(event:MouseEvent)=>{const target=event.target instanceof Element?event.target.closest('a[href]'):null;if(!(target instanceof HTMLAnchorElement))return;
   const url=new URL(target.href);if(url.origin===location.origin)return;
   const language=document.documentElement.lang;
   if(url.hostname==='cnfansge.com')trackEvent('catalog_outbound_click',{language,link_domain:url.hostname,link_path:url.pathname});
   else if(url.hostname.endsWith('kakobuy.com'))trackEvent(url.pathname.includes('register')?'registration_outbound_click':'official_resource_click',{language,link_path:url.pathname});
  };
  const onSubmit=(event:Event)=>{const form=event.target;if(form instanceof HTMLFormElement&&new URL(form.action).hostname==='cnfansge.com')trackEvent('catalog_search_submit',{language:document.documentElement.lang});};
  document.addEventListener('click',onClick);document.addEventListener('submit',onSubmit);
  return()=>{document.removeEventListener('click',onClick);document.removeEventListener('submit',onSubmit);};
 },[]);return null;
}
