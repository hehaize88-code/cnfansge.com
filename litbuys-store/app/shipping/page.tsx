import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "LitBuy Shipping Cost: Weight & Rehearsal Guide", description: "Estimate LitBuy shipping with actual, volumetric and chargeable weight, first-weight billing, packing choices and rehearsal parcel measurements.", alternates: { canonical: "/shipping" } };
export default function Page() { return <SubPage page="shipping" />; }
