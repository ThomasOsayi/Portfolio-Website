'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ScaleTransitionProps {
  frontContent: React.ReactNode;
  behindContent: React.ReactNode;
  scrollHeight?: string;
  behindBg?: string;
}

export default function ScaleTransition({ frontContent, behindContent, scrollHeight = '250vh', behindBg = 'bg-black' }: ScaleTransitionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !stickyRef.current || !cardRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom bottom', scrub: 0.5, pin: stickyRef.current },
    });
    tl.to({}, { duration: 0.3 });
    tl.to(cardRef.current, { scale: 0.75, borderRadius: '24px', duration: 0.5, ease: 'power2.inOut' });
    tl.to(cardRef.current, { scale: 0.6, opacity: 0, y: -40, duration: 0.2, ease: 'power2.in' });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative" style={{ height: scrollHeight }}>
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
        <div className={`absolute inset-0 flex items-center ${behindBg}`} style={{ zIndex: 0 }}>{behindContent}</div>
        <div ref={cardRef} className="absolute inset-0 flex items-center justify-center will-change-transform" style={{ zIndex: 1, backgroundColor: '#fafafa' }}>{frontContent}</div>
      </div>
    </section>
  );
}