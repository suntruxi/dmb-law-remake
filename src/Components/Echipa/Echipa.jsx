import React from "react";
import "./Echipa.css";
import DianaImage from "../../assets/IMG_9628.jpg";
import AndreeaImage from "../../assets/IMG_9640.jpg";
import AngajatImage from "../../assets/no-profile-pic.jpg";

const teamMembers = [
  {
    name: "Diana Bejenaru",
    title: "Avocat Titular",
    image: DianaImage,
    // description: "lorem impsum",
  },

  {
    name: "Andreea Ciuca",
    title: "Consilier Juridic",
    image: AndreeaImage,
    // description: "lorem ipsum",
  }, // Add comma here

  {
    name: "Larisa Abălașei",
    title: "Intern",
    image: AngajatImage,
    // description: "lorem ipsum",
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
