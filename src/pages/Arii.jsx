import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Arii.css";
import AriiHero from "./AriiHero";

const Section = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`section ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h2 className="section-title">{title}</h2>
      {isOpen && <p className="section-description">{description}</p>}
    </div>
  );
};

const Arii = () => {
  const sections = [
    {
      title: "Drept comercial & Redactarea și negocierea contractelor",
      description:
        "Oferim consiliere de specialitate cu privire la chestiuni juridice care afectează afacerile de zi cu zi, ajutând clienții să navigheze în complexități le dreptului corporativ, organizarea pachetului corporate intern (revocarea și numirea managementului superior, organizarea și desfășurarea AGA, completarea obiectului de activitate etc.), negocierea și redactarea contractelor cu furnizorii și clienții și a oricăror raporturi juridice contractuale, reprezentarea în fața instanțelor judecătorești în cadrul litigiilor comerciale.",
    },
    {
      title: "Dreptul transporturilor",
      description:
        "Specializare in legislatia interna si internationala a transporturilor de mărfuri si servicii conexe, stabilirea termenilor si conditiilor contractuale, a raporturilor de muncă specifice, solutionarea incidentelor de transport, partener al Uniunii Societățior de Expediții din România.",
    },
    {
      title: "Dreptul energiei",
      description:
        "Expertiză în procesele de autorizare a proiectelor de energie regenerabilă, transportul gazelor naturale și al energiei electrice, procesul de racordare, revizuirea documentației de urbanism, ocuparea temporară / scoaterea din circuitul agricol/forestier a terenurilor, înregistrarea mențiunilor în cărțile funciare, gestionarea datelor clasificate. Reprezentarea clienților în litigii privind furnizorii de energie electrică/gaze naturale.",
    },
    {
      title: "Dreptul construcțiilor",
      description:
        "Reprezentare în fața instanțelor judecătorești sau a autorităților publice în litigii privind construcțiile, raporturile de vecinătate, înregistrarea mențiunilor în cărțile funciare, contestarea sancțiunilor contravenționale etc.",
    },
    {
      title: "Achiziții publice",
      description:
        "Gestionarea procedurilor de achiziții publice, contestarea documentațiilor de atribuire sau a rezultatului procedurilor de atribuire. Asistență pe durata executării acordurilor-cadru/contractelor subsecvente.",
    },
    {
      title: "Dreptul muncii",
      description:
        "Gestionarea și redactarea reglementărilor interne obligatorii, gestionarea/întocmirea contractelor colective de muncă, redactarea și actualizarea contractelor individuale de muncă, reprezentarea în cazul neînțelegerilor/litigiilor cu angajații.",
    },
    {
      title: "Regulatory & Compliance",
      description:
        "Asistență și consiliere în vederea conformării cu reglementările și legislația în vigoare în diferite industrii și domenii de activitate.",
    },
  ];

  return (
    <div>
      <Navbar />
      <AriiHero />
      <div className="arii-container">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Arii;
