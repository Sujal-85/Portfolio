import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personal } from '../data/mock';

export default function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: personal.roles,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="top" className="relative pt-32 md:pt-36 pb-24 md:pb-32 overflow-hidden">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 50%, transparent 100%)',
        }} />
      {/* Soft accent glow */}
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.18), transparent 60%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300">Available for freelance &amp; full-time</span>
          </span>

          <h1 className="font-display mt-6 text-5xl sm:text-6xl md:text-[5.2rem] font-bold leading-[1.02] tracking-tight">
            Hi, I&apos;m <span className="gradient-text">Sujal.</span>
            <br />
            <span className="text-white/90">I build </span>
            <span className="gradient-accent">production-grade</span>
            <span className="text-white/90"> apps.</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-lg md:text-xl text-white/75 font-mono">
            <span className="text-[#00D4FF]">$</span>
            <span ref={typedEl} className="font-medium text-white/90" />
          </div>

          <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
            Full Stack &amp; Flutter developer focused on shipping clean, scalable products.
            React, Next.js, Node, Flutter, and modern cloud — from idea to deployed.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </Link>
            <a href={personal.resumeUrl} download className="btn-ghost">
              <Download size={18} /> Resume
            </a>
            <div className="flex items-center gap-2 ml-1">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-11 h-11 grid place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/50 font-mono">
            <span>9.3 CGPA</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>3 Internships</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>10+ Shipped Projects</span>
          </div>
        </div>

        {/* Right — Code editor mockup */}
        <div className="lg:col-span-5">
          <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-black/40">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="ml-3 flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10">
                <Terminal size={12} className="text-white/50" />
                <span className="font-mono text-[11px] text-white/60">developer.tsx</span>
              </div>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed p-5 md:p-6 text-white/85 whitespace-pre-wrap break-words">
<span className="text-pink-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-white/50">=</span> <span className="text-white/85">{'{'}</span>{'\n'}
  <span className="text-emerald-300">name</span><span className="text-white/50">:</span> <span className="text-amber-200">&apos;Sujal Khedekar&apos;</span><span className="text-white/50">,</span>{'\n'}
  <span className="text-emerald-300">role</span><span className="text-white/50">:</span> <span className="text-amber-200">&apos;Full Stack &amp; Flutter Engineer&apos;</span><span className="text-white/50">,</span>{'\n'}
  <span className="text-emerald-300">stack</span><span className="text-white/50">:</span> [<span className="text-amber-200">&apos;React&apos;</span>, <span className="text-amber-200">&apos;Next&apos;</span>, <span className="text-amber-200">&apos;Flutter&apos;</span>, <span className="text-amber-200">&apos;Node&apos;</span>]<span className="text-white/50">,</span>{'\n'}
  <span className="text-emerald-300">cloud</span><span className="text-white/50">:</span> [<span className="text-amber-200">&apos;AWS&apos;</span>, <span className="text-amber-200">&apos;GCP&apos;</span>, <span className="text-amber-200">&apos;Firebase&apos;</span>]<span className="text-white/50">,</span>{'\n'}
  <span className="text-emerald-300">status</span><span className="text-white/50">:</span> <span className="text-amber-200">&apos;open-to-work&apos;</span><span className="text-white/50">,</span>{'\n'}
  <span className="text-emerald-300">passion</span><span className="text-white/50">:</span> <span className="text-violet-300">() =&gt;</span> <span className="text-amber-200">&apos;ship clean code✨&apos;</span>{'\n'}
<span className="text-white/85">{'}'}</span><span className="text-white/50">;</span>
            </pre>
            <div className="px-5 py-3 border-t border-white/8 bg-black/30 flex items-center justify-between text-[11px] font-mono text-white/45">
              <span className="flex items-center gap-1.5"><Sparkles size={11} className="text-[#00D4FF]" /> main · ready</span>
              <span>UTF-8 · LF · TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
