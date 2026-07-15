import { experience } from '@/lib/content';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">Experience</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">Professional context behind the work.</h2>
        </div>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="reveal-card rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-8" style={{ '--delay': `${index * 100}ms` }}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.period}</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950">{item.company}</h3>
                <p className="mt-1 font-semibold text-blue-700">{item.role}</p>
              </div>
              <div className="mt-5 md:mt-0">
                <p className="leading-7 text-slate-600">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
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
