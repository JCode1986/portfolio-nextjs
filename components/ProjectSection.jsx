const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard with dark mode, real-time charts, and responsive design',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
  },
  {
    title: 'Social Media App',
    description: 'Full-featured social platform with real-time messaging and notifications',
    tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Featured Projects</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 h-2 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
