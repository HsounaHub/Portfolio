import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Hsouna </span>
            from <span className="purple"> Kelibia, Tunisia.</span>
            <br />
            I am a Mechatronics Engineer with a background in FullStack Web Development in Python , MERN and Java. I am interested in biomedical devices, so I would like to immerse myself more in the field of semiconductors and electronic components so I can build my knowledge from scratch.

            <br />
            As a person, I tend to be the kind that works hard, tries new things, and dreams big. Leading myself and others through equanimity in facing challenges, I became more reflective, determined, and composed under pressure...

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ali Hsouna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
