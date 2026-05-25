"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experienceData } from "@/data/portfolio";

const logoMap: Record<string, string> = {
  "EdVisingU": "EU",
  "SWL Co.": "SW",
  "Andie Works": "AW",
};

function CompanyLogo({ company }: { company: string }) {
  const initials = logoMap[company] ?? company.slice(0, 2).toUpperCase();
  return (
    <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-xl bg-white">
      <span className="text-base font-bold text-[#0d0d0d]">{initials}</span>
    </div>
  );
}

function BulletText({ text }: { text: string }) {
  const spaceIdx = text.indexOf(" ");
  if (spaceIdx === -1) return <span className="font-semibold text-white">{text}</span>;
  return (
    <>
      <span className="font-semibold text-white">{text.slice(0, spaceIdx)}</span>
      {text.slice(spaceIdx)}
    </>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" ref={ref} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-xs text-[#333]">01 /</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Experience</span>
        </div>
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
          Where I&apos;ve Worked
        </h2>
        <div className="mb-4 h-[2px] w-10 bg-accent" />
        <p className="mb-16 text-sm text-gray-500">
          Building real products across AI automation, full-stack development, and software engineering.
        </p>
      </motion.div>

      <div className="space-y-5">
        {experienceData.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
            className="group rounded-2xl border border-[#252525] bg-[#161616] p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(0,194,168,0.5),0_8px_30px_rgba(0,0,0,0.3)] sm:p-7"
          >
            {/* Top row: logo + title/company + date */}
            <div className="mb-5 flex items-start gap-4">
              <CompanyLogo company={job.company} />
              <div className="flex flex-1 flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-lg font-bold leading-snug text-white">{job.title}</h3>
                  <span className="text-sm font-medium text-accent transition-colors duration-300 group-hover:text-[#00dfc8]">
                    {job.company}
                  </span>
                </div>
                <span className="mt-0.5 text-xs font-medium text-gray-500">{job.date}</span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2.5">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-gray-400">
                  <span className="mt-[2px] shrink-0 text-[10px] text-accent opacity-60">►</span>
                  <BulletText text={bullet} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
