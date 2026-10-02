const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern and responsive websites built with clean code, thoughtful structure, and a focus on performance.",
    deliverables: "Business Website · Portfolio · Personal Website",
  },
  {
    number: "02",
    title: "Landing Page",
    description:
      "Focused landing pages designed to communicate your message clearly and turn visitors into potential customers.",
    deliverables: "Product Page · Campaign Page · Promotional Page",
  },
  {
    number: "03",
    title: "UI Implementation",
    description:
      "Turning design concepts into responsive and interactive interfaces that work consistently across different devices.",
    deliverables: "Responsive UI · Design System · Frontend Development",
  },
  {
    number: "04",
    title: "Website Maintenance",
    description:
      "Ongoing improvements, content updates, bug fixes, and technical maintenance to keep your website reliable.",
    deliverables: "Updates · Bug Fixes · Performance Improvements",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-black" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Services
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-6xl">
              How I can help
              <br />
              <span className="text-gray-400">
                your business.
              </span>
            </h2>
          </div>

          <p className="max-w-lg self-end leading-7 text-gray-500 lg:ml-auto">
            From a simple landing page to a complete business
            website, I help turn ideas into digital experiences
            that are clear, functional, and built to grow.
          </p>

        </div>

        {/* Services List */}
        <div className="border-t border-gray-200">

          {services.map((service) => (
            <div
              key={service.number}
              className="group border-b border-gray-200 py-10 transition-all duration-300 hover:px-3 md:py-12"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-start">

                {/* Number */}
                <span className="text-xs text-gray-400">
                  {service.number}
                </span>

                {/* Main Content */}
                <div>

                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {service.title}
                    </h3>

                    <span className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                    {service.description}
                  </p>

                  <p className="mt-6 text-xs uppercase tracking-[0.15em] text-gray-400">
                    {service.deliverables}
                  </p>

                </div>

                {/* Service Indicator */}
                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white md:flex">
                  +
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm text-gray-400">
              Have something else in mind?
            </p>

            <p className="mt-1 text-sm font-medium">
              Let's discuss your project.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
          >
            Start a conversation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}