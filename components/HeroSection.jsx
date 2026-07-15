import Image from 'next/image';

const highlights = [
  'Performance-first UI',
  'Accessible components',
  'Responsive systems',
  'Clean handoff',
];

const stats = [
  { value: '95+', label: 'Lighthouse targets' },
  { value: '8+', label: 'core web skills' },
  { value: '24/7', label: 'ownership mindset' },
];

export default function Hero() {
  return (
    <section id="joseph" className="hero-surface relative isolate overflow-hidden px-4 py-16 sm:py-20">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="hero-spotlight absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-24 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl md:h-96 md:w-96" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="animate-fade-in-up">
            <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/80 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-950/20 lg:mx-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Frontend developer ready for product teams
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Joseph Hangarter builds fast, polished interfaces.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              React and Next.js developer focused on performance, accessible UI, and the kind of product detail hiring managers can trust in production.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center rounded-lg bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                View Work
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/15 sm:w-auto"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div key={stat.label} className="reveal-card rounded-lg border border-white/10 bg-white/[0.06] p-4 text-center shadow-xl shadow-slate-950/20 backdrop-blur" style={{ '--delay': `${index * 90}ms` }}>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="profile-orbit absolute inset-0 rounded-[2rem]" />
          <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">Available</span>
            </div>

            <Image
              className="mx-auto h-48 w-48 rounded-2xl border border-white/15 object-cover shadow-xl sm:h-56 sm:w-56"
              width={224}
              height={224}
              alt="Joseph Hangarter"
              src="/jc-profile.jpg"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 192px, 224px"
            />

            <div className="mt-6 space-y-3">
              {highlights.map((item, index) => (
                <div key={item} className="skill-line flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3" style={{ '--delay': `${index * 110}ms` }}>
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#projects" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cyan-100 sm:block" aria-label="Skip to projects">
        <svg className="h-6 w-6 animate-bounce-lite" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
