"use client";

import { useEffect, useRef } from "react";

/**
 * A soft light that tracks the cursor across the whole page. Dark mode only
 * (hidden in light via the `dark:` variant). Fixed to the viewport, so the
 * coordinates map straight to clientX/clientY. Updates CSS vars inside a rAF
 * so pointer moves never thrash layout.
 */
const CursorLight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="cursor-light pointer-events-none fixed inset-0 z-[5] hidden dark:block"
    />
  );
};

export default CursorLight;
