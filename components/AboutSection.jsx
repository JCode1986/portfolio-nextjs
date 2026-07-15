import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-4 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(45,212,191,0.1),transparent_26rem)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.82fr_1.18fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/50 md:mx-0">
          <Image src="/jc-profile.jpg" alt="Joseph Hangarter" fill sizes="(max-width: 768px) 384px, 360px" className="object-cover" />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-slate-950/82 p-4 shadow-lg backdrop-blur">
            <p className="text-sm font-bold text-white">Full-stack engineer</p>
            <p className="mt-1 text-sm leading-6 text-slate-300">Frontend and product focus with JavaScript, React, and Next.js.</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">About</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">I build complete products, not isolated screens.</h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>
              I am a full-stack engineer with a strong frontend and product focus. JavaScript is my strongest programming language, and I specialize
              in React and Next.js for building responsive, production-ready web applications.
            </p>
            <p>
              I created WhereKeep, a full-stack household inventory product, and I am building QuickQR as a focused commercial frontend product. My
              professional engineering experience includes healthcare websites, dashboards, CMS integrations, APIs, authentication workflows, testing,
              and production support.
            </p>
            <p>
              My Navy background shaped how I approach ownership, communication, accountability, and operational discipline. I bring that same
              directness to product planning, implementation, deployment, and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
