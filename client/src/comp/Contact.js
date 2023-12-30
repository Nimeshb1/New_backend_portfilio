import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  const fomobj = [
    {
      name: "name",
      placeholder: " Enter Your Name",
      type: "text",
    },
    {
      name: "email",
      placeholder: " Enter Your Email",
      type: "email",
    },
  ];
  return (
    <div className="secRow">
      <Container>
        <Row>
          <Col
            className="col-lg-6 col-sm-12 "
            style={{
              display: "grid",
              marginTop: "15rem",
            }}
          >
            <div className="text textposition">
              <div className="borde"></div>
              <h2 className="skillText ">
                Interested in working together?{" "}
                <p>
                  Let's talk{" "}
                  <span style={{ WebkitTextStroke: "0px" }}>
                    {" "}
                    <i class="fa-solid fa-arrow-right text-primary"></i>
                  </span>
                </p>
              </h2>
            </div>
          </Col>
          <Col
            style={{ display: "grid", alignItems: "center", padding: "2rem" }}
          >
            <Form style={{ marginTop: "10rem" }}>
              {fomobj.map((item) => (
                <input
                  key={item.type}
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  style={{
                    borderBottom: "3px solid white",
                    background: "none",
                    borderRight: "transparent",
                    borderLeft: "transparent",
                    borderTop: "transparent",
                    outline: "none",
                    color: "white",
                    width: "100%",
                    fontSize: "1.3rem",
                    paddingBottom: "2rem",
                    marginBottom: "2rem",
                    marginTop: "3rem",
                  }}
                />
              ))}
              <textarea
                placeholder="Describe About Project"
                style={{
                  borderBottom: "3px solid white",
                  background: "none",
                  borderRight: "transparent",
                  borderLeft: "transparent",
                  borderTop: "transparent",
                  outline: "none",
                  color: "white",
                  width: "100%",
                  fontSize: "1.3rem",
                  paddingBottom: "2rem",
                  marginBottom: "2rem",
                  marginTop: "3rem",
                }}
              />
              <button
                style={{
                  background: "none",
                  borderBottom: "3",
                  color: "white",
                  outline: "0px",
                  borderBottom: "3px solid white",
                }}
              >
                {" "}
                <h4 className=" d-flex gap-2">
                  Contact Me<i class="fa-solid fa-arrow-right mt-1"></i>{" "}
                </h4>
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
