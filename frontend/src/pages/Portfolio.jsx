import React, { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import { ProjectsPreview } from '../components/Projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      {loading && <Preloader />}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsPreview />
        <Certifications />
        <Achievements />
        <Testimonials />

        {/* CTA banner */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.22), transparent 60%)' }} />
              <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.18), transparent 60%)' }} />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="eyebrow">Have an idea?</span>
                  <h3 className="section-title mt-4">
                    Let&apos;s build something <span className="gradient-accent">together.</span>
                  </h3>
                  <p className="mt-4 text-white/60 max-w-md">
                    Available for freelance projects, full-time roles, and interesting collaborations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link to="/contact" className="btn-primary">
                    <Mail size={16} /> Start a project
                  </Link>
                  <Link to="/projects" className="btn-ghost">
                    View work <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
