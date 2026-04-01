'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TextReveal, FadeUp, ZoomTransition, HorizontalScroll,
  ScaleTransition, ClipReveal, useVelocitySkew,
} from '@/components/scroll';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useVelocitySkew();

  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-[clamp(24px,4vw,64px)] py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-[1.1rem] font-extrabold tracking-tight uppercase text-white">Thomas Osayi</div>
        <ul className="hidden md:flex gap-10 list-none">
          {['Projects', 'About', 'Skills', 'Contact'].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-xs font-medium tracking-wide text-white opacity-60 hover:opacity-100 transition-opacity">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>

        {/* 01 — HERO */}
        <section className="relative min-h-screen flex items-end pb-[clamp(60px,10vh,120px)] overflow-hidden section-light">
          <div className="container-portfolio relative z-10">
            <TextReveal as="h1" className="text-display mb-8" type="lines" immediate delay={0.3}>
              Full-Stack Developer{'\n'}& <span className="text-accent">Entrepreneur</span>
            </TextReveal>
            <FadeUp className="max-w-[520px]" immediate delay={0.9}>
              <p className="text-body">
                CS student at LMU building at the intersection of code and commerce.
                Creator of SQWAD, THG, and digital products that move.
              </p>
            </FadeUp>
            <div className="absolute bottom-10 right-[clamp(24px,4vw,64px)] flex flex-col items-center gap-3">
              <span className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] [writing-mode:vertical-lr]">Scroll</span>
              <div className="scroll-line" />
            </div>
          </div>
        </section>

        {/* 02 — ZOOM TRANSITION */}
        <ZoomTransition
          zoomText={<>Building the <span className="text-accent">future</span></>}
          revealContent={
            <div className="text-center max-w-[600px] px-[clamp(24px,4vw,64px)]">
              <div className="section-label justify-center text-white/30 mb-6"><span className="dot" />What I Do</div>
              <TextReveal as="h2" className="text-h2 text-white mb-6">Products that solve real problems</TextReveal>
              <FadeUp>
                <p className="text-body text-[var(--text-on-dark-secondary)]">
                  From SaaS platforms to streetwear brands to consulting tools — I build full-stack products from zero to revenue.
                </p>
              </FadeUp>
            </div>
          }
        />

        {/* 03 — PROJECTS: Horizontal Scroll */}
        <section id="projects" className="section-dark overflow-hidden">
          <div className="container-portfolio pt-[clamp(60px,8vh,100px)] pb-[clamp(40px,5vh,60px)]">
            <div className="section-label text-white/30"><span className="dot" />Featured Projects</div>
            <TextReveal as="h2" className="text-h1 text-white">
              Projects that <span className="text-accent">move</span> people
            </TextReveal>
          </div>
          <HorizontalScroll>
            {[
              { num: '01', tag: 'SaaS Platform', title: 'SQWAD', desc: 'Creator management platform for brands and agencies.' },
              { num: '02', tag: 'E-Commerce', title: 'The Hoop Gang', desc: 'Basketball streetwear brand with explosive TikTok Shop growth.' },
              { num: '03', tag: 'Consulting Tool', title: 'CardIntel', desc: 'AI-powered business card scanning and outreach pipeline.' },
              { num: '04', tag: 'Mobile App', title: 'NOM', desc: 'Food discovery app connecting people to great local eats.' },
              { num: '05', tag: 'Creator Portal', title: 'HoopGang Portal', desc: 'Dual admin/creator-facing React app with full pipeline tracking.' },
              { num: '06', tag: 'Client Work', title: 'Svarma AI', desc: 'B2B jewelry platform frontend built with HERO UI components.' },
            ].map((project) => (
              <div key={project.num} className="flex-none w-[clamp(320px,30vw,480px)] rounded-xl overflow-hidden bg-[var(--bg-dark-elevated)] skew-target transition-transform duration-600 hover:-translate-y-2">
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <span className="text-[4rem] font-extralight text-white/10">{project.num}</span>
                </div>
                <div className="p-[clamp(20px,2vw,32px)]">
                  <div className="text-label text-accent mb-3">{project.tag}</div>
                  <h3 className="text-h3 text-white mb-3">{project.title}</h3>
                  <p className="text-sm font-normal leading-relaxed text-[var(--text-on-dark-secondary)]">{project.desc}</p>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </section>

        {/* 04 — ABOUT: Clip-Path Reveal */}
        <section id="about" className="section-light py-[clamp(120px,18vh,240px)] overflow-hidden">
          <div className="container-portfolio grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,6vw,120px)] items-center">
            <div>
              <div className="section-label"><span className="dot" />About Me</div>
              <TextReveal as="h2" className="text-h1 mb-8">Code meets <span className="text-accent">commerce</span></TextReveal>
              <FadeUp>
                <p className="text-body mb-4">
                  I&apos;m Thomas — a Computer Science student at Loyola Marymount University
                  who simultaneously operates as a full-stack developer and entrepreneur.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-body">
                  I run SQWAD (a creator management SaaS), The Hoop Gang (basketball streetwear
                  with significant TikTok Shop revenue), and HNO Consulting — all while maintaining
                  a full course load and freelance development practice.
                </p>
              </FadeUp>
            </div>
            <ClipReveal
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=930&fit=crop"
              alt="Thomas Osayi workspace"
              className="aspect-[3/4]"
            />
          </div>
        </section>

        {/* 05 — SCALE-DOWN → STATS */}
        <ScaleTransition
          frontContent={
            <div className="text-center max-w-[800px] px-[clamp(24px,4vw,64px)]">
              <div className="section-label justify-center"><span className="dot" />Results</div>
              <TextReveal as="h2" className="text-h1 mb-6">Numbers that <span className="text-accent">speak</span></TextReveal>
              <FadeUp><p className="text-body max-w-[500px] mx-auto">This section scales down revealing the stats behind it.</p></FadeUp>
            </div>
          }
          behindContent={
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(30px,4vw,60px)] max-w-[1400px] mx-auto px-[clamp(24px,4vw,64px)]">
                {[
                  { number: '15+', label: 'Live Projects' },
                  { number: '6', label: 'Active Ventures' },
                  { number: '2027', label: 'Graduation Year' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-[clamp(30px,4vw,60px)]">
                    <div className="text-[clamp(3rem,7vw,6.5rem)] font-light tracking-tight leading-none text-accent mb-3">{stat.number}</div>
                    <div className="text-xs font-medium tracking-widest uppercase text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* 06 — SKILLS */}
        <section id="skills" className="section-light py-[clamp(120px,18vh,240px)] overflow-hidden">
          <div className="container-portfolio">
            <div className="section-label"><span className="dot" />Tech Stack</div>
            <TextReveal as="h2" className="text-h1 mb-16">Tools of the <span className="text-accent">trade</span></TextReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['React', 'Next.js', 'TypeScript', 'Firebase', 'Node.js', 'Python', 'Tailwind', 'Figma'].map((skill) => (
                <FadeUp key={skill}>
                  <div className="p-8 rounded-xl bg-[var(--bg-card)] text-center hover:bg-[var(--bg-elevated)] transition-colors border border-[var(--border)]">
                    <div className="text-lg font-medium">{skill}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — BIG TEXT */}
        <section className="section-dark py-[clamp(120px,18vh,240px)] text-center">
          <div className="container-portfolio">
            <TextReveal as="h2" className="text-display text-white" type="chars">
              Let&apos;s build{'\n'}something <span className="text-accent">great</span>
            </TextReveal>
          </div>
        </section>

        {/* 08 — CONTACT */}
        <section id="contact" className="section-light py-[clamp(80px,12vh,140px)] border-t border-[var(--border)]">
          <div className="container-portfolio">
            <TextReveal as="h2" className="text-h1 mb-12">Have an idea?{'\n'}Tell <span className="text-accent">me</span></TextReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Email', value: 'hello@thomasosayi.com', href: 'mailto:hello@thomasosayi.com' },
                { label: 'LinkedIn', value: 'thomas-osayi', href: 'https://linkedin.com/in/thomas-osayi' },
                { label: 'GitHub', value: '@thomasosayi', href: 'https://github.com/thomasosayi' },
              ].map((contact) => (
                <FadeUp key={contact.label}>
                  <a href={contact.href} target="_blank" rel="noopener noreferrer"
                    className="block p-8 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] transition-colors border border-[var(--border)] group">
                    <div className="text-label text-accent mb-3">{contact.label}</div>
                    <div className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors">{contact.value}</div>
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="section-light border-t border-[var(--border)] py-[clamp(40px,6vh,60px)]">
        <div className="container-portfolio flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-medium text-[var(--text-muted)]">&copy; 2026 Thomas Osayi</div>
          <div className="flex gap-8">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/thomas-osayi' },
              { label: 'GitHub', href: '#' },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}