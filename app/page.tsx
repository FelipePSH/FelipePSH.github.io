import Image from "next/image";
import { Counter, FilmPlayer, Reveal } from "./ui";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/felipepsh/",
  github: "https://github.com/FelipePSH",
  email: "felipe.au.pereira.santos@gmail.com",
};

// Logos render as one-colour silhouettes via CSS; companies without a usable logo file get a wordmark.
const COMPANIES: { name: string; logo?: string; h?: number }[] = [
  { name: "Santander", logo: "/logos/santander.svg", h: 30 },
  { name: "Inmetrics", logo: "/logos/inmetrics.svg", h: 30 },
  { name: "Involves", logo: "/logos/involves.png", h: 30 },
  { name: "Revelo", logo: "/logos/revelo.svg", h: 36 },
  { name: "ADE SAMPA", logo: "/logos/ade.png", h: 40 },
  { name: "Syntion AI" },
  { name: "Nortech Labs" },
];

const CAREER = [
  { year: "2014", place: "First line of code", text: "Started studying app development at 15. Never stopped shipping since." },
  { year: "2019", place: "IT startup", text: "First professional role: building and maintaining production apps from day one." },
  { year: "", place: "Inmetrics", text: "Engineering for large enterprise clients in Brazil." },
  { year: "", place: "Santander", text: "Mobile Blue Team. Finding and fixing vulnerabilities in banking apps used by millions." },
  { year: "", place: "Involves", text: "Product engineering at a retail-execution SaaS startup." },
  { year: "", place: "Moved to Australia", text: "New country, same craft." },
  { year: "", place: "Syntion AI", text: "AI-powered tooling to optimise business operations." },
  { year: "Now", place: "Nortech Labs", text: "Building ventures for the digital economy." },
];

function Label({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`label ${dark ? "label-dark" : ""}`}>{children}</p>;
}

