import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiPostman,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiIntellijidea,
  SiMicrosoftexcel,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

function Toolstack() {
  const toolIcons = [
    <SiVisualstudiocode />,
    <SiVercel />,
    <SiPostman />,
    <SiGit />,
    <SiGithub />,
    <SiDocker />,
    <SiAmazonaws />,
    <SiIntellijidea />,
    <SiMicrosoftexcel />,
    <SiPostgresql />,
    <SiMysql />,
    <DiMongodb />,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolIcons.map((icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
