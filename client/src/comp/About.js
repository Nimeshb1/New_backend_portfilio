import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = ({ project }) => {
  const [years, stryear] = useState();
  const date = new Date();

  const year = date.getFullYear();
  useEffect(() => {
    stryear(year.toString());
  }, []);

  return (
    <div className="secRow text-white" style={{ overflow: "hidden" }}>
      <Container>
        <Row>
          <Col
            style={{
              display: "grid",
              marginTop: "10rem",
            }}
          >
            <div className="text">
              <h4 className="text-white">
                <span className="text-primary "> / </span> {""}About
              </h4>
              <p></p>
              <h2>
                I've been developing <p></p> websites since 2022
              </h2>
              <p></p>
              <h6 className="text-white">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </h6>
            </div>
          </Col>
          <Col className="aboutcol2">
            {" "}
            <div className="text abouttext ">
              <div className="exp d-flex">
                <h2 style={{ fontSize: "5rem" }}>{years - 2022}</h2>{" "}
                <div className="midText mt-3 mx-2">
                  <h3 className="">Years of</h3>
                  <h3>experience</h3>
                </div>
                <h2
                  className="ms-lg-5 ms-md-5 ms-sm-5 ms-2"
                  style={{ fontSize: "5rem" }}
                >
                  {project.length}
                </h2>{" "}
                <div className="midText mt-3  mx-2">
                  <h3 className="">Successful</h3>
                  <h3>Project</h3>
                </div>
              </div>

              <h6 className="mt-5 text-white">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="text-white mb-5" />
            <div
              className="pastWork text-white d-lg-flex d-md-flex justify-content-between text-center"
              style={{
                marginBottom: "3rem",
              }}
            >
              <h4>PREVIOUSLY WORKED ON</h4>
              <h4>Google</h4>
              <h4>facebook</h4>
              <h4>Youtube</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
