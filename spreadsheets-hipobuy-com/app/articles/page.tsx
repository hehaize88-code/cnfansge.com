import PageHero from '../components/PageHero';
import ArticleCards from './ArticleCards';
import { pageMetadata } from '../seo';
export const metadata=pageMetadata({title:'HipoBuy Guides: Shipping, Tracking, Sizes & QC',description:'Read 13 HipoBuy guides covering Spain and Germany shipping, rehearsal parcels, tracking, product search, sizes, QC and delivered costs.',path:'/articles/'});
export default function ArticlesPage(){return <><PageHero eyebrow="BUYER EDITORIAL" title="HipoBuy guides for your next buying decision" copy="Start with the task in front of you: finding a product, checking its size, approving QC or preparing a shipment."/><section className="wrap"><ArticleCards/></section></>}
