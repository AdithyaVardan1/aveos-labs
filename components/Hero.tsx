"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const [headlineIn, setHeadlineIn] = useState(false);
  const [fadesIn, setFadesIn] = useState(false);

  // Staggered reveal
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setHeadlineIn(true);
      setTimeout(() => setFadesIn(true), 80);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    type P = { x: number; y: number; ox: number; oy: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas!.width = w * dpr; canvas!.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      particles = [];
      const density = Math.min(1, (w * h) / (1600 * 900));
      const count = Math.floor(380 * density);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w, y = Math.random() * h;
        particles.push({ x, y, ox: x, oy: y, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.6 + .6, a: Math.random() * .5 + .35 });
      }
    }

    const section = canvas.parentElement!;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999, active: false }; };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    function step() {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my, active } = mouseRef.current;
      const radius = 160, radius2 = radius * radius;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.vx += (p.ox - p.x) * 0.0015;
        p.vy += (p.oy - p.y) * 0.0015;

        const dx = p.x - mx, dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < radius2 && active) {
          const d = Math.sqrt(d2) || .001;
          const force = 1 - d / radius;
          p.vx += (dx / d) * force * 4.5;
          p.vy += (dy / d) * force * 4.5;
        }

        p.vx += (Math.random() - .5) * .01;
        p.vy += (Math.random() - .5) * .01;
        p.vx *= 0.92; p.vy *= 0.92;
        p.x += p.vx; p.y += p.vy;

        const closeness = active ? Math.max(0, 1 - Math.sqrt(d2) / 220) : 0;
        const alpha = Math.min(1, p.a + closeness * .6);
        ctx.beginPath();
        ctx.fillStyle = `rgba(230,57,34,${alpha.toFixed(3)})`;
        ctx.arc(p.x, p.y, p.r + closeness * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      if (active) {
        ctx.strokeStyle = "rgba(230,57,34,0.10)";
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mx, dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130) {
            ctx.beginPath();
            ctx.moveTo(mx, my); ctx.lineTo(p.x, p.y);
            ctx.globalAlpha = (1 - Math.sqrt(d2) / 130) * .35;
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(step);
    }

    resize(); step();
    return () => {
      cancelAnimationFrame(rafRef.current);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const words = [0, 1, 2]; // for transition-delay staggering

  return (
    <header className="hero" id="hero">
      <div className="hero-grid-bg" />
      <canvas ref={canvasRef} id="particle-canvas" />

      <div className={`hero-meta fade-in${fadesIn ? " in" : ""}`} style={{ transitionDelay: "500ms" }}>
        <div className="meta-tag mono">
          <span className="dot" />Live · Studio Open · MMXXVI
        </div>
        <div className="mono">001 / Aveos Labs · Index</div>
      </div>

      <h1 className={`hero-headline display${headlineIn ? " in" : ""}`} aria-label="The Edge is Engineered.">
        <span className="line">
          <span className="word" style={{ transitionDelay: "120ms" }}>The</span>
        </span>
        <span className="line">
          <span className="word accent" style={{ transitionDelay: "210ms" }}>Edge</span>{" "}
          <span className="word" style={{ transitionDelay: "300ms" }}>is</span>
        </span>
        <span className="line">
          <span className="word" style={{ transitionDelay: "390ms" }}>Engineered.</span>
        </span>
      </h1>

      <div className="hero-foot">
        <div className={`hero-foot-left fade-in${fadesIn ? " in" : ""}`} style={{ transitionDelay: "620ms" }}>
          <div className="scroll-cue">
            <span className="scroll-line" /> Scroll
          </div>
          <div className="mono" style={{ opacity: .55 }}>
            Elite AI Laboratory<br />Operating from anywhere
          </div>
        </div>
        <div className={`hero-foot-right fade-in${fadesIn ? " in" : ""}`} style={{ transitionDelay: "740ms" }}>
          <p className="hero-desc">
            We build AI systems, products, and MVPs that give businesses an unfair advantage.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="pill-outline">See Our Work <span className="arrow">→</span></a>
            <a href="#book" className="pill">Book a Call <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </header>
  );
}
