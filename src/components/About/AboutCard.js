import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">


          
          <p style={{ textAlign: "justify" }}>
            My name is Godson Ajodo from Nigeria. 
            I am a Computer Science and Artificial Intelligence student at <span className = "school"> <a href ="https://www.minerva.edu/">Minerva University</a> </span>
            <br /> 
            I am a 2x Data Engineer Intern at Microsoft.
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (CODM, FIFA)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Animes and Reading Comics
            </li>
          </ul>

  
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
