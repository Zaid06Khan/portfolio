import SectionWrapper from "./SectionWrapper";

const EmailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Section number */}
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="font-mono text-xs text-[#333]">05 /</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</span>
        </div>

        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mb-12 text-lg text-gray-400">
          Open to internship opportunities in Toronto — let&apos;s build something.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:zaid9khn@gmail.com"
            className="flex items-center gap-2.5 rounded-full border border-[#252525] bg-[#161616] px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_0_1px_rgba(0,194,168,0.3),0_8px_20px_rgba(0,0,0,0.3)]"
          >
            <EmailIcon />
            zaid9khn@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/zaid-khan-a03050387"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-[#252525] bg-[#161616] px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_0_1px_rgba(0,194,168,0.3),0_8px_20px_rgba(0,0,0,0.3)]"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href="https://github.com/Zaid06Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-[#252525] bg-[#161616] px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_0_1px_rgba(0,194,168,0.3),0_8px_20px_rgba(0,0,0,0.3)]"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
