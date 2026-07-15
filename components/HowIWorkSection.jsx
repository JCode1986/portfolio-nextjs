import { howIWork } from '@/lib/content';

export default function HowIWorkSection() {
  return (
    <section className="bg-slate-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">How I Work</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">Practical habits that make delivery smoother.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {howIWork.map((item, index) => (
            <article key={item.title} className="reveal-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style={{ '--delay': `${index * 110}ms` }}>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-cyan-300">{index + 1}</div>
              <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
