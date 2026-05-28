"use client";
import { useState, useEffect, useRef } from "react";

const CYCLE_WORDS = ["intelligent", "useful", "automated", "thoughtful", "reliable"];

function Cycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % CYCLE_WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="cycler">
      <span
        key={i}
        style={{ display: "inline-block", animation: "charIn 600ms cubic-bezier(.2,.7,.2,1)" }}
      >
        {CYCLE_WORDS[i]}
      </span>
    </span>
  );
}

function NameSplit({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  return (
    <span>
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="char"
          style={{ "--d": `${baseDelay + i * 35}ms` } as React.CSSProperties}
        >
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );
}

function MagneticBtn({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
}

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-orb a" />
      <div className="hero-orb b" />
      <div className="wrap hero-inner">
        <div className="hero-left">
          <div className="hero-chip">
            <span className="dot" />
            <span>Toronto, ON</span>
          </div>

          <h1 className="hero-name">
            <NameSplit text="Zaid" />
            <br />
            <span className="last">
              <NameSplit text="Khan." baseDelay={250} />
            </span>
          </h1>

          <p className="hero-tagline">
            Building <Cycler /> systems<br />
            at the intersection of <em>AI</em> and <em>software</em>.
          </p>

          <div className="hero-ctas">
            <MagneticBtn className="btn btn-primary" onClick={() => go("projects")}>
              View My Work <span className="arr">→</span>
            </MagneticBtn>
            <MagneticBtn className="btn btn-ghost" onClick={() => go("contact")}>
              Get In Touch
            </MagneticBtn>
          </div>

          <div className="hero-meta">
            <span className="tag">3 internships</span>
            <span className="tag">TMU · BTM</span>
            <span className="tag">Claude certified</span>
          </div>

          <div className="hero-stats">
            <div className="hstat">
              <span className="hstat-num">3</span>
              <span className="hstat-lab">Internships<br /><i>2024 to 2026</i></span>
            </div>
            <div className="hstat">
              <span className="hstat-num">10</span>
              <span className="hstat-lab">Claude founding<br /><i>technical architects</i></span>
            </div>
            <div className="hstat">
              <span className="hstat-num">6<em>+</em></span>
              <span className="hstat-lab">Shipped projects<br /><i>mobile · web · ai</i></span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-avatar-wrap">
            <img src="/avatar.jpg" alt="Zaid Khan" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
