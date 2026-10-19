import { ArrowUpRight, Check, Clock3, LockKeyhole, Menu, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  { icon: Clock3, title: "Fast decisions", text: "Get a clear answer in minutes, not days." },
  { icon: ShieldCheck, title: "Built for trust", text: "Transparent terms with no hidden surprises." },
  { icon: LockKeyhole, title: "Secure by design", text: "Your information stays protected at every step." },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="TurboCredit home">
          <span className="brand-mark">T</span>
          <span>Turbo<span>Credit</span></span>
        </a>
        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#why-turbo">Why TurboCredit</a>
          <a href="#support">Support</a>
        </div>
        <div className="nav-actions">
          <a className="login-link" href="#login">Log in</a>
          <a className="button button-small" href="#apply">Get started <ArrowUpRight size={16} /></a>
        </div>
        <button className="menu-button" aria-label="Open menu"><Menu size={21} /></button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> Credit that moves with you</div>
          <h1>Move forward.<br /><em>Faster.</em></h1>
          <p className="hero-text">Simple, flexible credit for the moments that matter. Apply in minutes and get the breathing room you need, without the runaround.</p>
          <div className="hero-actions">
            <a className="button" href="#apply">Check your eligibility <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#how-it-works">See how it works <span>→</span></a>
          </div>
          <div className="trust-note"><span className="trust-dots"><i /><i /><i /></span> Trusted by 50,000+ people across Nigeria</div>
        </div>
        <div className="hero-visual" aria-label="Credit dashboard preview">
          <div className="glow" />
          <div className="credit-card card-back"><span>TurboCredit</span><b>₦</b></div>
          <div className="credit-card card-front">
            <div className="card-top"><span>TurboCredit</span><span className="chip">•••</span></div>
            <div className="card-number">•••• &nbsp;•••• &nbsp;•••• &nbsp;2048</div>
            <div className="card-bottom"><span>EMMANUEL O.</span><span>09/28</span></div>
          </div>
          <div className="balance-widget"><span>Available credit</span><strong>₦250,000</strong><div className="progress"><span /></div><small>₦100,000 used of ₦350,000</small></div>
          <div className="approved-pill"><span><Check size={14} /></span> Application approved</div>
        </div>
      </section>

      <section className="benefits" id="why-turbo">
        {benefits.map(({ icon: Icon, title, text }) => <article className="benefit" key={title}><div className="benefit-icon"><Icon size={19} /></div><div><h2>{title}</h2><p>{text}</p></div></article>)}
      </section>

      <section className="steps" id="how-it-works"><div><p className="section-label">Straightforward by design</p><h2>Credit without<br /><span>the complexity.</span></h2></div><div className="step-list"><div><b>01</b><p><strong>Tell us a little about yourself</strong><br />A quick application, no paperwork pile-up.</p></div><div><b>02</b><p><strong>Get a decision in minutes</strong><br />We review your details fairly and securely.</p></div><div><b>03</b><p><strong>Take control of your next move</strong><br />Access your funds and keep moving forward.</p></div></div></section>

      <section className="cta" id="apply"><div><p className="section-label">Your next chapter starts here</p><h2>Ready when<br /><em>you are.</em></h2></div><a className="button button-light" href="#top">Start your application <ArrowUpRight size={18} /></a></section>
      <footer id="support"><span className="brand"><span className="brand-mark">T</span><span>Turbo<span>Credit</span></span></span><span>© 2026 TurboCredit. Credit made simple.</span><span>Privacy &nbsp; Terms &nbsp; Help centre</span></footer>
    </main>
  );
}
