"use client";
import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      document.documentElement.style.setProperty("--p", String(p));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="scrollprog" />;
}
