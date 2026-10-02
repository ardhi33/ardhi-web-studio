"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-10 md:py-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-black/10 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md">

          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight text-gray-800"
          >
            Ardhi<span className="text-gray-400">.WEB</span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-gray-100 md:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-black transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-black transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "mt-3 max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-black/10 bg-white/95 p-4 shadow-lg backdrop-blur-md">

            <div className="flex flex-col">

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
              >
                Projects
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
              >
                Services
              </a>

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-2xl bg-black px-4 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Let's Talk
              </a>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}