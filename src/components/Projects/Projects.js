import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restaurant from "../../Assets/Projects/restaurant.png";
import chess from "../../Assets/Projects/chess.png";
import sparkle from "../../Assets/Projects/sparkle.png";
import dataengineering from "../../Assets/Projects/dataengineering.png";
import medibot from "../../Assets/Projects/medibot.png";
import NASASpaceApps from "../../Assets/Projects/NASASpaceApps.png";
import TodoList from "../../Assets/Projects/TodoList.png";
import gameexp from "../../Assets/Projects/gameexp.png";
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
              imgPath={NASASpaceApps}
              isBlog={false}
              title="NASA Space Apps"
              description="*Back to the Present* is an interactive climate change game designed to educate players on the environmental consequences of human actions. Using real-world data and machine learning models built with TensorFlow, Keras, and Scikit-Learn, the game simulates how choices around tree planting, travel, and energy consumption affect global greenhouse gas emissions. Dynamic gameplay is enhanced by LLaMA 3.2, which generates unique text-based scenarios based on player inputs, creating an immersive and personalized experience. The project aims to simplify complex climate issues and empower players to take meaningful actions toward a sustainable future."
              ghLink="https://github.com/Ajodo-Godson/NASASpaceAppsChallenge2024"
              demoLink="https://youtu.be/X7NGAlDm5vQ"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodoList}
              isBlog={false}
              title="Todo List"
              description="This project is a full-stack web application, built in my CS162 class, that enables users to manage tasks hierarchically. It features user authentication for secure access, allowing users to create, update, and delete to-do lists, tasks, and subtasks organized in a nested structure up to three levels deep. Users can toggle task completion status and enjoy a responsive user interface built with React. The application provides a comprehensive task management system with an intuitive and user-friendly design."
              ghLink="https://github.com/Ajodo-Godson/Hierarchical-To-Do-List"
              demoLink="https://www.loom.com/share/372c4d84f3e84d37b2d4ddf5e3f8a701?sid=42610339-75b6-4a84-8df5-89c31a539332"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameexp}
              isBlog={false}
              title="Game Explorer"
              description="Game Explorer is a web application that contains a collection of simple games like Tic-tac-toe, guess the number, Minesweeper, etc. It is built with React and uses the React Router library for navigation. The application provides a comprehensive game library with an intuitive and user-friendly design."
              ghLink="https://github.com/Ajodo-Godson/gamexp/tree/main/gameexp"
              demoLink="https://gameexp.netlify.app/"
            />
          </Col>
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
