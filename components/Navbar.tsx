"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  CaretRight,
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
  EnvelopeSimple,
  type Icon,
} from "@phosphor-icons/react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#hero" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const menuSocials: { label: string; href: string; icon: Icon }[] = [
  { label: "Email", href: "mailto:future.adv2@gmail.com", icon: EnvelopeSimple },
  { label: "LinkedIn", href: "https://linkedin.com/in/raja-salameh", icon: LinkedinLogo },
  { label: "GitHub", href: "https://github.com/abusalameh", icon: GithubLogo },
  { label: "WhatsApp", href: "https://wa.me/972598509358", icon: WhatsappLogo },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const updateIndicator = () => {
    const activeIndex = navItems.findIndex(
      (item) => item.href.replace("#", "") === activeSection
    );
    const el = navRefs.current[activeIndex];
    if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
  };

  useEffect(() => {
    updateIndicator();
  }, [activeSection]);

  useEffect(() => {
    const timer = setTimeout(updateIndicator, 100);
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Optimistically move the indicator on click; native anchor handles scroll + focus.
  const handleClick = (href: string) => {
    setActiveSection(href.replace("#", ""));
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed left-1/2 top-4 z-[90] w-[calc(100%-1.5rem)] -translate-x-1/2 md:w-[calc(100%-4rem)] lg:w-auto"
      aria-label="Main"
    >
      <div
        className={`flex items-center justify-between gap-2 rounded-full border px-3 py-2 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 md:gap-4 md:px-4 ${
          scrolled || isMenuOpen
            ? "border-border bg-card shadow-md"
            : "border-border/70 bg-card/60 shadow-sm"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => handleClick("#hero")}
          className="flex-shrink-0 pl-2 text-sm font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-md"
        >
          Raja<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="relative hidden items-center lg:flex">
          <motion.span
            className="absolute h-9 rounded-full bg-muted"
            aria-hidden="true"
            animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          />
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.name}>
                <a
                  ref={(el) => {
                    navRefs.current[index] = el;
                  }}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="flex items-center justify-center rounded-full p-2 text-foreground transition-colors duration-200 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative flex h-6 w-6 flex-col items-center justify-center">
              <motion.span
                className="absolute block h-0.5 w-6 bg-current"
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 0 : -6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute block h-0.5 w-6 bg-current"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute block h-0.5 w-6 bg-current"
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : 6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute left-0 right-0 top-full mt-2 lg:hidden"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-2xl">
              <ul className="space-y-1.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + index * 0.04, duration: 0.25 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => handleClick(item.href)}
                        aria-current={isActive ? "page" : undefined}
                        className={`group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                          isActive
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs tabular-nums ${
                            isActive ? "text-accent" : "text-muted-foreground/70"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-lg font-medium tracking-tight">
                          {item.name}
                        </span>
                        <CaretRight
                          size={16}
                          weight="bold"
                          className={`transition-transform duration-200 ${
                            isActive
                              ? "text-accent"
                              : "text-muted-foreground/50 group-hover:translate-x-0.5"
                          }`}
                          aria-hidden="true"
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-2 flex items-center justify-center gap-2 border-t border-border px-2 pb-1 pt-3">
                {menuSocials.map(({ label, href, icon: IconCmp }) => {
                  const external = href.startsWith("http");
                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={external ? `${label}, opens in a new tab` : label}
                    >
                      <IconCmp size={18} weight="regular" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
