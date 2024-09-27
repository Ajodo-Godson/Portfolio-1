import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restaurant from "../../Assets/Projects/restaurant.png";
import chess from "../../Assets/Projects/chess.png";
import sparkle from "../../Assets/Projects/sparkle.png";
import dataengineering from "../../Assets/Projects/dataengineering.png";
import medibot from "../../Assets/Projects/medibot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sparkle}
              isBlog={false}
              title="Sparkle"
              description="Sparkle, a game project at the CalHacks 9.0, draws inspiration from the addictive nature of the popular idle game, Cookie Clicker. Recognizing the immense appetite for mobile gaming and the market's thirst for top-notch web3 services, we envisioned using a mobile game as a dynamic medium to fulfill this mission."
              ghLink="https://github.com/Ajodo-Godson/Sparkle"
              demoLink="https://devpost.com/software/sparklers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medibot}
              isBlog={false}
              title="Medibot"
              description="Another team project at an Hackathon, where we applied conversational AI technology such as chatbots to benefit people, especially those who may be underprivileged or underserviced in the healthcare industry, especially when it comes to describing their ailments (which they do vaguely) to a medical practicitioner. This project helped in bridging that difficult by continously asking clarifying questions and slims it down to a medical term. I worked partly on the Backend, where I focused on the NLP algorithm where I used OpenAI for prompt engineering and sentiment analysis and Hugging Face API for similarity tests."
              ghLink="https://github.com/Ajodo-Godson/MediBot"
              demoLink="https://devpost.com/software/medibot-iq8lf0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess AI"
              description="Designed a chess engine using generic algorithms like Alpha-Beta pruning, Iterative Deepening and quiescence search. I used PyQt5 for the gaming interface. "
              ghLink="https://github.com/Ajodo-Godson/Chess_AI"
              demoLink="https://drive.google.com/file/d/1mXLa1YxlMfwv8H_Z-m8ROLZ3NHVY8Mei/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Recommendation System (CS152 Project"
              description="Worked in a group of four to design a Restaurant recommendation system in Berlin, Germany. We used PROLOG for the logical relationships between objects, predicates and functions. I was in charge of building the GUI. I used PyQT5 for designing the desktop application. "
              ghLink="https://github.com/Ajodo-Godson/CS152_LBA"
              demoLink="https://github.com/Ajodo-Godson/CS152_LBA/raw/main/Resources/Demo.gif/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataengineering}
              isBlog={false}
              title="Microsoft: Data Engineer"
              description="Built Pipelines to automate the process of data collection, cleaning, and other flows among multiple data stores and vendors at Microsoft. I also Wrote scripts to assist the pipeline and internal tools and data processing while Working with the gaming for sustainability engineering team in providing quality and updated data to the modeling team toproduce prediction models used to make informed decisions"
               // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
