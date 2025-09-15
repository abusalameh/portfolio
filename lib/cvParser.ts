export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: string;
}

// Static data extracted from CV - no Python, based on actual expertise
const cvSkillsData = {
  frontend: {
    vanillaFrontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SCSS', 'SASS'],
    cssFrameworks: ['TailwindCSS', 'ShadCN UI', 'Bootstrap', 'Foundation', 'Bulma', 'Styled Components'],
    jsFrameworksAndLibraries: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'Angular', 'Zustand', 'Redux', 'Pinia', 'Xstate', 'Tanstack Query'],
    buildTools: ['Vite', 'Gulp', 'Grunt', 'Webpack', 'Encore'],
  },
  backend: {
    vanillaBackend: ['PHP', 'Node.js', 'MySQL', 'SQL Server', 'PostgreSQL', 'Supabase', 'Redis'],
    backendFrameworks: ['Laravel', 'Yii2', 'Express', 'PayloadCMS', 'Drizzle ORM', 'Prisma ORM'],
  },
};

export function generateServicesFromCV(): ServiceItem[] {
  return [
    {
      id: 1,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and best practices. Specializing in React.js, Vue.js, and Next.js with TypeScript.",
      technologies: [
        "React.js", "Vue.js", "Next.js", "Nuxt.js", "Angular",
        "TypeScript", "TailwindCSS", "ShadCN UI"
      ],
      category: "Development",
      icon: "frontend",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs with robust architecture. Expert in PHP Laravel and Node.js with database optimization.",
      technologies: [
        "PHP", "Node.js", "Laravel", "Express", 
        "MySQL", "PostgreSQL", "Supabase"
      ],
      category: "Development",
      icon: "backend",
    },
    {
      id: 3,
      title: "Performance Optimization & SEO",
      description: "Comprehensive optimization strategies for speed, performance, and search engine visibility. Server-Side Rendering (SSR) expertise with Next.js and Nuxt.js.",
      technologies: [
        "Core Web Vitals", "Technical SEO", "SSR/SSG", 
        "Performance Audits", "Vite", "Webpack"
      ],
      category: "Optimization",
      icon: "performance",
    },
    {
      id: 4,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment with modern tech stacks. Complete ecommerce, CMS, and web application solutions.",
      technologies: [
        "Next.js", "Laravel", "TypeScript", "TailwindCSS",
        "MySQL", "Redis", "PayloadCMS"
      ],
      category: "Development",
      icon: "fullstack",
    },
  ];
}