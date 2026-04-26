import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';
import { certifications } from '../data/mock';

function Card({ c }) {
  return (
    <div className="glass rounded-2xl p-5 min-w-[280px] max-w-[300px] hover:border-[#6C63FF]/40 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl grid place-items-center font-display font-bold text-sm"
          style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.25), rgba(0,212,255,0.18))', border: '1px solid rgba(255,255,255,0.1)' }}>
          {c.initials}
        </div>
        <div className="flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{c.issuer}</p>
          <p className="font-medium text-white text-[0.95rem] mt-0.5 leading-snug">{c.name}</p>
        </div>
        <BadgeCheck size={18} className="text-[#00D4FF] opacity-0 group-hover:opacity-100 transition" />
      </div>
    </div>
  );
}

export default function Certifications() {
  // duplicate for seamless marquee
  const items = [...certifications, ...certifications];
  return (
    <section id="certs" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow"><Award size={12} /> Certifications</span>
          <h2 className="section-title mt-5">
            Continuously <span className="gradient-accent">leveling up.</span>
          </h2>
        </div>
      </div>

      <div className="mt-12 marquee-pause relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(90deg, #0A0A0F, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: 'linear-gradient(270deg, #0A0A0F, transparent)' }} />

        <div className="marquee">
          {items.map((c, i) => <Card key={`${c.name}-${i}`} c={c} />)}
        </div>
      </div>
    </section>
  );
}
