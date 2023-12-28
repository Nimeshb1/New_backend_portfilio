import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Study = () => {
  const education = [
    {
      date: "2015 /S.L.C",
      subtitle: "Complated Secondary Level Education",
    },
    {
      date: "2017 /+2",
      subtitle: "Complated Higher Level Education",
    },
    {
      date: "2020 /Diploma",
      subtitle: "Graduate Diploma In Information Technology ",
    },
    {
      date: "2023 /Bachelor",
      subtitle: "Graduate Bachlore In Information Technology ",
    },
  ];
  return (
    <div className="secRow2">
      <Container>
        <Row>
          <Col
            className="col-lg-6 col-sm-12"
            style={{
              display: "grid",
              marginTop: "15rem",
            }}
          >
            {" "}
            <div className="text textposition">
              <h4 className="text-white">
                <span className="text-primary "> / </span> {""}Study &
                Certificate
              </h4>
              <p></p>
              <h2 className="skillText">Check out My Education </h2>
            </div>
          </Col>
          <Col
            style={{
              display: "grid",
              marginTop: "15rem",
            }}
          >
            {education.map((item) => (
              <div className="wrapdiv">
                <div
                  className="date text-white "
                  style={{ fontSize: "2rem", WebkitTextStroke: "1px" }}
                >
                  {item.date}
                </div>
                <div className="subtitle text-white mt-3">
                  <h3>{item.subtitle}</h3>
                  <hr className="mt-5" />
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Study;
