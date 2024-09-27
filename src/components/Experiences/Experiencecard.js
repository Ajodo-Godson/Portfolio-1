// src/Components/Experience/ExperienceCard.js

import React from "react";
import { Row, Col } from "react-bootstrap";

function ExperienceCard({ exp }) {
  return (
    <Row className="experience-item">
      <Col md={4} className="experience-company">
        <h3>{exp.company}</h3>
        <p>{exp.date}</p>
      </Col>
      <Col md={8} className="experience-details">
        <h4>{exp.role}</h4>
        <ul>
          {exp.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}

export default ExperienceCard;
