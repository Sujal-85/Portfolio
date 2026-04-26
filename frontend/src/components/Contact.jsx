import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, Code2 } from 'lucide-react';
import { toast } from 'sonner';
import { personal } from '../data/mock';

const LS_KEY = 'sk_contact_messages';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields');
      return;
    }
    setSending(true);
    setTimeout(() => {
      const all = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
      all.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem(LS_KEY, JSON.stringify(all));
      toast.success(`Thanks ${form.name.split(' ')[0]} — I'll get back soon!`);
      setForm({ name: '', email: '', message: '' });
      setSending(false);
    }, 800);
  };

  const socials = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sujal-khedekar', href: personal.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/sujalkhedekar', href: personal.github },
    { icon: Code2, label: 'LeetCode', value: 'leetcode.com/sujalkhedekar', href: personal.leetcode },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* glow background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 400px at 20% 50%, rgba(108,99,255,0.18), transparent 60%), radial-gradient(700px 400px at 80% 50%, rgba(0,212,255,0.12), transparent 60%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="eyebrow"><Send size={12} /> Get in touch</span>
            <h2 className="section-title mt-5">
              Let&apos;s build something <span className="gradient-accent">great together.</span>
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              I&apos;m open to full-time roles, freelance projects, and interesting collaborations.
              Drop a message — I usually respond within a day.
            </p>

            <div className="mt-8 flex items-center gap-2 text-white/55 text-sm">
              <MapPin size={14} /> {personal.location}
            </div>

            <div className="mt-8 space-y-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-[#00D4FF]/40 hover:bg-white/[0.06] transition group">
                  <div className="w-11 h-11 rounded-xl grid place-items-center bg-white/[0.05] border border-white/10 group-hover:border-[#00D4FF]/40">
                    <s.icon size={18} className="text-[#00D4FF]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-mono text-white/40">{s.label}</p>
                    <p className="text-white/90 text-sm font-medium mt-0.5">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 md:p-10 relative">
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.08), transparent 50%)' }} />
              <div className="relative space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-[0.18em] text-white/45">Name</label>
                    <input className="field mt-2" placeholder="Your name"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-[0.18em] text-white/45">Email</label>
                    <input className="field mt-2" placeholder="you@domain.com" type="email"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.18em] text-white/45">Message</label>
                  <textarea rows={5} className="field mt-2 resize-none" placeholder="Tell me about your project, role, or idea…"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                <button disabled={sending} type="submit" className="btn-primary w-full justify-center !py-4">
                  {sending ? 'Sending…' : (<>Send Message <Send size={18} /></>)}
                </button>
                <p className="text-xs text-white/40 text-center">Your message is saved locally for now — backend integration coming soon.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
