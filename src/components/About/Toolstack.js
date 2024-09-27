import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiGooglecolab,
  SiOpenai,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        < SiKeras />
        <div className = "stacknames" >
          Keras
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className = "stacknames" >
          Keras
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className = "stacknames" >
          Keras
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <div className = "stacknames" >
          OpenAI
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className = "stacknames" >
          TensorFlow
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className = "stacknames" >
          Jupyter Notebook
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <div className = "stacknames" >
          Colab
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
