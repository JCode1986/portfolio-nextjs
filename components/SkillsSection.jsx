const skillGroups = [
  {
    title: 'Frontend Engineering',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'UI Systems',
    skills: ['Tailwind CSS', 'Responsive Design', 'Accessibility', 'Design Handoff'],
  },
  {
    title: 'Product Quality',
    skills: ['Performance', 'SEO Metadata', 'Core Web Vitals', 'CMS & Media'],
  },
];

const bars = [
  { skill: 'React/Next.js', level: 95 },
  { skill: 'CSS/Sass/Tailwind', level: 95 },
  { skill: 'JavaScript', level: 95 },
  { skill: 'Responsive Design', level: 95 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.16),transparent_26%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Technical Range</p>
          <h2 className="text-4xl font-black tracking-tight">A toolkit shaped around modern frontend delivery.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="reveal-card rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.09]" style={{ '--delay': `${index * 110}ms` }}>
              <h3 className="mb-5 text-xl font-bold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {bars.map((item, index) => (
            <div key={item.skill} className="skill-line rounded-xl border border-white/10 bg-slate-900/70 p-5" style={{ '--delay': `${index * 100}ms` }}>
              <div className="mb-3 flex justify-between text-sm text-slate-300">
                <span>{item.skill}</span>
                <span>{item.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div style={{ width: `${item.level}%` }} className="animated-bar h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
