import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main
      role="main"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background px-5 text-center"
    >
      {/* warm accent glow, matching the hero treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(55rem_40rem_at_50%_-10%,var(--accent-soft),transparent_55%)]"
      />

      <div className="relative">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Error 404
        </span>
        <h1 className="mt-5 text-7xl font-semibold leading-none tracking-tight text-foreground sm:text-8xl">
          Page <span className="text-accent">not found.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-background transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft
              size={17}
              weight="bold"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
