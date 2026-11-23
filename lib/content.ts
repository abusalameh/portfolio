// Site copy and data, ported verbatim from the approved bilingual mock.
// English is Raja's own copy from abusalameh.dev; Arabic is a reviewed, native rewrite.

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";
export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);
export const dirOf = (l: Locale) => (l === "ar" ? "rtl" : "ltr");
export const other = (l: Locale): Locale => (l === "ar" ? "en" : "ar");

export type Bi = { ar: string; en: string };

export const SITE_URL = "https://abusalameh.dev";
export const CV_URL = "/RajaAbuSalameh_CV.pdf";
export const EMAIL = "future.adv2@gmail.com";
export const PHONE = "+970 598 509 358";
export const PHONE_TEL = "+970598509358";
export const WHATSAPP = "https://wa.me/970598509358";
export const LINKEDIN = "https://linkedin.com/in/raja-salameh";
export const GITHUB = "https://github.com/abusalameh";

export const dict = {
  ar: {
    logo: "رجا",
    nav: [
      ["#work", "الأعمال"],
      ["#services", "الخدمات"],
      ["#experience", "الخبرة"],
      ["#contact", "تواصل"],
    ],
    ctaTop: "ابدأ مشروعك",
    role: "رجا أبو سلامة، مهندس برمجيات ومؤسس سلمى سوفت",
    h1: "أبني حلولًا رقمية *سريعة وموثوقة.*",
    sub: "مهندس برمجيات ومؤسس سلمى سوفت، بخبرة تزيد عن عشر سنوات في تطوير الويب.",
    name: "رجا أبو سلامة",
    pause: "إيقاف العرض مؤقتًا",
    play: "تشغيل العرض",
    visit: "زُر الموقع",
    cta1: "شاهد أعمالي",
    cta2: "تحميل السيرة الذاتية",
    nums: [
      ["10+", "سنوات خبرة"],
      ["8", "وظائف ومشاريع"],
      ["40%", "تحميل أسرع لمواقع العملاء"],
    ],
    sT: "كيف أساعدك",
    sP: "سواء احتجت مساعدتي في جزء من المشروع أو فيه كله، هذه أربع طرق نعمل بها معًا.",
    svc: [
      [
        "تطوير المنتجات بالكامل",
        "من قاعدة البيانات حتى الشاشة التي يراها المستخدم.",
        [
          "تصميم قواعد البيانات ونمذجة البيانات",
          "الواجهات البرمجية وأنظمة تسجيل الدخول",
          "واجهة المستخدم، مبنية مع النظام الخلفي في مشروع واحد",
          "متاجر إلكترونية، ومواقع بأنظمة لإدارة المحتوى، وتطبيقات ويب",
        ],
        ["Next.js", "Laravel", "PostgreSQL", "PayloadCMS"],
      ],
      [
        "تطوير الواجهات الأمامية",
        "واجهات سريعة وسهلة الاستخدام للجميع.",
        [
          "مكتبات مكوّنات قابلة لإعادة الاستخدام",
          "تصاميم متجاوبة مع جميع الشاشات",
          "تنسيق وثيق مع المصممين",
          "شيفرة برمجية سهلة الصيانة مع نموّ المشروع",
        ],
        ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
      ],
      [
        "الأنظمة الخلفية والواجهات البرمجية",
        "أنظمة آمنة ومستقرة مهما زاد عدد المستخدمين.",
        [
          "قواعد بيانات وواجهات برمجية تتحمّل نموّ الزيارات",
          "تكاملات يسهل تطويرها مع نموّ المنتج",
          "خدمات آمنة ومستقرة",
        ],
        ["Node.js", "Laravel", "MySQL", "Redis"],
      ],
      [
        "الأداء وتحسين محركات البحث",
        "مواقع أسرع وترتيب أفضل في نتائج البحث، بتحسينات يمكن قياسها.",
        [
          "تحسين مؤشرات الأداء الأساسية (Core Web Vitals)",
          "معالجة المشكلات التقنية التي تؤثر في الظهور بمحركات البحث",
          "العرض من جهة الخادم حين يكون مفيدًا",
          "تحميل أسرع بنسبة تصل إلى 40% في مواقع عملاء",
        ],
        ["Core Web Vitals", "SSR / SSG", "Technical SEO"],
      ],
    ],
    wT: "أعمال مختارة",
    wP: "منتجي الخاص سلمى سوفت، ومتاجر تعمل عليه، وأعمال لعملاء. كلها تعمل الآن، افتح أيًّا منها وجرّبه.",
    xT: "عشر سنوات في الميدان.",
    xP: "عملت مع شركات ناشئة وعملاء من كبرى الشركات، وأدير اليوم منتجي الخاص. أطوّر الأعمال وأقود تنفيذها حتى تصل إلى بيئة الإنتاج.",
    now: "حاليًا",
    svcNote: "لست متأكدًا أي خدمة تناسبك؟ أخبرني عن مشروعك وسأقترح الأنسب.",
    svcBtn: "تواصل معي",
    cT: "لنبدأ مشروعك.",
    allTile: "مشاريع أخرى وخبرة سابقة",
    moreH: "مشاريع أخرى",
    moreP: "أعمال سابقة مع شركات وفرق، مرّر على أي منها لمعاينته.",
    cBtn: "راسلني الآن",
    lWa: "واتساب",
    lWaV: "تحدّث معي مباشرة",
    fProj: "مشاريع",
    pSalma: "سلمى سوفت",
    pUq: "أقحوان",
    pDo: "dO Print",
    pRosa: "روزا لاين",
    fPages: "الصفحة",
    nS1: "الخدمات",
    nW1: "الأعمال",
    nX1: "الخبرة",
    fFollow: "تابعني",
    tz: "توقيت القدس (GMT+2)",
    toTop: "العودة للأعلى ↑",
    cP: "متاح للعمل الحر وللوظائف بدوام كامل. أخبرني عن مشروعك، وسأتواصل معك.",
    lEmail: "البريد",
    lPhone: "الهاتف",
    lLoc: "المكان",
    loc: "جنين، فلسطين",
    foot: "© 2026 رجا أبو سلامة",
    langName: "English",
    workedWith: "عملت مع",
    skip: "انتقل إلى المحتوى",
    meta: {
      title: "رجا أبو سلامة | مهندس برمجيات ومؤسس سلمى سوفت",
      description:
        "أبني حلولًا رقمية سريعة وموثوقة. أكثر من عشر سنوات في تطوير الويب مع React وNext.js وVue وLaravel، ومؤسس سلمى سوفت، منصة عربية لإنشاء المتاجر الإلكترونية.",
    },
  },
  en: {
    logo: "Raja",
    nav: [
      ["#work", "Work"],
      ["#services", "Services"],
      ["#experience", "Experience"],
      ["#contact", "Contact"],
    ],
    ctaTop: "Start a project",
    role: "Raja Abu Salameh, founder and senior engineer",
    h1: "I build digital solutions *that perform.*",
    sub: "Software engineer and founder of SalmaSoft, with 10+ years building for the web.",
    name: "Raja Abu Salameh",
    pause: "Pause showcase",
    play: "Play showcase",
    visit: "Visit site",
    cta1: "View work",
    cta2: "Download CV",
    nums: [
      ["10+", "Years shipping"],
      ["8", "Roles & ventures"],
      ["40%", "Faster load times"],
    ],
    sT: "How I can help",
    sP: "Whether you need help with one part or the whole thing, here are four ways I can work with your team.",
    svc: [
      [
        "Full-stack product builds",
        "From database schema to the pixels users touch.",
        [
          "Data modelling and database design",
          "APIs and authentication",
          "The interface, built together with the backend",
          "Online stores, CMS sites and web apps",
        ],
        ["Next.js", "Laravel", "PostgreSQL", "PayloadCMS"],
      ],
      [
        "Frontend engineering",
        "Interfaces that feel fast and stay accessible.",
        [
          "Reusable component systems",
          "Responsive layouts for every screen",
          "Close work with designers",
          "Code that stays maintainable as it grows",
        ],
        ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
      ],
      [
        "Backend & APIs",
        "Backends that stay secure as they grow.",
        [
          "Databases and APIs that stay reliable as traffic grows",
          "Integrations that are easy to extend",
          "Secure, stable services",
        ],
        ["Node.js", "Laravel", "MySQL", "Redis"],
      ],
      [
        "Performance & SEO",
        "Faster loads, stronger rankings, real metrics.",
        [
          "Core Web Vitals improvements",
          "Technical SEO fixes",
          "Server-side rendering where it helps",
          "Up to 40% faster load times for clients",
        ],
        ["Core Web Vitals", "SSR / SSG", "Technical SEO"],
      ],
    ],
    wT: "Selected work",
    wP: "My own product SalmaSoft, stores running on it, and client work. All live — open any of them.",
    xT: "Ten years shipping for real teams.",
    xP: "From startups and enterprise clients to running my own product, building and leading work that ships to production.",
    now: "Now",
    svcNote:
      "Not sure which one fits? Tell me about your project and I’ll suggest the right approach.",
    svcBtn: "Get in touch",
    cT: "Start a project.",
    allTile: "More projects & past work",
    moreH: "More projects",
    moreP:
      "Earlier work with companies and teams. Hover any of them for a preview.",
    cBtn: "Email me",
    lWa: "WhatsApp",
    lWaV: "Chat with me directly",
    fProj: "Projects",
    pSalma: "SalmaSoft",
    pUq: "Uqhoan",
    pDo: "dO Print",
    pRosa: "RosaLine",
    fPages: "On this page",
    nS1: "Services",
    nW1: "Work",
    nX1: "Experience",
    fFollow: "Follow",
    tz: "Jerusalem time (GMT+2)",
    toTop: "Back to top ↑",
    cP: "Open to freelance projects and full-time roles. Tell me what you are working on and I will get back to you.",
    lEmail: "Email",
    lPhone: "Phone",
    lLoc: "Location",
    loc: "Jenin, Palestine",
    foot: "© 2026 Raja Abu Salameh",
    langName: "العربية",
    workedWith: "Worked with",
    skip: "Skip to content",
    meta: {
      title: "Raja Abu Salameh | Software engineer and founder of SalmaSoft",
      description:
        "I build digital solutions that perform. 10+ years building for the web with React, Next.js, Vue and Laravel, and founder of SalmaSoft, an Arabic-first platform for building online stores.",
    },
  },
} as const;
export type Dict = (typeof dict)[Locale];

