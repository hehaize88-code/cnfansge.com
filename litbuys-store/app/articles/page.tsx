import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "LitBuy Guides 2026: Spreadsheet, Warehouse, QC & Shipping", description: "Read 12 independent LitBuy guides covering spreadsheet links, warehouse receiving, order status, QC photos, shoes, US shipping, parcel weight and buyer checks.", alternates: { canonical: "/articles" } };
export default function Page() { return <SubPage page="articles" />; }
