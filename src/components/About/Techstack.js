import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiPython,
  DiJavascript1,
  DiCode,
  DiBootstrap,
  DiJqueryLogo,
} from "react-icons/di";
import {
  SiRedis,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifayContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
    </Row>
  );
}

export default Techstack;
