import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";

const words = ["I", "build", "web", "apps", "that"];

const shots = [
  "/images/uqhoan.jpg",
  "/images/salmasoft.jpg",
  "/images/yallabites.jpg",
  "/images/do-studio.jpg",
  "/images/royal-canin.jpg",
  "/images/quiz-plus.jpg",
  "/images/safarway.jpg",
  "/images/one-stop-parking.jpg",
  "/images/werner-electric.jpg",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-background pt-28 pb-10"
      aria-label="Introduction"
    >
      {/* warm accent glow via cheap radial-gradient (no blur filter = no jank) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(55rem_40rem_at_78%_-8%,var(--accent-soft),transparent_55%)]"
      />

      <div className="relative flex flex-1 items-center px-5 sm:px-8">
        <div className="mx-auto w-full max-w-5xl">
          {/* message */}
          <div>
            {/* kinetic headline — pure CSS per-word stagger */}
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-foreground sm:text-6xl lg:text-[5.5rem]">
              {words.map((w, i) => (
                <span
                  key={i}
                  className="hero-word mr-[0.25em]"
                  style={{ animationDelay: `${0.05 + i * 0.045}s` }}
                >
                  {w}
                </span>
              ))}
              <span
                className="hero-word text-accent"
                style={{ animationDelay: `${0.05 + words.length * 0.045}s` }}
              >
                perform.
              </span>
            </h1>

            {/* identity + value */}
            <p
              className="hero-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="font-medium text-foreground">
                Raja Abu Salameh
              </span>
              , founder and senior engineer. 8+ years across React, Vue,
              Next.js, and Laravel.
            </p>

            {/* CTAs */}
            <div
              className="hero-rise mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="#projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-background transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View work
                <ArrowRight
                  size={17}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="https://e39ruttpcb.ufs.sh/f/vRZwh4VYrDdRIlloCkaT754ALmJbotdRP1n2WChsz9ylX0rj"
                download="RajaAbuSalameh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Download CV as PDF"
              >
                <ArrowDown size={17} weight="bold" aria-hidden="true" />
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* live project marquee — real work, subtle motion */}
      <div
        className="hero-rise group relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:mt-20"
        style={{ animationDelay: "0.55s" }}
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {[...shots, ...shots].map((src, i) => (
            <div
              key={i}
              className="relative aspect-[16/10] w-56 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-card sm:w-72"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="288px"
                loading="lazy"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
