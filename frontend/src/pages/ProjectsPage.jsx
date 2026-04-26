import React from 'react';
import Projects from '../components/Projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <main className="pt-24">
      <Projects />
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Have a project in mind?
              </h3>
              <p className="text-white/55 mt-2">From MVP to scale — freelance, internship, or full-time. Let&apos;s talk.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="btn-primary"><Mail size={16} /> Contact me</Link>
              <Link to="/" className="btn-ghost">Back home <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
