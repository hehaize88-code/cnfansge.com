import type { Metadata } from "next";
import { SubPage } from "../site";

export const metadata: Metadata = { title: "LitBuy QC Photos: Warehouse Inspection Checklist", description: "Use a LitBuy QC photo checklist for identity, quantity, shape, symmetry, measurements, labels and visible defects—without overstating the evidence.", alternates: { canonical: "/qc" } };
export default function Page() { return <SubPage page="qc" />; }
