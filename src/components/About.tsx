"use client";
import { useRef, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { useCounter } from "@/hooks/useCounter";

function StatBlock({
  value,
  suffix,
  label,
  sub,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  inView: boolean;
}) {
  const v = useCounter(value, inView, 1600);
  return (
    <div className="stat">
      <span className="stat-val">
        {Math.round(v)}{suffix}
      </span>
      <span className="stat-lab">
        {label}
        <span className="sub">{sub}</span>
      </span>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec" id="about" ref={ref}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow"><span className="num">00 /</span> <span className="bar" /> About</div>
          <h2 className="h2">A student who builds <em>real things</em> and takes them seriously.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy" delay={100}>
            <p>
              I&apos;m a <strong>Business Technology Management</strong> student at Toronto Metropolitan University. Most of my time outside of class goes into building things. Web apps, mobile apps, automation tools. I like having something real to show for my time.
            </p>
            <p>
              Right now I am working on AI automations at <strong>EdVisingU</strong> and I am one of ten people selected for the founding cohort of Anthropic&apos;s <em>Claude Technical Architect</em> program. It has been a great experience and I have learned a lot from it.
            </p>
            <p>
              I enjoy working where technology and business meet. I like taking an idea and turning it into something functional that people can actually use. That is what keeps me motivated to keep building.
            </p>
          </Reveal>

          <Reveal className="stats" delay={250}>
            <StatBlock value={3} suffix="" label="Internships" sub="2024 – 2026" inView={inView} />
            <StatBlock value={6} suffix="+" label="Projects shipped" sub="Mobile · Web · AI" inView={inView} />
            <StatBlock value={10} suffix="" label="Founding members" sub="Claude Partner Network" inView={inView} />
          </Reveal>
        </div>

        <Reveal className="facts" delay={400}>
          <div className="facts-head">
            <span className="facts-mark">¶</span>
            <span>Quick facts</span>
          </div>
          <dl className="facts-grid">
            <div className="fact">
              <dt>Location</dt>
              <dd>Toronto, ON · open to remote</dd>
            </div>
            <div className="fact">
              <dt>Education</dt>
              <dd>Business Technology Management<span className="fact-sub">Toronto Metropolitan University</span></dd>
            </div>
            <div className="fact">
              <dt>Currently</dt>
              <dd>AI automation at <em>EdVisingU</em><span className="fact-sub">+ shipping side projects</span></dd>
            </div>
            <div className="fact">
              <dt>Looking for</dt>
              <dd>Summer 2026 internships<span className="fact-sub">Product / AI / Full-stack</span></dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
