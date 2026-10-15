import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="kicker">ERROR / 404</p><h1>Route not found.</h1><p>The record may have moved, expired or never existed.</p><Link className="button button-primary" href="/">Back to LitBuys ↗</Link></main>;
}
