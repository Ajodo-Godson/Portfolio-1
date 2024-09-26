import React from "react";
import Card from "react-bootstrap/Card";

function PersonalMissionStatement() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
I am <span className="purple">committed to lifelong learning and growth, </span>  
constantly challenging myself to <span className="purple">explore new areas 
of knowledge and sharpen my problem-solving skills.</span> Through my passion for mathematics, chess, 
and competitive programming, I seek to <span className="purple">
expand my intellectual boundaries and inspire 
others </span> to embrace the beauty of analytical thinking and perseverance. </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default PersonalMissionStatement;
