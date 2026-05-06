"use client";

import { useState } from "react";
import styles from "./Verticals.module.css";

const verticals = [
  {
    key: "ai",
    name: "AI Systems",
    title: "AI SYSTEMS",
    desc: "Custom AI pipelines, LLM integrations, agents, and automation engines that make your product genuinely intelligent — not just AI-sprinkled.",
    tags: ["LLM Pipelines", "Agents", "RAG", "Automation", "Fine-tuning"],
  },
  {
    key: "product",
    name: "Product Development",
    title: "PRODUCT DEV",
    desc: "Full-stack product development from zero to shipped. Web, mobile, backend — we own the whole stack and move at startup speed.",
    tags: ["Web Apps", "Mobile", "APIs", "Full-Stack", "Shipping"],
  },
  {
    key: "design",
    name: "Design & Brand",
    title: "DESIGN & BRAND",
    desc: "Identity, interface, and motion design that makes your product feel premium. We design systems, not just screens.",
    tags: ["Brand Identity", "UI / UX", "Motion", "Design Systems"],
  },
  {
    key: "strategy",
    name: "Strategy & Growth",
    title: "STRATEGY",
    desc: "Market positioning, growth loops, and go-to-market strategy grounded in what actually works — not frameworks from five years ago.",
    tags: ["GTM", "Positioning", "Growth Loops", "Competitive Intel"],
  },
  {
    key: "mvp",
    name: "Rapid MVP Builds",
    title: "RAPID MVPS",
    desc: "Idea to live product in weeks. We embed, focus ruthlessly on the core, and launch fast — then iterate with real signal.",
    tags: ["4-Week Builds", "Focused Scope", "Early Launch", "Iteration"],
  },
];

export default function Verticals() {
  const [active, setActive] = useState("ai");
  const current = verticals.find((v) => v.key === active)!;

  return (
    <section id="verticals" className={styles.section}>
      <div className={styles.label}>What We Do</div>
      <div className={styles.inner}>
        <div className={styles.pills}>
          {verticals.map((v) => (
            <button
              key={v.key}
              className={`${styles.pill} ${active === v.key ? styles.active : ""}`}
              onClick={() => setActive(v.key)}
            >
              <span className={styles.pillName}>{v.name}</span>
              <span className={styles.pillArrow}>+</span>
            </button>
          ))}
        </div>

        <div className={styles.card}>
          <div className={styles.cardTag}>Capability</div>
          <div className={styles.cardTitle}>{current.title}</div>
          <p className={styles.cardDesc}>{current.desc}</p>
          <div className={styles.cardTags}>
            {current.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
