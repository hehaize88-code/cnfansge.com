import {notFound} from 'next/navigation';
import {Document,baseMetadata} from '../document';
import {languages,type Lang} from '../routing';
export const metadata=baseMetadata;
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const {lang}=await params;if(!languages.includes(lang as Lang)||lang==='en')notFound();return <Document lang={lang as Lang}>{children}</Document>;}
