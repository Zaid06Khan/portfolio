"use client";
import { useRef, useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export default function Reveal({ children, delay = 0, className = "", style, id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`r${inView ? " in" : ""}${className ? " " + className : ""}`}
      style={{ "--rd": `${delay}ms`, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
