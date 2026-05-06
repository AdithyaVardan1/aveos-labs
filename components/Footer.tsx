export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-mark">
            Aveos<span className="dot" />Labs
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Studio</h5>
              <a href="#">Work</a>
              <a href="#">Services</a>
              <a href="#">Products</a>
              <a href="#">Contact</a>
            </div>
            <div className="foot-col">
              <h5>Connect</h5>
              <a href="https://x.com/aveoslabs" target="_blank" rel="noopener noreferrer">X / Twitter</a>
              <a href="https://www.instagram.com/aveoslabs/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="mailto:hello@aveoslabs.com">Email</a>
            </div>
            <div className="foot-col">
              <h5>Legal</h5>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Imprint</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© MMXXVI Aveos Labs — All rights reserved.</span>
          <span>The Edge is Engineered.</span>
        </div>
      </div>
    </footer>
  );
}
