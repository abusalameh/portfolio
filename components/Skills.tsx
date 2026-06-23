"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";

interface Skill {
  name: string;
  slug: string; // Simple Icons slug; empty string => use logoUrl or monogram
  logoUrl?: string; // custom logo (takes precedence over slug)
  trending?: boolean;
}

// Within each group: trending tech first, older tech after (so "Show more" appends cleanly).
const groups: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", slug: "react", trending: true },
      { name: "Next.js", slug: "nextdotjs", trending: true },
      { name: "Vue.js", slug: "vuedotjs", trending: true },
      { name: "Nuxt.js", slug: "nuxtdotjs", trending: true },
      { name: "TypeScript", slug: "typescript", trending: true },
      { name: "JavaScript", slug: "javascript", trending: true },
      { name: "Tailwind CSS", slug: "tailwindcss", trending: true },
      { name: "Angular", slug: "angular" },
      { name: "SCSS", slug: "sass" },
      { name: "Bootstrap", slug: "bootstrap" },
      { name: "Styled Components", slug: "styledcomponents" },
      { name: "jQuery", slug: "jquery" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs", trending: true },
      { name: "Laravel", slug: "laravel", trending: true },
      { name: "Express", slug: "express", trending: true },
      { name: "PHP", slug: "php" },
      { name: "Yii", slug: "" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", slug: "postgresql", trending: true },
      { name: "Supabase", slug: "supabase", trending: true },
      { name: "Prisma", slug: "prisma", trending: true },
      { name: "Drizzle", slug: "drizzle", trending: true },
      { name: "Redis", slug: "redis", trending: true },
      { name: "MySQL", slug: "mysql" },
      { name: "SQL Server", slug: "" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", slug: "docker", trending: true },
      { name: "Vercel", slug: "vercel", trending: true },
      { name: "GitHub", slug: "github", trending: true },
      { name: "Git", slug: "git", trending: true },
      { name: "Figma", slug: "figma", trending: true },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Jira", slug: "jira" },
      { name: "Confluence", slug: "confluence" },
    ],
  },
  {
    category: "AI Tools",
    skills: [
      { name: "Claude", slug: "claude", trending: true },
      { name: "Cursor", slug: "cursor", trending: true },
      { name: "GitHub Copilot", slug: "githubcopilot", trending: true },
      { name: "v0", slug: "v0", trending: true },
      { name: "Ollama", slug: "ollama", trending: true },
      { name: "Trae", slug: "", logoUrl: "/images/logos/trae.png", trending: true },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "macOS", slug: "apple", trending: true },
      { name: "Ubuntu", slug: "ubuntu", trending: true },
      { name: "Linux", slug: "linux", trending: true },
    ],
  },
];

const olderCount = groups.reduce(
  (n, g) => n + g.skills.filter((s) => !s.trending).length,
  0
);

const Logo = ({ skill }: { skill: Skill }) => {
  const [failed, setFailed] = useState(false);
  const src =
    skill.logoUrl ??
    (skill.slug ? `https://cdn.simpleicons.org/${skill.slug}` : "");
  if (!src || failed) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded bg-foreground text-[10px] font-bold text-background">
        {skill.name.charAt(0)}
      </span>
    );
  }
  return (
    // Brand logos on a constant light tile so dark/monochrome marks stay visible in both themes.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      className="h-5 w-5 object-contain"
      onError={() => setFailed(true)}
      aria-hidden="true"
    />
  );
};

const Skills = () => {
  const reduce = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="skills"
      className="bg-background py-24 sm:py-32"
      aria-label="Technical skills"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="mb-14 max-w-2xl"
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
            The toolkit
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The modern stack I build with most, across interface, database, and
            deployment. Expand for the full toolkit.
          </p>
        </motion.div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {groups.map((group) => {
            const shown = showAll
              ? group.skills
              : group.skills.filter((s) => s.trending);
            return (
              <div key={group.category}>
                <div className="mb-5 flex items-baseline gap-3 border-b border-border pb-3">
                  <h3
                    className="font-mono text-xs uppercase tracking-[0.18em] text-accent"
                    role="heading"
                    aria-level={3}
                  >
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2.5" role="list">
                  {shown.map((skill, index) => (
                    <motion.li
                      key={skill.name}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.35,
                        delay: Math.min(index * 0.04, 0.3),
                      }}
                      whileHover={
                        reduce
                          ? undefined
                          : { y: -2, transition: { duration: 0.15, ease: "easeOut" } }
                      }
                      className="group flex items-center gap-2.5 rounded-full border border-border bg-card py-2 pl-2 pr-4 transition-colors duration-200 hover:border-accent/50"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-border/60">
                        <Logo skill={skill} />
                      </span>
                      <span className="text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-accent">
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {showAll ? "Show less" : `Show ${olderCount} more`}
            <CaretDown
              size={15}
              weight="bold"
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
