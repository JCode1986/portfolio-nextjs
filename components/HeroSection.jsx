import Image from 'next/image';
import { proofPoints, site } from '@/lib/content';

const socialLinks = [
  { label: 'GitHub', href: site.githubUrl },
  { label: 'LinkedIn', href: site.linkedinUrl },
  { label: 'Email', href: `mailto:${site.email}` },
];

export default function HeroSection() {
  return (
    <section id="joseph" className="hero-surface relative isolate overflow-hidden px-4 py-16 sm:py-20">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="hero-spotlight absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="animate-fade-in-up">
            <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/80 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-950/20 lg:mx-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Product-Focused Full-Stack Engineer
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Joseph Hangarter builds polished web products from interface to deployment.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              Full-stack engineer specializing in React and Next.js, with professional experience building responsive websites, authenticated
              application workflows, APIs, CMS integrations, automated testing systems, and production-ready user experiences.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#work" className="group inline-flex w-full items-center justify-center rounded-lg bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:w-auto">
                View My Work
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:w-auto">
                Download Resume
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point, index) => (
              <div key={point} className="reveal-card rounded-lg border border-white/10 bg-white/[0.06] p-4 text-left text-sm font-semibold text-slate-200 shadow-xl shadow-slate-950/20 backdrop-blur" style={{ '--delay': `${index * 90}ms` }}>
                {point}
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
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">Open to opportunities</span>
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

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-semibold text-cyan-200">Current focus</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Building useful web products with React, Next.js, data-backed workflows, secure integrations, and careful production delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
