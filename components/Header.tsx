"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Услуги", "/services/web-development"],
    ["Портфолио", "/portfolio"],
    ["О нас", "/about"]
  ];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="TOLVYXO — главная">
          <span className="brand-mark"><span>T</span></span>
          <span className="brand-name">TOLVYXO<span className="brand-dot">.</span></span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Открыть меню" aria-expanded={open}>
          <span></span><span></span>
        </button>
        <nav className={open ? "nav-links is-open" : "nav-links"}>
          {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Обсудить проект <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
