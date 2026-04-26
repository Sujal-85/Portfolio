import React, { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { experience } from '../data/mock';

export default function Experience() {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const onScroll = () => {
      const el = sectionRef.current;
      const r = el.getBoundingClientRect();
      const total = r.height + window.innerHeight * 0.4;
      const passed = Math.min(total, Math.max(0, window.innerHeight - r.top));
      const pct = Math.max(0, Math.min(1, passed / total));
      if (lineRef.current) lineRef.current.style.height = `${pct * 100}%`;

      // Reveal items
      gsap.utils.toArray('.tl-item').forEach((it) => {
        const ir = it.getBoundingClientRect();
        if (ir.top < window.innerHeight - 80 && !it.dataset.shown) {
          it.dataset.shown = '1';
          gsap.fromTo(it, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow"><Briefcase size={12} /> Experience</span>
          <h2 className="section-title mt-5">
            From <span className="gradient-accent">interns</span> to impact.
          </h2>
          <p className="mt-4 text-white/55">A timeline of roles where I shipped real products and learned to build at scale.</p>
        </div>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div ref={lineRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-px h-0"
            style={{ background: 'linear-gradient(180deg, #6C63FF, #00D4FF)' }} />

          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => {
              const right = i % 2 === 1;
              return (
                <div key={i} className="tl-item relative grid md:grid-cols-2 gap-6 md:gap-12">
                  {/* Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#0A0A0F] border-2 border-[#00D4FF] shadow-[0_0_18px_rgba(0,212,255,0.7)] z-10" />

                  <div className={`pl-12 md:pl-0 ${right ? 'md:col-start-2' : 'md:pr-10'}`}>
                    <div className="glass rounded-2xl p-6 md:p-7 hover:border-[#6C63FF]/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-white/55 font-mono">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {exp.period}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={12} /> {exp.location}</span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold mt-3">{exp.role}</h3>
                      <p className="text-[#00D4FF] font-medium mt-1">{exp.company}</p>

                      <ul className="mt-4 space-y-2 text-white/70 text-[0.95rem]">
                        {exp.points.map((p, k) => (
                          <li key={k} className="flex gap-2">
                            <span className="text-[#6C63FF] mt-1">▪</span><span>{p}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.stack.map(t => <span key={t} className="pill">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
