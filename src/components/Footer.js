import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsDiscord } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <h2><Row>
        <Col md="4" className="footer-copywright">
          <h3>RETROUVEZ-MOI</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ElvexDom"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.gg/7sCQy9PNsq"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nicolas-bertrand-2123a330b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
      </Row>
      </h2>
    </Container>
  );
}

export default Footer;