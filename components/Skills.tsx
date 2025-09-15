"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      name: "React",
      category: "Frontend",
      description: "Component-based UI library",
    },
    {
      name: "Next.js",
      category: "Frontend",
      description: "Full-stack React framework",
    },
    {
      name: "Vue.js",
      category: "Frontend",
      description: " Progressive JavaScript framework",
    },
    {
      name: "Angular",
      category: "Frontend",
      description: "TypeScript-based web application framework",
    },
    {
      name: "Nuxt.js",
      category: "Frontend",
      description: "Vue.js framework for server-side rendering",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      description: "Typed JavaScript superset",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      description: "Dynamic programming language",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      description: "Utility-first CSS framework",
    },
    {
      name: "Laravel",
      category: "Backend",
      description: "Elegant PHP framework",
    },
    {
      name: "PHP",
      category: "Backend",
      description: "Server-side scripting language",
    },
    {
      name: "Yii Framework",
      category: "Backend",
      description: "High-performance PHP framework",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      description: "Front-end web development framework",
    },
    { name: "jQuery", category: "Frontend", description: "JavaScript library" },
    { name: "Bulma", category: "Frontend", description: "CSS framework" },
    { name: "SCSS", category: "Frontend", description: "CSS preprocessor" },
    { name: "CSS", category: "Frontend", description: "Style sheet language" },
    { name: "HTML", category: "Frontend", description: "Markup language" },
    {
      name: "Styled Components",
      category: "Frontend",
      description: "CSS-in-JS library",
    },
    {
      name: "Figma",
      category: "Tools",
      description: "UI design tool",
    },

    {
      name: "Node.js",
      category: "Backend",
      description: "JavaScript runtime environment",
    },

    {
      name: "MySQL",
      category: "Database",
      description: "Relational database system",
    },
    {
      name: "Microsoft SQL Server",
      category: "Database",
      description: "Relational database system",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      description: "Relational database system",
    },
    {
      name: "Drizzle ORM",
      category: "Database",
      description: "TypeScript ORM for database interaction",
    },
    {
      name: "Prisma ORM",
      category: "Database",
      description: "TypeScript ORM for database interaction",
    },
    {
      name: "Docker",
      category: "DevOps",
      description: "Containerization platform",
    },
    {
      name: "GitHub",
      category: "Tools",
      description: "Version control system",
    },
    {
      name: "Jenkins",
      category: "DevOps",
      description: "CI/CD automation server",
    },
    {
      name: "Vercel",
      category: "DevOps",
      description: "Serverless platform for frontend applications",
    },
    {
      name: "JIRA",
      category: "Tools",
      description: "Project management and issue tracking tool",
    },
    {
      name: "Confluence",
      category: "Tools",
      description: "Collaboration and documentation platform",
    },
    {
      name: "Git",
      category: "Tools",
      description: "Version control system",
    },
    {
      name: "Cursor",
      category: "Tools",
      description: "AI-powered Code editor and IDE",
    },
    {
      name: "Trae",
      category: "Tools",
      description: "AI-powered Code editor and IDE",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Tools",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-white" aria-label="Technical Skills and Expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-blue-600 text-sm mb-2 uppercase tracking-wide font-semibold">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4" role="heading" aria-level={2}>
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to create exceptional digital
            solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
          role="group"
          aria-label="Filter skills by category"
        >
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-2">
            <div className="flex gap-2 px-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 hover:text-gray-900 border-gray-200 hover:border-gray-300"
                  }`}
                  aria-label={`Filter skills by ${category}`}
                  aria-pressed={selectedCategory === category}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Centered wrap */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 hover:text-gray-900 border-gray-200 hover:border-gray-300"
                }`}
                aria-label={`Filter skills by ${category}`}
                aria-pressed={selectedCategory === category}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4 md:px-0"
          role="list"
          aria-label={`${filteredSkills.length} skills in ${selectedCategory === 'All' ? 'all categories' : selectedCategory + ' category'}`}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              role="listitem"
              aria-labelledby={`skill-${index}-name-mobile skill-${index}-name-desktop`}
              aria-describedby={`skill-${index}-description-mobile skill-${index}-description-desktop`}
            >
              {/* Mobile: Card design */}
              <div className="md:hidden bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300 active:bg-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-1" id={`skill-${index}-name-mobile`} role="heading" aria-level={3}>
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">
                  {skill.category}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed" id={`skill-${index}-description-mobile`}>
                  {skill.description}
                </p>
              </div>

              {/* Desktop: Border design */}
              <div className="hidden md:block border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300" id={`skill-${index}-name-desktop`} role="heading" aria-level={3}>
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide font-medium">
                  {skill.category}
                </p>
                <p className="text-gray-600 leading-relaxed" id={`skill-${index}-description-desktop`}>
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 md:pt-12 text-center px-4 md:px-0"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6" role="heading" aria-level={3}>
            Let's Build Something Together
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto" role="list" aria-label="All available skills summary">
            {skillsData.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1 text-xs md:text-sm text-gray-700 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 active:bg-gray-100"
                role="listitem"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Soft gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-50/60 to-transparent pointer-events-none" />
    </section>
  );
};

export default Skills;
