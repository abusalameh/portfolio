"use client";

import { ArrowUp } from "@phosphor-icons/react";

const quickLinks = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-border bg-background py-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Raja Abu Salameh<span className="text-accent">.</span>
          </a>
          <span className="font-mono text-xs text-muted-foreground">
            © {currentYear}
          </span>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          className="group inline-flex items-center gap-1.5 self-start font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:text-accent md:self-auto"
          aria-label="Back to top"
        >
          Top
          <ArrowUp
            size={14}
            weight="bold"
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
