'use client';

import { useRef, useEffect } from 'react';
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
      x: () => -getTrackWidth(),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: () => `+=${getTrackWidth()}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: wrapperRef });

  // Refresh ScrollTrigger when images inside the track finish loading
  useEffect(() => {
    if (!trackRef.current) return;

    const images = trackRef.current.querySelectorAll('img');
    let loaded = 0;
    const total = images.length;

    if (total === 0) return;

    const onLoad = () => {
      loaded++;
      if (loaded >= total) {
        ScrollTrigger.refresh();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', onLoad);
        img.addEventListener('error', onLoad);
      }
    });

    // If all already loaded
    if (loaded >= total) {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onLoad);
      });
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`h-screen flex items-center ${className}`}>
      <div ref={trackRef} className={`flex ${gap} px-[clamp(24px,4vw,64px)] will-change-transform ${trackClassName}`}>
        {children}
      </div>
    </div>
  );
}
