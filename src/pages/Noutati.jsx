import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Noutati.css";
import poza_articol from "../assets/logodmb.png";
import alta_poza from "../assets/story-img.jpeg";
import poza_justice from "../assets/justice-lady.jpeg";
import NoutatiHero from "./NoutatiHero";

const Noutati = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar />
      <NoutatiHero />

      <div className="noutati-container">
        <h1>Noutati Legislative</h1>
        <div className="noutati-content">
          <article className="noutati-article">
            <div className="article-image">
              <img src={poza_articol} alt="Article" />
            </div>
            <h2>
              Secretele Comerciale: Strategii de Protecție și Importanța lor în
              Afaceri
            </h2>
            {!expanded && (
              <p>
                Protejarea secretelor de afaceri în cadrul mediului comercial
                contemporan este esențială pentru succesul și stabilitatea unei
                companii...
              </p>
            )}
            {expanded && (
              <>
                <p>
                  Protejarea secretelor de afaceri în cadrul mediului comercial
                  contemporan este esențială pentru succesul și stabilitatea
                  unei companii. Aceste informații valoroase, cunoscute sub
                  denumirea de secrete comerciale, pot influența avantajul
                  competitiv și pot genera valoare semnificativă pentru
                  întreprindere. În acest context, conform normelor legale și
                  etice, implementarea și respectarea unor măsuri adecvate de
                  protecție devin imperative. Prin adoptarea unor politici și
                  proceduri specifice, precum și prin semnarea acordurilor de
                  confidențialitate, companiile pot asigura integritatea și
                  confidențialitatea informațiilor lor strategice, contribuind
                  la consolidarea poziției lor pe piață și la evitarea
                  riscurilor asociate divulgării neautorizate a secretelor de
                  afaceri.
                </p>
                <p>
                  <strong>Definirea secretului comercial</strong>
                </p>
                <p>
                  În primul rând, ce condiții ar trebui sa îndeplinească o
                  informație, o tehnologie pentru a fi considerate secret
                  comercial? Acest lucru este reglementat de art. 2 din
                  Directiva 2016/943 a Uniunii Europene astfel: a sunt secrete
                  în sensul că nu sunt, ca întreg sau astfel cum se prezintă sau
                  se articulează elementele acestora, cunoscute la nivel general
                  sau ușor accesibile persoanelor din cercurile care se ocupă,
                  în mod normal, de tipul de informații în cauză; b au valoare
                  comercială prin faptul că sunt secrete; c au făcut obiectul
                  unor măsuri rezonabile, în circumstanțele date, luate de către
                  persoana care deține în mod legal controlul asupra
                  informațiilor respective, pentru a fi păstrate secrete; În al
                  doilea rând, pentru existenta unei uniformizări la nivelul
                  legislației statelor membre ale Uniunii Europene, Romania a
                  transpus Directiva 2016/943 prin Ordonanța de urgenta nr. 25
                  din 18 aprilie 2019 , ordonanta care face trimitere pentru
                  definirea secretelor profesionale prin art. 1 indice 1 litera
                  d din Legea nr. 11 din 29 ianuarie 1991 privind concurenta
                  neloiala .
                </p>
                <p>
                  <strong>AGRO Plus:</strong>Cu accent pe sectorul agricol,
                  pescuit, acvacultură și industria alimentară, această
                  componentă oferă sprijin financiar pentru IMM-urile care
                  activează în aceste domenii. Acest sprijin poate fi sub forma
                  de credite pentru investiții în utilaje agricole moderne,
                  construcția de spații de depozitare sau modernizarea
                  proceselor de producție pentru a spori eficiența și
                  competitivitatea.
                </p>
                <p>
                  <strong>IMM Prod Plus</strong>Această componentă se
                  concentrează pe susținerea sectorului productiv, oferind
                  garanții guvernamentale pentru lichidități și investiții.
                  Aceasta poate fi deosebit de utilă pentru IMM-urile care
                  operează în industrii precum producția, prelucrarea sau
                  fabricarea, ajutându-le să-și finanțeze proiectele și să-și
                  mențină fluxurile de numerar într-o stare sănătoasă.
                </p>
                <p>
                  <strong>Construct Plus:</strong>Într-o lume tot mai preocupată
                  de sustenabilitate și eficiență energetică, această componentă
                  vine în sprijinul IMM-urilor din sectorul construcțiilor
                  pentru a investi în tehnologii și practici mai ecologice. Prin
                  acordarea de garanții guvernamentale, se încurajează
                  implementarea de soluții care reduc amprenta de carbon și
                  promovează utilizarea energiilor regenerabile.
                </p>
                <p>
                  <strong>Rural Plus:</strong>Această componentă este esențială
                  pentru susținerea mediului rural, oferind facilități de
                  garantare pentru creditele acordate fermierilor și
                  întreprinderilor din sectorul agricol și alimentar. Aceasta
                  poate contribui la modernizarea exploatațiilor agricole,
                  îmbunătățirea infrastructurii rurale și diversificarea
                  activităților economice în zonele rurale.
                </p>
                <p>
                  <strong>Innovation Plus:</strong>Cu accent pe inovație și
                  export, această componentă încurajează dezvoltarea și
                  internaționalizarea companiilor inovatoare din România. Prin
                  acordarea de garanții guvernamentale, se stimulează
                  investițiile în cercetare și dezvoltare, precum și promovarea
                  produselor și serviciilor românești pe piețele internaționale.
                  Aceste componente reflectă diversele nevoi și domenii în care
                  IMM-urile și întreprinderile mici pot beneficia de sprijin
                  financiar și garanții guvernamentale pentru a-și dezvolta
                  afacerile.
                </p>
              </>
            )}
            <button onClick={toggleExpand}>
              {expanded ? "Read less" : "Read more"}
            </button>
          </article>

          <article className="noutati-article">
            <div className="article-image">
              <img src={alta_poza} alt="Article" />
            </div>
            <h2>Neutralizarea scrisorii de transport rutier CMR</h2>
            {!expanded && (
              <p>
                În practică se întâlnește această operațiune, prin care
                documentele inițiale de transport sunt ”înlocuite” total sau
                parțial cu alte documente de transport...
              </p>
            )}
            {expanded && (
              <>
                <p>
                  În practică se întâlnește această operațiune, prin care
                  documentele inițiale de transport sunt ”înlocuite” total sau
                  parțial cu alte documente de transport, în scopul păstrării
                  secretului cu privire la anumite informații comerciale
                  cuprinse în documentele inițiale. Acțiunea de neutralizare
                  poate fi generic definită în doctrină ca reprezentând schimbul
                  de scrisori de trăsură originale sau documente de transport cu
                  alte scrisori de trăsură sau documente de transport.
                  Majoritatea societăților de expediții se ocupă de activitatea
                  de neutralizare, transportatorii primind instrucțiuni, de cele
                  mai multe ori, în timpul executării transportului despre
                  schimbarea/înlocuirea CMR-urilor cu noile CMR-uri.
                </p>
                <p>
                  <strong>II. Scop</strong>
                </p>
                <p>
                  Această operațiune este, in esență, o soluție adoptată pentru
                  revânzarea mărfurilor și păstrarea secretului comercial (e.g.
                  când expeditorul dorește să păstreze secrete informații
                  comerciale privind identitatea furnizorului, locul de
                  producție al mărfurilor sau beneficiarii finali ai
                  transporturilor).
                </p>
                <p>
                  <strong>III. Natura juridică.</strong>
                </p>
                <p>
                  Neutralizarea CMR reprezintă o uzanță (practică) recunoscută
                  ca izvor de drept în domeniul transporturilor, (i.e. practică
                  des întâlnită, recunoscută ca izvor de drept alături de lege
                  și de principiile generale ale dreptului) . Contractul de
                  transport (scrisoarea de trăsura – Convenția CMR) are funcția
                  de instrument probator al existentei raporturilor juridice
                  dintre expeditor si transportator. Nu este un înscris cerut
                  ”ad validitatem”, motiv pentru care nu afectează validitatea
                  convenției părților, ci exclusiv probarea acesteia . Pentru ca
                  neutralizarea documentelor de transport să fie valabilă, ea
                  trebuie acceptată de ambele părți (transportator și
                  expeditor). Cum contractul de transport este ”legea părților”
                  (acestea stabilind liber conținutul contractului), se pot
                  introduce clauze privind ”neutralizarea documentelor de
                  transport”. Pentru a determina aplicarea acestei uzanțe în
                  cadrul raporturilor comerciale, este necesară verificarea
                  îndeplinirii următoarelor condiții: (i) Nu există un izvor
                  concret al legii. Neutralizarea CMR ca practică se poate
                  utiliza în lipsa existenței unei prevederi legale exprese care
                  să reglementeze această operațiune. Această condiție este
                  îndeplinită deoarece neutralizarea documentelor este un proces
                  cunoscut doar de sectorul transporturilor, neexistând o
                  definiție a acestui termen în cadrul legislației românești sau
                  in cadrul convențiilor/standardelor internaționale. (ii) Sunt
                  conforme ordinii publice și bunelor moravuri. Această condiție
                  este îndeplinită în condiții generale, neutralizarea fiind
                  permisă prin interpretarea prev. art. 41 din Convenția CMR ,
                  care prevede faptul că “ este nulă şi fără nici un efect orice
                  stipulaţie care, direct sau indirect, ar deroga de la
                  dispozițiile prezentei convenţii”. Per a contrario,
                  neutralizarea nefiind reglementată expres și nici interzisă de
                  alte dispoziții legale ale Convenției CMR, aceasta este
                  considerată validă. De asemenea, este de menționat
                  aplicabilitatea libertății contractuale a părților de a
                  stabili condițiile de realizare a transportului . (iii) Partea
                  interesată de invocarea neutralizării trebuie să probeze
                  conținutul acestei uzanțe. În eventualitatea unor litigii
                  având la bază operațiuni de neutralizare, partea care invocă
                  intervenirea acestei operațiuni va trebui să aducă probe cu
                  privire la existența, efectele și recunoașterea acestei
                  practici in domeniul transporturilor.
                </p>
                <p>
                  <strong>IV. Cazuri de neutralizare. Exemple.</strong>
                </p>
                <p>
                  Situațiile în care transportatorii rutieri recurg la
                  neutralizarea documentelor de transport (a scrisorii de
                  trăsură CMR): 1 Când comerciantul nu dorește ca producătorul
                  să cunoască identitatea entității care cumpără produsul,
                  pentru a evita riscul inerent activității de
                  revânzare/intermediere. Exemplu: Șoferul încarcă marfa in
                  Germania (Hannover) si in timpul procesului de încărcare emite
                  scrisoarea de trăsură CMR conform căreia transportă mărfuri de
                  la Hanovra la Hamburg. După un timp, însă, șoferul listează
                  noi documente care afirmă că produsul a fost încărcat la
                  Hanovra dar adresa se descărcare este la Paris. În concluzie,
                  Producătorul crede că mărfurile se vând în Hamburg, însă
                  acestea urmează a fi descărcate la Paris. 2 Când comerciantul
                  nu dorește ca destinatarul final să cunoască locul de
                  producere al mărfurilor pe care le cumpără; Continuare
                  exemplului de mai sus: Între timp, în cazul verificărilor
                  rutiere, șoferul scrie scrisoarea de trăsură CMR confirmând că
                  transportă marfa încărcată în Hanovra iar destinația este
                  Paris. Cu toate acestea, clientul final (localizat la Paris)
                  va primi documentele prezentate că produsul a fost încărcat la
                  Marsilia. Aici întâlnim și inconveniente pentru șofer pentru
                  că trebuie să părăsească teritoriul Franței. Dacă ruta
                  inițială ar fi fost menținută în CMR, șoferul ar putea face
                  încă două operațiuni de cabotaj în Franța. În concluzie,
                  beneficiarul final al mărfurilor crede că locul de încărcare
                  al acestora a fost la Marsilia. 3 Când producătorul nu
                  cunoaște entitatea care cumpără mărfurile, iar clientul final
                  nu cunoaște locul în care sunt produse mărfurile. Exemplul
                  rezultă din combinarea exemplelor de la cele două puncte de
                  mai sus.
                </p>
                <p>
                  <strong>
                    V. Neutralizarea în contextul comerțului paralel de mărfuri
                  </strong>
                </p>
                <p>
                  Conform unui studiu recent , una dintre principalele
                  îngrijorări ale activității de neutralizare este aceea de a
                  utiliza operațiunea pentru acoperirea/mascarea comerțului
                  paralel de bunuri, in afara liniilor de distribuție oficiale
                  ale producătorilor. „Parallel trade” este orice activitate de
                  comercializare a unui produs care se desfășoară în afara
                  liniilor de distribuție oficiale ale
                  producătorului/proprietarului mărcii/brandului acelui produs.
                  Fapt ce poate crea mai departe denaturarea concurenței într-o
                  anumită regiune cu privire la produsul respectiv si la
                  încălcarea drepturilor de distribuție exclusivă ale
                  distribuitorilor din acea regiune (dacă există). (1)
                  Comerciantul (TRADER) este de acord cu vânzătorul (SELLER) că
                  îi va distribui produsul într-o țară în care produsul său nu
                  este vândut în prezent (de exemplu, Elveția – BUYER CH) dacă i
                  se oferă un preț mai mic decât prețul de vânzare inițial,
                  datorită promovării produsului pe o piață nouă. (2) Se scrie
                  scrisoarea de trăsură CMR, unde este menționat ca expeditor
                  producătorul și ca si cumpărător este o companie listată în
                  Elveția (BUYER CH). (3) După ce mărfurile încep să fie
                  transportate, șoferul primește comanda de neutralizare CMR. El
                  se oprește vehiculul și neutralizează scrisoarea de trăsură
                  CMR. Această scrisoare de trăsură menționează compania
                  inițială din Elveția ca expeditor și destinatar o companie
                  germană (BUYER DE), unde vânzătorul deja are stabilită o linie
                  de distribuție a produselor sale. În concluzie, mărfurile
                  urmează a fi comercializate în Germania, la prețuri cel puțin
                  competitive, având în vedere reducerea obținută de comerciant
                  de la pct. (1) de mai sus.
                </p>
                <p>
                  <strong>VI. Riscuri asociate neutralizării</strong>
                </p>
                <p>
                  Odată cu neutralizarea documentelor de transport, pot apărea
                  următoarele riscuri: • Risc de pierdere a asigurării
                  răspunderii transportatorului - în cazul unui eveniment de
                  pierdere/deteriorare a mărfii, transportatorul trebuie să
                  dovedească și să pună la dispoziția societății de asigurări
                  documentele de transport în original aferente transportului.
                  Clauzele privind neutralizarea documentelor de transport
                  creează dificultăți in fata instanțelor judecătorești, în
                  special în litigiile cu societățile de asigurări, deoarece
                  transportatorul, care la comanda clientului schimba
                  documentele de transportul în timpul transportului, efectuează
                  transportul în alte condiții decât inițial convenite în
                  contractul de transport. Potrivit opiniei mai multor companii
                  de asigurări, transportatorul nu ar putea beneficia de
                  asigurare atunci când documentele de transport au fost
                  neutralizate. De exemplu, dacă în scrisoarea de trăsura este
                  menționată ca destinatar o societate din Jud. Alba, dar
                  descărcarea se face la un punct de lucru din Jud. Timiș, marfa
                  nu este asigurată pe traseul dintre județele Alba și Timiș. •
                  Pe lângă aceste riscuri, există și alte riscuri în domeniul
                  dreptului fiscal sau al operațiunilor de cabotaj. În urma
                  solicitării unor interpretări oficiale asupra operațiunii de
                  neutralizare, autoritățile fiscale competente au indicat
                  faptul că, în materie de TVA, neutralizarea este definită ca
                  fiind o operațiune triunghiulară, astfel cum este ilustrată în
                  imaginea de mai jos. O operațiune triunghiulară din punct de
                  vedere al TVA presupune: (i) Implicarea a trei persoane
                  impozabile fiecare înregistrată în scopuri de TVA în câte un
                  stat membru (SM) diferit; (ii) Încheierea a două tranzacții de
                  livrare a bunurilor, respectiv vânzarea bunurilor de către un
                  furnizor persoană impozabilă stabilită în SM1 către persoana
                  impozabilă stabilită în SM2, denumită cumpărător-revânzător,
                  care revinde bunurile către persoana impozabilă stabilită în
                  SM 3, denumit beneficiar al livrării ulterioare; (iii) Un
                  singur transport al bunurilor, direct din SM1 al furnizorului
                  către SM3 al beneficiarului livrării ulterioare, In cazul in
                  care Romania este SM3 (beneficiarul livrării): acesta are
                  obligația să plătească TVA aferentă livrării efectuate de
                  cumpărătorul revânzător care nu este stabilit în România,
                  indiferent dacă este sau nu înregistrat în scopuri de TVA în
                  România.
                </p>
                <p>
                  <strong>VII. Concluzie</strong>
                </p>
                <p>
                  În concluzie, operațiunea de neutralizare CMR nu este
                  interzisă de lege și poate reprezenta un instrument util
                  pentru protejarea secretelor comerciale cu ocazia
                  transportului. Însă, recomandarea generală este analiza polițe
                  de asigurare a transportatorului in aceste cazuri, precum și
                  stabilirea scopului exact al neutralizării pentru minimizarea
                  riscurilor de fraudă.
                </p>
              </>
            )}
            <button onClick={toggleExpand}>
              {expanded ? "Read less" : "Read more"}
            </button>
          </article>

          <article className="noutati-article">
            <div className="article-image">
              <img src={poza_justice} alt="Article" />
            </div>
            <h2>IMM Plus 2024</h2>
            {!expanded && (
              <p>
                Noul program, in curs de aprobare, IMM Plus 2024 reprezintă o
                continuare a măsurilor din fostul program IMM Invest Plus,
                început în 2020, în timpul pandemiei COVID-19...
              </p>
            )}
            {expanded && (
              <>
                <p>
                  Noul program, in curs de aprobare, IMM Plus 2024 reprezintă o
                  continuare a măsurilor din fostul program IMM Invest Plus,
                  început în 2020, în timpul pandemiei COVID-19. Acesta are un
                  buget propus de maximum 12,5 miliarde lei și se concentrează
                  pe asigurarea accesului la finanțare pentru firmele care nu
                  dispun de sumele necesare pentru proiectele de investiții și
                  pentru continuarea activității, până la 30 iunie 2024.
                  Programul este implementat prin Fondul Național de Garantare a
                  Creditelor pentru Întreprinderile Mici și Mijlocii (FNGCIMM),
                  Fondul Român de Contragarantare (FRC) și Fondul de Garantare a
                  Creditului Rural (FGCR). Comparativ cu programul anterior, IMM
                  Invest, acesta aduce o serie de modificări, inclusiv majorarea
                  valorilor maxime ale ajutoarelor de stat.
                </p>
                <p>
                  <strong>Componentele Programului IMM Plus includ:</strong>
                </p>
                <p>
                  <strong> IMM România Plus:</strong> Această componentă vizează
                  facilitarea accesului la finanțare pentru IMM-uri, inclusiv
                  pentru profesioniști, care au nevoie de resurse financiare
                  pentru investiții sau pentru capital de lucru. Prin
                  intermediul acestei componente, IMM-urile pot accesa credite
                  pentru a-și dezvolta afacerile, fie pentru investiții în
                  echipamente noi sau în extinderea infrastructurii, fie pentru
                  acoperirea nevoilor curente de finanțare.
                </p>
                <p>
                  <strong>AGRO Plus:</strong>Cu accent pe sectorul agricol,
                  pescuit, acvacultură și industria alimentară, această
                  componentă oferă sprijin financiar pentru IMM-urile care
                  activează în aceste domenii. Acest sprijin poate fi sub forma
                  de credite pentru investiții în utilaje agricole moderne,
                  construcția de spații de depozitare sau modernizarea
                  proceselor de producție pentru a spori eficiența și
                  competitivitatea.
                </p>
                <p>
                  <strong>IMM Prod Plus</strong>Această componentă se
                  concentrează pe susținerea sectorului productiv, oferind
                  garanții guvernamentale pentru lichidități și investiții.
                  Aceasta poate fi deosebit de utilă pentru IMM-urile care
                  operează în industrii precum producția, prelucrarea sau
                  fabricarea, ajutându-le să-și finanțeze proiectele și să-și
                  mențină fluxurile de numerar într-o stare sănătoasă.
                </p>
                <p>
                  <strong>Construct Plus:</strong>Într-o lume tot mai preocupată
                  de sustenabilitate și eficiență energetică, această componentă
                  vine în sprijinul IMM-urilor din sectorul construcțiilor
                  pentru a investi în tehnologii și practici mai ecologice. Prin
                  acordarea de garanții guvernamentale, se încurajează
                  implementarea de soluții care reduc amprenta de carbon și
                  promovează utilizarea energiilor regenerabile.
                </p>
                <p>
                  <strong>Rural Plus:</strong>Această componentă este esențială
                  pentru susținerea mediului rural, oferind facilități de
                  garantare pentru creditele acordate fermierilor și
                  întreprinderilor din sectorul agricol și alimentar. Aceasta
                  poate contribui la modernizarea exploatațiilor agricole,
                  îmbunătățirea infrastructurii rurale și diversificarea
                  activităților economice în zonele rurale.
                </p>
                <p>
                  <strong>Innovation Plus:</strong>Cu accent pe inovație și
                  export, această componentă încurajează dezvoltarea și
                  internaționalizarea companiilor inovatoare din România. Prin
                  acordarea de garanții guvernamentale, se stimulează
                  investițiile în cercetare și dezvoltare, precum și promovarea
                  produselor și serviciilor românești pe piețele internaționale.
                  Aceste componente reflectă diversele nevoi și domenii în care
                  IMM-urile și întreprinderile mici pot beneficia de sprijin
                  financiar și garanții guvernamentale pentru a-și dezvolta
                  afacerile.
                </p>
              </>
            )}
            <button onClick={toggleExpand}>
              {expanded ? "Read less" : "Read more"}
            </button>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Noutati;
