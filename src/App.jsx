import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Propunere from "./Components/Propunere/Propunere";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Echipa from "./Components/Echipa/Echipa";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Noutati from "./pages/Noutati";
import Arii from "./pages/Arii";

const Home = () => (
  <>
    <Hero />
    <Title subTitle="Servicii" title="" />
    <Propunere />
    <About />
    <Title subTitle="DMB LAW" title="Echipa Noastra" />
    <Echipa />
    <Title subTitle="Ce spun clientii" title="Testimoniale" />
    <Testimonials />
    <Title subTitle="Afla mai multe" title="CONTACT" />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noutati" element={<Noutati />} />
        <Route path="/arii-de-practica" element={<Arii />} />
        <Route path="/#propunere-container" />

        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
