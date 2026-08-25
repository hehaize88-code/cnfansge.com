import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap" style={{ minHeight: "70vh", paddingTop: "8rem", textAlign: "center" }}>
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>This route is not in the spreadsheet.</h1>
      <p>The link may be outdated. Return to the current product index and continue from a checked route.</p>
      <p><Link className="btn primary" href="/spreadsheet/">Open spreadsheet</Link></p>
    </main>
  );
}
