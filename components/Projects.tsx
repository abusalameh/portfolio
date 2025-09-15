"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particles from "./Particles";
import GlareHover from "./GlareHover";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  urls: string[];
  image?: string;
  category: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Function to generate website screenshot URL

  const projects: Project[] = [
    {
      id: "1",
      title: "DoStudio Portfolio Website & CMS",
      description:
        "A comprehensive portfolio website and content management system featuring modern UI design, dynamic content management, and seamless user experience.",
      technologies: ["Next.js", "PayloadCMS", "TailwindCSS", "TypeScript"],
      urls: ["https://dostudio.io"],
      category: "Full Stack",
      image: "/images/do-studio.jpg",
    },
    {
      id: "2",
      title: "RoyalCanin B2B Ecommerce",
      description:
        "Enterprise-level B2B e-commerce platform with advanced product catalog, bulk ordering capabilities, and integrated customer management system.",
      technologies: ["React", "SpireCMS", "Styled Components", "Node.js"],
      urls: ["https://www.royalcanin.com/us"],
      category: "Frontend",
      image: "/images/royal-canin.jpg",
    },
    {
      id: "3",
      title: "QuizPlus E-learning Solution",
      description:
        "Interactive e-learning platform with quiz management, progress tracking, real-time analytics, and comprehensive student assessment tools.",
      technologies: ["Angular", "SCSS", "TypeScript", "Firebase"],
      urls: ["https://quizplus.com"],
      category: "Frontend",
      image: "/images/quiz-plus.jpg",
    },
    {
      id: "4",
      title: "Safarway Online Tourism Guide",
      description:
        "Comprehensive tourism platform with destination guides, trip planning tools, booking integration, and personalized travel recommendations.",
      technologies: ["Vue.js", "Nuxt", "SCSS", "Mapbox"],
      urls: ["https://safarway.com"],
      category: "Frontend",
      image: "/images/safarway.jpg",
    },
    {
      id: "5",
      title: "OneStopParking Reservation System",
      description:
        "Smart parking reservation system with real-time availability, payment processing, location mapping, and automated booking management.",
      technologies: ["Laravel", "Vue.js", "SCSS", "MySQL"],
      urls: ["https://onestopparking.com"],
      category: "Full Stack",
      image: "/images/one-stop-parking.jpg",
    },
    {
      id: "6",
      title: "WernerElectric B2B Ecommerce",
      description:
        "Professional B2B e-commerce solution for electrical supplies with advanced search, bulk pricing, inventory management, and order tracking.",
      technologies: ["React", "SpireCMS", "Styled Components", "Redux"],
      urls: ["https://www.wernerelectric.com"],
      category: "Frontend",
      image: "/images/werner-electric.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden"
      ref={ref}
      aria-label="Featured Projects Portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 text-sm mb-2 uppercase tracking-wide font-semibold">
            Portfolio
          </p>
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            role="heading"
            aria-level={2}
          >
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications,
            modern web solutions, and innovative digital experiences.
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          className="flex items-center justify-end mb-6"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <button
              className="swiper-button-prev-custom w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous project"
              type="button"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="swiper-button-next-custom w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next project"
              type="button"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            role="region"
            aria-label="Projects carousel"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16 swiper-equal-height"
            style={{ minHeight: "600px" }}
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={project.id}
                className="h-auto"
                role="group"
                aria-label={`Project ${index + 1} of ${projects.length}: ${
                  project.title
                }`}
              >
                <GlareHover
                  borderRadius="16px"
                  glareColor="#3b82f6"
                  glareOpacity={0.3}
                  glareSize={200}
                  transitionDuration={500}
                  className="h-full"
                >
                  <motion.div
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col"
                    whileHover={{ y: -8 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <Image
                        src={project.image || ""}
                        alt={`Screenshot of ${
                          project.title
                        } - ${project.description.substring(0, 100)}...`}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index < 3}
                        loading={index > 3 ? "lazy" : "eager"}
                        onError={(e) => {
                          // Fallback to placeholder if screenshot fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/500x300/4F46E5/FFFFFF?text=${encodeURIComponent(
                            project.title
                          )}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3
                        className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                        role="heading"
                        aria-level={3}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div
                        className="flex flex-wrap gap-2 mb-6"
                        role="list"
                        aria-label={`Technologies used in ${project.title}`}
                      >
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                              role="listitem"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span
                            className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm"
                            role="listitem"
                            aria-label={`${
                              project.technologies.length - 4
                            } more technologies`}
                          >
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex space-x-3">
                          {project.urls[0] && (
                            <a
                              href={project.urls[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded"
                              aria-label={`View live demo of ${project.title} - Opens in new tab`}
                            >
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                        <div className="text-gray-400" aria-hidden="true">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </GlareHover>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #374151 !important;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .swiper-equal-height {
          min-height: 600px;
        }
        .swiper-equal-height .swiper-slide {
          height: auto;
          min-height: 550px;
          display: flex;
        }
        .swiper-equal-height .swiper-slide > div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      {/* Soft gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-50/60 to-transparent pointer-events-none" />
    </section>
  );
};

export default Projects;
