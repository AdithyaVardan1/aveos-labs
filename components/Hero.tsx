"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <header className="hero">

      {/* ── Ghost background text ── */}
      <div className="hero-bg-text" aria-hidden="true">
        <div className="hero-bg-row">
          The Edge is Engineered&nbsp;·&nbsp;
          The Edge is Engineered&nbsp;·&nbsp;
          The Edge is Engineered&nbsp;·&nbsp;
          The Edge is Engineered&nbsp;·
        </div>
        <div className="hero-bg-row">
          Elite&nbsp;AI&nbsp;Laboratory&nbsp;·&nbsp;
          Elite&nbsp;AI&nbsp;Laboratory&nbsp;·&nbsp;
          Elite&nbsp;AI&nbsp;Laboratory&nbsp;·&nbsp;
          Elite&nbsp;AI&nbsp;Laboratory&nbsp;·
        </div>
      </div>

      {/* ── Center visual ── */}
      <div className={`hero-center${mounted ? " in" : ""}`}>
        <div className="hero-orb">
          <div className="orb-gloss" />
          <div className="orb-inner" />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={`hero-bottom${mounted ? " in" : ""}`}>
        <div className="hero-scroll mono">
          <span className="scroll-line" />
          Scroll to Explore
        </div>

        <div className="hero-info-card">
          <p className="hero-info-eyebrow mono">We build AI systems.</p>
          <p className="hero-info-desc">
            Products and MVPs that give businesses an unfair advantage —
            strategy, design, engineering and AI under one roof.
          </p>
          <div className="hero-info-ctas">
            <a href="#services" className="pill-outline">See Our Work <span className="arrow">→</span></a>
            <a href="#book" className="pill">Book a Call <span className="arrow">→</span></a>
          </div>
        </div>
      </div>

    </header>
  );
}
