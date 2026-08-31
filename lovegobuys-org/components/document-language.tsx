"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/site-data";

export function DocumentLanguage({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
