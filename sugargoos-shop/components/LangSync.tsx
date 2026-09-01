"use client";

import { useEffect } from "react";
import { Locale } from "@/lib/site-data";

export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  return null;
}
