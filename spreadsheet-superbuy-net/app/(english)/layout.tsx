import {Document,baseMetadata} from '../document';
export const metadata=baseMetadata;
export default function Layout({children}:{children:React.ReactNode}){return <Document lang="en">{children}</Document>;}
