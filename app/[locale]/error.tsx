"use client";

import { useEffect } from "react";

// Route-level error boundary: a recoverable fallback instead of a blank screen.
export default function ErrorBoundary({
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
    <main className="wrap hero">
      <h2>Something went wrong · حدث خطأ</h2>
      <p className="sub">It has been logged. Try again, or reload the page.</p>
      <div className="ctas">
        <button type="button" className="btn" onClick={reset}>
          Try again · حاول مجددًا
        </button>
      </div>
    </main>
  );
}