function Phone({ src, tone }: { src: string; tone?: "muted" }) {
  return (
    <div className={`phone ${tone ?? ""}`}>
      <video src={src} poster={src.replace(".mp4", ".jpg")} muted loop autoPlay playsInline preload="metadata" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="bar">
          <a href="#top" className="brand">
            <span className="mark">FS</span> Felipe Santos
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#career">Career</a>
            <a href="#about">About</a>
          </div>
          <a className="btn btn-grad btn-sm" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="mesh" aria-hidden />
          <div className="grain" aria-hidden />
          <div className="col col-dark hero-inner">
            <div className="hero-grid">
              <div className="hero-copy">
                <Reveal>
                  <Label dark>Mobile engineer · Based in Australia</Label>
                </Reveal>
                <Reveal delay={80}>
                  <h1>
                    I build the apps
                    <br />
                    people <span className="grad-text">rely on.</span>
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="lede">
                    7+ years shipping Android and iOS products across fintech, logistics, healthcare and SaaS — from
                    Santander&apos;s mobile security team in Brazil to startups in Australia.
                  </p>
                </Reveal>
                <Reveal delay={240} className="ctas">
                  <a className="btn btn-grad" href="#work">See my work</a>
                  <a className="link-arrow" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
                </Reveal>
              </div>
              <Reveal delay={200} className="hero-photo">
                <div className="hero-photo-glow" aria-hidden />
                <div className="hero-photo-frame">
                  <div className="hero-photo-inner">
                    <Image src="/photos/felipe-portrait.jpg" alt="Felipe Pereira dos Santos" fill priority sizes="(max-width: 900px) 70vw, 420px" />
                  </div>
                </div>
                <div className="hero-chip">
                  <span className="dot" /> Felipe Pereira dos Santos
                </div>
              </Reveal>
            </div>
            <Reveal delay={320} className="hero-film">
              <FilmPlayer />
            </Reveal>
          </div>
        </section>

        {/* Logos */}
        <section className="col logos-section">
          <span className="cross tl" /><span className="cross tr" />
          <Label>Where I&apos;ve worked &amp; contributed</Label>
          <div className="marquee" aria-label="Companies">
            <div className="track">
              {[...COMPANIES, ...COMPANIES].map((c, k) => (
                <div className="logo" key={k} aria-hidden={k >= COMPANIES.length}>
                  {c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.logo} alt={c.name} style={{ height: c.h }} />
                  ) : (
                    <span className="wordmark">{c.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="col stats">
          {[
            { n: <Counter to={7} suffix="+" />, l: "Years shipping apps" },
            { n: <Counter to={50} prefix="US$" suffix="M+" />, l: "Moved through Swaparoo" },
            { n: <Counter to={25000} suffix="+" />, l: "Transfers delivered" },
            { n: <Counter to={2} />, l: "Countries, one craft" },
          ].map((s, k) => (
            <Reveal key={k} delay={k * 80} className="stat">
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </Reveal>
          ))}
        </section>

        {/* Work */}
        <section id="work" className="col section">
          <Reveal>
            <Label>Selected work</Label>
            <h2>Products in the hands of real users.</h2>
          </Reveal>

          <article className="case">
            <Reveal className="case-copy">
              <p className="case-tag">Fintech · iOS</p>
              <h3>Swaparoo</h3>
              <p>
                Global payments between Australia and Brazil, powered by stablecoins. Live exchange rates, AUD ↔ BRL ↔
                USDC transfers, beneficiaries and real-time tracking — in a few taps.
              </p>
              <ul className="facts">
                <li><b>US$50M+</b> processed</li>
                <li><b>25,000+</b> transfers</li>
                <li><b>5,000+</b> users</li>
              </ul>
              <a className="link-arrow dark" href="https://swaparoo.app" target="_blank" rel="noreferrer">swaparoo.app →</a>
            </Reveal>
            <Reveal delay={120} className="case-visual green">
              <Phone src="/videos/swaparoo-app.mp4" />
            </Reveal>
          </article>

          <article className="case reverse">
            <Reveal className="case-copy">
              <p className="case-tag">Logistics · Android → iOS</p>
              <h3>Boomerang</h3>
              <p>
                A delivery app for last-mile drivers, reimagined. Live route maps with 200+ stops, one-tap
                re-optimisation, label scanning and a stop-by-stop delivery flow — replacing a slow, manual legacy app.
              </p>
              <ul className="facts">
                <li><b>200+</b> stops per route</li>
                <li><b>1 tap</b> re-optimise</li>
                <li><b>Scan</b> to add parcels</li>
              </ul>
            </Reveal>
            <Reveal delay={120} className="case-visual blue">
              <div className="before-after">
                <figure>
                  <Phone src="/videos/before.mp4" tone="muted" />
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  <Phone src="/videos/after.mp4" />
                  <figcaption className="accent">After</figcaption>
                </figure>
              </div>
            </Reveal>
          </article>
        </section>

        {/* Career */}
        <section id="career" className="col section career">
          <span className="cross tl" /><span className="cross tr" />
          <Reveal className="career-head">
            <Label>Career</Label>
            <h2>From Brazil to Australia, one shipped app at a time.</h2>
            <div className="badges">
              <span className="badge">✦ Published author on Revelo</span>
              <span className="badge">✦ 2 projects backed by VAI TEC · ADE SAMPA</span>
            </div>
          </Reveal>
          <ol className="timeline">
            {CAREER.map((c, k) => (
              <Reveal key={c.place} delay={k * 40}>
                <li>
                  <span className="t-num">{String(k + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="t-place">
                      {c.place} {c.year && <span className="t-year">{c.year}</span>}
                    </p>
                    <p className="t-text">{c.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" className="col section about">
          <Reveal className="about-photos">
            <div className="photo big">
              <Image src="/photos/felipe-seated.jpg" alt="Felipe Pereira dos Santos" fill sizes="(max-width: 720px) 90vw, 40vw" />
            </div>
            <div className="photo small">
              <Image src="/photos/felipe-portrait.jpg" alt="Portrait of Felipe" fill sizes="200px" />
            </div>
          </Reveal>
          <Reveal delay={120} className="about-copy">
            <Label>About</Label>
            <h2>Hi, I&apos;m Felipe.</h2>
            <p>
              I&apos;m a mobile engineer from Brazil, now building in Australia. I care about the details users never
              notice — security, speed, clarity — because that&apos;s what makes them trust an app with their money or
              their workday.
            </p>
            <p>
              Most at home in Kotlin and Jetpack Compose, with Clean Architecture and Firebase as my defaults, and
              comfortable shipping across Android and iOS.
            </p>
            <div className="chips">
              {["Kotlin", "Jetpack Compose", "Clean Architecture", "Firebase", "Android", "iOS", "Mobile security"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section className="hero contact">
          <div className="mesh" aria-hidden />
          <div className="grain" aria-hidden />
          <div className="col col-dark contact-inner">
            <Reveal>
              <Label dark>Contact</Label>
              <h2>Let&apos;s build the next one.</h2>
              <p className="lede">Open to roles and projects where mobile is the product.</p>
            </Reveal>
            <Reveal delay={120} className="ctas">
              <a className="btn btn-grad" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
              <span className="email">{LINKS.email}</span>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="col footer">
        <span>© 2026 Felipe Pereira dos Santos</span>
        <span>Brazil → Australia</span>
      </footer>
    </>
  );
}
