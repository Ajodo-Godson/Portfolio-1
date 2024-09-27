import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import experiences from "./experienceData";
import ExperienceCard from "./Experiencecard";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </Container>
    </Container>
  );
}

export default Experience;
