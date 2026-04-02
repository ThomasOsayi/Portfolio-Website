'use client';

import { useRef, useCallback } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children, className = '', href, onClick, strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, { x: x * strength, y: y * strength, duration: 0.3, ease: 'power2.out' });
  }, [strength]);

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  }, []);

  const baseClass = `magnetic-btn ${className}`;

  if (href) {
    return (
      <a ref={ref as any} href={href} className={baseClass}
        onMouseMove={handleMove} onMouseLeave={handleLeave} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as any} className={baseClass}
      onMouseMove={handleMove} onMouseLeave={handleLeave} onClick={onClick}>
      {children}
    </button>
  );
}