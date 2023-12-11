import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiSqlite,
  SiApachespark,
  SiPandas,
  SiNumpy,
  SiJava,
  SiSpring,
  SiBootstrap,
  SiJquery,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPytorch,
  SiTidyverse,
  SiC,
  Sicplusplus,
  SiGolang,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function Techstack() {
  const techIcons = [
    <SiPython />,
    <SiSqlite />,
    <SiApachespark />,
    <SiPandas />,
    <SiNumpy />,
    <SiJava />,
    <SiSpring />,
    <SiBootstrap />,
    <SiJquery />,
    <SiJavascript />,
    <SiHtml5 />,
    <SiCss3 />,
    <SiPytorch />,
    <SiTidyverse />,
    <SiC />,
    <Sicplusplus />,
    <SiGolang />,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {icon}
        </Col>
      ))}
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>
    </Row>
  );
}

export default Techstack;
