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
            <p className="footer-note">Создаём сайты, которые помогают бизнесу расти.</p>
          </div>
          <div className="footer-links">
            <div><span className="footer-label">Навигация</span><Link href="/services/web-development">Услуги</Link><Link href="/portfolio">Портфолио</Link><Link href="/about">О нас</Link></div>
            <div><span className="footer-label">Связаться</span><Link href="/contact">Обсудить проект</Link><a href="mailto:hello@tolvyxo.eu">hello@tolvyxo.eu</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} TOLVYXO. Все права защищены.</span><span>Дизайн. Разработка. Рост.</span></div>
      </div>
    </footer>
  );
}
