import styles from "./Stats.module.css";

const cards = [
  { label: "Shipped", num: "12", unit: "+" },
  { label: "Built",   num: "40", unit: "k" },
  { label: "Reach",   num: "2",  unit: "M+" },
  { label: "Native",  num: "AI", unit: "." },
];

export default function Stats() {
  return (
    <section id="stats" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.headline}>
          We&rsquo;re Not An Agency.<br />
          <span className={styles.verm}>We&rsquo;re An Upgrade.</span>
        </h2>
        <p className={styles.desc}>
          We don&rsquo;t send decks and disappear. We embed, we build, and we ship —
          strategy, design, engineering and AI under one roof. No middlemen. Just results.
        </p>
      </div>
      <div className={styles.cards}>
        {cards.map((c) => (
          <div key={c.label} className={styles.card}>
            <div className={styles.cardLabel}>{c.label}</div>
            <div className={styles.cardNum}>
              {c.num}<span className={styles.cardUnit}>{c.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
