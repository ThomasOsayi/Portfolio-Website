'use client';

import { useEffect, useRef } from 'react';

export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
      el.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 hidden md:block opacity-0 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle, rgba(252,0,25,0.06) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}