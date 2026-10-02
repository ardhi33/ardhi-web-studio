export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-10">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 " />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-black" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">Web Developer</p>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white-400 sm:text-6xl md:text-7xl lg:text-8xl">
            I build
            <br />
            <span className="text-gray-400">digital experiences.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-7 text-gray-500 md:text-lg">I create modern, responsive, and user-friendly websites that help brands and businesses build a strong digital presence.</p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800">
              View My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            <a href="#contact" className="rounded-full border border-gray-200 px-6 py-3.5 text-sm font-medium text-white-400 transition-all duration-300 hover:border-black">
              Let's Talk
            </a>
          </div>

          {/* Small Info */}
          <div className="mt-14 flex items-center gap-8 border-t border-gray-200 pt-6">
            <div>
              <p className="text-2xl font-semibold tracking-tight">3</p>

              <p className="mt-1 text-xs text-gray-500">Projects</p>
            </div>

            <div className="h-10 w-px bg-gray-200" />

            <div>
              <p className="text-2xl font-semibold tracking-tight">5+</p>

              <p className="mt-1 text-xs text-gray-500">Technologies</p>
            </div>

            <div className="h-10 w-px bg-gray-200" />

            <div>
              <p className="text-2xl font-semibold tracking-tight">2026</p>

              <p className="mt-1 text-xs text-gray-500">Started</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          {/* Main Card */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-gray-100">
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Content */}
            <div className="absolute inset-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">A.</span>

                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Portfolio</span>
              </div>

              <div>
                <p className="text-sm text-gray-500">Creative Developer</p>

                <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-700">
                  Ardhi
                  <br />
                  Studio.
                </h2>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-xs text-gray-400">Based in Bali, Indonesia</span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">↗</div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          {/* <div className="absolute -bottom-6 -left-8 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>

              <div>
                <p className="text-xs font-medium">Available for work</p>

                <p className="mt-0.5 text-[11px] text-gray-400">Let's build something</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
