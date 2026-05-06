import styles from "./Products.module.css";

export default function Products() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.subtitle}>Tools we&rsquo;ve built and shipped for real-world use.</p>
      </div>
      <div className={styles.grid}>

        <div className={styles.card}>
          <div className={styles.cardTop}>
            <span className={`${styles.badge} ${styles.red}`}>Live</span>
            <a className={styles.link} href="#">View →</a>
          </div>
          <div className={styles.name}>Staqq</div>
          <p className={styles.desc}>
            AI-powered analytics and data stacking — connect your sources, surface insights
            automatically, move fast on what matters.
          </p>
          <div className={styles.visual}>
            <div className={styles.miniChart}>
              {[35, 55, 42, 78, 61, 48, 70, 52, 88, 64, 45, 73].map((h, i) => (
                <div
                  key={i}
                  className={`${styles.bar} ${h >= 78 ? styles.barHi : ""}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.badge}>Beta</span>
            <a className={styles.link} href="#">View →</a>
          </div>
          <div className={styles.name}>Director AI</div>
          <p className={styles.desc}>
            Intelligent creative direction engine — brief in, campaign out. Strategy, copy,
            visuals, and distribution in one unified AI workflow.
          </p>
          <div className={styles.visual}>
            <div className={styles.frameStrip}>
              {["01", "02", "03", "04", "05"].map((f) => (
                <div key={f} className={`${styles.frame} ${f === "02" ? styles.frameActive : ""}`}>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
