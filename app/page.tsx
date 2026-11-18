import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";

const services = [
  ["01", "Web Development", "High-performing websites, built around your business goals.", "/services/web-development", "↗"],
  ["02", "UI/UX Design", "Clear, intuitive experiences that make every interaction count.", "/services/ui-ux-design", "◈"],
  ["03", "SEO & Growth", "Get discovered by the people already looking for what you offer.", "/services/seo", "⌁"],
  ["04", "Digital Marketing", "Focused campaigns that turn attention into real enquiries.", "/services/digital-marketing", "◎"],
  ["05", "Brand Identity", "A distinctive identity that makes your business memorable.", "/services/branding", "✳"],
  ["06", "AI & Automation", "Smarter workflows that give your team time back.", "/services/ai-automation", "⌘"]
];

export default function Home() {
  return <>
    <section className="hero hero-new">
      <div className="hero-grid" />
      <div className="container hero-new-grid">
        <div className="hero-copy-new">
          <div className="eyebrow"><span className="status-dot"/> DIGITAL AGENCY FOR AMBITIOUS BUSINESSES</div>
          <h1>Your next website.<br/><span className="gradient-text">Without the risk.</span></h1>
          <p className="hero-lead">We design and build your website first. You review the finished result, and only pay when you’re happy with it.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">Start your free website <span>↗</span></Link>
            <Link href="/services/web-development" className="text-link">See how it works <span>→</span></Link>
          </div>
          <div className="risk-points">
            <span><i>✓</i> No upfront payment</span>
            <span><i>✓</i> Review before you pay</span>
            <span><i>✓</i> Your approval comes first</span>
          </div>
        </div>
        <div className="hero-showcase">
          <div className="showcase-backdrop"></div>
          <div className="showcase-window">
            <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>YOURBUSINESS.COM</span><b>↗</b></div>
            <div className="showcase-site">
              <div className="site-nav"><b>YOUR BRAND<span>.</span></b><div><i/><i/><i/></div><strong>LET’S TALK ↗</strong></div>
              <div className="site-content"><small>MADE FOR WHAT’S NEXT</small><h2>Make your<br/><em>business</em><br/>stand out.</h2><p>A clear message. A beautiful experience.<br/>A website built to move you forward.</p><span>DISCOVER MORE&nbsp; ↗</span></div>
              <div className="site-art"><div className="art-disc"/><div className="art-tile">01<br/><b>CREATE<br/>IMPACT.</b></div></div>
              <div className="site-bottom"><span>DESIGN / DEVELOPMENT</span><span>SCROLL TO EXPLORE ↓</span></div>
            </div>
          </div>
          <div className="float-note float-note-top"><span className="float-check">✓</span><div><b>Built before payment</b><small>See your website first</small></div></div>
          <div className="float-note float-note-bottom"><span className="float-spark">✳</span><div><b>Your approval matters</b><small>Pay only when you’re happy</small></div></div>
          <div className="showcase-caption">A BETTER WAY TO BUILD YOUR ONLINE PRESENCE / 001</div>
        </div>
      </div>
      <div className="container hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
    </section>

    <section className="trust-strip"><div className="container trust-strip-inner"><span>THE TOLVYXO PROMISE</span><b>No upfront payment.</b><i/><b>See it before you buy.</b><i/><b>Approve it. Then pay.</b></div></section>

    <section className="section-pad intro-section"><div className="container intro-grid"><span className="eyebrow">01 / A DIFFERENT APPROACH</span><div><h2>Why pay for a website<br/><span className="muted">you haven’t even seen?</span></h2><p>Traditional web design asks you to pay before you know exactly what you’ll get. We do it differently. We create your website, show you the result and give you the opportunity to review it before payment.</p><Link href="/contact" className="text-link">Start with no upfront payment <span>→</span></Link></div></div></section>

    <section className="how-section section-pad"><div className="container"><SectionHeading eyebrow="02 / SIMPLE BY DESIGN" title="From first idea to your approval." text="A straightforward process. No upfront payment. No guessing what the final website will look like."/><div className="steps-grid"><article><span>01</span><div className="step-icon">↗</div><h3>Tell us what you need</h3><p>Share your business, goals and the kind of website you have in mind.</p></article><article><span>02</span><div className="step-icon">◈</div><h3>We build your website</h3><p>We design and develop a tailored website around your business.</p></article><article><span>03</span><div className="step-icon">◎</div><h3>Review the result</h3><p>Explore the finished website and request agreed refinements.</p></article><article><span>04</span><div className="step-icon">✓</div><h3>Approve, then pay</h3><p>When you’re happy and approve the result, payment is due.</p></article></div></div></section>

    <section className="services-section section-pad"><div className="container"><SectionHeading eyebrow="03 / WHAT WE DO" title="Everything your digital presence needs." text="A connected set of services to help your business look better, work smarter and grow."/><div className="service-grid service-grid-new">{services.map(([num,title,desc,href,icon])=><Link href={href} className="service-card service-card-new" key={num}><span className="service-number">{num}</span><div className="service-icon">{icon}</div><div><h3>{title}</h3><p>{desc}</p></div><span className="arrow-circle">↗</span></Link>)}</div></div></section>

    <section className="feature-section section-pad"><div className="container feature-grid"><div className="feature-art feature-art-new"><div className="process-board"><div className="board-top"><span>PROJECT WORKSPACE</span><b>IN PROGRESS <i/></b></div><div className="board-title">Your idea,<br/><em>taking shape.</em></div><div className="board-progress"><span>DESIGN</span><i><b/></i><strong>READY FOR REVIEW</strong></div><div className="board-cards"><div><small>01 / STRUCTURE</small><b>Clear direction</b></div><div><small>02 / VISUALS</small><b>Made for you</b></div><div><small>03 / BUILD</small><b>Ready to review</b></div></div></div><div className="feature-stamp">NO<br/>UPFRONT<span>✓</span></div></div><div className="feature-copy"><span className="eyebrow">04 / THE TOLVYXO DIFFERENCE</span><h2>See what you’re getting. Before you pay.</h2><p>We believe good work should speak for itself. That’s why our website process puts the finished result in front of you before payment is due.</p><ul className="check-list"><li>We agree on the scope before work begins</li><li>You get to review the completed website</li><li>Payment is due only after your approval</li><li>Domain, hosting and paid third-party services are separate where applicable</li></ul><Link href="/contact" className="text-link">Let’s discuss your website <span>→</span></Link></div></div></section>

    <section className="work-section section-pad"><div className="container"><SectionHeading eyebrow="05 / THE WORK" title="Thoughtful digital experiences." text="A preview of the design quality and direction we aim to bring to every project."/><div className="work-grid"><Link href="/portfolio" className="work-card"><div className="work-visual visual-one"><div className="mock-browser"><div className="browser-dots"><i/><i/><i/></div><div className="mock-title">A clearer<br/><em>way forward.</em></div><div className="mock-button">DISCOVER MORE ↗</div><div className="mock-shape"/></div></div><div className="work-meta"><div><h3>Digital experiences</h3><p>Web design · Development</p></div><span>↗</span></div></Link><Link href="/portfolio" className="work-card"><div className="work-visual visual-two"><div className="brand-poster"><span>FORM / FUNCTION</span><b>Make<br/>it matter.</b><i>BRAND SYSTEM — 2026</i></div></div><div className="work-meta"><div><h3>Brand systems</h3><p>Identity · Art direction</p></div><span>↗</span></div></Link></div><p className="demo-note">Concept visuals shown for presentation purposes, not completed client projects.</p></div></section>

    <section className="promise-banner"><div className="container promise-inner"><span className="eyebrow eyebrow-light">THE TOLVYXO PROMISE</span><h2>Good work earns your trust.<br/><em>Not an upfront invoice.</em></h2><p>Get your website designed and built first. Pay only after you’ve reviewed and approved the result.</p><Link href="/contact" className="button button-white">Start your free website <span>↗</span></Link><div className="promise-ring"/></div></section>
  </>;
}
