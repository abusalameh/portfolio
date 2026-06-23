import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/Providers";
import ThemeScript from "../components/ThemeScript";
import CursorLight from "../components/CursorLight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abusalameh.dev"),
  title: "Raja Abu Salameh - Full Stack Developer & Web Solutions Expert",
  description:
    "Experienced Full Stack Developer specializing in React.js, Vue.js, Next.js, Laravel, and modern web technologies. Expert in frontend development, backend architecture, performance optimization, and SEO.",
  keywords: [
    "Full Stack Developer",
    "React.js Developer",
    "Vue.js Developer",
    "Next.js Expert",
    "Laravel Developer",
    "PHP Developer",
    "Node.js Developer",
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "TypeScript",
    "JavaScript",
    "Performance Optimization",
    "SEO Expert",
    "TailwindCSS",
    "MySQL",
    "PostgreSQL",
    "Web Solutions",
  ],
  authors: [{ name: "Raja Abu Salameh" }],
  creator: "Raja Abu Salameh",
  publisher: "Raja Abu Salameh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abusalameh.dev",
    title: "Raja Abu Salameh - Full Stack Developer & Web Solutions Expert",
    description:
      "Experienced Full Stack Developer specializing in React.js, Vue.js, Next.js, Laravel, and modern web technologies. Expert in frontend development, backend architecture, performance optimization, and SEO.",
    siteName: "Raja Abu Salameh Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Raja Abu Salameh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Abu Salameh - Full Stack Developer & Web Solutions Expert",
    description:
      "Experienced Full Stack Developer specializing in React.js, Vue.js, Next.js, Laravel, and modern web technologies.",
    images: ["/me.jpg"],
    creator: "@rajaabu",
  },
  alternates: {
    canonical: "https://abusalameh.dev",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#14181e" },
  ],
};

// Structured data for richer search results.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raja Abu Salameh",
  url: "https://abusalameh.dev",
  image: "https://abusalameh.dev/me.jpg",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Vue, Next.js, and Laravel.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jenin",
    addressCountry: "PS",
  },
  sameAs: [
    "https://linkedin.com/in/raja-salameh",
    "https://github.com/abusalameh",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Vue.js",
    "Laravel",
    "TypeScript",
    "Node.js",
    "Performance Optimization",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <ThemeScript />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CursorLight />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
