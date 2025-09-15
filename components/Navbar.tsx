"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const navItems = [
    { name: "About", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Update indicator position based on active section
  const updateIndicator = () => {
    const activeIndex = navItems.findIndex(
      (item) => item.href.replace("#", "") === activeSection
    );
    const activeButton = navRefs.current[activeIndex];

    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  };

  // Update indicator when active section changes
  useEffect(() => {
    updateIndicator();
  }, [activeSection]);

  // Set initial indicator position after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      updateIndicator();
    }, 100); // Small delay to ensure refs are set
    return () => clearTimeout(timer);
  }, []);

  // Update indicator on window resize
  useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  // Scroll detection to update active section
  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""));
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const sectionId = targetId.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId); // Update active section immediately on click
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-300 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[70%] xl:w-[55%] 2xl:w-[45%] "
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 md:px-6 py-3 shadow-lg min-w-fit">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex-1 mr-auto">
            <a
              href="#hero"
              className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded-md"
              aria-label="Go to homepage - Raja Abu Salameh"
            >
              Raja Abu Salameh
            </a>
          </div>

          {/* Desktop Navigation */}
          <div
            className=" flex-1 hidden md:flex items-center relative"
            role="menubar"
            aria-label="Desktop navigation menu"
          >
            {/* Sliding Background Indicator */}
            <motion.div
              className="absolute bg-gray-200 rounded-full h-10 z-0"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
            {navItems.map((item, index) => (
              <button
                key={item.name}
                ref={(el) => {
                  navRefs.current[index] = el;
                }}
                onClick={() => handleSmoothScroll(item.href)}
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 cursor-pointer relative z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                aria-label={`Navigate to ${item.name} section`}
                role="menuitem"
                aria-current={
                  activeSection === item.href.replace("#", "")
                    ? "page"
                    : undefined
                }
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center p-2 rounded-full text-gray-800 hover:text-blue-600 hover:bg-gray-100/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <motion.span
                  className="block h-0.5 w-6 bg-current absolute"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 0 : -6,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current absolute"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current absolute"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 0 : 6,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 mt-2 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleSmoothScroll(item.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/20"
                  }`}
                  aria-label={`Navigate to ${item.name} section`}
                  role="menuitem"
                  aria-current={
                    activeSection === item.href.replace("#", "")
                      ? "page"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: index * 0.05,
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
