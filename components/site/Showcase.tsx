"use client";

import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import { type Locale, showcase } from "@/lib/content";
import Shot from "./Shot";

const HOLD_MS = 8000;

type Labels = { pause: string; play: string; visit: string };

/**
 * Hero showcase: a soft stage that rotates through live projects.
 * Project tabs underneath show which one is playing (with a progress fill),
 * can be clicked to jump, and the rotation can be paused (WCAG 2.2.2).
 */
export default function Showcase({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Labels;
}) {
  // the first poster is the hero's largest image: fetch it early
  if (showcase[0].poster)
    preload(showcase[0].poster, { as: "image", fetchPriority: "high" });
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set());
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  // load the first tall screenshot only after the page has settled, so it never competes with first paint
  useEffect(() => {
    reduce.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce.current) {
      setPaused(true);
      return;
    }
    const start = () => setLoaded((s) => new Set(s).add(0));
    if (document.readyState === "complete") setTimeout(start, 1500);
    else
      window.addEventListener("load", () => setTimeout(start, 1500), {
        once: true,
      });
  }, []);

  // advance on a timer unless paused (the pan itself is pure CSS on the active slide)
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      const n = (active + 1) % showcase.length;
      setLoaded((s) => new Set(s).add(n).add((n + 1) % showcase.length));
      setActive(n);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [active, paused]);

  const go = (i: number) => {
    setLoaded((s) => new Set(s).add(i).add((i + 1) % showcase.length));
    setActive(i);
  };

  const cur = showcase[active];

  return (
    <div className={`stage rv${paused ? " paused" : ""}`}>
      <figure className="film">
        {/* light top-of-page image under the first slide, so the hero paints immediately */}
        {/* biome-ignore lint/performance/noImgElement: static export */}
        <img
          className="poster0"
          src={showcase[0].poster}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        {showcase.map((s, i) =>
          s.shot ? (
            <Shot
              key={s.host}
              name={s.shot}
              sizes="(max-width: 900px) 100vw, 1260px"
              load={loaded.has(i)}
              active={i === active}
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
        <a
          className="visit"
          href={cur.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {labels.visit} · <span className="ltr">{cur.host}</span>
        </a>
      </figure>
      <div className="tabs">
        <div className="tablist">
          {showcase.map((s, i) => (
            <button
              type="button"
              key={s.host}
              className={`tab${i === active ? " on" : ""}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => go(i)}
            >
              <span>{s.name[locale]}</span>
              {i === active && (
                <i
                  key={`${active}-${paused}`}
                  className="bar"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="pp"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? labels.play : labels.pause}
          title={paused ? labels.play : labels.pause}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="6.5"
                y="5"
                width="3.6"
                height="14"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="13.9"
                y="5"
                width="3.6"
                height="14"
                rx="1"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
