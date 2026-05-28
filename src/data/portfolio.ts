export const experienceData = [
  {
    title: "AI Automation Developer, Internship",
    company: "EdVisingU",
    initials: "EU",
    date: "Apr 2026 – Present",
    bullets: [
      "Built and tested AI automation workflows using Claude, n8n, and Codex to support content creation, lead generation, and digital marketing operations.",
      "Developed HeyGen AI avatar pipelines for short-form educational content across TikTok, Instagram Reels, YouTube Shorts, and LinkedIn.",
      "Selected as one of 10 founding members completing the official Claude Technical Architect certification through the Partner Network.",
      "Contributed to passive income ecosystem development including automated sales funnels, digital product workflows, and newsletter growth strategies.",
      "Worked alongside software engineers from Ontario and Arizona State University on scalable AI-powered business systems.",
    ],
  },
  {
    title: "Web App Developer, Internship",
    company: "SWL Co.",
    initials: "SW",
    date: "Mar 2026 – May 2026",
    bullets: [
      "Developed a full-stack web application using Python and JavaScript, delivering 5+ core features independently.",
      "Integrated NLP models to add AI-driven functionality, improving the application's intelligent response capabilities.",
      "Designed and implemented responsive front-end interfaces ensuring seamless user experience across devices.",
      "Managed end-to-end development lifecycle including planning, building, testing, and deployment.",
    ],
  },
  {
    title: "Application Developer Assistant, Internship",
    company: "Andie Works",
    initials: "AW",
    date: "Jan 2024 – Apr 2024",
    bullets: [
      "Built and improved front-end features for web applications, translating wireframes into responsive user interfaces.",
      "Performed testing and debugging to identify defects, improving application stability and performance.",
      "Collaborated with back-end developers and designers to deliver high-quality software solutions.",
    ],
  },
];

export interface Project {
  name: string;
  category: string;
  stack: string[];
  description: string;
  github: string;
  liveUrl?: string;
  visual: "phone" | "terminal" | "snake" | "chart" | "globe" | "pong";
  size: "w-2" | "w-3" | "w-4";
}

export const projectsData: Project[] = [
  {
    name: "Habit Tracker App",
    category: "Mobile App",
    stack: ["React Native", "Expo", "AsyncStorage", "TypeScript"],
    description:
      "Production-ready iOS / Android habit tracker featuring streak tracking, weekly calendar view, stats dashboard, category system, and animated check-ins.",
    github: "https://github.com/Zaid06Khan/habit-tracker-app",
    visual: "phone",
    size: "w-4",
  },
  {
    name: "LinkedIn Job Applicator",
    category: "Automation",
    stack: ["Python", "Selenium", "Web Automation"],
    description:
      "Bot that auto-searches and applies to job postings using dynamic form detection, auto-fill logic, and real-time error logging.",
    github: "https://github.com/Zaid06Khan/linkedin-job-applicator",
    visual: "terminal",
    size: "w-2",
  },
  {
    name: "Snake Game",
    category: "Game",
    stack: ["Python", "Pygame"],
    description:
      "Classic Snake arcade game with growing snake mechanics, collision detection, real-time score tracking, and progressively increasing difficulty.",
    github: "https://github.com/Zaid06Khan/snake-game",
    visual: "snake",
    size: "w-2",
  },
  {
    name: "Google Trends Analysis",
    category: "Data",
    stack: ["Python", "Pandas", "Google Trends API"],
    description:
      "Extracted and analyzed search trend data to identify interest patterns over time using time-series analysis across regions and keyword categories.",
    github: "https://github.com/Zaid06Khan/google-trends-analysis",
    visual: "chart",
    size: "w-4",
  },
  {
    name: "Wanderlust",
    category: "Web",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Fully responsive travel planning website with destination guides, interactive budget calculator, and packing list generator.",
    github: "https://github.com/Zaid06Khan/wanderlust-travel-website",
    liveUrl: "https://zaid06khan.github.io/wanderlust-travel-website/",
    visual: "globe",
    size: "w-3",
  },
  {
    name: "Pong",
    category: "Game",
    stack: ["Python", "Pygame"],
    description:
      "Two-player Pong arcade game with real-time ball physics, paddle controls, and live score tracking.",
    github: "https://github.com/Zaid06Khan/pong-game",
    visual: "pong",
    size: "w-3",
  },
];

