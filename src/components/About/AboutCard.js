import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous! Je suis <span className="purple">Nicolas BERTRAND </span>
            <br />
            Je suis actuellement en formation chez "Simplon"
            et recherche activement une alternance à partir du mois d'Aout.
            <br />
            Ayant un niveau intermédiaire en programmation, je connais toutefois mes classiques comme le C++, Javascript et Python.
            <br />
            <br />
            Mes domaines d'intérêt sont la création de nouvelles technologies et produits Web
            ainsi que :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Le Machine Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> La BlockChain
            </li>
            <li className="about-activity">
              <ImPointRight /> Les objets connectés
            </li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            En dehors du code, voici également les différentes activités auxquelles je m'intéresse :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les Sciences
            </li>
            <li className="about-activity">
              <ImPointRight /> La philosophie
            </li>
            <li className="about-activity">
              <ImPointRight /> L'aviation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;