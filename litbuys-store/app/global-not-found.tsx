import "./globals.css";
export const metadata = { title: "Page not found | LitBuys Store", robots: { index: false, follow: true } };
export default function GlobalNotFound() {
  return <html lang="en"><body><main className="not-found"><p className="kicker">404</p><h1>Page not found</h1><p>This address is unavailable. Choose your language to continue.</p><nav className="article-related"><a href="/">English</a><a href="/de/">Deutsch</a><a href="/es/">Español</a><a href="/fr/">Français</a><a href="/it/">Italiano</a></nav></main></body></html>;
}
