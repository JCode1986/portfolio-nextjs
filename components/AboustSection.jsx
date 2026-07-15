import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white px-6 py-16 dark:bg-gray-900">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I&apos;m a passionate software developer with a focus on creating exceptional digital experiences. With experience in building scalable web
            applications using modern technologies like
            <span className="font-medium text-blue-600 dark:text-blue-400"> Next.js, Tailwind CSS, and Node.js</span>, I bring both technical expertise
            and design sensibility to every project.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I thrive in collaborative environments and love turning complex problems into simple, elegant solutions. Let&apos;s build something amazing
            together.
          </p>
          <a href="#contact" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white shadow transition-colors hover:bg-blue-700">
            Get in Touch
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg shadow-lg md:mx-0 md:ml-auto">
          <Image src="/jc-profile.jpg" alt="Joseph Hangarter" fill sizes="(max-width: 768px) 384px, 320px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
