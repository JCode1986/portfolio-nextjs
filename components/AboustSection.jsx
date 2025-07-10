'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-16 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I’m a passionate software developer with a focus on creating
            exceptional digital experiences. With experience in building
            scalable web applications using modern technologies like
            <span className="font-medium text-blue-600 dark:text-blue-400">
              {' '}
              Next.js, Tailwind CSS, and Node.js
            </span>, I bring both technical expertise and design sensibility to
            every project.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I thrive in collaborative environments and love turning complex
            problems into simple, elegant solutions. Let’s build something
            amazing together.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-3xl shadow-lg">
            <img
              src="#" // Replace with your image path
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
