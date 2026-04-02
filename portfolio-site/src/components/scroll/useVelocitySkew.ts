'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useVelocitySkew(maxSkew = 2, decay = 0.9) {
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>('.skew-target');
    if (targets.length === 0) return;

    const setter = gsap.quickSetter(targets, 'skewY', 'deg');
    const clamp = gsap.utils.clamp(-maxSkew, maxSkew);
    let current = 0;
    let isActive = false;

    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const val = clamp(self.getVelocity() / -500);
        if (Math.abs(val) > Math.abs(current)) current = val;
        if (!isActive && Math.abs(current) > 0.05) {
          isActive = true;
          gsap.ticker.add(tickerCallback);
        }
      },
    });

    const tickerCallback = () => {
      current *= decay;
      if (Math.abs(current) < 0.02) {
        current = 0;
        setter(0);
        isActive = false;
        gsap.ticker.remove(tickerCallback);
        return;
      }
      setter(current);
    };

    return () => {
      trigger.kill();
      gsap.ticker.remove(tickerCallback);
    };
  }, [maxSkew, decay]);
}