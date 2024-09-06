import React from "react";
import "./Propunere.css";

const proposals = [
  {
    title: "Eficiență a costurilor",
    content:
      "Externalizarea serviciilor juridice către un birou de avocatură tip boutique ca al nostru asigură nu numai eficiența costurilor, ci și un nivel suplimentar de atenție la detalii. Structura noastră simplificată ne permite să oferim asistență juridică de înaltă calitate la o fracțiune din costul asociat colaborării cu societăți de avocatură mari.",
  },
  {
    title: "Comunicare constantă și prezență la fața locului",
    content:
      "Echipa noastră se angajează să interacționeze zilnic prin e-mailuri și apeluri telefonice. Ne angajăm să comunicăm zilnic și propunem ca unul dintre juriștii noștri să lucreze de la sediul dumneavoastră o zi pe săptămână pentru a asigura o integrare perfectă cu echipa dumneavoastră.",
  },
  {
    title: "Monitorizare",
    content:
      "Abordarea noastră sistematică include monitorizarea fluxurilor de lucru, asigurarea eficienței și furnizarea de actualizări în timp util cu privire la orice modificări legale care vă pot afecta obiectele principale de activitate.",
  },
  {
    title: "Comunicarea cu terții",
    content:
      "Vom gestiona comunicarea și negocierile cu terții, inclusiv colaborarea cu echipe juridice externe pentru chestiuni juridice complexe, economisindu-vă timp și resurse.",
  },
  {
    title: "Gestionarea centralizată a documentelor",
    content:
      "Vom centraliza și gestiona eficient toate documentele juridice, asigurându-ne că documentele și procedurile juridice sunt organizate și actualizate. Echipa noastră se va ocupa de toate actele juridice, inclusiv privind dreptul comercial, redactarea contractelor, GDPR, contractele de muncă și reglementările interne, oferind o abordare centralizată și organizată.",
  },
  {
    title: "Flexibilitate",
    content:
      "În cazul în care într-o anumită perioada de timp afacerea ta va avea nevoie mai mult de serviciile noastre, tariful orar poate fi diminuat astfel încât să ne putem ocupă de toate provocările survenite într-un mod optim.",
  },
];

const Propunere = () => {
  return (
    <div className="propunere-container" id="servicii">
      {proposals.map((proposal, index) => (
        <div key={index} className="proposal-card">
          <h3>{proposal.title}</h3>
          <p>{proposal.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Propunere;
