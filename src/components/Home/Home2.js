import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
                Right from High school, I've always been interested 
                in Mathematics and Competitive Programming. Even Participated in a couple 
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
                So I decided to take up Data Science/ML/AI, since It's closely related to my interest in Maths and optimization in general. 
                <br/>
                My current field of Interest's are &nbsp;
                <i>
                  <b className="green">AI/ML, game development, Software Engineering (Backend development). </b> and
                  also {" "}
                  <b className="purple">
                    Competitive Programming (active mainly on Leetcode).
                  </b>
                </i>
                <br />
                <br />
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
