import type { ReactNode } from "react";
import { SiteDocument, siteIcons } from "../document";

export const metadata = { icons: siteIcons };
export default function Layout({ children }: { children: ReactNode }) { return <SiteDocument lang="en">{children}</SiteDocument>; }
