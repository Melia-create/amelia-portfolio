import About from "@/components/About/About";
import Navigation from "@/components/Navbar/Navigation";
import Banner from "@/components/Banner/Banner";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
