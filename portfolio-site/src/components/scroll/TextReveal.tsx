'use client';

import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
  useMemo,
  useRef,
  type ElementType,
  type ReactNode,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function splitIntoLines(children: ReactNode): ReactNode[][] {
  const lines: ReactNode[][] = [[]];
  const append = (n: ReactNode) => {
    lines[lines.length - 1].push(n);
  };
  const newLine = () => {
    lines.push([]);
  };

  const walk = (node: ReactNode) => {
    if (node == null || typeof node === 'boolean') return;
    if (typeof node === 'string' || typeof node === 'number') {
      const parts = String(node).split('\n');
      parts.forEach((part, i) => {
        if (i > 0) newLine();
        if (part !== '') append(part);
      });
      return;
    }
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    append(node);
  };

  walk(children);
  return lines.filter((line) => line.length > 0);
}

function mapChars(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (typeof child === 'string') {
      return child.split('').map((c, i) => (
        <span key={i} className="reveal-char inline-block will-change-transform">
          {c === ' ' ? '\u00a0' : c}
        </span>
      ));
    }
    if (isValidElement<{ children?: ReactNode }>(child) && child.props.children != null) {
      return cloneElement(child, { children: mapChars(child.props.children) });
    }
    return child;
  });
}

export interface TextRevealProps {
  as?: ElementType;
  className?: string;
  type?: 'lines' | 'chars';
  immediate?: boolean;
  delay?: number;
  children?: ReactNode;
}

export function TextReveal({
  as: Tag = 'div',
  className = '',
  type,
  immediate = false,
  delay = 0,
  children,
}: TextRevealProps) {
  const rootRef = useRef<HTMLElement>(null);

  const body = useMemo(() => {
    if (type === 'chars') {
      return mapChars(children);
    }
    if (type === 'lines') {
      const lineGroups = splitIntoLines(children);
      return lineGroups.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span className="reveal-line-inner inline-block will-change-transform">{line}</span>
        </span>
      ));
    }
    return <span className="reveal-block-inner inline-block will-change-transform">{children}</span>;
  }, [type, children]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const lineInners = root.querySelectorAll('.reveal-line-inner, .reveal-block-inner');
      const charEls = root.querySelectorAll('.reveal-char');

      if (type === 'chars' && charEls.length > 0) {
        const from = { y: '0.35em', opacity: 0 };
        const to = { y: 0, opacity: 1, duration: 0.55, stagger: 0.02, ease: 'power2.out', delay };
        if (immediate) {
          gsap.fromTo(charEls, from, to);
        } else {
          gsap.fromTo(charEls, from, {
            ...to,
            scrollTrigger: { trigger: root, start: 'top 88%', toggleActions: 'play none none none' },
          });
        }
        return;
      }

      if (lineInners.length > 0) {
        const from = { y: '110%', opacity: 0 };
        const to = {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: type === 'lines' ? 0.08 : 0,
          ease: 'power3.out',
          delay,
        };
        if (immediate) {
          gsap.fromTo(lineInners, from, to);
        } else {
          gsap.fromTo(lineInners, from, {
            ...to,
            scrollTrigger: { trigger: root, start: 'top 88%', toggleActions: 'play none none none' },
          });
        }
      }
    },
    { scope: rootRef, dependencies: [type, immediate, delay] },
  );

  return createElement(Tag, { ref: rootRef, className }, body);
}
