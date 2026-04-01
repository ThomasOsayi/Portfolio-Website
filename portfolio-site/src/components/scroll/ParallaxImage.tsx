'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  imgClassName?: string;
}

export default function ParallaxImage({ src, alt, speed = 1.2, className = '', imgClassName = '' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const offset = (speed - 1) * 200;
    gsap.fromTo(ref.current, { y: -offset }, {
      y: offset, ease: 'none',
      scrollTrigger: { trigger: ref.current.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={`overflow-hidden rounded-xl ${className}`}>
      <img src={src} alt={alt} className={`w-full h-full object-cover ${imgClassName}`} loading="lazy" />
    </div>
  );
}