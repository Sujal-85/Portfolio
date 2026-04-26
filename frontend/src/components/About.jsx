import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { personal, stats } from '../data/mock';

function useInView(ref, threshold = 0.3) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true); }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref, threshold]);
  return seen;
}

function Counter({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const seen = useInView(ref, 0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const dur = 1400; const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>;
}

const orbitIcons = ['React', 'Next', 'Flutter', 'Node', 'AWS', 'GCP', 'Docker', 'Mongo'];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Profile with glow ring + orbiting icons */}
          <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full border border-white/8" />
              <div className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full border border-white/6" />
            </div>
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full glow-ring overflow-hidden">
              <img src={personal.profileImage} alt={personal.name}
                className="absolute inset-0 w-full h-full object-cover rounded-full" />
            </div>

            {/* Orbiting tech tags */}
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite]">
              {orbitIcons.map((t, i) => {
                const angle = (i / orbitIcons.length) * Math.PI * 2;
                const r = 200;
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;
                return (
                  <span key={t}
                    className="absolute left-1/2 top-1/2 px-3 py-1.5 rounded-full glass text-xs font-mono text-white/80"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right: Bio + stats */}
          <div>
            <span className="eyebrow"><Sparkles size={12} /> About me</span>
            <h2 className="section-title mt-5">
              Crafting <span className="gradient-accent">scalable</span> products,
              <br /> end-to-end.
            </h2>
            <p className="mt-6 text-white/65 leading-relaxed text-[1.02rem]">{personal.bio}</p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="glass rounded-2xl p-5">
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-accent">
                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                  </div>
                  <div className="mt-1 text-sm text-white/55">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Open to FT roles', 'Bengaluru / Remote', 'Available 2026'].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
