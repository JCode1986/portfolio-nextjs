import Image from 'next/image';

const proofPoints = [
  'Translates designs into production-ready responsive interfaces.',
  'Keeps accessibility, metadata, and Core Web Vitals in the implementation plan.',
  'Communicates clearly across product, design, and engineering handoffs.',
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-slate-100 shadow-2xl shadow-slate-200 md:mx-0">
          <Image src="/jc-profile.jpg" alt="Joseph Hangarter" fill sizes="(max-width: 768px) 384px, 360px" className="object-cover" />
          <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur">
            <p className="text-sm font-bold text-slate-950">Frontend Developer</p>
            <p className="mt-1 text-sm text-slate-600">Navy veteran with a product-quality mindset.</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">Why Hire Me</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">I care about the details users feel and teams inherit.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            I build frontend experiences with a practical eye for speed, maintainability, and visual polish. My work centers on React, Next.js,
            Tailwind CSS, and the product habits that make interfaces easier to ship and easier to improve.
          </p>

          <div className="mt-8 space-y-4">
            {proofPoints.map((point, index) => (
              <div key={point} className="reveal-card flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4" style={{ '--delay': `${index * 100}ms` }}>
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-black text-cyan-700">✓</span>
                <p className="leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-8 inline-flex rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
