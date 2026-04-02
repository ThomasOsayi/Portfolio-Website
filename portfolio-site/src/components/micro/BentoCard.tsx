'use client';

import { useRef, useCallback, useEffect, useState } from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2 | 3;
}

export default function BentoCard({ children, className = '', span = 1 }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mouse-x', x + '%');
    ref.current.style.setProperty('--mouse-y', y + '%');
  }, [isTouch]);

  const spanClass = span === 2 ? 'md:col-span-2' : span === 3 ? 'md:col-span-3' : '';

  return (
    <div
      ref={ref}
      className={`bento-item ${spanClass} ${className}`}
      onMouseMove={handleMove}
    >
      {!isTouch && <div className="bento-glow" />}
      {children}
    </div>
  );
}