import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-icons.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimoniale">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>
                    Constantin Gangu - Administrator Senior Forwarding SRL
                  </h3>
                </div>
              </div>
              <p>
                Inca de la inceputul interactiunii cu doamna Avocat Diana Maria
                Bejenaru am simtit un mediu de competenta si profesionalitate
                care confera siguranta si increderea ca te afli pe maini bune.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Cristian Bostan - CEO Barber Store România</h3>
                </div>
              </div>
              <p>
                Am colaborat cu mai mulți avocați de-a lungul timpului și am
                observat că cel mai dificil aspect este comunicarea și
                respectarea termenelor de finalizare a unei spețe. Totuși, de
                când lucrez cu dna. avocat Diana Bejenaru, am constatat că
                problema timpilor a dispărut și, în plus, este mereu disponibilă
                și pot să o sun pentru orice speță. Recomand cu încredere acest
                cabinet de avocatură. eu unul sunt foarte mulțumit!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Utilizator Anonim</h3>
                </div>
              </div>
              <p>
                Multumiti de colaborarea cu Dna. Bejenaru, răspunde la toate
                nevoile legale ale firmei pe care o administrez prompt si la
                obiect. Recomand!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>
                    Rafael Onisoara - Director General - Crystal Logistics
                    Services
                  </h3>
                </div>
              </div>
              <p>
                Doamna avocat este foarte implicată, promptă și cunoaște foarte
                bine legislația. Îi mulțumesc pe această cale pentru serviciile
                oferite!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Petrisor Praporgescu - CEO Windsor Spedition</h3>
                </div>
              </div>
              <p>
                Inca de la prima intalnire, am fost impresionat de
                profesionalismul si dedicarea lor. Comunicarea a fost excelenta
                pe tot parcursul colaborarii noastre. Am fost informat constant
                despre progresul cazului meu si am primit raspunsuri rapide la
                toate intrebarile mele. Am apreciat foarte mult modul in care au
                explicat fiecare pas al procesului demonstrand o cunoastere
                profunda a legii, oferindu-mi solutii clare si eficiente pentru
                problema mea juridica. In plus, am simtit ca echipa de avocati a
                fost cu adevarat interesata de cazul meu si a depus toate
                eforturile pentru a obtine cel mai bun rezultat posibil.
                Profesionalismul, empatia si atentia la detalii au fost evidente
                in fiecare interactiune. Recomand cu caldura Casa de Avocatura
                “DMBLAW” oricui are nevoie de asistenta juridica de inalta
                calitate.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ioan Robu - Administrator ROBARTTECH Construct</h3>
                </div>
              </div>
              <p>
                Un avocat și consultant de 10 stele! Stie exact cum sa abordeze
                situațiile astfel încât totul să fie în favoarea ta! Mulțumesc
                Diana!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Bianca Onisoara - CEO Crystal HR Advisor</h3>
                </div>
              </div>
              <p>
                Servicii foarte profesioniste! Doamna Bejenaru este un avocat
                excelent care m-a ajutat cu toate probleme juridice legate de
                agenția mea de recrutare. Îi mulțumesc și cu siguranță voi apela
                la serviciile dumneai și pe viitor!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
