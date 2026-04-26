import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/mock';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/8 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-bold gradient-accent">SK</span>
          <span className="text-white/40 text-sm">· {year}</span>
        </div>
        <p className="text-white/55 text-sm flex items-center gap-1.5">
          Built with <Heart size={14} className="text-[#FF6B9D] fill-[#FF6B9D]" /> by {personal.name}
        </p>
        <div className="flex items-center gap-2">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-white/30 transition">
            <Github size={15} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-white/30 transition">
            <Linkedin size={15} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email"
            className="w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-white/30 transition">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
