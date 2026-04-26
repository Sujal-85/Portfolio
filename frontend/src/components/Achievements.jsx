import React from 'react';
import { Trophy, Award, Medal, GraduationCap, Sparkles } from 'lucide-react';
import { achievements } from '../data/mock';

const ICONS = { Trophy, Award, Medal, GraduationCap };

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow"><Sparkles size={12} /> Achievements</span>
          <h2 className="section-title mt-5">
            Proud <span className="gradient-accent">moments.</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon] || Trophy;
            return (
              <div key={i} className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-25 group-hover:opacity-40 transition"
                  style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.7), transparent 60%)' }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl grid place-items-center text-white"
                    style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', boxShadow: '0 10px 30px rgba(108,99,255,0.35)' }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mt-5 leading-snug">{a.title}</h3>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
