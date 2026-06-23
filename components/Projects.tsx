"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  image: string;
  category: "Full Stack" | "Frontend";
  year: string;
  role: string;
}

const projects: Project[] = [
  {
    id: "7",
    title: "YallaBites Food Marketplace",
    description:
      "Multi-vendor food delivery marketplace connecting home chefs with local customers. Dish and chef discovery, address-based browsing across cuisines, cart, scheduling, and checkout.",
    technologies: ["Next.js", "TanStack Query"],
    url: "https://store.yallabites.com",
    category: "Frontend",
    image: "/images/yallabites.jpg",
    year: "2025",
    role: "Frontend Developer",
  },
  {
    id: "8",
    title: "SalmaSoft Store Builder",
    description:
      "Arabic-first ecommerce platform for launching an online store in minutes, with local payment methods, free SSL, and zero sales commission, built for the Palestinian market.",
    technologies: ["Next.js", "TailwindCSS", "Supabase"],
    url: "https://salmasoft.com",
    category: "Full Stack",
    image: "/images/salmasoft.jpg",
    year: "2026",
    role: "Full-Stack Developer",
  },
  {
    id: "9",
    title: "Uqhoan Gifts & Beauty Store",
    description:
      "Gifts and beauty ecommerce storefront for special occasions, with curated bouquets and gift sets in a clean, fast Arabic shopping experience.",
    technologies: ["Next.js", "TailwindCSS", "Supabase"],
    url: "https://uqhoan.com",
    category: "Frontend",
    image: "/images/uqhoan.jpg",
    year: "2026",
    role: "Frontend Developer",
  },
  {
    id: "1",
    title: "DoStudio Portfolio & CMS",
    description:
      "Portfolio site and content management system with modern UI, dynamic content modeling, and a seamless editing experience for the studio team.",
    technologies: ["Next.js", "PayloadCMS", "TailwindCSS", "TypeScript"],
    url: "https://dostudio.io",
    category: "Full Stack",
    image: "/images/do-studio.jpg",
    year: "2024",
    role: "Full-Stack Developer",
  },
  {
    id: "2",
    title: "Royal Canin B2B Ecommerce",
    description:
      "Enterprise B2B commerce platform with an advanced product catalog, bulk ordering, and integrated customer management for a global pet-nutrition brand.",
    technologies: ["React", "SpireCMS", "Styled Components", "Node.js"],
    url: "https://www.royalcanin.com/us",
    category: "Frontend",
    image: "/images/royal-canin.jpg",
    year: "2023",
    role: "Senior Frontend Developer",
  },
  {
    id: "3",
    title: "QuizPlus E-learning",
    description:
      "Interactive learning platform with quiz management, progress tracking, real-time analytics, and student assessment tools built for scale.",
    technologies: ["Angular", "SCSS", "TypeScript", "Firebase"],
    url: "https://quizplus.com",
    category: "Frontend",
    image: "/images/quiz-plus.jpg",
    year: "2021",
    role: "Senior Frontend Developer",
  },
  {
    id: "4",
    title: "Safarway Tourism Guide",
    description:
      "Tourism platform with destination guides, trip planning, booking integration, and personalized recommendations, served with SSR for SEO.",
    technologies: ["Vue.js", "Nuxt", "SCSS", "Mapbox"],
    url: "https://safarway.com",
    category: "Frontend",
    image: "/images/safarway.jpg",
    year: "2019",
    role: "Senior Frontend Engineer",
  },
  {
    id: "5",
    title: "OneStopParking Reservations",
    description:
      "Smart parking reservation system with real-time availability, payment processing, mapping, and automated booking management end to end.",
    technologies: ["Laravel", "Vue.js", "SCSS", "MySQL"],
    url: "https://onestopparking.com",
    category: "Full Stack",
    image: "/images/one-stop-parking.jpg",
    year: "2018",
    role: "Full Stack Engineer",
  },
  {
    id: "6",
    title: "Werner Electric B2B Ecommerce",
    description:
      "B2B commerce for electrical supplies with advanced search, bulk pricing, inventory management, and order tracking for trade customers.",
    technologies: ["React", "SpireCMS", "Styled Components", "Redux"],
    url: "https://www.wernerelectric.com",
    category: "Frontend",
    image: "/images/werner-electric.jpg",
    year: "2023",
    role: "Senior Frontend Developer",
  },
];

// Newest work first; ties keep their listed order (stable sort).
const projectsByYear = [...projects].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

const filters = ["All", "Full Stack", "Frontend"] as const;

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const BrowserFrame = ({
  project,
  priority,
  hideOverlay,
}: {
  project: Project;
  priority?: boolean;
  hideOverlay?: boolean;
}) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    aria-label={`Visit ${project.title} live site, opens in a new tab`}
  >
    <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
      </span>
      <span className="mx-auto max-w-[60%] truncate rounded-md bg-background px-3 py-1 font-mono text-[11px] text-muted-foreground">
        {hostname(project.url)}
      </span>
    </div>
    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        priority={priority}
      />
      {!hideOverlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/55 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground">
            Visit live site
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </span>
        </div>
      )}
    </div>
  </a>
);

