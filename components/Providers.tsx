// app/providers.tsx
"use client";

import { useEffect, useState, type ReactNode } from "react";

export function PostHogProvider({ children }: { children: ReactNode }) {
  // Holds the lazily-loaded PostHog provider once analytics is initialized.
  const [Wrapper, setWrapper] = useState<
    ((props: { children: ReactNode }) => ReactNode) | null
  >(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    // No key configured — skip analytics entirely so posthog-js never ships
    // in the initial bundle and the page works without it.
    if (!key) return;

    let active = true;
    (async () => {
      try {
        const [{ default: posthog }, { PostHogProvider: PHProvider }] =
          await Promise.all([import("posthog-js"), import("posthog-js/react")]);
        if (!active) return;

        posthog.init(key, {
          api_host:
            process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
          person_profiles: "identified_only",
          defaults: "2025-05-24",
        });

        setWrapper(() => (props: { children: ReactNode }) => (
          <PHProvider client={posthog}>{props.children}</PHProvider>
        ));
      } catch (err) {
        // Analytics must never break the page.
        console.error("PostHog init failed:", err);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  if (Wrapper) return <Wrapper>{children}</Wrapper>;
  return <>{children}</>;
}
