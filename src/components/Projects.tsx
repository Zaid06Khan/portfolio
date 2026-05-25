"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/data/portfolio";

// Placeholder header for projects with no screenshot (Google Trends)
function ChartPlaceholder() {
  return (
    <div className="flex h-[220px] w-full items-center justify-center bg-gradient-to-br from-[#141420] via-[#111118] to-[#0d0d0d]">
      <svg
        viewBox="0 0 96 64"
        fill="currentColor"
        className="h-20 w-28 text-[#252535]"
        aria-hidden
      >
        {/* Bar chart silhouette */}
        <rect x="4"  y="42" width="14" height="18" rx="2" />
        <rect x="22" y="26" width="14" height="34" rx="2" />
        <rect x="40" y="10" width="14" height="50" rx="2" />
        <rect x="58" y="32" width="14" height="28" rx="2" />
        <rect x="76" y="18" width="14" height="42" rx="2" />
        {/* X-axis line */}
        <rect x="0" y="61" width="96" height="2" rx="1" />
      </svg>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-xs text-[#333]">02 /</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Projects</span>
        </div>
        <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">
          What I&apos;ve Built
        </h2>
      </motion.div>

      {/* 2-column magazine grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#252525] bg-[#161616] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_0_0_1px_rgba(0,194,168,0.4),0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* ── Screenshot / placeholder — fills edge to edge, rounded top ── */}
            {project.image ? (
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <ChartPlaceholder />
            )}

            {/* ── Card content ── */}
            <div className="flex flex-1 flex-col px-6 py-5">

              {/* Category badge */}
              <span className="mb-3 inline-block w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[#0d0d0d]">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold leading-snug text-white">
                {project.name}
              </h3>

              {/* Stack — bullet-separated inline text */}
              <p className="mb-4 text-xs text-gray-600">
                {project.stack.join(" · ")}
              </p>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Plain teal text links */}
              <div className="flex items-center gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1 text-sm font-medium text-accent transition-opacity duration-200 hover:opacity-90"
                >
                  GitHub{" "}
                  <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-[3px]">→</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1 text-sm font-medium text-accent transition-opacity duration-200 hover:opacity-90"
                  >
                    Live Demo{" "}
                    <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-[3px]">→</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