export type Featured = {
  key: string;
  url: string;
  /** base name of a tall Retina screenshot in /media/shots that pans inside the tile */
  shot: string | null;
  image: string;
  name: Bi;
  type: Bi;
  chip: Bi;
  founder: boolean;
};
export const featured: Featured[] = [
  {
    key: "salma",
    url: "https://salmasoft.com",
    shot: "salmasoft",
    image: "/media/shots/salmasoft-top.webp",
    name: {
      en: "SalmaSoft",
      ar: "سلمى سوفت",
    },
    type: {
      en: "Arabic store builder · my own product",
      ar: "منصة عربية لإنشاء المتاجر · منتجي الخاص",
    },
    chip: {
      en: "Founder",
      ar: "المؤسس",
    },
    founder: true,
  },
  {
    key: "do",
    url: "https://doprint.ps",
    shot: "doprint",
    image: "/media/shots/doprint-top.webp",
    name: {
      en: "dO Print",
      ar: "dO Print",
    },
    type: {
      en: "Printing, packaging & uniforms",
      ar: "طباعة وتغليف وملابس موحّدة",
    },
    chip: {
      en: "On SalmaSoft",
      ar: "على سلمى سوفت",
    },
    founder: false,
  },
  {
    key: "rosa",
    url: "https://rosaline.pro",
    shot: "rosaline",
    image: "/media/shots/rosaline-top.webp",
    name: {
      en: "RosaLine",
      ar: "روزا لاين",
    },
    type: {
      en: "Skincare",
      ar: "مستحضرات العناية بالبشرة",
    },
    chip: {
      en: "On SalmaSoft",
      ar: "على سلمى سوفت",
    },
    founder: false,
  },
  {
    key: "uq",
    url: "https://uqhoan.com",
    shot: null,
    image: "/media/shots/uqhoan-photo.webp",
    name: {
      en: "Uqhoan",
      ar: "أقحوان",
    },
    type: {
      en: "Handcrafted gifts",
      ar: "هدايا مصنوعة يدويًا",
    },
    chip: {
      en: "On SalmaSoft",
      ar: "على سلمى سوفت",
    },
    founder: false,
  },
  {
    key: "yalla",
    url: "https://yallabites.com",
    shot: "yallabites",
    image: "/media/shots/yallabites-top.webp",
    name: {
      en: "YallaBites",
      ar: "يلا بايتس",
    },
    type: {
      en: "Home-made food marketplace · Frontend",
      ar: "سوق إلكتروني للطعام المنزلي · الواجهة الأمامية",
    },
    chip: {
      en: "Client",
      ar: "عميل",
    },
    founder: false,
  },
  {
    key: "osp",
    url: "https://onestopparking.com",
    shot: null,
    image: "/media/shots/one-stop-parking.webp",
    name: {
      en: "OneStopParking",
      ar: "OneStopParking",
    },
    type: {
      en: "Parking reservations · Full-stack on the team",
      ar: "حجز مواقف السيارات · مهندس متكامل ضمن الفريق",
    },
    chip: {
      en: "Client",
      ar: "عميل",
    },
    founder: false,
  },
];

