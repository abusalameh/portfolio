import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-foreground text-background px-4 py-2 rounded-full z-[100]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
