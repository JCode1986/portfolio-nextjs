import ProjectVisual from '@/components/ProjectVisual';
import { site } from '@/lib/content';

const accentStyles = {
  teal: {
    text: 'text-emerald-200',
    badge: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100',
    card: 'border-emerald-300/15 bg-emerald-300/10',
    button: 'bg-emerald-300 text-slate-950 hover:bg-white focus-visible:outline-emerald-200',
  },
  purple: {
    text: 'text-violet-200',
    badge: 'border-violet-300/25 bg-violet-300/10 text-violet-100',
    card: 'border-violet-300/15 bg-violet-300/10',
    button: 'bg-violet-300 text-slate-950 hover:bg-white focus-visible:outline-violet-200',
  },
  gold: {
    text: 'text-amber-100',
    badge: 'border-amber-200/25 bg-amber-200/10 text-amber-100',
    card: 'border-amber-200/15 bg-amber-200/10',
    button: 'bg-amber-200 text-slate-950 hover:bg-white focus-visible:outline-amber-100',
  },
};

function Section({ title, children }) {
  return (
    <section className="border-t border-white/10 py-10">
      <h2 className="text-2xl font-black tracking-tight text-white">{title}</h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function List({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 leading-7 text-slate-300">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ExtraCaseSections({ sections }) {
  if (!sections?.length) return null;

  return sections.map((section) => (
    <Section key={section.title} title={section.title}>
      {section.body ? <p className="max-w-3xl leading-8">{section.body}</p> : null}
      <List items={section.items} />
    </Section>
  ));
}

export default function CaseStudyPage({ project }) {
  const accent = accentStyles[project.accent] || accentStyles.teal;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="relative overflow-hidden px-4 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(45,212,191,0.12),transparent_28rem),radial-gradient(circle_at_85%_18%,rgba(139,92,246,0.13),transparent_30rem)]" />
        <div className="relative mx-auto max-w-6xl">
          <a href="/#projects" className="inline-flex rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            Back to work
          </a>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${accent.badge}`}>{project.badge}</span>
                <span className="text-sm font-semibold text-slate-300">{project.category}</span>
              </div>
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.longDescription}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex min-h-12 justify-center rounded-xl px-5 py-3 font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${accent.button}`}
                  >
                    {project.ctaPrimary || 'View Live Project'}
                  </a>
                ) : null}
                <a href={`mailto:${site.email}`} className="inline-flex min-h-12 justify-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                  Email Joseph
                </a>
              </div>
            </div>

            <ProjectVisual project={project} priority compact={project.slug !== 'wherekeep'} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className={`grid gap-5 rounded-[1.5rem] border p-5 shadow-2xl shadow-slate-950/30 md:grid-cols-3 ${accent.card}`}>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Role</p>
            <p className="mt-2 font-bold text-white">{project.role}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Timeline</p>
            <p className="mt-2 font-bold text-white">{project.timeline}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Status</p>
            <p className={`mt-2 font-bold ${accent.text}`}>{project.status}</p>
          </div>
        </div>

        <Section title="Overview">
          <p className="max-w-3xl leading-8">{project.description}</p>
        </Section>

        <Section title={project.slug === 'leah-naidoo' ? 'Client Goal' : 'Product Problem'}>
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

        <Section title={project.slug === 'quickqr' ? 'Architecture and Payment Model' : project.slug === 'wherekeep' ? 'Technical Architecture' : 'Implementation Approach'}>
          <List items={project.architecture} />
        </Section>

        <Section title="Key Engineering Challenges">
          <List items={project.challenges} />
        </Section>

        <Section title="Decisions and Tradeoffs">
          <List items={project.tradeoffs} />
        </Section>

        <ExtraCaseSections sections={project.caseStudySections} />

        {/* <Section title="Screenshot Assets">
          <div className="rounded-[1.35rem] border border-dashed border-white/20 bg-white/[0.04] p-5">
            <p className="font-bold text-white">Useful screenshots to add as the project asset set grows:</p>
            <div className="mt-4">
              <List items={project.screenshots} />
            </div>
          </div>
        </Section> */}

        {project.currentStatus || project.futureImprovements?.length ? (
          <Section title="Current Status and Future Improvements">
            {project.currentStatus ? <p className="mb-5 max-w-3xl leading-8">{project.currentStatus}</p> : null}
            <List items={project.futureImprovements} />
          </Section>
        ) : null}

        <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 text-white shadow-2xl shadow-slate-950/30">
          <h2 className="text-2xl font-black">Interested in similar work?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            I build web products with JavaScript, React, Next.js, responsive UI, data-backed workflows, payment integrations, and practical production habits.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex min-h-12 justify-center rounded-xl px-5 py-3 font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${accent.button}`}
              >
                {project.ctaPrimary || 'View Live Project'}
              </a>
            ) : null}
            <a href={`mailto:${site.email}`} className="inline-flex min-h-12 justify-center rounded-xl border border-white/15 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              Email Joseph
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
