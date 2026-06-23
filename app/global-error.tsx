"use client";

import { useEffect } from "react";

// Last-resort boundary: catches errors thrown in the root layout itself.
// Must render its own <html>/<body> and cannot rely on app CSS, so styles
// are inlined to guarantee it renders no matter what failed upstream.
export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
          padding: "0 1.25rem",
          textAlign: "center",
          background: "#14181e",
          color: "#f4f7fb",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", fontWeight: 600, margin: 0 }}>
          Something went wrong
        </h1>
        <p style={{ color: "#a8a097", margin: 0, maxWidth: "24rem" }}>
          The page failed to load. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            height: "3rem",
            padding: "0 1.75rem",
            borderRadius: "9999px",
            border: "none",
            background: "#fafaf9",
            color: "#0c0a09",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
