import { experience } from '@/lib/content';

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/10 bg-slate-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Experience</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Professional Experience</h2>
        </div>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="reveal-card rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/20 md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-8" style={{ '--delay': `${index * 100}ms` }}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{item.period}</p>
                <h3 className="mt-2 text-2xl font-black text-white">{item.company}</h3>
                <p className="mt-1 font-semibold text-cyan-200">{item.role}</p>
              </div>
              <div className="mt-5 md:mt-0">
                <p className="leading-7 text-slate-300">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm font-semibold text-slate-200">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
