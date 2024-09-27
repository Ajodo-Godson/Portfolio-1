import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import experienceImg from "../../Assets/experience.png"; 


function Home2() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}> 


      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Here are some quick <span className="purple"> FACTS </span> About Myself
              </h1>
              <p className="home-about-body">
                Since High school, I've always been interested 
                in Mathematics and Competitive Programming - even participated in a couple 
                of Online and In-person contests 🤓
                <br />
                <br /> My first languages are 
                <i>
                  <b className="purple"> C++, C, Python, Java (A bit of this) in respective order. </b>
                </i>
                <br/>
                As you've guessed, those are the popular languages used in Competitive Programming. 

                <br />
                <br />
                I kind of got bored of competitive programming, for a while, since I wasn't building actual stuffs. 
                So I decided to take up Data Science/ML/AI since It's closely related to my interest in Maths and optimization in general. 
                <br/>
                My current field of Interests are &nbsp;
                <i>
                  <b className="green">AI/ML, game development, Software Engineering (Backend development). </b> and
                  also {" "}
                  <b className="purple">
                    Competitive Programming (active mainly on <a href = "https://leetcode.com/u/Ajosonn/">Leetcode</a>).
                  </b>
                </i>
                <br />
                <br />
              </p>
            </Col>

             {/* City Experience Section */}
            <Col md={6} className="cityExperience p-4">
              <h1 className="heading">
                <strong className="purple">My  Travels</strong>
              </h1>
              <img
                src={experienceImg}
                alt="Experience"
                className="experience-image img-fluid"
              />
              <p className="experience-description">
                In my Sophomore year, I spent my Fall semester in South Korea. My time there was filled with a lot of experiences including going to the famous Gangnam style pose sculpture, having local barbecues with friends - those made at school and also at Korea. 
                Other wonderful moments include trying the lcoal dishes like Tteokbokki, Kimchi Stew, Jjajangmyeon, and every type of noodles. I also got to visit the Seoul Upcycling Plaza, where used products or objects were recycled to things of higher values. 
              </p>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Contact Me</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home2;
