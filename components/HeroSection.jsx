import Image from 'next/image';
import { credibilityCards, site, socialLinks } from '@/lib/content';

const iconPaths = {
  calendar: 'M8 2v4m8-4v4M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 9h3m3 0h3M8 17h3m3 0h3',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4',
  code: 'm8 9-4 3 4 3m8-6 4 3-4 3M14 5l-4 14',
  shield: 'M12 3 4.5 6v5.5c0 4.2 2.9 8.1 7.5 9.5 4.6-1.4 7.5-5.3 7.5-9.5V6L12 3Z',
};

const accentClasses = {
  cyan: 'border-cyan-300/15 bg-cyan-300/10 text-cyan-200',
  violet: 'border-violet-300/15 bg-violet-300/10 text-violet-200',
  emerald: 'border-emerald-300/15 bg-emerald-300/10 text-emerald-200',
  blue: 'border-blue-300/15 bg-blue-300/10 text-blue-200',
};

const identityIconPaths = {
  location: 'M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  shield: 'M12 3 5 6v5.5c0 4 2.8 7.7 7 9 4.2-1.3 7-5 7-9V6l-7-3Z',
};

const focusRows = [
  ['Improving WhereKeep', 'rocket', 'text-cyan-300'],
  ['Creating QuickQR', 'spark', 'text-violet-300'],
];

function Icon({ name }) {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  );
}

function IdentityIcon({ name }) {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path d={identityIconPaths[name]} />
    </svg>
  );
}

function FocusIcon({ name, className }) {
  const paths = {
    rocket: 'M4.5 16.5 3 21l4.5-1.5M9 15l-3 3m5.5-12.5C14 3 17.1 2.4 21 3c.6 3.9 0 7-2.5 9.5L13 18l-7-7 5.5-5.5ZM15 7.5h.01M7 14l-2 2m5-9L8 5',
    spark: 'm12 3 1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z',
  };

  return (
    <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center ${className}`} aria-hidden="true">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d={paths[name]} />
      </svg>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="joseph" className="hero-surface relative isolate overflow-hidden px-4 pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="hero-spotlight absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-12">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="animate-fade-in-up mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20 lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.85)]" aria-hidden="true" />
            Product-Focused Full-Stack Engineer
          </p>

          <h1 className="animate-fade-in-up text-balance text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl" style={{ '--delay': '80ms' }}>
            Joseph Hangarter builds polished web products from interface to deployment.
          </h1>

          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200/80 sm:text-lg sm:leading-9 md:text-xl lg:mx-0" style={{ '--delay': '140ms' }}>
            Full-stack engineer specializing in modern JavaScript, React, and Next.js, with experience building responsive web applications, APIs,
            authentication systems, payment workflows, and production-ready products.
          </p>

          <div className="animate-fade-in-up mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start" style={{ '--delay': '200ms' }}>
            <a href="#projects" className="group inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:w-auto">
              View My Work
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
            <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:w-auto">
              Download Resume
            </a>
          </div>

          <div className="animate-fade-in-up mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" style={{ '--delay': '260ms' }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[40rem]">
          <article className="relative mx-auto mb-3 w-full overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-950/[0.82] p-4 shadow-2xl shadow-cyan-950/25 sm:p-5 lg:p-6">
            <div className="mb-4 flex justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.75)]" aria-hidden="true" />
                Open to opportunities
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.44fr_0.56fr] md:items-center lg:gap-7">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-56 overflow-hidden rounded-[1.25rem] border border-white/15 shadow-2xl shadow-slate-950/45 md:max-w-none">
                <Image
                  className="object-cover object-top"
                  fill
                  alt="Portrait of Joseph Hangarter"
                  src="/jc-profile.jpg"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 224px, (max-width: 1280px) 20vw, 280px"
                />
              </div>

              <div className="text-center md:text-left">
                <div>
                  <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">Joseph Hangarter</h2>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">Full-Stack Engineer</p>
                </div>

                <div className="my-4 h-px bg-white/10" />

                <div>
                  <p className="text-sm font-bold text-slate-200">Current focus</p>
                  <div className="mt-2.5 space-y-2.5 text-sm font-semibold text-slate-300">
                    {focusRows.map(([item, icon, iconClass]) => (
                      <div key={item} className="mx-auto flex w-fit items-center gap-3 md:mx-0">
                        <FocusIcon name={icon} className={iconClass} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-slate-300 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <div className="flex items-center justify-center gap-2">
                <IdentityIcon name="location" />
                <span>Redmond, WA</span>
              </div>
              <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />
              <div className="flex items-center justify-center gap-2">
                <IdentityIcon name="shield" />
                <span>U.S. Navy Veteran</span>
              </div>
            </div>
          </article>

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {credibilityCards.map((card, index) => (
              <article
                key={card.label}
                className="reveal-card rounded-[1.15rem] border border-white/10 bg-slate-950/50 p-4 text-left shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900/55"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl border ${accentClasses[card.accent]}`}>
                  <Icon name={card.icon} />
                </div>
                <h2 className="text-lg font-black tracking-tight text-white sm:text-xl">{card.value}</h2>
                <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-400">{card.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
