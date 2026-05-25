import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: "3", label: "Internships" },
  { value: "5+", label: "Projects Shipped" },
  { value: "✦", label: "Claude Certified" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Section number */}
      <div className="mb-3 flex items-center gap-2">
        <span className="font-mono text-xs text-[#333]">00 /</span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</span>
      </div>

      <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">Who I Am</h2>

      <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
        I&apos;m a Business Technology Management student at Toronto Metropolitan
        University with a passion for building real things — AI automation
        systems, full-stack web apps, and mobile applications. I work at the
        intersection of business and technology, using tools like Claude, Python,
        and React Native to ship products that actually work. Currently building
        AI workflows at EdVisingU and always working on something new.
      </p>

      {/* Stat cards */}
      <div className="mt-10 grid max-w-sm grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[#252525] bg-[#161616] p-5 text-center transition-colors duration-200 hover:border-accent/30"
          >
            <p className="mb-1 text-2xl font-bold text-accent">{stat.value}</p>
            <p className="text-[11px] leading-snug text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
