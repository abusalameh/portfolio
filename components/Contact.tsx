"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import {
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
  ArrowUpRight,
  type Icon,
} from "@phosphor-icons/react";

const socials: { label: string; href: string; icon: Icon }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/raja-salameh", icon: LinkedinLogo },
  { label: "GitHub", href: "https://github.com/abusalameh", icon: GithubLogo },
  { label: "WhatsApp", href: "https://wa.me/972598509358", icon: WhatsappLogo },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="contact"
      className="bg-background py-24 sm:py-32"
      ref={ref}
      aria-label="Contact"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — statement */}
          <motion.div {...rise(0)}>
            <h2
              className="text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              role="heading"
              aria-level={2}
            >
              Start a <span className="text-accent">project.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Open to freelance projects and full-time roles. Tell me what you
              are working on and I will get back to you.
            </p>

            {/* socials */}
            <div
              className="mt-10 flex items-center gap-2"
              role="list"
              aria-label="Social links"
            >
              {socials.map(({ label, href, icon: IconCmp }) => (
                <div key={label} role="listitem">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`${label} — opens in a new tab`}
                  >
                    <IconCmp size={19} weight="regular" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — labeled contact index */}
          <motion.dl
            {...rise(0.12)}
            className="flex flex-col self-center"
          >
            {/* Email — primary */}
            <div className="border-t border-border py-6 first:border-t-0 first:pt-0 sm:py-7">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </dt>
              <dd className="mt-3">
                <Link
                  href="mailto:future.adv2@gmail.com"
                  className="group inline-flex items-center gap-2 text-xl font-medium tracking-tight text-foreground transition-colors duration-200 hover:text-accent sm:text-2xl"
                  aria-label="Email Raja Abu Salameh"
                >
                  future.adv2@gmail.com
                  <ArrowUpRight
                    size={20}
                    weight="bold"
                    className="text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </dd>
            </div>

            {/* Location */}
            <div className="border-t border-border py-6 sm:py-7">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Location
              </dt>
              <dd className="mt-3 text-lg text-foreground">Jenin, Palestine</dd>
            </div>

            {/* Phone */}
            <div className="border-t border-border py-6 sm:py-7">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </dt>
              <dd className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-foreground">
                <Link
                  href="tel:+970598509358"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  +970 598 509 358
                </Link>
                <span className="text-border" aria-hidden="true">
                  /
                </span>
                <Link
                  href="tel:+970569633512"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  +970 569 633 512
                </Link>
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default Contact;
