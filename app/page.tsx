import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";

const services = [
  ["01", "Web Development", "Fast, conversion-focused websites built to turn attention into action.", "/services/web-development"],
  ["02", "UI/UX Design", "Clear, intuitive digital experiences designed around real people.", "/services/ui-ux-design"],
  ["03", "Digital Marketing", "Campaigns that put your brand in front of the right audience.", "/services/digital-marketing"],
  ["04", "SEO & Growth", "A stronger search presence and a practical path to sustainable growth.", "/services/seo"],
  ["05", "Brand Identity", "A distinctive visual system that makes your business recognisable.", "/services/branding"],
  ["06", "AI & Automation", "Smarter workflows that reduce repetitive work and create room to grow.", "/services/ai-automation"]
];
export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot"/> DIGITAL AGENCY · ESTONIA & BEYOND</span>
          <h1>Make your<br/>digital presence<br/><span className="gradient-text">work harder.</span></h1>
          <p className="hero-lead">We design, build and grow digital experiences that help ambitious businesses move forward.</p>
          <div className="hero-actions"><Link href="/contact" className="button button-primary">Start a project <span>↗</span></Link><Link href="/services/web-development" className="text-link">Explore what we do <span>→</span></Link></div>
          <div className="hero-proof"><div className="proof-line"/><span>Strategy · Design · Technology · Growth</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract TOLVYXO crystal mark">
          <div className="visual-glow"/><div className="crystal crystal-back"/><div className="crystal crystal-main"><div className="crystal-face face-one"/><div className="crystal-face face-two"/><div className="crystal-face face-three"/><span className="crystal-letter">T</span></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="floating-card card-top"><span className="mini-icon">↗</span><div><b>Built for growth</b><small>Digital, done with purpose</small></div></div>
          <div className="floating-card card-bottom"><span className="mini-bars"><i/><i/><i/><i/></span><div><b>Clarity meets impact</b><small>From first click to conversion</small></div></div>
          <span className="visual-caption">T / 001 — DIGITAL SYSTEMS</span>
        </div>
      </div>
      <div className="container hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
    </section>
    <section className="intro-section section-pad"><div className="container intro-grid"><span className="eyebrow">01 / THE APPROACH</span><div><h2>Good design gets attention.<br/><span className="muted">Good digital thinking gets results.</span></h2><p>We bring strategy, design and development together to create digital foundations that look sharp, feel effortless and support real business goals.</p></div></div></section>
    <section className="services-section section-pad"><div className="container"><SectionHeading eyebrow="02 / WHAT WE DO" title="Everything your digital presence needs." text="One connected approach — from the first idea to measurable growth."/><div className="service-grid">{services.map(([num,title,desc,href])=><Link href={href} className="service-card" key={num}><span className="service-number">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="arrow-circle">↗</span></Link>)}</div></div></section>
    <section className="feature-section section-pad"><div className="container feature-grid"><div className="feature-art"><div className="dashboard-card"><div className="dash-top"><span/><span/><span/><b>PERFORMANCE OVERVIEW</b></div><div className="dash-metric"><small>Digital momentum</small><strong>+128%</strong><span>↗ Growth potential</span></div><div className="chart-bars">{[35,52,44,68,58,78,66,92,75,100,84,112].map((h,i)=><i key={i} style={{height:`${h}px`}}/>)}</div><div className="dash-footer"><span>STRATEGY</span><span>DESIGN</span><span>DEVELOPMENT</span></div></div><div className="feature-stamp">THINK<br/>FORWARD<span>✳</span></div></div><div className="feature-copy"><span className="eyebrow">03 / WHY TOLVYXO</span><h2>Not just another website. A better way to move forward.</h2><p>Digital work should solve real problems. We focus on the details that matter: clear messaging, considered user journeys, reliable technology and a strategy built around your goals.</p><ul className="check-list"><li>One partner across strategy, design and development</li><li>Clear communication and practical decisions</li><li>Built to be fast, flexible and ready to scale</li></ul><Link href="/about" className="text-link">Get to know us <span>→</span></Link></div></div></section>
    <section className="work-section section-pad"><div className="container"><div className="work-heading"><SectionHeading eyebrow="04 / SELECTED WORK" title="Ideas made tangible." text="A preview of the kind of digital experiences we create."/></div><div className="work-grid"><Link href="/portfolio" className="work-card work-one"><div className="work-visual visual-one"><div className="mock-browser"><div className="browser-dots"><i/><i/><i/></div><div className="mock-title">A clearer<br/><em>way forward.</em></div><div className="mock-button">DISCOVER MORE ↗</div><div className="mock-shape"/></div></div><div className="work-meta"><div><h3>Digital experiences</h3><p>Web design · Development</p></div><span>↗</span></div></Link><Link href="/portfolio" className="work-card work-two"><div className="work-visual visual-two"><div className="brand-poster"><span>FORM / FUNCTION</span><b>Make<br/>it matter.</b><i>BRAND SYSTEM  —  2026</i></div></div><div className="work-meta"><div><h3>Brand systems</h3><p>Identity · Art direction</p></div><span>↗</span></div></Link></div><p className="demo-note">Concept visuals shown for presentation purposes.</p></div></section>
    <ContactCTA/>
  </>;
}
