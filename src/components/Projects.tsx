"use client";
import { useRef, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { projectsData, type Project } from "@/data/portfolio";

type VisualKind = Project["visual"];

const PALETTE: Record<VisualKind, { a: string; b: string }> = {
  phone:    { a: "0.40 0.10 178", b: "0.18 0.05 200" },
  terminal: { a: "0.22 0.04 240", b: "0.12 0.02 240" },
  snake:    { a: "0.38 0.14 145", b: "0.15 0.05 145" },
  chart:    { a: "0.42 0.10 70",  b: "0.18 0.04 50"  },
  globe:    { a: "0.34 0.10 220", b: "0.16 0.05 240" },
  pong:     { a: "0.20 0.02 0",   b: "0.10 0.01 0"   },
};

function PhoneArt() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(155 18)">
        <rect width="90" height="184" rx="14" fill="#0a0b0c" stroke="rgba(255,255,255,0.18)" />
        <rect x="6" y="6" width="78" height="172" rx="8" fill="#101216" />
        <rect x="34" y="9" width="22" height="3" rx="1.5" fill="#000" />
        <g transform="translate(12 26)">
          {Array.from({ length: 28 }).map((_, idx) => {
            const x = (idx % 7) * 9;
            const y = Math.floor(idx / 7) * 9;
            const filled = [0,1,2,4,5,8,9,12,14,15,16,19,22,23].includes(idx);
            return <rect key={idx} x={x} y={y} width="7" height="7" rx="1.5" fill={filled ? "var(--accent)" : "rgba(255,255,255,0.08)"} />;
          })}
        </g>
        <text x="45" y="105" textAnchor="middle" fontSize="24" fontWeight="700" fill="var(--accent)" fontFamily="var(--mono)">14</text>
        <text x="45" y="118" textAnchor="middle" fontSize="6" letterSpacing="0.2em" fill="rgba(255,255,255,0.5)" fontFamily="var(--mono)">DAY STREAK</text>
        <g transform="translate(12 130)">
          {[12,22,18,28,16,24,32].map((h, idx) => (
            <rect key={idx} x={idx * 9} y={32 - h} width="6" height={h} rx="1" fill="rgba(255,255,255,0.6)" />
          ))}
        </g>
      </g>
    </svg>
  );
}

function TerminalArt() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
      <g fontFamily="var(--mono)" fontSize="9">
        <text x="32" y="44" fill="var(--accent)">$</text>
        <text x="44" y="44" fill="rgba(255,255,255,0.85)">python apply.py --search &quot;data analyst&quot; --limit 50</text>
        <text x="32" y="64" fill="rgba(255,255,255,0.5)">[info] launching chrome driver…</text>
        <text x="32" y="80" fill="rgba(255,255,255,0.5)">[info] authenticated as @zaid06khan</text>
        <text x="32" y="96" fill="oklch(0.78 0.18 145)">[ok] 12 / 50 applied</text>
        <text x="32" y="112" fill="oklch(0.78 0.18 145)">[ok] 13 / 50 applied</text>
        <text x="32" y="128" fill="oklch(0.78 0.18 145)">[ok] 14 / 50 applied</text>
        <text x="32" y="144" fill="oklch(0.78 0.18 145)">[ok] 15 / 50 applied</text>
        <text x="32" y="160" fill="var(--warm)">[warn] easy-apply not found · skipping</text>
        <text x="32" y="176" fill="oklch(0.78 0.18 145)">[ok] 16 / 50 applied</text>
        <text x="32" y="192" fill="var(--accent)">$ <tspan fill="rgba(255,255,255,0.85)">_</tspan></text>
      </g>
      <rect x="60" y="186" width="6" height="9" fill="var(--accent)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function SnakeArt() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(140 30)">
        <rect width="120" height="160" rx="6" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.12)" />
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={"v"+i} x1={i*12} y1="0" x2={i*12} y2="160" stroke="rgba(255,255,255,0.04)" />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={"h"+i} x1="0" y1={i*12} x2="120" y2={i*12} stroke="rgba(255,255,255,0.04)" />
        ))}
        {[[2,3],[2,4],[2,5],[3,5],[4,5],[5,5],[5,6],[5,7],[6,7],[7,7]].map(([x,y], i) => (
          <rect key={i} x={x*12+1} y={y*12+1} width="10" height="10" rx="2" fill="oklch(0.78 0.14 145)" />
        ))}
        <rect x={9*12+1} y={3*12+1} width="10" height="10" rx="5" fill="oklch(0.78 0.16 30)" />
        <text x="60" y="-8" textAnchor="middle" fontSize="9" letterSpacing="0.2em" fill="var(--accent)" fontFamily="var(--mono)">SCORE · 0420</text>
      </g>
    </svg>
  );
}

