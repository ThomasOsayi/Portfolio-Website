'use client';

import { useRef, useCallback, useEffect, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
}

export default function TiltCard({ children, className = '', tiltStrength = 12 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (isTouch || !cardRef.current || !innerRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    innerRef.current.style.transform = `rotateX(${(y - 0.5) * -tiltStrength}deg) rotateY(${(x - 0.5) * tiltStrength}deg)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }
  }, [tiltStrength, isTouch]);

  const handleLeave = useCallback(() => {
    if (isTouch) return;
    if (innerRef.current) innerRef.current.style.transform = 'rotateX(0) rotateY(0)';
    if (glareRef.current) glareRef.current.style.opacity = '0';
  }, [isTouch]);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={isTouch ? undefined : { perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div ref={innerRef} className="tilt-card-inner" style={isTouch ? undefined : { transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}>
        {!isTouch && (
          <div ref={glareRef} className="absolute inset-0 z-[1] pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-300" />
        )}
        <div className="tilt-card-border" />
        {children}
      </div>
    </div>
  );
}