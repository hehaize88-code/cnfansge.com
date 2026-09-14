import Link from "next/link";

export default function NotFound() { return <main className="not-found"><span>404</span><h1>This product route is not in the index.</h1><p>Return to the spreadsheet or search the complete product catalog.</p><div><Link href="/">Back to Hipo Index</Link><a href="https://cnfansge.com/AllProducts/">Search catalog ↗</a></div></main>; }
