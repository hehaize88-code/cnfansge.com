import "../globals.css";

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;
  return <html lang={lang}><head><script async src="https://www.googletagmanager.com/gtag/js?id=G-K4JW68ZWVN" /><script dangerouslySetInnerHTML={{ __html: 'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-K4JW68ZWVN");' }} /></head><body>{children}</body></html>;
}
