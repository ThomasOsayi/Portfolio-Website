'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useVelocitySkew(maxSkew = 3, decay = 0.92) {
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>('.skew-target');
    if (targets.length === 0) return;

    const setter = gsap.quickSetter(targets, 'skewY', 'deg');
    const clamp = gsap.utils.clamp(-maxSkew, maxSkew);
    let current = 0;

    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const val = clamp(self.getVelocity() / -400);
        if (Math.abs(val) > Math.abs(current)) current = val;
      },
    });

    const tickerCallback = () => {
      current *= decay;
      if (Math.abs(current) < 0.01) current = 0;
      setter(current);
    };
    gsap.ticker.add(tickerCallback);

    return () => { trigger.kill(); gsap.ticker.remove(tickerCallback); };
  }, [maxSkew, decay]);
}