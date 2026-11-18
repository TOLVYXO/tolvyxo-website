"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { n: "01", title: "Стратегия", sub: "Понимаем задачу", icon: "⌘" },
  { n: "02", title: "Дизайн", sub: "Создаём впечатление", icon: "✳" },
  { n: "03", title: "Разработка", sub: "Превращаем идею в продукт", icon: "〈〉" },
  { n: "04", title: "Рост", sub: "Помогаем находить клиентов", icon: "↗" },
];

export default function ScrollStory() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.22 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`scroll-story${active ? " is-active" : ""}`}>
      <div className="scroll-story-inner container">
        <div className="scroll-story-copy">
          <span className="eyebrow">TOLVYXO / DIGITAL ECOSYSTEM</span>
          <h2>Всё связано.<br/><em>Всё работает на рост.</em></h2>
          <p>Стратегия, дизайн и технологии соединяются в одну систему — ваш сайт становится частью развития бизнеса.</p>
        </div>
        <div className="story-orbit-stage" aria-label="Четыре направления работы TOLVYXO">
          <div className="story-orbit story-orbit-a"/><div className="story-orbit story-orbit-b"/>
          <div className="story-core"><span>T</span><small>TOLVYXO</small></div>
          {items.map((item, i) => <div className={`story-node story-node-${i + 1}`} key={item.n}>
            <span className="story-node-icon">{item.icon}</span><div><small>{item.n} / DIGITAL</small><b>{item.title}</b><em>{item.sub}</em></div>
          </div>)}
        </div>
      </div>
      <div className="scroll-story-bottom"><span>ОДНА СИСТЕМА — ЧЕТЫРЕ НАПРАВЛЕНИЯ</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}