function ChartArt() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(40 30)">
        <line x1="0" y1="160" x2="320" y2="160" stroke="rgba(255,255,255,0.2)" />
        <line x1="0" y1="0" x2="0" y2="160" stroke="rgba(255,255,255,0.2)" />
        {[0,1,2,3].map(i => (
          <line key={i} x1="0" y1={i*40} x2="320" y2={i*40} stroke="rgba(255,255,255,0.05)" />
        ))}
        <polyline points="0,120 40,90 80,100 120,60 160,80 200,45 240,55 280,30 320,40" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="0,120 40,90 80,100 120,60 160,80 200,45 240,55 280,30 320,40 320,160 0,160" fill="var(--accent)" opacity="0.1" />
        <polyline points="0,140 40,130 80,120 120,128 160,115 200,108 240,98 280,92 320,80" fill="none" stroke="var(--warm)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
        <circle cx="280" cy="30" r="4" fill="var(--accent)" />
        <circle cx="280" cy="30" r="9" fill="none" stroke="var(--accent)" opacity="0.5">
          <animate attributeName="r" values="4;14;4" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="-10" fontSize="9" letterSpacing="0.18em" fill="rgba(255,255,255,0.5)" fontFamily="var(--mono)">SEARCH INTEREST · 2020 – 2026</text>
      </g>
    </svg>
  );
}

function GlobeArt() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(200 110)">
        <circle r="80" fill="none" stroke="rgba(255,255,255,0.18)" />
        <ellipse rx="80" ry="30" fill="none" stroke="rgba(255,255,255,0.12)" />
        <ellipse rx="80" ry="55" fill="none" stroke="rgba(255,255,255,0.1)" />
        <ellipse rx="55" ry="80" fill="none" stroke="rgba(255,255,255,0.12)" />
        <ellipse rx="30" ry="80" fill="none" stroke="rgba(255,255,255,0.1)" />
        <line x1="-80" y1="0" x2="80" y2="0" stroke="rgba(255,255,255,0.18)" />
        <line x1="0" y1="-80" x2="0" y2="80" stroke="rgba(255,255,255,0.18)" />
        {[[-40,-20],[20,-40],[55,15],[-20,40],[35,45],[-60,10]].map(([x,y],i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="3" fill="var(--accent)" />
            <circle r="3" fill="none" stroke="var(--accent)" opacity="0.5">
              <animate attributeName="r" values="3;10;3" dur={`${1.6 + i*0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur={`${1.6 + i*0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>
    </svg>
  );
}

function PongArt() {
  return (
    <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
      <rect x="40" y="30" width="320" height="160" rx="4" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.18)" />
      {Array.from({ length: 11 }).map((_, i) => (
        <rect key={i} x="199" y={36 + i*14} width="2" height="8" fill="rgba(255,255,255,0.3)" />
      ))}
      <rect x="56" y="80" width="6" height="40" fill="#fff" rx="1" />
      <rect x="338" y="110" width="6" height="40" fill="#fff" rx="1" />
      <rect x="218" y="98" width="7" height="7" fill="var(--accent)" rx="1" />
      <text x="160" y="60" fontSize="24" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="var(--mono)" textAnchor="middle">03</text>
      <text x="240" y="60" fontSize="24" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="var(--mono)" textAnchor="middle">02</text>
    </svg>
  );
}

function ProjectVisual({ kind }: { kind: VisualKind }) {
  const p = PALETTE[kind];
  return (
    <div className="proj-vis">
      <div className="proj-vis-grad" style={{ "--vis-a": p.a, "--vis-b": p.b } as React.CSSProperties} />
      <div className="proj-vis-grid" />
      <div className="proj-vis-art">
        {kind === "phone"    && <PhoneArt />}
        {kind === "terminal" && <TerminalArt />}
        {kind === "snake"    && <SnakeArt />}
        {kind === "chart"    && <ChartArt />}
        {kind === "globe"    && <GlobeArt />}
        {kind === "pong"     && <PongArt />}
      </div>
    </div>
  );
}

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-y * 4}deg`);
    el.style.setProperty("--ry", `${x * 6}deg`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (el) { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); }
  };

  return (
    <div
      ref={cardRef}
      className={`r${inView ? " in" : ""} proj tilt ${project.size}`}
      style={{ "--rd": `${i * 80}ms` } as React.CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <ProjectVisual kind={project.visual} />
      <span className="proj-cat">{project.category}</span>
      <div className="proj-body">
        <h3 className="proj-name">{project.name}</h3>
        <div className="proj-stack">{project.stack.join("  ·  ")}</div>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-links">
          <a className="proj-link" href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub <span className="arr">→</span>
          </a>
          {project.liveUrl && (
            <a className="proj-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live demo <span className="arr">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow"><span className="num">03 /</span> <span className="bar" /> Projects</div>
          <h2 className="h2">What I&apos;ve <em>built</em>.</h2>
          <p className="lede">Selected work. Production apps, automation, data tools, and games. Hover a card for a closer look.</p>
        </Reveal>

        <div className="projects-grid">
          {projectsData.map((p, i) => <ProjectCard key={i} project={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
