import { SitePage } from "../site-client";
import { pageMetadata } from "../seo";
export const metadata=pageMetadata("/shipping/","Superbuy Shipping Cost & Parcel Planning","Plan Superbuy shipping with actual and volumetric weight, eligible routes, packing choices, insurance and destination-specific customs checks.");
export default function Page(){ return <SitePage page="shipping"/>; }
