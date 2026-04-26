import React, { useState } from 'react';
import { Github, ExternalLink, FolderGit2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '../data/mock';

function ProjectCard({ p }) {
  return (
    <article className="group glass rounded-2xl overflow-hidden hover:border-[#00D4FF]/30 transition-all hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={p.cover} alt={p.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,15,0) 30%, rgba(10,10,15,0.85) 100%)',
        }} />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="pill" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(0,212,255,0.4)', color: '#9DEBFF' }}>
            {p.category}
          </span>
          <span className="pill" style={{ background: 'rgba(0,0,0,0.5)' }}>{p.year}</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="pill" style={{ background: 'rgba(108,99,255,0.18)', borderColor: 'rgba(108,99,255,0.45)', color: '#D7D3FF' }}>{p.tag}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl md:text-[1.4rem] font-bold leading-tight">{p.name}</h3>
        <p className="mt-2 text-white/60 text-sm leading-relaxed line-clamp-3">{p.desc}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map(t => <span key={t} className="pill text-[10px]">{t}</span>)}
        </div>

        <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">Impact</p>
            <p className="font-display font-semibold text-white text-sm truncate">{p.impact}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="w-9 h-9 grid place-items-center rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition">
              <Github size={15} />
            </a>
            <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live"
              className="w-9 h-9 grid place-items-center rounded-lg bg-white text-black hover:bg-[#C7C2FF] transition">
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

// Compact preview component (used on home page if needed)
export function ProjectsPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow"><FolderGit2 size={12} /> Selected Work</span>
            <h2 className="section-title mt-5">Recent <span className="gradient-accent">projects.</span></h2>
          </div>
          <Link to="/projects" className="btn-ghost text-sm">
            See all <ExternalLink size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

// Full Projects grid with filters (used on /projects page)
export default function Projects({ heading = true }) {
  const [active, setActive] = useState('All');
  const [q, setQ] = useState('');
  const filtered = projects.filter(p =>
    (active === 'All' || p.category === active) &&
    (q === '' || (p.name + ' ' + p.desc + ' ' + p.stack.join(' ')).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section className="relative py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {heading && (
          <div className="max-w-2xl">
            <span className="eyebrow"><FolderGit2 size={12} /> Portfolio</span>
            <h1 className="section-title mt-5">All <span className="gradient-accent">projects.</span></h1>
            <p className="mt-4 text-white/55">A categorized snapshot of full-stack apps, mobile apps, n8n automations, and freelance websites.</p>
          </div>
        )}

        {/* Filters */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map(c => {
              const count = c === 'All' ? projects.length : projects.filter(p => p.category === c).length;
              return (
                <button key={c} onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    active === c
                      ? 'border-[#00D4FF]/60 text-white bg-[#00D4FF]/10'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/25'
                  }`}>
                  {c} <span className="text-white/40 font-mono ml-1">({count})</span>
                </button>
              );
            })}
          </div>
          <div className="relative max-w-xs w-full">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search projects…"
              className="field !pl-9 !py-2.5 text-sm" />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProjectCard key={p.name} p={p} />)}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-white/50 font-mono text-sm">No projects match this filter.</div>
        )}
      </div>
    </section>
  );
}
