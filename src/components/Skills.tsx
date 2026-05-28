"use client";
import { useMemo } from "react";
import Reveal from "./Reveal";
import { skillsData, skillColors } from "@/data/portfolio";

function SkillRow({ category, skills, reverse, dur }: {
  category: string;
  skills: string[];
  reverse: boolean;
  dur: number;
}) {
  const doubled = useMemo(() => [...skills, ...skills], [skills]);
  return (
    <div className="skill-row">
      <span className="skill-cat">{category}</span>
      <div
        className={`marquee${reverse ? " rev" : ""}`}
        style={{ "--dur": `${dur}s` } as React.CSSProperties}
      >
        {doubled.map((s, i) => (
          <div className="chip" key={i}>
            <span className="blob" style={{ "--c": skillColors[s] || "var(--accent)" } as React.CSSProperties} />
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const entries = Object.entries(skillsData);
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow"><span className="num">04 /</span> <span className="bar" /> Skills</div>
          <h2 className="h2">What I <em>work with</em>.</h2>
        </Reveal>
      </div>

      <Reveal className="skills-stack" delay={120}>
        {entries.map(([cat, skills], i) => (
          <SkillRow
            key={cat}
            category={cat}
            skills={skills}
            reverse={i % 2 === 1}
            dur={36 + i * 6}
          />
        ))}
      </Reveal>
    </section>
  );
}
