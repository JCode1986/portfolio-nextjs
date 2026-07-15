import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-slate-100 shadow-2xl shadow-slate-200 md:mx-0">
          <Image src="/jc-profile.jpg" alt="Joseph Hangarter" fill sizes="(max-width: 768px) 384px, 360px" className="object-cover" />
          <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur">
            <p className="text-sm font-bold text-slate-950">Full-stack engineer</p>
            <p className="mt-1 text-sm text-slate-600">React and Next.js focus with product ownership habits.</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">About</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">I like building products that feel clear, useful, and maintainable.</h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              I am a full-stack engineer with a strong frontend and product focus. I specialize in React and Next.js, and I care about building
              usable web products, not just completing isolated tickets.
            </p>
            <p>
              My professional work includes healthcare websites, authenticated workflows, CMS integrations, APIs, testing, and production support. I
              also independently designed and built WhereKeep, a household inventory SaaS product.
            </p>
            <p>
              My Navy background shaped how I approach ownership, communication, discipline, and decisions under pressure. I try to bring that same
              directness and accountability to engineering work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
