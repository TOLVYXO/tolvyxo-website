import Link from "next/link";
export default function ContactCTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">HAVE A PROJECT IN MIND?</span><h2>Let’s make your next move<br/><em>your best one.</em></h2></div><Link href="/contact" className="button button-white">Start a project <span>↗</span></Link><div className="cta-orb" /></div></section>;
}
