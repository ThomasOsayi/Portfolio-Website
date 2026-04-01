'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  gap?: string;
}

export default function HorizontalScroll({ children, className = '', trackClassName = '', gap = 'gap-[clamp(20px,3vw,40px)]' }: HorizontalScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !trackRef.current) return;
    const track = trackRef.current;
    const getTrackWidth = () => track.scrollWidth - window.innerWidth + 100;
    gsap.to(track, {
      x: () => -getTrackWidth(), ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current, start: 'top top',
        end: () => `+=${getTrackWidth()}`,
        pin: true, scrub: 0.6, invalidateOnRefresh: true,
      },
    });
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className={`h-screen flex items-center ${className}`}>
      <div ref={trackRef} className={`flex ${gap} px-[clamp(24px,4vw,64px)] will-change-transform ${trackClassName}`}>
        {children}
      </div>
    </div>
  );
}