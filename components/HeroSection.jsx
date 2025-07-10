'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div id="joseph" className='flex items-center justify-center min-h-[80vh]'>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('/hero-tech-bg.jpg')" }}
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
              className='mx-auto rounded-full mb-5 shadow-md border'
              width={400}
              height={400}
              alt="Image of the most amazing developer ever, Joseph Hangarter!"
              src="/jc-profile.jpg"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent h-[103px] sm:h-[84px] bg-gradient-to-r from-blue-600 to-purple-600">
              Joseph Hangarter
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Frontend Developer | NAVY Veteran</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">React</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Next.js</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">JavaScript</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Tailwind CSS</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
