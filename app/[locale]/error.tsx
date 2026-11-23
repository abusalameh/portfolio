"use client";

import { useEffect } from "react";

// Route-level error boundary. Catches render/runtime errors in the page tree
// and shows a recoverable fallback instead of a blank "Application error".
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      role="main"
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-5 text-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Something went wrong
      </span>
      <h1 className="mt-5 max-w-lg text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        This page hit an <span className="text-accent">unexpected error.</span>
      </h1>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
        It has been logged. You can try again, or reload the page.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-background transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Reload home
        </a>
      </div>
    </main>
  );
}
