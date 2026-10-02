export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md">
        
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-gray-800"
        >
          Ardhi<span className="text-gray-400">.WEB</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            Projects
          </a>

          <a
            href="#services"
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            Services
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}