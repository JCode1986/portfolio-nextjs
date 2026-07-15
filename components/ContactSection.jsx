import { site } from '@/lib/content';

const contactLinks = [
  { href: `mailto:${site.email}`, label: 'Email Joseph' },
  { href: site.linkedinUrl, label: 'View LinkedIn' },
  { href: site.githubUrl, label: 'View GitHub' },
  { href: site.resumeUrl, label: 'Download Resume' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 bg-slate-950 px-4 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-slate-950/40">
        <div className="grid md:grid-cols-[1fr_0.85fr]">
          <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_28rem),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.16),transparent_28rem)]" />
            <div className="relative">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Contact</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Building a web product or growing an engineering team?</h2>
              <p className="mt-5 leading-8 text-slate-300">
                I&apos;m open to full-stack and frontend-focused opportunities where product quality, practical engineering, and clear ownership matter.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-400">{site.location} - open to remote and Seattle-area opportunities</p>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/70 p-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  {link.label}
                  <svg className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
