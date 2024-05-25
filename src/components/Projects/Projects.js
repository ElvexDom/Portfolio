import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import horse from "../../Assets/Projects/Horse.jpg";
import blockchain from "../../Assets/Projects/Blockchain.jpg";
import weather from "../../Assets/Projects/Weather.jpg";
import quizz from "../../Assets/Projects/Quizz.jpg";
import hug from "../../Assets/Projects/Hug.jpg";
import buddy from "../../Assets/Projects/Buddy.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddy}
              isBlog={false}
              title="Buddy"
              description="Ce programme basé sous Python, démarre un serveur qui permet d'éxécuter des requêtes mqtt à travers une API REST"
              ghLink="https://github.com/ElvexDom/formation-python-HUG-API-and-Ionic-Svelte.git"
              demoLink="https://elvex-domotique.fr/wp-content/uploads/2024/05/Buddy.mp4"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horse}
              isBlog={false}
              title="Thunder Butterflies"
              description="Ce programme basé sous AngularJS pour une course de chevaux permet d'inscrire des chevaux avec différents paramètres et d'afficher leurs résultats finaux."
              ghLink="https://github.com/ElvexDom/Thunder_Butterflies.git"
              demoLink="https://butterflies.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="BlockChain"
              description="Ce programme basé sous ReactJS permet d'interagir avec des smart contracts en Solidity, dans le but de déployer, lire et écrire des données sur la blockchain Sepolia."
              ghLink="https://github.com/ElvexDom/Sepolia.git"
              demoLink="https://sepolia.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizz}
              isBlog={false}
              title="Quizz"
              description="Ce programme basé sous NodeJS, utilisant le module express, permet de participer à un questionnaire sur l'alimentation."
              ghLink="https://github.com/ElvexDom/Quizz.git"
              demoLink="https://quizz.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Life"
              description="Ce programme basé sous JavaScript, utilisant l'api d'OpenWeather, permet de connaître les informations instantanées de la météo en un lieu donné."
              ghLink="https://github.com/ElvexDom/Weather_Life.git"
              demoLink="https://weather.elvex-domotique.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hug}
              isBlog={false}
              title="Hug Api Rest"
              description="Ce programme basé sous Python, démarre un serveur qui permet d'éxécuter des requêtes mqtt à travers une API REST"
              ghLink="https://github.com/ElvexDom/Hug.git"
              demoLink="https://hug.elvex-domotique.fr"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
