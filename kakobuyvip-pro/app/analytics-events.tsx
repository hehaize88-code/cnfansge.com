"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
type AnalyticsWindow=Window & {dataLayer?:unknown[];gtag?:(...args:unknown[])=>void};
export function track(name:string,parameters:Record<string,string>) {
  const w=window as AnalyticsWindow;
  if(w.gtag) w.gtag("event",name,parameters);
}
export default function AnalyticsEvents(){
  const path=usePathname();
  useEffect(()=>{
    const locale=/^\/(de|es|fr|it)(?:\/|$)/.exec(path)?.[1]||"en";
    function click(event:MouseEvent){
      if(!(event.target instanceof Element))return;
      const link=event.target.closest<HTMLAnchorElement>("a[data-event]");
      if(!link)return;
      const url=new URL(link.href);
      track(link.dataset.event!,{page_language:locale,source_path:path,destination_host:url.hostname,destination_path:url.pathname});
    }
    function submit(event:SubmitEvent){
      if(!(event.target instanceof HTMLFormElement)||event.target.dataset.event!=="catalog_search")return;
      // Do not send search terms, product URLs, address data or user identifiers.
      track("catalog_search",{page_language:locale,source_path:path});
    }
    document.addEventListener("click",click);document.addEventListener("submit",submit);
    return()=>{document.removeEventListener("click",click);document.removeEventListener("submit",submit);};
  },[path]);
  return null;
}
