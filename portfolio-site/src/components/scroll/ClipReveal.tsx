'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ClipRevealProps {
  src: string;
  alt: string;
  className?: string;
  shape?: 'circle' | 'inset';
}

export default function ClipReveal({ src, alt, className = '', shape = 'circle' }: ClipRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !imgRef.current) return;
    const from = shape === 'circle' ? 'circle(0% at 50% 50%)' : 'inset(50% 50% 50% 50%)';
    const to = shape === 'circle' ? 'circle(75% at 50% 50%)' : 'inset(0% 0% 0% 0%)';
    gsap.fromTo(imgRef.current, { clipPath: from }, {
      clipPath: to, ease: 'none',
      scrollTrigger: { trigger: wrapperRef.current, start: 'top 60%', end: 'center 30%', scrub: 0.5 },
    });
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden rounded-xl ${className}`}>
      <img ref={imgRef} src={src} alt={alt} className="w-full h-full object-cover will-change-[clip-path]"
        style={{ clipPath: shape === 'circle' ? 'circle(0% at 50% 50%)' : 'inset(50% 50% 50% 50%)' }} loading="lazy" />
    </div>
  );
}