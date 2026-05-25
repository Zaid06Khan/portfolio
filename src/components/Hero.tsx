"use client";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated line grid — drifts diagonally on a 20s loop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,194,168,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,168,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "gridDrift 20s linear infinite",
        }}
      />
      {/* Stronger teal radial glow centred behind the name */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(0,194,168,0.14),transparent_70%)]" />
      {/* Dark vignette at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#0d0d0d_82%)]" />

      {/* Two-column layout: text left, avatar right */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-center md:justify-between">

          {/* ── Text column ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-center md:flex-1 md:text-left"
          >
            <motion.span
              variants={fadeUp}
              className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent"
            >
              Toronto, ON
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mb-6 text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              Zaid Khan
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-12 max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl"
            >
              Building intelligent systems at the intersection of AI and software.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-[#0d0d0d] transition-all duration-200 hover:scale-[1.04] hover:brightness-110 active:scale-[0.97]"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full border border-accent/60 px-8 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:scale-[1.04] hover:border-accent hover:bg-accent hover:text-[#0d0d0d] active:scale-[0.97]"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start"
            >
              {["3 Internships", "TMU · BTM"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#252525] px-3 py-1 font-mono text-[11px] text-[#555]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Avatar column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" as const }}
            className="flex shrink-0 items-center justify-center"
          >
            <div className="relative h-56 w-56 md:h-64 md:w-64">
              {/* Ambient glow behind avatar */}
              <div className="absolute inset-[-12px] rounded-full bg-accent/15 blur-2xl" />

              {/* Slow-rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] rounded-full border border-dashed border-accent/20"
              />

              {/* Avatar circle */}
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-accent/35 bg-[#161616]">
                <span className="select-none text-5xl font-bold tracking-[0.1em] text-accent">
                  ZK
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-accent/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
