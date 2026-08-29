import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "LitBuy Guides 2026: Spreadsheet, QC & Reviews", description: "Read independent 1,200–1,800 word LitBuy guides covering spreadsheets, warehouse QC photos, shipping cost, rehearsal weight and customer reviews.", alternates: { canonical: "/articles" } };
export default function Page() { return <SubPage page="articles" />; }
