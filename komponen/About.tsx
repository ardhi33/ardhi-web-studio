export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-black" />

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            About Me
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-6xl">
              Turning ideas into
              <br />
              <span className="text-gray-400">
                digital experiences.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl">
            <p className="text-lg leading-8 text-gray-700">
              I'm Ardhi, a web developer who enjoys creating
              modern and meaningful digital experiences.
            </p>

            <p className="mt-6 leading-7 text-gray-500">
              I focus on building clean, responsive, and
              user-friendly websites. I enjoy combining
              thoughtful design with modern web technologies
              to create digital products that are simple,
              functional, and enjoyable to use.
            </p>

            <p className="mt-6 leading-7 text-gray-500">
              I'm always curious about new technologies and
              continuously learning to improve my skills,
              explore new ideas, and create better digital
              experiences.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
            >
              Let's work together

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-20 border-t border-gray-200 pt-8">
          <div className="grid gap-8 sm:grid-cols-3">

            {/* Location */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Based in
              </p>

              <p className="mt-2 text-sm font-medium">
                Bali, Indonesia
              </p>
            </div>

            {/* Focus */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Focus
              </p>

              <p className="mt-2 text-sm font-medium">
                Web Development
              </p>
            </div>

            {/* Availability */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Currently
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <p className="text-sm font-medium">
                  Open to opportunities
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}