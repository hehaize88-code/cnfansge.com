import Script from 'next/script';
import './globals.css';
import type {Lang} from './routing';
export function Document({children,lang}:{children:React.ReactNode;lang:Lang}){return <html lang={lang}><body><Script src="https://www.googletagmanager.com/gtag/js?id=G-F1ZYDC5LV5" strategy="afterInteractive"/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-F1ZYDC5LV5');`}</Script>{children}</body></html>;}
export const baseMetadata={metadataBase:new URL('https://spreadsheet-superbuy.net'),title:{default:'Superbuy Spreadsheet 2026: Product Links & Buying Guides',template:'%s | Superbuy Spreadsheet'},robots:{index:true,follow:true},icons:{icon:'/favicon.svg'}};