const TechRow = ({ techs }: { techs: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {techs.map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
      >
        {tech}
      </span>
    ))}
  </div>
);

const Projects = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [activeId, setActiveId] = useState(projectsByYear[0].id);
  const [mobileActive, setMobileActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  // Follow-cursor "view" badge for the desktop preview (runs off the React render loop).
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.4 });
  const followY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.4 });
  const [previewHover, setPreviewHover] = useState(false);
  const onPreviewMove = (e: React.PointerEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const visible =
    active === "All"
      ? projectsByYear
      : projectsByYear.filter((p) => p.category === active);
  const current = visible.find((p) => p.id === activeId) ?? visible[0];

  // Track the centered card in the mobile carousel for the progress dots.
  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.55) {
            const idx = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setMobileActive(idx);
          }
        });
      },
      { root, threshold: [0.55, 0.8] }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  return (
    <section
      id="projects"
      className="relative bg-background py-24 sm:py-32"
      aria-label="Featured projects"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            role="heading"
            aria-level={2}
          >
            Selected work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Production platforms across ecommerce, e-learning, and content
            systems. Hover a project to preview it, or open any live.
          </p>
        </motion.div>

        {/* Filter */}
        <div
          className="mb-12 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setActive(f);
                const next =
                  f === "All"
                    ? projectsByYear
                    : projectsByYear.filter((p) => p.category === f);
                setActiveId(next[0].id);
                setMobileActive(0);
                trackRef.current?.scrollTo({ left: 0 });
              }}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                active === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Desktop: index + live preview */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Index list */}
          <ul className="border-t border-border lg:col-span-5" role="list">
            {visible.map((p, i) => {
              const isActive = current?.id === p.id;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(p.id)}
                    onFocus={() => setActiveId(p.id)}
                    onClick={() => window.open(p.url, "_blank", "noopener")}
                    className="flex w-full cursor-pointer items-center gap-5 border-b border-border py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`${p.title}. Preview on focus, open live site on click.`}
                  >
                    <span
                      className={`font-mono text-sm tabular-nums transition-colors ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-lg font-semibold tracking-tight transition-colors ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {p.title}
                      </span>
                      <span className="mt-0.5 block font-mono text-xs text-muted-foreground">
                        {p.year} · {p.role}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      className={`flex-shrink-0 transition-all ${
                        isActive
                          ? "translate-x-0 text-accent opacity-100"
                          : "-translate-x-1 text-muted-foreground opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Live preview */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              {current && (
                <>
                  <div
                    className={reduce ? undefined : "lg:[&_a]:cursor-none"}
                    onPointerMove={reduce ? undefined : onPreviewMove}
                    onPointerEnter={reduce ? undefined : () => setPreviewHover(true)}
                    onPointerLeave={reduce ? undefined : () => setPreviewHover(false)}
                  >
                    <BrowserFrame
                      project={current}
                      priority
                      hideOverlay={!reduce}
                    />
                  </div>
                  <div className="mt-6">
                    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-accent">
                      {current.category}
                    </span>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                      {current.description}
                    </p>
                    <div className="mt-5">
                      <TechRow techs={current.technologies} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: swipe carousel */}
        <div className="lg:hidden">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visible.map((p, i) => (
              <article
                key={p.id}
                data-index={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="w-[86%] shrink-0 snap-start sm:w-[68%]"
              >
                <BrowserFrame project={p} priority={i === 0} />
                <div className="mt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                    <span className="rounded-full border border-border px-2.5 py-1 uppercase tracking-wider text-accent">
                      {p.category}
                    </span>
                    <span>
                      {p.year} · {p.role}
                    </span>
                  </div>
                  <h3
                    className="mt-3 text-xl font-semibold tracking-tight text-foreground"
                    role="heading"
                    aria-level={3}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4">
                    <TechRow techs={p.technologies} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* progress dots */}
          <div
            className="mt-6 flex items-center justify-center gap-2"
            role="group"
            aria-label="Project navigation"
          >
            {visible.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() =>
                  cardRefs.current[i]?.scrollIntoView({
                    behavior: reduce ? "auto" : "smooth",
                    inline: "start",
                    block: "nearest",
                  })
                }
                aria-label={`Show ${p.title}`}
                aria-current={i === mobileActive}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  i === mobileActive
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Follow-cursor view badge (desktop preview only) */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ x: followX, y: followY }}
          animate={{
            scale: previewHover ? 1 : 0,
            opacity: previewHover ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="pointer-events-none fixed left-0 top-0 z-[80] -ml-8 -mt-8 hidden h-16 w-16 items-center justify-center rounded-full bg-foreground text-background lg:flex"
        >
          <ArrowUpRight size={22} weight="bold" />
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
