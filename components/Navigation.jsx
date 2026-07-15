import Link from 'next/link';

export default function Navigation() {
  const links = [
    { href: '/#joseph', label: 'Joseph' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm font-medium text-gray-800">
        <Link href="/#joseph" className="font-semibold text-gray-950">
          Joseph Hangarter
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-blue-600">
              {link.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-600">
            Resume
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-gray-200 text-gray-800">
            <span className="sr-only">Toggle menu</span>
            <svg className="h-5 w-5 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className="hidden h-5 w-5 group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-md px-3 py-2 hover:bg-gray-50 hover:text-blue-600">
                {link.label}
              </Link>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="block rounded-md px-3 py-2 hover:bg-gray-50 hover:text-blue-600">
              Resume
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
