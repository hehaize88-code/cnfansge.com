import "../globals.css";

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;
  return <html lang={lang}><body>{children}</body></html>;
}
