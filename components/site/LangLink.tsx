"use client";

import type { Locale } from "@/lib/content";

/** A real link to the same page in the other language; keeps the current section and remembers the choice. */
export default function LangLink({ to, label }: { to: Locale; label: string }) {
  return (
    <a
      className="lang"
      href={`/${to}/`}
      lang={to}
      hrefLang={to}
      onClick={(e) => {
        try {
          localStorage.setItem("lang", to);
        } catch {}
        if (window.location.hash) {
          e.preventDefault();
          window.location.href = `/${to}/${window.location.hash}`;
        }
      }}
    >
      {label}
    </a>
  );
}
