import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand footer-brand">
              <span className="brand-mark"><span>T</span></span>
              <span className="brand-name">TOLVYXO<span className="brand-dot">.</span></span>
            </Link>
            <p className="footer-note">Digital experiences that move business forward.</p>
          </div>
          <div className="footer-links">
            <div><span className="footer-label">Explore</span><Link href="/services/web-development">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/about">About</Link></div>
            <div><span className="footer-label">Get in touch</span><Link href="/contact">Start a project</Link><a href="mailto:hello@tolvyxo.eu">hello@tolvyxo.eu</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} TOLVYXO. All rights reserved.</span><span>Design. Develop. Scale.</span></div>
      </div>
    </footer>
  );
}
