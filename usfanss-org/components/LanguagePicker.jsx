"use client";

import { usePathname, useRouter } from "next/navigation";

const options = [
  ["en", "EN"],
  ["de", "DE"],
  ["es", "ES"],
  ["fr", "FR"],
  ["it", "IT"],
];

export default function LanguagePicker({ current, label }) {
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(event) {
    const next = event.target.value;
    const parts = pathname.split("/");
    parts[1] = next;
    router.push(parts.join("/") || `/${next}`);
  }

  return (
    <label className="language-picker">
      <span className="sr-only">{label}</span>
      <select value={current} onChange={changeLanguage} aria-label={label}>
        {options.map(([value, label]) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
