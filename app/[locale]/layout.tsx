import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Rubik } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../site.css";
import { PostHogProvider } from "@/components/Providers";
import {
  dict,
  dirOf,
  GITHUB,
  isLocale,
  LINKEDIN,
  locales,
  SITE_URL,
} from "@/lib/content";

const rubik = Rubik({
  subsets: ["latin", "arabic"],
  variable: "--font-rubik",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { title, description } = dict[locale].meta;
  const url = `${SITE_URL}/${locale}/`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{ name: "Raja Abu Salameh" }],
    creator: "Raja Abu Salameh",
    alternates: {
      canonical: url,
      languages: {
        ar: `${SITE_URL}/ar/`,
        en: `${SITE_URL}/en/`,
        "x-default": `${SITE_URL}/ar/`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: locale === "ar" ? "رجا أبو سلامة" : "Raja Abu Salameh",
      locale: locale === "ar" ? "ar_PS" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_PS"],
      images: [{ url: "/me.jpg", alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/me.jpg"],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.ico" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: locale === "ar" ? "رجا أبو سلامة" : "Raja Abu Salameh",
    alternateName: locale === "ar" ? "Raja Abu Salameh" : "رجا أبو سلامة",
    url: `${SITE_URL}/${locale}/`,
    image: `${SITE_URL}/me.jpg`,
    jobTitle:
      locale === "ar"
        ? "مهندس برمجيات ومؤسس سلمى سوفت"
        : "Software engineer and founder of SalmaSoft",
    worksFor: {
      "@type": "Organization",
      name: "SalmaSoft",
      url: "https://salmasoft.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jenin",
      addressCountry: "PS",
    },
    sameAs: [LINKEDIN, GITHUB],
    knowsAbout: [
      "React",
      "Next.js",
      "Vue.js",
      "Laravel",
      "TypeScript",
      "Ecommerce",
      "Web performance",
      "SEO",
    ],
  };

  return (
    <html
      lang={locale}
      dir={dirOf(locale)}
      className={`${rubik.variable} ${plex.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
