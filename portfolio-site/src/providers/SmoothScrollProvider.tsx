'use client';

import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(update); };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) lenis.on('scroll', ScrollTrigger.update);
    return () => { if (lenis) lenis.off('scroll', ScrollTrigger.update); };
  }, []);

  useEffect(() => {
    const handleLoad = () => { setTimeout(() => ScrollTrigger.refresh(), 150); };
    window.addEventListener('load', handleLoad);
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { window.removeEventListener('load', handleLoad); clearTimeout(t); };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, lerp: 0.07, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}