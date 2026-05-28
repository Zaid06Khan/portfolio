"use client";
import Reveal from "./Reveal";
import { certificationsData } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section className="sec" id="certifications">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow"><span className="num">05 /</span> <span className="bar" /> Credentials</div>
          <h2 className="h2">Things I&apos;ve <em>completed</em>.</h2>
        </Reveal>

        <div className="certs">
          {certificationsData.map((c, i) => (
            <Reveal key={i} className="cert" delay={i * 80}>
              <div className="cert-row">
                <h3 className="cert-name">{c.name}</h3>
                {c.year && <span className="cert-year">{c.year}</span>}
              </div>
              <p className="cert-issuer">{c.issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
