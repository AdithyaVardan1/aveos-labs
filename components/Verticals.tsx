"use client";
import { useState } from "react";

const data = [
  {
    key: "mvp", idx: "01", title: "MVP Development",
    desc: "From signed napkin to live product in weeks. We compress the path between ambition and a thing customers can pay for — designed, engineered, and instrumented.",
    cases: ["0→1 product builds", "Investor-ready demos", "Production launches", "Embedded engineering pods"],
  },
  {
    key: "auto", idx: "02", title: "AI Automation",
    desc: "Replace manual workflows with agentic systems that operate 24/7. We design the loop, build the guardrails, and ship operations that actually run themselves.",
    cases: ["Agent pipelines", "RAG infrastructure", "Internal tools", "Ops automations"],
  },
  {
    key: "seo", idx: "03", title: "SEO & GEO",
    desc: "Win classic search and the new generative answer surface. Programmatic SEO, structured content, and entity strategies tuned for both Google and the AI engines.",
    cases: ["Programmatic SEO", "LLM citation strategy", "Technical SEO audits", "Authority content"],
  },
  {
    key: "web", idx: "04", title: "Web Development",
    desc: "Marketing sites and product surfaces engineered for speed, motion, and conversion. Hand-built front-ends, no template smell.",
    cases: ["Marketing sites", "Web apps", "Component systems", "Performance overhauls"],
  },
  {
    key: "prod", idx: "05", title: "AI Products",
    desc: "We don't just build for clients — we ship our own. Our in-house product practice doubles as your shortcut: proven patterns, hardened infra.",
    cases: ["Product strategy", "Model selection", "Eval & guardrails", "Go-to-market"],
  },
];

export default function Verticals() {
  const [active, setActive] = useState(0);
  const d = data[active];

  return (
    <section className="verticals" id="services">
      <div className="container">
        <div className="verticals-head">
          <div className="eyebrow"><span className="num">02 /</span> Capabilities</div>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Built For Every <span className="it">Challenge.</span>
          </h2>
        </div>

        <div className="verticals-grid">
          <div className="pill-list" role="tablist">
            {data.map((item, i) => (
              <button
                key={item.key}
                className="pill-item"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span className="idx">{item.idx}</span>
                  <span>{item.title}</span>
                </span>
                <span className="arrow">↗</span>
              </button>
            ))}
          </div>

          <div className="vertical-card" role="tabpanel" key={active}>
            <div className="vc-top vc-fade">
              <div className="vc-meta">{d.idx} / Capability</div>
              <div className="vc-num">0{active + 1}</div>
            </div>
            <div className="vc-body vc-fade" style={{ animationDelay: ".05s" }}>
              <h3 className="vc-title">{d.title}</h3>
              <p className="vc-desc">{d.desc}</p>
              <div className="vc-cases">
                {d.cases.map((c) => <span key={c} className="vc-case">{c}</span>)}
              </div>
            </div>
            <div className="vc-foot vc-fade" style={{ animationDelay: ".1s" }}>
              <div className="vc-tick">⏳ Engagement · 4–12 weeks</div>
              <a href="#book" className="vc-cta">Start a Brief <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
