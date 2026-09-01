import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lovegobuys.shop"),
  title: "LoveGoBuy Finds & QC Guide",
  description: "Search LoveGoBuy spreadsheet finds, inspect product routes and QC evidence, and understand sizing and dimensional shipping weight before saving a link.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}<script dangerouslySetInnerHTML={{__html:"document.documentElement.lang=(location.pathname.split('/')[1]||'en').match(/^(en|de|es|fr|it)$/)?.[0]||'en'"}} /></body></html>;
}
