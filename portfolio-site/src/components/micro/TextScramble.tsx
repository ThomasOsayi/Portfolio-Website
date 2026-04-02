'use client';

import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function TextScramble({ text, className = '', delay = 800, speed = 20 }: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let frame = 0;
    const totalFrames = speed;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const progress = frame / totalFrames;
        const result = text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < Math.floor(progress * text.length)) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');

        setDisplay(result);
        frame++;

        if (frame > totalFrames) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 40);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return <span className={className}>{display}</span>;
}