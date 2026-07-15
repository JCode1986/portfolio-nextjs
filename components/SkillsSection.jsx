import { skillGroups } from '@/lib/content';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.16),transparent_26%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Skills</p>
          <h2 className="text-4xl font-black tracking-tight">Capabilities shaped around full-stack product delivery.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="reveal-card rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.09]" style={{ '--delay': `${index * 110}ms` }}>
              <h3 className="mb-5 text-xl font-bold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
