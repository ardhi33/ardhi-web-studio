export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 pb-10 pt-28 md:px-10 md:pt-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top Line */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-black" />

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>
        </div>

        {/* Main CTA */}
        <div className="border-b border-gray-200 pb-20">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Heading */}
            <div>
              <p className="mb-6 text-sm text-gray-400">
                Have a project in mind?
              </p>

              <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                Let's build
                <br />
                <span className="text-gray-400">
                  something great.
                </span>
              </h2>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:ardhiweb99@gmail.com"
              className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-black text-center text-sm font-medium text-white transition-all duration-300 hover:scale-105 md:h-36 md:w-36"
            >
              <span>
                Let's
                <br />
                Talk
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

          </div>
        </div>

        {/* Contact Information */}
        <div className="grid gap-10 py-10 md:grid-cols-3">

          {/* Email */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Email
            </p>

            <a
              href="mailto:ardhiweb99@gmail.com"
              className="mt-3 inline-block text-sm font-medium transition-colors hover:text-gray-500"
            >
              ardhiweb99@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Social
            </p>

            <div className="mt-3 flex gap-5">

              <a
                href="#"
                className="text-sm font-medium transition-colors hover:text-gray-500"
              >
                Instagram
              </a>

              <a
                href="https://github.com/ardhi33"
                className="text-sm font-medium transition-colors hover:text-gray-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium transition-colors hover:text-gray-500"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Based in
            </p>

            <p className="mt-3 text-sm font-medium">
              Bali, Indonesia
            </p>
          </div>

        </div>

        {/* Footer */}
        <footer className="flex flex-col gap-4 border-t border-gray-200 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Ardhi Web Studio. All rights reserved.
          </p>

          <a
            href="#"
            className="transition-colors hover:text-black"
          >
            Back to top ↑
          </a>

        </footer>

      </div>
    </section>
  );
}