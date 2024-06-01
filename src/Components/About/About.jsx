import React from "react";
import "./About.css";
import about_img from "../../assets/story-img.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h2>Despre Noi</h2>
        <h3>DMB Law</h3>
        <p>
          Suntem o echipă dedicată, cu o viziune îndrăzneață în domeniul juridic
          și o dorință de înțelegere a ariei de business a fiecărui client,
          pentru un parteneriat pe termen lung.
        </p>
        <p>
          Fondată pe principii solide de profesionalism și integritate, firma
          noastră se distinge prin abordarea inovatoare și orientată către
          succesul clienților.
        </p>
        <p>
          Cu experiență acumulata în cadrul unor societăți internaționale de
          prestigiu, am adus această expertiză în cadrul propriului nostru
          cabinet de avocatură. Ne-am angajat să oferim servicii juridice la
          cele mai înalte standarde, adaptate la nevoile și provocărilespecifice
          ale fiecărui client.
        </p>
        <p>
          Oferta noastră se bazează pe construirea unui parteneriat pe termen
          lung pentru o mai bună administrare a afacerii tale, bazată pe o
          conlucrare, un aport continuu de implicare între părți.
        </p>
      </div>
    </div>
  );
};

export default About;
