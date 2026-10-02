const projects = [
  {
    number: "01",
    title: "Coffee Shop Website",
    description:
      "A modern and responsive website designed for a coffee shop with a clean and engaging user experience.",
    technologies: ["Next.js", "Node.js", "Tailwind CSS"],
    image: "/projects/coffee-shop.png",
    link: "#",
  },
  {
    number: "02",
    title: "Portfolio Website",
    description:
      "A minimal personal portfolio website designed to showcase creative work, skills, and digital experiences.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/portfolio-web.png",
    link: "#",
  },
  {
    number: "03",
    title: "Business Website",
    description:
      "A professional business website focused on clear communication, responsive design, and a simple user experience.",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/projects/project-3.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-black" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Selected Work
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-6xl">
              Selected projects
              <br />
              <span className="text-gray-400">
                that I've built.
              </span>
            </h2>
          </div>

          <p className="max-w-lg self-end leading-7 text-gray-500 lg:ml-auto">
            A collection of projects where design, technology,
            and functionality come together to create meaningful
            digital experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group"
            >
              {/* Project Image */}
              <a
                href={project.link}
                className="relative block overflow-hidden rounded-[2rem] bg-gray-100"
              >
                <div className="aspect-[16/9] w-full">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                </div>

                {/* Project Number */}
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-gray-800 bg-white/90 text-xs font-medium backdrop-blur-sm">
                  {project.number}
                </div>

                {/* View Button */}
                <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  ↗
                </div>
              </a>

              {/* Project Info */}
              <div className="mt-7 grid gap-6 md:grid-cols-[1fr_auto]">

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {project.title}
                    </h3>

                    <span className="text-gray-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap content-start gap-2 md:max-w-xs md:justify-end">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-24 border-t border-gray-200 pt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-medium"
          >
            Have a project in mind?

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Let's talk →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}