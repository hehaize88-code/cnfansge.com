"use client";

import { usePathname, useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Locale, localeNames, locales } from "@/lib/site-data";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  function changeLanguage(next: string) {
    const parts = pathname.split("/");
    parts[1] = next;
    router.push(parts.join("/") || `/${next}/`);
  }
  return (
    <Select value={locale} onValueChange={changeLanguage}>
      <SelectTrigger className="lang-trigger" aria-label="Language"><SelectValue /></SelectTrigger>
      <SelectContent className="lang-menu" position="popper" align="end" sideOffset={6}>
        {locales.map((item) => <SelectItem className="lang-option" key={item} value={item}>{localeNames[item]}</SelectItem>)}
      </SelectContent>
    </Select>
  );
}
