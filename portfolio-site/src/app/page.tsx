'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TextReveal, FadeUp, ZoomTransition, HorizontalScroll,
  ScaleTransition, ClipReveal, useVelocitySkew,
} from '@/components/scroll';
import {
  SpotlightCursor, AuroraBackground, MagneticButton,
  TextScramble, TiltCard, BentoCard, DirectionCard,
} from '@/components/micro';
import { projects } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useVelocitySkew();

  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Count-up animation for stats
  useEffect(() => {
    const el = document.querySelector('.stat-count') as HTMLElement;
    if (!el) return;
    const target = parseInt(el.dataset.count || '0', 10);
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 120%',
        once: true,
      },
      onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] overflow-x-hidden">

      <SpotlightCursor />

      <nav className="fixed top-0 left-0 right-0 z-[100] px-[clamp(24px,4vw,64px)] py-6 flex justify-between items-center mix-blend-difference isolate">
        <div className="text-[1.1rem] font-extrabold tracking-tight uppercase text-white">Thomas Osayi</div>
        <ul className="hidden md:flex gap-10 list-none">
          {['Projects', 'About', 'Skills', 'Contact'].map((link) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById(link.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="nav-link text-xs font-medium tracking-wide text-white opacity-60 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>

        {/* 01 — HERO */}
        <section className="relative min-h-screen flex items-end pb-[clamp(60px,10vh,120px)] overflow-hidden section-light">
          <AuroraBackground />
          <div className="container-portfolio relative z-10">
            <TextReveal as="h1" className="text-display mb-8" type="lines" immediate delay={0.3}>
              Full-Stack Developer{'\n'}& <TextScramble text="Entrepreneur" className="text-accent" delay={1200} />
            </TextReveal>
            <FadeUp className="max-w-[520px]" immediate delay={0.9}>
              <p className="text-body">
                CS student at LMU building at the intersection of code and commerce.
                Creator of SQWAD, NOM, and digital products that move.
              </p>
            </FadeUp>
            <FadeUp immediate delay={1.1}>
              <MagneticButton onClick={() => { const el = document.getElementById('projects'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="mt-10">
                View Projects <span className="arrow">→</span>
              </MagneticButton>
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
                  From SaaS platforms to mobile apps to consulting tools, I build full-stack products from zero to revenue.
                </p>
              </FadeUp>
            </div>
          }
        />

        {/* 03 — PROJECTS: Horizontal Scroll with 3D Tilt Cards */}
        <section id="projects" className="section-dark overflow-hidden">
          <div className="container-portfolio pt-[clamp(60px,8vh,100px)] pb-[clamp(60px,8vh,120px)]">
            <div className="section-label text-white/30"><span className="dot" />Featured Projects</div>
            <TextReveal as="h2" className="text-h1 text-white">
              Projects that <span className="text-accent">move</span> people
            </TextReveal>
          </div>
          <HorizontalScroll>
            {projects.map((project) => (
              <TiltCard key={project.num} className="flex-none w-[clamp(400px,45vw,720px)] skew-target">
                <span className="absolute top-5 right-6 text-[0.85rem] font-light text-white/15 z-[2]">{project.num}</span>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                    <img src={project.image} alt={`${project.title} screenshot`} className="tilt-card-image" />
                  </a>
                ) : (
                  <div className="overflow-hidden">
                    <img src={project.image} alt={`${project.title} screenshot`} className="tilt-card-image" />
                  </div>
                )}
                <div className="p-[clamp(20px,2vw,32px)] relative z-[2]">
                  <div className="text-label text-accent mb-3">{project.tag}</div>
                  <h3 className="text-h3 text-white mb-3">{project.title}</h3>
                  <p className="text-sm font-normal leading-relaxed text-[var(--text-on-dark-secondary)]">{project.desc}</p>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-xs font-semibold tracking-wide text-accent hover:text-white transition-colors">
                      View Live <span>↗</span>
                    </a>
                  )}
                </div>
              </TiltCard>
            ))}
          </HorizontalScroll>
        </section>

        {/* 04 — ABOUT: Clip-Path Reveal */}
        <section id="about" className="section-light py-[clamp(120px,18vh,240px)] overflow-hidden">
          <div className="container-portfolio grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,6vw,120px)] items-center">
            <div>
              <div className="section-label"><span className="dot" />About Me</div>
              <TextReveal as="h2" className="text-h1 mb-8">Code meets <span className="text-accent">commerce</span></TextReveal>
              <TextReveal as="p" className="text-body mb-4">
                I&apos;m Thomas, a Computer Science student at Loyola Marymount University
                who simultaneously operates as a full-stack developer and entrepreneur.
              </TextReveal>
              <TextReveal as="p" className="text-body">
                I built SQWAD (a creator management SaaS), the HoopGang Creator Portal
                (managing 50+ basketball creators on TikTok), and multiple client projects
                for local businesses, all while maintaining a full course load.
              </TextReveal>
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
            </div>
          }
          behindContent={
            <div className="w-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-[clamp(5rem,15vw,12rem)] font-extralight tracking-tight leading-none text-accent">
                  <span className="stat-count" data-count="15">0</span>+
                </div>
                <div className="text-sm font-medium tracking-[0.2em] uppercase text-white/30 mt-4">Projects Shipped</div>
              </div>
            </div>
          }
          scrollHeight="200vh"
        />

        {/* 06 — SKILLS: Bento Grid */}
        <section id="skills" className="section-light py-[clamp(120px,18vh,240px)] overflow-hidden">
          <div className="container-portfolio">
            <div className="section-label"><span className="dot" />Tech Stack</div>
            <TextReveal as="h2" className="text-h1 mb-16">Tools of the <span className="text-accent">trade</span></TextReveal>
            <div className="bento-grid">
              {[
                { icon: '⚛', title: 'React & Next.js', desc: 'Server components, App Router, and the full React ecosystem.', span: 2 as const },
                { icon: 'TS', title: 'TypeScript', desc: 'Type safety from schema to component.', span: 1 as const },
                { icon: '🔥', title: 'Firebase', desc: 'Auth, Firestore, Functions. Ship fast.', span: 1 as const },
                { icon: '🐍', title: 'Python', desc: 'AI/ML pipelines and automation.', span: 1 as const },
                { icon: '🎨', title: 'Figma', desc: 'Design systems before code.', span: 1 as const },
                { icon: '💨', title: 'Tailwind & Motion', desc: 'Utility styling meets declarative animation. GSAP for scroll, Motion for everything else.', span: 2 as const },
              ].map((skill) => (
                <BentoCard key={skill.title} span={skill.span}>
                  <div className="bento-icon">{skill.icon}</div>
                  <div className="bento-title">{skill.title}</div>
                  <div className="bento-desc">{skill.desc}</div>
                </BentoCard>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — BIG TEXT */}
        <section className="section-dark py-[clamp(120px,18vh,240px)] text-center">
          <div className="container-portfolio">
            <TextReveal as="h2" className="text-display text-white" type="chars">
              Let&apos;s build<br />
              something <span className="text-accent whitespace-nowrap">great</span>
            </TextReveal>
          </div>
        </section>

        {/* 08 — CONTACT */}
        <section id="contact" className="section-light py-[clamp(80px,12vh,140px)] border-t border-[var(--border)]">
          <div className="container-portfolio">
            <TextReveal as="h2" className="text-h1 mb-12">Have an idea?{'\n'}Tell <span className="text-accent">me</span></TextReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { label: 'Email', value: 'thomasosayi@gmail.com', href: 'mailto:thomasosayi@gmail.com' },
                { label: 'LinkedIn', value: 'thomas-osayi', href: 'https://www.linkedin.com/in/thomas-osayi' },
                { label: 'GitHub', value: '@ThomasOsayi', href: 'https://github.com/ThomasOsayi' },
              ].map((contact) => (
                <FadeUp key={contact.label}>
                  <DirectionCard href={contact.href}>
                    <div className="text-label text-accent mb-3">{contact.label}</div>
                    <div className="text-lg font-medium">{contact.value}</div>
                  </DirectionCard>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="section-light border-t border-[var(--border)] py-[clamp(40px,6vh,60px)]">
        <div className="container-portfolio flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-medium text-[var(--text-muted)]">&copy; 2026 Thomas Osayi</div>
          <div className="flex gap-8">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thomas-osayi' },
              { label: 'GitHub', href: 'https://github.com/ThomasOsayi' },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}