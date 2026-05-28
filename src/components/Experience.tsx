"use client";
import { useRef, useEffect } from "react";
import Reveal from "./Reveal";
import { experienceData } from "@/data/portfolio";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.7;
      const end = vh * 0.3;
      const total = r.height - (start - end);
      const passed = Math.max(0, Math.min(total, start - r.top));
      const p = total > 0 ? (passed / total) * 100 : 0;
      el.style.setProperty("--fill", `${Math.max(0, Math.min(100, p))}%`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow"><span className="num">02 /</span> <span className="bar" /> Experience</div>
          <h2 className="h2">Where I&apos;ve <em>worked</em>.</h2>
          <p className="lede">Building real products across AI automation, full-stack development, and software engineering.</p>
        </Reveal>

        <div className="timeline" ref={sectionRef}>
          {experienceData.map((job, i) => (
            <Reveal key={i} className="job" delay={i * 90}>
              <div className="job-head">
                <div className="job-logo">{job.initials}</div>
                <div className="job-meta">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-co">{job.company}</span>
                </div>
                <span className="job-date">{job.date}</span>
              </div>
              <ul className="bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
