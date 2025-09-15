"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Download } from "lucide-react";
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Latest career journey - focusing on most recent and impactful experiences
  const experienceItems = [
    {
      company: "Self-Employed",
      period: "June 2024 – Present",
      role: "Senior Software Engineer",
      description:
        "Delivered ecommerce and CMS solutions for clients, improving page load times by up to 40% and boosting conversions. Handled Server-Side Rendering (SSR) in Next.js applications, enhancing SEO and driving higher search engine visibility.",
      highlight: true,
    },
    {
      company: "Xngage",
      period: "Oct 2022 – June 2024",
      role: "Senior Frontend Developer",
      description:
        "Implemented reusable components in collaboration with UI/UX designers, ensuring consistent design and faster development across client projects. Improved accessibility, SEO, and site performance, resulting in better user experience and higher search engine rankings.",
      highlight: true,
    },
    {
      company: "QuizPlus",
      period: "April 2021 – Oct 2022",
      role: "Senior Frontend Developer",
      description:
        "Built and maintained user interfaces with HTML, SCSS, and Typescript (Angular 9), ensuring responsive and scalable design. Optimized SEO using Google Analytics, Google Optimize, Google Tag Manager, and advanced coding techniques.",
      highlight: true,
    },
    {
      company: "Freelance",
      period: "Oct 2020 – Oct 2022",
      role: "Senior Full Stack Developer",
      description:
        "Developed user interfaces using HTML, SCSS, and JavaScript (Vue.js), ensuring responsive and high-performance designs. Architected and implemented complete backend solutions using Laravel, delivering scalable and maintainable systems.",
      highlight: false,
    },
    {
      company: "Safarway",
      period: "June 2019 – Oct 2020",
      role: "Senior Frontend Engineer",
      description:
        "Implemented platform user interfaces using Vue.js, ensuring responsive and user-friendly designs. Handled Server-Side Rendering (SSR) with Nuxt.js, improving SEO, site performance, and search engine visibility.",
      highlight: false,
    },
    {
      company: "OneStopParking",
      period: "March 2018 – June 2019",
      role: "Full Stack Engineer",
      description:
        "Designed and developed a parking and hotel reservation system, delivering a scalable and user-friendly platform. Built an inventory management system, optimizing data management and operational workflows.",
      highlight: false,
    },
  ];

  // Show all experiences or just highlights based on preference
  const showAllExperiences = true; // Toggle this to show all or just recent highlights
  const displayedExperiences = showAllExperiences
    ? experienceItems
    : experienceItems.filter((item) => item.highlight);

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-gray-50"
      ref={ref}
      aria-label="Professional Experience Timeline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 text-sm mb-2 uppercase tracking-wide font-semibold">
            Career Journey
          </p>
          <h2
            className="text-3xl font-bold text-gray-900 mb-3"
            role="heading"
            aria-level={2}
          >
            Latest Professional Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highlighting my most recent experiences and the impactful projects
            that define my current expertise
          </p>
        </motion.div>

        {/* Experience Grid - Desktop Layout */}
        <div
          className="hidden lg:grid grid-cols-2 gap-12 items-start mb-20 relative"
          role="list"
          aria-label="Professional experience timeline - desktop view"
        >
          {/* Left Column - Companies */}
          <div className="space-y-8">
            {displayedExperiences.map((item, index) => (
              <motion.div
                key={index}
                className="md:h-32 text-right"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                role="listitem"
                aria-labelledby={`company-${index}`}
              >
                <h3
                  className="font-semibold text-gray-900 text-lg mb-1"
                  id={`company-${index}`}
                  role="heading"
                  aria-level={3}
                >
                  {item.company}
                </h3>
                <p className="text-gray-500 text-sm">{item.period}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Roles and Descriptions */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-2 top-2 bottom-0 w-px bg-gray-300"></div>

            <div className="space-y-8">
              {displayedExperiences.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start relative md:h-32"
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  role="listitem"
                  aria-labelledby={`role-${index}`}
                  aria-describedby={`description-${index}`}
                >
                  {/* Bullet Point */}
                  <div
                    className="flex-shrink-0 mt-1.5 mr-3 relative z-10"
                    aria-hidden="true"
                  >
                    <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-300 shadow-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h4
                      className="font-semibold text-gray-900 text-lg mb-2"
                      id={`role-${index}`}
                      role="heading"
                      aria-level={4}
                    >
                      {item.role}
                    </h4>
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      id={`description-${index}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline - Mobile Layout */}
        <div
          className="lg:hidden relative mb-20"
          role="list"
          aria-label="Professional experience timeline - mobile view"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300"></div>

          <div className="space-y-8">
            {displayedExperiences.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start relative"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                role="listitem"
                aria-labelledby={`mobile-company-${index}`}
                aria-describedby={`mobile-description-${index}`}
              >
                {/* Timeline Bullet Point */}
                <div
                  className="flex-shrink-0 mt-1.5 mr-4  z-10"
                  aria-hidden="true"
                >
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300 shadow-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Content - Combined Company, Period, Role, and Description */}
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  {/* Company and Period */}
                  <div className="mb-3">
                    <h3
                      className="font-semibold text-gray-900 text-lg mb-1"
                      id={`mobile-company-${index}`}
                      role="heading"
                      aria-level={3}
                    >
                      {item.company}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      {item.period}
                    </p>
                  </div>

                  {/* Role */}
                  <h4
                    className="font-semibold text-gray-900 text-base mb-2"
                    role="heading"
                    aria-level={4}
                  >
                    {item.role}
                  </h4>

                  {/* Description */}
                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    id={`mobile-description-${index}`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlay for last item - covers full width including timeline */}
        </div>

        {/* Download CV CTA */}
        <div className="flex justify-center mt-12 relative z-200 px-4">
          <Link
            href="https://e39ruttpcb.ufs.sh/f/vRZwh4VYrDdRIlloCkaT754ALmJbotdRP1n2WChsz9ylX0rj"
            download="RajaAbuSalameh_CV.pdf"
            className="inline-flex items-center justify-center px-6 h-12 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 ease-in-out leading-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 sm:focus:ring-offset-2"
            aria-label="Download Raja Abu Salameh's CV as PDF"
            rel="noopener noreferrer"
          >
            <Download className="w-6 h-6 mr-2" />
            <span>Download CV</span>
          </Link>
        </div>
      </div>
      {/* Soft gradient overlay at bottom */}
      <div className="absolute bottom-4 left-0 right-0 h-80 bg-gradient-to-t from-gray-200 via-gray-100 to-gray-100/30 pointer-events-none" />
    </section>
  );
};

export default Experience;
