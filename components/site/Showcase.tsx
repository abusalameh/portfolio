"use client";

import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import { type Locale, showcase } from "@/lib/content";

const HOLD_MS = 6500;

/** Hero showcase: rotates through live projects, loading one video ahead. */
export default function Showcase({ locale }: { locale: Locale }) {
  // the first poster is the hero's largest image: fetch it early
  if (showcase[0].poster)
    preload(showcase[0].poster, { as: "image", fetchPriority: "high" });
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set());
  const [capSwap, setCapSwap] = useState(false);
  const [shown, setShown] = useState(0);
  const refs = useRef<Array<HTMLVideoElement | null>>([]);
  const reduce = useRef(false);

  // start loading the first video only after the page has settled, so it never competes with first paint
  useEffect(() => {
    reduce.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce.current) return;
    const start = () => setLoaded((s) => new Set(s).add(0));
    if (document.readyState === "complete") setTimeout(start, 1500);
    else
      window.addEventListener("load", () => setTimeout(start, 1500), {
        once: true,
      });
  }, []);

  // play the active slide, pause the rest, preload the next one, advance on a timer
  useEffect(() => {
    if (reduce.current) return;
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else setTimeout(() => v.pause(), 1000);
    });
    const t = setTimeout(() => {
      const n = (active + 1) % showcase.length;
      setLoaded((s) => new Set(s).add(n).add((n + 1) % showcase.length));
      setActive(n);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [active]);

  // caption fades out, swaps, fades back in
  useEffect(() => {
    if (active === shown) return;
    setCapSwap(true);
    const t = setTimeout(() => {
      setShown(active);
      setCapSwap(false);
    }, 350);
    return () => clearTimeout(t);
  }, [active, shown]);

  const cap = showcase[shown];

  return (
    <figure className="film rv">
      {/* real image under the first video, so the hero paints from a fetched-early image rather than waiting for video */}
      {/* biome-ignore lint/performance/noImgElement: static export */}
      <img
        className="poster0"
        src={showcase[0].poster}
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      {showcase.map((s, i) =>
        s.video ? (
          <video
            key={s.host}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={i === active ? "on" : undefined}
            src={loaded.has(i) ? s.video : undefined}
            poster={s.poster}
            muted
            loop
            playsInline
            preload={loaded.has(i) ? "auto" : "none"}
          />
        ) : (
          // biome-ignore lint/performance/noImgElement: static export, plain img is intended
          <img
            key={s.host}
            className={`still${i === active ? " on" : ""}`}
            src={s.image}
            alt=""
            loading="lazy"
          />
        ),
      )}
      <figcaption className={capSwap ? "swap" : undefined}>
        {cap.name[locale]} · <span className="ltr">{cap.host}</span>
      </figcaption>
      <div className="dots" aria-hidden="true">
        {showcase.map((s, i) => (
          <i key={s.host} className={i === active ? "on" : undefined} />
        ))}
      </div>
    </figure>
  );
}
