'use client';

import { useState } from 'react';
import { site, socialLinks } from '@/lib/content';
import SmoothAnchor from '@/components/SmoothAnchor';

const links = [
  { href: '/#projects', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
  { href: site.resumeUrl, label: 'Resume', external: true },
];

const compactSocialLinks = socialLinks.map((link) => ({
  ...link,
  icon: link.label.toLowerCase(),
}));

function SocialIcon({ name }) {
  if (name === 'github') {
    return (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/86 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-4 px-4 text-sm font-semibold text-slate-200" aria-label="Primary navigation">
        <SmoothAnchor href="/#joseph" className="rounded-md text-white transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          Joseph Hangarter
        </SmoothAnchor>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {link.label}
              </a>
            ) : (
              <SmoothAnchor key={link.href} href={link.href} className="rounded-md transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                {link.label}
              </SmoothAnchor>
            ),
          )}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {compactSocialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={link.label === 'Email' ? `Email ${site.name}` : `View ${site.name} on ${link.label}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              <SocialIcon name={link.icon} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white transition hover:border-cyan-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg className={`h-5 w-5 ${isOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`h-5 w-5 ${isOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 bg-slate-950/96 px-4 py-4 shadow-2xl shadow-slate-950/50 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-slate-100 transition hover:bg-white/10 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  {link.label}
                </a>
              ) : (
                <SmoothAnchor
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-slate-100 transition hover:bg-white/10 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  onNavigate={closeMenu}
                >
                  {link.label}
                </SmoothAnchor>
              ),
            )}

            <div className="mt-2 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {compactSocialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  onClick={closeMenu}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-bold text-slate-100 transition hover:border-cyan-300/50 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <SocialIcon name={link.icon} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
