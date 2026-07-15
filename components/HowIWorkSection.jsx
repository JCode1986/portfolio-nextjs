import { howIWork } from '@/lib/content';

export default function HowIWorkSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">How I Work</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Practical habits that make delivery smoother.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {howIWork.map((item, index) => (
            <article key={item.title} className="reveal-card rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-slate-950/20" style={{ '--delay': `${index * 110}ms` }}>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-black text-cyan-200">{index + 1}</div>
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
