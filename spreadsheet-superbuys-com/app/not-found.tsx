import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, Footer, Header } from "./components";

export const metadata: Metadata = {
  title: "Page Not Found | Superbuy Spreadsheet",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <div className="site-shell">
      <Header />
      <main className="not-found-page wrap">
        <span className="kicker">404 · PAGE NOT FOUND</span>
        <h1>This link is not in the index.</h1>
        <p>The address may be incomplete or the page may have moved. Return to the current spreadsheet index instead.</p>
        <Link href="/spreadsheet/">Open the spreadsheet <ArrowIcon /></Link>
      </main>
      <Footer />
    </div>
  );
}
