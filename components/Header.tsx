"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Главная", "/"],
    ["Услуги", "/services/web-development"],
    ["Проекты", "/portfolio"],
    ["Цены", "/services/web-development#pricing"],
    ["О нас", "/about"],
    ["Контакты", "/contact"]
  ];
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <button className={open ? "menu-toggle is-open" : "menu-toggle"} onClick={() => setOpen(!open)} aria-label="Открыть меню" aria-expanded={open}>
          <span></span><span></span>
        </button>
        <nav className={open ? "nav-links is-open" : "nav-links"}>
          {links.map(([label, href], i) => <Link key={label} href={href} className={i === 0 ? "nav-pill nav-pill-active" : "nav-pill"} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="nav-right">
          <span className="nav-language">RU⌄</span>
          <Link href="/contact" className="nav-social" aria-label="Связаться в WhatsApp">◉</Link>
          <Link href="/contact" className="nav-social" aria-label="Telegram">➤</Link>
          <Link href="/contact" className="nav-cta">Оставить заявку <span>↗</span></Link>
        </div>
      </div>
    </header>
  );
}
