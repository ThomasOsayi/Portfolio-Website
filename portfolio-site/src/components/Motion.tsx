'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const ORDER: [string, string][] = [
  ['metal', 'Liquid metal'], ['bear', 'Bear fur'], ['snake', 'Snakeskin'], ['marabou', 'Pink marabou'], ['gold', 'Liquid gold'],
  ['velvet', 'Crushed velvet'], ['tiger', 'Tiger fur'], ['croc', 'Crocodile'], ['carpet', 'Shag carpet'], ['grass', 'Grass'], ['zebra', 'Zebra fur'],
];
const HERO_BG: [number, number, number] = [11 / 255, 11 / 255, 12 / 255];

export default function Motion() {
  useEffect(() => {
    let disposed = false;
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(t: Window | Element | Document, ev: K | string, fn: EventListener, opt?: AddEventListenerOptions) => {
      t.addEventListener(ev, fn, opt);
      cleanups.push(() => t.removeEventListener(ev, fn, opt));
    };
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduced) document.documentElement.classList.add('no-motion');
    gsap.registerPlugin(ScrollTrigger);

    // clock
    const clock = $('#clock');
    const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' });
    const tick = () => { if (clock) clock.textContent = fmt.format(new Date()); };
    tick();
    const clockId = window.setInterval(tick, 15000);
    cleanups.push(() => clearInterval(clockId));

    // smooth scroll
    let lenis: Lenis | null = null;
    if (!reduced) {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      const raf = (t: number) => lenis?.raf(t * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => { gsap.ticker.remove(raf); lenis?.destroy(); });
    }

    // pointer + custom cursor (hidden over the texture so the material itself is the cursor feedback)
    const cursor = $('.cursor')!, dot = $('.cursor-dot')!, cursorLabel = cursor.querySelector('span')!;
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
    let engine: typeof import('@/lib/textureEngine') | null = null;
    on(window, 'pointermove', ((e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      if (engine && !reduced) engine.instances.forEach((i) => i.pointer(e));
    }) as EventListener, { passive: true });
    if (fine && !reduced) {
      document.body.classList.add('has-cursor');
      let id = 0;
      const loop = () => {
        cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
        cursor.style.transform = `translate(${cx}px, ${cy}px)`;
        dot.style.transform = `translate(${mx}px, ${my}px)`;
        id = requestAnimationFrame(loop);
      };
      loop();
      cleanups.push(() => { cancelAnimationFrame(id); document.body.classList.remove('has-cursor'); });
      $$('[data-cursor]').forEach((el) => {
        on(el, 'pointerenter', () => { cursorLabel.textContent = el.dataset.cursor || ''; cursor.classList.add('is-label'); });
        on(el, 'pointerleave', () => cursor.classList.remove('is-label'));
      });
      $$('a:not([data-cursor]), button, [data-cursor-link]').forEach((el) => {
        on(el, 'pointerenter', () => cursor.classList.add('is-link'));
        on(el, 'pointerleave', () => cursor.classList.remove('is-link'));
      });
      $$('[data-nocursor]').forEach((el) => {
        on(el, 'pointerenter', () => document.body.classList.add('cursor-off'));
        on(el, 'pointerleave', () => document.body.classList.remove('cursor-off'));
      });
    }

    // magnetic buttons
    if (fine && !reduced) $$('[data-magnetic]').forEach((el) => {
      const inner = el.querySelector('span') as HTMLElement | null;
      on(el, 'pointermove', ((e: PointerEvent) => {
        const r = el.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.transition = 'background-color .3s, color .3s';
        el.style.transform = `translate(${dx * 0.35}px, ${dy * 0.35}px)`;
        if (inner) { inner.style.transition = ''; inner.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`; }
      }) as EventListener);
      on(el, 'pointerleave', () => {
        el.style.transition = 'transform 0.6s cubic-bezier(.2,.8,.2,1), background-color .3s, color .3s';
        el.style.transform = '';
        if (inner) { inner.style.transition = 'transform 0.6s cubic-bezier(.2,.8,.2,1)'; inner.style.transform = ''; }
      });
    });

    // copy email
    const copyBtn = $('#copy-email'), copied = $('#copied');
    if (copyBtn && copied) on(copyBtn, 'click', async () => {
      try { await navigator.clipboard.writeText(copyBtn.textContent || ''); copied.textContent = 'Email copied'; }
      catch { const r = document.createRange(); r.selectNodeContents(copyBtn); const s = getSelection(); s?.removeAllRanges(); s?.addRange(r); copied.textContent = 'Selected, press copy'; }
      copied.hidden = false; setTimeout(() => (copied.hidden = true), 2200);
    });

    // nav: cobalt wipe between acts
    const wipe = $('.wipe');
    $$<HTMLAnchorElement>('[data-link]').forEach((a) => on(a, 'click', ((e: MouseEvent) => {
      const target = $(a.getAttribute('href') || '');
      if (!target) return;
      e.preventDefault();
      const go = () => (lenis ? lenis.scrollTo(target as HTMLElement, { immediate: true, force: true }) : target.scrollIntoView());
      if (reduced || !wipe) { go(); return; }
      gsap.timeline()
        .set(wipe, { yPercent: 100 })
        .to(wipe, { yPercent: 0, duration: 0.5, ease: 'power4.inOut' })
        .add(() => { go(); ScrollTrigger.refresh(); })
        .to(wipe, { yPercent: -100, duration: 0.55, ease: 'power4.inOut', delay: 0.05 });
    }) as EventListener));

    // 3D ring of stack words: spaced by real width, faded as they turn away so every word reads cleanly
    const ring = $('#ring');
    const ringItems: { el: HTMLElement; angle: number }[] = [];
    let ringRot = 0;
    const paintRing = () => {
      for (const it of ringItems) {
        const a = ((it.angle + ringRot) * Math.PI) / 180;
        const c = Math.cos(a);
        it.el.style.opacity = String(Math.max(0, Math.min(1, (c - 0.35) / 0.45)));
      }
    };
    const layoutRing = () => {
      if (!ring) return;
      ring.innerHTML = '';
      ringItems.length = 0;
      const words = (ring.dataset.words || '').split('|');
      const spans = words.map((w) => { const s = document.createElement('span'); s.textContent = w; ring.appendChild(s); return s; });
      const widths = spans.map((s) => s.offsetWidth);
      const gap = parseFloat(getComputedStyle(spans[0]).fontSize) * 1.1;
      const circ = widths.reduce((a, b) => a + b, 0) + gap * words.length;
      const r = circ / (2 * Math.PI);
      let acc = 0;
      spans.forEach((s, i) => {
        const angle = ((acc + widths[i] / 2) / circ) * 360;
        acc += widths[i] + gap;
        s.style.transform = `rotateY(${angle}deg) translateZ(${r}px)`;
        ringItems.push({ el: s, angle });
      });
      ring.style.transform = `translateZ(${-r}px) rotateY(${ringRot}deg)`;
      ring.dataset.r = String(r);
      paintRing();
    };

    // split helpers
    const statement = $('.reveal-words');
    let statementWords: HTMLElement[] = [];
    if (statement && !statement.dataset.split) {
      statement.dataset.split = '1';
      statement.innerHTML = (statement.textContent || '').trim().split(/\s+/).map((w) => `<span class="w${w.includes('*') ? ' em' : ''}">${w.replace(/\*/g, '')}</span>`).join(' ');
    }
    if (statement) statementWords = Array.from(statement.querySelectorAll('.w'));
    const splitHeadingLines = (el: HTMLElement) => {
      if (el.dataset.split) return el.querySelectorAll('.split-line > span');
      el.dataset.split = '1';
      const parts = el.innerHTML.split(/<br\s*\/?>/i);
      el.innerHTML = parts.map((p) => `<span class="split-line"><span>${p}</span></span>`).join('');
      return el.querySelectorAll('.split-line > span');
    };

    // hero material switcher
    const stage = $('.hero-stage')!;
    const matName = $('#mat-name');
    let matIndex = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let hero: any = null;
    const fitW = () => (innerWidth < 700 ? 0.96 : 0.9);
    const setMaterial = (i: number) => {
      if (!engine) return;
      matIndex = (i + ORDER.length) % ORDER.length;
      const [key, label] = ORDER[matIndex];
      if (matName) matName.textContent = `${label} · ${String(matIndex + 1).padStart(2, '0')}/${ORDER.length}`;
      if (hero) {
        const old = hero;
        engine.instances.splice(engine.instances.indexOf(old), 1);
        old.gl.getExtension('WEBGL_lose_context')?.loseContext();
        old.canvas.remove();
      }
      try {
        hero = new engine.TextureWord(stage, key, { bg: HERO_BG, fitW: fitW(), fitH: innerWidth < 700 ? 0.5 : 0.6, cy: 0.44 });
        hero.build('THOMAS');
        engine.instances.push(hero);
      } catch {
        hero = null;
        if (!stage.querySelector('.hero-fallback')) { const fb = document.createElement('div'); fb.className = 'hero-fallback'; fb.textContent = 'THOMAS'; stage.prepend(fb); }
      }
    };
    on($('#mat-prev')!, 'click', () => setMaterial(matIndex - 1));
    on($('#mat-next')!, 'click', () => setMaterial(matIndex + 1));
    let downAt: [number, number] | null = null;
    on(stage, 'pointerdown', ((e: PointerEvent) => { downAt = [e.clientX, e.clientY]; }) as EventListener);
    on(stage, 'pointerup', ((e: PointerEvent) => {
      if (downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) < 8) setMaterial(matIndex + 1);
      downAt = null;
    }) as EventListener);

    // NOM demo plays only while on screen
    const vids = $$<HTMLVideoElement>('video[data-autoplay]');
    const vio = new IntersectionObserver((ents) => ents.forEach((en) => {
      const v = en.target as HTMLVideoElement;
      if (en.isIntersecting && !reduced) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
    }), { threshold: 0.25 });
    vids.forEach((v) => vio.observe(v));
    cleanups.push(() => vio.disconnect());

    // floating preview on client rows
    if (fine && !reduced) {
      const pv = document.createElement('div'); pv.className = 'preview'; pv.innerHTML = '<img alt="">'; document.body.appendChild(pv);
      const pimg = pv.querySelector('img')!;
      let px = mx, py = my, id = 0;
      $$('.row').forEach((r) => {
        on(r, 'pointerenter', () => { pimg.src = r.dataset.img || ''; pv.classList.add('on'); });
        on(r, 'pointerleave', () => pv.classList.remove('on'));
      });
      const loop = () => {
        const vx = mx - px; px += (mx - px) * 0.14; py += (my - py) * 0.14;
        if (pv.classList.contains('on')) pv.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%) rotate(${Math.max(-12, Math.min(12, vx * 0.12))}deg)`;
        id = requestAnimationFrame(loop);
      };
      loop();
      cleanups.push(() => { cancelAnimationFrame(id); pv.remove(); });
    }

    // intro + scroll choreography
    const loader = $('.loader');
    const intro = () => {
      let seen = false;
      try { seen = !!sessionStorage.getItem('to-seen'); sessionStorage.setItem('to-seen', '1'); } catch {}
      if (!loader) return;
      if (seen || reduced) { loader.remove(); return; }
      const countEl = loader.querySelector('.loader-count') as HTMLElement, bar = loader.querySelector('.loader-bar i') as HTMLElement;
      const c = { v: 0 };
      gsap.timeline()
        .to(c, { v: 100, duration: 1.1, ease: 'power2.inOut', onUpdate: () => { countEl.textContent = String(Math.round(c.v)).padStart(3, '0'); bar.style.width = c.v + '%'; } })
        .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'power4.inOut' }, '+=0.1')
        .from('.hero-foot > *', { yPercent: 60, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }, '-=0.35')
        .add(() => loader.remove());
    };

    const choreograph = () => {
      if (reduced) return;
      $$('.split').forEach((h) => {
        gsap.from(splitHeadingLines(h), { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: 0.1, scrollTrigger: { trigger: h, start: 'top 88%' } });
      });
      gsap.to(statementWords, { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: '.statement p', start: 'top 78%', end: 'bottom 42%', scrub: true } });
      $$('[data-count]').forEach((b) => {
        const end = +(b.dataset.count || 0), pre = b.dataset.prefix || '', suf = b.dataset.suffix || '', o = { v: 0 };
        b.textContent = pre + '0' + suf;
        gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: b, start: 'top 85%' }, onUpdate: () => { b.textContent = pre + Math.round(o.v) + suf; } });
      });
      gsap.to('.hero-stage', { yPercent: 22, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

      const mm = gsap.matchMedia();
      mm.add('(min-width: 761px)', () => {
        const track = $('.track')!;
        const dist = () => track.scrollWidth - innerWidth;
        gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.products .pin', pin: true, scrub: 1, end: () => '+=' + dist(), invalidateOnRefresh: true } });
        $$('.card').forEach((card) => {
          const media = card.querySelector('.card-media') as HTMLElement;
          const move = ((e: PointerEvent) => { const r = media.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; media.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`; }) as EventListener;
          const leave = () => (media.style.transform = '');
          card.addEventListener('pointermove', move); card.addEventListener('pointerleave', leave);
          return () => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave); };
        });
      });
      cleanups.push(() => mm.revert());

      ScrollTrigger.create({ trigger: '.light-act', start: 'top 55%', end: 'bottom 45%', onToggle: (s) => document.body.classList.toggle('light', s.isActive) });

      if (ring) {
        const st = { rot: 0 };
        gsap.to(st, {
          rot: -360, ease: 'none',
          scrollTrigger: { trigger: '.ring-wrap', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          onUpdate: () => { ringRot = st.rot; ring.style.transform = `translateZ(${-(+(ring.dataset.r || 0))}px) rotateY(${ringRot}deg)`; paintRing(); },
        });
      }

      const cards = gsap.utils.toArray<HTMLElement>('.skill');
      // a card only dims while the next one is actually sliding over it, so the card you are reading stays fully lit
      const stickyTop = (i: number) => innerHeight * 0.14 + i * 26;
      cards.forEach((c, i) => {
        if (i === cards.length - 1) return;
        gsap.fromTo(c, { scale: 1, filter: 'brightness(1)' }, {
          scale: 0.94 + i * 0.01, filter: 'brightness(0.55)', ease: 'none', immediateRender: false,
          scrollTrigger: {
            trigger: cards[i + 1],
            start: () => `top ${stickyTop(i) + c.offsetHeight}px`,
            end: () => `top ${stickyTop(i + 1) + 1}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    };

    // render loop for the texture engine
    let loopId = 0;
    const start = async () => {
      engine = await import('@/lib/textureEngine');
      if (disposed) return;
      const fam = getComputedStyle(document.documentElement).getPropertyValue('--f-heavy').trim();
      if (fam) engine.setTextureFont(`${fam}, "Arial Black", Impact, sans-serif`);
      try { await document.fonts.load(`400 100px ${fam || '"Archivo Black"'}`, 'THOMAS'); await document.fonts.ready; } catch {}
      if (disposed) return;
      layoutRing();
      setMaterial(0);
      intro();
      choreograph();
      const io = new IntersectionObserver(([en]) => { if (hero) hero.visible = en.isIntersecting; });
      io.observe(stage);
      cleanups.push(() => io.disconnect());
      const loop = (now: number) => { engine!.instances.forEach((i) => i.visible && i.draw(now)); loopId = requestAnimationFrame(loop); };
      loopId = requestAnimationFrame(loop);
      if (reduced) setTimeout(() => engine!.instances.forEach((i) => i.draw(performance.now())), 50);
      let rt = 0, lastW = innerWidth;
      on(window, 'resize', () => {
        clearTimeout(rt);
        rt = window.setTimeout(() => {
          // phones fire resize when the URL bar moves; only rebuild when the width changes
          if (innerWidth === lastW) return;
          lastW = innerWidth;
          if (hero) { hero.opts.fitW = fitW(); hero.build('THOMAS'); }
          layoutRing();
          ScrollTrigger.refresh();
        }, 200);
      });
    };
    start();

    return () => {
      disposed = true;
      cancelAnimationFrame(loopId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      cleanups.forEach((f) => f());
      if (hero && engine) { engine.instances.splice(engine.instances.indexOf(hero), 1); hero.gl.getExtension('WEBGL_lose_context')?.loseContext(); hero.canvas.remove(); }
    };
  }, []);

  return null;
}
