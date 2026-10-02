import Navbar from "../komponen/Navbar";
import Hero from "../komponen/Hero";
import About from "../komponen/About";
import Skills from "../komponen/Skills";
import Projects from "../komponen/Projects";
import Services from "../komponen/Services";
import Contact from "../komponen/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
    </>
  );
}