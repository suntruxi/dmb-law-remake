import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Propunere from "./Components/Propunere/Propunere";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Echipa from "./Components/Echipa/Echipa";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Ce oferim?" title="Propunerea Noastra" />
      <Propunere />
      <About />
      <Title subTitle="DMB LAW" title="Echipa Noastra" />
      <Echipa />
      <Title subTitle="Ce spun clientii" title="Testimoniale" />
      <Testimonials />
      <Title subTitle="Afla mai multe" title="CONTACT" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
