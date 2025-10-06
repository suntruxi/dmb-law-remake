import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Soluții Juridice Personalizate pentru Afacerile Tale</h1>
        <p>
          Cu o abordare proactivă, ne asigurăm că soluțiile noastre sunt nu
          doar juridic corecte, ci și strategice pentru atingerea obiectivelor
          tale de afaceri
        </p>
        <button className="btn" onClick={scrollToContact}>
          Contactează-ne <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
