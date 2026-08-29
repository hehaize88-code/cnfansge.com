import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "LitBuy FAQ: Fees, Storage, Refunds & Shipping", description: "Fact-checked answers about LitBuy storage time, two-stage payment, QC, shipping weight, cancellation, returns, refunds and customer reviews.", alternates: { canonical: "/faq" } };
export default function Page() { return <SubPage page="faq" />; }
