import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";
import BlobCursor from "../components/BlobCursor";
import SplashCursor from "../components/SplashCursor";
import LightRays from "../components/LightRays";
import { PostHogProvider } from "@/components/Providers";

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${aleo.variable} antialiased bg-white text-gray-900`}>
        <PostHogProvider>
          <LightRays
            raysOrigin="top-center"
            raysColor="rgba(59, 130, 246, 0.5)"
            raysSpeed={0.8}
            lightSpread={60}
            rayLength={120}
            pulsating={true}
            fadeDistance={70}
            followMouse={true}
            mouseInfluence={0.3}
          />
          {/* <SplashCursor
          color="#3b82f6"
          size={16}
          splashCount={8}
          splashSize={6}
          animationDuration={0.8}
        /> */}
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
