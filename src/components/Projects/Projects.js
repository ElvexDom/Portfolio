import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import butterflies from "../../Assets/Projects/Butterflies.jpg";
import blockchain from "../../Assets/Projects/Blockchain.jpg";
import weather from "../../Assets/Projects/Weather.jpg";
import quizz from "../../Assets/Projects/Quizz.jpg";
import hug from "../../Assets/Projects/Hug.jpg";
import buddy from "../../Assets/Projects/Buddy.jpg";
import shop from "../../Assets/Projects/Shop.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>Récents 
        </h1>
        <p style={{ color: "white" }}>
          Voici différents projets sur lesquels je travaille
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddy}
              isBlog={false}
              title="Buddy"
              description="Ce programme basé sous Ionic-Svelte, permet d'intéragir avec le SDK Android du robot à travers une API REST."
              ghLink="https://github.com/ElvexDom/formation-python-HUG-API-and-Ionic-Svelte.git"
              demoLink="https://elvex-domotique.fr/wp-content/uploads/2024/05/Buddy.mp4"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={butterflies}
              isBlog={false}
              title="Thunder Butterflies"
              description="Ce programme basé sous AngularJS pour une course de chevaux permet d'inscrire des participants avec différents paramètres et d'afficher leurs résultats finaux."
              ghLink="https://github.com/ElvexDom/Thunder_Butterflies.git"
              demoLink="https://butterflies.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="BlockChain"
              description="Ce programme basé sous ReactJS et HardHat permet d'interagir avec des smart contracts en Solidity, dans le but de déployer, lire et écrire des données sur la blockchain Sepolia."
              ghLink="https://github.com/ElvexDom/Sepolia.git"
              // demoLink="https://sepolia.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop"
              description="Ce programme basé sous AngularJS est un prototype minimal basé sur des données statistiques qui permet d'ajouter des articles dans un panier."
              ghLink="https://github.com/ElvexDom/WorkShop.git"
              demoLink="https://workshop.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Life"
              description="Ce programme basé sous JavaScript utilise l'api d'OpenWeather et permet de connaître les informations instantanées de la météo en un lieu donné."
              ghLink="https://github.com/ElvexDom/Weather_Life.git"
              demoLink="https://weather.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hug}
              isBlog={false}
              title="Hug Api Rest"
              description="Ce programme basé sous Python, démarre un serveur qui permet d'éxécuter des requêtes HTTP avec Token ou Api-key dans l'entête HTML"
              ghLink="https://github.com/ElvexDom/Hug.git"
              // demoLink="https://hug.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizz}
              isBlog={false}
              title="Quizz"
              description="Ce programme basé sous NodeJS utilise le module express et permet de participer à un questionnaire sur l'alimentation."
              ghLink="https://github.com/ElvexDom/Quizz.git"
              // demoLink="https://quizz.elvex-domotique.fr"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
