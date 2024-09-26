import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chess from "../../Assets/Projects/chess.png";
import sparkle from "../../Assets/Projects/sparkle.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/Ajodo-Godson/Chess_AI"
              demoLink="https://drive.google.com/file/d/1mXLa1YxlMfwv8H_Z-m8ROLZ3NHVY8Mei/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
