"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { generateServicesFromCV } from "../lib/cvParser";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Generate services from CV data
  const services = generateServicesFromCV();

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-7 h-7 text-white" };

    switch (iconName) {
      case "frontend":
        return (
          <svg
            {...iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "backend":
        return (
          <svg
            {...iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
            />
          </svg>
        );
      case "performance":
        return (
          <svg
            {...iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      case "seo":
        return (
          <svg
            {...iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        );
      case "fullstack":
        return (
          <svg
            {...iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        );
      default:
        return (
          <svg
            {...iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        );
    }
  };

  return (
    <section
      id="services"
      ref={ref}
      className="bg-gray-50 py-24 sm:py-32 relative overflow-hidden"
      aria-label="Professional services offered"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm mb-2 uppercase tracking-wide font-semibold">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4" role="heading" aria-level={2}>
            Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for your digital presence
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-8 lg:grid-rows-2">
          {/* First Row: 5-column card + 3-column card */}

          {/* Full Stack Development - Large card (5 columns) */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            role="article"
            aria-labelledby="fullstack-heading"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 shadow-lg">
                    {getIcon("fullstack")}
                  </div>
                  <div>
                    <h3 id="fullstack-heading" className="text-xl font-bold text-gray-900" role="heading" aria-level={3}>
                      Full Stack Development
                    </h3>
                  </div>
                </div>
                <p className="text-base text-gray-600 mb-4">
                  Complete end-to-end solutions from database design to user
                  interface, handling every aspect of your web application with
                  modern technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {services[3].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Frontend Development - Medium card (3 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:col-span-3 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            role="article"
            aria-labelledby="frontend-heading"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 shadow-lg">
                  {getIcon("frontend")}
                </div>
                <div>
                  <h3 id="frontend-heading" className="text-xl font-bold text-gray-900" role="heading" aria-level={3}>
                    Frontend Development
                  </h3>
                </div>
              </div>
              <p className="text-base text-gray-600 mb-4">
                Modern, responsive interfaces with seamless interactions and
                beautiful design.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {services[0].technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Second Row: 3-column card + 5-column card */}

          {/* Backend Development - Medium card (3 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:col-span-3 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            role="article"
            aria-labelledby="backend-heading"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 shadow-lg">
                  {getIcon("backend")}
                </div>
                <div>
                  <h3 id="backend-heading" className="text-xl font-bold text-gray-900" role="heading" aria-level={3}>
                    Backend Development
                  </h3>
                </div>
              </div>
              <p className="text-base text-gray-600 mb-4">
                Robust server architecture and APIs with security and
                scalability.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {services[1].technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Performance & SEO - Large card (5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative lg:col-span-5 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            role="article"
            aria-labelledby="performance-heading"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 shadow-lg">
                    {getIcon("performance")}
                  </div>
                  <div>
                    <h3 id="performance-heading" className="text-xl font-bold text-gray-900" role="heading" aria-level={3}>
                      Performance & SEO
                    </h3>
                  </div>
                </div>
                <p className="text-base text-gray-600 mb-4">
                  Boost your site's speed and search rankings with advanced
                  optimization techniques, technical SEO strategies, and
                  comprehensive performance audits.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {services[2].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
