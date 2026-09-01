import { notFound } from "next/navigation";
import { HomePage } from "@/components/page-templates";
import { locales, type Locale } from "@/lib/site";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  return <HomePage locale={lang as Locale} />;
}
