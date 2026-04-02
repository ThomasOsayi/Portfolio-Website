'use client';

import { useRef, useCallback } from 'react';

interface DirectionCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function DirectionCard({ children, className = '', href }: DirectionCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const getDirection = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return 'bottom';
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const edges = [
      { side: 'top' as const, dist: y },
      { side: 'bottom' as const, dist: rect.height - y },
      { side: 'left' as const, dist: x },
      { side: 'right' as const, dist: rect.width - x },
    ];
    return edges.reduce((a, b) => (a.dist < b.dist ? a : b)).side;
  }, []);

  const transforms: Record<string, string> = {
    top: 'translateY(-100%)', bottom: 'translateY(100%)',
    left: 'translateX(-100%)', right: 'translateX(100%)',
  };

  const handleEnter = useCallback((e: React.MouseEvent) => {
    if (!overlayRef.current) return;
    const dir = getDirection(e);
    overlayRef.current.style.transition = 'none';
    overlayRef.current.style.transform = transforms[dir];
    requestAnimationFrame(() => {
      if (!overlayRef.current) return;
      overlayRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      overlayRef.current.style.transform = 'translate(0, 0)';
    });
  }, [getDirection]);

  const handleLeave = useCallback((e: React.MouseEvent) => {
    if (!overlayRef.current) return;
    const dir = getDirection(e);
    overlayRef.current.style.transform = transforms[dir];
  }, [getDirection]);

  const Tag = href ? 'a' : 'div';
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Tag
      ref={cardRef as any}
      className={`direction-card ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...linkProps}
    >
      <div ref={overlayRef} className="direction-overlay" />
      <div className="direction-arrow">↗</div>
      <div className="direction-inner">
        {children}
      </div>
    </Tag>
  );
}