export type MoreProject = {
  name: string;
  image: string;
  year: number;
  type: Bi;
};
export const moreProjects: MoreProject[] = [
  {
    name: "dO Studio",
    image: "/media/do-studio.jpg",
    year: 2024,
    type: {
      en: "Portfolio & CMS · Full-stack",
      ar: "موقع أعمال ونظام لإدارة المحتوى · تطوير متكامل",
    },
  },
  {
    name: "Royal Canin",
    image: "/media/royal-canin.jpg",
    year: 2023,
    type: {
      en: "B2B ecommerce · Senior frontend",
      ar: "تجارة إلكترونية بين الشركات · واجهات أمامية",
    },
  },
  {
    name: "Werner Electric",
    image: "/media/werner-electric.jpg",
    year: 2023,
    type: {
      en: "B2B ecommerce · Senior frontend",
      ar: "تجارة إلكترونية بين الشركات · واجهات أمامية",
    },
  },
  {
    name: "QuizPlus",
    image: "/media/quiz-plus.jpg",
    year: 2021,
    type: {
      en: "E-learning · Senior frontend",
      ar: "تعليم إلكتروني · واجهات أمامية",
    },
  },
  {
    name: "Safarway",
    image: "/media/safarway.jpg",
    year: 2019,
    type: {
      en: "Tourism guide · Senior frontend",
      ar: "دليل سياحي · واجهات أمامية",
    },
  },
];

