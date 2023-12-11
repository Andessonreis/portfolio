import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Andesson Reis </span>
            from <span className="purple"> Bahia, Brazil.</span>
            <br />
            I am a Data Engineer and currently studying at the Federal Institute of Education,
            Science, and Technology (IFBA).
            <br />
            <br />
            Apart from working with data, some other activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to analyze and interpret the stories within data!"{" "}
          </p>
          <footer className="blockquote-footer">Andesson Reis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
