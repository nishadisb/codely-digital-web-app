
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Partners from "./Partners";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className="w-full min-h-screen relative z-10 overflow-hidden">
      <Hero />
      <Services />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
