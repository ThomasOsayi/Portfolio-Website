'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface FadeUpProps {
  className?: string;
  immediate?: boolean;
  delay?: number;
  children?: ReactNode;
}

export function FadeUp({ className = '', immediate = false, delay = 0, children }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const from = { y: 28, opacity: 0 };
      const to = { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay };
      if (immediate) {
        gsap.fromTo(el, from, to);
      } else {
        gsap.fromTo(el, from, {
          ...to,
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
        });
      }
    },
    { scope: ref, dependencies: [immediate, delay] },
  );

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
