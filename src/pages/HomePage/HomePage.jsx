import About from '../../organisms/About/About';
import Contact from '../../organisms/Contact/Contact';
import Experience from '../../organisms/Experience/Experience';
import Hero from '../../organisms/Hero/Hero';
import Projects from '../../organisms/Projects/Projects';
import Skills from '../../organisms/Skills/Skills';
import MainLayout from '../../templates/MainLayout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
