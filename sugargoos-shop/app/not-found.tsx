import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>This route is not on the board.</h1><p>The address may be incomplete or the record may have moved.</p><Link href="/en/">Back to the find desk</Link></main>;
}
