import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Services, Process, About, Skills, Experience, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Skills />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
