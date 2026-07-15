const skills = [
  { skill: 'React/Next.js', level: 95 },
  { skill: 'Spring Boot', level: 85 },
  { skill: 'UI/UX Design', level: 85 },
  { skill: 'CSS/Sass/Tailwind', level: 95 },
  { skill: 'JavaScript', level: 95 },
  { skill: 'Responsive Design', level: 95 },
  { skill: 'CMS & Media', level: 95 },
  { skill: 'REST API', level: 90 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-100 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Technical Skills</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>{item.skill}</span>
                <span>{item.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div style={{ width: `${item.level}%` }} className="h-full bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
