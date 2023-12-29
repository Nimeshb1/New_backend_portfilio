import React from "react";
import img from "../img/profile.png";
import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="wrapper text-white">
          <Row className="herorow d-lg-flex d-grid d-md-flex ">
            <Col
              className="herpCol1 col-md-6 col-sm-12 col-lg-9 text-white "
              style={{
                display: "grid",
                marginTop: "6rem",
                alignItems: "center",
              }}
            >
              <div className="text ">
                <div className="borders"></div>
                <h1 className="w-100 ">
                  {" "}
                  I'm Nimesh, a <p></p> Web Developer
                </h1>
                <p></p>
                <h6>
                  "I am a software engineer, dedicated to crafting elegant
                  <p></p> solutions through code and consistently pushing the
                  boundaries of <p></p> innovation in the digital realm."
                </h6>
                <div className="circle mb-lg-5 mb-md-5">
                  {" "}
                  <span className="let"> V</span>
                </div>
              </div>

              <div className="profileimg"></div>
            </Col>
            <Col
              className="col-lg-3   text-white"
              style={{
                marginTop: "3rem",
              }}
            >
              <div className="textLeft">
                {" "}
                <div className="text2  ">
                  <h4>ABOUT ME</h4>
                  <h6>
                    I am a reliable, honest, and responsible person, who has
                    lots to offer in terms of enthusiasm for life with the
                    ability to bring high standards to the workplace. Looking
                    forward to an opportunity to work within an organization
                    that will enable me to use my skills, energy and creativity
                    to contribute to the company's growth.
                  </h6>
                </div>
                <div className="bordertext mt-5 "></div>
              </div>
              <hr />
              <div className="textLeft">
                {" "}
                <div className="text2">
                  <h4>My Work</h4>
                  <h6>
                    As an IT worker, my role revolves around managing network
                    infrastructure, providing technical support, ensuring data
                    security, and driving technological advancements for the
                    organization's success in the digital age. I prioritize
                    efficient operations, robust cybersecurity measures, and
                    continuous learning to harness technology's power
                    effectively.
                  </h6>
                </div>
                <div className="bordertext mt-5"></div>
                <hr />
                <div className="text2">
                  <h4>FOLLOW ME</h4>
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <a href="https://facebook.com/ne.mesh.5">
                      <i class="fa-brands fa-facebook text-white"></i>{" "}
                    </a>
                    <a href="https://x.com/nimeshbista5">
                      <i class="fa-brands fa-twitter text-white"></i>{" "}
                    </a>
                    <a href="https://instagram.com/ne.mesh">
                      <i class="fa-brands fa-instagram text-white"></i>
                    </a>
                    <a href="https://github.com/Nimeshb1">
                      <i class="fa-brands fa-github text-white"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nimesh-bista-3944b019b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ">
                      {" "}
                      <i class="fa-brands fa-linkedin text-white"></i>
                    </a>
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
