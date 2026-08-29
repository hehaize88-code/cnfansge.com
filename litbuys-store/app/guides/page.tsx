import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "How to Use LitBuy: Buying, QC & Shipping Guides", description: "Learn the LitBuy order flow, listing checks, warehouse QC limits, two-stage payment model, rehearsal parcel and shipping planning.", alternates: { canonical: "/guides" } };
export default function Page() { return <SubPage page="guides" />; }
