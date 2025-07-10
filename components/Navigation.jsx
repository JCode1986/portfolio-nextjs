'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm h-0">
      <nav className="mx-auto flex items-center justify-center">

        <div className={`hidden md:flex justify-center space-x-6 text-sm font-medium bg-white p-4 w-full shadow transition-all duration-300 ease-in-out`}>
          <Link href="/#joseph" className="hover:text-blue-600">Joseph</Link>
          <Link href="/#projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/#skills" className="hover:text-blue-600">Skills</Link>
          {/* <Link href="/#about" className="hover:text-blue-600">About Me</Link> */}
          <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
          <a href="/resume.pdf" target="_blank" className="hover:text-blue-600">Resume</a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 text-sm font-medium absolute right-0 max-w-[150px] pt-4 w-full top-[61px]">
          <Link href="/#projects" className="block hover:text-blue-600">Projects</Link>
          <Link href="/about" className="block hover:text-blue-600">About</Link>
          <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
          <a href="/resume.pdf" target="_blank" className="block hover:text-blue-600">Resume</a>
        </div>
      )}
    </header>
  );
}