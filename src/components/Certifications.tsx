import SectionWrapper from "./SectionWrapper";
import { certificationsData } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Section number */}
      <div className="mb-3 flex items-center gap-2">
        <span className="font-mono text-xs text-[#333]">04 /</span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Certifications</span>
      </div>
      <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">
        Credentials
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {certificationsData.map((cert, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[#252525] bg-[#161616] p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_28px_rgba(0,194,168,0.1)]"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold leading-snug text-white">
                {cert.name}
              </h3>
              {cert.year && (
                <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {cert.year}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
