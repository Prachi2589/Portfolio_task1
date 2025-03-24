import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
        // Main container for the About section
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              {/* Left column containing the text description */}
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 {/* Introduction about Prachi Jain */}
                 Hello! I'm<span className="yellow"> Prachi Jain , </span>
                 a passionate Full-Stack Web Developer and a Computer Science Engineering <span className="yellow">graduate with a specialization in Health Informatics</span> at VIT Bhopal University.
                <br />
                <br />
                {/* Mentioning interest in healthcare technology */}
                I have a deep interest in leveraging my technical expertise to develop innovative solutions that enhance the accessibility and efficiency of healthcare systems.
                
                <br />
                <br />
                {/* Highlighting full-stack development expertise */}
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />
                  {/* Mentioning technical skills */}
                  I am proficient in
                    <b className="yellow"> C++ programming language, </b>
                    and have extensive knowledge of  <br/> 
                  <b className="yellow"> HTML, CSS, React.js, JavaScript, and SQL.</b>
                  <br />
                  <br />
                  {/* Mentioning backend skills */}
                  I have a passion for working
                  with <b className="yellow">Node.js, MongoDB,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  {/* Highlighting preference for frontend development */}
                  I have hands-on experience in both front-end and back-end development, with a strong inclination toward front-end technologies, particularly React.js.
                  <i>
                    <b className="yellow"> However, my strength lies in frontend development with React.js, </b>
                    I also completed a MERN Full-Stack internship
                    <b className="yellow"> at Ethnus Codemithra.</b>
                  </i>
                  <br />
                  {/* Conclusion statement */}
                  I am always eager to learn and collaborate on projects that push the boundaries of technology
                  
                </p>
              </Col>
              {/* Right column containing the avatar image */}
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  {/* GitHub Profile Link */}
                  <li className="social-icons">
                    <a
                      href="https://github.com/Prachi2589"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  {/* LinkedIn Profile Link */}
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/prachi-jain-4a7031212/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                  {/* Instagram Profile Link */}
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/ajmera_prachi1512/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default About
