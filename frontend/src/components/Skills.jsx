import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Code2 } from 'lucide-react';
import { skills } from '../data/mock';

const CATS = ['All', ...Object.keys(skills)];

function useInView(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true); }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref]);
  return seen;
}

function SkillCard({ name, level, idx }) {
  const ref = useRef(null);
  const seen = useInView(ref);
  const initial = name.match(/^[A-Za-z]/) ? name[0].toUpperCase() : '#';
  return (
    <div ref={ref} className="glass rounded-2xl p-5 group hover:border-[#00D4FF]/30 transition-colors"
      style={{ animationDelay: `${idx * 40}ms` }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl grid place-items-center text-sm font-display font-bold"
          style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.25), rgba(0,212,255,0.18))', border: '1px solid rgba(255,255,255,0.08)' }}>
          {initial}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-white/90 font-medium text-[0.95rem]">{name}</span>
            <span className="font-mono text-xs text-white/45">{level}%</span>
          </div>
          <div className="mt-2 bar-track">
            <div className="bar-fill" style={{ width: seen ? `${level}%` : 0 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const list = useMemo(() => {
    if (active === 'All') return Object.entries(skills).flatMap(([cat, arr]) => arr.map(s => ({ ...s, cat })));
    return (skills[active] || []).map(s => ({ ...s, cat: active }));
  }, [active]);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="eyebrow"><Code2 size={12} /> Tech Arsenal</span>
            <h2 className="section-title mt-5">
              Tools I use to <span className="gradient-accent">ship.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md">
            From pixel-perfect frontends to cloud-deployed backends — a stack honed across 3 internships and 10+ projects.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active === c
                  ? 'border-[#00D4FF]/60 text-white bg-[#00D4FF]/10 shadow-[0_0_20px_rgba(0,212,255,0.2)]'
                  : 'border-white/10 text-white/60 hover:text-white hover:border-white/25'
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((s, i) => <SkillCard key={`${s.cat}-${s.name}`} {...s} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
