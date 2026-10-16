import {SitePage} from '../site-client';
import {getUI} from '../catalog';
import {pageMetadata} from '../seo';
const t=getUI('en');
export const metadata=pageMetadata('/',t.hero,t.intro);
export default function Home(){return <SitePage page="home"/>;}
