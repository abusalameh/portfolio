"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
  MapPin,
  Phone,
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

  return (
    <section
      id="contact"
      className="bg-background py-24 sm:py-32"
      ref={ref}
      aria-label="Contact"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-accent-soft via-card to-card p-8 sm:p-14"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* soft accent glow */}
          <div
            className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            {/* availability — real status */}
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new work
            </span>

            <h2
              className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              role="heading"
              aria-level={2}
            >
              Have something to <span className="text-accent">build?</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Open to freelance projects and full-time roles. Tell me what you
              are working on and I will get back to you.
            </p>

            {/* Primary CTA */}
            <div className="mt-9">
              <Link
                href="mailto:future.adv2@gmail.com"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-foreground pl-7 pr-6 text-base font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Email Raja Abu Salameh"
              >
                <EnvelopeSimple size={20} weight="bold" aria-hidden="true" />
                future.adv2@gmail.com
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Details + socials */}
            <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} weight="regular" className="text-accent" aria-hidden="true" />
                  Jenin, Palestine
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone size={17} weight="regular" className="text-accent" aria-hidden="true" />
                  <Link href="tel:+970598509358" className="transition-colors hover:text-accent">
                    +970 598 509 358
                  </Link>
                  <span className="text-border">·</span>
                  <Link href="tel:+970569633512" className="transition-colors hover:text-accent">
                    +970 569 633 512
                  </Link>
                </span>
              </div>

              <div className="flex items-center gap-2" role="list" aria-label="Social links">
                {socials.map(({ label, href, icon: IconCmp }) => (
                  <div key={label} role="listitem">
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`${label} — opens in a new tab`}
                    >
                      <IconCmp size={18} weight="regular" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