export const skillsData: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Java", "Bash"],
  Frameworks: ["React Native", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Beautiful Soup", "Selenium"],
  "AI & Automation": ["Claude", "n8n", "Codex", "HeyGen", "NLP", "REST APIs"],
  Tools: ["Git", "GitHub", "VS Code", "Jupyter", "PostgreSQL", "SQLite", "Power BI", "Tableau", "JIRA", "Expo"],
};

export const skillColors: Record<string, string> = {
  Python: "#3776ab", JavaScript: "#f7df1e", TypeScript: "#3178c6", SQL: "#4479a1",
  HTML5: "#e34f26", CSS3: "#1572b6", Java: "#ec2025", Bash: "#4eaa25",
  "React Native": "#61dafb", Flask: "#ffffff", Pandas: "#150458", NumPy: "#013243",
  Matplotlib: "#11557c", Seaborn: "#4c8ed0", "Scikit-learn": "#f7931e",
  "Beautiful Soup": "#3776ab", Selenium: "#43b02a",
  Claude: "#cc785c", n8n: "#ea4b71", Codex: "#10a37f", HeyGen: "#6c3ce1",
  NLP: "#10a37f", "REST APIs": "#ff6c37",
  Git: "#f05032", GitHub: "#ffffff", "VS Code": "#007acc",
  Jupyter: "#f37626", PostgreSQL: "#4169e1", SQLite: "#003b57",
  "Power BI": "#f2c811", Tableau: "#e97627", JIRA: "#0052cc", Expo: "#ffffff",
};

export const certificationsData = [
  { name: "100 Days of Code: Python Bootcamp", issuer: "Udemy", year: "2026" },
  { name: "Python, SQL & Excel Bootcamp", issuer: "Toronto Metropolitan University", year: "2026" },
  { name: "Claude Technical Architect Certification", issuer: "Anthropic Claude Partner Network", year: "2026" },
  { name: "GLO-BUS Industry Champion", issuer: "Top performance in global business strategy simulation", year: "" },
];

export interface GoalItem {
  num: string;
  eyebrow: string;
  title: string;
  body: string[];
}

export const goalsData: GoalItem[] = [
  {
    num: "11",
    eyebrow: "Right now",
    title: "What I'm working on.",
    body: [
      "Building AI automation workflows at EdVisingU as one of ten founding members of Anthropic's Claude Technical Architect program.",
      "Working on side projects at the same time. A habit tracker, a job application bot, some data tools. I find I pick things up a lot faster when I have something real to build toward.",
      "Finishing my BTM degree at TMU and trying to get as much practical experience as I can before I graduate.",
    ],
  },
  {
    num: "12",
    eyebrow: "What's next",
    title: "Where I'm headed.",
    body: [
      "I am open to a few different paths in IT and CS. Software development, product management, data analysis, cybersecurity, or AI related roles. I want to figure out where I fit best by actually working in those spaces.",
      "What matters to me is being somewhere I can contribute technically and understand the business side of things at the same time. That combination is where I do my best work.",
      "Further down the road I want to grow into a senior or lead role where I can take ownership of something from start to finish.",
    ],
  },
  {
    num: "13",
    eyebrow: "How I learn",
    title: "By shipping.",
    body: [
      "Courses and tutorials give me a foundation but I learn the most when I am actually building something. Nothing teaches you faster than having to make something work.",
      "I try to pick projects that push me into areas I am not comfortable in yet. The discomfort means I am learning something new.",
      "Getting a project to a point where someone else can actually use it is the goal. That is when you find out what you really know.",
    ],
  },
  {
    num: "14",
    eyebrow: "What's changed",
    title: "From building to maintaining.",
    body: [
      "A couple of years ago I had no idea how to deploy anything. Now I have real projects running and certifications to back up what I know.",
      "The shift for me was stopping treating projects like things to put on a resume and starting to treat them like products I am responsible for keeping alive.",
      "Shipping something is step one. Keeping it working and improving it over time is where the real learning happens.",
    ],
  },
];
