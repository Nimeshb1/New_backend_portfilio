import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../img/profile.png";

export const Footer = () => {
  return (
    <div className="secRow2 mt-1">
      <Container>
        <Row>
          <Col className="col-lg-6 mt-5 d-flex  ">
            <div className="iconwrapper">
              <div className="footerimg">
                <img src={img} alt="" height={300} />
              </div>
            </div>
            <div className="footertext mt-5 mx-3">
              <div className="heding text-white">
                <h2 style={{ WebkitTextStroke: "1px", fontSize: "2.5rem" }}>
                  Nimesh Bista
                </h2>
                <h2 className="text-white">Software Engineer</h2>
              </div>
              <div
                className="icones"
                style={{
                  fontSize: "2rem",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                }}
              >
                <a href="google.com">
                  {" "}
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="google.com">
                  {" "}
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="google.com">
                  {" "}
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="google.com">
                  {" "}
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="google.com">
                  {" "}
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col className="mt-5">
            <div className="gettouch text-white " style={{ marginTop: "3rem" }}>
              <h1>
                Get in touch <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </div>
            <div className="tworow d-lg-flex d-md-flex justify-content-between">
              <div className="email ">
                <div className="title text-white mb-2 mt-5"> EMAIL ME:</div>
                <div className="textarea text-white">
                  {" "}
                  <h4> Nimeshbista164@gamil.com</h4>
                </div>
              </div>
              <div className="phone ">
                <div className="title text-white  mb-2 mt-5"> CALL ME:</div>
                <div className="textarea text-white">
                  <h4> {"(+61) 410 949 120"}</h4>{" "}
                </div>
              </div>
            </div>
          </Col>
          <hr className="text-white mt-5" />
          asdfdsafdsaf
        </Row>
      </Container>
    </div>
  );
};
