import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const lastY = useRef(0);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (navRef.current) {
        if (y > lastY.current && y > 200) navRef.current.style.transform = 'translateY(-110%)';
        else navRef.current.style.transform = 'translateY(0)';
      }
      lastY.current = y;

      // active section detection
      const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean);
      const cur = sections.find(s => {
        const r = s.getBoundingClientRect();
        return r.top <= 120 && r.bottom > 120;
      });
      if (cur) setActive('#' + cur.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong border-b border-white/5' : ''
      }`}
      style={{ transition: 'transform .35s ease, background .3s ease' }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16 md:h-20">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          <span className="gradient-accent">SK</span>
          <span className="text-white/40">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === l.href ? 'text-white bg-white/[0.06]' : 'text-white/65 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:inline-flex btn-ghost !py-2.5 !px-5 text-sm">
          Let&apos;s Talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
          className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/[0.04]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <div className="glass-strong border-t border-white/5 px-6 py-6 flex flex-col gap-1">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.05]"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
