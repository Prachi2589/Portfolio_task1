import React from "react";
import { Col, Row } from "react-bootstrap"; // Importing Bootstrap grid components
import { DiJavascript1, DiReact, DiNodejs } from "react-icons/di"; // Importing developer icons
import { SiMongodb, SiHtml5 } from "react-icons/si"; // Importing technology icons

// Techstack component displays a list of technologies using icons
const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Each Col represents a technology with an icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> {/* HTML5 Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {/* Node.js Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React.js Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb /> {/* MongoDB Icon */}
      </Col>
    </Row>
  );
};

export default Techstack; // Exporting Techstack component
