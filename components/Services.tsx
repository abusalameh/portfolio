"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  StackSimple,
  Browsers,
  Database,
  Gauge,
  CaretDown,
  type Icon,
} from "@phosphor-icons/react";

interface Capability {
  title: string;
  summary: string;
  description: string;
  stack: string[];
  icon: Icon;
}

const capabilities: Capability[] = [
  {
    title: "Full-stack product builds",
    summary: "From database schema to the pixels users touch.",
    description:
      "I build products end to end: data modeling, APIs, auth, and the interface on top. Ecommerce, CMS sites, and web apps where the backend and frontend are built together.",
    stack: ["Next.js", "Laravel", "PostgreSQL", "PayloadCMS"],
    icon: StackSimple,
  },
  {
    title: "Frontend engineering",
    summary: "Interfaces that feel fast and stay accessible.",
    description:
      "Component systems, smooth interactions, and responsive layouts built to last. I work closely with design to keep the UI consistent and the codebase maintainable as it grows.",
    stack: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
    icon: Browsers,
  },
  {
    title: "Backend & APIs",
    summary: "Backends that stay secure as they grow.",
    description:
      "Services, data layers, and APIs that stay reliable as traffic grows. I design schemas and integrations that are easy to extend as the product gets bigger.",
    stack: ["Node.js", "Laravel", "MySQL", "Redis"],
    icon: Database,
  },
  {
    title: "Performance & SEO",
    summary: "Faster loads, stronger rankings, real metrics.",
    description:
      "Core Web Vitals work, technical SEO, and SSR/SSG where it helps. I have cut client load times by up to 40% and improved search visibility with changes I can measure.",
    stack: ["Core Web Vitals", "SSR / SSG", "Technical SEO"],
    icon: Gauge,
  },
];

const Services = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="bg-muted py-24 sm:py-32"
      aria-label="Services offered"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Header */}
        <motion.div
          className="lg:col-span-4"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:sticky lg:top-28">
            <h2
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              role="heading"
              aria-level={2}
            >
              How I can help
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether you need help with one part or the whole thing, here are
              four ways I can work with your team.
            </p>
          </div>
        </motion.div>

        {/* Capability accordion */}
        <motion.div
          className="lg:col-span-8"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="border-t border-border">
            {capabilities.map((cap, index) => {
              const isActive = active === index;
              const IconCmp = cap.icon;
              return (
                <div key={cap.title} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setActive(isActive ? -1 : index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    aria-expanded={isActive}
                    className="flex w-full items-center gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-6"
                  >
                    <span
                      className={`font-mono text-sm tabular-nums transition-colors duration-200 ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <IconCmp
                      size={22}
                      weight={isActive ? "fill" : "regular"}
                      className={`flex-shrink-0 transition-colors duration-200 ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-xl font-semibold tracking-tight transition-colors duration-200 sm:text-2xl ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {cap.title}
                      </span>
                      <span className="mt-1 hidden text-sm text-muted-foreground sm:block">
                        {cap.summary}
                      </span>
                    </span>
                    <CaretDown
                      size={18}
                      weight="bold"
                      className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isActive ? "rotate-180 text-accent" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* expanding detail (CSS grid-rows, no layout shift) */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-7 pl-[2.75rem] sm:pl-[3.5rem]">
                        <p className="max-w-2xl leading-relaxed text-muted-foreground">
                          {cap.description}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
                          <span className="text-accent">Stack</span>
                          {cap.stack.map((tech, i) => (
                            <span key={tech}>
                              {tech}
                              {i < cap.stack.length - 1 ? " /" : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
