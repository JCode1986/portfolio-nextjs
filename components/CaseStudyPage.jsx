import Image from 'next/image';
import SmoothAnchor from '@/components/SmoothAnchor';

function Section({ title, children }) {
  return (
    <section className="border-t border-slate-200 py-10">
      <h2 className="text-2xl font-black tracking-tight text-slate-950">{title}</h2>
      <div className="mt-5 text-slate-600">{children}</div>
    </section>
  );
}

function List({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage({ project }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <SmoothAnchor href="/#work" className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            Back to work
          </SmoothAnchor>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{project.category}</p>
              <h1 className="text-5xl font-black tracking-tight">{project.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">{project.longDescription}</p>
              {project.confidentialityNotice ? (
                <p className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
                  {project.confidentialityNotice}
                </p>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-white">
                    {project.ctaPrimary || 'View Live Project'}
                  </a>
                ) : null}
                {project.repositoryUrl ? (
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                    View GitHub
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-slate-100 shadow-2xl shadow-cyan-950/30">
              <Image src={project.heroImage} alt={project.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-contain p-3" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Role</p>
            <p className="mt-2 font-semibold text-slate-950">{project.role}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Timeline</p>
            <p className="mt-2 font-semibold text-slate-950">{project.timeline}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Status</p>
            <p className="mt-2 font-semibold text-slate-950">{project.status}</p>
          </div>
        </div>

        <Section title="Overview">
          <p className="max-w-3xl leading-8">{project.description}</p>
        </Section>

        <Section title={project.slug === 'leah-naidoo' ? 'Client Goal' : 'The Problem'}>
          <p className="max-w-3xl leading-8">{project.problem}</p>
        </Section>

        <Section title="Product Goals">
          <List items={project.goals} />
        </Section>

        <Section title="My Role and Responsibilities">
          <List items={project.responsibilities} />
        </Section>

        <Section title={project.slug === 'leah-naidoo' ? 'Audience' : 'Target Users'}>
          <List items={project.users} />
        </Section>

        <Section title="Core Features">
          <List items={project.features} />
        </Section>

        <Section title={project.slug === 'wherekeep' ? 'Technical Architecture' : 'Implementation Approach'}>
          <List items={project.architecture} />
        </Section>

        <Section title="Key Engineering Challenges">
          <List items={project.challenges} />
        </Section>

        <Section title="Decisions and Tradeoffs">
          <List items={project.tradeoffs} />
        </Section>

        {project.lessons ? (
          <Section title="Lessons and Engineering Impact">
            <List items={project.lessons} />
          </Section>
        ) : null}

        <Section title="Screenshots">
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">
            <p className="font-semibold text-slate-950">Screenshot assets to add:</p>
            <List items={project.screenshots} />
          </div>
        </Section>

        {project.currentStatus || project.futureImprovements?.length ? (
          <Section title="Current Status and Future Improvements">
            {project.currentStatus ? <p className="mb-5 max-w-3xl leading-8">{project.currentStatus}</p> : null}
            <List items={project.futureImprovements} />
          </Section>
        ) : null}

        <section className="rounded-2xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-black">Interested in similar work?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            I build web products with React, Next.js, responsive UI, data-backed workflows, and practical production habits.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-white">
                {project.ctaPrimary || 'View Live Project'}
              </a>
            ) : null}
            <a href="mailto:joseph.hangarter@yahoo.com" className="inline-flex justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Email Joseph
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
