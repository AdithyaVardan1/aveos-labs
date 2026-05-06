"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 80) return true;
        if (prev && y < 40) return false;
        return prev;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-shell">
        <a href="#" className="wordmark" aria-label="Aveos Labs">
          Aveos<span className="dot" />Labs
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#studio">Studio</a>
        </div>
        <a href="#book" className="pill">
          Book a Call <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
