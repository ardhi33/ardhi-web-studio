const skills = [
  {
    number: "01",
    category: "Frontend",
    technologies: "Next.js · React · TypeScript",
  },
  {
    number: "02",
    category: "Styling",
    technologies: "Tailwind CSS · CSS · Responsive Design",
  },
  {
    number: "03",
    category: "Backend",
    technologies: "Node.js · REST API",
  },
  {
    number: "04",
    category: "Tools",
    technologies: "Git · GitHub · VS Code",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-black" />

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Skills
          </p>
        </div>

        {/* Intro */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-6xl">
            Tools I use to
            <br />
            <span className="text-gray-400">
              build the web.
            </span>
          </h2>

          <p className="max-w-lg self-end leading-7 text-gray-500">
            I work with modern web technologies to build
            responsive, accessible, and maintainable digital
            experiences. My toolkit continues to evolve as I
            learn and explore new technologies.
          </p>
        </div>

        {/* Skills List */}
        <div className="border-t border-gray-200">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className="group grid gap-4 border-b border-gray-200 py-7 transition-all duration-300 md:grid-cols-[80px_1fr_1.5fr_auto] md:items-center"
            >
              {/* Number */}
              <span className="text-xs text-gray-400">
                {skill.number}
              </span>

              {/* Category */}
              <h3 className="text-lg font-medium tracking-tight">
                {skill.category}
              </h3>

              {/* Technologies */}
              <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-white">
                {skill.technologies}
              </p>

              {/* Arrow */}
              <span className="hidden text-xl text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:block">
                ↗
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 flex flex-col gap-4 border-b border-gray-200 pb-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            Always learning. Always building.
          </p>

          <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
            My Toolkit
          </span>
        </div>

      </div>
    </section>
  );
}