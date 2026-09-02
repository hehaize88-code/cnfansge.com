import Link from "next/link";

export default function RootPage() {
  return (
    <main className="language-entry">
      <meta httpEquiv="refresh" content="0;url=/en" />
      <div>
        <span>USFANS INDEX</span>
        <h1>Opening the English research index.</h1>
        <Link className="button primary" href="/en">Continue →</Link>
      </div>
    </main>
  );
}
