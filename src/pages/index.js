import About from "@/components/About/About";
import Navigation from "@/components/Navbar/Navigation";
import Banner from "@/components/Banner/Banner";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Skills />
    </>
  );
}
