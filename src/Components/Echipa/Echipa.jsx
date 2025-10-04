import React from "react";
import "./Echipa.css";
import DianaImage from "../../assets/diana.jpeg";
import AnaImage from "../../assets/ana.jpeg";
import EvelinaImage from "../../assets/evelina.jpeg";
import AndreeaImage from "../../assets/andreea.jpeg";

const teamMembers = [
  {
    name: "Diana Maria Bejenaru",
    title: "Avocat Titular",
    image: DianaImage,
    description: "Drept Comercial, Drept Administrativ & Achiziții publice, Regulatory & Compliance, GDPR",
  },

  {
    name: "Ana Maria Albu",
    title: "Avocat Partener",
    image: AnaImage,
    description: "Drept Contractual, Drept Comercial, M&A, Dreptul Muncii",
  },

  {
    name: "Evelina Bidulescu",
    title: "Avocat Colaborator",
    image: EvelinaImage,
    description: "Drept Comercial, Drept Contractual, Regulatory & Compliance, Dreptul Muncii",
  },

  {
    name: "Andreea Ciucă",
    title: "Paralegal",
    image: AndreeaImage,
    description: "Dreptul Transporturilor, GDPR, Insolvență-faliment",
  },
];

const Echipa = () => {
  return (
    <div className="echipa-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="member-card">
          <img src={member.image} alt={member.name} className="member-image" />
          <div className="member-details">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-title">{member.title}</p>
            <div className="member-description">{member.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Echipa;
