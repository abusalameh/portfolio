import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Raja Abu Salameh",
  alternates: {
    canonical: `${SITE_URL}/ar/`,
    languages: {
      ar: `${SITE_URL}/ar/`,
      en: `${SITE_URL}/en/`,
      "x-default": `${SITE_URL}/ar/`,
    },
  },
  robots: { index: false, follow: true },
};

/** Root shell for the language-picker redirect at "/" only. */
export default function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
