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
            Je possède de bonnes connaissances en programmation, ce qui me permet de bien connaître mes classiques
            <br />
            Je maîtrise également les langages comme le C++, le Javascript et le Python.
            <br />
            <br />
            Mes domaines d'intérêt sont la création de nouvelles <span className="purple">technologies</span> et produits <span className="purple">Web</span>, ainsi que :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Le Machine Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> La BlockChain
            </li>
            <li className="about-activity">
              <ImPointRight /> Les Objets Connectés
            </li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            En dehors du code, voici également les différentes <span className="purple">activités</span> auxquelles je m'intéresse :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les Sciences
            </li>
            <li className="about-activity">
              <ImPointRight /> La Philosophie
            </li>
            <li className="about-activity">
              <ImPointRight /> L' Aviation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;