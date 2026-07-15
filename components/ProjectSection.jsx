const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'Operational dashboard experience with fast scanning, dark-mode ready surfaces, and responsive data views.',
    impact: 'Designed for conversion, inventory visibility, and repeat admin workflows.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
  },
  {
    title: 'Social Media App',
    description: 'Full-featured social platform concept with messaging, notification patterns, and mobile-first flows.',
    impact: 'Built around real-time interaction states and clear content hierarchy.',
    tags: ['Next.js', 'Socket.io', 'Prisma', 'Tailwind CSS'],
    gradient: 'from-fuchsia-400 via-purple-500 to-cyan-400',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-slate-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">Selected Work</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">Interfaces built for speed, clarity, and trust.</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/80" style={{ '--delay': `${index * 120}ms` }}>
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 shadow-inner">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-2" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">case-study.jsx</span>
                </div>
                <div className="space-y-3">
                  <div className={`h-20 rounded-lg bg-gradient-to-br ${project.gradient} opacity-90 transition duration-500 group-hover:scale-[1.02]`} />
                  <div className="grid grid-cols-3 gap-3">
                    <span className="h-10 rounded-md bg-white/10" />
                    <span className="h-10 rounded-md bg-white/10" />
                    <span className="h-10 rounded-md bg-white/10" />
                  </div>
                  <span className="block h-3 w-4/5 rounded-full bg-cyan-200/40" />
                  <span className="block h-3 w-3/5 rounded-full bg-white/15" />
                </div>
              </div>

              <div className="pt-6">
                <h3 className="mb-2 text-2xl font-black text-slate-950">{project.title}</h3>
                <p className="mb-3 leading-7 text-slate-600">{project.description}</p>
                <p className="mb-5 text-sm font-semibold text-slate-800">{project.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition-colors group-hover:border-cyan-200 group-hover:bg-cyan-50">
                      {tag}
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
