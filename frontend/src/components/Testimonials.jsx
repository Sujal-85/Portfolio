import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { testimonials } from '../data/mock';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(700px 300px at 50% 0%, rgba(108,99,255,0.10), transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="eyebrow"><Sparkles size={12} /> Testimonials</span>
            <h2 className="section-title mt-5">
              What clients <span className="gradient-accent">say.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md">
            A selection of feedback from clients and team leads across freelance projects and internships.
          </p>
        </div>

        {/* Featured big card */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 text-white/8" size={120} />
            <div className="relative">
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FFB347] text-[#FFB347]" />
                ))}
              </div>
              <p className="mt-5 text-xl md:text-2xl font-display leading-snug text-white/90">
                “{testimonials[idx].quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={testimonials[idx].avatar} alt={testimonials[idx].name}
                  className="w-12 h-12 rounded-full ring-2 ring-white/10" />
                <div>
                  <p className="font-semibold text-white">{testimonials[idx].name}</p>
                  <p className="text-sm text-white/55">{testimonials[idx].role}</p>
                </div>
                <span className="ml-auto pill text-[10px]">{testimonials[idx].project}</span>
              </div>
              <div className="mt-8 flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} aria-label={`testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? 'w-8 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]' : 'w-3 bg-white/15 hover:bg-white/30'
                    }`} />
                ))}
              </div>
            </div>
          </div>

          {/* small stack */}
          <div ref={trackRef} className="flex flex-col gap-4">
            {testimonials.filter((_, i) => i !== idx).slice(0, 2).map((t, i) => (
              <button key={t.name} onClick={() => setIdx(testimonials.findIndex(x => x.name === t.name))}
                className="text-left glass rounded-2xl p-5 hover:border-[#00D4FF]/30 transition group">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <p className="font-medium text-white text-sm">{t.name}</p>
                    <p className="text-xs text-white/45">{t.role}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} size={11} className="fill-[#FFB347] text-[#FFB347]" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed line-clamp-3">“{t.quote}”</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