export type Job = {
  company: Bi;
  dates: Bi;
  current: boolean;
  title: Bi;
  summary: Bi;
  tags: string[];
};
export const experience: Job[] = [
  {
    company: {
      en: "SalmaSoft",
      ar: "سلمى سوفت",
    },
    dates: {
      en: "Feb 2026 – Present",
      ar: "فبراير 2026 – الآن",
    },
    current: true,
    title: {
      en: "Founder, CEO & CTO",
      ar: "مؤسس ومدير تنفيذي وتقني",
    },
    summary: {
      en: "Founded an Arabic-first ecommerce platform; own product and engineering.",
      ar: "أسّست منصة تجارة إلكترونية عربية، وأقود تطوير المنتج والفريق التقني.",
    },
    tags: ["Next.js", "Supabase", "Leadership"],
  },
  {
    company: {
      en: "YallaBites",
      ar: "يلا بايتس",
    },
    dates: {
      en: "Jul 2025 – Present",
      ar: "يوليو 2025 – الآن",
    },
    current: true,
    title: {
      en: "Frontend Developer",
      ar: "مطوّر واجهات أمامية",
    },
    summary: {
      en: "Built the customer-facing experience of an online marketplace specialised in home-made food.",
      ar: "طوّرت واجهة العملاء لسوق إلكتروني متخصص في الطعام المنزلي.",
    },
    tags: ["Next.js", "TanStack Query", "Marketplace"],
  },
  {
    company: {
      en: "Self-Employed",
      ar: "عمل مستقل",
    },
    dates: {
      en: "Jun 2024 – Present",
      ar: "يونيو 2024 – الآن",
    },
    current: true,
    title: {
      en: "Senior Software Engineer",
      ar: "مهندس برمجيات أول",
    },
    summary: {
      en: "Ecommerce and CMS builds; cut client load times by up to 40%.",
      ar: "طوّرت متاجر إلكترونية وأنظمة لإدارة المحتوى لعدد من العملاء، وخفّضت زمن تحميل مواقعهم بنسبة تصل إلى 40%.",
    },
    tags: ["Next.js", "SSR", "SEO"],
  },
  {
    company: {
      en: "Xngage",
      ar: "Xngage",
    },
    dates: {
      en: "Oct 2022 – Jun 2024",
      ar: "أكتوبر 2022 – يونيو 2024",
    },
    current: false,
    title: {
      en: "Senior Frontend Developer",
      ar: "مطوّر واجهات أمامية أول",
    },
    summary: {
      en: "Reusable component systems with design; stronger a11y, SEO, and speed.",
      ar: "طوّرت مع فريق التصميم مكتبة مكوّنات مشتركة، وعزّزت إمكانية الوصول والأداء والظهور في محركات البحث.",
    },
    tags: ["Design Systems", "Accessibility", "SEO"],
  },
  {
    company: {
      en: "QuizPlus",
      ar: "QuizPlus",
    },
    dates: {
      en: "Apr 2021 – Oct 2022",
      ar: "أبريل 2021 – أكتوبر 2022",
    },
    current: false,
    title: {
      en: "Senior Frontend Developer",
      ar: "مطوّر واجهات أمامية أول",
    },
    summary: {
      en: "Angular interfaces and technical SEO for an e-learning platform.",
      ar: "طوّرت واجهات بـ Angular، وعملت على التحسين التقني لمحركات البحث في منصة تعليم إلكتروني.",
    },
    tags: ["Angular", "TypeScript", "SEO"],
  },
  {
    company: {
      en: "Freelance",
      ar: "عمل حر",
    },
    dates: {
      en: "Oct 2020 – Oct 2022",
      ar: "أكتوبر 2020 – أكتوبر 2022",
    },
    current: false,
    title: {
      en: "Senior Full Stack Developer",
      ar: "مطوّر ويب متكامل أول",
    },
    summary: {
      en: "Vue front-ends and complete Laravel backends for clients.",
      ar: "طوّرت واجهات بـ Vue وأنظمة خلفية متكاملة بـ Laravel لعدد من العملاء.",
    },
    tags: ["Vue.js", "Laravel"],
  },
  {
    company: {
      en: "Safarway",
      ar: "Safarway",
    },
    dates: {
      en: "Jun 2019 – Oct 2020",
      ar: "يونيو 2019 – أكتوبر 2020",
    },
    current: false,
    title: {
      en: "Senior Frontend Engineer",
      ar: "مهندس واجهات أمامية أول",
    },
    summary: {
      en: "Vue and Nuxt SSR for a tourism platform; improved SEO and speed.",
      ar: "طوّرت منصة سياحية باستخدام Vue وNuxt مع العرض من جهة الخادم، وحسّنت أداءها وظهورها في محركات البحث.",
    },
    tags: ["Vue.js", "Nuxt", "SSR"],
  },
  {
    company: {
      en: "OneStopParking",
      ar: "OneStopParking",
    },
    dates: {
      en: "Mar 2018 – Jun 2019",
      ar: "مارس 2018 – يونيو 2019",
    },
    current: false,
    title: {
      en: "Full Stack Engineer",
      ar: "مهندس ويب متكامل",
    },
    summary: {
      en: "Worked as a full-stack engineer on the team behind a parking reservation platform, on reservations and inventory management tools.",
      ar: "عملت مهندس ويب متكاملًا ضمن فريق منصة لحجز المواقف، على نظام الحجز وأدوات إدارة المخزون.",
    },
    tags: ["Laravel", "Vue.js", "MySQL"],
  },
];

