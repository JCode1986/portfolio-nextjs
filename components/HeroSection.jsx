import Image from 'next/image';

export default function Hero() {
  return (
    <section id="joseph" className="relative isolate flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden bg-slate-50 px-4 py-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(239,246,255,0.9),rgba(255,255,255,0.92),rgba(250,245,255,0.9))]" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <Image
            className="mx-auto mb-5 h-56 w-56 rounded-full border border-white object-cover shadow-md md:h-80 md:w-80"
            width={320}
            height={320}
            alt="Image of the most amazing developer ever, Joseph Hangarter!"
            src="/jc-profile.jpg"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 224px, 320px"
          />
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Joseph Hangarter
          </h1>
          <p className="mb-8 text-xl text-gray-700 md:text-2xl">Frontend Developer | Navy Veteran</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-blue-700">React</span>
            <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-blue-700">Next.js</span>
            <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-blue-700">JavaScript</span>
            <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-blue-700">Tailwind CSS</span>
          </div>
        </div>
      </div>

      <a href="#projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600" aria-label="Skip to projects">
        <svg className="h-6 w-6 animate-bounce-lite" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
