import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const services = [
  ["01", "Сайты для бизнеса", "Презентационные сайты, которые формируют доверие и приводят заявки.", "/services/web-development", "↗"],
  ["02", "Интернет-магазины", "Удобная покупка, продуманная структура и понятный путь к заказу.", "/services/web-development", "↗"],
  ["03", "UI/UX-дизайн", "Интерфейсы, в которых легко разобраться и приятно работать.", "/services/ui-ux-design", "↗"],
  ["04", "SEO-продвижение", "Техническая основа и структура, помогающие находить вас в поиске.", "/services/seo", "↗"],
  ["05", "Реклама и маркетинг", "Привлечение целевой аудитории и превращение интереса в обращения.", "/services/digital-marketing", "↗"],
  ["06", "AI и автоматизация", "Умные инструменты, которые упрощают процессы и экономят время.", "/services/ai-automation", "↗"]
];

const faqs = [
  ["Действительно ли сайт создаётся бесплатно?", "Мы не берём предоплату за согласованный объём разработки. Сначала готовим сайт и показываем результат. Оплата разработки происходит после вашего одобрения. Условия, объём работ и стоимость фиксируем до старта."],
  ["Нужно ли что-то оплачивать заранее?", "Предоплаты за нашу работу нет. Домен, хостинг, платные лицензии и сторонние сервисы могут оплачиваться отдельно, если они нужны проекту. Мы заранее объясняем такие расходы."],
  ["Что если мне не понравится результат?", "Вы сможете оценить готовый сайт до оплаты нашей работы. До начала проекта мы согласуем задачу, состав страниц и критерии результата, чтобы ожидания были понятны обеим сторонам."],
  ["Сколько времени занимает разработка?", "Срок зависит от количества страниц, функциональности и готовности материалов. После обсуждения задачи мы предложим реалистичный срок и этапы."],
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-noise"/>
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> DIGITAL STUDIO · ЭСТОНИЯ И ЕВРОПА</div>
          <h1>Сайты, которые<br/><em>работают</em> на ваш<br/>бизнес<span className="lime-dot">.</span></h1>
          <p className="hero-lead">Создаём современные сайты и цифровые решения, которые помогают бизнесу выглядеть убедительно, привлекать клиентов и расти.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">Обсудить проект <span>↗</span></Link>
            <Link href="/services/web-development" className="text-link">Наши услуги <span>↗</span></Link>
          </div>
          <div className="hero-proof"><span className="proof-mark">✳</span><span>БЕЗ ПРЕДОПЛАТЫ</span><i/> <span>СНАЧАЛА ГОТОВЫЙ САЙТ</span><i/> <span>ОПЛАТА ПОСЛЕ ОДОБРЕНИЯ</span></div>
        </div>
        <div className="hero-art" aria-label="Визуальная концепция цифрового проекта">
          <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
          <div className="art-sun"/>
          <div className="art-panel panel-back"><span>ЦИФРОВАЯ СРЕДА / 001</span><b>Идеи<br/>становятся<br/><em>реальностью.</em></b><i>DESIGN · DIGITAL · DEVELOPMENT</i></div>
          <div className="art-panel panel-front"><div className="panel-top"><span>TOLVYXO®</span><span>СТУДИЯ / 2026</span></div><div className="panel-graphic"><div className="graphic-ring"/><div className="graphic-disc">T</div><span className="graphic-cross">✳</span></div><div className="panel-bottom"><b>Создаём<br/>для роста.</b><span>↗</span></div></div>
          <div className="art-sticker"><b>0 €</b><span>ПРЕДОПЛАТЫ</span></div>
          <div className="art-caption">T / 001 — DIGITAL EXPERIENCE</div>
        </div>
      </div>
      <div className="container hero-bottom"><span>ЛИСТАЙТЕ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ</span><span className="scroll-line"/><span>01 — 06</span></div>
    </section>

    <section className="ticker"><div className="ticker-track"><span>СНАЧАЛА САЙТ ✳ ПОТОМ ОПЛАТА ✳ БЕЗ ПРЕДОПЛАТЫ ✳ ВЫ ОДОБРЯЕТЕ РЕЗУЛЬТАТ ✳ </span><span>СНАЧАЛА САЙТ ✳ ПОТОМ ОПЛАТА ✳ БЕЗ ПРЕДОПЛАТЫ ✳ ВЫ ОДОБРЯЕТЕ РЕЗУЛЬТАТ ✳ </span></div></section>

    <section className="manifesto section-pad"><div className="container manifesto-grid"><div className="section-index"><span>01 / НАШ ПОДХОД</span><i/></div><div><h2>Хороший сайт —<br/><span>это не расходы.</span><br/>Это инструмент роста.</h2><p>Мы объединяем стратегию, дизайн и технологии, чтобы создавать не просто красивые страницы, а полезные инструменты для вашего бизнеса.</p><Link href="/about" className="text-link">Познакомиться с TOLVYXO <span>↗</span></Link></div></div></section>

    <section className="services-section section-pad"><div className="container"><SectionHeading eyebrow="02 / ЧТО МЫ ДЕЛАЕМ" title="От идеи до работающего цифрового продукта." text="Всё необходимое, чтобы уверенно представить бизнес в интернете и превратить посетителей в клиентов."/><div className="service-grid">{services.map(([num,title,desc,href,icon])=><Link href={href} className="service-card" key={num}><span className="service-number">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="service-arrow">{icon}</span></Link>)}</div></div></section>

    <section className="feature-section section-pad"><div className="container feature-grid"><div className="feature-visual"><div className="feature-topline"><span>ПОДХОД TOLVYXO</span><span>01 — 04</span></div><div className="feature-big">Сначала<br/><em>результат.</em></div><div className="feature-stats"><div><b>0 €</b><span>ПРЕДОПЛАТЫ ЗА РАЗРАБОТКУ</span></div><div><b>100%</b><span>ПРОВЕРКА ДО ОПЛАТЫ</span></div></div><div className="feature-orbit"/></div><div className="feature-copy"><span className="eyebrow">03 / ГЛАВНОЕ ПРЕИМУЩЕСТВО</span><h2>Сайт сначала.<br/><em>Оплата потом.</em></h2><p>Мы хотим, чтобы вы принимали решение, увидев реальную работу, а не обещания на презентации. Поэтому работаем без предоплаты за разработку.</p><ul className="check-list"><li>До старта согласуем задачу, стоимость и сроки</li><li>Создадим сайт и покажем готовый результат</li><li>Вы проверите его и согласуете необходимые правки</li><li>Оплатите разработку после одобрения</li></ul><p className="small-note">Домен, хостинг и платные сторонние сервисы не входят в стоимость разработки и согласуются отдельно.</p><Link href="/contact" className="button button-primary">Обсудить мой сайт <span>↗</span></Link></div></div></section>

    <section className="process-section section-pad"><div className="container"><SectionHeading eyebrow="04 / ПРОЦЕСС" title="Четыре шага. Никакой неопределённости." text="Понятный процесс от первого сообщения до готового сайта и вашего одобрения."/><div className="steps-grid"><article><span className="step-number">01</span><div className="step-symbol">↗</div><h3>Обсуждаем задачу</h3><p>Знакомимся с бизнесом, целями, аудиторией и согласуем объём проекта.</p></article><article><span className="step-number">02</span><div className="step-symbol">✳</div><h3>Создаём сайт</h3><p>Проектируем структуру, дизайн и разрабатываем сайт под ваши задачи.</p></article><article><span className="step-number">03</span><div className="step-symbol">◉</div><h3>Вы проверяете</h3><p>Показываем готовый результат. Вы изучаете сайт и согласуете правки.</p></article><article><span className="step-number">04</span><div className="step-symbol">✓</div><h3>Одобряете и оплачиваете</h3><p>После вашего одобрения принимаем оплату и передаём проект.</p></article></div></div></section>

    <section className="portfolio-section section-pad"><div className="container"><div className="portfolio-heading"><SectionHeading eyebrow="05 / ИЗБРАННЫЕ РАБОТЫ" title="Дизайн, который говорит за бизнес." text="Каждый проект начинается с понимания задачи и превращается в самостоятельный цифровой образ."/></div><div className="portfolio-grid"><Link href="/portfolio" className="portfolio-card"><div className="portfolio-art portfolio-art-one"><div className="portfolio-browser"><div className="browser-head"><span/><span/><span/><b>STUDIO / DIGITAL</b></div><div className="browser-content"><small>ИДЕИ. ДИЗАЙН. РЕЗУЛЬТАТ.</small><b>Создаём<br/><em>новое.</em></b><span>ПОСМОТРЕТЬ ПРОЕКТ ↗</span></div><div className="browser-shape"/></div></div><div className="portfolio-meta"><div><span>КОНЦЕПТ / 001</span><h3>Цифровой бренд</h3></div><b>↗</b></div></Link><Link href="/portfolio" className="portfolio-card"><div className="portfolio-art portfolio-art-two"><div className="poster"><span>FORM FOLLOWS FUNCTION</span><b>Less,<br/><em>but better.</em></b><i>BRAND IDENTITY / 2026</i></div><div className="poster-orb"/></div><div className="portfolio-meta"><div><span>КОНЦЕПТ / 002</span><h3>Визуальная система</h3></div><b>↗</b></div></Link></div><p className="small-note">Показанные работы — демонстрационные концепции, а не завершённые проекты клиентов.</p></div></section>

    <section className="faq-section section-pad"><div className="container faq-grid"><div><span className="eyebrow">06 / ВОПРОСЫ И ОТВЕТЫ</span><h2>Остались<br/><em>вопросы?</em></h2><p>Рассказываем, как устроена работа и что важно знать до старта.</p><Link href="/contact" className="text-link">Задать свой вопрос <span>↗</span></Link></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></section>

    <section className="final-cta"><div className="container final-cta-inner"><span className="eyebrow">ВАШ СЛЕДУЮЩИЙ ШАГ</span><h2>Давайте создадим<br/><em>что-то сильное.</em></h2><p>Расскажите о своей задаче. Обсудим идею, сроки и подходящий формат работы.</p><Link href="/contact" className="button button-dark">Обсудить проект <span>↗</span></Link><div className="cta-asterisk">✳</div></div></section>
  </>;
}