export type Slide = {
  url: string;
  /** base name of a tall Retina screenshot in /media/shots */
  shot?: string;
  poster?: string;
  image?: string;
  name: Bi;
  host: string;
};
export const showcase: Slide[] = [
  {
    shot: "salmasoft",
    poster: "/media/shots/salmasoft-top.webp",
    name: {
      ar: "سلمى سوفت",
      en: "SalmaSoft",
    },
    host: "salmasoft.com",
    url: "https://salmasoft.com",
  },
  {
    shot: "doprint",
    poster: "/media/shots/doprint-top.webp",
    name: {
      ar: "dO Print",
      en: "dO Print",
    },
    host: "doprint.ps",
    url: "https://doprint.ps",
  },
  {
    shot: "rosaline",
    poster: "/media/shots/rosaline-top.webp",
    name: {
      ar: "روزا لاين",
      en: "RosaLine",
    },
    host: "rosaline.pro",
    url: "https://rosaline.pro",
  },
  {
    shot: "yallabites",
    poster: "/media/shots/yallabites-top.webp",
    name: {
      ar: "يلا بايتس",
      en: "YallaBites",
    },
    host: "yallabites.com",
    url: "https://yallabites.com",
  },
  {
    image: "/media/shots/one-stop-parking.webp",
    name: {
      ar: "OneStopParking",
      en: "OneStopParking",
    },
    host: "onestopparking.com",
    url: "https://onestopparking.com",
  },
];

export const logos = [
  {
    name: "SalmaSoft",
    src: "/images/logos/salmasoft-mark.svg",
    wide: true,
  },
  {
    name: "YallaBites",
    src: "/images/logos/yallabites.png",
  },
  {
    name: "Xngage",
    src: "/images/logos/xngage.png",
  },
  {
    name: "QuizPlus",
    src: "/images/logos/quizplus.png",
  },
  {
    name: "Safarway",
    src: "/images/logos/safarway.png",
  },
  {
    name: "OneStopParking",
    src: "/images/logos/onestopparking.png",
  },
];
