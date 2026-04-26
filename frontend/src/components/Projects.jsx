import React, { useRef } from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { projects } from '../data/mock';

function TiltCard({ project }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) translateY(-4px)`;
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="tilt-card relative rounded-3xl p-[1px] overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))' }}
    >
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ background: `radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(108,99,255,0.18), transparent 40%)` }}
      />
      <div className="relative rounded-3xl bg-[#0E0E18]/80 p-7 md:p-8 h-full flex flex-col tilt-inner">
        <div className="flex items-start justify-between gap-4">
          <span className="pill" style={{ borderColor: 'rgba(0,212,255,0.35)', color: '#9DEBFF', background: 'rgba(0,212,255,0.06)' }}>
            {project.tag}
          </span>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.accent} grid place-items-center border border-white/10`}>
            <FolderGit2 size={20} className="text-white/85" />
          </div>
        </div>

        <h3 className="font-display text-2xl md:text-[1.7rem] font-bold mt-5 leading-tight">
          {project.name}
        </h3>
        <p className="mt-3 text-white/65 leading-relaxed text-[0.97rem]">{project.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map(t => <span key={t} className="pill">{t}</span>)}
        </div>

        <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">Impact</p>
            <p className="font-display font-semibold text-white">{project.impact}</p>
          </div>
          <div className="flex gap-2">
            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="w-10 h-10 grid place-items-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition">
              <Github size={16} />
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live"
              className="w-10 h-10 grid place-items-center rounded-full bg-white text-black hover:bg-[#C7C2FF] transition">
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow"><FolderGit2 size={12} /> Selected Work</span>
            <h2 className="section-title mt-5">
              Things I&apos;ve <span className="gradient-accent">built.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md">
            A snapshot of full-stack and mobile products — sponsored, freelance, and platform-scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => <TiltCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  );
}
