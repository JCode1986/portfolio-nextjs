import { site } from '@/lib/content';

const links = [
  { label: 'GitHub', href: site.githubUrl },
  { label: 'LinkedIn', href: site.linkedinUrl },
  { label: 'Email', href: `mailto:${site.email}` },
  { label: 'Resume', href: site.resumeUrl },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-10 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-black text-white">Joseph Hangarter</p>
          <p className="mt-1 text-sm">Full-Stack Engineer</p>
          <p className="mt-1 text-sm">(c) {year} Joseph Hangarter</p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-4 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
              rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noreferrer' : undefined}
              className="rounded-md transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
