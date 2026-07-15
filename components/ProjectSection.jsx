import Link from 'next/link';
import { projects } from '@/lib/content';
import ProjectVisual from '@/components/ProjectVisual';

const accentStyles = {
  teal: {
    panel: 'border-emerald-300/15 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(6,78,59,0.28),rgba(15,23,42,0.98))] shadow-emerald-950/30',
    mark: 'border-emerald-300/25 bg-emerald-300/12 text-emerald-100',
    badge: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100',
    tag: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-50',
    primary: 'bg-emerald-300 text-slate-950 hover:bg-white focus-visible:outline-emerald-200',
    secondary: 'border-emerald-300/25 text-emerald-50 hover:border-emerald-200/70 hover:bg-emerald-300/10 focus-visible:outline-emerald-200',
  },
  purple: {
    panel: 'border-violet-300/15 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(67,56,202,0.26),rgba(15,23,42,0.98))] shadow-violet-950/30',
    mark: 'border-violet-300/25 bg-violet-300/12 text-violet-100',
    badge: 'border-violet-300/25 bg-violet-300/10 text-violet-100',
    tag: 'border-violet-300/20 bg-violet-300/10 text-violet-50',
    primary: 'bg-violet-300 text-slate-950 hover:bg-white focus-visible:outline-violet-200',
    secondary: 'border-violet-300/25 text-violet-50 hover:border-violet-200/70 hover:bg-violet-300/10 focus-visible:outline-violet-200',
  },
  gold: {
    panel: 'border-amber-200/15 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(120,83,38,0.24),rgba(15,23,42,0.98))] shadow-amber-950/25',
    mark: 'border-amber-200/25 bg-amber-200/12 text-amber-100',
    badge: 'border-amber-200/25 bg-amber-200/10 text-amber-100',
    tag: 'border-amber-200/20 bg-amber-200/10 text-amber-50',
    primary: 'bg-amber-200 text-slate-950 hover:bg-white focus-visible:outline-amber-100',
    secondary: 'border-amber-200/25 text-amber-50 hover:border-amber-100/70 hover:bg-amber-200/10 focus-visible:outline-amber-100',
  },
};

function ProjectMark({ title, accent }) {
  const initials = title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

  return (
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-sm font-black ${accent.mark}`} aria-hidden="true">
      {initials}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(45,212,191,0.12),transparent_26rem),radial-gradient(circle_at_85%_24%,rgba(139,92,246,0.12),transparent_28rem)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Selected Projects</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">Featured Work</h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">Real product development and professional client delivery.</p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {projects.map((project, index) => {
            const accent = accentStyles[project.accent] || accentStyles.teal;
            const isFlagship = project.flagship;

            return (
              <article
                key={project.slug}
                className={`project-panel group overflow-hidden rounded-[1.75rem] border p-5 shadow-2xl transition duration-300 hover:-translate-y-1 ${accent.panel} ${isFlagship ? 'sm:p-7 lg:p-8' : 'sm:p-6 lg:p-7'}`}
                style={{ '--delay': `${index * 120}ms` }}
              >
                <div className={`grid gap-8 ${isFlagship ? 'lg:grid-cols-[0.84fr_1.16fr]' : 'lg:grid-cols-[0.92fr_1.08fr]'} lg:items-center`}>
                  <div className="flex min-w-0 flex-col">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <ProjectMark title={project.title} accent={accent} />
                      <div>
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${accent.badge}`}>
                          {project.badge}
                        </span>
                        <p className="mt-2 text-sm font-semibold text-slate-300">{project.category}</p>
                      </div>
                    </div>

                    <h3 className={`${isFlagship ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} text-balance font-black tracking-tight text-white`}>
                      {project.title}
                    </h3>
                    <p className={`${isFlagship ? 'text-lg' : 'text-base'} mt-4 max-w-2xl leading-8 text-slate-300`}>{project.description}</p>

                    {isFlagship ? (
                      <div className="mt-5 grid gap-2 text-sm font-semibold text-emerald-100 sm:grid-cols-2">
                        {['Product planning', 'Authentication', 'Supabase architecture', 'Stripe billing'].map((item) => (
                          <span key={item} className="rounded-xl border border-emerald-300/15 bg-emerald-300/10 px-3 py-2">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tag) => (
                        <span key={tag} className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${accent.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 font-bold shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${accent.primary}`}
                        >
                          {project.ctaPrimary}
                        </a>
                      ) : null}
                      <Link
                        href={`/work/${project.slug}`}
                        className={`inline-flex min-h-12 items-center justify-center rounded-xl border bg-white/[0.03] px-5 py-3 font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${accent.secondary}`}
                      >
                        {project.ctaSecondary || 'Read Case Study'}
                      </Link>
                    </div>
                  </div>

                  <ProjectVisual project={project} compact={!isFlagship} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
