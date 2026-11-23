"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * All page-level motion and scroll behaviour in one place, mirroring the approved mock:
 * entrance reveal, sticky-header state, active nav section, stacking services deck,
 * count-up numbers, lazy on-screen videos, floating project preview, magnetic buttons
 * and Lenis smooth scrolling. Everything is skipped or simplified under reduced motion.
 */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const cleanups: Array<() => void> = [];

    // reveal on enter
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".rv").forEach((el) => {
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());

    // active section in the header
    const links = [...document.querySelectorAll<HTMLAnchorElement>(".nav a")];
    const navIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            for (const a of links)
              a.classList.toggle(
                "active",
                a.getAttribute("href") === `#${e.target.id}`,
              );
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["work", "services", "experience", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) navIO.observe(el);
    });
    cleanups.push(() => navIO.disconnect());

    // header shadow + stacking services deck
    const header = document.querySelector("header.site");
    const cards = [...document.querySelectorAll<HTMLElement>(".s")];
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 10);
      if (reduce) return;
      cards.forEach((c, i) => {
        const next = cards[i + 1];
        let p = 0;
        if (next) {
          const top = Number.parseFloat(getComputedStyle(c).top) || 0;
          const r = next.getBoundingClientRect();
          p = Math.min(
            1,
            Math.max(
              0,
              (window.innerHeight - r.top) / (window.innerHeight - top),
            ),
          );
        }
        c.style.setProperty("--sc", (1 - p * 0.07).toFixed(4));
        c.style.setProperty("--dim", (p * 0.32).toFixed(3));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // numbers count up once
    const cio = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const raw = el.dataset.n ?? "";
          const n = Number.parseInt(raw, 10);
          const suffix = raw.replace(/[0-9]/g, "");
          if (reduce || !n) return;
          const t0 = performance.now();
          const step = (t: number) => {
            const k = Math.min(1, (t - t0) / 1400);
            el.textContent = `${Math.round(n * (1 - (1 - k) ** 3))}${suffix}`;
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }),
      { threshold: 0.6 },
    );
    document.querySelectorAll("[data-n]").forEach((el) => {
      cio.observe(el);
    });
    cleanups.push(() => cio.disconnect());

    // videos outside the hero load and play only while on screen
    const vio = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            if (!v.getAttribute("src") && v.dataset.src) v.src = v.dataset.src;
            if (!reduce) v.play().catch(() => {});
          } else v.pause();
        }),
      { threshold: 0.25 },
    );
    document
      .querySelectorAll<HTMLVideoElement>("video[data-src]")
      .forEach((v) => {
        if (!v.closest(".film")) vio.observe(v);
      });
    cleanups.push(() => vio.disconnect());

    // floating preview that follows the cursor over the "more projects" list
    const fl = document.querySelector<HTMLElement>(".float");
    const fi = fl?.querySelector("img");
    let fx = 0;
    let fy = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;
    if (fl && fi && fine) {
      const over = (e: PointerEvent) => {
        const r = (e.target as Element).closest<HTMLElement>(".prow");
        if (r?.dataset.img) {
          fi.src = r.dataset.img;
          fl.classList.add("on");
        }
      };
      const out = (e: PointerEvent) => {
        const r = (e.target as Element).closest(".prow");
        if (r && !r.contains(e.relatedTarget as Node))
          fl.classList.remove("on");
      };
      const move = (e: PointerEvent) => {
        tx = e.clientX + 24;
        ty = e.clientY - 120;
      };
      const loop = () => {
        fx += (tx - fx) * 0.14;
        fy += (ty - fy) * 0.14;
        fl.style.transform = `translate3d(${fx}px,${fy}px,0)`;
        raf = requestAnimationFrame(loop);
      };
      document.addEventListener("pointerover", over);
      document.addEventListener("pointerout", out);
      window.addEventListener("pointermove", move, { passive: true });
      raf = requestAnimationFrame(loop);
      cleanups.push(() => {
        document.removeEventListener("pointerover", over);
        document.removeEventListener("pointerout", out);
        window.removeEventListener("pointermove", move);
        cancelAnimationFrame(raf);
      });
    }

    // magnetic buttons
    if (fine && !reduce) {
      const mags = [...document.querySelectorAll<HTMLElement>(".mag")];
      const pull = (e: PointerEvent) => {
        mags.forEach((b) => {
          const r = b.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          const near = Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.9;
          b.style.setProperty(
            "--mx",
            near ? `${(dx * 0.2).toFixed(1)}px` : "0px",
          );
          b.style.setProperty(
            "--my",
            near ? `${(dy * 0.28).toFixed(1)}px` : "0px",
          );
        });
      };
      window.addEventListener("pointermove", pull, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", pull));
    }

    // smooth scrolling + in-page anchors
    if (!reduce) {
      const lenis = new Lenis({ lerp: 0.09 });
      let lr = 0;
      const tick = (t: number) => {
        lenis.raf(t);
        lr = requestAnimationFrame(tick);
      };
      lr = requestAnimationFrame(tick);
      const anchor = (e: MouseEvent) => {
        const a = (e.target as Element).closest<HTMLAnchorElement>(
          'a[href^="#"]',
        );
        if (!a) return;
        const h = a.getAttribute("href") ?? "#top";
        e.preventDefault();
        lenis.scrollTo(h === "#top" ? 0 : h, { offset: -72, duration: 1.3 });
        history.replaceState(null, "", h === "#top" ? " " : h);
      };
      document.addEventListener("click", anchor);
      cleanups.push(() => {
        document.removeEventListener("click", anchor);
        cancelAnimationFrame(lr);
        lenis.destroy();
      });
    }

    return () => {
      for (const c of cleanups) c();
    };
  }, []);

  return null;
}
