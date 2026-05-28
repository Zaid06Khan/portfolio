"use client";
import Reveal from "./Reveal";
import { goalsData } from "@/data/portfolio";

export default function Goals() {
  return (
    <section className="sec sec-goals" id="goals">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow"><span className="num">01 /</span> <span className="bar" /> Ambition</div>
          <h2 className="h2">Goals &amp; <em>reflections</em>.</h2>
          <p className="lede">A note to myself, mostly. Where I am, where I&apos;m going, and what I keep relearning along the way.</p>
        </Reveal>

        <div className="goals-grid">
          {goalsData.map((g, i) => (
            <Reveal key={g.num} className="goal goal-no-rail" delay={i * 90}>
              <div className="goal-body">
                <div className="goal-eyebrow">{g.eyebrow}</div>
                <h3 className="goal-title">{g.title}</h3>
                <div className="goal-paras">
                  {g.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
