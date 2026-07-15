const channels = [
  { href: 'mailto:joseph.hangarter@yahoo.com', label: 'Email', value: 'joseph.hangarter@yahoo.com' },
  { href: 'https://www.linkedin.com/in/joseph-hangarter/', label: 'LinkedIn', value: 'joseph-hangarter' },
  { href: '/resume.pdf', label: 'Resume', value: 'Open PDF' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 px-4 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
        <div className="grid md:grid-cols-[1fr_0.85fr]">
          <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.22),transparent_30%)]" />
            <div className="relative">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Next Step</p>
              <h2 className="text-4xl font-black tracking-tight">Looking for a frontend developer who sweats the interface?</h2>
              <p className="mt-5 leading-8 text-slate-300">
                I&apos;m interested in frontend roles where performance, design quality, and practical engineering judgment matter.
              </p>
              <a
                href="mailto:joseph.hangarter@yahoo.com"
                className="mt-8 inline-flex rounded-lg bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to opportunities
            </div>
            <div className="space-y-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') || channel.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') || channel.href.endsWith('.pdf') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50"
                >
                  <span>
                    <span className="block text-sm font-bold text-slate-950">{channel.label}</span>
                    <span className="mt-1 block text-sm text-slate-600">{channel.value}</span>
                  </span>
                  <svg className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
