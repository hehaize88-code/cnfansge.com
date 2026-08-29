import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "LitBuy Finds 2026: Checked Product Links", description: "Browse LitBuy finds by category with checked images, source IDs, reference prices and direct routes to the matched product record.", alternates: { canonical: "/finds" } };
export default function Page() { return <SubPage page="finds" />; }
