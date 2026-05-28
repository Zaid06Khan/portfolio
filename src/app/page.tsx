import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Goals from "@/components/Goals";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <div className="edge-l">ZK · v3 · 2026</div>
      <div className="edge-r">Building intelligent systems</div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Goals />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
