"use client";

import { useEffect, useRef, useState } from "react";
import { rows, type Lang } from "./translations";

const lookup = new Map(rows.map(row => [row.en, row]));
const labels: Record<Lang,string> = { en:"EN", de:"DE", fr:"FR", es:"ES", it:"IT" };
const names: Record<Lang,string> = { en:"English", de:"Deutsch", fr:"Français", es:"Español", it:"Italiano" };
const translatedAttributes = ["placeholder", "aria-label", "title"] as const;

export default function LanguageSwitcher(){
  const [lang,setLang] = useState<Lang>("en");
  const [ready,setReady] = useState(false);
  const [open,setOpen] = useState(false);
  const originals = useRef(new WeakMap<Text,string>());
  const nodes = useRef<Text[]>([]);
  const attributeOriginals = useRef(new WeakMap<Element,Map<string,string>>());
  const attributeNodes = useRef<Element[]>([]);
  const activeLanguage = useRef<Lang>("en");

  useEffect(()=>{
    const translateText=(text:Text,selected:Lang)=>{
      const original=originals.current.get(text); if(!original) return;
      const row=lookup.get(original); if(!row) return;
      const raw=text.textContent||""; const start=raw.match(/^\s*/)?.[0]||""; const end=raw.match(/\s*$/)?.[0]||"";
      text.textContent=start+row[selected]+end;
    };
    const translateAttributes=(element:Element,selected:Lang)=>{
      const originalsForElement=attributeOriginals.current.get(element); if(!originalsForElement) return;
      originalsForElement.forEach((original,attribute)=>{const row=lookup.get(original); if(row) element.setAttribute(attribute,row[selected]);});
    };
    const registerText=(text:Text)=>{
      const original=text.textContent?.trim()||"";
      if(lookup.has(original)&&!originals.current.has(text)){
        originals.current.set(text,original); nodes.current.push(text); translateText(text,activeLanguage.current);
      }
    };
    const registerElement=(element:Element)=>{
      let stored=attributeOriginals.current.get(element);
      translatedAttributes.forEach(attribute=>{
        const original=element.getAttribute(attribute)?.trim()||"";
        if(!lookup.has(original)) return;
        if(!stored){stored=new Map();attributeOriginals.current.set(element,stored);attributeNodes.current.push(element);}
        if(!stored.has(attribute)) stored.set(attribute,original);
      });
      translateAttributes(element,activeLanguage.current);
    };
    const scan=(root:Node)=>{
      if(root.nodeType===Node.TEXT_NODE){registerText(root as Text);return;}
      if(root.nodeType!==Node.ELEMENT_NODE&&root!==document.body)return;
      if(root.nodeType===Node.ELEMENT_NODE) registerElement(root as Element);
      const textWalker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let textNode:Node|null;
      while((textNode=textWalker.nextNode())) registerText(textNode as Text);
      const elementWalker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT); let elementNode:Node|null;
      while((elementNode=elementWalker.nextNode())) registerElement(elementNode as Element);
    };

    const saved=localStorage.getItem("hipobuy-language") as Lang|null;
    const initial=saved&&labels[saved]?saved:"en";
    activeLanguage.current=initial;
    scan(document.body);
    setLang(initial);
    setReady(true);
    const observer=new MutationObserver(mutations=>mutations.forEach(m=>m.addedNodes.forEach(scan)));
    observer.observe(document.body,{childList:true,subtree:true});
    return()=>observer.disconnect();
  },[]);

  useEffect(()=>{
    if(!ready)return;
    activeLanguage.current=lang;
    document.documentElement.lang=lang;
    localStorage.setItem("hipobuy-language",lang);
    nodes.current=nodes.current.filter(node=>node.isConnected);
    nodes.current.forEach(node=>{
      const original=originals.current.get(node); if(!original) return;
      const row=lookup.get(original); if(!row) return;
      const raw=node.textContent||""; const start=raw.match(/^\s*/)?.[0]||""; const end=raw.match(/\s*$/)?.[0]||"";
      node.textContent=start+row[lang]+end;
    });
    attributeNodes.current=attributeNodes.current.filter(element=>element.isConnected);
    attributeNodes.current.forEach(element=>attributeOriginals.current.get(element)?.forEach((original,attribute)=>{const row=lookup.get(original);if(row)element.setAttribute(attribute,row[lang]);}));
    window.dispatchEvent(new CustomEvent("hipobuy-language-change",{detail:lang}));
  },[lang,ready]);

  return <div className="languageMenu"><button className="languageButton" type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Choose language">{labels[lang]}⌄</button>{open&&<div className="languageList">{(Object.keys(labels) as Lang[]).map(code=><button type="button" key={code} className={lang===code?"active":""} onClick={()=>{setLang(code);setOpen(false)}}><span>{labels[code]}</span>{names[code]}</button>)}</div>}</div>
}
