export default function CTA() {
  return (
    <section className="cta" id="book">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-card">
            <div>
              <div className="mono" style={{ opacity: .55, color: "var(--cream)" }}>04 / Engage</div>
            </div>
            <h2 className="cta-headline">
              Ready to <span className="it">Engineer</span> Your Edge?
            </h2>
            <div className="cta-foot">
              <p className="cta-sub">A 30-minute intro call. No deck, no pitch. We listen, we scope, and if it&rsquo;s a fit, we ship.</p>
              <a href="mailto:hello@aveoslabs.com" className="cta-pill">Book a Call <span>→</span></a>
            </div>
          </div>

          <aside className="cta-side">
            <div>
              <h4>Find us</h4>
              <div className="socials" style={{ marginTop: 14 }}>
                <a href="https://x.com/aveoslabs" target="_blank" rel="noopener noreferrer" className="social" aria-label="X / Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.61l-5.18-6.78L4.59 22H1.34l8.05-9.2L1 2h6.78l4.69 6.2L18.24 2Zm-2.32 18h1.83L7.16 4H5.21l10.71 16Z" /></svg>
                </a>
                <a href="#" className="social" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6 0h3.84v1.57h.05c.53-1 1.83-2.07 3.77-2.07 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.46c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88V21h-4V9.5Z" /></svg>
                </a>
                <a href="#" className="social" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.17a11 11 0 0 1 5.78 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
                </a>
                <a href="https://www.instagram.com/aveoslabs/" target="_blank" rel="noopener noreferrer" className="social" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.18 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.18 8.8 2.16 12 2.16Zm0 1.84c-3.14 0-3.5.01-4.74.07-1.05.05-1.62.22-2 .37-.5.2-.86.43-1.24.81-.38.38-.61.74-.81 1.24-.15.38-.32.95-.37 2C2.78 9.5 2.77 9.86 2.77 13s.01 3.5.07 4.74c.05 1.05.22 1.62.37 2 .2.5.43.86.81 1.24.38.38.74.61 1.24.81.38.15.95.32 2 .37 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.05-.05 1.62-.22 2-.37.5-.2.86-.43 1.24-.81.38-.38.61-.74.81-1.24.15-.38.32-.95.37-2 .06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.05-.22-1.62-.37-2-.2-.5-.43-.86-.81-1.24a3.34 3.34 0 0 0-1.24-.81c-.38-.15-.95-.32-2-.37C15.5 4.01 15.14 4 12 4Zm0 3.14a4.86 4.86 0 1 1 0 9.72 4.86 4.86 0 0 1 0-9.72Zm0 1.84a3.02 3.02 0 1 0 0 6.04 3.02 3.02 0 0 0 0-6.04Zm5.07-2.2a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" /></svg>
                </a>
                <a href="mailto:hello@aveoslabs.com" className="social" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8.18L4.2 7.4 3 8.4l9 6.6 9-6.6-1.2-1Z" /></svg>
                </a>
                <a href="#" className="social" aria-label="Discord">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.37A19.8 19.8 0 0 0 15.5 3l-.24.42a14.7 14.7 0 0 1 4.4 1.4 16.3 16.3 0 0 0-14.31 0 14.7 14.7 0 0 1 4.4-1.4L9.5 3a19.8 19.8 0 0 0-4.82 1.37C1.6 8.92.78 13.34 1.2 17.7A19.9 19.9 0 0 0 7.27 21l1.22-1.66c-1.06-.36-2.05-.83-2.97-1.4.25-.18.5-.37.74-.57a14.4 14.4 0 0 0 11.48 0c.24.2.49.39.74.57-.93.57-1.92 1.04-2.98 1.4L16.73 21a19.9 19.9 0 0 0 6.06-3.3c.55-5.06-.78-9.46-2.47-13.33ZM8.95 15.36c-1.18 0-2.15-1.07-2.15-2.4 0-1.32.95-2.4 2.15-2.4s2.16 1.08 2.15 2.4c0 1.33-.95 2.4-2.15 2.4Zm6.1 0c-1.18 0-2.15-1.07-2.15-2.4 0-1.32.96-2.4 2.15-2.4 1.2 0 2.16 1.08 2.15 2.4 0 1.33-.95 2.4-2.15 2.4Z" /></svg>
                </a>
              </div>
            </div>
            <div className="cta-side-meta">
              <div className="lg">hello@aveos.io</div>
              <div className="sm">Reply guaranteed within 24h, weekdays.</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
