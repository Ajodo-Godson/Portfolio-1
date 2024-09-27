import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiDatabase,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
  DiSqllite,
  DiProlog,
} from "react-icons/di";
import {
  SiFlask,
  SiPostgresql,
  SiLatex,
  SiNumpy,
  SiOpencv,
  SiFastapi,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className = "stacknames" >
          C++
        </div>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className = "stacknames" >
          Python
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className = "stacknames" >
          Javascript
        </div>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
        <div className = "stacknames" >
          DB
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className = "stacknames" >
          React Js
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <div className = "stacknames" >
          OpenCV
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <div className = "stacknames" >
          Flask
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <div className = "stacknames" >
          FastApi
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className = "stacknames" >
          MongoDb
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className = "stacknames" >
          Git
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
        <div className = "stacknames" >
          LaTex
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div className = "stacknames" >
          Postgressql
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <SiNumpy/>
      <div className = "stacknames" >
          Numpy/Matplotlib
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <DiSqllite/>
      <div className = "stacknames" >
          Sqllite
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiMysql/>
      <div className = "stacknames" >
          MySql
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiProlog/>
      <div className = "stacknames" >
          Prolog
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
