"use client";

import { useEffect } from "react";

export default function LanguageSync({ language }) {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
