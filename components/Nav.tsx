"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled((prev) => {
            if (!prev && y > 80) return true;
            if (prev && y < 40) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.logo} href="#">
        AVEOS <span>•</span> LABS
      </a>
      <ul className={styles.links}>
        <li><a href="#stats">Work</a></li>
        <li><a href="#verticals">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#cta">Studio</a></li>
      </ul>
      <a className={styles.cta} href="mailto:hello@aveoslabs.com">
        Book a Call →
      </a>
    </nav>
  );
}
