import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";

const services = [
  ["01", "Разработка сайтов", "Современные сайты, созданные под задачи вашего бизнеса.", "/services/web-development", "↗"],
  ["02", "UI/UX-дизайн", "Понятный и удобный интерфейс для ваших клиентов.", "/services/ui-ux-design", "◈"],
  ["03", "SEO и продвижение", "Помогаем клиентам находить ваш бизнес в поиске.", "/services/seo", "⌁"],
  ["04", "Интернет-маркетинг", "Привлекаем внимание и превращаем его в заявки.", "/services/digital-marketing", "◎"],
  ["05", "Фирменный стиль", "Создаём узнаваемый образ вашего бизнеса.", "/services/branding", "✳"],
  ["06", "ИИ и автоматизация", "Упрощаем процессы и экономим время вашей команды.", "/services/ai-automation", "⌘"]
];

export default function Home() {
  return <>
    <section className="hero hero-new">
      <div className="hero-grid" />
      <div className="container hero-new-grid">
        <div className="hero-copy-new">
          <div className="eyebrow"><span className="status-dot"/> ЦИФРОВОЕ АГЕНТСТВО ДЛЯ РАСТУЩЕГО БИЗНЕСА</div>
          <h1>Ваш новый сайт.<br/><span className="gradient-text">Без риска.</span></h1>
          <p className="hero-lead">Сначала мы создаём ваш сайт. Вы оцениваете готовый результат и платите только тогда, когда он вам нравится.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">Заказать сайт без предоплаты <span>↗</span></Link>
            <Link href="/services/web-development" className="text-link">Как это работает <span>→</span></Link>
          </div>
          <div className="risk-points">
            <span><i>✓</i> Без предоплаты</span>
            <span><i>✓</i> Сначала проверка — потом оплата</span>
            <span><i>✓</i> Вы решаете, подходит ли результат</span>
          </div>
        </div>
        <div className="hero-showcase motion-showcase">
          <div className="motion-halo halo-a"></div><div className="motion-halo halo-b"></div>
          <div className="motion-browser browser-main">
            <div className="motion-browser-bar"><div className="motion-dots"><i/><i/><i/></div><span>ВАШБИЗНЕС.ЕЕ</span><b>↗</b></div>
            <div className="motion-site">
              <div className="motion-site-nav"><b>ВАШ БРЕНД<span>.</span></b><div><i/><i/><i/></div><strong>ОБСУДИТЬ ↗</strong></div>
              <div className="motion-site-body"><small>СОЗДАНО ДЛЯ РОСТА</small><h2>Выделите<br/><em>свой бизнес</em><br/>среди других.</h2><p>Понятная подача. Удобный интерфейс.<br/>Сайт, который помогает развиваться.</p><span>УЗНАТЬ БОЛЬШЕ&nbsp; ↗</span></div>
              <div className="motion-site-art"><div className="motion-sphere"></div><div className="motion-art-card">01<br/><b>CREATE<br/>IMPACT.</b></div></div>
              <div className="motion-site-footer"><span>ДИЗАЙН / РАЗРАБОТКА</span><span>ЛИСТАЙТЕ ВНИЗ ↓</span></div>
            </div>
          </div>
          <div className="motion-code-card">
            <div className="motion-card-head"><span><i/> ПРЕДПРОСМОТР</span><b>● СОЗДАЁТСЯ</b></div>
            <div className="code-lines"><i><b>01</b><span><em>const</em> website = {'{'}</span></i><i><b>02</b><span> design: <strong>"для вашего бизнеса"</strong>,</span></i><i><b>03</b><span> performance: <strong>"оптимизировано"</strong>,</span></i><i><b>04</b><span> experience: <strong>"удобно"</strong></span></i><i><b>05</b><span>{'}'}</span></i></div>
            <div className="code-progress"><span></span></div>
          </div>
          <div className="motion-score-card">
            <div className="score-top"><span>ПОКАЗАТЕЛЬ SEO</span><b>↗</b></div>
            <div className="score-number"><strong className="count-up">98</strong><small>/100</small></div>
            <div className="score-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
            <small>ГОТОВ К ПРОДВИЖЕНИЮ</small>
          </div>
          <div className="motion-approval"><span className="approval-check">✓</span><div><b>Готово к проверке</b><small>Одобрите — затем оплатите.</small></div><span className="approval-pulse"></span></div>
          <div className="showcase-caption">ДИЗАЙН / РАЗРАБОТКА / GROWTH — 001</div>
        </div>
      </div>
      <div className="container hero-bottom"><span>ПРОКРУТИТЕ ВНИЗ</span><span className="scroll-line"/></div>
    </section>

    <section className="trust-strip"><div className="trust-marquee" aria-hidden="true"><div className="trust-marquee-track"><span>БЕЗ ПРЕДОПЛАТЫ ✳ СНАЧАЛА ГОТОВЫЙ САЙТ ✳ ОПЛАТА ПОСЛЕ ОДОБРЕНИЯ ✳ БЕЗ ПРЕДОПЛАТЫ ✳ СНАЧАЛА ГОТОВЫЙ САЙТ ✳ ОПЛАТА ПОСЛЕ ОДОБРЕНИЯ ✳</span><span>БЕЗ ПРЕДОПЛАТЫ ✳ СНАЧАЛА ГОТОВЫЙ САЙТ ✳ ОПЛАТА ПОСЛЕ ОДОБРЕНИЯ ✳ БЕЗ ПРЕДОПЛАТЫ ✳ СНАЧАЛА ГОТОВЫЙ САЙТ ✳ ОПЛАТА ПОСЛЕ ОДОБРЕНИЯ ✳</span></div></div><div className="container trust-strip-inner"><span>НАШЕ ОБЕЩАНИЕ</span><b>Без предоплаты.</b><i/><b>Сначала увидьте результат.</b><i/><b>Одобрите — затем оплатите.</b></div></section>

    <section className="section-pad intro-section"><div className="container intro-grid"><span className="eyebrow">01 / ДРУГОЙ ПОДХОД</span><div><h2>Зачем платить за сайт,<br/><span className="muted">который вы ещё не видели?</span></h2><p>При обычной разработке вы платите, ещё не зная, каким будет результат. Мы работаем иначе: сначала создаём сайт, показываем его вам и даём возможность всё проверить до оплаты.</p><Link href="/contact" className="text-link">Начать без предоплаты <span>→</span></Link></div></div></section>

    <section className="how-section section-pad"><div className="container"><SectionHeading eyebrow="02 / ПРОСТОЙ ПРОЦЕСС" title="От первой идеи до вашего одобрения." text="A straightforward process. Без предоплаты. No guessing what the final website will look like."/><div className="steps-grid"><article><span>01</span><div className="step-icon">↗</div><h3>Расскажите о задаче</h3><p>Расскажите о бизнесе, целях и о том, каким вы видите свой сайт.</p></article><article><span>02</span><div className="step-icon">◈</div><h3>Мы создаём ваш сайт</h3><p>Разрабатываем дизайн и сайт с учётом особенностей вашего бизнеса.</p></article><article><span>03</span><div className="step-icon">◎</div><h3>Оцените результат</h3><p>Посмотрите готовый сайт и предложите согласованные правки.</p></article><article><span>04</span><div className="step-icon">✓</div><h3>Одобрите — затем оплатите</h3><p>Оплата производится только после того, как вы одобрите результат.</p></article></div></div></section>

    <section className="services-section section-pad"><div className="container"><SectionHeading eyebrow="03 / ЧТО МЫ ДЕЛАЕМ" title="Всё необходимое для вашего присутствия в интернете." text="Комплекс цифровых услуг, который помогает бизнесу выглядеть профессионально и расти."/><div className="service-grid service-grid-new">{services.map(([num,title,desc,href,icon])=><Link href={href} className="service-card service-card-new" key={num}><span className="service-number">{num}</span><div className="service-icon">{icon}</div><div><h3>{title}</h3><p>{desc}</p></div><span className="arrow-circle">↗</span></Link>)}</div></div></section>

    <section className="feature-section section-pad"><div className="container feature-grid"><div className="feature-art feature-art-new"><div className="process-board"><div className="board-top"><span>PROJECT WORKSPACE</span><b>IN PROGRESS <i/></b></div><div className="board-title">Your idea,<br/><em>taking shape.</em></div><div className="board-progress"><span>DESIGN</span><i><b/></i><strong>READY FOR REVIEW</strong></div><div className="board-cards"><div><small>01 / STRUCTURE</small><b>Clear direction</b></div><div><small>02 / VISUALS</small><b>Made for you</b></div><div><small>03 / BUILD</small><b>Ready to review</b></div></div></div><div className="feature-stamp">NO<br/>UPFRONT<span>✓</span></div></div><div className="feature-copy"><span className="eyebrow">04 / ПРЕИМУЩЕСТВО TOLVYXO</span><h2>Сначала увидьте результат. Потом платите.</h2><p>Мы уверены, что качество работы говорит само за себя. Поэтому вы сначала видите готовый сайт, а уже потом принимаете решение об оплате.</p><ul className="check-list"><li>До начала работы согласовываем объём и задачи</li><li>Вы проверяете готовый сайт</li><li>Оплата — только после вашего одобрения</li><li>Домен, хостинг и платные сторонние сервисы оплачиваются отдельно, если применимо</li></ul><Link href="/contact" className="text-link">Обсудить ваш сайт <span>→</span></Link></div></div></section>

    <section className="work-section section-pad"><div className="container"><SectionHeading eyebrow="05 / ПОРТФОЛИО" title="Продуманные цифровые решения." text="Примеры визуального направления и качества, к которому мы стремимся в каждом проекте."/><div className="work-grid"><Link href="/portfolio" className="work-card"><div className="work-visual visual-one"><div className="mock-browser"><div className="browser-dots"><i/><i/><i/></div><div className="mock-title">Понятный<br/><em>путь вперёд.</em></div><div className="mock-button">ПОДРОБНЕЕ ↗</div><div className="mock-shape"/></div></div><div className="work-meta"><div><h3>Цифровые решения</h3><p>Веб-дизайн · Разработка</p></div><span>↗</span></div></Link><Link href="/portfolio" className="work-card"><div className="work-visual visual-two"><div className="brand-poster"><span>FORM / FUNCTION</span><b>Создавайте<br/>значимое.</b><i>ФИРМЕННЫЙ СТИЛЬ — 2026</i></div></div><div className="work-meta"><div><h3>Фирменный стиль</h3><p>Айдентика · Арт-дирекшн</p></div><span>↗</span></div></Link></div><p className="demo-note">Концепты для демонстрации возможностей, а не завершённые клиентские проекты.</p></div></section>

    <section className="promise-banner"><div className="container promise-inner"><span className="eyebrow eyebrow-light">НАШЕ ОБЕЩАНИЕ</span><h2>Доверие начинается с результата.<br/><em>А не с предоплаты.</em></h2><p>Сначала мы создаём сайт. Вы проверяете его и платите только после одобрения.</p><Link href="/contact" className="button button-white">Заказать сайт без предоплаты <span>↗</span></Link><div className="promise-ring"/></div></section>
  </>;
}
