import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.headline}>
          Ready To Get<br />
          <span className={styles.verm}>The Edge?</span>
        </h2>
        <div className={styles.side}>
          <p className={styles.sub}>
            Let&rsquo;s build something that gives you an unfair advantage.
          </p>
          <div className={styles.actions}>
            <a className={styles.btnLight} href="mailto:hello@aveoslabs.com">Book a Call →</a>
            <a className={styles.btnGhost} href="#products">See Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}
