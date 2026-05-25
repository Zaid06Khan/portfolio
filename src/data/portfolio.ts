export const experienceData = [
  {
    title: "AI Automation Developer — Internship",
    company: "EdVisingU",
    date: "Apr 2026 – Present",
    bullets: [
      "Built and tested AI automation workflows using Claude, n8n, and Codex to support content creation, lead generation, and digital marketing operations",
      "Developed HeyGen AI avatar pipelines for short-form educational content across TikTok, Instagram Reels, YouTube Shorts, and LinkedIn",
      "Selected as one of 10 founding members completing the official Anthropic Claude Technical Architect certification through the Claude Partner Network",
      "Contributed to passive income ecosystem development including automated sales funnels, digital product workflows, and newsletter growth strategies",
      "Worked alongside software engineers from Ontario and Arizona State University on scalable AI-powered business systems",
      "Designed and documented automation systems built for reliability, low maintenance, and repeatable execution",
    ],
  },
  {
    title: "Web App Developer — Internship",
    company: "SWL Co.",
    date: "Mar 2026 – May 2026",
    bullets: [
      "Developed a full-stack web application using Python and JavaScript, delivering 5+ core features independently",
      "Integrated NLP models to add AI-driven functionality, improving the application's intelligent response capabilities",
      "Designed and implemented responsive front-end interfaces ensuring seamless user experience across devices",
      "Managed end-to-end development lifecycle including planning, building, testing, and deployment",
    ],
  },
  {
    title: "Application Developer Assistant — Internship",
    company: "Andie Works",
    date: "Jan 2024 – Apr 2024",
    bullets: [
      "Built and improved front-end features for web applications, translating wireframes into responsive user interfaces",
      "Performed testing and debugging to identify defects, improving application stability and performance",
      "Collaborated with back-end developers and designers to deliver high-quality software solutions",
    ],
  },
];

export interface Project {
  name: string;
  stack: string[];
  description: string;
  github: string;
  category: string;
  image?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    name: "Habit Tracker App",
    category: "MOBILE APP",
    stack: ["React Native", "Expo", "AsyncStorage", "TypeScript"],
    description:
      "A production-ready mobile habit tracker for iOS and Android featuring streak tracking, weekly calendar view, stats dashboard, category system, and animated check-ins. Built with Expo and deployed via Expo Go.",
    github: "https://github.com/Zaid06Khan/habit-tracker-app",
    image: "/images/habit-tracker.png",
  },
  {
    name: "Automated LinkedIn Job Applicator",
    category: "AUTOMATION",
    stack: ["Python", "Selenium WebDriver", "Web Automation"],
    description:
      "A bot that automatically searches and applies to job postings on LinkedIn using dynamic form detection, auto-fill logic, and real-time error logging.",
    github: "https://github.com/Zaid06Khan/linkedin-job-applicator",
  },
  {
    name: "Snake Game",
    category: "GAME",
    stack: ["Python", "Pygame"],
    description:
      "A classic Snake arcade game built in Python with Pygame featuring growing snake mechanics, collision detection, real-time score tracking, and progressively increasing difficulty.",
    github: "https://github.com/Zaid06Khan/snake-game",
    image: "/images/snake-game.jpg",
  },
  {
    name: "Google Trends Data Analysis",
    category: "DATA",
    stack: ["Python", "Pandas", "Google Trends API"],
    description:
      "Extracted and analyzed search trend data to identify interest patterns over time using time-series analysis across regions and keyword categories.",
    github: "https://github.com/Zaid06Khan/google-trends-analysis",
  },
  {
    name: "Wanderlust Travel Planning Website",
    category: "WEB",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A fully responsive travel planning website with destination guides, an interactive budget calculator, and a packing list generator.",
    github: "https://github.com/Zaid06Khan/wanderlust-travel-website",
    image: "/images/wanderlust.jpg",
    liveUrl: "https://zaid06khan.github.io/wanderlust-travel-website/",
  },
  {
    name: "Pong Game",
    category: "GAME",
    stack: ["Python", "Pygame"],
    description:
      "A classic two-player Pong arcade game built in Python with Pygame featuring real-time ball physics, paddle controls for both players, and live score tracking.",
    github: "https://github.com/Zaid06Khan/pong-game",
    image: "/images/pong-game.jpg",
  },
];

export const skillsData: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "SQL", "HTML5", "CSS3", "Java", "Bash"],
  "Frameworks & Libraries": [
    "React Native",
    "Flask",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Beautiful Soup",
    "Selenium",
    "Bootstrap",
  ],
  "AI & Automation": ["Claude", "n8n", "Codex", "HeyGen", "NLP", "REST APIs"],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Jupyter Notebook",
    "PostgreSQL",
    "SQLite",
    "Power BI",
    "Tableau",
    "JIRA",
    "Expo",
  ],
};

export const certificationsData = [
  {
    name: "100 Days of Code: Python Bootcamp",
    issuer: "Udemy",
    year: "2026",
  },
  {
    name: "Python, SQL & Excel Bootcamp",
    issuer: "Toronto Metropolitan University",
    year: "2026",
  },
  {
    name: "Claude Technical Architect Certification",
    issuer: "Anthropic Claude Partner Network",
    year: "2026",
  },
  {
    name: "GLO-BUS Industry Champion",
    issuer: "Top overall performance in global business strategy simulation",
    year: "",
  },
];
