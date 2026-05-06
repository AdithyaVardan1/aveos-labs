"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const COUNT = 380;
    const REPULSE_R = 120;
    const CONNECT_R = 90;
    const COLOR = "#E63922";

    let W = 0, H = 0;
    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: Particle[] = [];

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    function mkParticle(): Particle {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      };
    }

    function init() {
      resize();
      particles = Array.from({ length: COUNT }, mkParticle);
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < REPULSE_R) {
          const force = ((REPULSE_R - d) / REPULSE_R) * 0.04;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }

        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy;

        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = COLOR;
        ctx.globalAlpha = 0.55;
        ctx.fill();

        if (d < CONNECT_R * 1.8) {
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const ex = p.x - q.x, ey = p.y - q.y;
            const ed = Math.sqrt(ex * ex + ey * ey);
            if (ed < CONNECT_R) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = COLOR;
              ctx.globalAlpha = (1 - ed / CONNECT_R) * 0.25;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    const section = canvas.parentElement!;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onResize = () => resize();

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    init();
    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.main}>
        <h1 className={styles.headline}>
          <span className={`${styles.word} ${styles.verm}`}>
            <span>EDGE</span>
          </span>
          <span className={styles.word}>
            <span>&nbsp;IS</span>
          </span>
          <br />
          <span className={styles.word}>
            <span>ENGINEERED.</span>
          </span>
        </h1>
      </div>

      <div className={styles.foot}>
        <div className={styles.footLeft}>
          <div className={styles.scrollLabel}>SCROLL</div>
          <div className={styles.tag}>
            ELITE AI LABORATORY<br />BUILDING FROM INTUITION
          </div>
        </div>
        <div className={styles.footRight}>
          <p className={styles.tagline}>
            We build AI systems, products, and MVPs that give businesses an unfair advantage.
          </p>
          <div className={styles.actions}>
            <a className={styles.btnOutline} href="#products">See Our Work →</a>
            <a className={styles.btnFill} href="mailto:hello@aveoslabs.com">Book a Call →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
