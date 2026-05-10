import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="text-center py-10 font-orbitron text-xs font-bold text-xp-light tracking-widest drop-shadow-md">
        <p>&copy; 2026 TIMY KAKERU — WELCOME TO MY WEBRING</p>
      </footer>
    </main>
  );
}