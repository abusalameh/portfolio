"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

interface Role {
  company: string;
  initial: string;
  logo?: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  current?: boolean;
}

const roles: Role[] = [
  {
    company: "SalmaSoft",
    initial: "S",
    logo: "/images/logos/salmasoft.png",
    period: "Feb 2026 - Present",
    role: "Founder, CEO & CTO",
    summary: "Founded an Arabic-first ecommerce platform; own product and engineering.",
    tags: ["Next.js", "Supabase", "Leadership"],
    current: true,
  },
  {
    company: "YallaBites",
    initial: "Y",
    logo: "/images/logos/yallabites.png",
    period: "Jul 2025 - Present",
    role: "Frontend Developer",
    summary: "Built the customer-facing experience of a multi-vendor food marketplace.",
    tags: ["Next.js", "TanStack Query", "Marketplace"],
    current: true,
  },
  {
    company: "Self-Employed",
    initial: "SE",
    period: "Jun 2024 - Present",
    role: "Senior Software Engineer",
    summary: "Ecommerce and CMS builds; cut client load times by up to 40%.",
    tags: ["Next.js", "SSR", "SEO"],
    current: true,
  },
  {
    company: "Xngage",
    initial: "X",
    logo: "/images/logos/xngage.png",
    period: "Oct 2022 - Jun 2024",
    role: "Senior Frontend Developer",
    summary: "Reusable component systems with design; stronger a11y, SEO, and speed.",
    tags: ["Design Systems", "Accessibility", "SEO"],
  },
  {
    company: "QuizPlus",
    initial: "Q",
    logo: "/images/logos/quizplus.png",
    period: "Apr 2021 - Oct 2022",
    role: "Senior Frontend Developer",
    summary: "Angular interfaces and technical SEO for an e-learning platform.",
    tags: ["Angular", "TypeScript", "SEO"],
  },
  {
    company: "Freelance",
    initial: "F",
    period: "Oct 2020 - Oct 2022",
    role: "Senior Full Stack Developer",
    summary: "Vue front-ends and complete Laravel backends for clients.",
    tags: ["Vue.js", "Laravel"],
  },
  {
    company: "Safarway",
    initial: "Sa",
    logo: "/images/logos/safarway.png",
    period: "Jun 2019 - Oct 2020",
    role: "Senior Frontend Engineer",
    summary: "Vue and Nuxt SSR for a tourism platform; improved SEO and speed.",
    tags: ["Vue.js", "Nuxt", "SSR"],
  },
  {
    company: "OneStopParking",
    initial: "O",
    logo: "/images/logos/onestopparking.png",
    period: "Mar 2018 - Jun 2019",
    role: "Full Stack Engineer",
    summary: "Built a parking reservation system and inventory management tooling.",
    tags: ["Laravel", "Vue.js", "MySQL"],
  },
];

const stats = [
  { value: "8+", label: "Years shipping", accent: false },
  { value: "8", label: "Roles & ventures", accent: false },
  { value: "40%", label: "Faster load times", accent: true },
];

const LogoBadge = ({ item }: { item: Role }) => {
  const [failed, setFailed] = useState(false);
  if (item.logo && !failed) {
    return (
      <span
        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ${
          item.current ? "ring-2 ring-accent" : "ring-1 ring-border"
        }`}
        aria-hidden="true"
      >
        {/* favicon-sourced company mark; monogram fallback on error */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.logo}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-10 w-10 object-contain"
        />
      </span>
    );
  }
  return (
    <span
      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-base font-semibold ${
        item.current
          ? "bg-accent text-background"
          : "border border-border bg-card text-muted-foreground"
      }`}
      aria-hidden="true"
    >
      {item.initial}
    </span>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-muted py-24 sm:py-32"
      ref={ref}
      aria-label="Professional experience"
    >
      {/* warm accent glow, matching the hero treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(48rem_32rem_at_12%_-6%,var(--accent-soft),transparent_58%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* eyebrow */}
          <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Experience
          </span>

          <h2
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
            role="heading"
            aria-level={2}
          >
            <span className="text-accent">Eight years</span> shipping for real
            teams.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From startups and enterprise clients to running my own product,
            building and leading work that ships to production.
          </p>
        </motion.div>

        {/* Quick stats */}
        <motion.dl
          className="mt-12 grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-card/40"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-6 sm:px-7 sm:py-7 ${
                i > 0 ? "border-l border-border" : ""
              }`}
            >
              <dd
                className={`text-4xl font-semibold tracking-tight sm:text-5xl ${
                  s.accent ? "text-accent" : "text-foreground"
                }`}
              >
                {s.value}
              </dd>
              <dt className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>

        {/* Career timeline */}
        <ol className="relative mt-14 space-y-8" role="list">
          {roles.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.15 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex gap-5 sm:gap-6"
            >
              {/* connecting rail to the next node (skipped on the last item) */}
              {index < roles.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-7 top-7 -z-0 h-[calc(100%+2rem)] w-px -translate-x-1/2 ${
                    item.current ? "bg-accent/40" : "bg-border"
                  }`}
                />
              )}

              {/* company logo node, sits on the rail */}
              <div className="relative z-10">
                <LogoBadge item={item} />
              </div>

              <div className="min-w-0 flex-1 pt-0.5 transition-transform duration-200 group-hover:translate-x-0.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <h3
                    className="text-base font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent sm:text-lg"
                    role="heading"
                    aria-level={3}
                  >
                    {item.company}
                  </h3>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    {item.current && (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                        Now
                      </span>
                    )}
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground/80">
                  {item.role}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors duration-200 group-hover:border-accent/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
