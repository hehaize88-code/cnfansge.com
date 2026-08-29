import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "LitBuy Spreadsheet 2026: Verified Product Finds", description: "Browse a checked LitBuy spreadsheet with matched product IDs, source images, CNY prices, USD references and practical listing verification notes.", alternates: { canonical: "/spreadsheet" } };
export default function Page() { return <SubPage page="spreadsheet" />; }
