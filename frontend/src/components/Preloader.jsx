import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.pl-letter', { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' })
      .to('.pl-bar', { scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, '-=0.2')
      .to('.preloader-grid', { opacity: 0, duration: 0.5, delay: 0.1, pointerEvents: 'none' });
  }, []);

  return (
    <div className="preloader-grid">
      <div className="flex flex-col items-center gap-6">
        <div className="flex overflow-hidden">
          {['S', 'K'].map((l, i) => (
            <span key={i}
              className="pl-letter font-display text-7xl md:text-8xl font-bold gradient-accent inline-block translate-y-12 opacity-0 px-1">
              {l}
            </span>
          ))}
        </div>
        <div className="w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div className="pl-bar h-full origin-left scale-x-0 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Loading portfolio</p>
      </div>
    </div>
  );
}
