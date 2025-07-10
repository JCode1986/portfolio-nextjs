'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section id="contact" className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative p-12 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-200 bg-white shadow-lg"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
					<div className="relative z-10">
						<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
							<h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
								Let&apos;s Connect
							</h2>
							<p className="text-gray-600 text-center mb-4">Ready to collaborate or have a project in mind? Let&apos;s make something amazing together.</p>
							<div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>Redmond, WA</span>
							</div>
						</motion.div>
						<div className="flex flex-col items-center gap-6 mb-8">
							<motion.a
								href="mailto:joseph.hangarter@yahoo.com"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-white"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								Get in Touch
							</motion.a>
							<motion.a
								href="/resume.pdf"
								target="_blank"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex items-center gap-3 px-8 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl border border-gray-200 transition-all duration-300"
							>
								<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								<span className="font-medium text-gray-600">View Resume</span>
							</motion.a>
							<div className="flex gap-4">
								<motion.a
									href="https://www.linkedin.com/in/joseph-hangarter/"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 transition-all duration-300"
								>
									<svg className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</motion.a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}