"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { skillsData } from "@/data/portfolio";

// ─── Icon URL map ────────────────────────────────────────────────────────────
// Special values: "claude-inline" and "heygen-inline" render inline SVGs below.
// null = no CDN icon available; falls back to first-letter badge.
const iconMap: Record<string, string | null> = {
  // Languages
  Python:           "https://cdn.simpleicons.org/python/3776AB",
  JavaScript:       "https://cdn.simpleicons.org/javascript/F7DF1E",
  SQL:              "https://cdn.simpleicons.org/mysql/4479A1",
  HTML5:            "https://cdn.simpleicons.org/html5/E34F26",
  CSS3:             "https://cdn.simpleicons.org/css3/1572B6",
  Java:             "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  Bash:             "https://cdn.simpleicons.org/gnubash/4EAA25",
  // Frameworks & Libraries
  "React Native":   "https://cdn.simpleicons.org/react/61DAFB",
  Flask:            "https://cdn.simpleicons.org/flask/FFFFFF",
  Pandas:           "https://cdn.simpleicons.org/pandas/150458",
  NumPy:            "https://cdn.simpleicons.org/numpy/013243",
  "Scikit-learn":   "https://cdn.simpleicons.org/scikitlearn/F7931E",
  Selenium:         "https://cdn.simpleicons.org/selenium/43B02A",
  Bootstrap:        "https://cdn.simpleicons.org/bootstrap/7952B3",
  Matplotlib:       "https://cdn.simpleicons.org/plotly/3F4F75",
  Seaborn:          "https://cdn.simpleicons.org/python/3776AB",
  "Beautiful Soup": "https://cdn.simpleicons.org/python/3776AB",
  // AI & Automation
  Claude:           "claude-inline",
  n8n:              "https://cdn.simpleicons.org/n8n/EA4B71",
  Codex:            "https://cdn.simpleicons.org/openai/FFFFFF",
  HeyGen:           "heygen-inline",
  NLP:              "https://cdn.simpleicons.org/openai/FFFFFF",
  "REST APIs":      "https://cdn.simpleicons.org/postman/FF6C37",
  // Tools
  Git:              "https://cdn.simpleicons.org/git/F05032",
  GitHub:           "https://cdn.simpleicons.org/github/FFFFFF",
  "VS Code":        "https://cdn.simpleicons.org/visualstudiocode/007ACC",
  PostgreSQL:       "https://cdn.simpleicons.org/postgresql/4169E1",
  SQLite:           "https://cdn.simpleicons.org/sqlite/003B57",
  "Power BI":       "https://cdn.simpleicons.org/powerbi/F2C811",
  Tableau:          "https://cdn.simpleicons.org/tableau/E97627",
  JIRA:             "https://cdn.simpleicons.org/jira/0052CC",
  "Jupyter Notebook": "https://cdn.simpleicons.org/jupyter/F37626",
  Expo:             "https://cdn.simpleicons.org/expo/FFFFFF",
};

// ─── Inline SVGs ─────────────────────────────────────────────────────────────

// Official Claude app icon (terracotta background + ray lines)
function ClaudeIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" aria-hidden>
      <rect width="100" height="100" rx="22" fill="#CC785C"/>
      <g transform="translate(50,50)" stroke="white" strokeWidth="8" strokeLinecap="round">
        <line x1="0"   y1="-28" x2="0"   y2="28"/>
        <line x1="-28" y1="0"   x2="28"  y2="0"/>
        <line x1="-20" y1="-20" x2="20"  y2="20"/>
        <line x1="20"  y1="-20" x2="-20" y2="20"/>
        <line x1="-10" y1="-26" x2="10"  y2="26"/>
        <line x1="26"  y1="-10" x2="-26" y2="10"/>
        <line x1="-26" y1="10"  x2="26"  y2="-10"/>
        <line x1="-10" y1="26"  x2="10"  y2="-26"/>
      </g>
    </svg>
  );
}

// HeyGen — purple badge with clapperboard emoji
function HeyGenIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" aria-hidden>
      <rect width="100" height="100" rx="22" fill="#6C3CE1"/>
      <text x="50" y="68" fontSize="52" textAnchor="middle" fill="white">🎬</text>
    </svg>
  );
}

// First-letter fallback badge (used when no icon exists or URL fails to load)
function LetterFallback({ skill }: { skill: string }) {
  return (
    <span className="flex h-[18px] w-[18px] items-center justify-center rounded bg-[#2a2a2a] text-[9px] font-bold text-gray-300">
      {skill[0].toUpperCase()}
    </span>
  );
}

// ─── Skill badge ──────────────────────────────────────────────────────────────

function SkillBadge({ skill }: { skill: string }) {
  const [imgError, setImgError] = useState(false);
  const src = iconMap[skill];

  let icon: React.ReactNode;
  if (src === "claude-inline") {
    icon = <ClaudeIcon />;
  } else if (src === "heygen-inline") {
    icon = <HeyGenIcon />;
  } else if (src && !imgError) {
    icon = (
      <img
        src={src}
        alt=""
        aria-hidden
        className="h-[18px] w-[18px] object-contain"
        onError={() => setImgError(true)}
      />
    );
  } else {
    icon = <LetterFallback skill={skill} />;
  }

  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-[#252525] bg-[#161616] px-3.5 py-2.5 transition-all duration-200 hover:border-accent/45 hover:bg-[#1a1a1a]">
      {/* Subtle bg so dark-coloured icons stay readable on dark surface */}
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/[0.05]">
        {icon}
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-gray-300">{skill}</span>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mb-3 flex items-center gap-2">
        <span className="font-mono text-xs text-[#333]">03 /</span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Skills</span>
      </div>
      <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">
        What I Work With
      </h2>

      <div className="space-y-10">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
