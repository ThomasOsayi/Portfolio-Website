import Motion from '@/components/Motion';
import { clients, experience, products, ringWords, stackCards } from '@/data/projects';
import { CALENDLY_URL } from '@/data/inquiry';

const EMAIL = 'thomasosayi@gmail.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Thomas Osayi',
  url: 'https://thomasosayi.com',
  jobTitle: 'Full-Stack Developer',
  alumniOf: 'Loyola Marymount University',
  sameAs: ['https://www.linkedin.com/in/thomas-osayi', 'https://github.com/ThomasOsayi', 'https://joinsqwad.com'],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#about">Skip to content</a>
      <div className="cursor" aria-hidden="true"><span>View</span></div>
      <div className="cursor-dot" aria-hidden="true" />

      <div className="loader" aria-hidden="true">
        <div className="label">Thomas Osayi · Portfolio 2026</div>
        <div>
          <div className="loader-count">000</div>
          <div className="loader-bar"><i /></div>
        </div>
      </div>
      <div className="wipe" aria-hidden="true" />

      <nav className="nav gutter" aria-label="Main">
        <a href="#top" className="brand" data-link>THOMAS OSAYI</a>
        <div className="nav-meta">
          <span><span className="dot" />Open to projects</span>
          <span>LA <span id="clock">--:--</span></span>
        </div>
        <div className="nav-links">
          <a href="#work" data-link>Work</a>
          <a href="#about" data-link>About</a>
          <a href="#stack" data-link>Stack</a>
          <a href="/start">Hire me</a>
        </div>
      </nav>

      <main>
        <section className="hero gutter" id="top">
          <h1 className="sr-only">Thomas Osayi, Full-Stack Developer and Entrepreneur</h1>
          <div className="hero-stage" data-nocursor />
          <div className="hero-foot">
            <div className="hero-role">Full-Stack Developer<br />&amp; <em>Entrepreneur</em></div>
            <div className="material">
              <button type="button" id="mat-prev" aria-label="Previous material">←</button>
              <span className="material-name" id="mat-name" aria-live="polite">Liquid metal · 01/11</span>
              <button type="button" id="mat-next" aria-label="Next material">→</button>
            </div>
            <p className="hero-line">Building at the intersection of code and commerce. Tap the name to change its material.</p>
          </div>
        </section>

        <section className="statement gutter" id="about">
          <p className="reveal-words">
            I&apos;m a CS student at LMU who builds full-stack products and runs a business on the side. *SQWAD,* the *HoopGang* creator portal, the *NOM* app and a run of sites for LA businesses, all shipped while carrying a *full* course load.
          </p>
          <div className="facts">
            <div className="fact"><b data-count="8">8</b><span>Products and client sites shipped</span></div>
            <div className="fact"><b data-count="500" data-prefix="$" data-suffix="K+">$500K+</b><span>Creator-attributed revenue tracked on SQWAD</span></div>
            <div className="fact"><b data-count="50" data-suffix="+">50+</b><span>Creators managed on the HoopGang portal</span></div>
          </div>
        </section>

        <section className="products" id="work">
          <div className="pin">
            <div className="products-head gutter">
              <h2 className="h2 split">Products <em>I build</em></h2>
              <span className="label">Scroll · {String(products.length).padStart(2, '0')} products</span>
            </div>
            <div className="track">
              {products.map((p) => {
                const media =
                  p.kind === 'nom' ? (
                    <div className="card-media">
                      <div className="nom-art">
                        <div>
                          <span className="label" style={{ color: '#fff7ef' }}>{p.tag}</span>
                          <strong>NOM</strong>
                          <p>Find food your friends actually rate.</p>
                        </div>
                        <div className="phone">
                          <video muted loop playsInline preload="none" poster="/work/nom-poster.jpg" data-autoplay aria-label="Screen recording of the NOM app feed">
                            <source src="/work/nom.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.alt} loading="lazy" />
                    </div>
                  );
                const meta = (
                  <>
                    <div className="card-meta">
                      <span className="card-title">{p.title}</span>
                      <span className="label">{p.urlLabel ? `${p.urlLabel} ↗` : p.tag}</span>
                    </div>
                    <p className="card-desc">{p.desc}</p>
                  </>
                );
                return p.url ? (
                  <a className="card" key={p.title} href={p.url} target="_blank" rel="noopener" data-cursor="Visit">
                    {media}
                    {meta}
                  </a>
                ) : (
                  <div className="card" key={p.title}>
                    {media}
                    {meta}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="light-act">
          <section className="clients gutter" id="clients">
            <h2 className="h2 split">Client <em>work</em></h2>
            <div className="index">
              {clients.map((c, i) => (
                <a className="row" key={c.url} href={c.url} target="_blank" rel="noopener" data-img={c.image} data-cursor="Visit">
                  <span className="row-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="row-name">{c.name} <em>{c.accent}</em></span>
                  <span className="row-kind">{c.desc}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="experience gutter" id="experience">
            <h2 className="h2 split">Experience</h2>
            <div className="xp">
              {experience.map((r) => (
                <div className="xp-row" key={r.org}>
                  <span className="xp-when">{r.when}</span>
                  <span className="xp-org">{r.org}<small>{r.role}</small></span>
                  <p className="xp-what">{r.what}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="stack gutter" id="stack">
          <h2 className="h2 split">The <em>stack</em></h2>
          <div className="ring-wrap" aria-hidden="true"><div className="ring" id="ring" data-words={ringWords.join('|')} /></div>
          <p className="ring-static">{ringWords.join(' · ')}</p>
          <div className="cards">
            {stackCards.map((s, i) => (
              <article className="skill" key={s.title} style={{ ['--i' as string]: i, background: s.bg, color: s.fg }}>
                <span className="label">{s.label}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact gutter" id="contact">
          <span className="label">Contact · Open to new projects</span>
          <h2 className="big-cta split">Let&apos;s <em>build</em><br />something.</h2>
          <div className="contact-row">
            <a className="magnet" href="/start" data-magnetic data-cursor-link><span>Start a<br />project</span></a>
            <div className="links">
              <a href={CALENDLY_URL} target="_blank" rel="noopener" data-cursor-link>Book a 30 min call ↗</a>
              <button type="button" id="copy-email" data-cursor-link>{EMAIL}</button>
              <a href="https://www.linkedin.com/in/thomas-osayi" target="_blank" rel="noopener" data-cursor-link>LinkedIn ↗</a>
              <a href="https://github.com/ThomasOsayi" target="_blank" rel="noopener" data-cursor-link>GitHub ↗</a>
              <span className="copied" id="copied" hidden>Email copied</span>
            </div>
          </div>
          <footer className="foot">
            <span className="label">© 2026 Thomas Osayi</span>
            <span className="label">Los Angeles · LMU</span>
          </footer>
        </section>
      </main>
      <Motion />
    </>
  );
}
