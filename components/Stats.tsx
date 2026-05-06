export default function Stats() {
  return (
    <section className="stats" id="studio">
      <div className="container">
        <div className="stats-head">
          <h2>
            We&rsquo;re Not An Agency.<br />
            <span style={{ color: "var(--vermillion)", fontStyle: "italic" }}>We&rsquo;re An Upgrade.</span>
          </h2>
          <p>We don&rsquo;t send decks and disappear. We embed, we build, and we ship — strategy, design, engineering and AI under one roof. No middlemen. Just results.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="mono" style={{ opacity: .7 }}>▲ Shipped</div>
            <div className="stat-row">
              <div className="num">10<span style={{ fontSize: ".45em" }}>+</span></div>
              <div className="idx">01</div>
            </div>
            <div className="label">Production projects delivered to clients across two continents.</div>
          </div>
          <div className="stat-card">
            <div className="mono" style={{ opacity: .7 }}>◈ Built</div>
            <div className="stat-row">
              <div className="num">3</div>
              <div className="idx">02</div>
            </div>
            <div className="label">In-house products engineered and operated by the studio.</div>
          </div>
          <div className="stat-card">
            <div className="mono" style={{ opacity: .7 }}>⤢ Reach</div>
            <div className="stat-row">
              <div className="num">2</div>
              <div className="idx">03</div>
            </div>
            <div className="label">Markets actively served — North America &amp; Europe.</div>
          </div>
          <div className="stat-card">
            <div className="mono" style={{ opacity: .7 }}>◹ Native</div>
            <div className="stat-row">
              <div className="num">100<span style={{ fontSize: ".45em" }}>%</span></div>
              <div className="idx">04</div>
            </div>
            <div className="label">AI native. Every workflow, every artefact, every decision.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
