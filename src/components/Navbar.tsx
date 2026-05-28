"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Goals", id: "goals" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => go("hero")}>ZK ✦</button>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={`nav-link${active === l.id ? " active" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
