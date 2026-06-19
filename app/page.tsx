import Nav from "@/components/Nav";
import HeroProjects from "@/components/HeroProjects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      {/* Personal park hero + the signature zoom-out into Projects. */}
      <HeroProjects />
      <Experience />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
