"use client";
import { useState } from "react";
import Reveal from "./Reveal";

function SendMessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="msg-form">
        <div className="form-success">
          <strong>Message sent!</strong>
          Your email client should have opened. Looking forward to connecting.
        </div>
      </div>
    );
  }

  return (
    <div className="msg-form">
      <h3 className="msg-form-title">Send a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label className="form-label">Your Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="Zaid Khan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">Your Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Subject</label>
          <input
            className="form-input"
            type="text"
            placeholder="Internship opportunity"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        {error && (
          <p style={{ color: "var(--warm)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
            Something went wrong. Please try again or email directly.
          </p>
        )}
        <button className="form-submit" type="submit" disabled={loading}>
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          {loading ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="sec-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="num">06 /</span> <span className="bar" /> Contact
          </div>
          <h2 className="h2">Let&apos;s <em>build</em> something.</h2>
          <p className="lede">Open to internship opportunities in Toronto and remote. Feel free to reach out.</p>
        </Reveal>

        <div className="contact-layout">
          {/* ── Left column ── */}
          <div className="contact-left">
            {/* Quick Actions */}
            <Reveal>
              <div className="qa-label">Quick Actions</div>
              <div className="qa-buttons">
                <a className="qa-btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Download Resume
                </a>
                <a className="qa-btn" href="https://linkedin.com/in/zaid-khan-a03050387" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
                  </svg>
                  LinkedIn Profile
                </a>
                <a className="qa-btn" href="https://github.com/Zaid06Khan" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.38.6.11.83-.25.83-.57 0-.28-.01-1.23-.02-2.23-3.01.55-3.79-.74-4.03-1.41-.14-.35-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.02-.79.95-.01 1.62.87 1.85 1.23 1.08 1.82 2.8 1.31 3.5.99.1-.78.42-1.31.76-1.6-2.67-.3-5.46-1.34-5.46-5.93 0-1.31.47-2.39 1.23-3.23-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.23 0 4.6-2.8 5.62-5.48 5.93.44.37.81 1.09.81 2.22 0 1.6-.02 2.9-.02 3.3 0 .32.23.69.83.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
            </Reveal>

            {/* Education card */}
            <Reveal delay={100} className="edu-card" style={{ margin: 0 }}>
              <div className="edu-mark">
                <img
                  src="/tmu_logo.svg"
                  alt="Toronto Metropolitan University"
                  className="edu-tmu-logo"
                />
                <span className="edu-label">Education</span>
              </div>
              <div className="edu-body">
                <h3 className="edu-school">Toronto Metropolitan University</h3>
                <p className="edu-degree">Bachelor of Commerce, <em>Business Technology Management</em></p>
                <p className="edu-dates">Sep 2024 to Apr 2028</p>
                <ul className="edu-marks">
                  <li>BTM Co-op stream · building business + software fluency in parallel</li>
                  <li>Claude Technical Architect · founding cohort, Anthropic Partner Network</li>
                  <li>GLO-BUS Industry Champion · top performance in global strategy sim</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ── Right column ── */}
          <div className="contact-right">
            {/* Contact info */}
            <Reveal delay={80} className="cinfo-panel">
              <div className="cinfo-head">Contact</div>
              <a className="cinfo-item" href="mailto:zaid9khn@gmail.com">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                zaid9khn@gmail.com
              </a>
              <a className="cinfo-item" href="https://linkedin.com/in/zaid-khan-a03050387" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
                </svg>
                linkedin.com/in/zaid-khan-a03050387
              </a>
              <a className="cinfo-item" href="https://github.com/Zaid06Khan" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.38.6.11.83-.25.83-.57 0-.28-.01-1.23-.02-2.23-3.01.55-3.79-.74-4.03-1.41-.14-.35-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.02-.79.95-.01 1.62.87 1.85 1.23 1.08 1.82 2.8 1.31 3.5.99.1-.78.42-1.31.76-1.6-2.67-.3-5.46-1.34-5.46-5.93 0-1.31.47-2.39 1.23-3.23-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.23 0 4.6-2.8 5.62-5.48 5.93.44.37.81 1.09.81 2.22 0 1.6-.02 2.9-.02 3.3 0 .32.23.69.83.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/Zaid06Khan
              </a>
            </Reveal>

            {/* Message form */}
            <Reveal delay={160}>
              <SendMessageForm />
            </Reveal>
          </div>
        </div>
      </div>
      <div className="contact-rule">END · Toronto, ON</div>
    </section>
  );
}
