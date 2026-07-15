import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/content';

export default function ProjectsSection() {
  return (
    <section id="work" className="relative bg-slate-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">Featured Work</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">Real product work, client delivery, and focused technical depth.</h2>
          <p className="mt-4 leading-7 text-slate-600">
            A concise set of projects that show full-stack product thinking, responsive UI, secure workflows, and professional engineering judgment.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={project.slug} className="project-card group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/80 lg:grid-cols-[0.95fr_1.05fr]" style={{ '--delay': `${index * 120}ms` }}>
              <div className="relative min-h-72 bg-slate-950">
                <Image src={project.heroImage} alt={project.imageAlt} fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{project.category}</p>
                <h3 className="text-3xl font-black tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 7).map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
                      {project.ctaPrimary}
                    </a>
                  ) : null}
                  <Link href={`/work/${project.slug}`} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
                    {project.ctaSecondary || 'Read Case Study'}
                  </Link>
                  {project.repositoryUrl ? (
                    <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
