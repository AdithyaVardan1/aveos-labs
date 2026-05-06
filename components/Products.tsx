export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-head">
          <div className="eyebrow"><span className="num">03 /</span> In-House</div>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Our <span className="it">Products.</span>
          </h2>
        </div>

        <div className="product-grid">
          {/* Staqq */}
          <article className="product-card">
            <div className="pc-meta">
              <div className="pc-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <rect x="3" y="14" width="4" height="9" fill="currentColor" />
                  <rect x="11" y="8" width="4" height="15" fill="currentColor" />
                  <rect x="19" y="3" width="4" height="20" fill="currentColor" />
                </svg>
              </div>
              <div className="pc-tag">01 — Live</div>
            </div>
            <div>
              <h3 className="pc-name">Staqq</h3>
              <p className="pc-desc">A finance dashboard with real-time crypto alerts. Portfolio intelligence built for operators who actually trade.</p>
              <svg viewBox="0 0 360 80" width="100%" height="80" style={{ marginTop: 22, opacity: .85 }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gA" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#E63922" stopOpacity=".35" />
                    <stop offset="100%" stopColor="#E63922" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,55 L20,50 L40,58 L60,45 L80,52 L100,38 L120,42 L140,30 L160,34 L180,22 L200,28 L220,18 L240,24 L260,14 L280,20 L300,10 L320,16 L340,8 L360,12 L360,80 L0,80 Z" fill="url(#gA)" />
                <path d="M0,55 L20,50 L40,58 L60,45 L80,52 L100,38 L120,42 L140,30 L160,34 L180,22 L200,28 L220,18 L240,24 L260,14 L280,20 L300,10 L320,16 L340,8 L360,12" fill="none" stroke="#E63922" strokeWidth="2" />
              </svg>
            </div>
            <div className="pc-foot">
              <div className="mono" style={{ opacity: .55 }}>v2.1 · stable</div>
              <a href="#" className="pc-cta">Visit Staqq <span className="arrow">→</span></a>
            </div>
          </article>

          {/* Director AI */}
          <article className="product-card">
            <div className="pc-meta">
              <div className="pc-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <rect x="3" y="3" width="20" height="6" fill="currentColor" />
                  <rect x="3" y="11" width="20" height="12" fill="currentColor" fillOpacity=".35" />
                  <rect x="6" y="14" width="14" height="6" fill="currentColor" />
                  <polygon points="3,3 8,9 6,9 1,3" fill="#FAF8F5" />
                  <polygon points="11,3 16,9 14,9 9,3" fill="#FAF8F5" />
                  <polygon points="19,3 24,9 22,9 17,3" fill="#FAF8F5" />
                </svg>
              </div>
              <div className="pc-tag">02 — Beta</div>
            </div>
            <div>
              <h3 className="pc-name">Director<br />AI</h3>
              <p className="pc-desc">A storyboard tool for film production. Generate, sequence and direct visual scripts at the speed of thought.</p>
              <div style={{ display: "flex", gap: 8, marginTop: 22 }}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} style={{
                    flex: 1, aspectRatio: "16/10", borderRadius: 8,
                    background: i === 1
                      ? "repeating-linear-gradient(45deg,#E63922,#E63922 2px,transparent 2px,transparent 8px),#F0EBE3"
                      : "repeating-linear-gradient(45deg,#0D0D0D,#0D0D0D 2px,transparent 2px,transparent 8px),#F0EBE3",
                    border: "1px solid var(--hair)",
                    position: "relative" as const,
                  }}>
                    {i === 3 && (
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".14em", opacity: .55 }}>SC04</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="pc-foot">
              <div className="mono" style={{ opacity: .55 }}>closed beta</div>
              <a href="#" className="pc-cta">Request Access <span className="arrow">→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
