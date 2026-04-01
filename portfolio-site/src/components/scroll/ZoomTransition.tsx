'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ZoomTransitionProps {
  zoomText: React.ReactNode;
  revealContent: React.ReactNode;
  bgClass?: string;
  scrollHeight?: string;
}

export default function ZoomTransition({ zoomText, revealContent, bgClass = 'bg-black', scrollHeight = '300vh' }: ZoomTransitionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !stickyRef.current || !textRef.current || !revealRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom bottom', scrub: 0.6, pin: stickyRef.current },
    });
    tl.to(textRef.current, { scale: 20, opacity: 0, duration: 0.6, ease: 'power2.in' });
    tl.to(revealRef.current, { opacity: 1, duration: 0.15, ease: 'power1.out' }, 0.45);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`relative ${bgClass}`} style={{ height: scrollHeight }}>
      <div ref={stickyRef} className={`sticky top-0 h-screen flex items-center justify-center overflow-hidden ${bgClass}`}>
        <div ref={textRef} className="text-display text-center whitespace-nowrap will-change-transform text-white">{zoomText}</div>
        <div ref={revealRef} className="absolute inset-0 flex items-center justify-center opacity-0">{revealContent}</div>
      </div>
    </section>
  );
}